import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-pink via-brand-purple to-brand-orange px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-5xl font-extrabold drop-shadow-sm sm:text-6xl">
            Bracelets, knotted by hand.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/90 sm:text-xl">
            Bold colors, real knots, no two exactly alike. Every piece is
            made in small batches — pick your favorite and wear something
            nobody else has.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-display text-lg font-bold text-brand-purple shadow-lg transition-transform hover:scale-105"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold">Fan Favorites</h2>
          <Link
            href="/shop"
            className="font-display font-semibold text-brand-purple hover:text-brand-pink"
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

      <section className="bg-brand-teal/10 px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="text-center">
            <p className="text-4xl">🧵</p>
            <h3 className="mt-3 font-display text-xl font-bold">
              Hand-knotted
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Every bracelet is tied, braided, or strung by hand — no
              factories involved.
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl">🎨</p>
            <h3 className="mt-3 font-display text-xl font-bold">
              Bold colors
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Vibrant palettes picked to stand out, made to mix and stack
              together.
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl">📦</p>
            <h3 className="mt-3 font-display text-xl font-bold">
              Made to order
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              Small batches, packed with care, shipped straight from the
              workbench.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
