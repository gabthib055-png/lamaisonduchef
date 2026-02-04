import { experienceCopy } from "@/lib/experience/content";
import { experienceTheme } from "@/theme/experience";

export const ExperienceFooter = () => {
  return (
    <footer className="flex flex-col gap-6 pt-10">
      <div className={experienceTheme.effects.separator} />
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-pearl-300">
        <p>{experienceCopy.brand.name}</p>
        <p>{experienceCopy.brand.tagline}</p>
        <p>{experienceCopy.brand.location}</p>
      </div>
    </footer>
  );
};
