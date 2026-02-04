"use client";

import clsx from "clsx";

interface MenuFilterProps {
  categories: string[];
  activeCategory: string;
  onChangeCategory: (category: string) => void;
  search: string;
  onSearch: (value: string) => void;
}

export const MenuFilter = ({
  categories,
  activeCategory,
  onChangeCategory,
  search,
  onSearch,
}: MenuFilterProps) => {
  return (
    <div className="rounded-3xl border border-ink-700/10 bg-white p-5 shadow-card">
      <p className="text-xs uppercase tracking-[0.3em] text-ink-500">
        Carte interactive
      </p>
      <h3 className="mt-2 text-lg font-semibold text-ink-900">
        Filtres & catégories
      </h3>
      <input
        value={search}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Rechercher un plat..."
        className="mt-4 w-full rounded-xl border border-ink-700/10 px-3 py-2 text-sm"
      />
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onChangeCategory(category)}
            className={clsx(
              "rounded-full px-3 py-1 text-xs transition duration-160",
              activeCategory === category
                ? "bg-ink-900 text-pearl-50"
                : "border border-ink-700/20 text-ink-600 hover:border-ink-700/40"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-2xl bg-pearl-50 p-4 text-xs text-ink-600">
        <p className="font-semibold text-ink-800">Conseil du chef</p>
        <p className="mt-1">
          Filtrez par catégorie pour composer un menu harmonieux et profitez des
          accords mets & vins.
        </p>
      </div>
    </div>
  );
};
