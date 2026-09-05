"use client";

import { useCallback, useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export function MagicCard({
  children,
  className,
  gradientSize = 220,
  gradientColor = "rgba(196, 164, 132, 0.22)",
}: {
  children: ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      style={
        {
          "--gradient-size": `${gradientSize}px`,
          "--gradient-color": gradientColor,
        } as CSSProperties
      }
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/80 bg-surface",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100",
        "before:bg-[radial-gradient(var(--gradient-size)_circle_at_var(--mouse-x)_var(--mouse-y),var(--gradient-color),transparent_40%)]",
        className
      )}
    >
      {children}
    </div>
  );
}
