// components/home/hero/heroData.tsx

import { ArrowRight, PlayCircle } from "lucide-react";
import type { HeroSlideData } from "./types";

export const heroSlides: HeroSlideData[] = [
  {
    id: 1,

    image: "/assets/images/hero/hero1.jpeg",

    imageAlt:
      "AI-powered construction planning and modern building technology",

    eyebrow: "AI Construction Platform",

    title: "Build Smarter with AI",

    description:
      "Transform your construction ideas into complete architectural designs, cost estimates, supplier comparisons and execution plans using artificial intelligence.",

    primaryButton: {
      label: "Start Project",
      href: "/register",
      variant: "primary",
      icon: <ArrowRight size={18} />,
    },

    secondaryButton: {
      label: "Watch Demo",
      href: "/how-it-works",
      variant: "secondary",
      icon: <PlayCircle size={18} />,
    },

    floatingCard: {
      badge: "Live",

      title: "AI Cost Estimate",

      items: [
        {
          label: "Foundation",
          value: "$41,200",
        },
        {
          label: "Roofing",
          value: "$27,650",
        },
        {
          label: "MEP",
          value: "$34,900",
        },
        {
          label: "Labour",
          value: "$52,200",
        },
      ],

      footerLabel: "Estimated Total",

      footerValue: "$185,950",
    },
  },

  {
    id: 2,

    image: "/assets/images/hero/hero2.png",

    imageAlt:
      "Construction cost estimation and quantity surveying technology",

    eyebrow: "AI Quantity Survey",

    title: "Know Your Costs Before You Build",

    description:
      "Generate accurate Bills of Quantities, compare project costs and make informed financial decisions before construction begins.",

    primaryButton: {
      label: "Generate BOQ",
      href: "/register",
      variant: "primary",
      icon: <ArrowRight size={18} />,
    },

    secondaryButton: {
      label: "Learn More",
      href: "/solutions",
      variant: "secondary",
      icon: <PlayCircle size={18} />,
    },

    floatingCard: {
      badge: "AI",

      title: "Bill Of Quantities",

      items: [
        {
          label: "Materials",
          value: "$96,000",
        },
        {
          label: "Labour",
          value: "$54,000",
        },
        {
          label: "Equipment",
          value: "$14,800",
        },
        {
          label: "Contingency",
          value: "$12,300",
        },
      ],

      footerLabel: "Project Budget",

      footerValue: "$177,100",
    },
  },

  {
    id: 3,

    image: "/assets/images/hero/hero3.png",

    imageAlt:
      "Construction supplier marketplace and material price comparison",

    eyebrow: "Supplier Marketplace",

    title: "Compare Suppliers Instantly",

    description:
      "Receive supplier quotations, compare prices, delivery times and quality ratings before purchasing materials.",

    primaryButton: {
      label: "Compare Prices",
      href: "/register",
      variant: "primary",
      icon: <ArrowRight size={18} />,
    },

    secondaryButton: {
      label: "Explore",
      href: "/solutions",
      variant: "secondary",
      icon: <PlayCircle size={18} />,
    },

    floatingCard: {
      badge: "Best Offer",

      title: "Supplier Comparison",

      items: [
        {
          label: "Supplier A",
          value: "$19,200",
        },
        {
          label: "Supplier B",
          value: "$18,750",
        },
        {
          label: "Supplier C",
          value: "$19,980",
        },
        {
          label: "Delivery",
          value: "2 Days",
        },
      ],

      footerLabel: "Recommended",

      footerValue: "Supplier B",
    },
  },

  {
    id: 4,

    image: "/assets/images/hero/hero4.png",

    imageAlt:
      "Construction project monitoring dashboard showing project progress",

    eyebrow: "Project Monitoring",

    title: "Monitor Every Stage of Construction",

    description:
      "Track timelines, workers, budgets and project milestones from one intelligent dashboard designed for construction teams.",

    primaryButton: {
      label: "View Dashboard",
      href: "/register",
      variant: "primary",
      icon: <ArrowRight size={18} />,
    },

    secondaryButton: {
      label: "See Features",
      href: "/solutions",
      variant: "secondary",
      icon: <PlayCircle size={18} />,
    },

    floatingCard: {
      badge: "Realtime",

      title: "Project Analytics",

      items: [
        {
          label: "Progress",
          value: "76%",
        },
        {
          label: "Workers",
          value: "48",
        },
        {
          label: "Materials",
          value: "92%",
        },
        {
          label: "Timeline",
          value: "On Schedule",
        },
      ],

      footerLabel: "Project Status",

      footerValue: "Healthy",
    },
  },
];