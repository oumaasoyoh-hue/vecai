import { Navbar, Footer } from "@/components/layout";
import { HeroSection } from "@/components/home/herosection";
import { WhoWeAre } from "@/components/home/who-we-are";
import { WhatWeOffer } from "@/components/home/what-we-offer";
import { HowItWorks } from "@/components/home/how-it-works";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <WhoWeAre />
        <WhatWeOffer />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}