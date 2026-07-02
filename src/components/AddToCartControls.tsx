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
      <div className="flex items-center rounded-full border-2 border-brand-purple">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-4 py-2 font-display text-lg font-bold text-brand-purple"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-8 text-center font-display font-bold">
          {quantity}
        </span>
        <button
          type="button"
          onClick={() => setQuantity((q) => q + 1)}
          className="px-4 py-2 font-display text-lg font-bold text-brand-purple"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className="rounded-full bg-brand-pink px-8 py-3 font-display text-lg font-bold text-white shadow-md transition-transform hover:scale-105"
      >
        {added ? "Added! 🎉" : "Add to Cart"}
      </button>
    </div>
  );
}
