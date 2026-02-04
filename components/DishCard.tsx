"use client";

import type { MouseEvent } from "react";
import type { MenuItem } from "@/lib/types";
import { useCart } from "./cart/CartProvider";
import { useToast } from "@/hooks/useToast";

interface DishCardProps {
  item: MenuItem;
}

export const DishCard = ({ item }: DishCardProps) => {
  const { addToCart } = useCart();
  const { pushToast } = useToast();

  const handleAdd = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    addToCart(item, { x: rect.left + rect.width / 2, y: rect.top });
    pushToast({
      kind: "success",
      title: "Ajouté au panier",
      description: item.name,
    });
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-700/10 bg-white shadow-card transition duration-220 hover:-translate-y-1">
      <div className="relative h-40 overflow-hidden">
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h4 className="text-base font-semibold text-ink-900">{item.name}</h4>
          <p className="text-xs text-ink-600">{item.description}</p>
        </div>
        {item.pairing ? (
          <div className="rounded-2xl bg-pearl-50 p-3 text-xs text-ink-600">
            <span className="font-semibold text-ink-800">Accord</span>
            <p>{item.pairing}</p>
          </div>
        ) : null}
        <div className="mt-auto flex items-center justify-between">
          <p className="text-sm font-semibold text-ink-900">
            {item.price.toFixed(2)} €
          </p>
          <button
            onClick={handleAdd}
            className="rounded-full bg-ink-900 px-4 py-2 text-xs font-semibold text-pearl-50 transition duration-160 hover:bg-ink-800"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};
