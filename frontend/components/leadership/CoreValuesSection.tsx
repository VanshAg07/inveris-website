import {
  Award,
  Handshake,
  Lightbulb,
  Mountain,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { leadershipPageContent } from "@/lib/content";

const iconMap = {
  handshake: Handshake,
  users: Users,
  award: Award,
  lightbulb: Lightbulb,
  mountain: Mountain,
};

export function CoreValuesSection() {
  const { values } = leadershipPageContent;

  return (
    <section className="py-16 lg:py-24 bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q50 80 100 100 T200 100' fill='none' stroke='%23c4a484' stroke-width='0.5' stroke-dasharray='4 4'/%3E%3Cpath d='M0 130 Q50 110 100 130 T200 130' fill='none' stroke='%23c4a484' stroke-width='0.5' stroke-dasharray='4 4'/%3E%3C/svg%3E")`,
          backgroundSize: "300px 300px",
        }}
      />

      <Container className="relative">
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <SectionTag light withLine className="justify-center">
            {values.tag}
          </SectionTag>
          <h2 className="text-3xl md:text-4xl font-bold text-heading-inverse">
            {values.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">
          {values.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            const isLast = index === values.items.length - 1;

            return (
              <div
                key={item.title}
                className={`text-center px-4 ${
                  !isLast ? "lg:border-r lg:border-white/10" : ""
                }`}
              >
                <div className="flex justify-center mb-4">
                  <Icon size={28} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-heading-inverse text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-paragraph-inverse leading-relaxed">
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
