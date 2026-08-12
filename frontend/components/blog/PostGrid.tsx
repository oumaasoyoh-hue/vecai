"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Layout";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

const categories = ["All", "Estimating", "Product", "Customer stories", "Compliance", "Market"];

export function PostGrid() {
  const [active, setActive] = useState("All");

  const posts = blogPosts.filter(
    (p) => !p.featured && (active === "All" || p.category === active)
  );

  return (
    <Section className="bg-white pt-0">
      <Container>
        <div className="flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === cat
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-muted)] hover:bg-black/[0.04]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-[var(--spacing-component)] sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-primary)]"
            >
              <div className="flex aspect-[16/10] items-center justify-center rounded-xl bg-[var(--color-background)] border border-dashed border-[var(--color-border)]">
                <span className="text-xs text-[var(--color-muted)]">Article visual</span>
              </div>
              <Badge tone="accent" className="mt-5 w-fit">{post.category}</Badge>
              <h3 className="mt-4 text-[length:var(--text-heading-sm)] font-semibold leading-snug text-[var(--color-forest)] group-hover:text-[var(--color-primary)]">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {post.excerpt}
              </p>
              <div className="mt-5 text-xs text-[var(--color-muted)]">
                {post.author} · {post.date} · {post.readTime}
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="mt-10 text-center text-sm text-[var(--color-muted)]">
            No posts in this category yet.
          </p>
        )}
      </Container>
    </Section>
  );
}
