import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { contactPageContent } from "@/lib/content";

const iconMap = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
  clock: Clock,
};

export function ContactMainSection() {
  const { form, contactInfo } = contactPageContent;

  return (
    <section className="py-16 lg:py-24 bg-surface-muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          <Card className="lg:col-span-3 p-6 lg:p-8 border-0">
            <div className="mb-6">
              <span className="block h-px w-8 bg-gold mb-4" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-heading">{form.title}</h2>
            </div>
            <ContactForm />
          </Card>

          <div className="lg:col-span-2">
            <div className="mb-8">
              <span className="block h-px w-8 bg-gold mb-4" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-heading">{contactInfo.title}</h2>
            </div>

            <div className="space-y-0 divide-y divide-border">
              {contactInfo.items.map((item) => {
                const Icon = iconMap[item.icon];
                const content = item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-paragraph hover:text-gold transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-paragraph leading-relaxed">{item.value}</p>
                );

                return (
                  <div key={item.title} className="flex gap-4 py-6 first:pt-0">
                    <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-heading text-sm mb-1">{item.title}</h3>
                      {content}
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
