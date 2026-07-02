import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <PlaceholderImage
        colors={product.colors}
        className="aspect-square w-full"
      />
      <div className="flex flex-1 flex-col gap-1 p-5">
        <h3 className="font-display text-lg">{product.name}</h3>
        <p className="flex-1 text-sm text-foreground/60">{product.tagline}</p>
        <p className="mt-2 font-display text-lg text-brand-pink">
          £{product.price}
        </p>
      </div>
    </Link>
  );
}
