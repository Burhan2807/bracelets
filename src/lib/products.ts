export type Product = {
  slug: string;
  name: string;
  price: number; // USD
  colors: [string, string]; // gradient pair for placeholder art
  emoji: string;
  tagline: string;
  description: string;
  materials: string[];
};

export const products: Product[] = [
  {
    slug: "sunset-beaded-wrap",
    name: "Sunset Beaded Wrap",
    price: 24,
    colors: ["#ff5f6d", "#ffc371"],
    emoji: "🌅",
    tagline: "Warm hues, hand-strung one bead at a time.",
    description:
      "A triple-wrap bracelet strung with glass and wooden beads in a sunset gradient. Each one is knotted by hand, so no two wraps are exactly alike.",
    materials: ["Glass beads", "Wooden beads", "Waxed cotton cord"],
  },
  {
    slug: "electric-friendship-band",
    name: "Electric Friendship Band",
    price: 16,
    colors: ["#7f00ff", "#e100ff"],
    emoji: "⚡",
    tagline: "Neon threads, braided the old-fashioned way.",
    description:
      "A classic friendship bracelet with a modern neon twist. Hand-braided embroidery floss in electric purple and magenta, finished with an adjustable slide knot.",
    materials: ["Embroidery floss", "Adjustable slide closure"],
  },
  {
    slug: "citrus-charm-stack",
    name: "Citrus Charm Stack",
    price: 29,
    colors: ["#f7971e", "#ffd200"],
    emoji: "🍊",
    tagline: "Three charmed strands, stacked for sunshine.",
    description:
      "A set of three thin bracelets in citrus tones, each with a tiny hand-set charm. Wear them stacked or split them up — they're designed to mix and match.",
    materials: ["Gold-tone brass", "Enamel charms", "Nylon cord"],
  },
  {
    slug: "ocean-knot-bracelet",
    name: "Ocean Knot Bracelet",
    price: 19,
    colors: ["#00c6ff", "#0072ff"],
    emoji: "🌊",
    tagline: "Sailor's knots in cool ocean blues.",
    description:
      "Inspired by nautical rope work, this bracelet is hand-tied using a traditional sailor's knot in shades of blue. Sturdy, salt-water friendly, and adjustable.",
    materials: ["Marine-grade cord", "Stainless steel clasp"],
  },
  {
    slug: "berry-bloom-beads",
    name: "Berry Bloom Beads",
    price: 22,
    colors: ["#ff0084", "#33001b"],
    emoji: "🌸",
    tagline: "Deep berry tones with a floral charm.",
    description:
      "Rich berry-colored beads hand-selected and strung around a single hand-sculpted clay flower charm. A bold little statement piece for everyday wear.",
    materials: ["Glass beads", "Hand-sculpted clay charm", "Elastic cord"],
  },
  {
    slug: "tropical-tie-dye-cord",
    name: "Tropical Tie-Dye Cord",
    price: 18,
    colors: ["#11998e", "#38ef7d"],
    emoji: "🌴",
    tagline: "Hand-dyed cord in tropical greens.",
    description:
      "Cord bracelet hand-dyed in small batches for a one-of-a-kind tropical swirl, then braided and knotted closed. Lightweight enough to wear every day, rain or shine.",
    materials: ["Hand-dyed cotton cord", "Sliding knot closure"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
