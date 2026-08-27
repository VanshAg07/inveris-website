import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CmsImage } from "@/components/ui/CmsImage";
import { SectionTag } from "@/components/ui/SectionTag";
import type { LeadershipTeamContent } from "@/lib/leadership-content";

export function LeadershipTeamSection({
  content,
}: {
  content: LeadershipTeamContent;
}) {
  const team = content;

  return (
    <section className="py-12 lg:py-16 bg-surface">
      <Container>
        <div className="text-center space-y-3 mb-10 lg:mb-14">
          <SectionTag withLine className="justify-center">
            {team.tag}
          </SectionTag>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">{team.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 lg:gap-x-16 max-w-5xl mx-auto">
          {team.members.map((member) => (
            <article key={member.id} className="flex flex-col items-center text-center">
              <div className="relative h-44 w-44 sm:h-48 sm:w-48 rounded-full overflow-hidden shrink-0">
                <CmsImage
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 176px, 192px"
                />
              </div>

              <h3 className="mt-6 text-lg sm:text-xl font-bold text-heading uppercase tracking-wide">
                {member.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-paragraph-muted uppercase tracking-[0.15em]">
                {member.role}
              </p>

              {member.linkedin ? (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-paragraph-muted/40 text-paragraph-muted hover:border-gold hover:text-gold transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              ) : null}

              <p className="mt-4 text-sm text-paragraph leading-relaxed max-w-md">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
