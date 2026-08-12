"use client";

import { motion } from "framer-motion";
import { Target, Compass } from "lucide-react";

export function MissionVision() {
  return (
    <section id="mission-vision" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-between bg-white rounded-2xl p-8 sm:p-10 border-t-4 border-t-[#000080] border-x border-b border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#000080]/10 text-[#000080] flex items-center justify-center">
                  <Target className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#000080]">
                  OUR MISSION
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000080] tracking-tight mb-4">
                Smarter, Transparent & Accessible
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                To make construction planning and execution smarter, more transparent and accessible through artificial intelligence and technology.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>MISSION STATEMENT</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#000080]" />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col justify-between bg-white rounded-2xl p-8 sm:p-10 border-t-4 border-t-[#F28500] border-x border-b border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F28500]/10 text-[#F28500] flex items-center justify-center">
                  <Compass className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F28500]">
                  OUR VISION
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000080] tracking-tight mb-4">
                Africa&apos;s Leading Platform
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                To become Africa&apos;s leading intelligent construction technology platform and help create a more efficient, connected and sustainable construction industry.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
              <span>VISION STATEMENT</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F28500]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}