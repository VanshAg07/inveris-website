import Link from "next/link";
import { ArrowRight, Briefcase, Users, BarChart3, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { IconCircle } from "@/components/ui/IconCircle";
import { servicesContent } from "@/lib/content";

const iconMap = {
  briefcase: Briefcase,
  users: Users,
  chart: BarChart3,
  search: Search,
};

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-surface-muted">
      <Container>
        <SectionHeading
          tag={servicesContent.tag}
          title={servicesContent.title}
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesContent.services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card key={service.title} hover className="p-6 flex flex-col">
                <div className="flex justify-center mb-5">
                  <IconCircle variant="navy" size="md">
                    <Icon size={24} />
                  </IconCircle>
                </div>

                <h3 className="font-bold text-navy text-center mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-2 flex-1 mb-6">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-text-body flex items-start gap-2"
                    >
                      <span className="text-gold mt-1.5 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold transition-colors mt-auto"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
