"use client";

import Link from "next/link";
import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { lines, setQuantity, removeItem, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: lines.map((line) => ({
            slug: line.product.slug,
            quantity: line.quantity,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-3 text-foreground/70">
          Looks like you haven&apos;t added any bracelets yet.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block rounded-full bg-brand-pink px-8 py-3 font-display font-bold text-white shadow-md transition-transform hover:scale-105"
        >
          Browse the Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-display text-4xl font-extrabold">Your Cart</h1>

      <div className="mt-8 flex flex-col gap-6">
        {lines.map(({ product, quantity }) => (
          <div
            key={product.slug}
            className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
          >
            <PlaceholderImage
              colors={product.colors}
              emoji={product.emoji}
              className="h-20 w-20 flex-shrink-0 rounded-xl"
            />
            <div className="flex-1">
              <p className="font-display font-bold">{product.name}</p>
              <p className="text-sm text-foreground/60">${product.price} each</p>
            </div>
            <div className="flex items-center rounded-full border-2 border-brand-purple">
              <button
                type="button"
                onClick={() => setQuantity(product.slug, quantity - 1)}
                className="px-3 py-1 font-display font-bold text-brand-purple"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-6 text-center font-display font-bold">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(product.slug, quantity + 1)}
                className="px-3 py-1 font-display font-bold text-brand-purple"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <p className="w-16 text-right font-display font-bold">
              ${product.price * quantity}
            </p>
            <button
              type="button"
              onClick={() => removeItem(product.slug)}
              className="text-foreground/40 hover:text-brand-pink"
              aria-label={`Remove ${product.name}`}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-end gap-4">
        <p className="font-display text-2xl font-bold">
          Total: ${totalPrice}
        </p>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="button"
          onClick={handleCheckout}
          disabled={loading}
          className="rounded-full bg-brand-purple px-10 py-3 font-display text-lg font-bold text-white shadow-md transition-transform hover:scale-105 disabled:opacity-60"
        >
          {loading ? "Redirecting…" : "Checkout"}
        </button>
      </div>
    </div>
  );
}
