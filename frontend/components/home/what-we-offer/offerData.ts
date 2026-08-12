import {
  Building2,
  Ruler,
  Calculator,
  BrainCircuit,
  PackageSearch,
  Users,
} from "lucide-react";
import type { OfferCardData } from "./types";

export const OFFER_SERVICES_DATA: OfferCardData[] = [
  {
    id: 1,
    title: "Construction Management",
    description:
      "Plan, organize and monitor your construction projects from one intelligent platform.",
    icon: Building2,
    href: "#construction-management",
  },
  {
    id: 2,
    title: "Design & Planning",
    description:
      "Turn your construction idea into structured plans and actionable project information.",
    icon: Ruler,
    href: "#design-planning",
  },
  {
    id: 3,
    title: "Cost Estimation",
    description:
      "Generate reliable project estimates and understand your construction costs before you build.",
    icon: Calculator,
    href: "#cost-estimation",
  },
  {
    id: 4,
    title: "AI-Powered Intelligence",
    description:
      "Use artificial intelligence to analyze project information and support smarter construction decisions.",
    icon: BrainCircuit,
    href: "#ai-intelligence",
  },
  {
    id: 5,
    title: "Materials & Suppliers",
    description:
      "Find materials, compare supplier options and make better purchasing decisions for your project.",
    icon: PackageSearch,
    href: "#materials-suppliers",
  },
  {
    id: 6,
    title: "Stakeholder Collaboration",
    description:
      "Connect clients, architects, quantity surveyors, contractors and suppliers in one ecosystem.",
    icon: Users,
    href: "#stakeholder-collaboration",
  },
];