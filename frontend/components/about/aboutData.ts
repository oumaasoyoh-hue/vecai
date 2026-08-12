import {
  Lightbulb,
  ShieldCheck,
  Users,
  Award,
  Globe,
  TrendingUp,
} from "lucide-react";
import type { CultureValue, JourneyStage, Leader } from "./types";

export const CULTURE_VALUES: CultureValue[] = [
  {
    id: "innovation",
    name: "Innovation",
    description:
      "We continuously explore better ways to solve complex construction challenges.",
    icon: Lightbulb,
  },
  {
    id: "integrity",
    name: "Integrity",
    description:
      "We build trust through honesty, transparency and responsible decisions.",
    icon: ShieldCheck,
  },
  {
    id: "collaboration",
    name: "Collaboration",
    description:
      "We believe better construction happens when people and expertise work together.",
    icon: Users,
  },
  {
    id: "excellence",
    name: "Excellence",
    description:
      "We strive to build technology that is reliable, useful and meaningful.",
    icon: Award,
  },
  {
    id: "accessibility",
    name: "Accessibility",
    description:
      "We want intelligent construction technology to be accessible to more people and businesses.",
    icon: Globe,
  },
  {
    id: "impact",
    name: "Impact",
    description:
      "We measure our progress by the positive change we create.",
    icon: TrendingUp,
  },
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "stage-1",
    stageNumber: "01",
    title: "The Idea",
    subtitle: "Conception",
    description:
      "Identifying critical bottlenecks in traditional construction planning, cost estimation, and supplier coordination.",
  },
  {
    id: "stage-2",
    stageNumber: "02",
    title: "Problem Discovery",
    subtitle: "Field Research",
    description:
      "Engaging directly with contractors, quantity surveyors, and project owners to map real operational pain points.",
  },
  {
    id: "stage-3",
    stageNumber: "03",
    title: "Platform Concept",
    subtitle: "Architecture",
    description:
      "Designing a unified digital framework that integrates artificial intelligence with connected construction workflows.",
  },
  {
    id: "stage-4",
    stageNumber: "04",
    title: "Product Development",
    subtitle: "Engineering",
    description:
      "Building and testing core estimation engines, automated BOQ processors, and supplier comparison models.",
  },
  {
    id: "stage-5",
    stageNumber: "05",
    title: "MVP",
    subtitle: "Initial Deployment",
    description:
      "Deploying early platform capabilities to select construction partners for real-world testing and feedback.",
  },
  {
    id: "stage-6",
    stageNumber: "06",
    title: "Future Expansion",
    subtitle: "Scaling Impact",
    description:
      "Expanding intelligent site management, supplier networks, and AI features across Africa's construction industry.",
  },
];

export const LEADERSHIP_DATA: Leader[] = [
  {
    id: "leader-1",
    name: "Executive Leadership",
    role: "Founding Team",
    bio: "Engineers, technologists, and industry specialists united by a vision to make construction smarter and more accessible.",
    image: "/assets/images/about/leader-placeholder.jpg",
    linkedinUrl: "https://linkedin.com",
    isPlaceholder: true,
  },
  {
    id: "leader-2",
    name: "Engineering & Product",
    role: "Technical Team",
    bio: "Building robust, scalable AI architectures and intuitive user experiences designed specifically for construction professionals.",
    image: "/assets/images/about/leader-placeholder.jpg",
    linkedinUrl: "https://linkedin.com",
    isPlaceholder: true,
  },
];