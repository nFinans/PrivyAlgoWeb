import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, FileText, ShieldCheck, Scale, MessageCircle } from "lucide-react";

export default function FooterSection() {
  return (
    <footer
      data-testid="footer"
      className="relative border-t border-white/5 bg-black/80 backdrop-blur"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div
                className="h-10 w-10 rounded-md flex items-center justify-center overflow-hidden"
                style={{
                  background: "#000",
                  border: "1px solid rgba(245,158,11,0.40)",
                }}
              >
                <img
                  src="/logo.png"
                  alt="PrivyAlgo"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="font-mono leading-tight">
                <div className="text-[15px] font-bold tracking-tight text-white">PrivyAlgo</div>
                <div className="text-[9.5px] uppercase tracking-[0.2em] mt-0.5">
                  <span className="text-teal-400">BIST</span>
                  <span className="text-zinc-600 mx-1">+</span>
                  <span className="text-amber-400">WALLSTREET</span>
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-zinc-500 leading-relaxed max-w-md">
              BIST ve Wall Street piyasaları için kantitatif sinyaller üreten hibrit analiz
              terminali. Yatırım tavsiyesi değildir; bağımsız karar süreçlerinizde
              yardımcı bir araçtır.
            </p>
          </div>

          {/* Platform links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-500 mb-3">
                Platform
              </div>
              <ul className="space-y-2 font-mono text-sm text-zinc-400">
                <li>
                  <a href="#markets" data-testid="footer-link-markets" className="hover:text-amber-400 transition-colors">
                    Canlı Piyasalar
                  </a>
                </li>
                <li>
                  <a href="#features" data-testid="footer-link-modules" className="hover:text-amber-400 transition-colors">
                    Modüller
                  </a>
                </li>
                <li>
                  <a href="#technology" data-testid="footer-link-infra" className="hover:text-amber-400 transition-colors">
                    Altyapı
                  </a>
                </li>
                <li>
                  <a href="#pricing" data-testid="footer-link-pricing" className="hover:text-amber-400 transition-colors">
                    Paketler
                  </a>
                </li>
                <li>
                  <a href="#community" data-testid="footer-link-community" className="hover:text-amber-400 transition-colors">
                    Topluluk
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-500 mb-3">
                Destek
              </div>
              <ul className="space-y-2.5 font-mono text-sm text-zinc-400">
                <li>
                  <a
                    href="https://wa.me/905415478141"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="footer-link-whatsapp"
                    className="inline-flex items-center gap-2 hover:text-teal-300 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-teal-400" /> WhatsApp Destek
                  </a>
                </li>
                <li>
                  <Link
                    to="/kvkk-aydinlatma-metni"
                    data-testid="footer-link-kvkk"
                    className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> KVKK Aydınlatma Metni
                  </Link>
                </li>
                <li>
                  <Link
                    to="/uyelik-sozlesmesi"
                    data-testid="footer-link-uyelik"
                    className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
                  >
                    <Scale className="w-3.5 h-3.5 text-amber-400" /> Üyelik Sözleşmesi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gizlilik-politikasi"
                    data-testid="footer-link-gizlilik"
                    className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-400" /> Gizlilik Politikamız
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Status */}
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-500 mb-3">
              Sistem Durumu
            </div>
            <div className="rounded-lg border border-white/5 bg-black/40 p-4 space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">BIST · MS SQL</span>
                <span className="flex items-center gap-2 text-teal-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400 live-dot" />
                  AKTİF
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">WS · WebSocket</span>
                <span className="text-teal-400">AKTİF</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Opra Option Chain</span>
                <span className="text-teal-400">AKTİF</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Alpaca · Deribit</span>
                <span className="text-teal-400">AKTİF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Data Controller */}
        <div
          data-testid="footer-data-controller"
          className="mt-12 rounded-xl border border-teal-500/15 bg-teal-500/[0.03] p-5"
        >
          <div className="flex gap-3">
            <ShieldCheck className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500 leading-relaxed">
              <span className="text-teal-400">Veri Sorumlusu:</span> NFİNANS FİNANSAL BİLGİ TEKNOLOJİLERİ DANIŞMANLIK EĞİTİM VE TİCARET LİMİTED ŞİRKETİ, MERSİS No: 0631208828100001
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          data-testid="footer-disclaimer"
          className="mt-4 rounded-xl border border-amber-500/15 bg-amber-500/[0.03] p-5"
        >
          <div className="flex gap-3">
            <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500 leading-relaxed">
              <span className="text-amber-400">Finansal Risk Uyarısı:</span> Hisse, opsiyon ve
              türev araçların ticareti yüksek risk içerir ve tüm yatırımcılar için uygun
              olmayabilir. PrivyAlgo BIST ve WallStreet Terminal tarafından sağlanan veriler,
              göstergeler ve analizler yalnızca eğitim ve araştırma amaçlıdır; yatırım tavsiyesi
              niteliği taşımaz. Geçmiş performans gelecekteki sonuçların garantisi değildir.
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-mono text-[11px] text-zinc-500">
            © {new Date().getFullYear()} <span className="text-white">PrivyAlgo</span>. Tüm Hakları Saklıdır.
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600 flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 dot-pulse" />
              BIST · v2.0
            </span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 dot-pulse" />
              WS · v3.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
