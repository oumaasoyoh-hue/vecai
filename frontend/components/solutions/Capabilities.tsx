import { Sparkles, Building2, Calculator, Truck, Layers, CalendarClock } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    id: "ai-consultant",
    icon: Sparkles,
    title: "AI Consultant",
    text: "Describe a project in plain language and get back a build brief: feasibility, budget range, risks, and a recommended structural approach.",
    points: ["Site and soil awareness", "Budget feasibility checks", "Hands off to Architect Workspace"],
  },
  {
    id: "architect",
    icon: Building2,
    title: "Architect Workspace",
    text: "Generate floor plans and elevations from the build brief, then adjust room sizes and layouts with instant budget feedback.",
    points: ["AI-generated first drafts", "Live budget impact as you edit", "Export to CAD-compatible formats"],
  },
  {
    id: "quantity-survey",
    icon: Calculator,
    title: "Quantity Survey",
    text: "Every wall, slab, and fixture in the plan is quantified automatically, with material and labor costs itemized line by line.",
    points: ["Automatic material take-offs", "Regional labor rate data", "Exportable, editable line items"],
  },
  {
    id: "marketplace",
    icon: Truck,
    title: "Supplier Marketplace",
    text: "Send your material list to verified suppliers and compare quotes on price, lead time, and delivery distance in one view.",
    points: ["1,900+ verified suppliers", "Side-by-side quote comparison", "Direct order handoff"],
  },
  {
    id: "material-comparison",
    icon: Layers,
    title: "Material Comparison",
    text: "Weigh alternative materials against each other on cost, durability, and availability before they're locked into the plan.",
    points: ["Cost vs. durability tradeoffs", "Local availability signals", "Swap materials without re-quoting"],
  },
  {
    id: "construction-timeline",
    icon: CalendarClock,
    title: "Construction Timeline",
    text: "A schedule generated from your quantities and crew size, with dependencies flagged so delays surface before they cascade.",
    points: ["Auto-generated schedule", "Dependency and delay flags", "Syncs with the project dashboard"],
  },
];

export function Capabilities() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col gap-24">
          {capabilities.map((cap, i) => (
            <div
              key={cap.id}
              id={cap.id}
              className={cn(
                "grid scroll-mt-28 gap-12 lg:grid-cols-2 lg:items-center",
                i % 2 === 1 && "lg:[&>*:first-child]:order-2"
              )}
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
                  <cap.icon size={22} className="text-[var(--color-primary)]" />
                </div>
                <h2 className="mt-5 text-[length:var(--text-heading-md)] leading-[var(--text-heading-md--line-height)] tracking-[var(--text-heading-md--letter-spacing)] font-bold text-[var(--color-forest)]">
                  {cap.title}
                </h2>
                <p className="mt-4 max-w-[440px] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-muted)]">
                  {cap.text}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {cap.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-[var(--color-text)]">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-secondary)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] p-10">
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-xl border border-dashed border-[var(--color-border)]">
                  <cap.icon size={48} strokeWidth={1.25} className="text-[var(--color-secondary)]/40" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
