import { Container, Section } from "@/components/ui/Layout";
import {
  Home,
  Store,
  Warehouse,
  Route,
  Cross,
  School,
  Hotel,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";

const industries = [
  {
    icon: Home,
    title: "Residential",
    text: "Single homes to multi-unit developments, with layouts and finishes tuned to local buyer expectations.",
    stat: "8,600+ homes planned",
    featured: true,
  },
  {
    icon: Store,
    title: "Commercial & retail",
    text: "Fit-outs and new builds with tenant timelines and footfall-driven layout planning.",
    stat: "1,200+ fit-outs",
  },
  {
    icon: Warehouse,
    title: "Industrial & warehousing",
    text: "Clear-span structural planning and racking-aware layouts for logistics facilities.",
    stat: "3.4M sq ft planned",
  },
  {
    icon: Route,
    title: "Infrastructure & roads",
    text: "Earthworks, drainage, and materials quantities for public infrastructure programs.",
    stat: "140+ km of roadworks",
  },
  {
    icon: Cross,
    title: "Healthcare facilities",
    text: "Clinical space planning that accounts for equipment loads and regulatory clearances.",
    stat: "60+ clinics & wards",
  },
  {
    icon: School,
    title: "Education facilities",
    text: "Classroom and campus builds costed against grant and donor funding constraints.",
    stat: "90+ schools",
  },
  {
    icon: Hotel,
    title: "Hospitality & leisure",
    text: "Guest-facing finishes balanced against operating cost from day one of design.",
    stat: "45+ properties",
  },
  {
    icon: Sun,
    title: "Renewable energy",
    text: "Site works and structural planning for solar and small-scale power installations.",
    stat: "22 MW of sites",
  },
];

export function IndustryGrid() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className={cn(
                "rounded-[var(--radius-card)] border border-[var(--color-border)] p-[var(--spacing-card)]",
                ind.featured
                  ? "lg:col-span-2 lg:row-span-2 bg-[var(--color-forest)]"
                  : "bg-[var(--color-background)]"
              )}
            >
              <div
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-xl",
                  ind.featured ? "bg-white/10" : "bg-[var(--color-primary)]/10"
                )}
              >
                <ind.icon
                  size={20}
                  className={ind.featured ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"}
                />
              </div>
              <h3
                className={cn(
                  "mt-5 font-semibold",
                  ind.featured
                    ? "text-[length:var(--text-heading-sm)] text-white"
                    : "text-[length:var(--text-heading-sm)] text-[var(--color-forest)]"
                )}
              >
                {ind.title}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed",
                  ind.featured ? "text-white/60" : "text-[var(--color-muted)]"
                )}
              >
                {ind.text}
              </p>
              <span
                className={cn(
                  "mt-5 inline-block text-xs font-medium",
                  ind.featured ? "text-[var(--color-accent)]" : "text-[var(--color-secondary)]"
                )}
              >
                {ind.stat}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
