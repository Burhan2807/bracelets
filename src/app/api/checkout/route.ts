import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct } from "@/lib/products";

type CheckoutRequest = {
  items: { slug: string; quantity: number }[];
};

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      {
        error:
          "Stripe isn't configured yet. Add STRIPE_SECRET_KEY to your .env.local file.",
      },
      { status: 500 }
    );
  }

  const body = (await request.json()) as CheckoutRequest;
  if (!body.items || body.items.length === 0) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  for (const item of body.items) {
    const product = getProduct(item.slug);
    if (!product || item.quantity < 1) {
      return NextResponse.json(
        { error: `Invalid cart item: ${item.slug}` },
        { status: 400 }
      );
    }
    line_items.push({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(product.price * 100),
        product_data: { name: product.name },
      },
    });
  }

  const stripe = new Stripe(secretKey);
  const origin = request.headers.get("origin") ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    success_url: `${origin}/success`,
    cancel_url: `${origin}/cancel`,
    shipping_address_collection: { allowed_countries: ["US", "CA", "GB", "AU"] },
  });

  return NextResponse.json({ url: session.url });
}
