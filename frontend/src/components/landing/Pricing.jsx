import React, { useState } from "react";
import { Check, Sparkles, ArrowRight, Crown, MessageCircle, TrendingUp, BookOpen } from "lucide-react";
import WhopModal from "@/components/landing/WhopModal";

const BIST_PLANS = [
  {
    id: "bist-6m",
    market: "BIST",
    planId: "plan_g4J6Wi1MAafMB",
    url: "https://whop.com/checkout/plan_g4J6Wi1MAafMB/?d2c=true",
    name: "BIST · 6 Aylık",
    tagline: "Premium Plan · 6 Ay yenilenir",
    price: "5.400",
    oldPrice: "7.200",
    currency: "TL",
    period: "6 ay",
    note: "KDV Dahil",
    featured: false,
    cta: "BIST 6 Aylık Satın Al",
    badge: "%25 Avantaj",
    features: [
      "5-15-60-120 dk. tam veri seti",
      "TF AL / TF SAT canlı sinyaller",
      "Hedge Wall & MaxBuy/Sell seviyeleri",
      "Sentiment Score & Algoritmanın Kralları",
      "Özel Haftalık Bülten",
      { t: "Abonelere Özel Whatsapp Grubu", chat: true },
    ],
  },
  {
    id: "bist-yearly",
    market: "BIST",
    planId: "plan_JeXSEXRXPoExb",
    url: "https://whop.com/checkout/plan_JeXSEXRXPoExb/?d2c=true",
    name: "BIST · Yıllık",
    tagline: "Premium+ Plan · Yıllık yenilenir",
    price: "9.600",
    oldPrice: "14.400",
    currency: "TL",
    period: "12 ay",
    note: "KDV Dahil",
    featured: true,
    cta: "BIST Yıllık Satın Al",
    badge: "%33 Tanışma Bonusu",
    features: [
      "5-15-60-120 dk. tam veri seti",
      "TF AL / TF SAT canlı sinyaller",
      "Hedge Wall & MaxBuy/Sell seviyeleri",
      "Sentiment Score & Algoritmanın Kralları",
      "Özel Haftalık Bülten",
      { t: "1 Yıllık TradingView PremiumAlgo Paketi", trend: true },
      { t: "Abonelere Özel Whatsapp Grubu", chat: true },
    ],
  },
];

const WS_PLANS = [
  {
    id: "ws-6m",
    market: "WALLSTREET",
    planId: "plan_Qbox6n2EjRRLY",
    url: "https://whop.com/checkout/plan_Qbox6n2EjRRLY/?d2c=true",
    name: "WallStreet · 6 Aylık",
    tagline: "Yarım sezon · Kurumsal odak",
    price: "12.000",
    currency: "TRY",
    period: "6 ay",
    note: "KDV Dahil",
    featured: false,
    cta: "WallStreet 6 Aylık Satın Al",
    features: [
      "Opus Wall & Cockpit — Net GEX, Vanna, rejim",
      "Greeks Heatmap — vade yapısı & duvarlar",
      "0DTE Map — gün içi gamma & vol patlamaları",
      "Buble Map — likidite balonları & akış yoğunluğu",
      "Opra · Alpaca · Deribit canlı akışlar",
      "Sıfır gecikmeli WebSocket altyapısı",
      "nFinans topluluk erişimi",
      { t: "Abonelere Özel Whatsapp Grubu", chat: true },
    ],
  },
  {
    id: "ws-yearly",
    market: "WALLSTREET",
    planId: "plan_QbVjw794ciU1n",
    url: "https://whop.com/checkout/plan_QbVjw794ciU1n/?d2c=true",
    name: "WallStreet · Yıllık",
    tagline: "Tam sezon · En çok tercih edilen",
    price: "16.000",
    currency: "TRY",
    period: "12 ay",
    note: "KDV Dahil",
    featured: true,
    badge: "33% Tasarruf",
    cta: "WallStreet Yıllık Satın Al",
    features: [
      "Opus Wall & Cockpit — Net GEX, Vanna, rejim",
      "Greeks Heatmap — vade yapısı & duvarlar",
      "0DTE Map — gün içi gamma & vol patlamaları",
      "Buble Map — likidite balonları & akış yoğunluğu",
      "Opra · Alpaca · Deribit canlı akışlar",
      "Sıfır gecikmeli WebSocket altyapısı",
      "nFinans topluluk erişimi",
      { t: "Abonelere Özel Whatsapp Grubu", chat: true },
      "Öncelikli destek & erken erişim",
    ],
  },
];

