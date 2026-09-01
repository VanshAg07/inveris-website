import {
  BarChart3,
  Handshake,
  Network,
  Target,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import type { IndustriesValueBarContent } from "@/lib/industries-content";

const iconMap = {
  users: Users,
  target: Target,
  network: Network,
  chart: BarChart3,
  handshake: Handshake,
};

function itemColSpan(index: number, total: number) {
  if (total <= 3) return "lg:col-span-1";
  if (total === 4) return "lg:col-span-3";
  if (total === 5) return index < 3 ? "lg:col-span-2" : "lg:col-span-3";
  if (total === 6) return "lg:col-span-2";
  return "lg:col-span-1";
}

function gridColsClass(total: number) {
  if (total <= 2) return "lg:grid-cols-2";
  if (total === 3) return "lg:grid-cols-3";
  if (total === 4) return "lg:grid-cols-6";
  if (total === 5) return "lg:grid-cols-6";
  if (total === 6) return "lg:grid-cols-6";
  return "lg:grid-cols-3";
}

export function IndustryValueBar({
  content,
}: {
  content: IndustriesValueBarContent;
}) {
  const { items } = content;
  const title = content.title || "Why Partner With Inveris?";

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <Container>
        <h2 className="mb-12 text-center font-serif text-2xl font-bold uppercase tracking-wide text-heading md:text-3xl lg:mb-16 lg:text-4xl">
          {title}
        </h2>

        <div
          className={cn(
            "grid grid-cols-1 border-t border-l border-border/60 sm:grid-cols-2",
            gridColsClass(items.length)
          )}
        >
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Users;

            return (
              <div
                key={item.id}
                className={cn(
                  "flex flex-col items-center border-r border-b border-border/60 px-6 py-10 text-center sm:px-8 lg:py-12",
                  itemColSpan(index, items.length)
                )}
              >
                <Icon
                  size={32}
                  className="mb-5 text-gold"
                  strokeWidth={1.25}
                />
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-heading md:text-sm">
                  {item.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-paragraph">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
