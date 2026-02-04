import type { CartItem, CartState, MenuItem, SplitInput, Totals } from "./types";

const roundToCents = (value: number) => Math.round(value * 100) / 100;

const createCartId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `cart_${Date.now()}_${Math.random().toString(16).slice(2)}`;

export const createEmptyCart = (): CartState => ({
  id: createCartId(),
  items: [],
  updatedAt: new Date().toISOString(),
});

export const buildMenuIndex = (menu: MenuItem[]) =>
  new Map(menu.map((item) => [item.id, item]));

export const addItemToCart = (
  cart: CartState,
  menuItem: MenuItem,
  quantity = 1
): CartState => {
  const existing = cart.items.find((item) => item.menuItemId === menuItem.id);
  const items = existing
    ? cart.items.map((item) =>
        item.menuItemId === menuItem.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    : [
        ...cart.items,
        {
          id: `${menuItem.id}_${Date.now()}`,
          menuItemId: menuItem.id,
          name: menuItem.name,
          price: menuItem.price,
          quantity,
          pairing: menuItem.pairing,
        },
      ];
  return { ...cart, items, updatedAt: new Date().toISOString() };
};

export const updateItemQuantity = (
  cart: CartState,
  menuItemId: string,
  quantity: number
): CartState => {
  const items = cart.items
    .map((item) =>
      item.menuItemId === menuItemId ? { ...item, quantity } : item
    )
    .filter((item) => item.quantity > 0);
  return { ...cart, items, updatedAt: new Date().toISOString() };
};

export const removeItem = (cart: CartState, menuItemId: string): CartState => ({
  ...cart,
  items: cart.items.filter((item) => item.menuItemId !== menuItemId),
  updatedAt: new Date().toISOString(),
});

export const calculateTotals = (
  items: CartItem[],
  tipPercent = 0
): Totals => {
  const subtotal = roundToCents(
    items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  const tip = roundToCents((subtotal * tipPercent) / 100);
  return {
    subtotal,
    tip,
    total: roundToCents(subtotal + tip),
  };
};

export const mergeOrders = (carts: CartState[]): CartState => {
  if (carts.length === 0) {
    return createEmptyCart();
  }

  const tableId = carts[0].tableId;
  if (
    tableId &&
    carts.some((cart) => cart.tableId && cart.tableId !== tableId)
  ) {
    throw new Error("Toutes les commandes doivent viser la même table.");
  }

  const itemsMap = new Map<string, CartItem>();
  carts.forEach((cart) => {
    cart.items.forEach((item) => {
      const existing = itemsMap.get(item.menuItemId);
      if (existing) {
        itemsMap.set(item.menuItemId, {
          ...existing,
          quantity: existing.quantity + item.quantity,
        });
      } else {
        itemsMap.set(item.menuItemId, { ...item });
      }
    });
  });

  return {
    id: carts[0].id,
    tableId,
    guests: carts[0].guests,
    items: Array.from(itemsMap.values()),
    updatedAt: new Date().toISOString(),
  };
};

export const splitPayment = (total: number, input: SplitInput): number[] => {
  if (input.participants <= 0) {
    throw new Error("Le nombre de participants doit être positif.");
  }

  if (input.mode === "equal") {
    const base = Math.floor((total / input.participants) * 100) / 100;
    const remainder = roundToCents(total - base * input.participants);
    const splits = Array.from({ length: input.participants }, () => base);
    if (remainder > 0) {
      splits[0] = roundToCents(splits[0] + remainder);
    }
    return splits;
  }

  const shares = input.customShares ?? [];
  if (shares.length !== input.participants) {
    throw new Error("Les parts personnalisées doivent couvrir chaque convive.");
  }

  const totalShares = shares.reduce((sum, value) => sum + value, 0);
  const normalized =
    totalShares > 1.5 ? shares.map((value) => value / 100) : shares;

  return normalized.map((share) => roundToCents(total * share));
};

export interface ValidationIssue {
  code: "UNKNOWN_ITEM" | "PRICE_MISMATCH" | "INVALID_QUANTITY";
  message: string;
}

export const validateCartSecurity = (
  cart: CartState,
  menuIndex: Map<string, MenuItem>
): { ok: boolean; issues: ValidationIssue[] } => {
  const issues: ValidationIssue[] = [];

  cart.items.forEach((item) => {
    const menuItem = menuIndex.get(item.menuItemId);
    if (!menuItem) {
      issues.push({
        code: "UNKNOWN_ITEM",
        message: `Plat inconnu: ${item.name}`,
      });
      return;
    }
    if (item.quantity <= 0 || item.quantity > 20) {
      issues.push({
        code: "INVALID_QUANTITY",
        message: `Quantité invalide pour ${item.name}`,
      });
    }
    if (Math.abs(item.price - menuItem.price) > 0.01) {
      issues.push({
        code: "PRICE_MISMATCH",
        message: `Prix non conforme pour ${item.name}`,
      });
    }
  });

  return { ok: issues.length === 0, issues };
};
