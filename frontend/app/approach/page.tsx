import { ApproachHeroSection } from "@/components/approach/ApproachHeroSection";
import { ConnectedExpertiseSection } from "@/components/approach/ConnectedExpertiseSection";
import { FourStepSection } from "@/components/approach/FourStepSection";
import { PageCtaBanner } from "@/components/shared/PageCtaBanner";
import { fetchApproachContent } from "@/lib/approach-content";

export const metadata = {
  title: "Our Approach",
  description:
    "Discover Inveris Solutions LLP four-step approach — Understand, Architect, Execute, and Evolve — for integrated business impact.",
};

export const dynamic = "force-dynamic";

export default async function ApproachPage() {
  const approach = await fetchApproachContent();

  return (
    <>
      <ApproachHeroSection content={approach.hero} />
      <FourStepSection content={approach.fourSteps} />
      <ConnectedExpertiseSection content={approach.connectedExpertise} />
      <PageCtaBanner
        title={approach.cta.title}
        description={approach.cta.description}
        cta={approach.cta.cta}
      />
    </>
  );
}
