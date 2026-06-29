import React, { useState } from "react";
import { Terminal, PlayCircle, ArrowRight, Activity } from "lucide-react";
import BistTerminal from "@/components/landing/BistTerminal";
import WallStreetTerminal from "@/components/landing/WallStreetTerminal";
import VolatilitySurface from "@/components/landing/VolatilitySurface";

const tickers = [
  // BIST
  { sym: "THYAO", val: "327.83", chg: "+2.45%", sig: "TF AL", up: true, mkt: "BIST" },
  { sym: "EUPWR", val: "92.71", chg: "+4.58%", sig: "TF AL", up: true, mkt: "BIST" },
  { sym: "GESAN", val: "95.76", chg: "+8.47%", sig: "TF AL", up: true, mkt: "BIST" },
  { sym: "ASTOR", val: "72.33", chg: "+1.12%", sig: "TF AL", up: true, mkt: "BIST" },
  { sym: "TOASO", val: "215.40", chg: "-1.30%", sig: "TF SAT", up: false, mkt: "BIST" },
  { sym: "SISE", val: "97.58", chg: "-2.42%", sig: "TF SAT", up: false, mkt: "BIST" },
  // WS
  { sym: "SPX", val: "4,508.32", chg: "+0.42%", sig: "POZ GAMMA", up: true, mkt: "US" },
  { sym: "QQQ", val: "382.11", chg: "+1.08%", sig: "BULL", up: true, mkt: "US" },
  { sym: "VIX", val: "13.84", chg: "-3.21%", sig: "DÜŞÜK", up: false, mkt: "US" },
  { sym: "GEX·NET", val: "+1.42B", chg: "POZ", sig: "HEDGE", up: true, mkt: "US" },
  { sym: "0DTE", val: "62%", chg: "↑", sig: "ELEVATED", up: true, mkt: "US" },
  { sym: "BTC", val: "104,250", chg: "+2.14%", sig: "BULL", up: true, mkt: "CRYPTO" },
];

