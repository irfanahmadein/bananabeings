import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { filterProducts, products } from "@/data/catalog";

export const metadata: Metadata = { title: "Shop" };

const filters = [
  { href: "/shop", label: "All" },
  { href: "/shop?g=men", label: "Men" },
  { href: "/shop?g=women", label: "Women" },
  { href: "/shop?c=crew", label: "Crew" },
  { href: "/shop?c=vest", label: "Vest" },
  { href: "/shop?c=crop", label: "Crop" },
  { href: "/shop?c=oversized", label: "Oversized" },
  { href: "/shop?c=joke", label: "Jokes" },
  { href: "/shop?sale=1", label: "Sale" },
];

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ g?: string; c?: string; sale?: string }>;
}) {
  const params = await searchParams;
  const audience = params.g;
  const category = params.c;
  const sale = params.sale === "1";
  const joke = params.c === "joke";
  const who = audience === "men" ? "Men" : audience === "women" ? "Women" : "";
  const cut = joke ? "Jokes" : category ? category[0].toUpperCase() + category.slice(1) : "";
  const list = (
    joke ? products.filter((product) => product.slug.startsWith("joke-")) : filterProducts({ audience, category, sale })
  ).filter((product) => {
    if (audience === "men" && product.audience === "women") return false;
    if (audience === "women" && product.audience === "men") return false;
    return true;
  });
  const title = sale ? "Sale" : [who, cut].filter(Boolean).join(" · ") || "All comfort";

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Shop</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">{title}</h1>
      <p className="mt-3 max-w-xl text-muted">
        {list.length} {list.length === 1 ? "piece" : "pieces"}. Prices in INR, taxes included.
      </p>
      <div className="rail mt-6 flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => {
          const active =
            filter.href === "/shop"
              ? !audience && !category && !sale
              : filter.href.includes("sale")
                ? sale
                : filter.href.includes("g=")
                  ? audience === filter.href.split("=")[1] && !category && !sale
                  : category === filter.href.split("=")[1] && !sale;
          return (
            <Link
              key={filter.href}
              href={filter.href}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold ${active ? "bg-ink text-card" : "border border-line bg-card"}`}
              aria-current={active ? "page" : undefined}
            >
              {filter.label}
            </Link>
          );
        })}
      </div>
      {list.length === 0 ? (
        <p className="mt-16 text-lg">Nothing in this cut yet.</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {list.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
