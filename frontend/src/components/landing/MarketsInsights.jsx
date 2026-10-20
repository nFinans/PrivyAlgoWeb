import React from "react";
import { Crown, Rocket, Droplet, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const KINGS = [
  { sym: "EUPWR", algo: 97.37, stock: 103.78, net: -6.41 },
  { sym: "GESAN", algo: 75.71, stock: 53.83, net: 21.87 },
  { sym: "ASTOR", algo: 72.33, stock: 42.19, net: 30.15 },
  { sym: "EREGL", algo: 44.60, stock: 33.96, net: 10.64 },
  { sym: "ENERY", algo: 31.76, stock: 9.57, net: 22.19 },
  { sym: "SKBNK", algo: 30.86, stock: 27.12, net: 3.74 },
  { sym: "CCOLA", algo: 25.18, stock: 9.48, net: 15.70 },
  { sym: "AKBNK", algo: 24.20, stock: 7.53, net: 16.67 },
  { sym: "YKBNK", algo: 19.66, stock: 15.98, net: 3.68 },
  { sym: "TOASO", algo: 16.77, stock: 18.28, net: -1.52 },
];

const BUYERS = [
  { sym: "DOAS", chg: 0.85, score: 99.28 },
  { sym: "BSOKE", chg: 2.79, score: 98.34 },
  { sym: "SKBNK", chg: 0.77, score: 97.99 },
  { sym: "GESAN", chg: 8.47, score: 95.76 },
  { sym: "MAVI", chg: -0.38, score: 95.69 },
  { sym: "ARCLK", chg: 0.57, score: 92.94 },
  { sym: "EUPWR", chg: 4.58, score: 92.71 },
  { sym: "CCOLA", chg: -0.06, score: 90.47 },
];

const SELLERS = [
  { sym: "TOASO", chg: -1.30, score: -98.79 },
  { sym: "BRYAT", chg: -1.21, score: -98.48 },
  { sym: "SISE-2", chg: -2.42, score: -97.85 },
  { sym: "SISE", chg: -2.42, score: -97.58 },
  { sym: "AEFES", chg: -1.99, score: -97.55 },
  { sym: "PATEK", chg: -1.64, score: -97.40 },
  { sym: "SOKM", chg: -1.81, score: -96.65 },
  { sym: "ALTNY", chg: -0.75, score: -95.10 },
];

const fmt = (v) => `${v > 0 ? "+" : ""}%${v.toFixed(2)}`;
const colorFor = (v, neg = "#ef5350", pos = "#26a69a") => (v >= 0 ? pos : neg);

export default function MarketsInsights() {
  const { t } = useTranslation();

  return (
    <section id="markets" data-testid="markets-section" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-500 mb-4">
            {t("markets_eyebrow")}
          </div>
          <h2 className="font-display font-black tracking-tighter text-4xl md:text-5xl lg:text-6xl text-white leading-[1.02]">
            {t("markets_title_1")} <span className="text-teal-400 text-glow-teal">{t("markets_title_2")}</span> {t("markets_title_3")} <span className="text-amber-400 text-glow-amber">{t("markets_title_4")}</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-base md:text-lg max-w-2xl">
            {t("markets_desc")}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden mb-6 glass" style={{ borderColor: "rgba(255,179,0,0.15)" }} data-testid="kings-card">
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/5" style={{ background: "linear-gradient(90deg, rgba(255,179,0,0.06), transparent)" }}>
            <h3 className="font-mono font-semibold tracking-wide flex items-center gap-2 text-amber-400">
              <Crown className="w-4 h-4" />
              {t("markets_kings_title")} <span className="text-zinc-500 text-xs">{t("markets_kings_sub")}</span>
            </h3>
            <span className="text-[10px] font-mono text-teal-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 dot-pulse" />
              CANLI
            </span>
          </div>

          <div className="grid grid-cols-12 px-5 py-3 text-[10px] font-mono uppercase tracking-wider text-zinc-500 border-b border-white/5">
            <span className="col-span-3">{t("markets_col_sym")}</span>
            <span className="col-span-3 text-right">{t("markets_col_algo")}</span>
            <span className="col-span-3 text-right">{t("markets_col_stock")}</span>
            <span className="col-span-3 text-right">{t("markets_col_real")}</span>
          </div>

          <div>
            {KINGS.map((k) => (
              <div key={k.sym} className="grid grid-cols-12 items-center px-5 py-2.5 hover:bg-white/5 transition border-b border-white/[0.03] last:border-b-0">
                <span className="col-span-3 font-semibold text-white text-sm">{k.sym}</span>
                <span className="col-span-3 text-right font-mono text-sm" style={{ color: colorFor(k.algo) }}>{fmt(k.algo)}</span>
                <span className="col-span-3 text-right font-mono text-sm" style={{ color: colorFor(k.stock) }}>{fmt(k.stock)}</span>
                <span className="col-span-3 text-right font-mono text-sm font-semibold" style={{ color: colorFor(k.net, "#ef5350", "#a855f7") }}>{fmt(k.net)}</span>
              </div>
            ))}
          </div>

          <div className="px-5 py-3 border-t border-white/5 flex items-center gap-3 text-[10px] font-mono text-zinc-500">
            <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
            {t("markets_kings_note")}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <SentimentPanel title={t("markets_buyers_title")} icon={Rocket} accent="#26a69a" rows={BUYERS} direction="up" t={t} />
          <SentimentPanel title={t("markets_sellers_title")} icon={Droplet} accent="#ef5350" rows={SELLERS} direction="down" t={t} />
        </div>
      </div>
    </section>
  );
}

function SentimentPanel({ title, icon: Icon, accent, rows, direction, t }) {
  return (
    <div className="rounded-2xl overflow-hidden glass">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5" style={{ background: `linear-gradient(90deg, ${accent}18, transparent)` }}>
        <h3 className="font-mono font-semibold tracking-wide flex items-center gap-2" style={{ color: accent }}>
          <Icon className="w-4 h-4" />
          {title}
        </h3>
        <span className="text-[10px] font-mono text-zinc-500">SKOR · BIST</span>
      </div>

      <div className="grid grid-cols-12 px-5 py-3 text-[10px] font-mono uppercase tracking-wider text-zinc-500 border-b border-white/5">
        <span className="col-span-3">{t("markets_col_sym")}</span>
        <span className="col-span-3">{t("markets_col_change")}</span>
        <span className="col-span-6 text-right">{t("markets_col_score")}</span>
      </div>

      <div>
        {rows.map((r) => {
          const pct = Math.min(100, Math.abs(r.score));
          const chgColor = r.chg >= 0 ? "#26a69a" : "#ef5350";
          return (
            <div key={r.sym} className="grid grid-cols-12 items-center px-5 py-2.5 hover:bg-white/5 transition border-b border-white/[0.03] last:border-b-0">
              <span className="col-span-3 font-semibold text-white text-sm">{r.sym}</span>
              <span className="col-span-3 font-mono text-sm" style={{ color: chgColor }}>
                {r.chg > 0 ? "+" : ""}{r.chg.toFixed(2)}%
              </span>
              <div className="col-span-6 flex items-center gap-3 justify-end">
                <span className="font-mono text-sm" style={{ color: accent }}>
                  {r.score > 0 ? "+" : ""}{r.score.toFixed(2)}
                </span>
                <div className="h-1.5 w-24 rounded-full overflow-hidden bg-white/10">
                  <div className={direction === "up" ? "score-fill-g h-full" : "score-fill-r h-full"} style={{ width: `${pct}%` }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
