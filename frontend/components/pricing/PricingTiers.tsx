"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Individual",
    monthly: 0,
    annual: 0,
    description: "For one project at a time, planned solo.",
    features: ["1 active project", "AI Consultant", "Basic quantity survey", "Community support"],
    cta: "Start free",
    href: "/register",
    highlight: false,
  },
  {
    name: "Professional",
    monthly: 79,
    annual: 63,
    description: "For contractors and architects running multiple builds.",
    features: [
      "Unlimited projects",
      "Architect Workspace",
      "Supplier marketplace access",
      "Team collaboration (up to 10 seats)",
      "Priority support",
    ],
    cta: "Start free trial",
    href: "/register",
    highlight: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    annual: null,
    description: "For developers and government programs at scale.",
    features: [
      "Everything in Professional",
      "Unlimited seats",
      "Custom integrations",
      "Dedicated account manager",
      "SLA & compliance support",
    ],
    cta: "Talk to sales",
    href: "/contact",
    highlight: false,
  },
];

export function PricingTiers() {
  const [annual, setAnnual] = useState(true);

  return (
    <Section className="bg-white pt-0">
      <Container>
        <div className="flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium",
              !annual ? "text-[var(--color-text)]" : "text-[var(--color-muted)]"
            )}
          >
            Monthly
          </span>
          <button
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual((v) => !v)}
            className="relative h-7 w-12 rounded-full bg-[var(--color-primary)] transition-colors"
          >
            <span
              className={cn(
                "absolute top-1 h-5 w-5 rounded-full bg-white transition-transform",
                annual ? "translate-x-6" : "translate-x-1"
              )}
            />
          </button>
          <span
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              annual ? "text-[var(--color-text)]" : "text-[var(--color-muted)]"
            )}
          >
            Annual
            <span className="rounded-full bg-[var(--color-accent)]/25 px-2 py-0.5 text-xs font-medium text-[var(--color-primary)]">
              Save 20%
            </span>
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "flex flex-col rounded-[var(--radius-card)] border p-[var(--spacing-card)]",
                tier.highlight
                  ? "border-[var(--color-primary)] bg-[var(--color-background)] shadow-[var(--shadow-lift)]"
                  : "border-[var(--color-border)] bg-white"
              )}
            >
              {tier.highlight && (
                <span className="mb-4 w-fit rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-[length:var(--text-heading-sm)] font-semibold text-[var(--color-forest)]">
                {tier.name}
              </h3>
              <p className="mt-1.5 text-sm text-[var(--color-muted)]">
                {tier.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                {tier.monthly === null ? (
                  <span className="text-4xl font-bold text-[var(--color-forest)]">
                    Custom
                  </span>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-[var(--color-forest)]">
                      ${annual ? tier.annual : tier.monthly}
                    </span>
                    <span className="text-sm text-[var(--color-muted)]">
                      / month{annual && tier.monthly > 0 ? ", billed annually" : ""}
                    </span>
                  </>
                )}
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--color-text)]">
                    <Check size={16} className="shrink-0 text-[var(--color-secondary)]" />
                    {f}
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={tier.href}
                variant={tier.highlight ? "primary" : "outline"}
                className="mt-8 justify-center"
              >
                {tier.cta}
              </ButtonLink>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
