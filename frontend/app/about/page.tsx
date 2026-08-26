import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { WhoWeAreSection } from "@/components/about/WhoWeAreSection";
import { PageCtaBanner } from "@/components/shared/PageCtaBanner";
import { aboutPageContent } from "@/lib/content";

export const metadata = {
  title: "About Us",
  description:
    "Learn how Inveris Solutions LLP brings integrated expertise across recruitment, consulting, compliance, and audit under one accountable partnership.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <WhoWeAreSection />
      <MissionVisionSection />
      <PageCtaBanner
        title={aboutPageContent.cta.title}
        description={aboutPageContent.cta.description}
        cta={aboutPageContent.cta.cta}
      />
    </>
  );
}
