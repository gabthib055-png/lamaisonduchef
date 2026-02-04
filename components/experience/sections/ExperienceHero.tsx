import { experienceCopy } from "@/lib/experience/content";
import { CinematicReveal } from "@/components/experience/animations/CinematicReveal";
import { FeatureCard } from "@/components/experience/ui/FeatureCard";
import { Section } from "@/components/experience/ui/Section";
import { SectionHeading } from "@/components/experience/ui/SectionHeading";

export const ExperienceHero = () => {
  return (
    <Section>
      <CinematicReveal>
        <SectionHeading
          eyebrow={experienceCopy.hero.eyebrow}
          title={experienceCopy.hero.title}
          subtitle={experienceCopy.hero.subtitle}
        />
      </CinematicReveal>
      <div className="grid gap-4 md:grid-cols-3">
        {experienceCopy.hero.highlights.map((highlight) => (
          <FeatureCard
            key={highlight.title}
            title={highlight.title}
            description={highlight.description}
          />
        ))}
      </div>
    </Section>
  );
};