export default function Hero() {
  const [market, setMarket] = useState("bist");

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Pill tag */}
        <div className="fade-up flex justify-center mb-8">
          <div
            data-testid="hero-pill"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 live-dot" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-300">
              PrivyAlgo Hybrid · BIST v2.0 + WallStreet v3.0
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          data-testid="hero-headline"
          className="fade-up delay-1 font-display font-black tracking-tighter text-center text-white text-5xl md:text-6xl lg:text-7xl leading-[0.95]"
        >
          İki piyasa.
          <br />
          <span className="text-amber-400 text-glow-amber">İki Ayrı terminal.</span>
          <br />
          <span className="font-mono text-3xl md:text-4xl lg:text-5xl text-zinc-400 tracking-tight">
            <span className="text-teal-400">Borsa İstanbul</span>
            <span className="text-zinc-700"> × </span>
            <span className="text-amber-400">Wall Street</span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          data-testid="hero-subheadline"
          className="fade-up delay-2 mt-7 max-w-3xl mx-auto text-center text-zinc-400 text-base md:text-lg leading-relaxed"
        >
          <span className="text-teal-300">BIST hisseleri</span> için{" "}
          <span className="text-white">&ldquo;şimdi al / şimdi sat&rdquo;</span>{" "}
          akıllı, yüksek frekanslı ve kuantatif sinyaller; <span className="text-amber-300">Wall Street</span> tarafında ise{" "}
          <span className="text-purple-300">
            kurumsal fonlar ve büyük yatırımcıların net pozisyonlanmalarını
          </span>{" "}
          gösteren gelişmiş canlı haritalar. Borsayı{" "}
          <span className="text-white">yorum, dedikodu veya tahminle değil</span>; saniye saniye
          akan gerçek verilerle okumak için tek ekran.
        </p>

        {/* CTAs */}
        <div
          id="cta"
          className="fade-up delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://bist.privyalgo.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-cta-bist"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-mono font-bold text-sm uppercase tracking-wider hover:translate-y-[-1px] transition-all active:scale-95 glow-teal-strong"
            style={{
              background: "linear-gradient(135deg, #0f5132 0%, #26a69a 100%)",
              color: "#fff",
            }}
          >
            <Terminal className="h-4 w-4" strokeWidth={2.5} />
            BIST Terminal
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://wallstreet.privyalgo.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-cta-ws"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-500 text-black font-mono font-bold text-sm uppercase tracking-wider hover:bg-amber-400 transition-all glow-amber-strong active:scale-95"
          >
            <Activity className="h-4 w-4" strokeWidth={2.5} />
            WallStreet Terminal
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PL6r4M5EOm1fN-f4hF9CGoPa0aGnFLtQWZ"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-cta-tutorials"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/10 bg-zinc-900/60 backdrop-blur text-white font-mono font-medium text-sm uppercase tracking-wider hover:border-amber-500/50 hover:bg-zinc-900 transition-all active:scale-95"
          >
            <PlayCircle className="h-4 w-4 text-amber-400" />
            Eğitimleri İzle
          </a>
        </div>

        {/* Ticker tape */}
        <div className="fade-up delay-4 mt-12 relative">
          <div className="overflow-hidden border-y border-white/5 bg-black/50 backdrop-blur">
            <div className="marquee flex gap-10 py-3 whitespace-nowrap" style={{ width: "200%" }}>
              {[...tickers, ...tickers].map((t, i) => (
                <div key={i} className="flex items-center gap-3 font-mono text-xs shrink-0">
                  <span
                    className="text-[9px] px-1.5 py-0.5 rounded font-bold tracking-widest"
                    style={{
                      background: t.mkt === "BIST" ? "rgba(38,166,154,0.15)" : t.mkt === "US" ? "rgba(245,158,11,0.15)" : "rgba(168,85,247,0.15)",
                      color: t.mkt === "BIST" ? "#2dd4bf" : t.mkt === "US" ? "#fbbf24" : "#c084fc",
                    }}
                  >
                    {t.mkt}
                  </span>
                  <span className="text-zinc-400 uppercase tracking-[0.2em]">{t.sym}</span>
                  <span className="text-white font-semibold">{t.val}</span>
                  <span className={t.up ? "text-teal-400" : "text-red-400"}>{t.chg}</span>
                  <span
                    className="text-[9px] font-bold px-1.5 py-0.5 rounded border"
                    style={{
                      borderColor: t.up ? "rgba(45,212,191,0.4)" : "rgba(239,83,80,0.4)",
                      color: t.up ? "#2dd4bf" : "#f87171",
                    }}
                  >
                    {t.sig}
                  </span>
                  <span className="text-zinc-700">·</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market switcher */}
        <div
          className="fade-up delay-5 mt-14 flex justify-center"
          data-testid="market-switcher"
        >
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full border border-white/10 bg-zinc-950/60 backdrop-blur">
            <button
              onClick={() => setMarket("bist")}
              data-active={market === "bist"}
              data-market="bist"
              data-testid="market-switch-bist"
              className="market-pill px-5 py-2 rounded-full font-mono text-[12px] uppercase tracking-[0.18em] text-zinc-400"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 dot-pulse" />
                BIST · Borsa İstanbul
              </span>
            </button>
            <button
              onClick={() => setMarket("ws")}
              data-active={market === "ws"}
              data-market="ws"
              data-testid="market-switch-ws"
              className="market-pill px-5 py-2 rounded-full font-mono text-[12px] uppercase tracking-[0.18em] text-zinc-400"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 dot-pulse" />
                Wall Street · SPX
              </span>
            </button>
          </div>
        </div>

        {/* Dual visual stack */}
        <div className="fade-up delay-6 mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3" data-testid="hero-terminal">
            {market === "bist" ? <BistTerminal /> : <WallStreetTerminal />}
          </div>
          <div className="lg:col-span-2" data-testid="hero-surface">
            <VolatilitySurface market={market} />
          </div>
        </div>
      </div>
    </section>
  );
}
