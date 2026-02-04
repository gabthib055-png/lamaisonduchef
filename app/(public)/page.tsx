import Link from "next/link";
import menuSeed from "@/data/seed/menu.json";
import type { MenuItem } from "@/lib/types";

const featuredDishes = (menuSeed as MenuItem[]).slice(0, 3);

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
            alt="Restaurant ambiance"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-white/80">
            Restaurant gastronomique
          </p>
          <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Une expérience gastronomique connectée au coeur de Paris
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Découvrez une cuisine raffinée où tradition française et innovation digitale 
            se rencontrent pour sublimer chaque instant de votre repas.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/menu"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900 no-underline transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
            >
              Découvrir la carte
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white/60 bg-transparent px-8 py-4 text-sm font-semibold text-white no-underline transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Réserver une table
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Expérience unique
            </p>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              La gastronomie réinventée
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Carte Interactive",
                description: "Explorez notre menu avec des descriptions détaillées, des accords mets-vins et des photos haute définition.",
                icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              },
              {
                title: "Commande en Temps Réel",
                description: "Passez votre commande directement depuis votre table et suivez sa préparation en cuisine.",
                icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Paiement Simplifié",
                description: "Réglez l'addition en un clic, divisez entre convives ou utilisez Apple Pay et Google Pay.",
                icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              }
            ].map((feature, index) => (
              <div key={index} className="rounded-2xl bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Notre histoire
              </p>
              <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Une passion transmise de génération en génération
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Depuis 1987, La Maison du Chef perpétue l'art de la cuisine française avec des produits 
                de saison sélectionnés auprès de producteurs locaux. Notre chef, formé dans les plus 
                grandes maisons, propose une carte renouvelée chaque mois pour refléter le meilleur 
                de chaque terroir.
              </p>
              <Link
                href="/restaurant"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground no-underline transition-colors duration-200 hover:text-accent"
              >
                En savoir plus
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80"
                  alt="Chef en cuisine"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl">
                <p className="text-3xl font-bold">37</p>
                <p className="text-sm opacity-80">années d'excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-secondary px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Nos créations
            </p>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Les incontournables de la carte
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group overflow-hidden rounded-3xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground">{dish.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dish.description}</p>
                  {dish.pairing && (
                    <p className="mt-4 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Accord:</span> {dish.pairing}
                    </p>
                  )}
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-lg font-bold text-foreground">{dish.price.toFixed(2)} €</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/menu"
              className="inline-flex rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground no-underline transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              Voir la carte complète
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[40px] bg-primary px-8 py-20 text-center md:px-16 md:py-24">
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
            <div className="relative z-10">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-primary-foreground/70">
                Réservation
              </p>
              <h2 className="mx-auto max-w-3xl font-serif text-3xl font-semibold text-primary-foreground md:text-4xl lg:text-5xl">
                Réservez votre table pour une expérience inoubliable
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/80">
                Du mardi au samedi, notre équipe vous accueille dans un cadre élégant 
                pour un moment de gastronomie unique.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground no-underline transition-all duration-300 hover:shadow-lg"
                >
                  Réserver maintenant
                </Link>
                <a
                  href="tel:+33123456789"
                  className="rounded-full border-2 border-primary-foreground/40 bg-transparent px-8 py-4 text-sm font-semibold text-primary-foreground no-underline transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/10"
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
