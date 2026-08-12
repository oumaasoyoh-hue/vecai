import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { Capabilities } from "@/components/solutions/Capabilities";
import { AudienceGrid } from "@/components/solutions/AudienceGrid";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Solutions — VECAI",
  description:
    "AI Consultant, Architect Workspace, Quantity Survey, Supplier Marketplace, Material Comparison, and Construction Timeline — one connected platform for every stage of a build.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SolutionsHero />
        <Capabilities />
        <AudienceGrid />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
