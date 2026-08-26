import { CoreValuesSection } from "@/components/leadership/CoreValuesSection";
import { LeadershipHeroSection } from "@/components/leadership/LeadershipHeroSection";
import { LeadershipPhilosophySection } from "@/components/leadership/LeadershipPhilosophySection";
import { LeadershipTeamSection } from "@/components/leadership/LeadershipTeamSection";
import { PageCtaBanner } from "@/components/shared/PageCtaBanner";
import { leadershipPageContent } from "@/lib/content";

export const metadata = {
  title: "Leadership",
  description:
    "Meet the leadership team at Inveris Solutions LLP — visionaries committed to integrated business partnerships.",
};

export default function LeadershipPage() {
  const { cta } = leadershipPageContent;

  return (
    <>
      <LeadershipHeroSection />
      <LeadershipPhilosophySection />
      <LeadershipTeamSection />
      <CoreValuesSection />
      <PageCtaBanner
        title={cta.title}
        description={cta.description}
        cta={cta.cta}
      />
    </>
  );
}
