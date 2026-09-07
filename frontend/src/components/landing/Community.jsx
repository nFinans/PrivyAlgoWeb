import React from "react";
import { Youtube, Twitter, Instagram, TrendingUp, Award, Users } from "lucide-react";

const socials = [
  { platform: "YouTube", handle: "@NFinans", url: "https://www.youtube.com/@NFinans", icon: Youtube, testid: "social-youtube" },
  { platform: "X / Twitter", handle: "@nFinans_X", url: "https://x.com/nFinans_X", icon: Twitter, testid: "social-twitter" },
  { platform: "Instagram", handle: "@nfinans_arastirma", url: "https://www.instagram.com/nfinans_arastirma/", icon: Instagram, testid: "social-instagram" },
];

const proof = [
  { icon: TrendingUp, value: "Piyasa Trendlerini", label: "Algoritmik Verilere Dayalı Analizler Yaparak Takip Edin!" },
  { icon: Award, value: "Veri Odaklı Analiz Platformu", label: "GEX & Vanna hedge duvarları + BIST Sentiment & Emir Analitiği Anzlizleri" },
  { icon: Users, value: "Youtube, Twitter & Instagram", label: "Veri Odaklı Analiz Meraklıları için Yayınlar & Eğitimler" },
];

export default function Community() {
  return (
    <section
      id="community"
      data-testid="community-section"
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative glass rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16">
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-500 mb-4">
                // nFinans & Privy Algo Hakkında
              </div>
              <h2 className="font-display font-black tracking-tighter text-4xl md:text-5xl lg:text-6xl text-white leading-[1.02]">
                Veriye Dayalı Kanıtlanmış Öngörüler.
                <br />
                <span className="text-amber-400 text-glow-amber">Kurumsal Analiz Disiplini.</span>
              </h2>
              <p className="mt-5 text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
                Finansal yazılımlar ve emir akışı (order flow) analitiği geliştiren{" "}
                <span className="text-white font-medium">nFinans</span> olarak, Veri odaklı analiz yapmak ve karar vermek isteyen yatırımcıların hem iç piyasaları hem de küresel piyasa dinamiklerini daha şeffaf ve rasyonel bir şekilde okuyabilmesini amaçlıyoruz. 
                Bu doğrultuda, Borsa İstanbul için PrivyAlgo BIST (Hisse Senedi Piyasaları için BIST Veri Analitiklerini kullanarak) ve ABD borsaları ile ETF'ler için PrivyWallStreet (OPRA opsiyon akışlarını analiz ederek) veri analizi terminallerimizi hayata geçirdik.
                kantitatif analizleri üzerine sürekli eğitim üretir. Türkiye&apos;nin en
                disiplinli quant topluluklarını oluşturmak isteyen <span className="text-white font-medium">nFinans</span> ve <span className="text-white font-medium">PrivyAlgo'</span> yu takip edin...
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {proof.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div key={i} className="rounded-xl border border-white/5 bg-black/40 p-4">
                      <Icon className="h-4 w-4 text-amber-400 mb-2" />
                      <div className="font-mono text-sm font-bold text-white">{p.value}</div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 mt-1 leading-relaxed">
                        {p.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={s.testid}
                      className="group flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-black/40 glass-hover"
                    >
                      <div className="h-12 w-12 rounded-lg border border-amber-500/30 bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                        <Icon className="h-5 w-5 text-amber-400" strokeWidth={2} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                          {s.platform}
                        </div>
                        <div className="font-mono font-bold text-base text-white">{s.handle}</div>
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Takip et →
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 p-5 rounded-xl border-l-2 border-amber-500/60 bg-amber-500/5 max-h-[420px] overflow-y-auto">
                <p className="font-mono text-[13px] text-zinc-300 italic leading-relaxed">
                  &ldquo;Piyasalarda kazanırken şans diye bir şey yoktur; sadece iyi analiz edilmiş
                  veriler ve kanıtlanmış algoritmalar vardır. Çoğu yatırımcı, fiyatların piyasa haberleriyle
                  veya tesadüfi dalgalanmalarla yön bulduğuna inanır. Yanılıyorlar.
                </p>
                <p className="mt-3 font-mono text-[13px] text-zinc-300 italic leading-relaxed">
                  Ekranınızın arkasında devasa, sessiz ve &lsquo;görünmez&rsquo; bir veri
                  havuzu çalışıyor: Gamma seviyeleri, Delta pozisyonları, Vanna akışları,
                  emir defterlerinin gizli dinamikleri ve daha birçok faktör piyasayı
                  saniye saniye yönlendiriyor... Yani piyasalar günün sonunda rastgele hareket etmiyor; bu
                  fark edemediğiniz yada iyi analiz edemediğiniz devasa verilere paralel olarak, büyük likidite
                  akışlarının kurduğu raylar üzerinde ilerliyorlar.
                </p>
                <p className="mt-3 font-mono text-[13px] text-zinc-300 italic leading-relaxed">
                  Wall Street&apos;in karmaşık ağlarından BIST&apos;in derinliklerine kadar,
                  fiyatı hareket ettiren o &lsquo;görünmez&rsquo; ve &lsquo;takibi
                  imkânsız&rsquo; sanılan analiz gücünü ekranınıza taşımaya çalışıyoruz. nFinans, PriVYAlgo çatısı altında
                  karanlıkta kalan bu verileri aydınlatıyor; piyasadaki yatırımcıların
                  %90&apos;ının mahrum kaldığı bu gizli haritaları, gelişmiş{" "}
                  <span className="text-amber-400 not-italic font-semibold">PrivyAlgo</span>{" "}
                  analiz araçları, yazılımları ve veri analiz terminalleriyle siz bireysel yatırımcılar için görünür
                  kılıyoruz.&rdquo;
                </p>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-amber-400">
                  — nFinans Bilgi Teknojileri, Araştırma ve Danışmanlık
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
