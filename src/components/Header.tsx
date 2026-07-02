"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { totalCount } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b-4 border-brand-purple bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tight brand-gradient-text"
        >
          Knotted &amp; Bright
        </Link>

        <nav className="hidden gap-8 font-display text-lg font-semibold sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-pink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/cart"
          className="relative flex items-center gap-2 rounded-full bg-brand-purple px-4 py-2 font-display font-bold text-white shadow-md transition-transform hover:scale-105"
        >
          🛍️ Cart
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
              {totalCount}
            </span>
          )}
        </Link>
      </div>

      <nav className="flex gap-6 overflow-x-auto border-t border-brand-purple/20 px-6 py-2 font-display text-base font-semibold sm:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
