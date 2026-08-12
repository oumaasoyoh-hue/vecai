"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CenterImageProps } from "./types";

export function CenterImage({ src, alt }: CenterImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-[360px] sm:max-w-[420px] lg:w-[440px] lg:max-w-none aspect-square rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 group mx-auto"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
        priority={false}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      
      {/* Premium Glassmorphism Accent Badge */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 text-white flex flex-col justify-end">
        <span className="text-xs uppercase tracking-wider font-semibold text-[#F28500]">
          VECAI Engine
        </span>
        <p className="text-sm font-medium text-slate-100">
          AI-Powered Construction Platform
        </p>
      </div>
    </motion.div>
  );
}