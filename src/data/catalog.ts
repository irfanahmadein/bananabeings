export type Audience = "men" | "women";
export type Category = "crew" | "oversized" | "printed" | "crop" | "vest" | "pack" | "sport";
export type Occasion = "casual" | "work" | "sport";
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
  occasion?: Occasion;
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
    blurb: `“${print}” on the chest. Casual, and not trying to be serious.`,
    description: `Everyday banana-cotton crew with “${print}” set small on the left chest. Water-based ink. The line is the point.`,
    price: 1199,
    audience,
    category: "crew",
    occasion: "casual",
    knit: "printed-peel",
    fit: "Regular",
    colors: [{ name: color, hex, image }],
    sizes: [...SIZES],
    print,
    badge: "New",
  };
}

function fiveColors(slug: string): Colorway[] {
  return [
    { name: "Ink", hex: "#1a1814", image: `/looks/${slug}-ink.jpg` },
    { name: "Paper", hex: "#f7f1e6", image: `/looks/${slug}-paper.jpg` },
    { name: "Ripe", hex: "#e2b33a", image: `/looks/${slug}-ripe.jpg` },
    { name: "Teal", hex: "#2f6f6a", image: `/looks/${slug}-teal.jpg` },
    { name: "Maroon", hex: "#6e2e34", image: `/looks/${slug}-maroon.jpg` },
  ];
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
      "Soft Peel jersey, straight hem, meant to sit on a high waist. “off camera” sits small on the chest.",
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
    occasion: "work",
    print: "the rotation",
    knit: "soft-peel",
    fit: "Regular",
    colors: [{ name: "Set", hex: "#1a1814", image: "/looks/daily-three.jpg" }],
    sizes: [...SIZES],
    badge: "New",
  },
  {
    slug: "one-more-set",
    name: "One More Set",
    blurb: "A sport crew for the round you almost skipped.",
    description:
      "Soft Peel, cut to move, with “one more set” small on the chest. For the gym, a run, or the hot part of the day.",
    price: 1299,
    compareAt: 1699,
    audience: "men",
    category: "sport",
    knit: "soft-peel",
    fit: "Regular",
    colors: fiveColors("one-more-set"),
    sizes: [...SIZES],
    badge: "New",
  },
  {
    slug: "show-up",
    name: "Show Up",
    blurb: "A women’s sport crew. The line is the warm-up.",
    description:
      "Soft Peel jersey with room through the shoulder. “show up” sits small on the chest. Training, or just the walk there.",
    price: 1299,
    compareAt: 1699,
    audience: "women",
    category: "sport",
    knit: "soft-peel",
    fit: "Regular",
    colors: fiveColors("show-up"),
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "New",
  },
  {
    slug: "quiet-win",
    name: "Quiet Win",
    blurb: "A sport crop. Ends at the waist, says the quiet part.",
    description:
      "Cropped Soft Peel for training. “quiet win” is small on the chest. The hem sits at a high waist.",
    price: 1199,
    compareAt: 1499,
    audience: "women",
    category: "sport",
    knit: "soft-peel",
    fit: "Cropped",
    colors: fiveColors("quiet-win"),
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "New",
  },
  {
    slug: "last-rep",
    name: "Last Rep",
    blurb: "A fitted sport crew for the rep you said was the last one.",
    description:
      "Soft Peel, closer through the chest, with “last rep” small on the left. For the gym floor, not the commute.",
    price: 1299,
    compareAt: 1699,
    audience: "men",
    category: "sport",
    knit: "soft-peel",
    fit: "Regular",
    colors: fiveColors("last-rep"),
    sizes: [...SIZES],
    badge: "New",
  },
  {
    slug: "stay-in",
    name: "Stay In",
    blurb: "A men’s sport vest. No sleeves, one line.",
    description:
      "Sleeveless Soft Peel with a rib neck. “stay in” sits small on the chest. Cut for heat and a long set.",
    price: 999,
    compareAt: 1399,
    audience: "men",
    category: "sport",
    knit: "soft-peel",
    fit: "Vest",
    colors: fiveColors("stay-in"),
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "New",
  },
  {
    slug: "easy-pace",
    name: "Easy Pace",
    blurb: "A looser sport tee for the run that is not a race.",
    description:
      "Soft Peel with a bit more room through the body. “easy pace” is small on the chest. For a jog, a walk, or the warm-up.",
    price: 1299,
    compareAt: 1599,
    audience: "men",
    category: "sport",
    knit: "soft-peel",
    fit: "Regular",
    colors: fiveColors("easy-pace"),
    sizes: [...SIZES],
    badge: "New",
  },
  {
    slug: "own-pace",
    name: "Own Pace",
    blurb: "A women’s sport crew. The line is the reminder.",
    description:
      "Soft Peel jersey, room through the shoulder, “own pace” small on the chest. Training, or the long way home.",
    price: 1299,
    compareAt: 1699,
    audience: "women",
    category: "sport",
    knit: "soft-peel",
    fit: "Regular",
    colors: fiveColors("own-pace"),
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "New",
  },
  {
    slug: "still-moving",
    name: "Still Moving",
    blurb: "A women’s sport vest for the hot part of the session.",
    description:
      "Sleeveless Soft Peel, rib neck, hem that stays put. “still moving” is small on the chest.",
    price: 999,
    compareAt: 1399,
    audience: "women",
    category: "sport",
    knit: "soft-peel",
    fit: "Vest",
    colors: fiveColors("still-moving"),
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "New",
  },
  {
    slug: "keep-going",
    name: "Keep Going",
    blurb: "A sport crop with a short line and a short hem.",
    description:
      "Cropped Soft Peel for training. “keep going” sits small on the chest. The hem ends at a high waist.",
    price: 1199,
    compareAt: 1499,
    audience: "women",
    category: "sport",
    knit: "soft-peel",
    fit: "Cropped",
    colors: fiveColors("keep-going"),
    sizes: ["XS", "S", "M", "L", "XL"],
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

for (const slug of ["last-rep", "stay-in", "easy-pace", "own-pace", "still-moving", "keep-going"]) {
  for (const color of ["Ink", "Paper", "Ripe", "Teal", "Maroon"]) {
    viewSets.push([slug, color, `${slug}-${color.toLowerCase()}`]);
  }
}

for (const [slug, color, stem] of viewSets) attachViews(slug, color, stem);

const lines: Record<string, { occasion: Occasion; print: string }> = {
  "ripe-crew": { occasion: "casual", print: "main character" },
  "ripe-crew-men": { occasion: "casual", print: "plot armour" },
  "daily-crew": { occasion: "work", print: "deep work" },
  "oversized-bunch": { occasion: "casual", print: "big mood" },
  "too-ripe": { occasion: "casual", print: "ripe" },
  "too-ripe-men": { occasion: "casual", print: "ripe" },
  "after-class": { occasion: "work", print: "after this" },
  "night-bus": { occasion: "casual", print: "night" },
  "night-bus-women": { occasion: "casual", print: "night" },
  "lounge-tee": { occasion: "work", print: "soft focus" },
  "crop-being": { occasion: "casual", print: "being" },
  "big-cloud": { occasion: "casual", print: "cloud mode" },
  "being-print": { occasion: "casual", print: "being" },
  "heatwave": { occasion: "work", print: "light work" },
  "heatwave-men": { occasion: "work", print: "light work" },
  "first-peel": { occasion: "work", print: "start here" },
  "air-vest": { occasion: "sport", print: "still here" },
  "cloud-crop": { occasion: "work", print: "off camera" },
  "daily-three": { occasion: "work", print: "the rotation" },
  "one-more-set": { occasion: "sport", print: "one more set" },
  "show-up": { occasion: "sport", print: "show up" },
  "quiet-win": { occasion: "sport", print: "quiet win" },
  "last-rep": { occasion: "sport", print: "last rep" },
  "stay-in": { occasion: "sport", print: "stay in" },
  "easy-pace": { occasion: "sport", print: "easy pace" },
  "own-pace": { occasion: "sport", print: "own pace" },
  "still-moving": { occasion: "sport", print: "still moving" },
  "keep-going": { occasion: "sport", print: "keep going" },
  "joke-no-thoughts": { occasion: "casual", print: "no thoughts" },
  "joke-touch-grass": { occasion: "casual", print: "touch grass" },
  "joke-send-help": { occasion: "casual", print: "send help" },
  "joke-plot-twist": { occasion: "casual", print: "plot twist" },
  "joke-low-bat": { occasion: "casual", print: "low bat" },
  "joke-the-vibe": { occasion: "casual", print: "the vibe" },
  "joke-soft-launch": { occasion: "casual", print: "soft launch" },
  "joke-be-so-real": { occasion: "casual", print: "be so real" },
  "joke-npc": { occasion: "casual", print: "npc" },
  "joke-on-dnd": { occasion: "casual", print: "on dnd" },
};

for (const product of products) {
  const line = lines[product.slug];
  if (!line) throw new Error(`Missing line on ${product.slug}`);
  product.occasion = line.occasion;
  product.print = line.print;
}

const fillPalette = [
  { name: "Ink", hex: "#1a1814" },
  { name: "Paper", hex: "#f7f1e6" },
  { name: "Ripe", hex: "#e2b33a" },
  { name: "Teal", hex: "#2f6f6a" },
  { name: "Maroon", hex: "#6e2e34" },
];

for (const product of products) {
  if (product.category === "pack") continue;
  for (const swatch of fillPalette) {
    if (product.colors.length >= 5) break;
    if (product.colors.some((color) => color.name === swatch.name)) continue;
    product.colors.push({
      name: swatch.name,
      hex: swatch.hex,
      image: `/looks/${product.slug}-${swatch.name.toLowerCase()}.jpg`,
    });
  }
}

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
  occasion?: string;
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
    if (opts.occasion && p.occasion !== opts.occasion) return false;
    if (opts.sale && !isOnSale(p)) return false;
    if (color && !p.colors.some((entry) => entry.name.toLowerCase() === color)) return false;
    if (opts.size && !p.sizes.includes(opts.size)) return false;
    if (q) {
      const hay = `${p.name} ${p.blurb} ${p.category} ${p.occasion ?? ""} ${p.print ?? ""}`.toLowerCase();
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
    body: "Cut for a desk, a day off, and a training hour. The line changes. The cloth does not.",
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
    text: "Crop Being sits at the waist of my jeans and stays there. Most crops in this price ride up.",
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
  { href: "/shop?o=casual", title: "Casual", kicker: "A line for off duty", image: "/looks/joke-the-vibe.jpg" },
  { href: "/shop?o=work", title: "Work", kicker: "A nudge, not a uniform", image: "/looks/daily-crew-ink.jpg" },
  { href: "/shop?o=sport", title: "Sport", kicker: "One line, then move", image: "/looks/one-more-set-ink.jpg" },
  { href: "/shop?c=oversized", title: "Oversized", kicker: "Heavy Bunch knit", image: "/looks/oversized-ink.jpg" },
];
