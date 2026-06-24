import React from "react";

// 3D-ish wireframe volatility surface — accepts `market` prop to recolor
export default function VolatilitySurface({ market = "ws" }) {
  const cols = 12;
  const rows = 9;
  const w = 360;
  const h = 240;
  const cellW = w / cols;
  const cellH = h / rows;

  const isBist = market === "bist";

  const heightAt = (x, y) => {
    const nx = (x / cols) * 2 - 1;
    const ny = (y / rows) * 2 - 1;
    return Math.sin(nx * 2.4) * Math.cos(ny * 2.1) * 38 + Math.sin(nx * 1.1 + ny * 1.4) * 14;
  };

  const project = (x, y, z) => {
    const isoX = (x - y) * (cellW * 0.6);
    const isoY = (x + y) * (cellH * 0.32) - z;
    return [w / 2 + isoX, h * 0.65 + isoY];
  };

  const points = [];
  for (let y = 0; y <= rows; y++) {
    const row = [];
    for (let x = 0; x <= cols; x++) {
      row.push(project(x, y, heightAt(x, y)));
    }
    points.push(row);
  }

  const palette = isBist
    ? {
        a: "#26a69a",
        b: "#a855f7",
        accent: "#26a69a",
        glow: "text-glow-teal",
        labelTitle: "Sentiment Surface · BIST",
        modelTitle: "PRIVY NEURAL · v2.0",
        kpis: [
          { label: "REJİM", value: "POZ. ALICILAR", color: "text-teal-400" },
          { label: "SENT·SCORE", value: "+62.4", color: "text-amber-400" },
          { label: "ALGO·AVG", value: "+43.8%", color: "text-purple-400" },
        ],
        skewLabel: "Algo Alfa",
        skewVal: "+11.6%",
      }
    : {
        a: "#f59e0b",
        b: "#a855f7",
        accent: "#2dd4bf",
        glow: "text-glow-teal",
        labelTitle: "IV Surface · σ(K,T)",
        modelTitle: "VOLATILITY MODEL · v3.0",
        kpis: [
          { label: "ATM IV", value: "21.4%", color: "text-teal-400" },
          { label: "VANNA", value: "-0.18", color: "text-purple-400" },
          { label: "GAMMA·MAX", value: "4500", color: "text-amber-400" },
        ],
        skewLabel: "Skew",
        skewVal: "+18.4%",
      };

  const gradId = isBist ? "bistLine" : "amberLine";
  const colId = isBist ? "bistColLine" : "tealLine";

  return (
    <div
      data-testid="volatility-surface"
      className="relative w-full aspect-[3/2] glass rounded-2xl overflow-hidden float-slow"
    >
      {/* Corner labels */}
      <div className="absolute top-3 left-4 z-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
          {palette.labelTitle}
        </div>
        <div className={`font-mono text-[11px] font-semibold ${isBist ? "text-teal-400 text-glow-teal" : "text-teal-400 text-glow-teal"} mt-1`}>
          {palette.modelTitle}
        </div>
      </div>
      <div className="absolute top-3 right-4 z-10 text-right">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          {palette.skewLabel}
        </div>
        <div className="font-mono text-[11px] font-semibold text-amber-400 mt-1">
          {palette.skewVal}
        </div>
      </div>

      <svg viewBox={`0 0 ${w} ${h + 40}`} className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id={gradId} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={palette.a} stopOpacity="0.9" />
            <stop offset="100%" stopColor={palette.b} stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id={colId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={palette.accent} stopOpacity="0.85" />
            <stop offset="100%" stopColor={palette.accent} stopOpacity="0.15" />
          </linearGradient>
          <filter id="glowF" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {points.map((row, ri) => (
          <polyline
            key={`r-${ri}`}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeOpacity={0.5 + (ri / rows) * 0.4}
            strokeWidth={0.8}
            filter="url(#glowF)"
            points={row.map((p) => p.join(",")).join(" ")}
          />
        ))}

        {Array.from({ length: cols + 1 }).map((_, ci) => {
          const col = points.map((row) => row[ci]);
          return (
            <polyline
              key={`c-${ci}`}
              fill="none"
              stroke={`url(#${colId})`}
              strokeOpacity={0.35 + (ci / cols) * 0.4}
              strokeWidth={0.7}
              filter="url(#glowF)"
              points={col.map((p) => p.join(",")).join(" ")}
            />
          );
        })}

        {[3, 5, 7].map((ri) => (
          <polyline
            key={`hi-${ri}`}
            fill="none"
            stroke={palette.a}
            strokeOpacity="0.95"
            strokeWidth="1.4"
            filter="url(#glowF)"
            points={points[ri].map((p) => p.join(",")).join(" ")}
          />
        ))}

        {points.flatMap((row, ri) =>
          row.map((p, ci) => {
            if ((ri + ci) % 5 !== 0) return null;
            return (
              <circle key={`d-${ri}-${ci}`} cx={p[0]} cy={p[1]} r="1.4" fill={isBist ? "#34d399" : "#fbbf24"} filter="url(#glowF)" />
            );
          })
        )}
      </svg>

      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-white/5 bg-black/50 backdrop-blur-md">
        {palette.kpis.map((k) => (
          <div key={k.label} className="px-3 py-2 text-center border-r border-white/5 last:border-r-0">
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">{k.label}</div>
            <div className={`font-mono text-xs font-bold ${k.color} mt-0.5`}>{k.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
