import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Layout";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/lib/blog-data";

export function FeaturedPost() {
  const post = blogPosts.find((p) => p.featured) ?? blogPosts[0];

  return (
    <Section className="bg-white pt-0">
      <Container>
        <Link
          href={`/blog/${post.slug}`}
          className="group grid gap-8 rounded-[var(--radius-card)] border border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-primary)] lg:grid-cols-[1.1fr_1fr] lg:items-center lg:p-12"
        >
          <div>
            <Badge tone="accent">{post.category}</Badge>
            <h2 className="mt-5 text-[length:var(--text-heading-md)] leading-[var(--text-heading-md--line-height)] tracking-[var(--text-heading-md--letter-spacing)] font-bold text-[var(--color-forest)]">
              {post.title}
            </h2>
            <p className="mt-4 max-w-[480px] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-muted)]">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--color-primary)]">
              Read the article
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
            <div className="mt-6 text-xs text-[var(--color-muted)]">
              {post.author} · {post.date} · {post.readTime}
            </div>
          </div>

          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-[var(--color-background)] border border-dashed border-[var(--color-border)]">
            <span className="text-sm text-[var(--color-muted)]">Article visual</span>
          </div>
        </Link>
      </Container>
    </Section>
  );
}
