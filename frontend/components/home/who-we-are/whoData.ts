import { Target, BookOpen, Sparkles, Eye } from "lucide-react";
import type { WhoCardData } from "./types";

export const WHO_WE_ARE_DATA: WhoCardData[] = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To Digitize construction project management by providing easy to use platform that improves collaboration, accountability, productivity, and descision making through technology",
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
      "To become worlds leading construction management platform that enables construction professionals to deliver projects efficiently transparently and with minimal resource wastage.",
    icon: Eye,
    color: "orange",
    href: "#vision",
  },
];