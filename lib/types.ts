export type MenuCategory =
  | "Entrées"
  | "Plats"
  | "Desserts"
  | "Boissons"
  | "Accords";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  pairing?: string;
  image: string;
  tags?: string[];
}

export interface TableInfo {
  id: string;
  label: string;
  seats: number;
  zone: string;
}

export interface CartItem {
  id: string;
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  pairing?: string;
  notes?: string;
}

export interface CartState {
  id: string;
  tableId?: string;
  guests?: number;
  items: CartItem[];
  tipPercent?: number;
  updatedAt: string;
}

export type SplitMode = "equal" | "custom";

export interface SplitInput {
  mode: SplitMode;
  participants: number;
  customShares?: number[];
}

export interface Totals {
  subtotal: number;
  tip: number;
  total: number;
}

export type WsEvent =
  | {
      type: "cart:update";
      payload: CartState;
    }
  | {
      type: "admin:update";
      payload: AdminOrder[];
    }
  | {
      type: "ping";
      payload?: Record<string, never>;
    };

export interface AdminOrder {
  id: string;
  tableLabel: string;
  items: CartItem[];
  status: "En cours" | "Servi" | "Payé";
  updatedAt: string;
}
