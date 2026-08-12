import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingTiers } from "@/components/pricing/PricingTiers";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Pricing — VECAI",
  description:
    "Start free on one project. Upgrade to Professional for unlimited projects and the full supplier marketplace, or talk to sales for Enterprise.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingHero />
        <PricingTiers />
        <ComparisonTable />
        <PricingFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
