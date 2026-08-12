import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Container({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1240px] px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
  ...props
}: HTMLAttributes<HTMLElement> & { id?: string }) {
  return (
    <section
      id={id}
      className={cn("py-[var(--spacing-section)]", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-1.5 text-[length:var(--text-small)] font-medium text-[var(--color-primary)]",
        className
      )}
    >
      {children}
    </span>
  );
}
