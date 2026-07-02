import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Knotted & Bright",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl font-extrabold">Our Story</h1>
      <div className="mt-6 flex flex-col gap-4 text-foreground/80">
        <p>
          Knotted &amp; Bright started at a kitchen table with a spool of
          cord, a handful of beads, and way too much free time. What began
          as bracelets for friends turned into a small, colorful workshop
          where every single piece is still tied, braided, or strung by
          hand.
        </p>
        <p>
          We don&apos;t run factories or mass-produce — every order is made
          in small batches, which means colors and beads can vary slightly
          from photo to photo. We think that&apos;s part of the charm: no
          two bracelets are ever exactly alike.
        </p>
        <p>
          Thanks for stopping by and supporting independent, handmade work.
        </p>
      </div>
    </div>
  );
}
