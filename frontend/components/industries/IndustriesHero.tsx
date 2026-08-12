import { Container, Eyebrow } from "@/components/ui/Layout";

export function IndustriesHero() {
  return (
    <section className="pt-40 pb-20 lg:pt-48 lg:pb-24">
      <Container className="max-w-[760px]">
        <Eyebrow>Industries</Eyebrow>
        <h1 className="mt-6 text-[length:var(--text-heading-lg)] leading-[var(--text-heading-lg--line-height)] tracking-[var(--text-heading-lg--letter-spacing)] font-bold text-[var(--color-forest)]">
          Different builds, different rules —
          VECAI adapts to both
        </h1>
        <p className="mt-6 max-w-[560px] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-muted)]">
          A warehouse and a school don&apos;t share a cost structure, a
          timeline, or a compliance checklist. VECAI's estimating and
          planning models are tuned per industry, not applied generically.
        </p>
      </Container>
    </section>
  );
}
