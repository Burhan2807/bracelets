"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function AddToCartControls({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(slug, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center rounded-full border border-foreground/20">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-4 py-2 text-base text-foreground/70 hover:text-foreground"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-6 text-center text-sm font-medium">{quantity}</span>
        <button
          type="button"
          onClick={() => setQuantity((q) => q + 1)}
          className="px-4 py-2 text-base text-foreground/70 hover:text-foreground"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className="rounded-full bg-foreground px-8 py-3 text-sm font-medium tracking-wide text-background transition-opacity hover:opacity-85"
      >
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
