import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ExperienceShell } from "@/components/experience/layout/ExperienceShell";

export const metadata: Metadata = {
  title: "Experience | La Maison du Chef",
  description:
    "Structure front-end modulaire pour une experience gastronomique premium.",
};

export default function ExperienceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ExperienceShell>{children}</ExperienceShell>;
}
