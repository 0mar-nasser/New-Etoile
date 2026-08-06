export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  volume: string;
  family: string;
  notes: string[];
  notesDetailed: {
    head: string;
    heart: string;
    base: string;
  };
  sizes: {
    volume: string;
    price: number;
  }[];
  image?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "originelle",
    name: "L'Étoile Originelle Concentrate",
    tagline: "Signature French Floral Woody Perfume Oil Concentrate",
    price: 185,
    volume: "100ml Oil / Liter Bulk",
    family: "Floral Woody Concentrate",
    notes: ["Grasse Jasmine Absolute", "Warm Amber Resin", "New Caledonian Sandalwood"],
    notesDetailed: {
      head: "Italian Bergamot, Dewy Violet Leaves",
      heart: "Grasse Jasmine Absolute, Damask Rose Extract",
      base: "Golden Amber Crystals, White Musk, Sandalwood Cream"
    },
    sizes: [
      { volume: "100ml Sample", price: 120 },
      { volume: "500ml Canister", price: 450 },
      { volume: "1 Liter Aluminum Bottle", price: 820 }
    ],
    description: "High-purity perfume oil concentrate (30%+ dosage strength). Designed for luxury perfume brands looking for a sophisticated floral-woody signature. Perfectly pairs with our 100ml crystal glass flacons and 15mm crimp precision spray pumps.",
    image: "/images/perfumes/perfume_originelle.png"
  },
  {
    id: "bois",
    name: "Bois de Nuit Essential Blend",
    tagline: "Deep, mysterious woody-leather fragrance compound",
    price: 195,
    volume: "100ml Oil / Liter Bulk",
    family: "Woody Leather Concentrate",
    notes: ["Tuscan Leather Accord", "Virginia Cedarwood", "Haitian Vetiver"],
    notesDetailed: {
      head: "Cardamom Oil, Smoked Black Pepper",
      heart: "Tuscan Leather Accord, Virginia Cedarwood",
      base: "Haitian Vetiver, Amberwood, Patchouli Bark"
    },
    sizes: [
      { volume: "100ml Sample", price: 130 },
      { volume: "500ml Canister", price: 480 },
      { volume: "1 Liter Aluminum Bottle", price: 860 }
    ],
    description: "A commanding leather and cedarwood raw oil compound engineered for niche masculine and unisex perfume lines. High formulation stability, compatible with alcohol dilution up to 25% EDP / Extrait.",
    image: "/images/perfumes/perfume_bois_de_nuit.png"
  },
  {
    id: "or-rose",
    name: "Or Rose Floral Compound",
    tagline: "Golden Rose & Iris concentrated raw fragrance oil",
    price: 190,
    volume: "100ml Oil / Liter Bulk",
    family: "Floral Oriental Concentrate",
    notes: ["Damask Rose Absolute", "Florence Iris Root", "Madagascar Vanilla"],
    notesDetailed: {
      head: "Sicilian Mandarin, Pink Pepper Zest",
      heart: "Damask Rose Absolute, Florence Iris, Peony Extract",
      base: "Madagascar Vanilla Pod, White Patchouli, Tonka Bean"
    },
    sizes: [
      { volume: "100ml Sample", price: 125 },
      { volume: "500ml Canister", price: 460 },
      { volume: "1 Liter Aluminum Bottle", price: 840 }
    ],
    description: "Luminous and romantic concentrated oil blend. Harvested Damask rose petals blended with precious iris root. Developed for high-end retail perfume lines looking for radiant, long-lasting floral sillage.",
    image: "/images/perfumes/perfume_or_rose.png"
  },
  {
    id: "fleur-secrete",
    name: "Fleur Secrète Citrus Essence",
    tagline: "Ethereal Italian Bergamot & Neroli raw perfume oil",
    price: 180,
    volume: "100ml Oil / Liter Bulk",
    family: "Citrus Fresh Concentrate",
    notes: ["Calabrian Bergamot", "Orange Blossom", "Solar White Musk"],
    notesDetailed: {
      head: "Calabrian Bergamot, Lemon Zest, Neroli Oil",
      heart: "Orange Blossom Absolute, Crisp Green Tea",
      base: "White Musk Crystals, Solar Wood Accord, Soft Moss"
    },
    sizes: [
      { volume: "100ml Sample", price: 115 },
      { volume: "500ml Canister", price: 430 },
      { volume: "1 Liter Aluminum Bottle", price: 790 }
    ],
    description: "Fresh and sparkling citrus-floral fragrance concentrate. High cold-press bergamot content with neroli notes. Ideal for spring/summer perfume collections and fresh body mist formulations.",
    image: "/images/perfumes/perfume_fleur_secrete.png"
  },
  {
    id: "originelle-intense",
    name: "L'Étoile Originelle Extrait Pure",
    tagline: "Ultra-concentrated pure perfume oil absolute (35%)",
    price: 215,
    volume: "100ml Oil / Liter Bulk",
    family: "Floral Woody Extrait",
    notes: ["Double Jasmine Absolute", "Smoked Amber", "Sandalwood Cream"],
    notesDetailed: {
      head: "Bergamot Extract, Pink Pepper Oil",
      heart: "Double Grasse Jasmine Absolute, Royal Rose",
      base: "Smoked Amber Crystals, Sandalwood Cream, Vanilla Extract"
    },
    sizes: [
      { volume: "100ml Sample", price: 145 },
      { volume: "500ml Canister", price: 520 },
      { volume: "1 Liter Aluminum Bottle", price: 940 }
    ],
    description: "Our highest concentration raw fragrance oil. Formulated with double Grasse jasmine extract and smoked amber crystals. Designed for ultra-prestige Extrait de Parfum packaging with weighted metal caps.",
    image: "/images/perfumes/perfume_originelle_intense.png"
  }
];
