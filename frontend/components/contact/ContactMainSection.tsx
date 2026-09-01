import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import type { ContactFormContent, ContactInfoContent } from "@/lib/contact-content";

const iconMap = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
  clock: Clock,
};

type ContactRow = {
  id: string;
  icon: keyof typeof iconMap;
  label: string;
  lines: string[];
  href?: string;
};

function buildContactRows(contactInfo: ContactInfoContent): ContactRow[] {
  const rows: ContactRow[] = [
    ...contactInfo.emails.map((item) => ({
      id: item.id,
      icon: "mail" as const,
      label: item.label,
      lines: [item.value],
      href: item.href || `mailto:${item.value}`,
    })),
    ...contactInfo.phones.map((item) => ({
      id: item.id,
      icon: "phone" as const,
      label: item.label,
      lines: [item.value],
      href: item.href,
    })),
    ...contactInfo.addresses.map((item) => ({
      id: item.id,
      icon: "map" as const,
      label: item.label,
      lines: item.company ? [item.company, item.value] : [item.value],
    })),
  ];

  if (contactInfo.businessHours) {
    rows.push({
      id: "business-hours",
      icon: "clock",
      label: "Business Hours",
      lines: contactInfo.businessHours.split("\n").filter(Boolean),
    });
  }

  return rows;
}

export function ContactMainSection({
  form,
  contactInfo,
}: {
  form: ContactFormContent;
  contactInfo: ContactInfoContent;
}) {
  const rows = buildContactRows(contactInfo);

  return (
    <section id="contact-form" className="scroll-mt-28 bg-surface-muted py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-5 lg:gap-12">
          <Card className="flex h-full flex-col border-0 p-6 lg:col-span-3 lg:p-8">
            <div className="mb-6 shrink-0">
              <span className="mb-4 block h-px w-8 bg-gold" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-heading">{form.title}</h2>
            </div>
            <ContactForm form={form} className="flex-1" />
          </Card>

          <div className="flex h-full flex-col lg:col-span-2">
            <div className="mb-8 shrink-0">
              <span className="mb-4 block h-px w-8 bg-gold" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-heading">{contactInfo.title}</h2>
            </div>

            <div className="divide-y divide-border">
              {rows.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <div key={item.id} className="flex gap-4 py-6 first:pt-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy">
                      <Icon size={18} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-heading">{item.label}</h3>
                      <div className="space-y-1">
                        {item.lines.map((line) =>
                          item.href ? (
                            <a
                              key={line}
                              href={item.href}
                              className="block text-sm text-paragraph transition-colors hover:text-gold"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={line} className="text-sm leading-relaxed text-paragraph">
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
