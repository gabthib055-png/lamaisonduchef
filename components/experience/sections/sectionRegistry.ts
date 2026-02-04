import type { ExperienceSectionDefinition } from "@/lib/experience/types";
import { ExperienceHero } from "@/components/experience/sections/ExperienceHero";
import { ExperienceJourney } from "@/components/experience/sections/ExperienceJourney";
import { ExperiencePhilosophy } from "@/components/experience/sections/ExperiencePhilosophy";
import { ExperienceReservation } from "@/components/experience/sections/ExperienceReservation";

// Add new sections here to keep navigation and layout in sync.
export const experienceSections: ExperienceSectionDefinition[] = [
  {
    id: "immersion",
    label: "Immersion",
    Component: ExperienceHero,
  },
  {
    id: "philosophie",
    label: "Philosophie",
    Component: ExperiencePhilosophy,
  },
  {
    id: "voyage",
    label: "Voyage",
    Component: ExperienceJourney,
  },
  {
    id: "reservation",
    label: "Reservation",
    Component: ExperienceReservation,
  },
];
