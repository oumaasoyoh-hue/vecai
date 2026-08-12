"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { WhoCardProps } from "./types";

export function WhoCard({ card }: WhoCardProps) {
  const { title, description, icon: Icon, color, href = "#" } = card;

  const isBlue = color === "blue";

  const iconBg = isBlue
    ? "bg-[#000080]/10 text-[#000080]"
    : "bg-[#F28500]/10 text-[#F28500]";

  const borderHover = isBlue
    ? "hover:border-[#000080]/30"
    : "hover:border-[#F28500]/30";

  const linkColor = isBlue ? "text-[#000080]" : "text-[#F28500]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className={`w-full max-w-[360px] lg:w-[320px] lg:h-[220px] bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${borderHover} mx-auto`}
    >
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            {title}
          </h3>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="pt-3">
        <Link
          href={href}
          className={`inline-flex items-center text-sm font-semibold gap-1.5 transition-gap duration-200 hover:gap-2.5 ${linkColor}`}
          aria-label={`Learn more about ${title}`}
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.article>
  );
}