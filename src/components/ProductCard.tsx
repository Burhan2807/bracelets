import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border-4 border-transparent bg-white shadow-md transition-all hover:-translate-y-1 hover:border-brand-orange hover:shadow-xl"
    >
      <PlaceholderImage
        colors={product.colors}
        emoji={product.emoji}
        className="aspect-square w-full"
      />
      <div className="flex flex-1 flex-col gap-1 p-5">
        <h3 className="font-display text-lg font-bold">{product.name}</h3>
        <p className="flex-1 text-sm text-foreground/70">{product.tagline}</p>
        <p className="mt-2 font-display text-xl font-bold text-brand-pink">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
