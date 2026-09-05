import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "gold" | "outline" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-text-inverse hover:bg-navy-light border border-white/10 shadow-[0_10px_30px_rgba(7,16,31,0.18)]",
  gold: "bg-gold text-navy hover:bg-gold-light border border-gold/70 shadow-[0_10px_30px_rgba(196,164,132,0.28)]",
  outline:
    "bg-transparent text-navy border border-navy/20 hover:border-navy hover:bg-navy hover:text-text-inverse",
  ghost: "bg-transparent text-navy hover:bg-surface-muted border border-transparent",
  light:
    "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-navy backdrop-blur-md",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer hover:-translate-y-0.5",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
