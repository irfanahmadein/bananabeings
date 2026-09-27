"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readOrder, type StoredOrder } from "@/lib/order";
import { inr } from "@/lib/money";

export default function ConfirmedPage() {
  const [order, setOrder] = useState<StoredOrder | null | undefined>(undefined);

  useEffect(() => {
    setOrder(readOrder());
  }, []);

  if (order === undefined) return <div className="px-5 py-16 text-muted">Loading order…</div>;

  if (!order) {
    return (
      <div className="mx-auto max-w-xl px-5 py-16">
        <h1 className="text-3xl font-semibold">No order here.</h1>
        <Link href="/shop" className="mt-4 inline-block underline">
          Back to the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-5 py-16">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Order {order.id}</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">You’re on the list, {order.name.split(" ")[0]}.</h1>
      <p className="mt-4 leading-7 text-muted">
        This is a demo confirmation for {order.email}. Nothing was charged, and nothing will arrive in {order.city}. The number above is only so you can see the end of the flow.
      </p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {order.items.map((item) => (
          <li key={`${item.name}-${item.size}-${item.color}`} className="flex justify-between py-3 text-sm">
            <span>
              {item.name} · {item.color} / {item.size} × {item.qty}
            </span>
            <span>{inr(item.price * item.qty)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-right font-semibold">{inr(order.total)}</p>
      <Link href="/shop" className="mt-8 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-card">
        Keep looking
      </Link>
    </div>
  );
}
