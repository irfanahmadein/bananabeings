"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  key: string;
  slug: string;
  name: string;
  color: string;
  hex: string;
  size: string;
  price: number;
  qty: number;
};

type AddInput = Omit<CartItem, "key" | "qty"> & { qty?: number };

type CartValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  ready: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (item: AddInput) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartValue | null>(null);
const STORAGE = "bananabeings.cart";

function isItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") return false;
  const item = value as CartItem;
  return typeof item.key === "string" && typeof item.qty === "number" && typeof item.price === "number";
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        const parsed = JSON.parse(raw) as unknown;
        if (Array.isArray(parsed)) setItems(parsed.filter(isItem));
      }
    } catch {
      /* ignore broken local carts */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE, JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo<CartValue>(() => {
    const count = items.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);
    return {
      items,
      count,
      subtotal,
      ready,
      open,
      setOpen,
      add(item) {
        const key = `${item.slug}|${item.color}|${item.size}`;
        const qty = item.qty ?? 1;
        setItems((prev) => {
          const found = prev.find((entry) => entry.key === key);
          if (!found) return [...prev, { ...item, key, qty }];
          return prev.map((entry) => (entry.key === key ? { ...entry, qty: entry.qty + qty } : entry));
        });
        setOpen(true);
      },
      setQty(key, qty) {
        setItems((prev) =>
          qty <= 0 ? prev.filter((entry) => entry.key !== key) : prev.map((entry) => (entry.key === key ? { ...entry, qty } : entry)),
        );
      },
      remove(key) {
        setItems((prev) => prev.filter((entry) => entry.key !== key));
      },
      clear() {
        setItems([]);
      },
    };
  }, [items, open, ready]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used inside CartProvider");
  return value;
}
