"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/assets/logos/vecai-logo.png"
      alt="VECAI Logo"
      width={220}
      height={70}
      priority
      className={`h-14 w-auto object-contain ${className}`}
    />
  );
}

export default Logo;