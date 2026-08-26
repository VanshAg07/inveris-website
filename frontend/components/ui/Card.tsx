import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-surface border border-border",
        hover && "transition-shadow duration-300 hover:shadow-lg",
        className
      )}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {children}
    </div>
  );
}
