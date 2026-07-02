import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div>
      <section className="border-b border-border px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium tracking-[0.2em] text-brand-teal uppercase">
            Handmade in small batches
          </p>
          <h1 className="mt-4 font-display text-5xl italic leading-tight sm:text-6xl">
            Bracelets, knotted by hand.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-foreground/65">
            Considered colors, real knots, no two exactly alike. Every piece
            is made to order — pick your favorite and wear something nobody
            else has.
          </p>
          <Link
            href="/shop"
            className="mt-9 inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium tracking-wide text-background transition-opacity hover:opacity-85"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-3xl italic">Fan Favorites</h2>
          <Link
            href="/shop"
            className="text-sm font-medium text-foreground/60 hover:text-foreground"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm text-brand-teal">
              01
            </span>
            <h3 className="mt-4 font-display text-lg">Hand-knotted</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">
              Every bracelet is tied, braided, or strung by hand — no
              factories involved.
            </p>
          </div>
          <div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm text-brand-pink">
              02
            </span>
            <h3 className="mt-4 font-display text-lg">Considered colors</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">
              Palettes picked to stand the test of time, made to mix and
              stack together.
            </p>
          </div>
          <div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm text-brand-orange">
              03
            </span>
            <h3 className="mt-4 font-display text-lg">Made to order</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/60">
              Small batches, packed with care, shipped straight from the
              workbench.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
