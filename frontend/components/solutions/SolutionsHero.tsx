import { Container, Eyebrow } from "@/components/ui/Layout";

export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
      <div className="blueprint-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <Container className="relative max-w-[760px]">
        <Eyebrow>Solutions</Eyebrow>
        <h1 className="mt-6 text-[length:var(--text-heading-lg)] leading-[var(--text-heading-lg--line-height)] tracking-[var(--text-heading-lg--letter-spacing)] font-bold text-[var(--color-forest)]">
          Six tools, one connected plan
        </h1>
        <p className="mt-6 max-w-[560px] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-muted)]">
          Each VECAI tool solves a specific stage of a build — and because
          they share one project model, moving between them never means
          re-entering data.
        </p>
      </Container>
    </section>
  );
}
