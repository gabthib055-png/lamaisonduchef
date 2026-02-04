import type { CartState, MenuItem, TableInfo } from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

const fetchJson = async <T,>(path: string, init?: RequestInit): Promise<T> => {
  if (!API_BASE) {
    throw new ApiError("NEXT_PUBLIC_API_URL manquant.", 0);
  }
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
  });
  if (!response.ok) {
    const text = await response.text();
    throw new ApiError(text || "Erreur API", response.status);
  }
  return (await response.json()) as T;
};

export const fetchMenu = () => fetchJson<MenuItem[]>("/menu");

export const fetchTables = () => fetchJson<TableInfo[]>("/tables");

export const createOrder = (cart: CartState) =>
  fetchJson<{ id: string }>("/orders", {
    method: "POST",
    body: JSON.stringify(cart),
  });

export const createPaymentIntent = (cart: CartState) =>
  fetchJson<{ clientSecret: string }>("/payments/intent", {
    method: "POST",
    body: JSON.stringify({ cartId: cart.id }),
  });
