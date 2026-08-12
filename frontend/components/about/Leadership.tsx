"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LEADERSHIP_DATA } from "./aboutData";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function Leadership() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-extrabold uppercase tracking-widest text-[#F28500] block mb-3"
          >
            LEADERSHIP
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000080] tracking-tight mb-6"
          >
            The People Behind VECAI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            VECAI is driven by people who believe technology can help make construction more efficient, connected and accessible.
          </motion.p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {LEADERSHIP_DATA.map((leader, idx) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col sm:flex-row items-center p-6 gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-slate-200 flex-shrink-0 border border-slate-300">
                <Image
                  src={leader.image}
                  alt={`Profile picture for ${leader.name}`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col text-center sm:text-left flex-grow">
                {leader.isPlaceholder && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#F28500] bg-[#F28500]/10 px-2 py-0.5 rounded w-fit mx-auto sm:mx-0 mb-1">
                    Placeholder Profile
                  </span>
                )}
                <h3 className="text-lg font-bold text-[#000080]">
                  {leader.name}
                </h3>
                <p className="text-xs font-semibold text-[#F28500] mb-2">
                  {leader.role}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {leader.bio}
                </p>

                {leader.linkedinUrl && (
                  <a
                    href={leader.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#000080] hover:text-[#F28500] transition-colors self-center sm:self-start"
                    aria-label={`Connect with ${leader.name} on LinkedIn`}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}