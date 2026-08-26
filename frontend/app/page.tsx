import { HeroSection } from "@/components/home/HeroSection";
import { ValueBarSection } from "@/components/home/ValueBarSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueBarSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <StatsSection />
      <CtaSection />
    </>
  );
}
