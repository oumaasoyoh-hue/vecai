import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-forest)] shadow-[var(--shadow-soft)]",
  secondary:
    "bg-[var(--color-accent)] text-[var(--color-forest)] hover:brightness-95",
  ghost: "bg-transparent text-[var(--color-text)] hover:bg-black/5",
  outline:
    "bg-transparent text-[var(--color-primary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]",
};

const sizeStyles: Record<Size, string> = {
  md: "h-11 px-5 text-[length:var(--text-button)]",
  lg: "h-13 px-7 text-[length:var(--text-button)]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  ...props
}: ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
}: ButtonBaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(base, variantStyles[variant], sizeStyles[size], className)}
    >
      {children}
      {icon}
    </Link>
  );
}
