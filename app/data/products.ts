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
}

export const PRODUCTS: Product[] = [
  {
    id: "originelle",
    name: "L'Étoile Originelle",
    tagline: "The iconic signature fragrance",
    price: 185,
    volume: "100ml",
    family: "Floral Woody",
    notes: ["Grasse Jasmine", "Warm Amber", "New Caledonian Sandalwood"],
    notesDetailed: {
      head: "Italian Bergamot, Dewy Leaves",
      heart: "Grasse Jasmine Absolute, Damask Rose",
      base: "Golden Amber Crystals, White Musk, Sandalwood Cream"
    },
    sizes: [
      { volume: "50ml", price: 120 },
      { volume: "100ml", price: 185 },
      { volume: "200ml", price: 295 }
    ],
    description: "A timeless, sophisticated blend that balances the delicate romance of fresh Grasse jasmine with the warm depth of gold amber and creamy sandalwood. It represents the quintessential French elegance, crafting a unique trailing scent that lingers beautifully for hours."
  },
  {
    id: "bois",
    name: "Bois de Nuit",
    tagline: "Mysterious, deep, and seductive",
    price: 195,
    volume: "100ml",
    family: "Woody",
    notes: ["Tuscan Leather", "Virginia Cedarwood", "Vetiver"],
    notesDetailed: {
      head: "Cardamom, Smoked Black Pepper",
      heart: "Tuscan Leather Accord, Virginia Cedarwood",
      base: "Haitian Vetiver, Amberwood, Patchouli Bark"
    },
    sizes: [
      { volume: "50ml", price: 130 },
      { volume: "100ml", price: 195 },
      { volume: "200ml", price: 310 }
    ],
    description: "Inspired by Parisian nights, Bois de Nuit is a bold, velvety composition. Earthy base notes of vetiver and rich cedarwood are crowned by dark leather and hints of black pepper, projecting power, refinement, and allure."
  },
  {
    id: "or-rose",
    name: "Or Rose",
    tagline: "A romantic bouquet of golden blossoms",
    price: 190,
    volume: "100ml",
    family: "Floral Oriental",
    notes: ["Damask Rose", "Florence Iris", "Madagascar Vanilla"],
    notesDetailed: {
      head: "Sicilian Mandarin, Pink Pepper",
      heart: "Damask Rose Absolute, Florence Iris, Peony Petals",
      base: "Madagascar Vanilla Pod, White Patchouli, Tonka Bean"
    },
    sizes: [
      { volume: "50ml", price: 125 },
      { volume: "100ml", price: 190 },
      { volume: "200ml", price: 300 }
    ],
    description: "Luminous and romantic, Or Rose captures the scent of blooming French rose gardens at sunrise. Handpicked Damask rose petals blend with precious Florence iris and a soft whisper of Madagascar vanilla to create a floral masterpiece."
  },
  {
    id: "fleur-secrete",
    name: "Fleur Secrète",
    tagline: "Fresh, ethereal, and radiant",
    price: 180,
    volume: "100ml",
    family: "Citrus Fresh",
    notes: ["Italian Bergamot", "Orange Blossom", "White Musk"],
    notesDetailed: {
      head: "Calabrian Bergamot, Lemon Zest, Neroli Scent",
      heart: "Orange Blossom Absolute, Crisp Green Tea",
      base: "White Musk Crystals, Solar Wood Accord, Soft Moss"
    },
    sizes: [
      { volume: "50ml", price: 115 },
      { volume: "100ml", price: 180 },
      { volume: "200ml", price: 285 }
    ],
    description: "A bright, sparkling fragrance that opens with crisp Italian bergamot and neroli, settling into a heart of sun-drenched orange blossom and clean white musk. It is a breath of fresh morning air in a bottle."
  },
  {
    id: "originelle-intense",
    name: "L'Étoile Originelle Intense",
    tagline: "Exclusive release of enhanced concentration",
    price: 215,
    volume: "100ml",
    family: "Floral Woody",
    notes: ["Jasmine Absolute", "Smoked Amber", "Sandalwood Cream"],
    notesDetailed: {
      head: "Bergamot Extract, Pink Pepper Oil",
      heart: "Double Grasse Jasmine Absolute, Royal Rose",
      base: "Smoked Amber Crystals, Sandalwood Cream, Vanilla Extract"
    },
    sizes: [
      { volume: "50ml", price: 145 },
      { volume: "100ml", price: 215 },
      { volume: "200ml", price: 345 }
    ],
    description: "An elevated interpretation of our legendary signature scent. Re-designed with double the absolute concentration, incorporating smoked amber crystals and vanilla pod infusions for an incredibly deep, dark, and sensual dry-down experience."
  }
];
