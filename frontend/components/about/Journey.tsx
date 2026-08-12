"use client";

import { motion } from "framer-motion";
import { JOURNEY_STAGES } from "./aboutData";

export function Journey() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
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
            OUR JOURNEY
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000080] tracking-tight mb-6"
          >
            The Stages of Growth
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            How VECAI evolved from observing structural inefficiencies to constructing an integrated platform.
          </motion.p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative py-8">
          <div className="absolute top-[138px] left-0 right-0 h-1 bg-[#000080]/20 z-0" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {JOURNEY_STAGES.map((stage, idx) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="h-24 flex flex-col justify-end mb-4 px-1">
                  <span className="text-[11px] font-black text-[#F28500] uppercase tracking-wider">
                    Stage {stage.stageNumber}
                  </span>
                  <h3 className="text-sm font-bold text-[#000080] mt-1">
                    {stage.title}
                  </h3>
                </div>

                <div className="w-7 h-7 rounded-full bg-white border-4 border-[#000080] group-hover:border-[#F28500] flex items-center justify-center transition-colors duration-200 shadow-sm mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#000080] group-hover:bg-[#F28500] transition-colors" />
                </div>

                <div className="px-1">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {stage.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative border-l-2 border-[#000080] ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
          {JOURNEY_STAGES.map((stage, idx) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
            >
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-[#F28500] border-4 border-white shadow-sm" />

              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold text-[#F28500] uppercase tracking-wider">
                  Stage {stage.stageNumber}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {stage.subtitle}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#000080] mb-2">
                {stage.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}