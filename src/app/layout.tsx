import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { CartDrawer } from "@/components/cart-drawer";
import { CartProvider } from "@/components/cart-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Banana Beings — soft tees for actual people",
    template: "%s — Banana Beings",
  },
  description:
    "Everyday tees in a banana-cotton knit. Crews, oversized, and small prints. A demo shop: nothing is charged or shipped.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <CartProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
