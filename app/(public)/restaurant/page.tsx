import type { Metadata } from "next";
import { HeroSection, ImageSection, FeatureGrid } from "@/components/sections";

export const metadata: Metadata = {
  title: "Le Restaurant",
  description: "Découvrez l'histoire et la philosophie de La Maison du Chef, restaurant gastronomique à Paris.",
};

const values = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Fraîcheur",
    description: "Nos produits sont livrés chaque matin par nos producteurs partenaires pour garantir une fraîcheur optimale.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Passion",
    description: "Notre équipe partage une passion commune pour la gastronomie et l'art de recevoir depuis plus de 35 ans.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Saison",
    description: "Notre carte évolue au rythme des saisons pour vous offrir le meilleur de chaque terroir français.",
  },
];

export default function RestaurantPage() {
  return (
    <div className="bg-pearl-50">
      {/* Hero */}
      <section className="px-6 pt-8">
        <div className="mx-auto max-w-6xl">
          <HeroSection
            eyebrow="Notre histoire"
            title="Depuis 1987, l'excellence au service du goût"
            description="Fondée par le Chef Michel Dupont, La Maison du Chef perpétue l'art de la cuisine française avec passion et créativité."
            backgroundImage="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <ImageSection
            eyebrow="Le Chef"
            title="Michel Dupont, artisan de la gastronomie"
            description="Formé auprès des plus grands noms de la cuisine française, Michel Dupont a développé une approche unique alliant respect des traditions et audace créative. Sa philosophie : sublimer les produits sans les dénaturer, pour créer des plats qui racontent une histoire."
            imageSrc="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800"
            imageAlt="Chef Michel Dupont"
            imagePosition="right"
          />
        </div>
      </section>

      {/* Values */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <FeatureGrid
            eyebrow="Nos valeurs"
            title="Ce qui guide notre cuisine"
            features={values}
          />
        </div>
      </section>

      {/* Space Section */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <ImageSection
            eyebrow="L'espace"
            title="Un écrin d'élégance au coeur de Paris"
            description="Notre salle de 40 couverts allie confort contemporain et touches classiques. Lumière tamisée, mobilier en chêne massif et œuvres d'art créent une atmosphère propice à la dégustation et à la conversation."
            imageSrc="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800"
            imageAlt="Intérieur du restaurant"
            imagePosition="left"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-ink-500">
              Notre équipe
            </p>
            <h2 className="text-serifs text-balance text-2xl font-semibold text-ink-900 md:text-3xl">
              Des passionnés à votre service
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Michel Dupont",
                role: "Chef Exécutif",
                image: "https://images.unsplash.com/photo-1583394293214-28ez7c7a7afo?w=400",
              },
              {
                name: "Sophie Martin",
                role: "Cheffe Pâtissière",
                image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400",
              },
              {
                name: "Pierre Lefèvre",
                role: "Sommelier",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-3xl border border-ink-700/10 bg-white shadow-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-base font-semibold text-ink-900">{member.name}</h3>
                  <p className="mt-1 text-sm text-ink-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
