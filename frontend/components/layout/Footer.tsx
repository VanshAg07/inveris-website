import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerContent } from "@/lib/content";

function SocialIcon({ icon }: { icon: "instagram" | "linkedin" | "youtube" }) {
  const className = "w-4 h-4";

  if (icon === "instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
      <path d="M10 9.5v5l4.5-2.5L10 9.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const { contact } = footerContent;

  return (
    <footer className="bg-navy text-paragraph-inverse mt-auto">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl lg:text-3xl font-bold font-serif text-heading-inverse tracking-wide">
                {footerContent.companyName}
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-paragraph-inverse">
              {footerContent.description}
            </p>
          </div>

          {footerContent.links.map((group) => (
            <div key={group.title}>
              <h4 className="text-heading-inverse font-semibold text-sm mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-paragraph-inverse hover:text-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-heading-inverse font-semibold text-sm mb-4">
              {contact.title}
            </h4>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-sm leading-relaxed text-paragraph-inverse">
                  {contact.location}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <a
                  href={contact.mobileHref}
                  className="text-sm text-paragraph-inverse hover:text-gold transition-colors"
                >
                  {contact.mobile}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-paragraph-inverse hover:text-gold transition-colors break-all"
                >
                  {contact.email}
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-5">
              {contact.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-paragraph-inverse hover:border-gold hover:text-gold transition-colors"
                >
                  <SocialIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-sm text-center text-paragraph-inverse">
            {footerContent.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
