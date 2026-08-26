import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTag } from "@/components/ui/SectionTag";
import { leadershipPageContent } from "@/lib/content";

export function LeadershipTeamSection() {
  const { team } = leadershipPageContent;

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <Container>
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <SectionTag withLine className="justify-center">
            {team.tag}
          </SectionTag>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">{team.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.members.map((member) => (
            <Card key={member.role} className="overflow-hidden border-0">
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr]">
                <div className="relative h-64 sm:h-auto min-h-[240px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 180px"
                  />
                </div>

                <div className="p-6 lg:p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-heading">{member.name}</h3>
                  <p className="text-sm text-gold font-medium mt-1">{member.role}</p>
                  <span className="block h-px w-8 bg-gold mt-3 mb-4" aria-hidden="true" />
                  <p className="text-sm text-paragraph leading-relaxed flex-1">
                    {member.bio}
                  </p>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-8 h-8 items-center justify-center rounded border-2 border-gold text-gold hover:bg-gold hover:text-navy transition-colors"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
