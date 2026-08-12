"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/ui/Layout";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes, upgrade or downgrade at any time. Upgrades apply immediately; downgrades take effect at the start of your next billing cycle.",
  },
  {
    q: "What counts as an active project?",
    a: "A project is active from the moment it's created until you archive it. Archived projects don't count against your plan limit and stay accessible read-only.",
  },
  {
    q: "Is there a discount for NGOs or educational institutions?",
    a: "Yes — reach out through Contact and we'll apply a reduced rate for verified non-profit and academic organizations.",
  },
  {
    q: "Do unused seats roll over?",
    a: "Seats are billed per active month and don't roll over, but you can add or remove seats at any time without contacting support.",
  },
];

export function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="bg-white">
      <Container className="max-w-[760px]">
        <div className="text-center">
          <Eyebrow className="mx-auto">Billing FAQ</Eyebrow>
          <h2 className="mt-6 text-[length:var(--text-heading-md)] leading-[var(--text-heading-md--line-height)] tracking-[var(--text-heading-md--letter-spacing)] font-bold text-[var(--color-forest)]">
            Billing, plans, and seats
          </h2>
        </div>

        <div className="mt-12 flex flex-col divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[length:var(--text-body)] font-medium text-[var(--color-text)]">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "shrink-0 text-[var(--color-muted)] transition-transform duration-200",
                      isOpen && "rotate-180 text-[var(--color-primary)]"
                    )}
                  />
                </button>
                {isOpen && (
                  <p className="pb-6 pr-8 text-sm leading-relaxed text-[var(--color-muted)]">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
