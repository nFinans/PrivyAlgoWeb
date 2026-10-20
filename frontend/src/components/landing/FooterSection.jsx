import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, FileText, ShieldCheck, Scale, MessageCircle, ShoppingCart, RefreshCcw } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FooterSection() {
  const { t } = useTranslation();

  return (
    <footer className="relative border-t border-white/5 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md flex items-center justify-center overflow-hidden" style={{ background: "#000", border: "1px solid rgba(245,158,11,0.40)" }}>
                <img src="/logo.png" alt="PrivyAlgo" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="font-mono leading-tight">
                <div className="text-[15px] font-bold tracking-tight text-white">PrivyAlgo</div>
                <div className="text-[9.5px] uppercase tracking-[0.2em] mt-0.5">
                  <span className="text-teal-400">BIST</span><span className="text-zinc-600 mx-1">+</span><span className="text-amber-400">WALLSTREET</span>
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-zinc-500 leading-relaxed max-w-md">{t("footer_desc")}</p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-500 mb-3">{t("footer_platform")}</div>
              <ul className="space-y-2 font-mono text-sm text-zinc-400">
                <li><a href="#markets" className="hover:text-amber-400 transition-colors">{t("nav_markets")}</a></li>
                <li><a href="#features" className="hover:text-amber-400 transition-colors">{t("nav_modules")}</a></li>
                <li><a href="#technology" className="hover:text-amber-400 transition-colors">{t("nav_infrastructure")}</a></li>
                <li><a href="#pricing" className="hover:text-amber-400 transition-colors">{t("nav_pricing")}</a></li>
                <li><a href="#community" className="hover:text-amber-400 transition-colors">{t("nav_about")}</a></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-500 mb-3">{t("footer_support")}</div>
              <ul className="space-y-2.5 font-mono text-sm text-zinc-400">
                <li><a href="https://wa.me/905415478141" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-teal-300 transition-colors"><MessageCircle className="w-3.5 h-3.5 text-teal-400" /> {t("footer_whatsapp")}</a></li>
                <li><Link to="/kvkk-aydinlatma-metni" className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"><ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> {t("footer_kvkk")}</Link></li>
                <li><Link to="/uyelik-sozlesmesi" className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"><Scale className="w-3.5 h-3.5 text-amber-400" /> {t("footer_contract")}</Link></li>
                <li><Link to="/mesafeli-satis-sozlesmesi" className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"><ShoppingCart className="w-3.5 h-3.5 text-amber-400" /> {t("footer_distant")}</Link></li>
                <li><Link to="/iade-iptal-sartlari" className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"><RefreshCcw className="w-3.5 h-3.5 text-amber-400" /> {t("footer_refund")}</Link></li>
                <li><Link to="/gizlilik-politikasi" className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"><FileText className="w-3.5 h-3.5 text-amber-400" /> {t("footer_privacy")}</Link></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-500 mb-3">{t("footer_status")}</div>
            <div className="rounded-lg border border-white/5 bg-black/40 p-4 space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between"><span className="text-zinc-500">BIST · MS SQL</span><span className="flex items-center gap-2 text-teal-400"><span className="h-1.5 w-1.5 rounded-full bg-teal-400 live-dot" />{t("footer_active")}</span></div>
              <div className="flex items-center justify-between"><span className="text-zinc-500">WS · WebSocket</span><span className="text-teal-400">{t("footer_active")}</span></div>
              <div className="flex items-center justify-between"><span className="text-zinc-500">Opra Option Chain</span><span className="text-teal-400">{t("footer_active")}</span></div>
              <div className="flex items-center justify-between"><span className="text-zinc-500">Alpaca · Deribit</span><span className="text-teal-400">{t("footer_active")}</span></div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-teal-500/15 bg-teal-500/[0.03] p-5">
          <div className="flex gap-3">
            <ShieldCheck className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500 leading-relaxed"><span className="text-teal-400">{t("footer_controller")}</span> NFİNANS FİNANSAL BİLGİ TEKNOLOJİLERİ DANIŞMANLIK EĞİTİM VE TİCARET LİMİTED ŞİRKETİ, MERSİS No: 0631208828100001</p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/[0.03] p-5">
          <div className="flex gap-3">
            <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500 leading-relaxed"><span className="text-amber-400">{t("footer_disclaimer_title")}</span> {t("footer_disclaimer_desc")}</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono text-[11px] text-zinc-500 order-3 md:order-1">© {new Date().getFullYear()} <span className="text-white">PrivyAlgo</span>. {t("footer_rights")}</div>
          <div className="flex items-center justify-center order-1 md:order-2"><img src="/logo_band_white@1X.png" alt="Güvenli Ödeme" className="h-6 md:h-7 object-contain opacity-80 hover:opacity-100 transition-opacity" loading="lazy" /></div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600 flex items-center gap-3 order-2 md:order-3">
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-400 dot-pulse" />BIST · v2.0</span><span className="text-zinc-700">·</span><span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-amber-400 dot-pulse" />WS · v3.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
