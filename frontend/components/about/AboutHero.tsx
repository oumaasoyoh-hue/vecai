"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#000080]/5 border border-[#000080]/10 mb-6">
              <Building2 className="w-4 h-4 text-[#F28500]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#000080]">
                ABOUT US
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000080] tracking-tight leading-[1.15] mb-6">
              Building a Smarter Future for Construction
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              VECAI brings artificial intelligence, construction expertise and connected technology together to make building projects easier to plan, price, manage and deliver.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#000080] hover:bg-[#000080]/90 text-white font-bold text-sm shadow-sm transition-all duration-200"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#mission-vision"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-300 hover:border-[#000080] bg-white text-[#000080] font-bold text-sm transition-all duration-200"
              >
                Our Mission & Vision
              </Link>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 aspect-[4/3] lg:aspect-[1/1]">
              <Image
                src="/assets/images/about/about-hero.jpg"
                alt="Engineers and developers examining digital construction blueprints on the VECAI AI platform"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-md">
                <p className="text-xs font-bold text-[#000080] uppercase tracking-wider mb-1">
                  Connected Intelligence
                </p>
                <p className="text-xs text-slate-600">
                  Combining data precision with field expertise to elevate construction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}