import React from "react";

export default function CyberBackground() {
  return (
    <div
      data-testid="cyber-background"
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.08)_0%,_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.06)_0%,_transparent_60%),radial-gradient(ellipse_at_bottom_left,_rgba(38,166,154,0.07)_0%,_transparent_55%)]" />

      {/* Animated grid */}
      <div className="absolute inset-0 cyber-grid cyber-radial-mask opacity-70" />

      {/* Particle layer */}
      <div className="particles" />

      {/* Vertical scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="scan-line absolute left-0 right-0 h-32 -top-32" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_55%,_rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
}
