import type { LucideIcon } from "lucide-react";

export interface CultureValue {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface JourneyStage {
  id: string;
  stageNumber: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedinUrl?: string;
  isPlaceholder?: boolean;
}