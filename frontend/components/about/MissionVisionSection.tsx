import { Container } from "@/components/ui/Container";
import { MissionVisionCard } from "@/components/about/MissionVisionCard";
import { aboutPageContent } from "@/lib/content";

export function MissionVisionSection() {
  const { missionVision } = aboutPageContent;

  return (
    <section className="py-16 lg:py-24 bg-surface-muted">
      <Container>
        <div className="flex flex-col sm:flex-row gap-6 mb-12 lg:mb-16 max-w-4xl">
          <div className="shrink-0">
            <div className="w-14 h-14 flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M24 4L42 14V34L24 44L6 34V14L24 4Z"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="24" cy="18" r="4" stroke="var(--color-gold)" strokeWidth="1.5" fill="none" />
                <path
                  d="M16 32C16 27.5817 19.5817 24 24 24C28.4183 24 32 27.5817 32 32"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-4 text-text-body leading-relaxed">
            {missionVision.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <MissionVisionCard
            tag={missionVision.mission.tag}
            title={missionVision.mission.title}
            icon={missionVision.mission.icon}
            items={missionVision.mission.items}
            footer={missionVision.mission.footer}
          />
          <MissionVisionCard
            tag={missionVision.vision.tag}
            title={missionVision.vision.title}
            icon={missionVision.vision.icon}
            items={missionVision.vision.items}
            footer={missionVision.vision.footer}
          />
        </div>
      </Container>
    </section>
  );
}
