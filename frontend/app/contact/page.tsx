import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactMainSection } from "@/components/contact/ContactMainSection";
import { FaqSection } from "@/components/contact/FaqSection";
import { OfficeSection } from "@/components/contact/OfficeSection";
import { fetchContactContent } from "@/lib/contact-content";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Inveris Solutions LLP — integrated business consulting, recruitment, compliance, and audit.",
};

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const contact = await fetchContactContent();

  return (
    <>
      <ContactHeroSection content={contact.hero} />
      <ContactMainSection form={contact.form} contactInfo={contact.contactInfo} />
      <OfficeSection content={contact.office} />
      <FaqSection content={contact.faq} />
    </>
  );
}
