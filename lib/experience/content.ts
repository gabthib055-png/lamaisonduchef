import type {
  ExperienceHighlight,
  ExperienceJourneyStep,
  ExperiencePillar,
  ExperienceReservationDetail,
} from "./types";

export const experienceCopy = {
  brand: {
    name: "Maison du Chef",
    tagline: "Experience gastronomique cinematographique",
    location: "Paris, rive droite",
    season: "Edition Hiver 2026",
    signature: "Service en 12 temps - equipes en symbiose",
  },
  hero: {
    eyebrow: "Immersion",
    title: "Un theatre culinaire et futuriste",
    subtitle:
      "Une scenographie lumineuse, des rythmes cadences, une narration culinaire sur mesure.",
    highlights: [
      {
        title: "Rythme",
        description: "Cadences de service synchronisees avec chaque table.",
      },
      {
        title: "Precision",
        description: "Accords mets et textures adaptes a chaque convive.",
      },
      {
        title: "Rituel",
        description: "Un parcours orchestre du premier souffle a la derniere note.",
      },
    ] as ExperienceHighlight[],
  },
  philosophy: {
    eyebrow: "Philosophie",
    title: "Une cuisine d auteur, precise et sensible",
    subtitle: "Les saisons dictent la palette, la technique apporte la clarte.",
    pillars: [
      {
        title: "Sourcing",
        description:
          "Fournisseurs de confiance, filiere courte et gestes d affinement.",
      },
      {
        title: "Atelier",
        description:
          "Cuissons millimetrees, textures contrastees, finitions a la loupe.",
      },
      {
        title: "Narration",
        description:
          "Un fil conducteur qui relie le terroir, le geste et la salle.",
      },
    ] as ExperiencePillar[],
  },
  journey: {
    eyebrow: "Voyage",
    title: "Une partition en plusieurs actes",
    subtitle: "Chaque temps ouvre une scene, chaque geste prolonge le regard.",
    steps: [
      {
        title: "Ouverture sensorielle",
        description:
          "Mise en scene de saveurs claires pour preparer le palais.",
      },
      {
        title: "Coeur incandescent",
        description: "Plats signatures autour de la braise et des condiments.",
      },
      {
        title: "Final suspendu",
        description:
          "Textures lactees, notes florales et accords infuses au dernier souffle.",
      },
    ] as ExperienceJourneyStep[],
  },
  reservation: {
    eyebrow: "Reservation",
    title: "Entrez dans le cercle",
    subtitle: "Un service confidentiel, pense pour des instants rares.",
    description:
      "Notre concierge orchestre les timings, les preferences et les accords afin de composer une soiree unique.",
    actions: ["Planifier une visite privee", "Demander une table signature"],
    details: [
      {
        label: "Capacite",
        value: "24 convives par service",
      },
      {
        label: "Rythme",
        value: "3 services par soir",
      },
      {
        label: "Contact",
        value: "concierge@maisonduchef.fr",
      },
    ] as ExperienceReservationDetail[],
  },
} as const;
