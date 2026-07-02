import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-display text-4xl italic">Checkout canceled</h1>
      <p className="mt-3 text-foreground/60">
        No worries — your cart is still saved. Head back whenever you&apos;re
        ready to check out.
      </p>
      <Link
        href="/cart"
        className="mt-8 inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium tracking-wide text-background transition-opacity hover:opacity-85"
      >
        Back to Cart
      </Link>
    </div>
  );
}
