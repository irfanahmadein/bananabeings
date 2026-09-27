# Banana Beings

A small open-source tee shop. Editorial layout in the spirit of a modern Indian D2C clothing site — big type, category tiles, a cloth story, bestseller rows, cart drawer — with an original brand: **banana-cotton tees for young people**.

No database. The catalog is TypeScript. The cart stays in the browser. Hosting on Vercel’s free tier is enough.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

| Piece | Choice | Why |
| --- | --- | --- |
| Framework | Next.js App Router | Static pages, cheap on Vercel |
| Styles | Tailwind CSS | No design-system subscription |
| Catalog | `src/data/catalog.ts` | No Postgres, no Shopify bill |
| Cart | `localStorage` | No server session |
| Checkout | Demo confirmation in `sessionStorage` | No payment provider |
| Database | None | SQLite still needs a disk Vercel won’t keep for free |

Heavier starters (Next.js Commerce + Shopify, Medusa, Saleor) look finished and then charge you for a backend. This one is a storefront you can fork.

## Deploy

Push the repo to GitHub and import it in [Vercel](https://vercel.com). Framework preset: Next.js. No environment variables.

## What’s in the shop

Home, shop filters, product pages (colour, size, quick add), cart drawer, demo checkout, search, size guide, help, campus bulk, shipping / returns / privacy / terms.

Checkout does not charge a card and does not ship a parcel.
