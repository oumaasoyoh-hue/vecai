"use client";

import { Container, Section } from "@/components/ui/Layout";

export function Newsletter() {
  return (
    <Section className="py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-[var(--radius-card)] bg-[var(--color-background)] border border-[var(--color-border)] p-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-[length:var(--text-heading-sm)] font-semibold text-[var(--color-forest)]">
              Get new posts by email
            </h3>
            <p className="mt-1.5 text-sm text-[var(--color-muted)]">
              One email a month. No noise, unsubscribe any time.
            </p>
          </div>
          <form className="flex w-full max-w-sm gap-2 sm:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-full border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-muted)] focus-visible:border-[var(--color-primary)]"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-forest)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
