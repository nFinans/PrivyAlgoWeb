from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
import iyzipay

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

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
    'api_key': os.environ.get('IYZICO_API_KEY'),
    'secret_key': os.environ.get('IYZICO_SECRET_KEY'),
    'base_url': os.environ.get('IYZICO_BASE_URL')
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
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

# İyzico Ödeme Başlatma Rotası
@api_router.post("/payment/initialize")
async def initialize_payment(request: PaymentRequest):
    try:
        full_address = f"{request.address}, {request.district} / {request.city}"
        
        request_data = {
            'locale': 'tr',
            'conversationId': f"ORDER-{uuid.uuid4().hex[:8]}",
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
        result = checkout_form_initialize.read()

        if result.get('status') == 'success':
            return {
                "status": "success",
                "paymentPageUrl": result.get('paymentPageUrl'),
                "token": result.get('token')
            }
        else:
            print("İyzico Reddedilme Hatası:", result)
            raise HTTPException(status_code=400, detail=result.get('errorMessage', 'Ödeme başlatılamadı'))

    except Exception as e:
        print(f"Sunucu Hatası: {e}")
        raise HTTPException(status_code=500, detail="Sunucu tarafında bir hata oluştu")

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
