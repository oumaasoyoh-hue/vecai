import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layout";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { CultureValues } from "@/components/about/CultureValues";
import { Journey } from "@/components/about/Journey";
import { Leadership } from "@/components/about/Leadership";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us — VECAI",
  description:
    "Learn about VECAI's mission, vision, core values, culture, and journey in building intelligent construction technology.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        <AboutHero />
        <MissionVision />
        <CultureValues />
        <Journey />
        <Leadership />
        <AboutCTA />
      </main>

      <Footer />
    </div>
  );
}