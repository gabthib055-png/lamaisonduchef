"use client";

import { CartProvider } from "@/components/cart/CartProvider";
import { FlyToCartLayer } from "@/components/cart/FlyToCartLayer";
import { ToastProvider } from "@/components/toast/ToastProvider";
import { WebSocketProvider } from "@/components/realtime/WebSocketProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WebSocketProvider>
      <ToastProvider>
        <CartProvider>
          {children}
          <FlyToCartLayer />
        </CartProvider>
      </ToastProvider>
    </WebSocketProvider>
  );
}
