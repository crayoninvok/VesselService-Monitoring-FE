"use client";

import HeroSection from "@/components/(homepage)/HeroSection";
import FeaturesSection from "@/components/(homepage)/FeaturesSection";
import DashboardShowcase from "@/components/(homepage)/DashboardShowcase";
import CallToAction from "@/components/(homepage)/CallToAction";
import AboutSection from "@/components/(homepage)/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <DashboardShowcase />
      <CallToAction />
      <AboutSection />
    </div>
  );
}
