import React from "react";
import LegalLayout from "@/components/legal/LegalLayout";
import "@/components/legal/legal.css";

export default function MesafeliSatisSozlesmesi() {
  return (
    <LegalLayout
      title="Mesafeli Satış Sözleşmesi"
      eyebrow="PrivyAlgo Web Terminali · Yasal Bilgilendirme"
    >
      <p>
        İşbu Mesafeli Satış Sözleşmesi, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve 
        Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince düzenlenmiştir.
      </p>

      <h2>1. Taraflar</h2>
      <p>
        <strong>1.1. Satıcı Bilgileri:</strong><br />
        Unvanı: NFİNANS FİNANSAL BİLGİ TEKNOLOJİLERİ DANIŞMANLIK EĞİTİM VE TİCARET LİMİTED ŞİRKETİ<br />
        Adresi: YAZLIK YENİ MAH. TERMAL SK. A BLOK NO: 3 İÇ KAPI NO: 9 GÖLCÜK / KOCAELİ<br />
        E-posta: info@privyalgo.com<br />
        MERSİS No: 0631208828100001
      </p>
      <p>
        <strong>1.2. Alıcı (Tüketici) Bilgileri:</strong><br />
        Sistemimize kayıt olan ve üyelik satın alan kişi ("Alıcı") olarak anılacaktır. Alıcı'nın platformda
        belirttiği adres ve iletişim bilgileri esas alınır.
      </p>

      <h2>2. Sözleşmenin Konusu</h2>
      <p>
        İşbu Sözleşme'nin konusu, Alıcı'nın Satıcı'ya ait PrivyAlgo Web Terminalleri,Uygulamaları, platform 
        üzerinden elektronik ortamda siparişini verdiği abonelik ve dijital hizmetlerin satışı ve teslimi 
        ile ilgili olarak hak ve yükümlülüklerin saptanmasıdır.
      </p>

      <h2>3. Sözleşme Konusu Ürün/Hizmet</h2>
      <p>
        Hizmetin türü, süresi, paket özellikleri, satış bedeli ve ödeme şekli platform üzerinde 
        belirtildiği ve sipariş onay formunda yer aldığı gibidir. İşbu hizmet tamamen dijital ortamda 
        sunulan bir analiz, veri ve indikatör erişimi (yazılım hizmeti) hakkıdır.
      </p>

      <h2>4. Teslimat Şartları ve Şekli</h2>
      <p>
        Satın alınan abonelik/hizmet, ödemenin başarılı bir şekilde ödeme altyapısı üzerinden tahsil 
        edilmesinin ardından 24-48 saat içerinde dijital olarak teslim edilir. Alıcı'nın hesabına erişim yetkisi
        sistem tarafından otomatik olarak atanır. Herhangi bir fiziki kargo gönderimi yapılmayacaktır.
      </p>

      <h2>5. Cayma Hakkı ve Dijital İçerik İstisnası</h2>
      <p>
        <strong>Cayma Hakkının İstisnası:</strong> Mesafeli Sözleşmeler Yönetmeliği'nin 15. maddesinin
        (ğ) bendi uyarınca; elektronik ortamda anında ifa edilen hizmetler veya tüketiciye anında teslim 
        edilen gayrimaddi mallara ilişkin sözleşmelerde cayma hakkı kullanılamaz.
      </p>
      <p>
        PrivyAlgo platformundan satın alınan hizmetler, indikatörler, veri akışı erişimi ve dijital 
        kullanım hakları, anında teslim edilen ve ifa edilen dijital hizmetler kapsamında olduğundan,
        <strong> Alıcı'nın hizmeti satın alıp kullanmaya başlamasıyla birlikte cayma/iade hakkı 
        bulunmamaktadır.</strong>
      </p>

      <h2>6. Genel Hükümler</h2>
      <p>
        <strong>6.1.</strong> Alıcı, platformda belirtilen sözleşme konusu ürün/hizmetin temel 
        nitelikleri, satış fiyatı, ödeme şekli ve teslimat şartlarına ilişkin ön bilgileri okuyup bilgi 
        sahibi olduğunu elektronik ortamda onayladığını beyan eder.
      </p>
      <p>
        <strong>6.2.</strong> Kredi kartı ile yapılan ödemelerde, kartın yetkisiz kişilerce haksız 
        kullanımından doğan zararlardan Satıcı sorumlu tutulamaz. Altyapı iyzico (veya ilgili ödeme kuruluşu) 
        tarafından sağlanmaktadır.
      </p>

      <h2>7. Uyuşmazlıkların Çözümü</h2>
      <p>
        İşbu sözleşmenin uygulanmasında, Ticaret Bakanlığı'nca ilan edilen değere kadar Tüketici Hakem Heyetleri 
        ile Satıcı'nın veya Alıcı'nın yerleşim yerindeki Kocaeli Tüketici Mahkemeleri ve İcra Daireleri yetkilidir.
      </p>

      <div className="legal-note">
        Alıcı, işbu Sözleşme'deki tüm maddeleri okuduğunu, anladığını, kabul ettiğini ve verdiği bilgilerin 
        doğruluğunu onayladığını beyan ve taahhüt eder.
      </div>
    </LegalLayout>
  );
}
