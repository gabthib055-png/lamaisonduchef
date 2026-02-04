import Link from "next/link";
import { HeroSection, ImageSection, FeatureGrid } from "@/components/sections";
import menuSeed from "@/data/seed/menu.json";
import type { MenuItem } from "@/lib/types";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Carte Interactive",
    description: "Explorez notre menu avec des descriptions détaillées, des accords mets-vins et des photos haute définition.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Commande en Temps Réel",
    description: "Passez votre commande directement depuis votre table et suivez sa préparation en cuisine.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: "Paiement Simplifié",
    description: "Réglez l'addition en un clic, divisez entre convives ou utilisez Apple Pay et Google Pay.",
  },
];

const featuredDishes = (menuSeed as MenuItem[]).slice(0, 3);

export default function HomePage() {
  return (
    <div className="bg-pearl-50">
      {/* Hero Section */}
      <section className="px-6 pt-8">
        <div className="mx-auto max-w-6xl">
          <HeroSection
            eyebrow="La Maison du Chef"
            title="Une expérience gastronomique connectée au coeur de Paris"
            description="Découvrez une cuisine raffinée où tradition française et innovation digitale se rencontrent pour sublimer chaque instant de votre repas."
            primaryCta={{ label: "Découvrir la carte", href: "/menu" }}
            secondaryCta={{ label: "Réserver une table", href: "/contact" }}
            backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <FeatureGrid
            eyebrow="Expérience unique"
            title="La gastronomie réinventée"
            features={features}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <ImageSection
            eyebrow="Notre histoire"
            title="Une passion transmise de génération en génération"
            description="Depuis 1987, La Maison du Chef perpétue l'art de la cuisine française avec des produits de saison sélectionnés auprès de producteurs locaux. Notre chef, formé dans les plus grandes maisons, propose une carte renouvelée chaque mois pour refléter le meilleur de chaque terroir."
            imageSrc="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800"
            imageAlt="Chef en cuisine"
            imagePosition="right"
            cta={{ label: "En savoir plus", href: "/restaurant" }}
          />
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-ink-500">
              Nos créations
            </p>
            <h2 className="text-serifs text-balance text-2xl font-semibold text-ink-900 md:text-3xl">
              Les incontournables de la carte
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group overflow-hidden rounded-3xl border border-ink-700/10 bg-white shadow-card transition duration-220 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-ink-900">{dish.name}</h3>
                  <p className="mt-2 text-sm text-ink-600">{dish.description}</p>
                  {dish.pairing && (
                    <p className="mt-3 text-xs text-ink-500">
                      <span className="font-semibold">Accord:</span> {dish.pairing}
                    </p>
                  )}
                  <p className="mt-4 text-sm font-semibold text-ink-900">
                    {dish.price.toFixed(2)} €
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="inline-flex rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-pearl-50 transition duration-160 hover:bg-ink-800"
            >
              Voir la carte complète
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[36px] bg-ink-900 px-8 py-16 text-center md:px-12 md:py-20">
            <div className="relative z-10">
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-pearl-300">
                Réservation
              </p>
              <h2 className="text-serifs text-balance text-2xl font-semibold text-pearl-50 md:text-3xl lg:text-4xl">
                Réservez votre table pour une expérience inoubliable
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-pearl-200 md:text-base">
                Du mardi au samedi, notre équipe vous accueille dans un cadre élégant 
                pour un moment de gastronomie unique.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-pearl-50 px-6 py-3 text-sm font-semibold text-ink-900 transition duration-160 hover:bg-pearl-100"
                >
                  Réserver maintenant
                </Link>
                <a
                  href="tel:+33123456789"
                  className="rounded-full border border-pearl-50/40 px-6 py-3 text-sm font-semibold text-pearl-50 transition duration-160 hover:border-pearl-50"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
