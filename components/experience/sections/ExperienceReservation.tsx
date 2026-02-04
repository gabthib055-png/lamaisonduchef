import { experienceCopy } from "@/lib/experience/content";
import { experienceTheme } from "@/theme/experience";
import { FeatureCard } from "@/components/experience/ui/FeatureCard";
import { Section } from "@/components/experience/ui/Section";
import { SectionHeading } from "@/components/experience/ui/SectionHeading";

export const ExperienceReservation = () => {
  return (
    <Section className="gap-8">
      <SectionHeading
        eyebrow={experienceCopy.reservation.eyebrow}
        title={experienceCopy.reservation.title}
        subtitle={experienceCopy.reservation.subtitle}
      />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className={experienceTheme.surfaces.panel}>
          <p className={experienceTheme.text.body}>
            {experienceCopy.reservation.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-pearl-300">
            {experienceCopy.reservation.actions.map((action) => (
              <span
                key={action}
                className="rounded-full border border-white/10 px-4 py-2"
              >
                {action}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {experienceCopy.reservation.details.map((detail) => (
            <FeatureCard
              key={detail.label}
              title={detail.label}
              description={detail.value}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
