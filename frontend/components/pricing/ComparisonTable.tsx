import { Check, Minus } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/Layout";

const rows: { feature: string; individual: boolean | string; professional: boolean | string; enterprise: boolean | string }[] = [
  { feature: "Active projects", individual: "1", professional: "Unlimited", enterprise: "Unlimited" },
  { feature: "AI Consultant", individual: true, professional: true, enterprise: true },
  { feature: "Architect Workspace", individual: false, professional: true, enterprise: true },
  { feature: "Quantity Survey", individual: "Basic", professional: "Full", enterprise: "Full" },
  { feature: "Supplier marketplace", individual: false, professional: true, enterprise: true },
  { feature: "Team seats", individual: "1", professional: "Up to 10", enterprise: "Unlimited" },
  { feature: "Custom integrations", individual: false, professional: false, enterprise: true },
  { feature: "Dedicated account manager", individual: false, professional: false, enterprise: true },
  { feature: "Support", individual: "Community", professional: "Priority", enterprise: "SLA-backed" },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-[var(--color-text)]">{value}</span>;
  }
  return value ? (
    <Check size={18} className="text-[var(--color-secondary)]" />
  ) : (
    <Minus size={18} className="text-[var(--color-border)]" />
  );
}

export function ComparisonTable() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-[560px] text-center">
          <Eyebrow className="mx-auto">Compare plans</Eyebrow>
          <h2 className="mt-6 text-[length:var(--text-heading-md)] leading-[var(--text-heading-md--line-height)] tracking-[var(--text-heading-md--letter-spacing)] font-bold text-[var(--color-forest)]">
            Every feature, side by side
          </h2>
        </div>

        <div className="mt-14 overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-border)]">
          <table className="w-full min-w-[640px] border-collapse bg-white text-left">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="p-5 text-sm font-medium text-[var(--color-muted)]">Feature</th>
                <th className="p-5 text-sm font-semibold text-[var(--color-forest)]">Individual</th>
                <th className="p-5 text-sm font-semibold text-[var(--color-primary)]">Professional</th>
                <th className="p-5 text-sm font-semibold text-[var(--color-forest)]">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i !== rows.length - 1 ? "border-b border-[var(--color-border)]" : ""}
                >
                  <td className="p-5 text-sm text-[var(--color-text)]">{row.feature}</td>
                  <td className="p-5"><Cell value={row.individual} /></td>
                  <td className="p-5"><Cell value={row.professional} /></td>
                  <td className="p-5"><Cell value={row.enterprise} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
