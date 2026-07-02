# mukiyodesign — Handmade Bracelets Shop

A bold, colorful storefront for a handmade bracelet business, built with
Next.js (App Router), Tailwind CSS, and Stripe Checkout.

## What's included

- Home, Shop, Product detail, Cart, About, and Contact pages
- 6 placeholder products in [`src/lib/products.ts`](src/lib/products.ts) —
  edit this file to add your real bracelets, prices, and descriptions
- A cart that persists in the browser (`localStorage`)
- A working Stripe Checkout flow (`src/app/api/checkout/route.ts`) that looks
  up prices server-side, so nothing can be tampered with from the browser
- Colorful placeholder product "photos" generated with SVG — swap these for
  real photos whenever you have them (see below)

## Running it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Setting up Stripe (for real checkout)

1. Create a free account at [stripe.com](https://dashboard.stripe.com/register).
2. In the Stripe Dashboard, grab your **test mode** API keys from
   *Developers → API keys*.
3. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Fill in your keys:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```
5. Restart `npm run dev`. The Cart page's Checkout button will now redirect
   to a real Stripe Checkout page. Use Stripe's test card `4242 4242 4242 4242`
   with any future expiry/CVC to test a full purchase.
6. When you're ready to accept real payments, activate your Stripe account
   and swap the test keys for your live keys (`sk_live_...`).

Without Stripe keys configured, the Checkout button will show a friendly
error instead of crashing.

## Adding your real products & photos

Edit [`src/lib/products.ts`](src/lib/products.ts). Each product currently
uses a generated colorful placeholder image. To use a real photo instead:

1. Add your image to the `public/` folder (e.g. `public/products/sunset.jpg`).
2. Replace the `<PlaceholderImage />` usage for that product with Next.js's
   `<Image src="/products/sunset.jpg" ... />` component, in
   [`src/components/ProductCard.tsx`](src/components/ProductCard.tsx) and
   [`src/app/product/[slug]/page.tsx`](src/app/product/%5Bslug%5D/page.tsx).

## Updating the contact email

The contact form opens the visitor's email client via a `mailto:` link.
Update `CONTACT_EMAIL` in
[`src/app/contact/page.tsx`](src/app/contact/page.tsx) with your real
address.

## Deploying

The easiest option is [Vercel](https://vercel.com/new) (made by the Next.js
team, free tier available):

1. Push this project to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add your `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   as environment variables in the Vercel project settings.
4. Deploy — Vercel builds and hosts it automatically.

## Tech stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)
