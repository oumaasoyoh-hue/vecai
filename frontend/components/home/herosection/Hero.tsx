"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import HeroSlide from "./HeroSlide";
import HeroNavigation from "./HeroNavigation";
import HeroIndicators from "./HeroIndicators";

import { heroSlides } from "./heroData";

const AUTO_PLAY_INTERVAL = 6000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrent((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[550px] overflow-hidden sm:h-[600px] lg:h-[650px]">
      {/* =========================================
          SLIDING HERO SLIDES
          ========================================= */}
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, index) => (
          <HeroSlide
            key={slide.id}
            slide={slide}
            isActive={index === current}
          />
        ))}
      </AnimatePresence>

      {/* =========================================
          NAVIGATION ARROWS
          ========================================= */}
      <HeroNavigation
        previous={previousSlide}
        next={nextSlide}
      />

      {/* =========================================
          SLIDE INDICATORS
          ========================================= */}
      <HeroIndicators
        total={heroSlides.length}
        current={current}
        goToSlide={goToSlide}
      />
    </section>
  );
}