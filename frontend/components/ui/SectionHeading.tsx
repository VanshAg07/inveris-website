import { cn } from "@/lib/cn";
import { SectionTag } from "./SectionTag";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {tag && <SectionTag light={light}>{tag}</SectionTag>}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight",
          light ? "text-heading-inverse" : "text-heading"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed",
            light ? "text-paragraph-inverse" : "text-paragraph"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
