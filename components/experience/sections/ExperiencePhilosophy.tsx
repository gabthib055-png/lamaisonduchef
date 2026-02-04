import { experienceCopy } from "@/lib/experience/content";
import { FeatureCard } from "@/components/experience/ui/FeatureCard";
import { Section } from "@/components/experience/ui/Section";
import { SectionHeading } from "@/components/experience/ui/SectionHeading";

export const ExperiencePhilosophy = () => {
  return (
    <Section>
      <SectionHeading
        eyebrow={experienceCopy.philosophy.eyebrow}
        title={experienceCopy.philosophy.title}
        subtitle={experienceCopy.philosophy.subtitle}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {experienceCopy.philosophy.pillars.map((pillar) => (
          <FeatureCard
            key={pillar.title}
            title={pillar.title}
            description={pillar.description}
          />
        ))}
      </div>
    </Section>
  );
};
