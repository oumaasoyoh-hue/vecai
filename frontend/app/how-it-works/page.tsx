import type { Metadata } from 'next';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HowItWorks } from '@/components/home/how-it-works';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'How It Works — VECAI',
  description:
    'From describing a project to a live construction dashboard, VECAI streamlines every stage of your construction project.',
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />

      <main>
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
    </>
  );
}