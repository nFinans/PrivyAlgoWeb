import React from "react";
import LegalLayout from "@/components/legal/LegalLayout";
import "@/components/legal/legal.css";

export default function IadeIptalSartlari() {
  return (
    <LegalLayout
      title="İade ve İptal Şartları"
      eyebrow="PrivyAlgo Web Terminali · Yasal Bilgilendirme"
    >
      <p>
        NFİNANS FİNANSAL BİLGİ TEKNOLOJİLERİ DANIŞMANLIK EĞİTİM VE TİCARET LİMİTED ŞİRKETİ olarak 
        sunduğumuz PrivyAlgo Web Terminali, TradingView Algoritmaları ve Göstergeleri dijital bir 
        yazılım/abonelik hizmetidir.
      </p>

      <h2>1. İade ve Cayma Hakkının Kullanılamayacağı Haller</h2>
      <p>
        Satın almış olduğunuz hizmet, Mesafeli Sözleşmeler Yönetmeliği'nin 15. maddesinin birinci fıkrasının 
        (ğ) bendi ("Elektronik ortamda anında ifa edilen hizmetler veya tüketiciye anında teslim edilen 
        gayrimaddi mallara ilişkin sözleşmeler") kapsamındadır. 
      </p>
      <p>
        Bu sebeple; sistemimize abone olup dijital erişim hakkını (indikatörler, canlı veriler, algoritmalar)
        elde ettiğiniz andan itibaren <strong>iade (cayma hakkı) talep etmeniz mevzuat gereği mümkün değildir.</strong>
      </p>

      <h2>2. Abonelik İptal Şartları</h2>
      <p>
        <strong>2.1. İleriye Dönük İptal:</strong> Hizmetlerimiz aylık, üç aylık, 6 aylık veya yıllık abonelik 
        modelleriyle çalışmaktadır. Devam eden bir aboneliğiniz varsa, aboneliğinizi dilediğiniz zaman 
        kullanıcı panelinizden veya whatsapp hattından destek alarak iptal edebilirsiniz.
      </p>
      <p>
        <strong>2.2. Kullanım Hakkının Devamı:</strong> Aboneliğinizi iptal ettiğinizde, tahsilatı yapılmış 
        olan mevcut dönemin sonuna kadar platformu kullanmaya devam edersiniz. Bir sonraki fatura kesim 
        tarihinde kartınızdan yeni bir çekim yapılmaz ve erişiminiz dönem sonunda durdurulur.
      </p>
      <p>
        <strong>2.3. Geçmiş Dönem İadesi:</strong> Aboneliğinizi kullansanız da kullanmasanız da, süresi 
        başlamış olan veya geçmiş dönemlere ait ücretlerin iadesi yapılmamaktadır.
      </p>

      <h2>3. Hatalı Çekimler ve Teknik Aksaklıklar</h2>
      <p>
        Sistem kaynaklı bir hata sebebiyle kartınızdan mükerrer (çift) çekim yapılması veya hizmetin teknik
        bir sorun nedeniyle size hiç ulaştırılamaması durumlarında, tarafımızla iletişime geçmeniz halinde 
        gerekli inceleme yapılır. Sorunun bizden kaynaklandığının tespiti halinde mükerrer tutar 
        iyzico aracılığıyla kartınıza 3 ile 7 iş günü içerisinde iade edilir.
      </p>

      <h2>4. Hesabın Askıya Alınması veya Feshedilmesi</h2>
      <p>
        Üyelik Sözleşmesi'nde belirtilen kurallara uyulmaması (hesap paylaşımı, tersine mühendislik, vb.) 
        durumunda, NFİNANS hesabı tek taraflı feshetme hakkını saklı tutar. Kural ihlali nedeniyle kapatılan
        hesaplar için herhangi bir ücret iadesi yapılmaz.
      </p>

      <h2>5. İletişim</h2>
      <p>
        İptal işlemleri veya ödemeyle ilgili sorunlarınız için <strong>[destek@eposta-adresiniz.com]</strong> 
        adresine e-posta gönderebilir veya WhatsApp destek hattımızdan bize ulaşabilirsiniz.
      </p>

      <div className="legal-note">
        Sistemimize üye olan ve ödeme yapan tüm kullanıcılar, elektronik ortamda sunulan bu dijital hizmet için
        iade ve iptal şartlarını peşinen kabul etmiş sayılır.
      </div>
    </LegalLayout>
  );
}
