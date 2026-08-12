"use client";

import { motion } from "framer-motion";
import { WhoCard } from "./WhoCard";
import { CenterImage } from "./CenterImage";
import { WHO_WE_ARE_DATA } from "./whoData";

export function WhoWeAre() {
  const missionCard = WHO_WE_ARE_DATA.find((c) => c.id === 1)!;
  const storyCard = WHO_WE_ARE_DATA.find((c) => c.id === 2)!;
  const whyCard = WHO_WE_ARE_DATA.find((c) => c.id === 3)!;
  const visionCard = WHO_WE_ARE_DATA.find((c) => c.id === 4)!;

  // Image path pointing to public/assets/images/hero/who.jpeg
  const imagePath = "/assets/images/hero/who.jpeg";

  return (
    <section
      className="py-16 md:py-24 bg-[#F8FAFC] overflow-hidden"
      aria-labelledby="who-we-are-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#F28500] block mb-3"
          >
            WHO WE ARE
          </motion.span>

          <motion.h2
            id="who-we-are-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000080] tracking-tight mb-6"
          >
            Building Africa&apos;s Future Through Intelligent Construction
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            VECAI is transforming construction by connecting people, technology
            and artificial intelligence into one smart platform that simplifies
            planning, estimating, collaboration and project delivery.
          </motion.p>
        </div>

        {/* Layout: Mobile Stack (< lg) / Desktop Cross Shape (>= lg) */}
        
        {/* Mobile / Tablet Vertical Stack */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          <WhoCard card={missionCard} />
          <WhoCard card={storyCard} />
          <div className="my-2 w-full flex justify-center">
            <CenterImage
              src={imagePath}
              alt="VECAI Intelligent Construction Platform in action"
            />
          </div>
          <WhoCard card={whyCard} />
          <WhoCard card={visionCard} />
        </div>

        {/* Desktop Cross Layout Grid */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-8">
          {/* Top Row: Mission */}
          <div className="flex justify-center w-full">
            <WhoCard card={missionCard} />
          </div>

          {/* Middle Row: Story | Center Image | Why VECAI */}
          <div className="flex items-center justify-center gap-8 w-full">
            <WhoCard card={storyCard} />
            <CenterImage
              src={imagePath}
              alt="VECAI Intelligent Construction Platform in action"
            />
            <WhoCard card={whyCard} />
          </div>

          {/* Bottom Row: Vision */}
          <div className="flex justify-center w-full">
            <WhoCard card={visionCard} />
          </div>
        </div>
      </div>
    </section>
  );
}