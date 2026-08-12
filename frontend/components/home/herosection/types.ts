// components/home/hero/types.ts

import type { ReactNode } from "react";

export interface HeroButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: ReactNode;
}

export interface FloatingCardItem {
  label: string;
  value: string;
}

export interface FloatingCard {
  badge: string;
  title: string;
  items: FloatingCardItem[];
  footerLabel: string;
  footerValue: string;
}

export interface HeroSlideData {
  id: number;

  image: string;

  imageAlt: string;

  eyebrow: string;

  title: string;

  description: string;

  primaryButton: HeroButton;

  secondaryButton?: HeroButton;

  floatingCard?: FloatingCard;
}

export interface HeroSlideProps {
  slide: HeroSlideData;
  isActive: boolean;
}