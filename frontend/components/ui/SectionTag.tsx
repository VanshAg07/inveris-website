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
        "inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] uppercase rounded-full px-3 py-1.5 border",
        light
          ? "text-gold border-gold/30 bg-gold/10"
          : "text-label border-gold/25 bg-gold/8",
        className
      )}
    >
      {children}
      {withLine && (
        <span className="h-px w-8 bg-gold shrink-0" aria-hidden="true" />
      )}
    </span>
  );
}