const HYBRID_PLANS = [
  {
    id: "hybrid-6m",
    market: "HYBRID",
    planId: "plan_rkyZmqPnxJXEy",
    url: "https://whop.com/checkout/plan_rkyZmqPnxJXEy/?d2c=true",
    name: "HYBRID · 6 Aylık",
    tagline: "BIST + WallStreet · Tek paket",
    price: "14.500",
    currency: "TL",
    period: "6 ay",
    note: "KDV Dahil",
    featured: false,
    badge: "%18 Tasarruf",
    cta: "HYBRID 6 Aylık Satın Al",
    features: [
      "BIST Terminal — TF AL/SAT, Hedge Wall, Sentiment",
      "WallStreet Terminal — Opus Wall, Net GEX, Vanna",
      "5-15-60-120 dk. tam BIST veri seti",
      "0DTE Map · Greeks Heatmap · Buble Map",
      "Opra · Alpaca · Deribit · MS SQL canlı akışlar",
      "Özel Haftalık BIST + WS Bülteni",
      { t: "Abonelere Özel Whatsapp Grubu", chat: true },
      { t: "Opsiyon 101 Eğitim Paketi (Ücretsiz)", sparkle: true },
    ],
  },
  {
    id: "hybrid-yearly",
    market: "HYBRID",
    planId: "plan_bQSeOmkWDoRl3",
    url: "https://whop.com/checkout/plan_bQSeOmkWDoRl3/?d2c=true",
    name: "HYBRID · Yıllık",
    tagline: "BIST + WallStreet · En avantajlı",
    price: "20.500",
    currency: "TL",
    period: "12 ay",
    note: "KDV Dahil",
    featured: true,
    badge: "%30+ Tasarruf",
    cta: "HYBRID Yıllık Satın Al",
    features: [
      "BIST Terminal — TF AL/SAT, Hedge Wall, Sentiment",
      "WallStreet Terminal — Opus Wall, Net GEX, Vanna",
      "5-15-60-120 dk. tam BIST veri seti",
      "0DTE Map · Greeks Heatmap · Buble Map",
      "Opra · Alpaca · Deribit · MS SQL canlı akışlar",
      "Özel Haftalık BIST + WS Bülteni",
      { t: "1 Yıllık TradingView PremiumAlgo Paketi", trend: true },
      { t: "Abonelere Özel Whatsapp Grubu", chat: true },
      { t: "Opsiyon 101 Eğitim Paketi (Ücretsiz)", sparkle: true },
      "Öncelikli destek & erken erişim",
    ],
  },
];

const TABS = [
  { id: "bist", label: "BIST Terminal", color: "teal", plans: BIST_PLANS },
  { id: "ws", label: "WallStreet Terminal", color: "amber", plans: WS_PLANS },
  { id: "hybrid", label: "HYBRID · BIST + WS", color: "purple", plans: HYBRID_PLANS },
];

