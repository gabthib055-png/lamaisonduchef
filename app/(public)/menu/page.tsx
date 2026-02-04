"use client";

import { useMemo, useState } from "react";
import type { MenuItem } from "@/lib/types";
import { DishCard } from "@/components/DishCard";
import { CartFloating } from "@/components/cart/CartFloating";
import { HeroSection } from "@/components/sections";
import menuSeed from "@/data/seed/menu.json";

const menu = menuSeed as MenuItem[];

const categoryDescriptions: Record<string, string> = {
  "Entrées": "Éveillez vos papilles avec nos entrées raffinées, préparées avec des produits de saison.",
  "Plats": "Découvrez nos plats signature, où tradition et créativité se rencontrent.",
  "Desserts": "Terminez en beauté avec nos créations sucrées, véritables œuvres d'art gustatives.",
  "Boissons": "Accompagnez votre repas de nos sélections de boissons chaudes et froides.",
  "Accords": "Laissez-vous guider par notre sommelier avec nos accords mets-vins.",
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    return Array.from(new Set(menu.map((item) => item.category)));
  }, []);

  const filteredMenu = useMemo(() => {
    let items = menu;
    
    if (activeCategory) {
      items = items.filter((item) => item.category === activeCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }
    
    return items;
  }, [activeCategory, searchQuery]);

  const groupedMenu = useMemo(() => {
    const groups: Record<string, MenuItem[]> = {};
    filteredMenu.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredMenu]);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="px-6 pt-8">
        <div className="mx-auto max-w-7xl">
          <HeroSection
            eyebrow="Notre carte"
            title="Une cuisine de saison, des saveurs authentiques"
            description="Chaque plat raconte une histoire, celle de producteurs passionnés et d'un chef créatif. Découvrez notre sélection renouvelée au fil des saisons."
            backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600"
          />
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[73px] z-40 border-b border-border bg-background/95 px-6 py-4 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  activeCategory === null
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground hover:border-foreground"
                }`}
              >
                Tous
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-foreground text-background"
                      : "border border-border text-muted-foreground hover:border-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un plat..."
                className="w-full rounded-full border border-border bg-card py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none md:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          {Object.entries(groupedMenu).map(([category, items]) => (
            <div key={category} className="mb-16 last:mb-0">
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
                  {category}
                </h2>
                {categoryDescriptions[category] && (
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                    {categoryDescriptions[category]}
                  </p>
                )}
              </div>

              {/* Items Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <DishCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}

          {filteredMenu.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">Aucun plat ne correspond à votre recherche.</p>
              <button
                onClick={() => {
                  setActiveCategory(null);
                  setSearchQuery("");
                }}
                className="mt-4 text-sm font-medium text-foreground underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Floating Cart */}
      <CartFloating />
    </div>
  );
}
