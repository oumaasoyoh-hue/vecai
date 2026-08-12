"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

import type { HeroSlideData } from "./types";
import { Container } from "@/components/ui/Layout";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Layout";

interface HeroSlideProps {
  slide: HeroSlideData;
  isActive: boolean;
}

export default function HeroSlide({
  slide,
  isActive,
}: HeroSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: isActive ? 1 : 0,
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
      className="absolute inset-0 h-full w-full"
    >
      {/* =========================================
          BACKGROUND IMAGE
          ========================================= */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* =========================================
          OPTIONAL LIGHT OVERLAY
          
          This is neutral/white, NOT blue.
          Remove this div completely if you
          want absolutely no overlay.
          ========================================= */}
      <div className="absolute inset-0 bg-white/10" />

      {/* =========================================
          CONTENT
          ========================================= */}
      <Container className="relative z-10 flex h-full items-center">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              isActive
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <Eyebrow>
              <span className="h-1.5 w-1.5 rounded-full bg-[#F28500]" />

              {slide.eyebrow}
            </Eyebrow>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={
              isActive
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              mt-5
              max-w-3xl
              text-4xl
              font-bold
              leading-tight
              tracking-tight
              text-[#000080]
              sm:text-5xl
              lg:text-6xl
            "
          >
            {slide.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={
              isActive
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-slate-700
              sm:text-lg
            "
          >
            {slide.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={
              isActive
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            {/* Primary Button */}
            <ButtonLink
              href={slide.primaryButton.href}
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              {slide.primaryButton.label}
            </ButtonLink>

            {/* Secondary Button */}
            {slide.secondaryButton && (
              <ButtonLink
                href={slide.secondaryButton.href}
                variant="ghost"
                size="lg"
                icon={<PlayCircle size={18} />}
              >
                {slide.secondaryButton.label}
              </ButtonLink>
            )}
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
}