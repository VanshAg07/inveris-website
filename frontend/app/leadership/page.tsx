import { CoreValuesSection } from "@/components/leadership/CoreValuesSection";
import { LeadershipHeroSection } from "@/components/leadership/LeadershipHeroSection";
import { LeadershipPhilosophySection } from "@/components/leadership/LeadershipPhilosophySection";
import { LeadershipTeamSection } from "@/components/leadership/LeadershipTeamSection";
import { PageCtaBanner } from "@/components/shared/PageCtaBanner";
import { fetchLeadershipContent } from "@/lib/leadership-content";

export const metadata = {
  title: "Leadership",
  description:
    "Meet the leadership team at Inveris Solutions LLP — visionaries committed to integrated business partnerships.",
};

export const dynamic = "force-dynamic";

export default async function LeadershipPage() {
  const leadership = await fetchLeadershipContent();

  return (
    <>
      <LeadershipHeroSection content={leadership.hero} />
      <LeadershipPhilosophySection content={leadership.philosophy} />
      <LeadershipTeamSection content={leadership.team} />
      <CoreValuesSection content={leadership.values} />
      <PageCtaBanner
        title={leadership.cta.title}
        description={leadership.cta.description}
        cta={leadership.cta.cta}
      />
    </>
  );
}
