import { Target, BookOpen, Sparkles, Eye } from "lucide-react";
import type { WhoCardData } from "./types";

export const WHO_WE_ARE_DATA: WhoCardData[] = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To simplify construction through intelligent technology, making planning, estimating, and project delivery more accessible and efficient.",
    icon: Target,
    color: "blue",
    href: "#mission",
  },
  {
    id: 2,
    title: "Our Story",
    description:
      "VECAI was created to address the challenges that make construction expensive, complicated, and difficult to manage.",
    icon: BookOpen,
    color: "orange",
    href: "#story",
  },
  {
    id: 3,
    title: "Why VECAI",
    description:
      "We bring construction planning, artificial intelligence, pricing, and collaboration together in one platform.",
    icon: Sparkles,
    color: "blue",
    href: "#why-vecai",
  },
  {
    id: 4,
    title: "Our Vision",
    description:
      "To build a smarter future where technology makes construction more efficient, accessible, and transparent.",
    icon: Eye,
    color: "orange",
    href: "#vision",
  },
];