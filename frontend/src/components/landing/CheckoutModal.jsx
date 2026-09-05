import React, { useState } from "react";
import { X, ShieldCheck, ArrowRight, Loader2, AlertCircle, Settings, MessageCircle } from "lucide-react";

const COUNTRY_CODES = [
  { code: "+90", label: "Türkiye (+90)" },
  { code: "+1", label: "ABD / Kanada (+1)" },
  { code: "+44", label: "İngiltere (+44)" },
  { code: "+49", label: "Almanya (+49)" },
  { code: "+33", label: "Fransa (+33)" },
  { code: "+31", label: "Hollanda (+31)" },
  { code: "+994", label: "Azerbaycan (+994)" },
  { code: "+43", label: "Avusturya (+43)" },
  { code: "+32", label: "Belçika (+32)" },
  { code: "+41", label: "İsviçre (+41)" },
  { code: "+46", label: "İsveç (+46)" },
  { code: "+47", label: "Norveç (+47)" },
  { code: "+45", label: "Danimarka (+45)" },
  { code: "+358", label: "Finlandiya (+358)" },
  { code: "+34", label: "İspanya (+34)" },
  { code: "+39", label: "İtalya (+39)" },
  { code: "+30", label: "Yunanistan (+30)" },
  { code: "+971", label: "BAE (+971)" },
  { code: "+966", label: "Suudi Arabistan (+966)" },
  { code: "OTHER", label: "Diğer (Manuel Gir)" }
];

