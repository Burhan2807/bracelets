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
      <h1 className="font-display text-4xl italic">Order confirmed</h1>
      <p className="mt-3 text-foreground/60">
        Thank you for your order! Your bracelets are being hand-knotted and
        will ship soon. A confirmation email is on its way.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium tracking-wide text-background transition-opacity hover:opacity-85"
      >
        Keep Shopping
      </Link>
    </div>
  );
}
