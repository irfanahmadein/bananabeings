"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/components/cart-provider";
import { inr } from "@/lib/money";

export function CartDrawer() {
  const cart = useCart();

  useEffect(() => {
    if (!cart.open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") cart.setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cart]);

  if (!cart.open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label="Close cart"
        onClick={() => cart.setOpen(false)}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="text-lg font-semibold tracking-tight">Cart</h2>
          <button type="button" className="text-sm font-medium" onClick={() => cart.setOpen(false)}>
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.items.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg font-semibold">Your cart is empty.</p>
              <p className="mt-2 text-sm text-muted">A tee usually fixes that.</p>
              <Link
                href="/shop"
                className="mt-6 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-card"
                onClick={() => cart.setOpen(false)}
              >
                Shop tees
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.items.map((item) => (
                <li key={item.key} className="flex gap-3 border-b border-line pb-4">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.image} alt="" className="h-20 w-16 shrink-0 object-cover" />
                  ) : (
                    <span className="mt-1 h-12 w-12 shrink-0 border border-line" style={{ background: item.hex }} />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted">
                      {item.color} / {item.size}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full border border-line"
                        aria-label={`Decrease ${item.name}`}
                        onClick={() => cart.setQty(item.key, item.qty - 1)}
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">{item.qty}</span>
                      <button
                        type="button"
                        className="h-8 w-8 rounded-full border border-line"
                        aria-label={`Increase ${item.name}`}
                        onClick={() => cart.setQty(item.key, item.qty + 1)}
                      >
                        +
                      </button>
                      <button type="button" className="ml-auto text-xs text-muted underline" onClick={() => cart.remove(item.key)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">{inr(item.price * item.qty)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cart.items.length > 0 ? (
          <div className="border-t border-line px-5 py-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-semibold">{inr(cart.subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-muted">Inclusive of taxes. Shipping is worked out at checkout.</p>
            <Link
              href="/checkout"
              className="mt-4 block rounded-full bg-ink py-3 text-center text-sm font-semibold text-card"
              onClick={() => cart.setOpen(false)}
            >
              Checkout
            </Link>
            <Link href="/cart" className="mt-3 block text-center text-sm underline" onClick={() => cart.setOpen(false)}>
              View cart
            </Link>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
