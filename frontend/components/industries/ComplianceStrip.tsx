import { Container, Section, Eyebrow } from "@/components/ui/Layout";
import { FileCheck } from "lucide-react";

const items = [
  { region: "Kenya", standard: "Building Code 2024, County zoning bylaws" },
  { region: "Uganda", standard: "National Building Standards, NEMA guidelines" },
  { region: "Tanzania", standard: "TBS building standards, local council permits" },
  { region: "Rwanda", standard: "Rwanda Building Code, RHA approvals" },
];

export function ComplianceStrip() {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>Standards</Eyebrow>
          <h2 className="mt-6 text-[length:var(--text-heading-md)] leading-[var(--text-heading-md--line-height)] tracking-[var(--text-heading-md--letter-spacing)] font-bold text-[var(--color-forest)]">
            Codes and permits, built into the plan
          </h2>
          <p className="mt-5 max-w-[440px] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-muted)]">
            Every estimate is checked against the building code and zoning
            rules for its region, so compliance gaps surface during design —
            not during inspection.
          </p>
        </div>

        <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-2">
          {items.map((item, i) => (
            <div
              key={item.region}
              className={
                i !== items.length - 1
                  ? "flex items-center gap-4 border-b border-[var(--color-border)] p-4"
                  : "flex items-center gap-4 p-4"
              }
            >
              <FileCheck size={18} className="shrink-0 text-[var(--color-secondary)]" />
              <div>
                <div className="text-sm font-medium text-[var(--color-text)]">
                  {item.region}
                </div>
                <div className="text-xs text-[var(--color-muted)]">{item.standard}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
