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
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h4 className="text-lg font-medium text-foreground">{item.name}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
        </div>
        {item.pairing ? (
          <div className="rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Accord: </span>
            {item.pairing}
          </div>
        ) : null}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
          <p className="text-lg font-medium text-foreground">
            {item.price.toFixed(2)} €
          </p>
          <button
            onClick={handleAdd}
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:bg-foreground/90"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};
