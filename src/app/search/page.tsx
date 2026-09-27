import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { filterProducts } from "@/data/catalog";

export const metadata: Metadata = { title: "Search" };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const list = q.trim() ? filterProducts({ q }) : [];

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <h1 className="text-4xl font-semibold tracking-[-0.045em]">Search</h1>
      <form action="/search" className="mt-6 max-w-lg">
        <label className="sr-only" htmlFor="q">
          Search tees
        </label>
        <input
          id="q"
          name="q"
          defaultValue={q}
          placeholder="Try crew, ripe, women…"
          className="w-full rounded-full border border-line bg-card px-5 py-3 outline-none ring-banana focus:ring-2"
        />
      </form>
      {q.trim() ? (
        <p className="mt-6 text-sm text-muted">
          {list.length} {list.length === 1 ? "tee" : "tees"} for “{q.trim()}”
        </p>
      ) : (
        <p className="mt-6 text-sm text-muted">
          Search the line, or <Link href="/shop" className="underline">browse everything</Link>.
        </p>
      )}
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {list.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
