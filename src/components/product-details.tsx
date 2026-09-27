import type { Product } from "@/data/catalog";
import { measurements, reviewsFor } from "@/data/facts";

export function ProductDetails({ product }: { product: Product }) {
  const rows = measurements(product);
  const reviews = reviewsFor(product);

  return (
    <div className="mt-16 grid gap-14 border-t border-line pt-12 lg:grid-cols-2">
      <section>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Garment, laid flat</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">Measurements</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Chest is pit to pit, then doubled. Length is shoulder seam to hem. Shoulder is seam to seam.
        </p>
        <table className="mt-6 w-full text-left text-sm">
          <thead>
            <tr className="border-b border-line text-[11px] uppercase tracking-[0.16em] text-muted">
              <th className="py-3 font-semibold">Size</th>
              <th className="py-3 font-semibold">Chest</th>
              <th className="py-3 font-semibold">Length</th>
              <th className="py-3 font-semibold">Shoulder</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.size} className="border-b border-line">
                <td className="py-3 font-semibold">{row.size}</td>
                <td className="py-3">{row.chest} cm</td>
                <td className="py-3">{row.length} cm</td>
                <td className="py-3">{row.shoulder} cm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">From wearers</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">How it sat</h2>
        <ul className="mt-6 space-y-6">
          {reviews.map((review) => (
            <li key={`${review.name}-${review.size}`}>
              <p className="text-sm leading-6 text-ink/80">“{review.text}”</p>
              <p className="mt-2 text-sm font-semibold">
                {review.name} · {review.place}
              </p>
              <p className="text-xs text-muted">Bought {review.size}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
