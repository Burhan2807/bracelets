import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-5xl">🛒</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold">
        Checkout canceled
      </h1>
      <p className="mt-3 text-foreground/70">
        No worries — your cart is still saved. Head back whenever you&apos;re
        ready to check out.
      </p>
      <Link
        href="/cart"
        className="mt-8 inline-block rounded-full bg-brand-purple px-8 py-3 font-display font-bold text-white shadow-md transition-transform hover:scale-105"
      >
        Back to Cart
      </Link>
    </div>
  );
}
