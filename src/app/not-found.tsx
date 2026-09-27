import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-20">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-[-0.045em]">That page isn’t in the bunch.</h1>
      <Link href="/shop" className="mt-6 inline-block rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-card">
        Shop tees
      </Link>
    </div>
  );
}
