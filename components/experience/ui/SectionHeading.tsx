import { experienceTheme } from "@/theme/experience";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) => {
  return (
    <div className="flex flex-col gap-3">
      {eyebrow ? (
        <p className={experienceTheme.text.eyebrow}>{eyebrow}</p>
      ) : null}
      <h2 className={experienceTheme.text.title}>{title}</h2>
      {subtitle ? (
        <p className={experienceTheme.text.subtitle}>{subtitle}</p>
      ) : null}
    </div>
  );
};
