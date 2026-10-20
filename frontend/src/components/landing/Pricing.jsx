import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Crown, MessageCircle, TrendingUp, BookOpen, Sparkles, AlertCircle } from "lucide-react";
import CheckoutModal from "@/components/landing/CheckoutModal";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === "tr" || !i18n.language?.startsWith("en");
  
  const [active, setActive] = useState("bist");
  const [openPlan, setOpenPlan] = useState(null);

  const BIST_PLANS = [
    {
      id: "bist-6m", market: "BIST", planId: "plan_g4J6Wi1MAafMB", url: "#",
      name: isTr ? "BIST · 6 Aylık" : "BIST · 6 Months",
      tagline: isTr ? "Premium Plan · 6 Ay yenilenir" : "Premium Plan · Renews every 6 months",
      price: "5.400", oldPrice: "7.200", currency: "TL", period: isTr ? "6 ay" : "6 mo", note: isTr ? "KDV Dahil" : "VAT Inc.",
      featured: false, badge: isTr ? "%25 Avantaj" : "25% Off", cta: t("pricing_buy_btn"),
      features: [
        isTr ? "5-15-60-120 dk. periyotlarda tam veri seti" : "Full data set in 5-15-60-120 min periods",
        isTr ? "Sentiment & Oynaklık Analizleri" : "Sentiment & Volatility Analyses",
        isTr ? "Emir Akışlarına Bağlı Momentum Analizleri" : "Order Flow-Based Momentum Analyses",
        isTr ? "Emir Analitiklerine göre Hisse Bazlı Piyasa Skorlaması" : "Stock-Based Market Scoring (Market Score)",
        isTr ? "Ağırlıklı Ortalama Fiyat ve Reel Fiyat Analizleri" : "VWAP and Real Price based on Order Analytics",
        isTr ? "Hedge Wall & MaxBuy/Sell seviyeleri" : "Hedge Wall & MaxBuy/Sell levels",
        isTr ? "Sentiment Skorlaması & Algoritmanın Kralları" : "Sentiment Scoring & Kings of the Algorithm",
        isTr ? "Özel Haftalık Bülten" : "Exclusive Weekly Newsletter",
        { t: isTr ? "Abonelere Özel Whatsapp Destek Grubu" : "Subscribers-Only WhatsApp Support Group", chat: true },
      ],
    },
    {
      id: "bist-yearly", market: "BIST", planId: "plan_JeXSEXRXPoExb", url: "#",
      name: isTr ? "BIST · Yıllık" : "BIST · Yearly",
      tagline: isTr ? "Premium+ Plan · Yıllık yenilenir" : "Premium+ Plan · Renews Yearly",
      price: "9.600", oldPrice: "14.400", currency: "TL", period: isTr ? "12 ay" : "12 mo", note: isTr ? "KDV Dahil" : "VAT Inc.",
      featured: true, badge: isTr ? "%33 Tanışma Bonusu" : "33% Welcome Bonus", cta: t("pricing_buy_btn"),
      features: [
        isTr ? "5-15-60-120 dk. periyotlarda tam veri seti" : "Full data set in 5-15-60-120 min periods",
        isTr ? "Sentiment & Oynaklık Analizleri" : "Sentiment & Volatility Analyses",
        isTr ? "Emir Akışlarına Bağlı Momentum Analizleri" : "Order Flow-Based Momentum Analyses",
        isTr ? "Emir Analitiklerine göre Hisse Bazlı Piyasa Skorlaması" : "Stock-Based Market Scoring (Market Score)",
        isTr ? "Ağırlıklı Ortalama Fiyat ve Reel Fiyat Analizleri" : "VWAP and Real Price based on Order Analytics",
        isTr ? "Hedge Wall & MaxBuy/Sell seviyeleri" : "Hedge Wall & MaxBuy/Sell levels",
        isTr ? "Sentiment Skorlaması & Algoritmanın Kralları" : "Sentiment Scoring & Kings of the Algorithm",
        isTr ? "Özel Haftalık Bülten" : "Exclusive Weekly Newsletter",
        { t: isTr ? "1 Yıllık TradingView PremiumAlgo Paketi" : "1-Year TradingView PremiumAlgo Package", trend: true },
        { t: isTr ? "Abonelere Özel Whatsapp Destek Grubu" : "Subscribers-Only WhatsApp Support Group", chat: true },
      ],
    },
  ];

  const WS_PLANS = [
    {
      id: "ws-6m", market: "WALLSTREET", planId: "plan_Qbox6n2EjRRLY", url: "#",
      name: isTr ? "WallStreet · 6 Aylık" : "WallStreet · 6 Months",
      tagline: isTr ? "Yarım sezon · Kurumsal odak" : "Half season · Institutional focus",
      price: "12.000", currency: "TRY", period: isTr ? "6 ay" : "6 mo", note: isTr ? "KDV Dahil" : "VAT Inc.",
      featured: false, cta: t("pricing_buy_btn"),
      features: [
        isTr ? "Opus Wall & Cockpit — Net GEX, Vanna, rejim" : "Opus Wall & Cockpit — Net GEX, Vanna, regime",
        isTr ? "Greeks Heatmap — vade yapısı & duvarlar" : "Greeks Heatmap — term structure & walls",
        isTr ? "0DTE Map — gün içi gamma & volatilite patlamaları" : "0DTE Map — intraday gamma & vol bursts",
        isTr ? "Buble Map — Likidite balonları & Akış Yoğunlukları" : "Bubble Map — Liquidity bubbles & flow intensity",
        isTr ? "Opra · Alpaca · Deribit canlı opsiyon akışları" : "Opra · Alpaca · Deribit live option flows",
        isTr ? "Sıfır gecikmeli WebSocket altyapısı" : "Zero-latency WebSocket infrastructure",
        { t: isTr ? "Abonelere Özel Whatsapp Destek Grubu" : "Subscribers-Only WhatsApp Support Group", chat: true },
      ],
    },
    {
      id: "ws-yearly", market: "WALLSTREET", planId: "plan_QbVjw794ciU1n", url: "#",
      name: isTr ? "WallStreet · Yıllık" : "WallStreet · Yearly",
      tagline: isTr ? "Tam sezon · En çok tercih edilen" : "Full season · Most preferred",
      price: "16.000", currency: "TRY", period: isTr ? "12 ay" : "12 mo", note: isTr ? "KDV Dahil" : "VAT Inc.",
      featured: true, badge: isTr ? "%33 Tasarruf" : "33% Savings", cta: t("pricing_buy_btn"),
      features: [
        isTr ? "Opus Wall & Cockpit — Net GEX, Vanna, rejim" : "Opus Wall & Cockpit — Net GEX, Vanna, regime",
        isTr ? "Greeks Heatmap — vade yapısı & duvarlar" : "Greeks Heatmap — term structure & walls",
        isTr ? "0DTE Map — gün içi gamma & vol patlamaları" : "0DTE Map — intraday gamma & vol bursts",
        isTr ? "Buble Map — likidite balonları & akış yoğunluğu" : "Bubble Map — Liquidity bubbles & flow intensity",
        isTr ? "Opra · Alpaca · Deribit canlı akışlar" : "Opra · Alpaca · Deribit live flows",
        isTr ? "Sıfır gecikmeli WebSocket altyapısı" : "Zero-latency WebSocket infrastructure",
        { t: isTr ? "Abonelere Özel Whatsapp Destek Grubu" : "Subscribers-Only WhatsApp Support Group", chat: true },
        isTr ? "Öncelikli destek & erken erişim" : "Priority support & early access",
      ],
    },
  ];

  const HYBRID_PLANS = [
    {
      id: "hybrid-6m", market: "HYBRID", planId: "plan_rkyZmqPnxJXEy", url: "#",
      name: isTr ? "HYBRID · 6 Aylık" : "HYBRID · 6 Months",
      tagline: isTr ? "BIST + WallStreet · Tek paket" : "BIST + WallStreet · Single package",
      price: "14.500", currency: "TL", period: isTr ? "6 ay" : "6 mo", note: isTr ? "KDV Dahil" : "VAT Inc.",
      featured: false, badge: isTr ? "%18 Tasarruf" : "18% Savings", cta: t("pricing_buy_btn"),
      features: [
        isTr ? "BIST Terminal — Sentiment, Market Skorları, Hedge Wall" : "BIST Terminal — Sentiment, Market Scores, Hedge Wall",
        isTr ? "WallStreet Terminal — Opus Wall, Net GEX, Vanna" : "WallStreet Terminal — Opus Wall, Net GEX, Vanna",
        isTr ? "5-15-60-120 dk. tam BIST veri seti" : "5-15-60-120 min full BIST data set",
        isTr ? "0DTE Map · Greeks Heatmap · Buble Map" : "0DTE Map · Greeks Heatmap · Bubble Map",
        isTr ? "Opra · Alpaca · Deribit · MS SQL canlı akışlar" : "Opra · Alpaca · Deribit · MS SQL live flows",
        isTr ? "Özel Haftalık BIST + WS Bülteni" : "Exclusive Weekly BIST + WS Newsletter",
        { t: isTr ? "Abonelere Özel Whatsapp Destek Grubu" : "Subscribers-Only WhatsApp Support Group", chat: true },
        { t: isTr ? "Opsiyon 101 Eğitim Paketi (Ücretsiz)" : "Options 101 Training Package (Free)", sparkle: true },
      ],
    },
    {
      id: "hybrid-yearly", market: "HYBRID", planId: "plan_bQSeOmkWDoRl3", url: "#",
      name: isTr ? "HYBRID · Yıllık" : "HYBRID · Yearly",
      tagline: isTr ? "BIST + WallStreet · En avantajlı" : "BIST + WallStreet · Most advantageous",
      price: "20.500", currency: "TL", period: isTr ? "12 ay" : "12 mo", note: isTr ? "KDV Dahil" : "VAT Inc.",
      featured: true, badge: isTr ? "%30+ Tasarruf" : "30%+ Savings", cta: t("pricing_buy_btn"),
      features: [
        isTr ? "BIST Terminal — Sentiment, Market Skorları, Hedge Wall" : "BIST Terminal — Sentiment, Market Scores, Hedge Wall",
        isTr ? "WallStreet Terminal — Opus Wall, Net GEX, Vanna" : "WallStreet Terminal — Opus Wall, Net GEX, Vanna",
        isTr ? "5-15-60-120 dk. tam BIST veri seti" : "5-15-60-120 min full BIST data set",
        isTr ? "0DTE Map · Greeks Heatmap · Buble Map" : "0DTE Map · Greeks Heatmap · Bubble Map",
        isTr ? "Opra · Alpaca · Deribit · MS SQL canlı akışlar" : "Opra · Alpaca · Deribit · MS SQL live flows",
        isTr ? "Özel Haftalık BIST + WallStreet Bülteni" : "Exclusive Weekly BIST + WS Newsletter",
        { t: isTr ? "1 Yıllık TradingView PremiumAlgo Paketi" : "1-Year TradingView PremiumAlgo Package", trend: true },
        { t: isTr ? "Abonelere Özel Whatsapp Destek Grubu" : "Subscribers-Only WhatsApp Support Group", chat: true },
        { t: isTr ? "Opsiyon 101 Eğitim Paketi (Ücretsiz)" : "Options 101 Training Package (Free)", sparkle: true },
        isTr ? "Öncelikli destek & erken erişim" : "Priority support & early access",
      ],
    },
  ];

  const TABS = [
    { id: "bist", label: t("pricing_tab_bist"), color: "teal", plans: BIST_PLANS },
    { id: "ws", label: t("pricing_tab_ws"), color: "amber", plans: WS_PLANS },
    { id: "hybrid", label: t("pricing_tab_hybrid"), color: "purple", plans: HYBRID_PLANS },
  ];

  const current = TABS.find((t) => t.id === active);
  const accentColor = active === "bist" ? "#26a69a" : active === "ws" ? "#f59e0b" : "#a855f7";
  const accentSecondary = active === "bist" ? "#0f5132" : active === "ws" ? "#d97706" : "#5b21b6";

  return (
    <section id="pricing" data-testid="pricing-section" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-500 mb-4">
            {t("pricing_eyebrow")}
          </div>
          <h2 className="font-display font-black tracking-tighter text-4xl md:text-5xl lg:text-6xl text-white leading-[1.02]">
            {t("pricing_title_1")}
            <br />
            <span className="text-amber-400 text-glow-amber">{t("pricing_title_2")}</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            {t("pricing_desc_1")} <span className="text-amber-400 font-medium">HYBRID</span> {t("pricing_desc_2")}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full border border-white/10 bg-zinc-950/60 backdrop-blur" data-testid="pricing-tabs">
            {TABS.map((tab) => (
              <button key={tab.id} onClick={() => setActive(tab.id)} data-active={active === tab.id} className="market-pill px-6 py-2.5 rounded-full font-mono text-[12px] uppercase tracking-[0.18em] text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full dot-pulse" style={{ background: tab.id === "bist" ? "#26a69a" : tab.id === "ws" ? "#f59e0b" : "#a855f7" }} />
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div key={active} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 fade-up">
          {current.plans.map((p) => (
            <PlanCard key={p.id} plan={p} accent={accentColor} accentSecondary={accentSecondary} isTr={isTr} onBuy={() => setOpenPlan(p)} />
          ))}
        </div>

        <div className="mt-10 relative glass rounded-2xl p-6 lg:p-8 overflow-hidden">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="h-14 w-14 rounded-xl border border-amber-500/40 bg-amber-500/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-6 w-6 text-amber-400" />
            </div>
            <div className="flex-1">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-400">
                {t("pricing_bonus_eyebrow")}
              </div>
              <h3 className="mt-1 font-mono font-bold text-xl md:text-2xl text-white">
                {t("pricing_bonus_title")}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-3xl">
                {t("pricing_bonus_desc")}
              </p>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-400 border border-teal-400/30 bg-teal-400/10 px-3 py-1.5 rounded-full whitespace-nowrap">
              {t("pricing_bonus_badge")}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs font-mono text-zinc-600 max-w-2xl mx-auto">
          {t("pricing_note")}
        </p>
      </div>

      <CheckoutModal plan={openPlan} onClose={() => setOpenPlan(null)} />
    </section>
  );
}

function PlanCard({ plan, accent, accentSecondary, isTr, onBuy }) {
  const isFeatured = plan.featured;
  const [agreed, setAgreed] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (!agreed) {
      setShowError(true);
      return;
    }
    setShowError(false);
    onBuy();
  };

  return (
    <article className="relative glass rounded-3xl p-7 lg:p-9 group transition-all duration-500" style={{ borderColor: isFeatured ? `${accent}66` : "rgba(255,255,255,0.08)", boxShadow: isFeatured ? `0 0 0 1px ${accent}55 inset, 0 30px 80px ${accent}20` : "0 10px 30px rgba(0,0,0,0.3)" }}>
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-[0.22em] font-bold flex items-center gap-1.5" style={{ background: accent, color: "#0b0e14" }}>
          <Crown className="w-3 h-3" /> {isTr ? "EN POPÜLER" : "MOST POPULAR"}
        </div>
      )}

      <div className="flex items-start justify-between">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">{plan.tagline}</div>
          <h3 className="mt-2 font-mono font-bold text-2xl md:text-3xl text-white">{plan.name}</h3>
        </div>
        {plan.badge && (
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] border px-2.5 py-1 rounded-full" style={{ color: accent, borderColor: `${accent}55`, background: `${accent}12` }}>
            {plan.badge}
          </span>
        )}
      </div>

      <div className="mt-7 pb-7 border-b border-white/5 flex items-baseline gap-2">
        {plan.oldPrice && <span className="font-mono text-sm text-zinc-600 line-through mr-1">{plan.oldPrice} {plan.currency}</span>}
        <span className="font-mono font-black text-5xl md:text-6xl tracking-tighter" style={{ color: isFeatured ? accent : "#fff", textShadow: isFeatured ? `0 0 20px ${accent}55` : "none" }}>{plan.price}</span>
        <span className="font-mono text-base text-zinc-400">{plan.currency}</span>
        <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">/ {plan.period} · {plan.note}</span>
      </div>

      <ul className="mt-7 space-y-3">
        {plan.features.map((f, i) => {
          const isObj = typeof f === "object";
          const text = isObj ? f.t : f;
          const Icon = isObj ? (f.chat ? MessageCircle : f.trend ? TrendingUp : f.sparkle ? Sparkles : Check) : Check;
          return (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center" style={{ background: `${accent}1f`, border: `1px solid ${accent}55` }}><Icon className="h-3 w-3" strokeWidth={3} style={{ color: accent }} /></span>
              <span className="text-sm text-zinc-300 leading-relaxed">{text}</span>
            </li>
          );
        })}
      </ul>

      <label className="mt-7 flex items-start gap-3 cursor-pointer group select-none">
        <span className="mt-0.5 flex-shrink-0 h-[18px] w-[18px] rounded-[4px] flex items-center justify-center transition-all" style={{ background: agreed ? accent : "rgba(20,22,30,0.8)", border: `1.5px solid ${agreed ? accent : showError ? "#ef4444" : "rgba(255,255,255,0.20)"}`, boxShadow: agreed ? `0 0 12px ${accent}55` : "none" }}>
          {agreed && <Check className="h-3 w-3 text-black" strokeWidth={4} />}
        </span>
        <input type="checkbox" className="sr-only" checked={agreed} onChange={(e) => { setAgreed(e.target.checked); if (e.target.checked) setShowError(false); }} />
        <span className="font-mono text-[11px] leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
          <Link to="/kvkk-aydinlatma-metni" target="_blank" onClick={(e) => e.stopPropagation()} className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
            {isTr ? "KVKK Aydınlatma Metni" : "KVKK Clarification Text"}
          </Link>
          {isTr ? ", " : ", "}
          <Link to="/uyelik-sozlesmesi" target="_blank" onClick={(e) => e.stopPropagation()} className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
            {isTr ? "Üyelik Sözleşmesi" : "Membership Agreement"}
          </Link>
          {isTr ? " ve " : " and "}
          <Link to="/gizlilik-politikasi" target="_blank" onClick={(e) => e.stopPropagation()} className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
            {isTr ? "Gizlilik Politikası" : "Privacy Policy"}
          </Link>
          {isTr ? "'nı okudum, kabul ediyorum." : " read and accepted."}
        </span>
      </label>

      {showError && !agreed && (
        <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-md border border-red-500/40 bg-red-500/10 font-mono text-[11px] text-red-300">
          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
          {isTr ? "Devam etmek için yasal metinleri onaylamanız gerekir." : "You must accept the legal texts to continue."}
        </div>
      )}

      <button onClick={handleClick} className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-mono font-bold text-sm uppercase tracking-wider transition-all cursor-pointer hover:opacity-95 shadow-lg" style={{ background: isFeatured ? `linear-gradient(135deg, ${accent} 0%, ${accentSecondary} 100%)` : "rgba(20,22,30,0.8)", color: isFeatured ? "#0b0e14" : "#fff", border: isFeatured ? "none" : `1px solid ${accent}55` }}>
        {plan.cta}
        <ArrowRight className="w-4 h-4" />
      </button>
    </article>
  );
}
