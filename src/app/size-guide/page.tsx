import type { Metadata } from "next";

export const metadata: Metadata = { title: "Size guide" };

const rows = [
  ["XS", "86", "66"],
  ["S", "91", "71"],
  ["M", "96", "76"],
  ["L", "104", "81"],
  ["XL", "112", "86"],
  ["XXL", "120", "91"],
];

export default function SizeGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Fit</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-[-0.045em]">Size guide</h1>
      <p className="mt-4 max-w-prose leading-7 text-muted">
        Chest is the tee laid flat, pit to pit, then doubled. Length is from the shoulder seam to the hem. Oversized styles are cut one step easier — if you want the drape, stay with your usual size.
      </p>
      <table className="mt-8 w-full text-left text-sm">
        <thead>
          <tr className="border-b border-line text-[11px] uppercase tracking-[0.16em] text-muted">
            <th className="py-3 font-semibold">Size</th>
            <th className="py-3 font-semibold">Chest (cm)</th>
            <th className="py-3 font-semibold">Length (cm)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-line">
              {row.map((cell) => (
                <td key={cell} className="py-3 font-medium">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-6 text-sm text-muted">Crop Being ends about 8 cm shorter than the table. Between sizes, size up if you want the Heavy Bunch to drape.</p>
    </div>
  );
}
