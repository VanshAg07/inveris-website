import { ApproachHeroSection } from "@/components/approach/ApproachHeroSection";
import { ConnectedExpertiseSection } from "@/components/approach/ConnectedExpertiseSection";
import { FourStepSection } from "@/components/approach/FourStepSection";
import { PageCtaBanner } from "@/components/shared/PageCtaBanner";
import { approachPageContent } from "@/lib/content";

export const metadata = {
  title: "Our Approach",
  description:
    "Discover Inveris Solutions LLP four-step approach — Understand, Architect, Execute, and Evolve — for integrated business impact.",
};

export default function ApproachPage() {
  const { cta } = approachPageContent;

  return (
    <>
      <ApproachHeroSection />
      <FourStepSection />
      <ConnectedExpertiseSection />
      <PageCtaBanner
        title={cta.title}
        description={cta.description}
        cta={cta.cta}
      />
    </>
  );
}
