import { Container, Section, Eyebrow } from "@/components/ui/Layout";
import {
  User,
  Home,
  HardHat,
  Building,
  PenTool,
  Settings,
  Landmark,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";

const audiences = [
  { icon: User, title: "Individuals", text: "Plan and price a home build without hiring a full consulting team." },
  { icon: Home, title: "Home builders", text: "Run several client builds at once without losing track of any one budget." },
  { icon: HardHat, title: "Contractors", text: "Turn a signed contract into a costed schedule the same day." },
  { icon: Building, title: "Developers", text: "Model multiple unit types and compare project economics before breaking ground." },
  { icon: PenTool, title: "Architects", text: "Generate first-draft plans faster and see budget impact as you design." },
  { icon: Settings, title: "Engineers", text: "Validate quantities and specs against structural and code requirements." },
  { icon: Landmark, title: "Government", text: "Standardize estimates and supplier sourcing across public infrastructure programs." },
  { icon: HeartHandshake, title: "NGOs", text: "Stretch limited budgets further with transparent, auditable cost breakdowns." },
  { icon: GraduationCap, title: "Educational institutions", text: "Teach real-world estimating and planning workflows with live project data." },
];

export function AudienceGrid() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-[560px] text-center">
          <Eyebrow className="mx-auto">Who it's for</Eyebrow>
          <h2 className="mt-6 text-[length:var(--text-heading-md)] leading-[var(--text-heading-md--line-height)] tracking-[var(--text-heading-md--letter-spacing)] font-bold text-[var(--color-forest)]">
            Built for every stakeholder on a project
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="bg-white p-7">
              <a.icon size={20} className="text-[var(--color-secondary)]" />
              <h3 className="mt-4 font-semibold text-[var(--color-forest)]">
                {a.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                {a.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
