import type { Metadata } from "next";
import { notFound } from "next/navigation";

const policies: Record<string, { title: string; body: string[] }> = {
  shipping: {
    title: "Shipping",
    body: [
      "A real Banana Beings order would leave a studio in India and aim for 3–6 days in metro cities, a little longer everywhere else.",
      "This website does not ship. Checkout ends in a confirmation so you can see the flow, and then it stops.",
      "Free shipping, in the imaginary shop, starts at ₹1,999.",
    ],
  },
  returns: {
    title: "Exchanges",
    body: [
      "Unworn tees with the tag on would be exchangeable within 14 days. Sale colours too — size, not a change of mind on the print.",
      "Nothing here can be returned, because nothing is sent.",
    ],
  },
  privacy: {
    title: "Privacy",
    body: [
      "The cart lives in your browser (localStorage). The demo order lives in this tab (sessionStorage). We do not run a database and we do not send your form to a server.",
      "If you deploy this shop, don’t add analytics that you wouldn’t want on a clothing site you actually use.",
    ],
  },
  terms: {
    title: "Terms",
    body: [
      "Banana Beings is a demo storefront. Prices are illustrative. Placing an order does not create a contract and does not take money.",
      "The code is open source. The brand name on a live shop is yours to keep or replace.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const policy = policies[slug];
  return { title: policy?.title ?? "Policy" };
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = policies[slug];
  if (!policy) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Policy</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-[-0.045em]">{policy.title}</h1>
      <div className="mt-6 space-y-4 leading-7 text-ink/80">
        {policy.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
