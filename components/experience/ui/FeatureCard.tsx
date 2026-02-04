import clsx from "clsx";

import { experienceTheme } from "@/theme/experience";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <div className={clsx(experienceTheme.surfaces.card, className)}>
      <p className={experienceTheme.text.label}>{title}</p>
      <p className="mt-3 text-sm text-pearl-200">{description}</p>
    </div>
  );
};
