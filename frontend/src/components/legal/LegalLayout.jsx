import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import CyberBackground from "@/components/landing/CyberBackground";
import Navbar from "@/components/landing/Navbar";
import FooterSection from "@/components/landing/FooterSection";

export default function LegalLayout({ title, eyebrow, children }) {
  useEffect(() => {
    document.title = `${title} · PrivyAlgo`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div
      data-testid="legal-page"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      <CyberBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            {/* Back link */}
            <Link
              to="/"
              data-testid="legal-back-home"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500 hover:text-amber-400 transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Anasayfaya Dön
            </Link>

            {/* Eyebrow */}
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-500 mb-4">
              // {eyebrow}
            </div>

            {/* Title */}
            <h1 className="font-display font-black tracking-tighter text-3xl md:text-4xl lg:text-5xl text-white leading-[1.05]">
              {title}
            </h1>

            <div className="mt-4 h-px w-24 bg-gradient-to-r from-amber-400 via-teal-400 to-purple-400" />

            {/* Body */}
            <div className="mt-10 legal-prose">{children}</div>

            {/* Company footer */}
            <div className="mt-16 rounded-2xl glass p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-400 mb-4">
                Veri Sorumlusu &amp; İletişim
              </div>
              <p className="font-mono text-sm text-white font-semibold leading-relaxed">
                NFİNANS FİNANSAL BİLGİ TEKNOLOJİLERİ DANIŞMANLIK EĞİTİM VE TİCARET LİMİTED ŞİRKETİ
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-[12px] text-zinc-400">
                <div>
                  <span className="text-zinc-600">Vergi Dairesi / VKN:</span> GÖLCÜK – 6312088281
                </div>
                <div>
                  <span className="text-zinc-600">MERSİS No:</span> 0631208828100001
                </div>
                <div className="flex items-start gap-2 md:col-span-2">
                  <MapPin className="h-3.5 w-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                  YAZLIK YENİ MAH. TERMAL SK. A BLOK NO: 3 İÇ KAPI NO: 9 GÖLCÜK / KOCAELİ
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-teal-400" />
                  <a
                    href="https://wa.me/905415478141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-300 transition-colors"
                  >
                    Whatsapp: +90 541 547 81 41
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-amber-400" />
                  <a
                    href="mailto:info@privyalgo.com"
                    className="hover:text-amber-300 transition-colors"
                  >
                    info@privyalgo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <FooterSection />
      </div>
    </div>
  );
}
