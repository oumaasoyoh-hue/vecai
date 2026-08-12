import type { LucideIcon } from "lucide-react";

export interface HowStepData {
  stepNumber: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StepCardProps {
  step: HowStepData;
  isLast?: boolean;
}