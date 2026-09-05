import { cn } from "@/lib/cn";

export function BorderBeam({
  className,
  size = 80,
  duration = 8,
  delay = 0,
  colorFrom = "#c4a484",
  colorTo = "#ffffff",
}: {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] border border-transparent",
        className
      )}
    >
      <div
        className="animate-border-beam absolute aspect-square"
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          offsetAnchor: "100% 0",
          animationDelay: `-${delay}s`,
          ["--duration" as string]: duration,
          background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
        }}
      />
    </div>
  );
}
