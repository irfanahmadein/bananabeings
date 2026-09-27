import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">About</p>
      <h1 className="mt-2 text-5xl font-semibold tracking-[-0.05em]">Comfort, with a banana in the name.</h1>
      <div className="mt-8 space-y-5 text-lg leading-8 text-ink/80">
        <p>
          Banana Beings is comfort apparel for people who live in warm cities: crews, men’s vests, women’s crops, and a short run of joke prints. The name is the joke. The cloth is not.
        </p>
        <p>
          Banana fibre is the soft part. Cotton keeps the shoulder and the hem from giving up. We knit three weights — Soft Peel, Heavy Bunch, and Printed Peel — and we stop there.
        </p>
        <p>
          This website is a demo storefront: a full shop you can click through, with no warehouse behind it. Use it to see the brand, or to point a tester at a realistic clothing site.
        </p>
      </div>
      <Link href="/shop" className="mt-8 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-card">
        Shop the line
      </Link>
    </div>
  );
}
