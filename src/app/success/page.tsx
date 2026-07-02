"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-5xl">🎉</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold">
        Order confirmed!
      </h1>
      <p className="mt-3 text-foreground/70">
        Thank you for your order! Your bracelets are being hand-knotted and
        will ship soon. A confirmation email is on its way.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-block rounded-full bg-brand-pink px-8 py-3 font-display font-bold text-white shadow-md transition-transform hover:scale-105"
      >
        Keep Shopping
      </Link>
    </div>
  );
}
