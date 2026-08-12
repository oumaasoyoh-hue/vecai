"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";
import { cn } from "@/lib/utils";

const categories = [
  {
    name: "General",
    questions: [
      {
        q: "What is VECAI?",
        a: "VECAI is an AI-guided platform that takes a construction project from a plain-language description through design, cost estimation, and supplier sourcing to an on-site project dashboard.",
      },
      {
        q: "Who is VECAI built for?",
        a: "Individuals planning a single build, contractors and architects running multiple projects, developers modeling project economics, and government or NGO programs managing public works.",
      },
      {
        q: "Do I need construction experience to use it?",
        a: "No. The AI Consultant is designed to ask the questions a professional would, so a first-time builder and an experienced contractor both get a usable brief.",
      },
    ],
  },
  {
    name: "Product & AI",
    questions: [
      {
        q: "How accurate are the AI-generated estimates?",
        a: "Estimates draw on regional material and labor pricing updated weekly, and typically land within 8–12% of final contractor bids. Every line item is editable before you act on it.",
      },
      {
        q: "Can I edit the AI's plans and estimates?",
        a: "Yes — every output from the Architect Workspace and Quantity Survey is fully editable. The AI produces a starting point, not a final answer.",
      },
      {
        q: "Does VECAI replace my architect or quantity surveyor?",
        a: "No. Most professional users use VECAI to produce a fast first draft, then refine it with their own expertise and local knowledge.",
      },
    ],
  },
  {
    name: "Suppliers & marketplace",
    questions: [
      {
        q: "How are suppliers verified?",
        a: "Suppliers submit business registration and past delivery records, which are reviewed before they're listed, and are re-verified periodically.",
      },
      {
        q: "Which regions does the marketplace cover?",
        a: "The marketplace currently covers East Africa with active supplier networks, and is expanding to additional regions on a rolling basis.",
      },
      {
        q: "Can I order materials directly through VECAI?",
        a: "Yes — accepted quotes can be converted directly into an order with the supplier, tracked from the project dashboard.",
      },
    ],
  },
  {
    name: "Security & data",
    questions: [
      {
        q: "Who owns my project data?",
        a: "You do. VECAI never sells project data, and you can export everything — plans, estimates, and documents — at any time.",
      },
      {
        q: "What happens to my data if I cancel?",
        a: "Cancelled accounts retain read-only access to past projects for 90 days, and you can request a full export at any point before or after cancellation.",
      },
      {
        q: "Is my data encrypted?",
        a: "Yes, data is encrypted in transit and at rest, and access is scoped per project and per team member.",
      },
    ],
  },
  {
    name: "Support",
    questions: [
      {
        q: "How do I contact support?",
        a: "Individual and Professional plans include in-app chat support. Enterprise plans include a dedicated account manager and SLA-backed response times.",
      },
      {
        q: "Is there onboarding help for teams?",
        a: "Professional and Enterprise plans include a guided onboarding session to set up your first project and invite your team.",
      },
    ],
  },
];

export function FAQCategories() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="bg-white pt-0">
      <Container className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <nav className="flex gap-2 overflow-x-auto lg:sticky lg:top-28 lg:h-fit lg:flex-col lg:overflow-visible">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => {
                setActive(i);
                setOpen(0);
              }}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-left text-sm font-medium transition-colors lg:rounded-lg",
                active === i
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-muted)] hover:bg-black/[0.04]"
              )}
            >
              {cat.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-col divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {categories[active].questions.map((item, i) => {
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
