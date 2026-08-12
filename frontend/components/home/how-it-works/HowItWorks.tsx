"use client";

import { motion } from "framer-motion";
import { StepCard } from "./StepCard";
import { HOW_IT_WORKS_DATA } from "./howData";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#F28500] block mb-3"
          >
            HOW IT WORKS
          </motion.span>

          <motion.h2
            id="how-it-works-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000080] tracking-tight mb-6"
          >
            4 Simple Steps to Smarter Construction
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            From your initial idea to final physical delivery, VECAI streamlines every stage of your construction project.
          </motion.p>
        </div>

        {/* Steps Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HOW_IT_WORKS_DATA.map((step, index) => (
            <StepCard
              key={step.stepNumber}
              step={step}
              isLast={index === HOW_IT_WORKS_DATA.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}