import Image from "next/image";
import Link from "next/link";
import { ProductRail } from "@/components/product-rail";
import { isOnSale, knits, products, reasons, reviews, zones } from "@/data/catalog";

export default function HomePage() {
  const bestsellers = products.filter((p) => p.badge === "Bestseller");
  const casual = products.filter((p) => p.occasion === "casual").slice(0, 8);
  const sport = products.filter((p) => p.occasion === "sport");
  const sale = products.filter(isOnSale);

  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <section className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div>
          <p className="inline-block rounded-full bg-banana px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-leaf">
            Not that serious
          </p>
          <h1 className="mt-5 max-w-xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl sm:leading-[0.88]">
            A line on
            <br />
            every top.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-ink/80">
            Funny for a day off. A nudge when the work is the smart kind. A push for the gym. Banana-cotton underneath, and the Daily Crew still in the picture.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Link href="/shop?o=casual" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-card">
              Casual
            </Link>
            <Link href="/shop?o=work" className="rounded-full border border-ink px-5 py-3 text-sm font-semibold">
              Work
            </Link>
            <Link href="/shop?o=sport" className="rounded-full border border-ink px-5 py-3 text-sm font-semibold">
              Sport
            </Link>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#efeae1]">
              <Image
                src="/looks/daily-crew-ink.jpg"
                alt="Daily Crew in ink, worn"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute bottom-6 left-4 max-w-[13rem] rounded-2xl bg-card px-4 py-3 shadow-sm sm:left-[-1.25rem]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Daily Crew · Work</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">“deep work”</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted">The daily crew. Same knit, worn in.</p>
        </div>
      </section>

      <section className="pb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Shop by</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Pick the day</h2>
        <div className="rail -mx-5 mt-6 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8">
          {zones.map((zone) => (
            <Link
              key={zone.href}
              href={zone.href}
              className="w-[200px] shrink-0 snap-start"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#efeae1]">
                <Image src={zone.image} alt="" fill sizes="200px" className="object-cover object-top" />
              </div>
              <p className="mt-2 font-semibold">{zone.title}</p>
              <p className="text-xs text-muted">{zone.kicker}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-y border-line py-14 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">The cloth</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Banana for the hand.
            <br />
            Cotton for the shape.
          </h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-ink/80">
          A banana-cotton blend, knitted in India for weather that does not do “spring jacket.” Soft against skin, structured enough that the tee still looks like a tee at the end of the day.
        </p>
      </section>

      <section className="grid gap-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <article key={reason.n}>
            <p className="text-sm font-semibold text-peel">{reason.n}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">{reason.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{reason.body}</p>
          </article>
        ))}
      </section>

      <section className="pb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">The knits</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Three knits, one promise</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {knits.map((knit) => (
            <article key={knit.id} className="rounded-3xl border border-line bg-card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">{knit.line}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{knit.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{knit.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <ProductRail eyebrow="The edit" title="Bestsellers" href="/shop" products={bestsellers} />
      <ProductRail eyebrow="Off duty" title="Casual lines" href="/shop?o=casual" products={casual} />
      <ProductRail eyebrow="Then move" title="Sport" href="/shop?o=sport" products={sport} />
      <ProductRail eyebrow="Sale" title="Same cloth, lower price" href="/shop?sale=1" products={sale} />

      <section className="grid gap-8 rounded-[2rem] bg-leaf px-6 py-12 text-card sm:px-10 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-banana">From the founders</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">We wore them first.</h2>
          <p className="mt-4 max-w-md leading-7 text-card/80">
            Banana Beings is soft apparel that refuses to be serious. Every top carries a line, and the knit is still the part we fuss over. If it itched, it did not ship.
          </p>
          <p className="mt-6 text-sm font-semibold">Asha & Dev · Bengaluru</p>
        </div>
        <ul className="grid content-center gap-3 text-sm">
          {["Stays soft", "Holds its shape", "Prints that don’t crack", "Sits right after a wash"].map((item) => (
            <li key={item} className="rounded-2xl bg-white/10 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Notes</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">From early wearers</h2>
          </div>
        </div>
        <div className="rail -mx-5 mt-6 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8">
          {reviews.map((review) => (
            <figure key={review.name} className="w-[280px] shrink-0 snap-start rounded-3xl border border-line bg-card p-5">
              <p className="text-sm leading-6">“{review.text}”</p>
              <figcaption className="mt-4 text-sm font-semibold">
                {review.name}
                <span className="block font-normal text-muted">{review.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