export default function Pricing() {
  const [active, setActive] = useState("bist");
  const [openPlan, setOpenPlan] = useState(null);
  const current = TABS.find((t) => t.id === active);
  const accentColor =
    active === "bist" ? "#26a69a" : active === "ws" ? "#f59e0b" : "#a855f7";
  const accentSecondary =
    active === "bist" ? "#0f5132" : active === "ws" ? "#d97706" : "#5b21b6";

  return (
    <section id="pricing" data-testid="pricing-section" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-500 mb-4">
            // PAKETLER &amp; ABONELİK
          </div>
          <h2 className="font-display font-black tracking-tighter text-4xl md:text-5xl lg:text-6xl text-white leading-[1.02]">
            İki piyasa.
            <br />
            <span className="text-amber-400 text-glow-amber">Altı ayrıcalıklı paket.</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            Her piyasanın kendine özgü algoritması, kendine özgü paketi.
            Tek seferde iki piyasaya birden erişmek isteyenler için yeni{" "}
            <span className="text-amber-400 font-medium">HYBRID</span> paket.
          </p>
        </div>

        {/* Market tabs */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex items-center gap-1.5 p-1.5 rounded-full border border-white/10 bg-zinc-950/60 backdrop-blur"
            data-testid="pricing-tabs"
          >
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                data-active={active === t.id}
                data-market={t.id}
                data-testid={`pricing-tab-${t.id}`}
                className="market-pill px-6 py-2.5 rounded-full font-mono text-[12px] uppercase tracking-[0.18em] text-zinc-400"
              >
                <span className="inline-flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full dot-pulse"
                    style={{ background: t.id === "bist" ? "#26a69a" : t.id === "ws" ? "#f59e0b" : "#a855f7" }}
                  />
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          key={active}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 fade-up"
        >
          {current.plans.map((p) => (
            <PlanCard
              key={p.id}
              plan={p}
              accent={accentColor}
              accentSecondary={accentSecondary}
              onBuy={() => setOpenPlan(p)}
            />
          ))}
        </div>

        {/* Bonus strip (HYBRID + WS shared) */}
        <div className="mt-10 relative glass rounded-2xl p-6 lg:p-8 overflow-hidden">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="h-14 w-14 rounded-xl border border-amber-500/40 bg-amber-500/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-6 w-6 text-amber-400" />
            </div>
            <div className="flex-1">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-400">
                BONUS · WallStreet ve HYBRID paketlerine dahil
              </div>
              <h3 className="mt-1 font-mono font-bold text-xl md:text-2xl text-white">
                Opsiyon 101 Eğitim Paketi
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-3xl">
                Opsiyonların temellerinden GEX/VEX okumalarına kadar; Greeks, hedge mantığı,
                IV ve piyasa yapıcı dinamiklerini sıfırdan öğrenin.
              </p>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-400 border border-teal-400/30 bg-teal-400/10 px-3 py-1.5 rounded-full whitespace-nowrap">
              + Ücretsiz Bonus
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs font-mono text-zinc-600 max-w-2xl mx-auto">
          * Üyelikler Whop tarafından yönetilir. Tüm planlar PrivyAlgo kullanıcı sözleşmesine
          tabidir. ** TradingView PremiumAlgo Paketi BIST ve HYBRID yıllık aboneliklere özel hediyedir.
        </p>
      </div>

      <WhopModal plan={openPlan} onClose={() => setOpenPlan(null)} />
    </section>
  );
}

function PlanCard({ plan, accent, accentSecondary, onBuy }) {
  const isFeatured = plan.featured;
  return (
    <article
      data-testid={`pricing-card-${plan.id}`}
      className="relative glass rounded-3xl p-7 lg:p-9 group transition-all duration-500"
      style={{
        borderColor: isFeatured ? `${accent}66` : "rgba(255,255,255,0.08)",
        boxShadow: isFeatured
          ? `0 0 0 1px ${accent}55 inset, 0 30px 80px ${accent}20`
          : "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      {isFeatured && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.22em] font-bold flex items-center gap-1.5"
          style={{ background: accent, color: "#0b0e14" }}
        >
          <Crown className="w-3 h-3" /> EN POPÜLER
        </div>
      )}

      <div className="flex items-start justify-between">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            {plan.tagline}
          </div>
          <h3 className="mt-2 font-mono font-bold text-2xl md:text-3xl text-white">
            {plan.name}
          </h3>
        </div>
        {plan.badge && (
          <span
            className="font-mono text-[10px] uppercase tracking-[0.18em] border px-2.5 py-1 rounded-full"
            style={{ color: accent, borderColor: `${accent}55`, background: `${accent}12` }}
          >
            {plan.badge}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mt-7 pb-7 border-b border-white/5 flex items-baseline gap-2">
        {plan.oldPrice && (
          <span className="font-mono text-sm text-zinc-600 line-through mr-1">
            {plan.oldPrice} {plan.currency}
          </span>
        )}
        <span
          className="font-mono font-black text-5xl md:text-6xl tracking-tighter"
          style={{ color: isFeatured ? accent : "#fff", textShadow: isFeatured ? `0 0 20px ${accent}55` : "none" }}
        >
          {plan.price}
        </span>
        <span className="font-mono text-base text-zinc-400">{plan.currency}</span>
        <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          / {plan.period} · {plan.note}
        </span>
      </div>

      {/* Features */}
      <ul className="mt-7 space-y-3">
        {plan.features.map((f, i) => {
          const isObj = typeof f === "object";
          const text = isObj ? f.t : f;
          const Icon = isObj
            ? f.chat
              ? MessageCircle
              : f.trend
                ? TrendingUp
                : f.sparkle
                  ? Sparkles
                  : Check
            : Check;
          return (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center"
                style={{
                  background: `${accent}1f`,
                  border: `1px solid ${accent}55`,
                }}
              >
                <Icon className="h-3 w-3" strokeWidth={3} style={{ color: accent }} />
              </span>
              <span className="text-sm text-zinc-300 leading-relaxed">{text}</span>
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      <button
        onClick={onBuy}
        data-testid={`pricing-cta-${plan.id}`}
        className="cta-shine mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-mono font-bold text-sm uppercase tracking-wider transition-all active:scale-95"
        style={{
          background: isFeatured
            ? `linear-gradient(135deg, ${accent} 0%, ${accentSecondary} 100%)`
            : "rgba(20,22,30,0.8)",
          color: isFeatured ? "#0b0e14" : "#fff",
          border: isFeatured ? "none" : `1px solid ${accent}55`,
          boxShadow: isFeatured ? `0 0 30px ${accent}40` : "none",
        }}
      >
        {plan.cta}
        <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}
