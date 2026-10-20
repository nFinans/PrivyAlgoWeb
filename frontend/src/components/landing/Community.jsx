import React from "react";
import { Youtube, Twitter, Instagram, TrendingUp, Award, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const socials = [
  { platform: "YouTube", handle: "@NFinans", url: "https://www.youtube.com/@NFinans", icon: Youtube, testid: "social-youtube" },
  { platform: "X / Twitter", handle: "@nFinans_X", url: "https://x.com/nFinans_X", icon: Twitter, testid: "social-twitter" },
  { platform: "Instagram", handle: "@nfinans_arastirma", url: "https://www.instagram.com/nfinans_arastirma/", icon: Instagram, testid: "social-instagram" },
];

export default function Community() {
  const { t } = useTranslation();

  const proof = [
    { icon: TrendingUp, value: t("proof_1_val"), label: t("proof_1_lbl") },
    { icon: Award, value: t("proof_2_val"), label: t("proof_2_lbl") },
    { icon: Users, value: t("proof_3_val"), label: t("proof_3_lbl") },
  ];

  return (
    <section id="community" data-testid="community-section" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative glass rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16">
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber-500 mb-4">
                {t("community_eyebrow")}
              </div>
              <h2 className="font-display font-black tracking-tighter text-4xl md:text-5xl lg:text-6xl text-white leading-[1.02]">
                {t("community_title_1")}
                <br />
                <span className="text-amber-400 text-glow-amber">{t("community_title_2")}</span>
              </h2>
              <p className="mt-5 text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
                {t("community_desc_1")} <span className="text-white font-medium">nFinans</span> {t("community_desc_2")} {t("community_desc_3")} {t("community_desc_4")} {t("community_desc_5")} <span className="text-white font-medium">nFinans</span> {t("community_desc_6")} <span className="text-white font-medium">PrivyAlgo'</span>{t("community_desc_7")}
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
                    <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" data-testid={s.testid} className="group flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-black/40 glass-hover">
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
                        {t("social_follow")}
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 p-5 rounded-xl border-l-2 border-amber-500/60 bg-amber-500/5 max-h-[420px] overflow-y-auto">
                <p className="font-mono text-[13px] text-zinc-300 italic leading-relaxed">
                  {t("community_quote_1")}
                </p>
                <p className="mt-3 font-mono text-[13px] text-zinc-300 italic leading-relaxed">
                  {t("community_quote_2")}
                </p>
                <p className="mt-3 font-mono text-[13px] text-zinc-300 italic leading-relaxed">
                  {t("community_quote_3")} <span className="text-amber-400 not-italic font-semibold">PrivyAlgo</span> {t("community_quote_4")}
                </p>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-amber-400">
                  {t("community_quote_author")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
