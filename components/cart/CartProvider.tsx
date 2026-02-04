"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartState, MenuItem } from "@/lib/types";
import { addItemToCart, createEmptyCart, removeItem, updateItemQuantity } from "@/lib/cart";
import { useWebSocket } from "@/hooks/useWebSocket";

interface FlyOrigin {
  x: number;
  y: number;
  key: string;
}

interface CartContextValue {
  cart: CartState;
  addToCart: (item: MenuItem, origin?: { x: number; y: number }) => void;
  updateQuantity: (menuItemId: string, quantity: number) => void;
  removeFromCart: (menuItemId: string) => void;
  clearCart: () => void;
  flyOrigin: FlyOrigin | null;
  resetFly: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartState>(createEmptyCart());
  const [flyOrigin, setFlyOrigin] = useState<FlyOrigin | null>(null);
  const { lastEvent } = useWebSocket();

  useEffect(() => {
    if (lastEvent?.type === "cart:update") {
      const incoming = lastEvent.payload;
      setCart(incoming);
    }
  }, [lastEvent]);

  const addToCart = useCallback(
    (item: MenuItem, origin?: { x: number; y: number }) => {
      setCart((prev) => addItemToCart(prev, item));
      if (origin) {
        setFlyOrigin({
          x: origin.x,
          y: origin.y,
          key: `${item.id}_${Date.now()}`,
        });
      }
    },
    []
  );

  const updateQuantity = useCallback((menuItemId: string, quantity: number) => {
    setCart((prev) => updateItemQuantity(prev, menuItemId, quantity));
  }, []);

  const removeFromCart = useCallback((menuItemId: string) => {
    setCart((prev) => removeItem(prev, menuItemId));
  }, []);

  const clearCart = useCallback(() => {
    setCart(createEmptyCart());
  }, []);

  const resetFly = useCallback(() => setFlyOrigin(null), []);

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      flyOrigin,
      resetFly,
    }),
    [cart, addToCart, updateQuantity, removeFromCart, clearCart, flyOrigin, resetFly]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart doit être utilisé dans CartProvider.");
  }
  return context;
};
