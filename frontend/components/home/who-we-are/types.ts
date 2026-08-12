import type { LucideIcon } from "lucide-react";

export interface WhoCardData {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: "blue" | "orange";
  href?: string;
}

export interface CenterImageProps {
  src: string;
  alt: string;
}

export interface WhoCardProps {
  card: WhoCardData;
}