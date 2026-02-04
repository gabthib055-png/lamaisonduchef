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
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Une approche globale
              </span>
              <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl">
                {"Pour un modèle d'avenir"}
              </h2>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background no-underline transition-all duration-300 hover:bg-foreground/90"
            >
              Voir la carte
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-white/70">
                    {dish.category}
                  </span>
                  <h3 className="text-xl font-medium text-white">{dish.name}</h3>
                  <p className="mt-2 text-lg font-medium text-white">{dish.price} €</p>
                </div>
                <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-foreground">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl">
            Parlons de votre projet
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Du mardi au samedi, notre équipe vous accueille dans un cadre élégant 
            pour un moment de gastronomie unique.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background no-underline transition-all duration-300 hover:bg-foreground/90"
            >
              Nous contacter
            </Link>
            <a
              href="tel:+33123456789"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground no-underline transition-colors duration-300 hover:text-muted-foreground"
            >
              +33 1 23 45 67 89
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
