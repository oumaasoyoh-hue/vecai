"use client";

interface HeroIndicatorsProps {
  total: number;
  current: number;
  goToSlide: (index: number) => void;
}

export default function HeroIndicators({
  total,
  current,
  goToSlide,
}: HeroIndicatorsProps) {
  return (
    <div className="absolute bottom-10 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => goToSlide(index)}
          className={`
            transition-all duration-500 rounded-full
            ${
              current === index
                ? "w-12 h-3 bg-[#FF7A00]"
                : "w-3 h-3 bg-white/50 hover:bg-white"
            }
          `}
        />
      ))}
    </div>
  );
}