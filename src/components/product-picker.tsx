"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import { colorViews, knits, type Product } from "@/data/catalog";
import { care, fitNote, modelLine, occasionLine, shippingNote } from "@/data/facts";
import { inr } from "@/lib/money";

export function ProductPicker({ product }: { product: Product }) {
  const cart = useCart();
  const [colorName, setColorName] = useState(product.colors[0].name);
  const [size, setSize] = useState(product.sizes.includes("M") ? "M" : product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [viewIndex, setViewIndex] = useState(0);
  const color = product.colors.find((entry) => entry.name === colorName) ?? product.colors[0];
  const views = colorViews(color);
  const view = views[viewIndex] ?? views[0];
  const knit = knits.find((entry) => entry.id === product.knit);

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
      <div>
        <div className="relative aspect-[3/4] overflow-hidden bg-[#efeae1]">
          <Image
            src={view.src}
            alt={`${product.name} in ${color.name}, ${view.label.toLowerCase()}`}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
        {views.length > 1 ? (
          <div className="mt-3 flex gap-2" role="group" aria-label="Views">
            {views.map((entry, index) => (
              <button
                key={entry.label}
                type="button"
                aria-pressed={index === viewIndex}
                onClick={() => setViewIndex(index)}
                className={`relative h-16 w-12 overflow-hidden bg-[#efeae1] ${index === viewIndex ? "ring-2 ring-ink" : "ring-1 ring-line"}`}
              >
                <Image src={entry.src} alt="" fill sizes="48px" className="object-cover object-top" />
                <span className="sr-only">{entry.label}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          {product.audience} · {product.fit}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{product.name}</h1>
        <p className="mt-4 flex items-baseline gap-3">
          <span className="text-2xl font-semibold">{inr(product.price)}</span>
          {product.compareAt ? <span className="text-muted line-through">{inr(product.compareAt)}</span> : null}
        </p>
        <p className="mt-1 text-xs text-muted">Inclusive of taxes.</p>
        <p className="mt-6 max-w-prose text-base leading-7 text-ink/80">{product.description}</p>
        <p className="mt-3 text-sm text-muted">{modelLine(product)}</p>

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
                onClick={() => {
                  setColorName(entry.name);
                  setViewIndex(0);
                }}
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
          <p className="mt-2 text-sm text-muted">{fitNote(product)}</p>
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
                image: color.image,
                qty,
              })
            }
          >
            Add to cart
          </button>
        </div>

        {knit ? (
          <dl className="mt-8 grid gap-4 border-t border-line pt-6 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Fabric</dt>
              <dd className="mt-1">{knit.composition}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Weight</dt>
              <dd className="mt-1">{knit.gsm}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Knit</dt>
              <dd className="mt-1">{knit.name}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Worn for</dt>
              <dd className="mt-1">{occasionLine(product)}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Care</dt>
              <dd className="mt-1 leading-6 text-ink/80">{care}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Shipping</dt>
              <dd className="mt-1 leading-6 text-ink/80">{shippingNote}</dd>
            </div>
          </dl>
        ) : null}
      </div>
    </div>
  );
}
