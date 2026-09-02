import React, { useEffect, useState } from "react";
import { CheckCircle2, Mail, Clock, Home, X, Sparkles, Loader2 } from "lucide-react";
import CyberBackground from "@/components/landing/CyberBackground";

/**
 * Stand-alone success page (post-Iyzico/Whop redirect target)
 * Also used as the inline success state inside modals.
 */
export default function PaymentSuccess({ variant = "page", onClose, onHome }) {
  const [verifying, setVerifying] = useState(true);
  const [verifiedStatus, setVerifiedStatus] = useState(null);

  useEffect(() => {
    if (variant === "page") {
      document.title = "Ödeme Başarılı · PrivyAlgo Terminal";
    }

    // URL'den İyzico token bilgisini yakalıyoruz
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");

    if (token) {
      // Backend'deki doğrulama rotamıza istek atarak veritabanını güncelliyoruz
      fetch("/api/payment/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Ödeme Doğrulama Sonucu:", data);
          setVerifying(false);
          setVerifiedStatus(data.status);
        })
        .catch((err) => {
          console.error("Doğrulama Hatası:", err);
          setVerifying(false);
          setVerifiedStatus("error");
        });
    } else {
      setVerifying(false);
    }
  }, [variant]);

  const handleHome = () => {
    if (onHome) onHome();
    else window.location.assign("/");
  };

  const Content = (
    <div
      className="relative w-full max-w-2xl rounded-3xl overflow-hidden glass fade-up"
      style={{
        background: "rgba(11, 14, 20, 0.95)",
        border: "1px solid rgba(45, 212, 191, 0.45)",
        boxShadow:
          "0 40px 120px rgba(0,0,0,0.7), 0 0 80px rgba(45,212,191,0.18), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
      data-testid="payment-success-card"
    >
      {/* Top gradient strip */}
      <div className="h-1 w-full bg-gradient-to-r from-teal-400 via-amber-400 to-purple-400" />

      {variant === "card" && (
        <button
          onClick={onClose}
          aria-label="Kapat"
          data-testid="success-close-x"
          className="absolute top-4 right-4 w-9 h-9 rounded-md flex items-center justify-center border border-white/10 hover:border-red-400/60 hover:text-red-400 text-zinc-400 transition"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      <div className="px-7 md:px-12 pt-10 pb-9">
        {/* Icon */}
        <div className="flex justify-center">
          <div
            className="relative h-20 w-20 rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle, rgba(45,212,191,0.25) 0%, rgba(45,212,191,0.05) 60%, transparent 80%)",
              border: "1px solid rgba(45,212,191,0.55)",
              boxShadow:
                "0 0 0 6px rgba(45,212,191,0.06), 0 0 40px rgba(45,212,191,0.4)",
            }}
          >
            {verifying ? (
              <Loader2 className="h-10 w-10 text-teal-300 animate-spin" />
            ) : (
              <CheckCircle2
                className="h-10 w-10 text-teal-300"
                strokeWidth={2.2}
                data-testid="success-check-icon"
              />
            )}
            <div className="absolute -top-1 -right-1">
              <Sparkles className="h-4 w-4 text-amber-400" />
            </div>
          </div>
        </div>

        {/* Pill */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-400/30 bg-teal-400/10">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 live-dot" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal-300">
              {verifying ? "Ödeme Doğrulanıyor..." : "Ödeme Onaylandı · İyzico"}
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="mt-6 font-display font-black tracking-tighter text-center text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
          data-testid="success-headline"
        >
          Aboneliğiniz <span className="text-teal-300 text-glow-teal">başarıyla alındı.</span>
        </h1>

        {/* Sub */}
        <p
          className="mt-4 text-center text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto"
          data-testid="success-subtext"
        >
          <span className="text-amber-300 font-semibold">PrivyAlgo</span>{" "}
          ailesine hoş geldiniz. Kullanıcı adınız ve şifreniz{" "}
          <span className="text-white">en geç 24 saat içinde</span>{" "}
          ödeme sırasında belirttiğiniz e-posta adresine{" "}
          <span className="text-teal-300">manuel olarak</span> gönderilecektir.
        </p>

        {/* Info strip */}
        <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <InfoTile icon={Clock} label="Bekleme" value="≤ 24 saat" accent="#2dd4bf" />
          <InfoTile icon={Mail} label="Teslim" value="E-posta" accent="#f59e0b" />
          <InfoTile icon={CheckCircle2} label="Durum" value={verifying ? "Kontrol..." : "Ödendi"} accent="#a855f7" />
        </div>

        {/* Note */}
        <div
          className="mt-7 rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-4 flex gap-3"
          data-testid="success-note"
        >
          <Mail className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
          <p className="font-mono text-[12px] text-zinc-400 leading-relaxed">
            E-postanız gelmezse <span className="text-amber-300">spam / promosyon</span>{" "}
            klasörünüzü de kontrol edin. Sorularınız için{" "}
            <a
              href="mailto:privyalgo@gmail.com"
              className="text-amber-400 hover:underline"
              data-testid="success-email-link"
            >
              privyalgo@gmail.com
            </a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleHome}
            data-testid="success-home-btn"
            className="cta-shine w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-mono font-bold text-sm uppercase tracking-wider bg-amber-500 text-black hover:bg-amber-400 transition-all glow-amber active:scale-95"
          >
            <Home className="h-4 w-4" strokeWidth={2.5} />
            Anasayfaya Dön
          </button>
          {variant === "card" && (
            <button
              onClick={onClose}
              data-testid="success-close-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-mono font-semibold text-sm uppercase tracking-wider border border-white/15 bg-zinc-900/60 text-white hover:border-red-400/50 hover:text-red-300 transition-all active:scale-95"
            >
              <X className="h-4 w-4" />
              Kapat
            </button>
          )}
        </div>

        {/* Brand line */}
        <div className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
          <span className="text-teal-400">BIST</span>
          <span className="mx-1.5">·</span>
          <span className="text-amber-400">WALLSTREET</span>
          <span className="mx-1.5">·</span>
          <span className="text-purple-400">HYBRID</span>
        </div>
      </div>
    </div>
  );

  if (variant === "card") return Content;

  return (
    <div
      data-testid="payment-success-page"
      className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-black text-white overflow-hidden"
    >
      <CyberBackground />
      <div className="relative z-10 w-full flex justify-center">{Content}</div>
    </div>
  );
}

function InfoTile({ icon: Icon, label, value, accent }) {
  return (
    <div
      className="rounded-xl border bg-black/40 p-3.5"
      style={{ borderColor: `${accent}33` }}
    >
      <Icon className="h-4 w-4 mb-1.5" style={{ color: accent }} />
      <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </div>
      <div className="font-mono text-sm font-bold mt-0.5" style={{ color: accent }}>
        {value}
      </div>
    </div>
  );
}
