"use client";

import { useEffect, useState } from "react";
import type { AdminOrder } from "@/lib/types";
import { useWebSocket } from "@/hooks/useWebSocket";

const initialOrders: AdminOrder[] = [
  {
    id: "ord_01",
    tableLabel: "Table 5",
    status: "En cours",
    updatedAt: "2025-01-01T12:00:00.000Z",
    items: [
      { id: "1", menuItemId: "m1", name: "Risotto d'orge", price: 19, quantity: 2 },
    ],
  },
  {
    id: "ord_02",
    tableLabel: "Table 12",
    status: "Servi",
    updatedAt: "2025-01-01T12:00:00.000Z",
    items: [{ id: "2", menuItemId: "m2", name: "Bar rôti", price: 32, quantity: 1 }],
  },
];

export const AdminPosView = () => {
  const { lastEvent, status } = useWebSocket();
  const [orders, setOrders] = useState<AdminOrder[]>(initialOrders);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (lastEvent?.type === "admin:update") {
      setOrders(lastEvent.payload);
    }
  }, [lastEvent]);

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ink-500">Admin POS</p>
          <h1 className="text-2xl font-semibold text-ink-900">
            Vue temps réel des commandes
          </h1>
        </div>
        <div className="rounded-full bg-ink-900 px-3 py-1 text-xs text-pearl-50">
          WebSocket: {status}
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        {orders.map((order) => (
          <div key={order.id} className="rounded-3xl border border-ink-700/10 bg-white p-4 shadow-card">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink-900">{order.tableLabel}</p>
              <span className="rounded-full bg-pearl-50 px-2 py-1 text-xs text-ink-600">
                {order.status}
              </span>
            </div>
            <div className="mt-3 space-y-2 text-xs text-ink-600">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>{(item.price * item.quantity).toFixed(2)} €</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-ink-500">
              Dernière mise à jour: {mounted ? new Date(order.updatedAt).toLocaleTimeString("fr-FR") : "--:--:--"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
