import type { LucideIcon } from "lucide-react";

export interface OfferCardData {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

export interface OfferCardProps {
  card: OfferCardData;
}