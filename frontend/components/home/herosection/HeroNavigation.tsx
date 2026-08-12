"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroNavigationProps {
  previous: () => void;
  next: () => void;
}

export default function HeroNavigation({
  previous,
  next,
}: HeroNavigationProps) {
  return (
    <>
      {/* Previous */}
      <button
        onClick={previous}
        aria-label="Previous Slide"
        className="
          absolute left-6 top-1/2 z-40
          -translate-y-1/2
          flex h-14 w-14 items-center justify-center
          rounded-full
          border border-white/20
          bg-white/10
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:bg-[#FF7A00]
          hover:border-[#FF7A00]
          hover:scale-110
        "
      >
        <ChevronLeft size={30} />
      </button>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Next Slide"
        className="
          absolute right-6 top-1/2 z-40
          -translate-y-1/2
          flex h-14 w-14 items-center justify-center
          rounded-full
          border border-white/20
          bg-white/10
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:bg-[#FF7A00]
          hover:border-[#FF7A00]
          hover:scale-110
        "
      >
        <ChevronRight size={30} />
      </button>
    </>
  );
}