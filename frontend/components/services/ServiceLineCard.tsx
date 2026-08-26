import Image from "next/image";
import { Check, Crown, Shield, ShieldCheck, Users } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";
import { cn } from "@/lib/cn";

type ServiceIcon = "consulting" | "recruitment" | "compliance" | "audit";

interface ServiceLineCardProps {
  title: string;
  description: string;
  items: string[];
  image: string;
  icon: ServiceIcon;
  imagePosition?: "left" | "right";
}

const iconMap = {
  consulting: Crown,
  recruitment: Users,
  compliance: ShieldCheck,
  audit: Shield,
};

export function ServiceLineCard({
  title,
  description,
  items,
  image,
  icon,
  imagePosition = "right",
}: ServiceLineCardProps) {
  const Icon = iconMap[icon];
  const imageFirst = imagePosition === "left";

  return (
    <Card className="overflow-hidden border-0">
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px]",
          imageFirst && "lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr]"
        )}
      >
        {imageFirst && (
          <div className="relative h-56 lg:h-auto min-h-[240px] order-1 lg:order-none">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 320px"
            />
          </div>
        )}

        <div className="p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1 space-y-4 min-w-0">
            <div className="flex items-center gap-4">
              <IconCircle variant="navy" size="md">
                <Icon size={22} strokeWidth={1.5} />
              </IconCircle>
              <div>
                <h3 className="text-xl font-bold text-heading">{title}</h3>
                <span className="block h-0.5 w-10 bg-gold mt-2" aria-hidden="true" />
              </div>
            </div>
            <p className="text-sm text-paragraph leading-relaxed">{description}</p>
          </div>

          <div className="hidden lg:block w-px bg-border shrink-0" aria-hidden="true" />

          <ul className="space-y-3 lg:w-52 xl:w-56 shrink-0">
            {items.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-paragraph">
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full border-2 border-gold flex items-center justify-center">
                  <Check size={10} className="text-gold" strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {!imageFirst && (
          <div className="relative h-56 lg:h-auto min-h-[240px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 320px"
            />
          </div>
        )}
      </div>
    </Card>
  );
}
