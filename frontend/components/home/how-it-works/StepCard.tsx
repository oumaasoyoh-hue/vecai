"use client";

import { motion } from "framer-motion";
import type { StepCardProps } from "./types";

export function StepCard({ step, isLast }: StepCardProps) {
  const { stepNumber, title, description, icon: Icon } = step;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-start bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      {/* Top Row: Number & Icon */}
      <div className="flex items-center justify-between w-full mb-6">
        <span className="text-3xl font-black text-[#F28500]/20 group-hover:text-[#F28500] transition-colors duration-300">
          {stepNumber}
        </span>
        <div className="w-12 h-12 rounded-xl bg-[#000080]/5 text-[#000080] group-hover:bg-[#000080] group-hover:text-white flex items-center justify-center transition-colors duration-300">
          <Icon className="w-6 h-6" aria-hidden="true" />
        </div>
      </div>

      {/* Step Title */}
      <h3 className="text-xl font-bold text-[#000080] tracking-tight mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
        {description}
      </p>
    </motion.article>
  );
}