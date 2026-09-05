import { cn } from "@/lib/cn";

export function GridPattern({
  className,
  fade = true,
}: {
  className?: string;
  fade?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(196,164,132,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(196,164,132,0.12) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: fade
          ? "radial-gradient(ellipse at center, black 35%, transparent 75%)"
          : undefined,
      }}
    />
  );
}
