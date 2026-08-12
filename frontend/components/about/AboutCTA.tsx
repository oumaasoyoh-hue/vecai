"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="py-20 lg:py-24 bg-[#F28500] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Let&apos;s Build the Future of Construction Together.
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-10 max-w-2xl mx-auto">
            VECAI is building the technology to make construction smarter, more connected and more accessible.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F28500] hover:bg-[#F28500]/90 text-white font-bold text-base shadow-md transition-all duration-200"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/30 hover:border-white bg-white/5 text-white font-bold text-base transition-all duration-200"
            >
              Explore VECAI
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}