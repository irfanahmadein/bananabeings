import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/data/catalog";

export function ProductRail({
  eyebrow,
  title,
  href,
  products,
}: {
  eyebrow: string;
  title: string;
  href: string;
  products: Product[];
}) {
  return (
    <section className="py-12 sm:py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{title}</h2>
        </div>
        <Link href={href} className="shrink-0 text-sm font-semibold underline decoration-banana decoration-2 underline-offset-4">
          Shop all
        </Link>
      </div>
      <div className="rail -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} rail />
        ))}
      </div>
    </section>
  );
}
