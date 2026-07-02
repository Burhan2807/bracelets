import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import AddToCartControls from "@/components/AddToCartControls";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? `${product.name} | Knotted & Bright` : "Not found" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <Link
        href="/shop"
        className="mb-8 inline-block font-display font-semibold text-brand-purple hover:text-brand-pink"
      >
        ← Back to shop
      </Link>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <PlaceholderImage
          colors={product.colors}
          emoji={product.emoji}
          className="w-full rounded-3xl shadow-lg"
        />
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-4xl font-extrabold">
            {product.name}
          </h1>
          <p className="font-display text-2xl font-bold text-brand-pink">
            ${product.price}
          </p>
          <p className="text-foreground/80">{product.description}</p>
          <div>
            <h2 className="font-display font-bold">Materials</h2>
            <ul className="mt-1 list-inside list-disc text-sm text-foreground/70">
              {product.materials.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <AddToCartControls slug={product.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
