import { cn } from "@/lib/utils";

const tones = {
  neutral: "bg-black/[0.04] text-[var(--color-text)]",
  success: "bg-[var(--color-success)]/10 text-[var(--color-success)]",
  accent: "bg-[var(--color-accent)]/20 text-[var(--color-primary)]",
  warning: "bg-[var(--color-warning)]/10 text-[var(--color-warning)]",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
