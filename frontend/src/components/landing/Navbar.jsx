import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Canlı Piyasalar", href: "#markets", external: false },
  { label: "Modüller", href: "#features", external: false },
  { label: "Altyapı", href: "#technology", external: false },
  { label: "Paketler", href: "#pricing", external: false },
  { label: "Topluluk", href: "#community", external: false },
  { label: "Blog", href: "https://www.nfinans.net", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <header
      data-testid="navbar"
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            data-testid="navbar-logo"
            className="flex items-center gap-3 group shrink-0"
          >
            <img
              src="/logo-horizontal.png"
              alt="PrivyAlgo · Predictive Complex Data Analytics · BIST + WallStreet"
              className="h-10 md:h-11 w-auto object-contain"
              style={{ filter: "drop-shadow(0 0 12px rgba(245,158,11,0.25))" }}
              loading="eager"
            />
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                data-testid={`navbar-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-mono text-[12px] uppercase tracking-[0.15em] text-zinc-400 hover:text-amber-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA dropdown */}
          <div className="hidden md:flex items-center gap-3 relative">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 live-dot" />
              LIVE
            </div>
            <button
              onClick={() => setDropOpen((v) => !v)}
              data-testid="navbar-cta"
              className="font-mono text-[13px] font-semibold px-4 py-2 rounded-md bg-amber-500 text-black hover:bg-amber-400 transition-colors inline-flex items-center gap-1.5"
            >
              Terminallere Eriş
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {dropOpen && (
              <div
                data-testid="navbar-login-dropdown"
                className="absolute top-full right-0 mt-2 w-56 rounded-lg border border-white/10 bg-zinc-950/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                onMouseLeave={() => setDropOpen(false)}
              >
                <a
                  href="https://bist.privyalgo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="navbar-login-bist"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 border-l-2 border-teal-400/0 hover:border-teal-400 transition-all"
                >
                  <span className="h-2 w-2 rounded-full bg-teal-400 dot-pulse" />
                  <div className="font-mono">
                    <div className="text-[13px] font-semibold text-white">
                      BIST Terminal
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 mt-0.5">
                      Borsa İstanbul
                    </div>
                  </div>
                </a>
                <a
                  href="https://wallstreet.privyalgo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="navbar-login-ws"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 border-l-2 border-amber-400/0 hover:border-amber-400 transition-all"
                >
                  <span className="h-2 w-2 rounded-full bg-amber-400 dot-pulse" />
                  <div className="font-mono">
                    <div className="text-[13px] font-semibold text-white">
                      WallStreet Terminal
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 mt-0.5">
                      NYSE · NASDAQ · SPX
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            data-testid="navbar-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden md:flex h-9 w-9 rounded-md border border-white/10 flex items-center justify-center text-white"
            aria-label="Menüyü aç"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            data-testid="navbar-mobile-menu"
            className="lg:hidden pb-4 flex flex-col gap-3 border-t border-white/5 pt-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-zinc-300 hover:text-amber-400"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://bist.privyalgo.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="font-mono text-sm font-semibold px-4 py-2 rounded-md border border-teal-400/50 text-teal-300 w-fit"
            >
              BIST Terminal
            </a>
            <a
              href="https://wallstreet.privyalgo.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="font-mono text-sm font-semibold px-4 py-2 rounded-md bg-amber-500 text-black w-fit"
            >
              WallStreet Terminal
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
