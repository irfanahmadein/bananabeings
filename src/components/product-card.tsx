"use client";

import Link from "next/link";
import { useId } from "react";
import { TeeArt } from "@/components/brand";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/data/catalog";
import { inr } from "@/lib/money";

export function ProductCard({ product, rail = false }: { product: Product; rail?: boolean }) {
  const cart = useCart();
  const maskId = `card-${useId().replace(/:/g, "")}`;
  const color = product.colors[0];
  const size = product.sizes.includes("M") ? "M" : product.sizes[0];

  return (
    <article className={rail ? "w-[240px] shrink-0 snap-start sm:w-[260px]" : "min-w-0"}>
      <div className="group relative overflow-hidden rounded-2xl bg-[#efeae1]">
        <Link href={`/product/${product.slug}`} className="block">
          <TeeArt
            color={color.hex}
            print={product.print}
            maskId={maskId}
            className="aspect-square w-full p-6 transition duration-300 group-hover:scale-[1.03]"
          />
        </Link>
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-card px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
            {product.badge}
          </span>
        ) : null}
        <button
          type="button"
          className="absolute inset-x-3 bottom-3 rounded-full bg-ink px-3 py-2.5 text-xs font-semibold text-card opacity-100 transition hover:bg-leaf sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          onClick={() =>
            cart.add({
              slug: product.slug,
              name: product.name,
              color: color.name,
              hex: color.hex,
              size,
              price: product.price,
            })
          }
        >
          Quick add · {color.name} / {size}
        </button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <Link href={`/product/${product.slug}`} className="text-sm font-semibold tracking-tight hover:underline">
            {product.name}
          </Link>
          <p className="mt-0.5 text-xs text-muted">{product.fit}</p>
        </div>
        <p className="text-right text-sm">
          <span className="font-semibold">{inr(product.price)}</span>
          {product.compareAt ? (
            <span className="mt-0.5 block text-xs text-muted line-through">{inr(product.compareAt)}</span>
          ) : null}
        </p>
      </div>
    </article>
  );
}
