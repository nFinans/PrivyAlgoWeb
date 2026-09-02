import React from "react";
import {
  Activity,
  BarChart3,
  Crosshair,
  Layers,
  Grid3x3,
  Zap,
  BarChart2,
  Brain,
  ArrowUpRight,
} from "lucide-react";

const features = [
  // BIST
  {
    id: "sentiment",
    market: "BIST",
    title: "Gelişmiş Sentiment Analizi",
    subtitle: "BuyerScore · SellerScore · SentimentScore",
    description:
      "Gerçek zamanlı alıcı vs. satıcı gücü, likidite oranı ve Buy/Sell Power formülasyonu ile piyasanın duygusunu tek bakışta okuyun.",
    icon: Activity,
    color: "teal",
  },
  {
    id: "vol-bist",
    market: "BIST",
    title: "Volatilite Takibi",
    subtitle: "5dk · Alım/Satım Vol · Spike Alert",
    description:
      "5dk ortalama volatilite ve alış/satış lot volatilitesi ayrı serilerde dinamik olarak işlenir. Hacim spike'larını sinyalden önce yakalayın.",
    icon: BarChart3,
    color: "amber",
  },
  {
    id: "signals",
    market: "BIST",
    title: "Özelleştirilmiş Veri Analitikleri ve Veri Yorumlama Araçları",
    subtitle: "Momentum · MarketScore · AOF",
    description:
      "Momentum, Market Score, AOF ve Reel Fiyat kombinasyonuyla üretilen algoritmik veriler ve sinyaller grafik üzerinde işaretlenir. Push bildirimleriyle anlık.",
    icon: Crosshair,
    color: "teal-bright",
  },
  {
    id: "hedge-wall",
    market: "BIST",
    title: "Hedge Wall · MaxBuy/Sell",
    subtitle: "14D · Likidite Kümeleri",
    description:
      "Algoritma; geçmiş 14 günün hacim-ağırlıklı yığılma seviyelerinden Hedge Wall hattını ve maksimum alım/satım kümelerini otomatik üretir.",
    icon: Layers,
    color: "purple",
  },
  // WS
  {
    id: "opus-wall",
    market: "WALLSTREET",
    title: "Opus Wall & Cockpit",
    subtitle: "Piyasa rejimi · Net GEX · Vanna",
    description:
      "Gerçek zamanlı piyasa rejimi, Net GEX ve Vanna (VEX) dinamikleri. Piyasanın yönünü belirleyen algoritmik verileri ve seviyeleri tek ekranda okuyun.",
    icon: Brain,
    color: "amber",
  },
  {
    id: "greeks",
    market: "WALLSTREET",
    title: "Greeks Heatmap",
    subtitle: "Vade yapısı · Likidite duvarları",
    description:
      "Uzaysal vade yapısı ve likidite duvarları. Opsiyon piyasasındaki gizli destek ve direnç bölgelerini haritalayın.",
    icon: Grid3x3,
    color: "teal",
  },
  {
    id: "0dte",
    market: "WALLSTREET",
    title: "0DTE Map",
    subtitle: "Gün içi baskı · Gamma seviyeleri",
    description:
      "Gün içi baskı ve 0DTE gamma seviyeleri ile volatilite patlamalarını önceden tespit edin. Saniye altı çözünürlük.",
    icon: Zap,
    color: "purple",
  },
  {
    id: "buble",
    market: "WALLSTREET",
    title: "Buble Map",
    subtitle: "Likidite balonları · Akış yoğunluğu",
    description:
      "Opsiyon piyasasındaki likidite balonlarını ve akış yoğunluğunu büyüklük + renk skalasıyla haritalayan yeni nesil görselleştirme. Kurumsal ayak izlerini büyüklüğüyle birlikte tek bakışta okuyun.",
    icon: BarChart2,
    color: "amber",
  },
];

const colorMap = {
  amber: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", chip: "bg-amber-500/15 text-amber-300" },
  teal: { text: "text-teal-400", bg: "bg-teal-400/10", border: "border-teal-400/30", chip: "bg-teal-400/15 text-teal-300" },
  "teal-bright": { text: "text-teal-300", bg: "bg-teal-300/10", border: "border-teal-300/30", chip: "bg-teal-300/15 text-teal-200" },
  purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", chip: "bg-purple-500/15 text-purple-300" },
};

export default function Features() {
  return (
    <section id="features" data-testid="features-section" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-500 mb-4">
            // KANTİTATİF MODÜLLER · 2 PİYASA
          </div>
          <h2 className="font-display font-black tracking-tighter text-4xl md:text-5xl lg:text-6xl text-white leading-[1.02]">
            BIST&apos;in <span className="text-teal-400 text-glow-teal">algoritması</span>.
            <br />
            Wall Street&apos;in <span className="text-amber-400 text-glow-amber">kara kutusu</span>.
          </h2>
          <p className="mt-5 text-zinc-400 text-base md:text-lg max-w-2xl">
            Sekiz kantitatif modül. İki ayrı piyasanın mekaniğini saniye altı çözünürlükle
            haritalayan algoritmalar. Tek terminalde, tek abonelikle değil — iki uzman pakette.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            const c = colorMap[f.color] || colorMap.amber;
            const marketBadge =
              f.market === "BIST"
                ? "bg-teal-400/10 text-teal-300 border-teal-400/30"
                : "bg-amber-500/10 text-amber-300 border-amber-500/30";
            return (
              <article
                key={f.id}
                data-testid={`feature-card-${f.id}`}
                className="relative glass glass-hover rounded-2xl p-6 overflow-hidden group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`h-11 w-11 rounded-lg border ${c.border} ${c.bg} flex items-center justify-center`}
                  >
                    <Icon className={`h-5 w-5 ${c.text}`} strokeWidth={2.2} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[9px] font-bold uppercase tracking-[0.18em] px-2 py-1 rounded border ${marketBadge}`}
                    >
                      {f.market}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-amber-400 transition-colors" />
                  </div>
                </div>

                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500 mb-2">
                  {f.subtitle}
                </div>
                <h3 className="font-mono font-bold text-lg text-white tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {f.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
