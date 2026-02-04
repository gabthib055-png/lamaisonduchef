"use client";

import { useMemo, useState } from "react";
import { calculateTotals } from "@/lib/cart";
import { useCart } from "./CartProvider";
import { PaymentModal } from "../payment/PaymentModal";

export const CartFloating = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const totals = useMemo(() => calculateTotals(cart.items, cart.tipPercent ?? 0), [cart]);

  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div
        id="cart-anchor"
        className="fixed bottom-6 right-6 z-40 flex w-[320px] flex-col gap-3 rounded-2xl border border-ink-700/10 bg-white/90 p-4 shadow-card backdrop-blur transition duration-220"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-ink-900">Panier</p>
            <p className="text-xs text-ink-700">{itemCount} articles</p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full bg-ink-900 px-4 py-2 text-xs font-semibold text-pearl-50 transition duration-160 hover:bg-ink-800"
          >
            Payer {totals.total.toFixed(2)} €
          </button>
        </div>
        <div className="max-h-48 space-y-3 overflow-auto">
          {cart.items.length === 0 ? (
            <p className="text-xs text-ink-600">
              Ajoutez des plats pour démarrer votre commande.
            </p>
          ) : (
            cart.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 border-b border-ink-700/10 pb-2 text-sm"
              >
                <div>
                  <p className="font-medium text-ink-900">{item.name}</p>
                  <p className="text-xs text-ink-600">{item.price.toFixed(2)} €</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.menuItemId, item.quantity - 1)}
                    className="h-6 w-6 rounded-full border border-ink-700/10 text-xs"
                  >
                    -
                  </button>
                  <span className="text-xs font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.menuItemId, item.quantity + 1)}
                    className="h-6 w-6 rounded-full border border-ink-700/10 text-xs"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.menuItemId)}
                    className="text-[10px] text-ink-500"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <PaymentModal open={isOpen} onClose={() => setIsOpen(false)} cart={cart} />
    </>
  );
};