export default function CheckoutModal({ plan, onClose }) {
  // 🟢 CANLIYA GEÇİŞ ŞALTERİ 🟢
  // Gerçek ödeme almaya başlamak için bu değeri 'true' yapman yeterli!
  const IS_PAYMENT_ACTIVE = false;

  // --- FORM STATE VE FONKSİYONLARI ---
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    countryCode: "+90",
    manualCountryCode: "",
    gsmNumber: "",
    identityNumber: "",
    address: "",
    district: "",
    city: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!plan) return null;

  const isBist = plan.market === "BIST";
  const isHybrid = plan.market === "HYBRID";
  const accent = isHybrid ? "#a855f7" : isBist ? "#26a69a" : "#f59e0b";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)/;
    if (!passwordRegex.test(formData.password)) {
      setError("Terminal şifresi en az bir harf ve bir rakam içermelidir.");
      setLoading(false);
      return;
    }

    const activePrefix = formData.countryCode === "OTHER" 
      ? (formData.manualCountryCode.startsWith("+") ? formData.manualCountryCode : `+${formData.manualCountryCode}`)
      : formData.countryCode;

    const fullGsm = `${activePrefix}${formData.gsmNumber.replace(/^0+/, "")}`;

    try {
      const response = await fetch("/api/payment/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: plan.planId,
          planName: plan.name,
          price: plan.price.replace(".", ""),
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          gsmNumber: fullGsm,
          identityNumber: formData.identityNumber,
          address: formData.address,
          district: formData.district,
          city: formData.city,
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (data.status === "success" && data.paymentPageUrl) {
        window.location.href = data.paymentPageUrl;
      } else {
        setError(data.detail || "Ödeme başlatılırken bir hata oluştu.");
        setLoading(false);
      }
    } catch (err) {
      setError("Sunucuya bağlanılamadı. Lütfen tekrar deneyin.");
      setLoading(false);
    }
  };

  // ============================================================================
  // SENARYO 1: BAKIM / WHATSAPP YÖNLENDİRMESİ (IS_PAYMENT_ACTIVE = false ise çalışır)
  // ============================================================================
  if (!IS_PAYMENT_ACTIVE) {
    const whatsappNumber = "905415478141";
    const whatsappMessage = encodeURIComponent(
      `Merhaba, ${plan.name} paketi ile ilgileniyorum. Gerekli tecrübeye sahibim ve güncellemeleri beklemeden altyapıya dahil olmak istiyorum.`
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-lg overflow-y-auto rounded-3xl p-8 md:p-10 text-center"
          style={{
            background: "rgba(11,14,20,0.98)",
            border: `1px solid ${accent}40`,
            boxShadow: `0 30px 100px rgba(0,0,0,0.8), 0 0 60px ${accent}20`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-zinc-400 hover:bg-white/10 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Dönen Çark ve Parlama Efekti */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse" style={{ background: accent }}></div>
              <div
                className="relative h-20 w-20 rounded-full flex items-center justify-center bg-zinc-950"
                style={{ border: `2px solid ${accent}80` }}
              >
                <Settings className="h-9 w-9 animate-[spin_4s_linear_infinite]" style={{ color: accent }} />
              </div>
            </div>
          </div>

          <div className="font-mono text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: accent }}>
            // ALTYAPI GÜNCELLEMESİ
          </div>
          <h3 className="font-mono font-black text-2xl text-white mb-6 tracking-tight">{plan.name}</h3>

          <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 mb-8 text-[15px] text-zinc-300 leading-relaxed font-sans text-left shadow-inner">
            <p className="mb-5">
              Panel altyapılarımız <strong>Bist için v2.0</strong>, <strong>WallStreet için v3.0</strong> altyapısına güncellenmekte ve buna yönelik eğitim içeriklerimizin hazırlanması devam etmektedir. Şimdilik bu güncellemeler ve eğitimler tamamlanana kadar yeni üyelik alamıyoruz.
            </p>
            <p>
              Ama <span className="text-white font-medium">"Ben gereken tecrübeye ve birikime sahibim, eğitime ihtiyacım yok. v2.0 ve v3.0 paketlerini şimdiden almak istiyorum"</span> derseniz, lütfen <strong style={{ color: "#f59e0b" }}>+90 541 547 81 41</strong> WhatsApp danışma hattımızdan bizimle iletişime geçiniz.
            </p>
          </div>

          {/* WallStreet Sarısı WhatsApp Butonu */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-mono font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{
              background: "#f59e0b",
              color: "#0b0e14",
              boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)",
            }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp'tan Ulaşın
          </a>
        </div>
      </div>
    );
  }

  // ============================================================================
  // SENARYO 2: GERÇEK ÖDEME FORMU (IS_PAYMENT_ACTIVE = true ise çalışır)
  // ============================================================================
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl p-6 md:p-8"
        style={{
          background: "rgba(11,14,20,0.98)",
          border: `1px solid ${accent}55`,
          boxShadow: `0 30px 100px rgba(0,0,0,0.7), 0 0 50px ${accent}22`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-lg flex items-center justify-center"
              style={{ background: `${accent}20`, border: `1px solid ${accent}55` }}
            >
              <ShieldCheck className="h-4 w-4" style={{ color: accent }} />
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: accent }}>
                // GÜVENLİ İYZİCO ÖDEMESİ
              </div>
              <h3 className="font-mono font-bold text-base text-white">{plan.name}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-md flex items-center justify-center border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-red-300 text-xs font-mono">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-mono text-[11px] text-zinc-400 mb-1">Ad</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] text-zinc-400 mb-1">Soyad</label>
              <input
                type="text"
                name="surname"
                required
                value={formData.surname}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                placeholder="Soyadınız"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-[11px] text-zinc-400 mb-1">E-posta Adresi</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
              placeholder="ornek@mail.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block font-mono text-[11px] text-zinc-400 mb-1">Cep Telefonu</label>
              <div className="flex gap-1.5">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="bg-zinc-900 border border-white/10 rounded-lg px-2 py-2 text-xs text-amber-400 focus:outline-none font-mono shrink-0 max-w-[110px]"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code} className="bg-zinc-900 text-white">
                      {c.label.split(" ")[0]} {c.code !== "OTHER" ? c.code : ""}
                    </option>
                  ))}
                </select>

                {formData.countryCode === "OTHER" && (
                  <input
                    type="text"
                    name="manualCountryCode"
                    required
                    value={formData.manualCountryCode}
                    onChange={handleChange}
                    className="w-16 bg-zinc-900 border border-white/10 rounded-lg px-2 py-2 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                    placeholder="+91"
                  />
                )}

                <input
                  type="text"
                  name="gsmNumber"
                  required
                  value={formData.gsmNumber}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                  placeholder="5XX XXX XX XX"
                />
              </div>
            </div>
            <div>
              <label className="block font-mono text-[11px] text-zinc-400 mb-1">TC Kimlik No (Fatura için)</label>
              <input
                type="text"
                name="identityNumber"
                required
                maxLength={11}
                value={formData.identityNumber}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                placeholder="11 haneli TC No"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block font-mono text-[11px] text-zinc-400 mb-1">Fatura Adresi (Cadde, Sokak, No)</label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                placeholder="Örn: Atatürk Cad. No: 15/4"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-mono text-[11px] text-zinc-400 mb-1">İlçe</label>
                <input
                  type="text"
                  name="district"
                  required
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                  placeholder="Örn: Kadıköy"
                />
              </div>
              <div>
                <label className="block font-mono text-[11px] text-zinc-400 mb-1">Şehir (İl)</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                  placeholder="Örn: İstanbul"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
            <div>
              <label className="block font-mono text-[11px] text-zinc-400 mb-1">Terminal Kullanıcı Adı</label>
              <input
                type="text"
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                placeholder="Kullanıcı adınız"
              />
            </div>
            <div>
              <label className="block font-mono text-[11px] text-zinc-400 mb-1">Terminal Şifresi (Harf ve Rakam)</label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                placeholder="En az 1 harf, 1 rakam"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-mono font-bold text-sm uppercase tracking-wider transition-all cursor-pointer"
            style={{
              background: `linear-gradient(135deg, ${accent} 0%, #d97706 100%)`,
              color: "#0b0e14",
            }}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Ödeme Sayfası Hazırlanıyor...
              </>
            ) : (
              <>
                Ödemeye Geç ({plan.price} {plan.currency || "TL"})
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
