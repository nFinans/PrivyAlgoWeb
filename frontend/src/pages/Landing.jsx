import React from "react";
import CyberBackground from "@/components/landing/CyberBackground";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import MarketsInsights from "@/components/landing/MarketsInsights";
import Features from "@/components/landing/Features";
import Technology from "@/components/landing/Technology";
import Pricing from "@/components/landing/Pricing";
import Community from "@/components/landing/Community";
import FooterSection from "@/components/landing/FooterSection";

export default function Landing() {
  return (
    <div
      data-testid="landing-page"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      <CyberBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <MarketsInsights />
          <Features />
          <Technology />
          <Pricing />
          <Community />
        </main>
        <FooterSection />
      </div>
    </div>
  );
}
