import { Container, Eyebrow } from "@/components/ui/Layout";

export function FAQHero() {
  return (
    <section className="pt-40 pb-16 text-center lg:pt-48 lg:pb-20">
      <Container className="mx-auto max-w-[640px]">
        <Eyebrow className="mx-auto">Help center</Eyebrow>
        <h1 className="mt-6 text-[length:var(--text-heading-lg)] leading-[var(--text-heading-lg--line-height)] tracking-[var(--text-heading-lg--letter-spacing)] font-bold text-[var(--color-forest)]">
          Frequently asked questions
        </h1>
        <p className="mx-auto mt-6 max-w-[480px] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-muted)]">
          Can&apos;t find what you need? Reach out through the Help Center
          and a real person will answer.
        </p>
      </Container>
    </section>
  );
}
