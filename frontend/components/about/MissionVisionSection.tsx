import { Container } from "@/components/ui/Container";
import { CmsImage } from "@/components/ui/CmsImage";
import { MissionVisionCard } from "@/components/about/MissionVisionCard";
import type { AboutMissionVisionContent } from "@/lib/about-content";

export function MissionVisionSection({
  content,
}: {
  content: AboutMissionVisionContent;
}) {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {content.backgroundImage ? (
        <>
          <CmsImage
            src={content.backgroundImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-linear-to-b from-surface/55 via-surface/15 to-surface/50"
            aria-hidden="true"
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-surface-muted" aria-hidden="true" />
      )}

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <MissionVisionCard
            tag={content.mission.tag}
            title={content.mission.title}
            icon={content.mission.icon}
            items={content.mission.items}
            footer={content.mission.footer}
            className="border border-white/60 !bg-white/45 shadow-[var(--shadow-card)] backdrop-blur-2xl backdrop-saturate-150"
          />
          <MissionVisionCard
            tag={content.vision.tag}
            title={content.vision.title}
            icon={content.vision.icon}
            items={content.vision.items}
            footer={content.vision.footer}
            className="border border-white/60 !bg-white/45 shadow-[var(--shadow-card)] backdrop-blur-2xl backdrop-saturate-150"
          />
        </div>
      </Container>
    </section>
  );
}
