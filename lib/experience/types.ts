import type { ComponentType } from "react";

export type ExperienceHighlight = {
  title: string;
  description: string;
};

export type ExperiencePillar = {
  title: string;
  description: string;
};

export type ExperienceJourneyStep = {
  title: string;
  description: string;
};

export type ExperienceReservationDetail = {
  label: string;
  value: string;
};

export type ExperienceSectionDefinition = {
  id: string;
  label: string;
  Component: ComponentType;
};
