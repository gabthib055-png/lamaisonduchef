import type { ReactNode } from "react";

import { experienceTheme } from "@/theme/experience";

interface ExperienceShellProps {
  children: ReactNode;
}

export const ExperienceShell = ({ children }: ExperienceShellProps) => {
  return (
    <div className={experienceTheme.layout.background} data-experience-shell>
      <div className={experienceTheme.layout.container}>{children}</div>
    </div>
  );
};
