"use client";

import { motion } from "framer-motion";
import { CULTURE_VALUES } from "./aboutData";

export function CultureValues() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Culture Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-extrabold uppercase tracking-widest text-[#F28500] block mb-3"
          >
            OUR CULTURE & VALUES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000080] tracking-tight mb-6"
          >
            Our Culture
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            VECAI&apos;s culture is built around solving real problems through technology while keeping people, collaboration and impact at the center of what we do.
          </motion.p>
        </div>

        {/* Subheading: Our Core Values */}
        <div className="mb-10 text-center sm:text-left">
          <h3 className="text-xl font-bold text-[#000080] tracking-tight border-b border-slate-200 pb-4">
            Our Core Values
          </h3>
        </div>

        {/* 6 Grid Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CULTURE_VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.article
                key={val.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-[#000080]/30 transition-all duration-200 group hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#000080] group-hover:bg-[#000080] group-hover:text-white group-hover:border-[#000080] flex items-center justify-center transition-colors duration-200 mb-5">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>

                <h4 className="text-lg font-bold text-[#000080] tracking-tight mb-2">
                  {val.name}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}