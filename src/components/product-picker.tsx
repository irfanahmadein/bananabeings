"use client";

import { useMemo, useState } from "react";
import { TeeArt } from "@/components/brand";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/data/catalog";
import { knits } from "@/data/catalog";
import { inr } from "@/lib/money";

export function ProductPicker({ product }: { product: Product }) {
  const cart = useCart();
  const [colorName, setColorName] = useState(product.colors[0].name);
  const [size, setSize] = useState(product.sizes.includes("M") ? "M" : product.sizes[0]);
  const [qty, setQty] = useState(1);
  const color = product.colors.find((entry) => entry.name === colorName) ?? product.colors[0];
  const knit = knits.find((entry) => entry.id === product.knit);

  const maskId = useMemo(() => `pdp-${product.slug}-${color.name}`, [product.slug, color.name]);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="rounded-3xl bg-[#efeae1] p-6 sm:p-10">
        <TeeArt color={color.hex} print={product.print} maskId={maskId} className="mx-auto w-full max-w-md" />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          {product.audience === "unisex" ? "Everyone" : product.audience} · {product.fit}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{product.name}</h1>
        <p className="mt-4 flex items-baseline gap-3">
          <span className="text-2xl font-semibold">{inr(product.price)}</span>
          {product.compareAt ? <span className="text-muted line-through">{inr(product.compareAt)}</span> : null}
        </p>
        <p className="mt-1 text-xs text-muted">Inclusive of taxes.</p>
        <p className="mt-6 max-w-prose text-base leading-7 text-ink/80">{product.description}</p>

        <fieldset className="mt-8">
          <legend className="text-sm font-semibold">Colour · {color.name}</legend>
          <div className="mt-3 flex gap-2">
            {product.colors.map((entry) => (
              <button
                key={entry.name}
                type="button"
                aria-label={entry.name}
                aria-pressed={entry.name === color.name}
                className={`h-9 w-9 rounded-full border ${entry.name === color.name ? "border-ink ring-2 ring-ink ring-offset-2 ring-offset-paper" : "border-line"}`}
                style={{ background: entry.hex }}
                onClick={() => setColorName(entry.name)}
              />
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="text-sm font-semibold">Size</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((entry) => (
              <button
                key={entry}
                type="button"
                aria-pressed={entry === size}
                className={`min-w-12 rounded-full border px-3 py-2 text-sm font-semibold ${entry === size ? "border-ink bg-ink text-card" : "border-line bg-card"}`}
                onClick={() => setSize(entry)}
              >
                {entry}
              </button>
            ))}
          </div>
          <a href="/size-guide" className="mt-2 inline-block text-xs underline">
            Size guide
          </a>
        </fieldset>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center rounded-full border border-line bg-card">
            <button type="button" className="h-11 w-11" aria-label="Decrease quantity" onClick={() => setQty((n) => Math.max(1, n - 1))}>
              −
            </button>
            <span className="w-6 text-center text-sm">{qty}</span>
            <button type="button" className="h-11 w-11" aria-label="Increase quantity" onClick={() => setQty((n) => n + 1)}>
              +
            </button>
          </div>
          <button
            type="button"
            className="h-11 flex-1 rounded-full bg-ink text-sm font-semibold text-card hover:bg-leaf"
            onClick={() =>
              cart.add({
                slug: product.slug,
                name: product.name,
                color: color.name,
                hex: color.hex,
                size,
                price: product.price,
                qty,
              })
            }
          >
            Add to cart
          </button>
        </div>

        {knit ? (
          <div className="mt-8 rounded-2xl border border-line bg-card p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">{knit.line}</p>
            <p className="mt-1 font-semibold">{knit.name}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{knit.detail}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
