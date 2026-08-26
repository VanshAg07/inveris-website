import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactMainSection } from "@/components/contact/ContactMainSection";
import { FaqSection } from "@/components/contact/FaqSection";
import { OfficeSection } from "@/components/contact/OfficeSection";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Inveris Solutions LLP — integrated business consulting, recruitment, compliance, and audit.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactMainSection />
      <OfficeSection />
      <FaqSection />
    </>
  );
}
