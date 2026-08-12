"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { OfferCardProps } from "./types";

export function OfferCard({ card }: OfferCardProps) {
  const { title, description, icon: Icon, href = "#" } = card;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between min-h-[270px] w-full bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
    >
      <div>
        {/* Icon Container */}
        <div className="w-12 h-12 rounded-xl bg-[#F28500]/10 text-[#F28500] group-hover:bg-[#F28500] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6 shrink-0">
          <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#000080] tracking-tight mb-3 group-hover:text-[#000080]/90 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Action CTA Link */}
      <div className="pt-6 mt-auto">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F28500] transition-all duration-300 group-hover:gap-2.5"
          aria-label={`Learn more about ${title}`}
        >
          <span>Learn More</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}