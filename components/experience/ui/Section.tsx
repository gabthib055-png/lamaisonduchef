import clsx from "clsx";
import type { ReactNode } from "react";

import { experienceTheme } from "@/theme/experience";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={clsx(experienceTheme.layout.section, className)}>
      {children}
    </section>
  );
};
