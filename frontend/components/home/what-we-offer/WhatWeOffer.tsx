"use client";

import { motion } from "framer-motion";
import { OfferCard } from "./offerCard";
import { OFFER_SERVICES_DATA } from "./offerData";

export function WhatWeOffer() {
  return (
    <section
      className="relative py-20 lg:py-28 bg-[#000080] text-white overflow-hidden"
      aria-labelledby="what-we-offer-heading"
    >
      {/* Subtle background ambient glows using primary orange */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#F28500]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#F28500]/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#F28500] block mb-3"
          >
            WHAT WE OFFER
          </motion.span>

          <motion.h2
            id="what-we-offer-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6"
          >
            Everything You Need to Build Smarter
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-200/90 leading-relaxed"
          >
            VECAI connects intelligent construction tools, people and real-time information together into one seamlessly unified ecosystem.
          </motion.p>
        </div>

        {/* Services Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {OFFER_SERVICES_DATA.map((service) => (
            <OfferCard key={service.id} card={service} />
          ))}
        </div>
      </div>
    </section>
  );
}