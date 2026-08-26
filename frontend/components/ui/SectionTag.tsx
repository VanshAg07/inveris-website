import { cn } from "@/lib/cn";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
  withLine?: boolean;
}

export function SectionTag({
  children,
  className,
  light = false,
  withLine = false,
}: SectionTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase text-label",
        className
      )}
    >
      {children}
      {withLine && (
        <span
          className="h-px w-8 bg-gold shrink-0"
          aria-hidden="true"
        />
      )}
    </span>
  );
}
