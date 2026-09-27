export type Audience = "men" | "women";
export type Category = "crew" | "oversized" | "printed" | "crop" | "vest" | "pack";
export type KnitId = "soft-peel" | "heavy-bunch" | "printed-peel";

export type ColorView = {
  label: string;
  src: string;
};

export type Colorway = {
  name: string;
  hex: string;
  image: string;
  views?: ColorView[];
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

function joke(
  slug: string,
  name: string,
  audience: "men" | "women",
  color: string,
  hex: string,
  image: string,
  print: string,
): Product {
  return {
    slug,
    name,
    blurb: `A very small “${print}” on the chest. The joke is the print.`,
    description: `Everyday banana-cotton crew with “${print}” set tiny on the left chest. Water-based ink. The rest of the shirt stays quiet.`,
    price: 1199,
    audience,
    category: "printed",
    knit: "printed-peel",
    fit: "Regular",
    colors: [{ name: color, hex, image }],
    sizes: [...SIZES],
    print,
    badge: "New",
  };
}

export const knits: {
  id: KnitId;
  name: string;
  line: string;
  detail: string;
  composition: string;
  gsm: string;
}[] = [
  {
    id: "soft-peel",
    name: "Soft Peel",
    line: "Everyday jersey",
    detail:
      "220 GSM banana-cotton single jersey. Enough weight to hang, light enough for a humid afternoon.",
    composition: "60% bamboo viscose, 35% cotton, 5% elastane",
    gsm: "220 GSM",
  },
  {
    id: "heavy-bunch",
    name: "Heavy Bunch",
    line: "Oversized drape",
    detail:
      "280 GSM with a looped back. Sits on the shoulder instead of clinging, and still feels soft on the first wear.",
    composition: "55% bamboo viscose, 40% cotton, 5% elastane",
    gsm: "280 GSM",
  },
  {
    id: "printed-peel",
    name: "Printed Peel",
    line: "Graphics that stay",
    detail:
      "The same everyday jersey, with a water-based chest print. No cracked plastisol after a few washes.",
    composition: "60% bamboo viscose, 35% cotton, 5% elastane",
    gsm: "220 GSM",
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
    audience: "women",
    category: "crew",
    knit: "soft-peel",
    fit: "Regular",
    colors: [
      { name: "Ripe", hex: "#f0c14b", image: "/looks/ripe-crew-ripe.jpg" },
      { name: "Ink", hex: "#1a1814", image: "/looks/ripe-crew-women-ink.jpg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "Bestseller",
  },
  {
    slug: "ripe-crew-men",
    name: "Ripe Crew",
    blurb: "The house colour. A straight crew in banana yellow or ink.",
    description:
      "Our simplest tee, cut close enough to feel like clothing and loose enough to forget. Banana-cotton jersey, rib collar, hem that stays put after a wash.",
    price: 999,
    compareAt: 1499,
    audience: "men",
    category: "crew",
    knit: "soft-peel",
    fit: "Regular",
    colors: [
      { name: "Ink", hex: "#1a1814", image: "/looks/ripe-crew-ink.jpg" },
      { name: "Ripe", hex: "#f0c14b", image: "/looks/ripe-crew-men-ripe.jpg" },
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
      { name: "Ink", hex: "#1a1814", image: "/looks/daily-crew-ink.jpg" },
      { name: "Sand", hex: "#d8c3a5", image: "/looks/daily-crew-sand.jpg" },
      { name: "Dusk", hex: "#2c3e55", image: "/looks/daily-crew-dusk.jpg" },
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
    audience: "men",
    category: "oversized",
    knit: "heavy-bunch",
    fit: "Oversized",
    colors: [
      { name: "Ink", hex: "#1a1814", image: "/looks/oversized-ink.jpg" },
      { name: "Olive", hex: "#5c6842", image: "/looks/oversized-olive.jpg" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "New",
  },
  {
    slug: "too-ripe",
    name: "Too Ripe",
    blurb: "One small word on the chest. That’s the graphic.",
    description:
      "Paper or ink jersey with “ripe” set tiny on the left chest. Water-based ink, so it softens instead of cracking.",
    price: 1299,
    audience: "women",
    category: "printed",
    knit: "printed-peel",
    fit: "Regular",
    colors: [
      { name: "Paper", hex: "#f7f1e6", image: "/looks/too-ripe-paper.jpg" },
      { name: "Ink", hex: "#1a1814", image: "/looks/too-ripe-women-ink.jpg" },
    ],
    sizes: [...SIZES],
    print: "ripe",
    badge: "New",
  },
  {
    slug: "too-ripe-men",
    name: "Too Ripe",
    blurb: "One small word on the chest. That’s the graphic.",
    description:
      "Paper or ink jersey with “ripe” set tiny on the left chest. Water-based ink, so it softens instead of cracking.",
    price: 1299,
    audience: "men",
    category: "printed",
    knit: "printed-peel",
    fit: "Regular",
    colors: [
      { name: "Ink", hex: "#1a1814", image: "/looks/too-ripe-ink.jpg" },
      { name: "Paper", hex: "#f7f1e6", image: "/looks/too-ripe-men-paper.jpg" },
    ],
    sizes: [...SIZES],
    print: "ripe",
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
      { name: "Maroon", hex: "#6e2e34", image: "/looks/after-class-maroon.jpg" },
      { name: "Navy", hex: "#243044", image: "/looks/after-class-navy.jpg" },
    ],
    sizes: [...SIZES],
    badge: "Sale",
  },
  {
    slug: "night-bus",
    name: "Night Bus",
    blurb: "Late colour. One quiet word.",
    description:
      "Printed Peel for the last ride home. “night” sits small on the left chest. The knit is the everyday jersey, not a costume.",
    price: 1199,
    audience: "men",
    category: "printed",
    knit: "printed-peel",
    fit: "Regular",
    colors: [
      { name: "Ink", hex: "#1a1814", image: "/looks/night-bus-ink.jpg" },
      { name: "Teal", hex: "#2f6f6a", image: "/looks/night-bus-men-teal.jpg" },
    ],
    sizes: [...SIZES],
    print: "night",
  },
  {
    slug: "night-bus-women",
    name: "Night Bus",
    blurb: "Late colour. One quiet word.",
    description:
      "Printed Peel for the last ride home. “night” sits small on the left chest. The knit is the everyday jersey, not a costume.",
    price: 1199,
    audience: "women",
    category: "printed",
    knit: "printed-peel",
    fit: "Regular",
    colors: [
      { name: "Teal", hex: "#2f6f6a", image: "/looks/night-bus-teal.jpg" },
      { name: "Ink", hex: "#1a1814", image: "/looks/night-bus-women-ink.jpg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    print: "night",
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
      { name: "Blush", hex: "#e7c1b8", image: "/looks/lounge-blush.jpg" },
      { name: "Ink", hex: "#1a1814", image: "/looks/lounge-ink.jpg" },
      { name: "Sand", hex: "#d8c3a5", image: "/looks/lounge-sand.jpg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "Bestseller",
  },
  {
    slug: "crop-being",
    name: "Crop Being",
    blurb: "Ends at the waist. A tiny “being” on the chest.",
    description:
      "A short tee with a straight hem, meant to sit at the high waist of a trouser. “being” is set small on the left chest. Soft Peel jersey, narrow rib.",
    price: 899,
    compareAt: 1299,
    audience: "women",
    category: "crop",
    knit: "soft-peel",
    fit: "Cropped",
    colors: [
      { name: "Olive", hex: "#5c6842", image: "/looks/crop-olive.jpg" },
      { name: "Paper", hex: "#f7f1e6", image: "/looks/crop-paper.jpg" },
    ],
    print: "being",
    sizes: ["XS", "S", "M", "L"],
    badge: "Sale",
  },
  {
    slug: "big-cloud",
    name: "Big Cloud",
    blurb: "Women’s oversized, in the heavier knit.",
    description:
      "Heavy Bunch with a shorter sleeve than the men’s oversized, so it still reads as a tee and not a dress.",
    price: 1399,
    compareAt: 1799,
    audience: "women",
    category: "oversized",
    knit: "heavy-bunch",
    fit: "Oversized",
    colors: [
      { name: "Brown", hex: "#5a4636", image: "/looks/big-cloud-brown.jpg" },
      { name: "Ink", hex: "#1a1814", image: "/looks/big-cloud-ink.jpg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "being-print",
    name: "Being Print",
    blurb: "One word. That’s the whole graphic.",
    description:
      "“being”, lowercase, small on the left chest. Paper jersey only — the print does the work.",
    price: 1199,
    audience: "women",
    category: "printed",
    knit: "printed-peel",
    fit: "Relaxed",
    colors: [{ name: "Paper", hex: "#f7f1e6", image: "/looks/being-print-paper.jpg" }],
    sizes: ["XS", "S", "M", "L", "XL"],
    print: "being",
    badge: "New",
  },
  {
    slug: "heatwave",
    name: "Heatwave",
    blurb: "The lightest crew in the line.",
    description:
      "Same banana-cotton blend, knitted a touch finer for the worst weeks. Teal or dusk. No print.",
    price: 999,
    audience: "women",
    category: "crew",
    knit: "soft-peel",
    fit: "Regular",
    colors: [
      { name: "Teal", hex: "#2f6f6a", image: "/looks/heatwave-teal.jpg" },
      { name: "Dusk", hex: "#2c3e55", image: "/looks/heatwave-women-dusk.jpg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "heatwave-men",
    name: "Heatwave",
    blurb: "The lightest crew in the line.",
    description:
      "Same banana-cotton blend, knitted a touch finer for the worst weeks. Teal or dusk. No print.",
    price: 999,
    audience: "men",
    category: "crew",
    knit: "soft-peel",
    fit: "Regular",
    colors: [
      { name: "Dusk", hex: "#2c3e55", image: "/looks/heatwave-dusk.jpg" },
      { name: "Teal", hex: "#2f6f6a", image: "/looks/heatwave-men-teal.jpg" },
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
    colors: [{ name: "Pale", hex: "#c9d7b8", image: "/looks/first-peel-pale.jpg" }],
    sizes: [...SIZES],
    badge: "Sale",
  },
  {
    slug: "air-vest",
    name: "Air Vest",
    blurb: "A men’s vest for heat. No sleeves, same cloth.",
    description:
      "Banana-cotton vest with a rib neck and a hem that doesn’t roll. Cut for men who want the crew feeling without the sleeves.",
    price: 899,
    compareAt: 1299,
    audience: "men",
    category: "vest",
    knit: "soft-peel",
    fit: "Vest",
    colors: [
      { name: "Ink", hex: "#1a1814", image: "/looks/vest-ink.jpg" },
      { name: "Sand", hex: "#d8c3a5", image: "/looks/vest-sand.jpg" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "New",
  },
  {
    slug: "cloud-crop",
    name: "Cloud Crop",
    blurb: "A plain women’s crop. Ends at the waist.",
    description:
      "Soft Peel jersey, straight hem, meant to sit on a high waist. No print. The comfort is the point.",
    price: 999,
    compareAt: 1399,
    audience: "women",
    category: "crop",
    knit: "soft-peel",
    fit: "Cropped",
    colors: [
      { name: "Paper", hex: "#f7f1e6", image: "/looks/crop-cloud-paper.jpg" },
      { name: "Ink", hex: "#1a1814", image: "/looks/crop-cloud-ink.jpg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "New",
  },
  {
    slug: "daily-three",
    name: "Daily Three",
    blurb: "Three Daily Crews: ink, sand, and dusk.",
    description:
      "A week’s worth of the same crew, in the three Daily colours. Each shirt is the regular Soft Peel cut. Pick one size and it applies to all three.",
    price: 2499,
    compareAt: 2997,
    audience: "men",
    category: "pack",
    knit: "soft-peel",
    fit: "Regular",
    colors: [{ name: "Set", hex: "#1a1814", image: "/looks/daily-three.jpg" }],
    sizes: [...SIZES],
    badge: "New",
  },
  joke("joke-no-thoughts", "No Thoughts", "men", "Ink", "#1a1814", "/looks/joke-no-thoughts.jpg", "no thoughts"),
  joke("joke-touch-grass", "Touch Grass", "men", "Paper", "#f7f1e6", "/looks/joke-touch-grass.jpg", "touch grass"),
  joke("joke-send-help", "Send Help", "men", "Navy", "#243044", "/looks/joke-send-help.jpg", "send help"),
  joke("joke-plot-twist", "Plot Twist", "men", "Maroon", "#6e2e34", "/looks/joke-plot-twist.jpg", "plot twist"),
  joke("joke-low-bat", "Low Battery", "men", "Olive", "#5c6842", "/looks/joke-low-bat.jpg", "low bat"),
  joke("joke-the-vibe", "The Vibe", "women", "Blush", "#e7c1b8", "/looks/joke-the-vibe.jpg", "the vibe"),
  joke("joke-soft-launch", "Soft Launch", "women", "Paper", "#f7f1e6", "/looks/joke-soft-launch.jpg", "soft launch"),
  joke("joke-be-so-real", "Be So Real", "women", "Ink", "#1a1814", "/looks/joke-be-so-real.jpg", "be so real"),
  joke("joke-npc", "NPC", "women", "Ripe", "#e2b33a", "/looks/joke-npc.jpg", "npc"),
  joke("joke-on-dnd", "On DND", "women", "Teal", "#2f6f6a", "/looks/joke-on-dnd.jpg", "on dnd"),
];

function attachViews(slug: string, color: string, stem: string) {
  const entry = products.find((product) => product.slug === slug)?.colors.find((item) => item.name === color);
  if (!entry) throw new Error(`Missing colour ${color} on ${slug}`);
  entry.views = [
    { label: "Front", src: entry.image },
    { label: "Back", src: `/looks/${stem}-back.jpg` },
    { label: "Side", src: `/looks/${stem}-side.jpg` },
    { label: "Detail", src: `/looks/${stem}-detail.jpg` },
  ];
}

const viewSets: [string, string, string][] = [
  ["ripe-crew", "Ripe", "ripe-crew-ripe"],
  ["ripe-crew", "Ink", "ripe-crew-women-ink"],
  ["ripe-crew-men", "Ink", "ripe-crew-ink"],
  ["ripe-crew-men", "Ripe", "ripe-crew-men-ripe"],
  ["daily-crew", "Ink", "daily-crew-ink"],
  ["daily-crew", "Sand", "daily-crew-sand"],
  ["daily-crew", "Dusk", "daily-crew-dusk"],
  ["oversized-bunch", "Ink", "oversized-ink"],
  ["oversized-bunch", "Olive", "oversized-olive"],
  ["too-ripe", "Paper", "too-ripe-paper"],
  ["too-ripe", "Ink", "too-ripe-women-ink"],
  ["too-ripe-men", "Ink", "too-ripe-ink"],
  ["too-ripe-men", "Paper", "too-ripe-men-paper"],
  ["after-class", "Maroon", "after-class-maroon"],
  ["after-class", "Navy", "after-class-navy"],
  ["night-bus", "Ink", "night-bus-ink"],
  ["night-bus", "Teal", "night-bus-men-teal"],
  ["night-bus-women", "Teal", "night-bus-teal"],
  ["night-bus-women", "Ink", "night-bus-women-ink"],
  ["lounge-tee", "Blush", "lounge-blush"],
  ["lounge-tee", "Ink", "lounge-ink"],
  ["lounge-tee", "Sand", "lounge-sand"],
  ["crop-being", "Olive", "crop-olive"],
  ["crop-being", "Paper", "crop-paper"],
  ["big-cloud", "Brown", "big-cloud-brown"],
  ["big-cloud", "Ink", "big-cloud-ink"],
  ["being-print", "Paper", "being-print-paper"],
  ["heatwave", "Teal", "heatwave-teal"],
  ["heatwave", "Dusk", "heatwave-women-dusk"],
  ["heatwave-men", "Dusk", "heatwave-dusk"],
  ["heatwave-men", "Teal", "heatwave-men-teal"],
  ["first-peel", "Pale", "first-peel-pale"],
  ["air-vest", "Ink", "vest-ink"],
  ["air-vest", "Sand", "vest-sand"],
  ["cloud-crop", "Paper", "crop-cloud-paper"],
  ["cloud-crop", "Ink", "crop-cloud-ink"],
  ["daily-three", "Set", "daily-three"],
  ["joke-no-thoughts", "Ink", "joke-no-thoughts"],
  ["joke-touch-grass", "Paper", "joke-touch-grass"],
  ["joke-send-help", "Navy", "joke-send-help"],
  ["joke-plot-twist", "Maroon", "joke-plot-twist"],
  ["joke-low-bat", "Olive", "joke-low-bat"],
  ["joke-the-vibe", "Blush", "joke-the-vibe"],
  ["joke-soft-launch", "Paper", "joke-soft-launch"],
  ["joke-be-so-real", "Ink", "joke-be-so-real"],
  ["joke-npc", "Ripe", "joke-npc"],
  ["joke-on-dnd", "Teal", "joke-on-dnd"],
];

for (const [slug, color, stem] of viewSets) attachViews(slug, color, stem);

export function colorViews(color: Colorway): ColorView[] {
  return color.views?.length ? color.views : [{ label: "Front", src: color.image }];
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function isOnSale(product: Product) {
  return product.compareAt != null && product.compareAt > product.price;
}

export function catalogColors() {
  const seen = new Map<string, string>();
  for (const product of products) {
    for (const color of product.colors) {
      if (!seen.has(color.name)) seen.set(color.name, color.hex);
    }
  }
  return [...seen.entries()].map(([name, hex]) => ({ name, hex }));
}

export function filterProducts(opts: {
  audience?: string;
  category?: string;
  sale?: boolean;
  q?: string;
  color?: string;
  size?: string;
}) {
  const q = opts.q?.trim().toLowerCase();
  const color = opts.color?.toLowerCase();
  return products.filter((p) => {
    if (opts.audience === "men" && p.audience === "women") return false;
    if (opts.audience === "women" && p.audience === "men") return false;
    if (opts.category && p.category !== opts.category) return false;
    if (opts.sale && !isOnSale(p)) return false;
    if (color && !p.colors.some((entry) => entry.name.toLowerCase() === color)) return false;
    if (opts.size && !p.sizes.includes(opts.size)) return false;
    if (q) {
      const hay = `${p.name} ${p.blurb} ${p.category} ${p.print ?? ""}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

export function relatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.slug !== product.slug && p.audience === product.audience)
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
  { href: "/shop?g=men", title: "Men", kicker: "Crews and vests", image: "/looks/daily-crew-ink.jpg" },
  { href: "/shop?g=women", title: "Women", kicker: "Tees and crops", image: "/looks/lounge-blush.jpg" },
  { href: "/shop?c=vest", title: "Vests", kicker: "Sleeveless, still soft", image: "/looks/vest-ink.jpg" },
  { href: "/shop?c=crop", title: "Crops", kicker: "Ends at the waist", image: "/looks/crop-cloud-ink.jpg" },
  { href: "/shop?c=joke", title: "Jokes", kicker: "One line, tiny type", image: "/looks/joke-the-vibe.jpg" },
  { href: "/shop?c=oversized", title: "Oversized", kicker: "Heavy Bunch knit", image: "/looks/oversized-ink.jpg" },
];
