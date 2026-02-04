import { describe, expect, it } from "vitest";
import {
  buildMenuIndex,
  mergeOrders,
  splitPayment,
  validateCartSecurity,
} from "@/lib/cart";
import type { CartState, MenuItem } from "@/lib/types";

const menu: MenuItem[] = [
  {
    id: "m1",
    name: "Risotto",
    description: "Test",
    price: 20,
    category: "Plats",
    image: "test",
  },
];

const cartA: CartState = {
  id: "cartA",
  tableId: "t1",
  items: [
    {
      id: "i1",
      menuItemId: "m1",
      name: "Risotto",
      price: 20,
      quantity: 1,
    },
  ],
  updatedAt: new Date().toISOString(),
};

const cartB: CartState = {
  id: "cartB",
  tableId: "t1",
  items: [
    {
      id: "i2",
      menuItemId: "m1",
      name: "Risotto",
      price: 20,
      quantity: 2,
    },
  ],
  updatedAt: new Date().toISOString(),
};

describe("mergeOrders", () => {
  it("fusionne les quantités pour une même table", () => {
    const merged = mergeOrders([cartA, cartB]);
    expect(merged.items).toHaveLength(1);
    expect(merged.items[0].quantity).toBe(3);
  });

  it("rejette les commandes de tables différentes", () => {
    expect(() =>
      mergeOrders([{ ...cartA, tableId: "t1" }, { ...cartB, tableId: "t2" }])
    ).toThrow();
  });
});

describe("splitPayment", () => {
  it("répartit un total à parts égales", () => {
    const result = splitPayment(100, { mode: "equal", participants: 4 });
    expect(result).toEqual([25, 25, 25, 25]);
  });
});

describe("validateCartSecurity", () => {
  it("détecte un prix incohérent et une quantité invalide", () => {
    const menuIndex = buildMenuIndex(menu);
    const cart: CartState = {
      ...cartA,
      items: [
        {
          id: "i3",
          menuItemId: "m1",
          name: "Risotto",
          price: 22,
          quantity: 0,
        },
      ],
    };
    const result = validateCartSecurity(cart, menuIndex);
    expect(result.ok).toBe(false);
    expect(result.issues).toHaveLength(2);
  });
});
