import React from "react";
import { Activity, Wifi } from "lucide-react";

const gexBars = [
  { strike: "4350", val: -38, color: "purple" },
  { strike: "4375", val: -62, color: "purple" },
  { strike: "4400", val: -90, color: "purple" },
  { strike: "4425", val: -55, color: "purple" },
  { strike: "4450", val: -22, color: "purple" },
  { strike: "4475", val: 18, color: "amber" },
  { strike: "4500", val: 95, color: "amber" },
  { strike: "4525", val: 70, color: "amber" },
  { strike: "4550", val: 48, color: "amber" },
  { strike: "4575", val: 32, color: "amber" },
];

export default function WallStreetTerminal() {
  const maxAbs = Math.max(...gexBars.map((b) => Math.abs(b.val)));

  return (
    <div
      data-testid="ws-terminal-mockup"
      className="relative w-full glass rounded-2xl overflow-hidden glow-amber float-y"
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-black/60">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal-400/80" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 ml-3">
            opus_wall · cockpit
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          <Wifi className="h-3 w-3 text-teal-400" />
          <span>ws://stream</span>
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 live-dot" />
        </div>
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-4 divide-x divide-white/5 border-b border-white/5 bg-zinc-950/60">
        {[
          { label: "REJİM", value: "POZ. GAMMA", color: "text-teal-400" },
          { label: "NET GEX", value: "+1.42B", color: "text-amber-400" },
          { label: "NET VEX", value: "-380M", color: "text-purple-400" },
          { label: "0DTE", value: "62%", color: "text-amber-400" },
        ].map((k) => (
          <div key={k.label} className="px-3 py-2.5">
            <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
              {k.label}
            </div>
            <div className={`font-mono text-sm font-bold ${k.color} mt-1`}>{k.value}</div>
          </div>
        ))}
      </div>

      {/* Main chart */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Activity className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-300">
              Net GEX Dağılımı · SPX
            </span>
          </div>
          <div className="font-mono text-[10px] text-zinc-500">SPOT 4,508.32</div>
        </div>

        {/* Bars */}
        <div className="relative h-44 flex items-end gap-1.5">
          <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-white/10" />

          {gexBars.map((b, i) => {
            const pct = (Math.abs(b.val) / maxAbs) * 48;
            const isPos = b.val >= 0;
            const colorClass =
              b.color === "amber"
                ? "from-amber-500 to-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                : "from-purple-500 to-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.45)]";

            return (
              <div key={b.strike} className="relative flex-1 h-full flex flex-col justify-center">
                {isPos && (
                  <div
                    className={`bar-anim w-full rounded-t-sm bg-gradient-to-t ${colorClass}`}
                    style={{ height: `${pct}%`, marginBottom: "50%", animationDelay: `${i * 0.12}s` }}
                  />
                )}
                {!isPos && (
                  <div
                    className={`bar-anim w-full rounded-b-sm bg-gradient-to-b ${colorClass}`}
                    style={{ height: `${pct}%`, marginTop: "50%", animationDelay: `${i * 0.12}s` }}
                  />
                )}
              </div>
            );
          })}

          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-amber-400/70">
            <span className="absolute -top-2 left-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-amber-400 whitespace-nowrap text-glow-amber">
              HEDGE WALL
            </span>
          </div>
        </div>

        <div className="mt-2 flex gap-1.5">
          {gexBars.map((b) => (
            <div key={b.strike} className="flex-1 text-center font-mono text-[9px] text-zinc-600">
              {b.strike}
            </div>
          ))}
        </div>
      </div>

      {/* Heatmap */}
      <div className="px-4 sm:px-5 pb-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2">
          Greeks Heatmap · 0DTE
        </div>
        <div className="grid grid-cols-12 gap-0.5">
          {Array.from({ length: 36 }).map((_, i) => {
            const intensity = Math.abs(Math.sin(i * 1.37) * Math.cos(i * 0.61));
            const palette =
              i % 3 === 0 ? "245,158,11" : i % 3 === 1 ? "45,212,191" : "168,85,247";
            return (
              <div
                key={i}
                className="h-4 rounded-[2px]"
                style={{
                  background: `rgba(${palette}, ${0.15 + intensity * 0.55})`,
                  boxShadow: `inset 0 0 6px rgba(${palette}, ${intensity * 0.4})`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
