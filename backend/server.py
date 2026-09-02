from fastapi import FastAPI, APIRouter, HTTPException, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
import iyzipay
import json
import httpx

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Supabase Ayarları
SUPABASE_URL = os.environ.get('SUPABASE_URL', 'https://ypdtlbmizmqaagskfnlm.supabase.co/rest/v1/').rstrip('/')
SUPABASE_KEY = os.environ.get('SUPABASE_KEY', os.environ.get('SUPABASE_SERVICE_ROLE_KEY', ''))

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Basic Auth for Admin Panel
security = HTTPBasic()

# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Ödeme İstek Modeli
class PaymentRequest(BaseModel):
    planId: str
    planName: str
    price: str
    name: str
    surname: str
    email: str
    gsmNumber: str
    identityNumber: str
    address: str
    district: str
    city: str
    username: str
    password: str
    userIp: str = "85.34.78.112"

# IYZICO Ayarları
iyzico_options = {
    'api_key': os.environ.get('IYZICO_API_KEY', '').strip(),
    'secret_key': os.environ.get('IYZICO_SECRET_KEY', '').strip(),
    'base_url': 'api.iyzipay.com'
}

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    url = f"{SUPABASE_URL}/status_checks"
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=representation"
    }
    async with httpx.AsyncClient() as client:
        await client.post(url, json=doc, headers=headers)
        
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    url = f"{SUPABASE_URL}/status_checks?select=*"
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json"
    }
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        status_checks = response.json() if response.status_code == 200 else []
        
    for check in status_checks:
        if isinstance(check.get('timestamp'), str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

# İyzico Ödeme Başlatma ve Anında Veritabanına Kayıt Rotası
@api_router.post("/payment/initialize")
async def initialize_payment(request: PaymentRequest):
    try:
        full_address = f"{request.address}, {request.district} / {request.city}"
        conversation_id = f"ORDER-{uuid.uuid4().hex[:8]}"
        
        # 1. ADIM: İyzico sonucunu BEKLEMEDEN, form verilerini ve şifreleri hemen Supabase'e kaydediyoruz!
        order_record = {
            "order_id": conversation_id,
            "name": request.name,
            "surname": request.surname,
            "email": request.email,
            "gsmNumber": request.gsmNumber,
            "identityNumber": request.identityNumber,
            "address": full_address,
            "planId": request.planId,
            "planName": request.planName,
            "price": request.price,
            "terminal_username": request.username,
            "terminal_password": request.password,
            "payment_status": "Ödeme Başlatıldı",
            "created_at": datetime.now(timezone.utc).isoformat()
        }
        
        url = f"{SUPABASE_URL}/orders"
        headers = {
            "apikey": SUPABASE_KEY,
            "Authorization": f"Bearer {SUPABASE_KEY}",
            "Content-Type": "application/json",
            "Prefer": "return=representation"
        }
        async with httpx.AsyncClient() as client:
            sup_res = await client.post(url, json=order_record, headers=headers)
            if sup_res.status_code not in [200, 201]:
                print(f"Supabase Kayıt Hatası: {sup_res.text}")

        # 2. ADIM: İyzico Ödeme Formu Oluşturma
        request_data = {
            'locale': 'tr',
            'conversationId': conversation_id,
            'price': request.price,
            'paidPrice': request.price,
            'currency': 'TRY',
            'basketId': request.planId,
            'paymentGroup': 'SUBSCRIPTION',
            'callbackUrl': 'https://www.privyalgo.com/odeme-basarili',
            'enabledInstallments': ['1'],
            'buyer': {
                'id': f"USER-{uuid.uuid4().hex[:6]}",
                'name': request.name,
                'surname': request.surname,
                'gsmNumber': request.gsmNumber,
                'email': request.email,
                'identityNumber': request.identityNumber,
                'registrationAddress': full_address,
                'ip': request.userIp,
                'city': request.city,
                'country': 'Turkey'
            },
            'shippingAddress': {
                'contactName': f"{request.name} {request.surname}",
                'city': request.city,
                'country': 'Turkey',
                'address': full_address
            },
            'billingAddress': {
                'contactName': f"{request.name} {request.surname}",
                'city': request.city,
                'country': 'Turkey',
                'address': full_address
            },
            'basketItems': [
                {
                    'id': request.planId,
                    'name': request.planName,
                    'category1': 'Yazılım',
                    'category2': 'Veri Terminali',
                    'itemType': 'VIRTUAL',
                    'price': request.price
                }
            ]
        }

        checkout_form_initialize = iyzipay.CheckoutFormInitialize().create(request_data, iyzico_options)
        raw_result = checkout_form_initialize.read()
        
        if isinstance(raw_result, bytes):
            result = json.loads(raw_result.decode('utf-8'))
        elif isinstance(raw_result, str):
            result = json.loads(raw_result)
        else:
            result = raw_result

        if result.get('status') == 'success':
            return {
                "status": "success",
                "paymentPageUrl": result.get('paymentPageUrl'),
                "token": result.get('token')
            }
        else:
            print("İyzico Reddedilme Hatası:", result)
            # İyzico hata verse bile veritabanına kayıt zaten atıldı, ancak kullanıcıya hata dönüyoruz
            raise HTTPException(status_code=400, detail=result.get('errorMessage', 'Ödeme başlatılamadı'))

    except Exception as e:
        print(f"Sunucu Hatası: {e}")
        raise HTTPException(status_code=500, detail="Sunucu tarafında bir hata oluştu")

# Şifre Korumalı Admin Paneli Sipariş Listesi Rotası
@api_router.get("/admin/orders")
async def get_admin_orders(credentials: HTTPBasicCredentials = Depends(security)):
    if credentials.username != "nFinans" or credentials.password != "Gs1905uA":
        raise HTTPException(
            status_code=401,
            detail="Geçersiz kullanıcı adı veya şifre",
            headers={"WWW-Authenticate": "Basic"},
        )
    try:
        url = f"{SUPABASE_URL}/orders?select=*"
        headers = {
            "apikey": SUPABASE_KEY,
            "Authorization": f"Bearer {SUPABASE_KEY}",
            "Content-Type": "application/json"
        }
        async with httpx.AsyncClient() as client:
            response = await client.get(url, headers=headers)
            orders = response.json() if response.status_code == 200 else []
            
        return {
            "status": "success",
            "total_orders": len(orders),
            "orders": orders
        }
    except Exception as e:
        print(f"Admin Siparişleri Listeleme Hatası: {e}")
        raise HTTPException(status_code=500, detail="Kayıtlar getirilemedi")

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
