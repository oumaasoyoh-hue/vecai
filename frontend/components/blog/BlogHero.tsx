import { Container, Eyebrow } from "@/components/ui/Layout";

export function BlogHero() {
  return (
    <section className="pt-40 pb-16 lg:pt-48 lg:pb-20">
      <Container className="max-w-[680px]">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-6 text-[length:var(--text-heading-lg)] leading-[var(--text-heading-lg--line-height)] tracking-[var(--text-heading-lg--letter-spacing)] font-bold text-[var(--color-forest)]">
          Notes on building smarter
        </h1>
        <p className="mt-6 max-w-[520px] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-muted)]">
          Estimating practice, product updates, and stories from teams
          planning real projects on VECAI.
        </p>
      </Container>
    </section>
  );
}
