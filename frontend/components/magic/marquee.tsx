import { cn } from "@/lib/cn";

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  duration = "40s",
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: string;
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1.25rem] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
      style={{ ["--duration" as string]: duration, gap: "var(--gap)" }}
    >
      {Array.from({ length: 2 }).map((_, setIndex) => (
        <div
          key={setIndex}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)]",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
