"use client";

import Link from "next/link";
import { useState } from "react";
import { BananaMark, Wordmark } from "@/components/brand";
import { useCart } from "@/components/cart-provider";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?g=men", label: "Men" },
  { href: "/shop?g=women", label: "Women" },
  { href: "/shop?c=printed", label: "Printed" },
  { href: "/shop?sale=1", label: "Sale" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const cart = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-5 sm:px-8">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-expanded={menu}
          aria-label={menu ? "Close menu" : "Open menu"}
          onClick={() => setMenu((open) => !open)}
        >
          <span className="text-lg leading-none">{menu ? "×" : "☰"}</span>
        </button>
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenu(false)}>
          <BananaMark className="h-9 w-9" />
          <Wordmark />
        </Link>
        <nav className="ml-6 hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-ink/80 hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <form action="/search" className="ml-auto hidden min-w-0 flex-1 md:block md:max-w-xs">
          <label className="sr-only" htmlFor="header-search">
            Search tees
          </label>
          <input
            id="header-search"
            name="q"
            placeholder="Search tees"
            className="w-full rounded-full border border-line bg-card px-4 py-2 text-sm outline-none ring-banana focus:ring-2"
          />
        </form>
        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Link href="/help" className="hidden text-sm font-medium sm:inline">
            Help
          </Link>
          <button
            type="button"
            className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-card"
            onClick={() => cart.setOpen(true)}
          >
            Cart{cart.ready && cart.count > 0 ? ` ${cart.count}` : ""}
          </button>
        </div>
      </div>
      {menu ? (
        <div className="border-t border-line bg-paper px-5 py-4 md:hidden">
          <form action="/search" className="mb-4">
            <label className="sr-only" htmlFor="mobile-search">
              Search tees
            </label>
            <input
              id="mobile-search"
              name="q"
              placeholder="Search tees"
              className="w-full rounded-full border border-line bg-card px-4 py-2.5 text-sm outline-none"
            />
          </form>
          <nav className="grid gap-1" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-2 py-3 text-lg font-semibold tracking-tight"
                onClick={() => setMenu(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/help" className="rounded-xl px-2 py-3 text-lg font-semibold" onClick={() => setMenu(false)}>
              Help
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
