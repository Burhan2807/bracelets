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
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-2xl italic tracking-tight text-foreground"
        >
          mukiyodesign
        </Link>

        <nav className="hidden gap-9 text-sm font-medium tracking-wide text-foreground/70 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/cart"
          className="relative flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium tracking-wide transition-colors hover:border-foreground/40"
        >
          Cart
          {totalCount > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-purple px-1 text-xs font-semibold text-white">
              {totalCount}
            </span>
          )}
        </Link>
      </div>

      <nav className="flex gap-6 overflow-x-auto border-t border-border px-6 py-2 text-sm font-medium text-foreground/70 sm:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="whitespace-nowrap">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
