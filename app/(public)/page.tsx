import Link from "next/link";
import menuSeed from "@/data/seed/menu.json";
import type { MenuItem } from "@/lib/types";

const featuredDishes = (menuSeed as MenuItem[]).slice(0, 3);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
            alt="Restaurant ambiance"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-32 text-center">
          <h1 className="max-w-5xl font-serif text-5xl font-medium leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            La Maison du Chef
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base text-white/80 sm:text-lg">
            Une expérience gastronomique connectée au coeur de Paris. 
            Tradition française et innovation digitale.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium text-foreground no-underline transition-all duration-300 hover:bg-white/90"
            >
              Découvrir la carte
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/50 bg-transparent px-8 py-4 text-sm font-medium text-white no-underline transition-all duration-300 hover:bg-white/10"
            >
              Réserver une table
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-2xl">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Nos engagements principaux
            </span>
            <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl">
              Allier innovation, durabilité et efficacité
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Produits d'exception",
                description: "Sélection rigoureuse de produits frais et locaux, issus de nos partenaires producteurs.",
              },
              {
                num: "02",
                title: "Chef étoilé",
                description: "Notre chef perpétue l'excellence de la cuisine française avec passion et créativité.",
              },
              {
                num: "03",
                title: "Cadre raffiné",
                description: "Un écrin d'élégance au coeur de Paris pour des moments inoubliables.",
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group bg-card p-10 transition-all duration-500 hover:bg-secondary"
              >
                <span className="mb-8 block font-serif text-5xl font-light text-muted-foreground/30">{feature.num}</span>
                <h3 className="mb-4 text-xl font-medium text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-square lg:aspect-auto">
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1000&q=80"
              alt="Chef en cuisine"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-foreground px-8 py-20 text-background md:px-16 lg:px-20">
            <span className="mb-6 text-xs font-medium uppercase tracking-widest text-background/50">
              Notre engagement
            </span>
            <h2 className="font-serif text-3xl font-medium leading-tight text-background md:text-4xl lg:text-5xl">
              La Maison du Chef se veut acteur de la transition culinaire
            </h2>
            <p className="mt-8 text-base leading-relaxed text-background/70">
              Depuis 1987, nous perpétuons l'art de la cuisine française avec des produits 
              de saison sélectionnés auprès de producteurs locaux. Notre chef propose des 
              solutions durables au service des palais de demain.
            </p>
            <Link
              href="/restaurant"
              className="mt-10 inline-flex w-fit items-center justify-center rounded-full border border-background bg-transparent px-8 py-3 text-sm font-medium text-background no-underline transition-all duration-300 hover:bg-background hover:text-foreground"
            >
              Notre engagement
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-amber-600">
              Nos créations
            </span>
            <h2 className="font-serif text-3xl font-bold text-stone-900 sm:text-4xl md:text-5xl">
              Les signatures du Chef
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-800 backdrop-blur-sm">
                      {dish.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900">{dish.name}</h3>
                  <p className="mt-2 line-clamp-2 text-stone-600">{dish.description}</p>
                  {dish.pairing && (
                    <p className="mt-4 flex items-center gap-2 text-sm text-stone-500">
                      <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {dish.pairing}
                    </p>
                  )}
                  <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
                    <p className="text-2xl font-bold text-amber-600">{dish.price} €</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-stone-900 px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-stone-800 hover:shadow-xl"
            >
              Voir la carte complète
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-stone-900 py-24">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-amber-400">
            Réservation
          </span>
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Réservez votre table pour une expérience inoubliable
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-300">
            Du mardi au samedi, notre équipe vous accueille dans un cadre élégant 
            pour un moment de gastronomie unique.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-600 px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-amber-700 hover:shadow-xl"
            >
              Réserver maintenant
            </Link>
            <a
              href="tel:+33123456789"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +33 1 23 45 67 89
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
