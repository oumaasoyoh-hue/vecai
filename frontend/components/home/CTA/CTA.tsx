"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#000080] text-white overflow-hidden">
      {/* Background Glow Accents */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F28500]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F28500]/15 text-[#F28500] text-xs sm:text-sm font-semibold mb-6 border border-[#F28500]/20"
        >
          <Sparkles className="w-4 h-4" />
          <span>START BUILDING SMARTER TODAY</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6"
        >
          Ready to Transform Your Construction Workflow?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-200/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join architects, contractors, and project managers using VECAI to simplify planning, cost estimation, and project delivery.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/get-started"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F28500] hover:bg-[#F28500]/90 text-white font-bold text-base shadow-lg transition-all duration-200 hover:scale-[1.02]"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base backdrop-blur-sm border border-white/20 transition-all duration-200"
          >
            Book a Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}