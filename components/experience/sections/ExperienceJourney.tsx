import { experienceCopy } from "@/lib/experience/content";
import { experienceTheme } from "@/theme/experience";
import { Section } from "@/components/experience/ui/Section";
import { SectionHeading } from "@/components/experience/ui/SectionHeading";

export const ExperienceJourney = () => {
  return (
    <Section>
      <SectionHeading
        eyebrow={experienceCopy.journey.eyebrow}
        title={experienceCopy.journey.title}
        subtitle={experienceCopy.journey.subtitle}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {experienceCopy.journey.steps.map((step, index) => (
          <div key={step.title} className={experienceTheme.surfaces.card}>
            <p className={experienceTheme.text.label}>Acte {index + 1}</p>
            <h3 className="mt-3 text-lg font-semibold text-pearl-50">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-pearl-200">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
