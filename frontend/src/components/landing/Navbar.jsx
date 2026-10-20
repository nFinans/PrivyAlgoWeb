import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const links = [
    { label: t("nav_markets"), href: "#markets", external: false },
    { label: t("nav_modules"), href: "#features", external: false },
    { label: t("nav_infrastructure"), href: "#technology", external: false },
    { label: t("nav_pricing"), href: "#pricing", external: false },
    { label: t("nav_about"), href: "#community", external: false },
    { label: t("nav_blog"), href: "https://blog.privyalgo.com", external: true },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-24 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group shrink-0">
            <img src="/logo-horizontal.png" alt="PrivyAlgo" className="h-14 md:h-20 w-auto object-contain" style={{ filter: "drop-shadow(0 0 12px rgba(245,158,11,0.25))" }} loading="eager" />
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} target={l.external ? "_blank" : undefined} rel={l.external ? "noopener noreferrer" : undefined} className="font-mono text-[12px] uppercase tracking-[0.15em] text-zinc-400 hover:text-amber-400 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 relative">
            <div className="flex items-center gap-2 mr-2 font-mono text-[12px]">
              <button onClick={() => changeLanguage('tr')} className={`transition-colors ${i18n.language === 'tr' || !i18n.language?.startsWith('en') ? 'text-amber-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}>TR</button>
              <span className="text-zinc-700">|</span>
              <button onClick={() => changeLanguage('en')} className={`transition-colors ${i18n.language?.startsWith('en') ? 'text-amber-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}>EN</button>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 live-dot" />
              {t("nav_live")}
            </div>
            <button onClick={() => setDropOpen((v) => !v)} className="font-mono text-[13px] font-semibold px-4 py-2 rounded-md bg-amber-500 text-black hover:bg-amber-400 transition-colors inline-flex items-center gap-1.5">
              {t("nav_access")} <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {dropOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 rounded-lg border border-white/10 bg-zinc-950/95 backdrop-blur-xl shadow-2xl overflow-hidden" onMouseLeave={() => setDropOpen(false)}>
                <a href="https://bist.privyalgo.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 border-l-2 border-teal-400/0 hover:border-teal-400 transition-all">
                  <span className="h-2 w-2 rounded-full bg-teal-400 dot-pulse" />
                  <div className="font-mono">
                    <div className="text-[13px] font-semibold text-white">BIST Terminal</div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 mt-0.5">{t("nav_bist_desc")}</div>
                  </div>
                </a>
                <a href="https://wallstreet.privyalgo.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 border-l-2 border-amber-400/0 hover:border-amber-400 transition-all">
                  <span className="h-2 w-2 rounded-full bg-amber-400 dot-pulse" />
                  <div className="font-mono">
                    <div className="text-[13px] font-semibold text-white">WallStreet Terminal</div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 mt-0.5">{t("nav_ws_desc")}</div>
                  </div>
                </a>
              </div>
            )}
          </div>

          <button onClick={() => setOpen((v) => !v)} className="lg:hidden md:flex h-9 w-9 rounded-md border border-white/10 flex items-center justify-center text-white">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 flex flex-col gap-3 border-t border-white/5 pt-4">
            <div className="flex items-center gap-3 mb-2 font-mono text-sm px-4">
              <button onClick={() => {changeLanguage('tr'); setOpen(false);}} className={i18n.language === 'tr' || !i18n.language?.startsWith('en') ? 'text-amber-400 font-bold' : 'text-zinc-500'}>TR</button>
              <span className="text-zinc-700">|</span>
              <button onClick={() => {changeLanguage('en'); setOpen(false);}} className={i18n.language?.startsWith('en') ? 'text-amber-400 font-bold' : 'text-zinc-500'}>EN</button>
            </div>
            {links.map((l) => (
              <a key={l.href} href={l.href} target={l.external ? "_blank" : undefined} rel={l.external ? "noopener noreferrer" : undefined} onClick={() => setOpen(false)} className="font-mono text-sm text-zinc-300 hover:text-amber-400 px-4">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
