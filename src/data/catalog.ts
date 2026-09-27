export type Audience = "men" | "women" | "unisex";
export type Category = "crew" | "oversized" | "printed" | "crop";
export type KnitId = "soft-peel" | "heavy-bunch" | "printed-peel";

export type Colorway = {
  name: string;
  hex: string;
};

export type Product = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  price: number;
  compareAt?: number;
  audience: Audience;
  category: Category;
  knit: KnitId;
  fit: string;
  colors: Colorway[];
  sizes: string[];
  print?: string;
  badge?: "Bestseller" | "New" | "Sale";
};

export const SIZES = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export const knits: {
  id: KnitId;
  name: string;
  line: string;
  detail: string;
}[] = [
  {
    id: "soft-peel",
    name: "Soft Peel",
    line: "Everyday jersey",
    detail:
      "220 GSM banana-cotton single jersey. Enough weight to hang, light enough for a humid afternoon.",
  },
  {
    id: "heavy-bunch",
    name: "Heavy Bunch",
    line: "Oversized drape",
    detail:
      "280 GSM with a looped back. Sits on the shoulder instead of clinging, and still feels soft on the first wear.",
  },
  {
    id: "printed-peel",
    name: "Printed Peel",
    line: "Graphics that stay",
    detail:
      "The same everyday jersey, with a water-based chest print. No cracked plastisol after a few washes.",
  },
];

