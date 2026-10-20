import React from "react";
import { Cpu, Zap, Database, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Technology() {
  const { t, i18n } = useTranslation();
  const isTr = i18n.language === "tr" || !i18n.language?.startsWith("en");

  const partners = [
    { name: "Opra Option Chain", tag: "Options Chain · Tick", market: "WS" },
    { name: "Alpaca API", tag: "US Equities · Snapshots", market: "WS" },
    { name: "Deribit", tag: "Crypto Options · OI", market: "WS" },
    { name: "Yahoo Finance", tag: "OHLC · Historical", market: "WS" },
    { name: "MS SQL · BIST", tag: "5dk / 15dk / 1H / 2H", market: "BIST" },
    { name: "Lightweight Charts", tag: isTr ? "TradingView · Açık Kaynak" : "TradingView · Open Source", market: "BIST" },
  ];

  const stats = [
    { value: "1.2M+", label: t("tech_stat1_lbl"), icon: Cpu },
    { value: "<60ms", label: t("tech_stat2_lbl"), icon: Zap },
    { value: "24/7", label: t("tech_stat3_lbl"), icon: Database },
    { value: "TLS 1.3", label: t("tech_stat4_lbl"), icon: Shield },
  ];

  return (
    <section id="technology" data-testid="technology-section" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-500 mb-4">
              {t("tech_eyebrow")}
            </div>
            <h2 className="font-display font-black tracking-tighter text-4xl md:text-5xl text-white leading-[1.02]">
              {t("tech_title_1")}
              <br />
              <span className="text-amber-400 text-glow-amber">{t("tech_title_2")}</span>
            </h2>
            <p className="mt-5 text-zinc-400 text-base leading-relaxed">
              {t("tech_desc_1")} <span className="text-amber-300">Opra Option Chain</span>{t("tech_desc_2")} <span className="text-teal-300">Alpaca</span>{t("tech_desc_3")} <span className="text-purple-300">Deribit</span>{t("tech_desc_4")} <span className="text-teal-300">BIST veri seti</span> {t("tech_desc_5")}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} data-testid={`tech-stat-${s.label}`} className="glass rounded-xl p-4">
                    <Icon className="h-4 w-4 text-amber-400 mb-2" />
                    <div className="font-mono text-2xl font-bold text-white">{s.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 mt-1">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative glass rounded-2xl p-6 lg:p-8 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 600 400" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="wire-h" x1="0" x2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
                    <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M-20,80 Q150,140 300,80 T620,120" stroke="url(#wire-h)" strokeWidth="1" fill="none" />
                <path d="M-20,200 Q150,140 300,220 T620,180" stroke="url(#wire-h)" strokeWidth="1" fill="none" />
                <path d="M-20,320 Q150,260 300,320 T620,280" stroke="url(#wire-h)" strokeWidth="1" fill="none" />
              </svg>

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    {t("tech_providers_title")}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400 live-dot" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-400">
                      streams_active
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {partners.map((p) => {
                    const isBist = p.market === "BIST";
                    return (
                      <div key={p.name} data-testid={`partner-${p.name}`} className="group relative glass-hover rounded-xl border border-white/5 bg-black/40 p-5">
                        <div className="flex items-center justify-between">
                          <div className="font-mono font-bold text-base text-white tracking-tight">{p.name}</div>
                          <span className={`font-mono text-[8px] font-bold uppercase tracking-[0.18em] px-1.5 py-0.5 rounded border ${isBist ? "bg-teal-400/10 text-teal-300 border-teal-400/30" : "bg-amber-500/10 text-amber-300 border-amber-500/30"}`}>
                            {p.market}
                          </span>
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-2">{p.tag}</div>
                        <svg viewBox="0 0 200 30" className="w-full h-5 mt-3 opacity-70">
                          <path d="M0,15 Q25,5 50,15 T100,15 T150,15 T200,15" stroke={isBist ? "#26a69a" : "#f59e0b"} strokeWidth="1" fill="none" />
                        </svg>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  <span>throughput</span><span className="text-amber-400">1.24M evt/s</span>
                  <span>latency</span><span className="text-teal-400">42ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
