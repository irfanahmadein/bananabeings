import Link from "next/link";
import { BananaMark } from "@/components/brand";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-[#ebe6dc]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <BananaMark />
            <span className="text-lg font-semibold tracking-tight">Banana Beings</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            New-age comfort apparel in a banana-cotton knit. Crews, vests, crops, and a few tiny jokes. Made for warm weather.
          </p>
          <p className="mt-4 max-w-sm text-xs leading-5 text-muted">
            Demo shop for trying a website. Nothing here is charged or shipped.
          </p>
        </div>
        <FooterCol
          title="Shop"
          links={[
            ["/shop", "Shop all"],
            ["/shop?g=men", "Men"],
            ["/shop?g=women", "Women"],
            ["/shop?c=vest", "Vests"],
            ["/shop?c=crop", "Crops"],
            ["/shop?c=joke", "Joke prints"],
            ["/shop?c=pack", "Packs"],
          ]}
        />
        <FooterCol
          title="Help"
          links={[
            ["/help", "Contact"],
            ["/size-guide", "Size guide"],
            ["/bulk", "Campus & bulk"],
            ["/policies/shipping", "Shipping"],
            ["/policies/returns", "Exchanges"],
          ]}
        />
        <FooterCol
          title="Brand"
          links={[
            ["/about", "About"],
            ["/policies/privacy", "Privacy"],
            ["/policies/terms", "Terms"],
          ]}
        />
      </div>
      <div className="border-t border-line px-5 py-4 text-center text-xs text-muted sm:px-8">
        © {new Date().getFullYear()} Banana Beings. A demo storefront. Open source.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">{title}</p>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link href={href} className="hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