export const products: Product[] = [
  {
    slug: "ripe-crew",
    name: "Ripe Crew",
    blurb: "The house colour. A straight crew in banana yellow or ink.",
    description:
      "Our simplest tee, cut close enough to feel like clothing and loose enough to forget. Banana-cotton jersey, rib collar, hem that stays put after a wash.",
    price: 999,
    compareAt: 1499,
    audience: "unisex",
    category: "crew",
    knit: "soft-peel",
    fit: "Regular",
    colors: [
      { name: "Ripe", hex: "#f0c14b" },
      { name: "Ink", hex: "#1a1814" },
    ],
    sizes: [...SIZES],
    badge: "Bestseller",
  },
  {
    slug: "daily-crew",
    name: "Daily Crew",
    blurb: "The one you reach for without thinking.",
    description:
      "A quiet crew for work, class, and the bit after. Set-in sleeves, a neck that doesn’t stretch out, and a length that covers a belt.",
    price: 999,
    compareAt: 1499,
    audience: "men",
    category: "crew",
    knit: "soft-peel",
    fit: "Regular",
    colors: [
      { name: "Ink", hex: "#1a1814" },
      { name: "Sand", hex: "#d8c3a5" },
      { name: "Dusk", hex: "#2c3e55" },
    ],
    sizes: [...SIZES],
    badge: "Bestseller",
  },
  {
    slug: "oversized-bunch",
    name: "Oversized Bunch",
    blurb: "Dropped shoulder, heavier knit, still breathable.",
    description:
      "Cut a size easier than the Daily Crew, in Heavy Bunch terry. The hem is longer in the back so it doesn’t ride up when you sit.",
    price: 1399,
    compareAt: 1799,
    audience: "unisex",
    category: "oversized",
    knit: "heavy-bunch",
    fit: "Oversized",
    colors: [
      { name: "Ink", hex: "#1a1814" },
      { name: "Olive", hex: "#5c6842" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "New",
  },
  {
    slug: "too-ripe",
    name: "Too Ripe",
    blurb: "A small chest print. Loud enough, not a billboard.",
    description:
      "White or ink jersey with TOO RIPE set small on the chest. Water-based ink, so it softens instead of cracking.",
    price: 1299,
    audience: "unisex",
    category: "printed",
    knit: "printed-peel",
    fit: "Regular",
    colors: [
      { name: "Paper", hex: "#f7f1e6" },
      { name: "Ink", hex: "#1a1814" },
    ],
    sizes: [...SIZES],
    print: "TOO RIPE",
    badge: "New",
  },
  {
    slug: "after-class",
    name: "After Class",
    blurb: "A cheaper crew that still feels like the rest of the line.",
    description:
      "Same Soft Peel jersey as the Daily Crew, in two college colours. The price is the sale. The collar is not.",
    price: 899,
    compareAt: 1399,
    audience: "men",
    category: "crew",
    knit: "soft-peel",
    fit: "Regular",
    colors: [
      { name: "Maroon", hex: "#6e2e34" },
      { name: "Navy", hex: "#243044" },
    ],
    sizes: [...SIZES],
    badge: "Sale",
  },
  {
    slug: "night-bus",
    name: "Night Bus",
    blurb: "Late colour, small type, heavier than it looks.",
    description:
      "Printed Peel for the last ride home. NIGHT BUS sits high on the chest. The knit is the everyday jersey, not a costume.",
    price: 1199,
    audience: "unisex",
    category: "printed",
    knit: "printed-peel",
    fit: "Regular",
    colors: [
      { name: "Ink", hex: "#1a1814" },
      { name: "Teal", hex: "#2f6f6a" },
    ],
    sizes: [...SIZES],
    print: "NIGHT BUS",
  },
  {
    slug: "lounge-tee",
    name: "Lounge Tee",
    blurb: "A softer shoulder and a slightly shorter body.",
    description:
      "Cut for women and anyone who wants a gentler shoulder seam. Same banana-cotton jersey, less box, same wash.",
    price: 999,
    compareAt: 1499,
    audience: "women",
    category: "crew",
    knit: "soft-peel",
    fit: "Relaxed",
    colors: [
      { name: "Blush", hex: "#e7c1b8" },
      { name: "Ink", hex: "#1a1814" },
      { name: "Sand", hex: "#d8c3a5" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "Bestseller",
  },
  {
    slug: "crop-being",
    name: "Crop Being",
    blurb: "Ends at the waist. Not a costume crop.",
    description:
      "A short tee with a straight hem, meant to sit at the high waist of a trouser. Soft Peel jersey, narrow rib.",
    price: 899,
    compareAt: 1299,
    audience: "women",
    category: "crop",
    knit: "soft-peel",
    fit: "Cropped",
    colors: [
      { name: "Olive", hex: "#5c6842" },
      { name: "Paper", hex: "#f7f1e6" },
    ],
    sizes: ["XS", "S", "M", "L"],
    badge: "Sale",
  },
  {
    slug: "big-cloud",
    name: "Big Cloud",
    blurb: "Women’s oversized, in the heavier knit.",
    description:
      "Heavy Bunch with a shorter sleeve than the unisex oversized, so it still reads as a tee and not a dress.",
    price: 1399,
    compareAt: 1799,
    audience: "women",
    category: "oversized",
    knit: "heavy-bunch",
    fit: "Oversized",
    colors: [
      { name: "Brown", hex: "#5a4636" },
      { name: "Ink", hex: "#1a1814" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "being-print",
    name: "Being Print",
    blurb: "One word. That’s the graphic.",
    description:
      "BEING, set in the same type as the wordmark, small on the left chest. Paper jersey only — the print does the work.",
    price: 1199,
    audience: "women",
    category: "printed",
    knit: "printed-peel",
    fit: "Relaxed",
    colors: [{ name: "Paper", hex: "#f7f1e6" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    print: "BEING",
    badge: "New",
  },
  {
    slug: "heatwave",
    name: "Heatwave",
    blurb: "The lightest crew in the line.",
    description:
      "Same banana-cotton blend, knitted a touch finer for the worst weeks. Teal or dusk. No print.",
    price: 999,
    audience: "unisex",
    category: "crew",
    knit: "soft-peel",
    fit: "Regular",
    colors: [
      { name: "Teal", hex: "#2f6f6a" },
      { name: "Dusk", hex: "#2c3e55" },
    ],
    sizes: [...SIZES],
  },
  {
    slug: "first-peel",
    name: "First Peel",
    blurb: "The entry crew. Pale green, honest price.",
    description:
      "A first Banana Beings tee: Soft Peel jersey, one colour, sale price until the batch is gone. Same collar as the Daily Crew.",
    price: 699,
    compareAt: 1499,
    audience: "men",
    category: "crew",
    knit: "soft-peel",
    fit: "Regular",
    colors: [{ name: "Pale", hex: "#c9d7b8" }],
    sizes: [...SIZES],
    badge: "Sale",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function isOnSale(product: Product) {
  return product.compareAt != null && product.compareAt > product.price;
}

export function filterProducts(opts: {
  audience?: string;
  category?: string;
  sale?: boolean;
  q?: string;
}) {
  const q = opts.q?.trim().toLowerCase();
  return products.filter((p) => {
    if (opts.audience === "men" && p.audience === "women") return false;
    if (opts.audience === "women" && p.audience === "men") return false;
    if (opts.category && p.category !== opts.category) return false;
    if (opts.sale && !isOnSale(p)) return false;
    if (q) {
      const hay = `${p.name} ${p.blurb} ${p.category} ${p.print ?? ""}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function relatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.slug !== product.slug && (p.audience === product.audience || p.audience === "unisex" || product.audience === "unisex"))
    .slice(0, limit);
}

export const reasons = [
  {
    n: "01",
    title: "A cooler fibre",
    body: "Banana fibre moves heat off skin faster than a plain cotton jersey. Useful when the day is already warm.",
  },
  {
    n: "02",
    title: "Soft on day one",
    body: "You should not have to wash a new tee five times before it feels like yours. This one starts there.",
  },
  {
    n: "03",
    title: "Holds a line",
    body: "Cotton in the blend keeps the shoulder and hem from collapsing. Soft, not floppy.",
  },
  {
    n: "04",
    title: "Easy to live in",
    body: "Cut for sitting, riding, and a long day out. Not a gym costume and not a stiff office shirt.",
  },
];

export const reviews = [
  {
    name: "Meera",
    place: "Pune",
    text: "Wore the Lounge Tee through a week of lectures. Collar still looks new. That’s the whole review.",
  },
  {
    name: "Arjun",
    place: "Bengaluru",
    text: "The oversized one doesn’t turn into a sail. Heavy enough to drape, not hot. Ordering the ink colour again.",
  },
  {
    name: "Nila",
    place: "Kochi",
    text: "Too Ripe print is small, which is the point. People ask what it says. They don’t ask me to turn around.",
  },
  {
    name: "Kabir",
    place: "Delhi",
    text: "First Peel was the cheap one and it still feels like the expensive one. Suspicious, in a good way.",
  },
  {
    name: "Sara",
    place: "Hyderabad",
    text: "Crop Being sits at the waist of my jeans and stays there. Most crops in this price are a joke.",
  },
  {
    name: "Dev",
    place: "Mysuru",
    text: "Wore Daily Crew on a bus with no AC. It didn’t glue itself to my back. Buying dusk next.",
  },
];

export const zones = [
  { href: "/shop?g=men", title: "Men", kicker: "Crews & oversized", swatch: "#1a1814", print: undefined },
  { href: "/shop?g=women", title: "Women", kicker: "Lounge, crop, cloud", swatch: "#e7c1b8", print: undefined },
  { href: "/shop?c=oversized", title: "Oversized", kicker: "Heavy Bunch knit", swatch: "#5c6842", print: undefined },
  { href: "/shop?c=printed", title: "Printed", kicker: "Small chest type", swatch: "#f7f1e6", print: "TOO RIPE" },
  { href: "/shop?c=crew", title: "Crew", kicker: "The everyday one", swatch: "#2c3e55", print: undefined },
  { href: "/shop?sale=1", title: "Sale", kicker: "Same tee, lower price", swatch: "#c9d7b8", print: undefined },
];
