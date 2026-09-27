import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductPicker } from "@/components/product-picker";
import { ProductRail } from "@/components/product-rail";
import { getProduct, products, relatedProducts } from "@/data/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };
  return { title: product.name, description: product.blurb };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <ProductPicker product={product} />
      <ProductRail
        eyebrow="Also"
        title="Worn with these"
        href="/shop"
        products={relatedProducts(product)}
      />
    </div>
  );
}
