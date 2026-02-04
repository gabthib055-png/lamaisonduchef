"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { MenuItem } from "@/lib/types";
import { fetchMenu } from "@/lib/api";
import { Hero } from "@/components/Hero";
import { MenuFilter } from "@/components/MenuFilter";
import { DishCard } from "@/components/DishCard";
import { CartFloating } from "@/components/cart/CartFloating";
import { useToast } from "@/hooks/useToast";
import { useWebSocket } from "@/hooks/useWebSocket";
import menuSeed from "@/data/seed/menu.json";

export default function HomePage() {
  const [menu, setMenu] = useState<MenuItem[]>(menuSeed as MenuItem[]);
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [search, setSearch] = useState("");
  const { pushToast } = useToast();
  const { status } = useWebSocket();
  const searchParams = useSearchParams();
  const tableId = searchParams.get("table");

  useEffect(() => {
    fetchMenu()
      .then((data) => setMenu(data))
      .catch(() => {
        pushToast({
          kind: "info",
          title: "Menu en mode démo",
          description: "Connexion backend indisponible, données seed chargées.",
        });
      });
  }, [pushToast]);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(menu.map((item) => item.category)));
    return ["Tous", ...unique];
  }, [menu]);

  const filteredMenu = useMemo(() => {
    return menu.filter((item) => {
      const matchesCategory =
        activeCategory === "Tous" || item.category === activeCategory;
      const matchesSearch =
        search.length === 0 ||
        item.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [menu, activeCategory, search]);

  return (
    <main className="min-h-screen bg-pearl-50 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <Hero />
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-ink-600">
          <p>Connexion temps réel: {status}</p>
          {tableId ? (
            <span className="rounded-full bg-pearl-100 px-3 py-1 text-ink-700">
              Table {tableId} connectée
            </span>
          ) : null}
          <p>Transitions 160–250ms · Panier sticky · Stripe Elements</p>
        </div>
        <section className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <MenuFilter
            categories={categories}
            activeCategory={activeCategory}
            onChangeCategory={setActiveCategory}
            search={search}
            onSearch={setSearch}
          />
          <div className="grid gap-5 md:grid-cols-2">
            {filteredMenu.map((item) => (
              <DishCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
      <CartFloating />
    </main>
  );
}
