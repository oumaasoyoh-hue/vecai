import { FileSpreadsheet, Sparkles, Building, Layers } from "lucide-react";
import type { HowStepData } from "./types";

export const HOW_IT_WORKS_DATA: HowStepData[] = [
  {
    stepNumber: "01",
    title: "Input Project Details",
    description:
      "Upload your architectural sketches, BOQs, or project guidelines into the VECAI platform.",
    icon: FileSpreadsheet,
  },
  {
    stepNumber: "02",
    title: "AI Analysis & Estimation",
    description:
      "Our AI engine analyzes costs, material quantities, structural considerations, and timelines in real time.",
    icon: Sparkles,
  },
  {
    stepNumber: "03",
    title: "Connect & Collaborate",
    description:
      "Invite contractors, quantity surveyors, and suppliers directly onto your unified digital project workspace.",
    icon: Building,
  },
  {
    stepNumber: "04",
    title: "Execute & Deliver",
    description:
      "Track progress, manage material supplier orders, and deliver your project on schedule and budget.",
    icon: Layers,
  },
];