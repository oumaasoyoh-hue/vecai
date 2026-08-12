import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HowItWorksHero } from "@/components/how-it-works/HowItWorksHero";
import { StepWalkthrough } from "@/components/how-it-works/StepWalkthrough";
import { TimeComparison } from "@/components/how-it-works/TimeComparison";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "How It Works — VECAI",
  description:
    "From describing a project to a live construction dashboard — the six steps VECAI uses to turn an idea into a costed, buildable plan.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <HowItWorksHero />
        <StepWalkthrough />
        <TimeComparison />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
