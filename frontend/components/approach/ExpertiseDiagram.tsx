import {
  FileCheck,
  PieChart,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";

type NodeIcon = "users" | "finance" | "compliance" | "risk" | "strategy";
type NodePosition = "top" | "top-right" | "bottom-right" | "bottom-left" | "top-left";

interface DiagramNode {
  id?: string;
  label: string;
  description: string;
  icon: string;
  position: string;
  align: string;
}

const iconMap: Record<NodeIcon, typeof Users> = {
  users: Users,
  finance: PieChart,
  compliance: FileCheck,
  risk: Shield,
  strategy: Target,
};

/** Exact points on the dashed circle (radius 32.5% from center) */
const nodeCoords: Record<NodePosition, { top: string; left: string }> = {
  top: { top: "17.5%", left: "50%" },
  "top-right": { top: "40%", left: "80.9%" },
  "bottom-right": { top: "76.3%", left: "69.1%" },
  "bottom-left": { top: "76.3%", left: "30.9%" },
  "top-left": { top: "40%", left: "19.1%" },
};

export function ExpertiseDiagram({ nodes }: { nodes: DiagramNode[] }) {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="130"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.4"
        />
        {nodes.map((_, i) => {
          const angles = [-90, -18, 54, 126, 198];
          const rad = (angles[i] * Math.PI) / 180;
          const x2 = 200 + Math.cos(rad) * 130;
          const y2 = 200 + Math.sin(rad) * 130;
          return (
            <line
              key={i}
              x1="200"
              y1="200"
              x2={x2}
              y2={y2}
              stroke="var(--color-gold)"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.5"
            />
          );
        })}
      </svg>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center shadow-lg">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <path
              d="M18 4L32 12V24L18 32L4 24V12L18 4Z"
              stroke="var(--color-gold)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M18 10L26 14V22L18 26L10 22V14L18 10Z"
              stroke="var(--color-gold)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {nodes.map((node) => {
        const Icon = iconMap[node.icon as NodeIcon] ?? Target;
        const coords =
          nodeCoords[node.position as NodePosition] ?? nodeCoords.top;
        const textOnLeft = node.align === "left";

        return (
          <div
            key={node.id ?? node.label}
            className="absolute z-20"
            style={{ top: coords.top, left: coords.left }}
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white shadow-sm">
                <Icon size={20} className="text-navy" strokeWidth={1.5} />
              </div>

              <div
                className={cn(
                  "absolute top-1/2 hidden max-w-[120px] -translate-y-1/2 sm:block",
                  textOnLeft
                    ? "right-[calc(100%+0.75rem)] text-right"
                    : "left-[calc(100%+0.75rem)] text-left"
                )}
              >
                <p className="text-xs font-bold tracking-wide text-heading">
                  {node.label}
                </p>
                <p className="text-[10px] leading-snug text-paragraph">
                  {node.description}
                </p>
              </div>

              <div
                className={cn(
                  "absolute top-1/2 max-w-[100px] -translate-y-1/2 sm:hidden",
                  textOnLeft
                    ? "right-[calc(100%+0.5rem)] text-right"
                    : "left-[calc(100%+0.5rem)] text-left"
                )}
              >
                <p className="text-xs font-bold text-heading">{node.label}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
