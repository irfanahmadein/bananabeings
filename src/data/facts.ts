import type { Product } from "@/data/catalog";

export const care =
  "Cold machine wash with similar colours. Skip the dryer. Hang it, and the collar stays in shape.";

export const shippingNote =
  "Demo checkout. Nothing is charged or shipped. A real order would leave in 2–4 days, with exchanges within 10 days.";

const models = {
  men: { name: "Arun", height: "183 cm", size: "M" },
  women: { name: "Meher", height: "168 cm", size: "S" },
} as const;

export function modelLine(product: Product) {
  const model = models[product.audience];
  return `Shown on ${model.name}, ${model.height}, wearing ${model.size}.`;
}

const occasions: Record<Product["category"], string> = {
  crew: "Office, everyday, lounge, travel",
  vest: "Heat, everyday, lounge",
  crop: "Everyday, lounge",
  oversized: "Lounge, travel, everyday",
  printed: "Everyday, office",
  pack: "A week of the same crew",
};

export function occasionLine(product: Product) {
  return occasions[product.category];
}

export function fitNote(product: Product) {
  if (product.fit === "Oversized") return "Easier than your usual tee. Stay with your size for the drape.";
  if (product.fit === "Cropped") return "Ends about 8 cm shorter than the regular crew, at a high waist.";
  if (product.fit === "Vest") return "True to size through the chest. The armhole sits close, not sporty-tight.";
  if (product.fit === "Relaxed") return "A softer shoulder than the men’s crew. True to size.";
  if (product.category === "pack") return "One size covers all three crews. True to the Daily Crew.";
  return "True to size. Between sizes, stay with the smaller one.";
}

type Measure = { size: string; chest: number; length: number; shoulder: number };

const regular: Measure[] = [
  { size: "XS", chest: 86, length: 66, shoulder: 40 },
  { size: "S", chest: 91, length: 71, shoulder: 42 },
  { size: "M", chest: 96, length: 76, shoulder: 44 },
  { size: "L", chest: 104, length: 81, shoulder: 46 },
  { size: "XL", chest: 112, length: 86, shoulder: 48 },
  { size: "XXL", chest: 120, length: 91, shoulder: 50 },
];

export function measurements(product: Product): Measure[] {
  return regular
    .filter((row) => product.sizes.includes(row.size))
    .map((row) => {
      if (product.fit === "Oversized") {
        return { ...row, chest: row.chest + 8, length: row.length + 4, shoulder: row.shoulder + 4 };
      }
      if (product.fit === "Cropped") return { ...row, length: row.length - 8 };
      if (product.fit === "Relaxed") return { ...row, chest: row.chest + 2, length: row.length - 2 };
      if (product.fit === "Vest") return { ...row, length: row.length - 2 };
      return row;
    });
}

export type WearReview = {
  name: string;
  place: string;
  size: string;
  text: string;
  slug?: string;
  audience?: Product["audience"];
};

const wearReviews: WearReview[] = [
  {
    slug: "daily-crew",
    name: "Dev",
    place: "Mysuru",
    size: "M",
    text: "Wore it on a bus with no AC. It didn’t glue itself to my back. The dusk colour is next.",
  },
  {
    slug: "daily-crew",
    name: "Kabir",
    place: "Delhi",
    size: "L",
    text: "True to the chart. Chest on L is roomy enough for a day at a desk without looking borrowed.",
  },
  {
    slug: "air-vest",
    name: "Arjun",
    place: "Bengaluru",
    size: "M",
    text: "Armhole doesn’t dig in. I wore the ink vest under an open shirt and forgot it was there.",
  },
  {
    slug: "cloud-crop",
    name: "Sara",
    place: "Hyderabad",
    size: "S",
    text: "Hem sits on the waist of my jeans and stays there. The paper colour hides a coffee splash better than I expected.",
  },
  {
    slug: "joke-no-thoughts",
    name: "Nila",
    place: "Kochi",
    size: "M",
    text: "The line is small enough for work. Two people asked what it said. Nobody asked me to turn around.",
  },
  {
    slug: "daily-three",
    name: "Meera",
    place: "Pune",
    size: "M",
    text: "Three of the same crew is the correct amount. Ink for work, sand for the weekend, dusk when both are in the wash.",
  },
  {
    audience: "men",
    name: "Rafi",
    place: "Chennai",
    size: "L",
    text: "Collar still looks new after a month of cold washes. I hang it. That’s the whole trick.",
  },
  {
    audience: "women",
    name: "Ananya",
    place: "Jaipur",
    size: "S",
    text: "Soft on the first wear. I usually size up in Indian tees. Here S matched the chart.",
  },
  {
    name: "Ishaan",
    place: "Mumbai",
    size: "M",
    text: "Heavy enough to hang, light enough for a humid afternoon. Ordering the same size again.",
  },
];

export function reviewsFor(product: Product) {
  const own = wearReviews.filter((review) => review.slug === product.slug);
  if (own.length >= 2) return own.slice(0, 3);
  const pool = wearReviews.filter((review) => !review.slug && (!review.audience || review.audience === product.audience));
  return [...own, ...pool].slice(0, 3);
}
