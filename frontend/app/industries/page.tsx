import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustryGrid } from "@/components/industries/IndustryGrid";
import { ComplianceStrip } from "@/components/industries/ComplianceStrip";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Industries — VECAI",
  description:
    "Residential, commercial, industrial, infrastructure, healthcare, education, hospitality, and renewable energy — VECAI adapts its estimating models per industry.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <IndustriesHero />
        <IndustryGrid />
        <ComplianceStrip />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
