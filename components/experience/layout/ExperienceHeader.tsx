import type { ExperienceSectionDefinition } from "@/lib/experience/types";
import { experienceCopy } from "@/lib/experience/content";
import { experienceTheme } from "@/theme/experience";
import { CinematicReveal } from "@/components/experience/animations/CinematicReveal";

interface ExperienceHeaderProps {
  sections: ExperienceSectionDefinition[];
}

export const ExperienceHeader = ({ sections }: ExperienceHeaderProps) => {
  return (
    <header className="flex flex-col gap-8">
      <CinematicReveal className="flex flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex flex-col gap-3">
            <p className={experienceTheme.text.label}>
              {experienceCopy.brand.season}
            </p>
            <h1 className="text-4xl font-serif text-pearl-50 md:text-5xl">
              {experienceCopy.brand.name}
            </h1>
            <p className={experienceTheme.text.subtitle}>
              {experienceCopy.brand.tagline}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-xs text-pearl-300 sm:text-right">
            <span>{experienceCopy.brand.location}</span>
            <span>{experienceCopy.brand.signature}</span>
          </div>
        </div>
      </CinematicReveal>
      <nav className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-pearl-300">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="rounded-full border border-white/10 px-3 py-2 transition duration-160 hover:border-white/40"
          >
            {section.label}
          </a>
        ))}
      </nav>
      <div className={experienceTheme.effects.separator} />
    </header>
  );
};
