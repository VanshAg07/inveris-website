import { cn } from "@/lib/cn";

interface IconCircleProps {
  children: React.ReactNode;
  variant?: "gold" | "navy" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantStyles = {
  gold: "bg-gold text-navy shadow-[0_8px_24px_rgba(196,164,132,0.35)]",
  navy: "bg-navy text-gold shadow-[0_8px_24px_rgba(7,16,31,0.25)]",
  white: "bg-white text-gold border border-border",
};

const sizeStyles = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-16 h-16",
};

export function IconCircle({
  children,
  variant = "gold",
  size = "md",
  className,
}: IconCircleProps) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center shrink-0",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </div>
  );
}
