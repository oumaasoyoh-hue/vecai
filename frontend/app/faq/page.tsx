import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FAQHero } from "@/components/faq/FAQHero";
import { FAQCategories } from "@/components/faq/FAQCategories";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "FAQ — VECAI",
  description:
    "Answers on the AI Consultant, estimate accuracy, the supplier marketplace, data security, and billing.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <FAQHero />
        <FAQCategories />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
