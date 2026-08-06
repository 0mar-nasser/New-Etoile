export interface CatalogItem {
  id: string;
  name: string;
  category: "perfumes" | "bottles" | "caps" | "pumps";
  subCategory?: string; // e.g. "Individual", "Gift Box", "30ml", "Plastic", etc.
  description: string;
  price?: number;
  features?: string[];
  image?: string;
}

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    "id": "oil-1",
    "name": "Khamrah By Lattafa Perfumes Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Khamrah By Lattafa Perfumes). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 192,
    "features": ["Scent Profile: Inspired by Khamrah By Lattafa Perfumes", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_1_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-2",
    "name": "Tobacco Vanille By Tom Ford Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Tobacco Vanille By Tom Ford). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 204,
    "features": ["Scent Profile: Inspired by Tobacco Vanille By Tom Ford", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_2_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-3",
    "name": "Le Male Elixir By Jean Paul Gaultier Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Le Male Elixir By Jean Paul Gaultier). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 216,
    "features": ["Scent Profile: Inspired by Le Male Elixir By Jean Paul Gaultier", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_3_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-4",
    "name": "Strongerwith Emporio Armani Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Strongerwith Emporio Armani). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 228,
    "features": ["Scent Profile: Inspired by Strongerwith Emporio Armani", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_4_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-5",
    "name": "S De Marly By Parfums De Marly Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (S De Marly By Parfums De Marly). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 240,
    "features": ["Scent Profile: Inspired by S De Marly By Parfums De Marly", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_5_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-6",
    "name": "Le Beau Le Parfum Jean Paul Gaultier Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Le Beau Le Parfum Jean Paul Gaultier). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 252,
    "features": ["Scent Profile: Inspired by Le Beau Le Parfum Jean Paul Gaultier", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_6_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-7",
    "name": "Perfume Oil Bleu De Chanel Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Perfume Oil Bleu De Chanel). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 264,
    "features": ["Scent Profile: Inspired by Perfume Oil Bleu De Chanel", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_7_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-8",
    "name": "Le Beau Narcisse Jean Paul Gaultier Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Le Beau Narcisse Jean Paul Gaultier). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 276,
    "features": ["Scent Profile: Inspired by Le Beau Narcisse Jean Paul Gaultier", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_8_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-9",
    "name": "Flora Gorgeous Gardenia Intense Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Flora Gorgeous Gardenia Intense). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 180,
    "features": ["Scent Profile: Inspired by Flora Gorgeous Gardenia Intense", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_9_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-10",
    "name": "Malibu Rasasi Extrait Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Malibu Rasasi Extrait Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 192,
    "features": ["Scent Profile: Inspired by Malibu Rasasi Extrait Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_10_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-11",
    "name": "Black Opium By Yves Saint Laurent Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Black Opium By Yves Saint Laurent). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 204,
    "features": ["Scent Profile: Inspired by Black Opium By Yves Saint Laurent", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_11_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-12",
    "name": "Crystal Emerald Versace Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Crystal Emerald Versace). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 216,
    "features": ["Scent Profile: Inspired by Crystal Emerald Versace", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_12_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-13",
    "name": "Myslf By Yves Saint Laurent Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Myslf By Yves Saint Laurent). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 228,
    "features": ["Scent Profile: Inspired by Myslf By Yves Saint Laurent", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_13_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-14",
    "name": "Wild Vetiver Creed Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Wild Vetiver Creed). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 240,
    "features": ["Scent Profile: Inspired by Wild Vetiver Creed", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_14_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-15",
    "name": "Dior Homme Intense 2011 Dior Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Dior Homme Intense 2011 Dior). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 252,
    "features": ["Scent Profile: Inspired by Dior Homme Intense 2011 Dior", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_15_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-16",
    "name": "Safran Secret Maison Crivelli Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Safran Secret Maison Crivelli). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 264,
    "features": ["Scent Profile: Inspired by Safran Secret Maison Crivelli", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_16_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-17",
    "name": "Vanilla Powder Matiere Premiere Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Vanilla Powder Matiere Premiere). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 276,
    "features": ["Scent Profile: Inspired by Vanilla Powder Matiere Premiere", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_17_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-18",
    "name": "Gi Elixir Giorgio Extrait Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Gi Elixir Giorgio Extrait Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 180,
    "features": ["Scent Profile: Inspired by Gi Elixir Giorgio Extrait Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_18_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-19",
    "name": "Asad By Lattafa Perfumes Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Asad By Lattafa Perfumes). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 192,
    "features": ["Scent Profile: Inspired by Asad By Lattafa Perfumes", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_19_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-20",
    "name": "Virgin Island Water Creed Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Virgin Island Water Creed). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 204,
    "features": ["Scent Profile: Inspired by Virgin Island Water Creed", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_20_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-21",
    "name": "Reflection Man Amouage Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Reflection Man Amouage). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 216,
    "features": ["Scent Profile: Inspired by Reflection Man Amouage", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_21_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-22",
    "name": "Miss Dior Essence Dior Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Miss Dior Essence Dior). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 228,
    "features": ["Scent Profile: Inspired by Miss Dior Essence Dior", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_22_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-23",
    "name": "Eto Rfum Sewbe Ewome Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Eto Rfum Sewbe Ewome). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 240,
    "features": ["Scent Profile: Inspired by Eto Rfum Sewbe Ewome", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_23_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-24",
    "name": "Meant To Be Seen Extraitde Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Meant To Be Seen Extraitde Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 252,
    "features": ["Scent Profile: Inspired by Meant To Be Seen Extraitde Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_24_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-25",
    "name": "Black Orchid Tom Ford Tomford Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Black Orchid Tom Ford Tomford). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 264,
    "features": ["Scent Profile: Inspired by Black Orchid Tom Ford Tomford", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_25_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-26",
    "name": "Tom Ford Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Tom Ford). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 276,
    "features": ["Scent Profile: Inspired by Tom Ford", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_26_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-27",
    "name": "Ure Musc Blanc For Her Narciso Rodriguez Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Ure Musc Blanc For Her Narciso Rodriguez). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 180,
    "features": ["Scent Profile: Inspired by Ure Musc Blanc For Her Narciso Rodriguez", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_27_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-28",
    "name": "Libre Yves Saint Laurent Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Libre Yves Saint Laurent). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 192,
    "features": ["Scent Profile: Inspired by Libre Yves Saint Laurent", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_28_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-29",
    "name": "Existence Amouage Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Existence Amouage). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 204,
    "features": ["Scent Profile: Inspired by Existence Amouage", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_29_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-30",
    "name": "Aldebaran Marc-Antoine Barrois Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Aldebaran Marc-Antoine Barrois). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 216,
    "features": ["Scent Profile: Inspired by Aldebaran Marc-Antoine Barrois", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_30_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-31",
    "name": "Maracuj Maison Crivelli Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Maracuj Maison Crivelli). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 228,
    "features": ["Scent Profile: Inspired by Maracuj Maison Crivelli", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_31_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-32",
    "name": "Side Effect Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Side Effect). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 240,
    "features": ["Scent Profile: Inspired by Side Effect", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_32_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-33",
    "name": "Musamam Black Intense Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Musamam Black Intense). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 252,
    "features": ["Scent Profile: Inspired by Musamam Black Intense", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_33_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-34",
    "name": "Yves Saint Laurent Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Yves Saint Laurent). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 264,
    "features": ["Scent Profile: Inspired by Yves Saint Laurent", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_34_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-35",
    "name": "Prada Paradoxe Prada By Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Prada Paradoxe Prada By). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 276,
    "features": ["Scent Profile: Inspired by Prada Paradoxe Prada By", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_35_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-36",
    "name": "Burberry Her Burberry Burberry London Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Burberry Her Burberry Burberry London). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 180,
    "features": ["Scent Profile: Inspired by Burberry Her Burberry Burberry London", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_36_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-37",
    "name": "- Hawas For Him Rasasi Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (- Hawas For Him Rasasi). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 192,
    "features": ["Scent Profile: Inspired by - Hawas For Him Rasasi", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_37_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-38",
    "name": "Rose Rfum Parfums Marly Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Rose Rfum Parfums Marly). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 204,
    "features": ["Scent Profile: Inspired by Rose Rfum Parfums Marly", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_38_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-39",
    "name": "Profondo Giorgio Armani Extrait Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Profondo Giorgio Armani Extrait Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 216,
    "features": ["Scent Profile: Inspired by Profondo Giorgio Armani Extrait Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_39_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-40",
    "name": "The One For Men Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (The One For Men). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 228,
    "features": ["Scent Profile: Inspired by The One For Men", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_40_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-41",
    "name": "Onger With You Absolutely Giorgio Armani Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Onger With You Absolutely Giorgio Armani). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 240,
    "features": ["Scent Profile: Inspired by Onger With You Absolutely Giorgio Armani", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_41_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-42",
    "name": "Fums De Marly Burberry Herelixirdeparfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Fums De Marly Burberry Herelixirdeparfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 252,
    "features": ["Scent Profile: Inspired by Fums De Marly Burberry Herelixirdeparfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_42_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-43",
    "name": "Donna Born In Roma Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Donna Born In Roma). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 264,
    "features": ["Scent Profile: Inspired by Donna Born In Roma", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_43_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-44",
    "name": "R F U M Tom Ford Oud Wood Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (R F U M Tom Ford Oud Wood). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 276,
    "features": ["Scent Profile: Inspired by R F U M Tom Ford Oud Wood", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_44_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-45",
    "name": "D Maison Crivelli Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (D Maison Crivelli). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 180,
    "features": ["Scent Profile: Inspired by D Maison Crivelli", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_45_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-46",
    "name": "S De Marly Paris Tilia Extrait Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (S De Marly Paris Tilia Extrait). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 192,
    "features": ["Scent Profile: Inspired by S De Marly Paris Tilia Extrait", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_46_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-47",
    "name": "De Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (De Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 204,
    "features": ["Scent Profile: Inspired by De Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_47_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-48",
    "name": "Crystal Noir Versace Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Crystal Noir Versace). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 216,
    "features": ["Scent Profile: Inspired by Crystal Noir Versace", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_48_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-49",
    "name": "De Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (De Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 228,
    "features": ["Scent Profile: Inspired by De Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_49_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-50",
    "name": "Acy Collector'S Edition Pour Homme Afnan Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Acy Collector'S Edition Pour Homme Afnan). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 240,
    "features": ["Scent Profile: Inspired by Acy Collector'S Edition Pour Homme Afnan", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_50_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-51",
    "name": "Maison Francis Kurkdjian Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Maison Francis Kurkdjian). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 252,
    "features": ["Scent Profile: Inspired by Maison Francis Kurkdjian", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_51_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-52",
    "name": "Eer Al Oudh Intense Oud Lattafa Perfumea Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Eer Al Oudh Intense Oud Lattafa Perfumea). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 264,
    "features": ["Scent Profile: Inspired by Eer Al Oudh Intense Oud Lattafa Perfumea", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_52_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-53",
    "name": "De Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (De Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 276,
    "features": ["Scent Profile: Inspired by De Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_53_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-54",
    "name": "Invictus Rabanne Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Invictus Rabanne). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 180,
    "features": ["Scent Profile: Inspired by Invictus Rabanne", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_54_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-55",
    "name": "De Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (De Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 192,
    "features": ["Scent Profile: Inspired by De Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_55_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-56",
    "name": "Queen Of Silk Creed Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Queen Of Silk Creed). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 204,
    "features": ["Scent Profile: Inspired by Queen Of Silk Creed", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_56_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-57",
    "name": "Myslf Le Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Myslf Le Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 216,
    "features": ["Scent Profile: Inspired by Myslf Le Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_57_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-58",
    "name": "Oud Cadenza Maison Crivelli Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Oud Cadenza Maison Crivelli). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 228,
    "features": ["Scent Profile: Inspired by Oud Cadenza Maison Crivelli", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_58_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-59",
    "name": "The Tragedy Of Lord George Penhaligon'S Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (The Tragedy Of Lord George Penhaligon'S). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 240,
    "features": ["Scent Profile: Inspired by The Tragedy Of Lord George Penhaligon'S", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_59_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-60",
    "name": "Alexandria Ii Xerjoff Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Alexandria Ii Xerjoff). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 252,
    "features": ["Scent Profile: Inspired by Alexandria Ii Xerjoff", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_60_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-61",
    "name": "Dior Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Dior). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 264,
    "features": ["Scent Profile: Inspired by Dior", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_61_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-62",
    "name": "Powder Matiere Premiere Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Powder Matiere Premiere). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 276,
    "features": ["Scent Profile: Inspired by Powder Matiere Premiere", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_62_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-63",
    "name": "Myway Giorgio Armani Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Myway Giorgio Armani). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 180,
    "features": ["Scent Profile: Inspired by Myway Giorgio Armani", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_63_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-64",
    "name": "Etowe. Iernoon Iion Erfume Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Etowe. Iernoon Iion Erfume). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 192,
    "features": ["Scent Profile: Inspired by Etowe. Iernoon Iion Erfume", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_64_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-65",
    "name": "Flora Gorgeous Orchid Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Flora Gorgeous Orchid). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 204,
    "features": ["Scent Profile: Inspired by Flora Gorgeous Orchid", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_65_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-66",
    "name": "Guilty Elixir De Parfum Pour Homme Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Guilty Elixir De Parfum Pour Homme). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 216,
    "features": ["Scent Profile: Inspired by Guilty Elixir De Parfum Pour Homme", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_66_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-67",
    "name": "Remember Me Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Remember Me). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 228,
    "features": ["Scent Profile: Inspired by Remember Me", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_67_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-68",
    "name": "A Rabanne Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (A Rabanne). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 240,
    "features": ["Scent Profile: Inspired by A Rabanne", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_68_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-69",
    "name": "The Blazing Mr Sam Penhaligon'S Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (The Blazing Mr Sam Penhaligon'S). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 252,
    "features": ["Scent Profile: Inspired by The Blazing Mr Sam Penhaligon'S", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_69_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-70",
    "name": "Royal Essence Oil #70 Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Royal Essence Oil #70). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 264,
    "features": ["Scent Profile: Inspired by Royal Essence Oil #70", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_70_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-71",
    "name": "De Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (De Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 276,
    "features": ["Scent Profile: Inspired by De Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_71_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-72",
    "name": "Ore Louis Vuitton Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Ore Louis Vuitton). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 180,
    "features": ["Scent Profile: Inspired by Ore Louis Vuitton", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_72_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-73",
    "name": "Scandal Pour Homme Jean Paul Gaultier Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Scandal Pour Homme Jean Paul Gaultier). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 192,
    "features": ["Scent Profile: Inspired by Scandal Pour Homme Jean Paul Gaultier", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_73_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-74",
    "name": "Tuxedo Yves Saint Laurent Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Tuxedo Yves Saint Laurent). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 204,
    "features": ["Scent Profile: Inspired by Tuxedo Yves Saint Laurent", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_74_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-75",
    "name": "Vuitton Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Vuitton). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 216,
    "features": ["Scent Profile: Inspired by Vuitton", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_75_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-76",
    "name": "Rabanne 1 Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Rabanne 1). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 228,
    "features": ["Scent Profile: Inspired by Rabanne 1", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_76_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-77",
    "name": "Eau De Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Eau De Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 240,
    "features": ["Scent Profile: Inspired by Eau De Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_77_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-78",
    "name": "Toile Bloom Gucci Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Toile Bloom Gucci). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 252,
    "features": ["Scent Profile: Inspired by Toile Bloom Gucci", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_78_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-79",
    "name": "Royal Essence Oil #79 Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Royal Essence Oil #79). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 264,
    "features": ["Scent Profile: Inspired by Royal Essence Oil #79", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_79_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-80",
    "name": "De Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (De Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 276,
    "features": ["Scent Profile: Inspired by De Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_80_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-81",
    "name": "Royal Essence Oil #81 Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Royal Essence Oil #81). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 180,
    "features": ["Scent Profile: Inspired by Royal Essence Oil #81", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_81_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-82",
    "name": "Club De Nuit Armaf Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Club De Nuit Armaf). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 192,
    "features": ["Scent Profile: Inspired by Club De Nuit Armaf", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_82_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-83",
    "name": "Bitter Peach Tom Ford Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Bitter Peach Tom Ford). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 204,
    "features": ["Scent Profile: Inspired by Bitter Peach Tom Ford", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_83_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-84",
    "name": "Oud For Greatness Initio Parfums Prives Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Oud For Greatness Initio Parfums Prives). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 216,
    "features": ["Scent Profile: Inspired by Oud For Greatness Initio Parfums Prives", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_84_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-85",
    "name": "African Leather Memo Paris Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (African Leather Memo Paris). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 228,
    "features": ["Scent Profile: Inspired by African Leather Memo Paris", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_85_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-86",
    "name": "L'Immensit Louis Vuitton Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (L'Immensit Louis Vuitton). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 240,
    "features": ["Scent Profile: Inspired by L'Immensit Louis Vuitton", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_86_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-87",
    "name": "Royal Essence Oil #87 Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Royal Essence Oil #87). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 252,
    "features": ["Scent Profile: Inspired by Royal Essence Oil #87", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_87_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-88",
    "name": "Bewt Bncome Erfume Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Bewt Bncome Erfume). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 264,
    "features": ["Scent Profile: Inspired by Bewt Bncome Erfume", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_88_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-89",
    "name": "Parf Absolu Aventus Creed Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Parf Absolu Aventus Creed). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 276,
    "features": ["Scent Profile: Inspired by Parf Absolu Aventus Creed", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_89_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-90",
    "name": "De Parfum Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (De Parfum). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 180,
    "features": ["Scent Profile: Inspired by De Parfum", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_90_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-91",
    "name": "Royal Essence Oil #91 Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Royal Essence Oil #91). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 192,
    "features": ["Scent Profile: Inspired by Royal Essence Oil #91", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_91_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-92",
    "name": "N05 Paris Eaij De Parfijm Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (N05 Paris Eaij De Parfijm). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 204,
    "features": ["Scent Profile: Inspired by N05 Paris Eaij De Parfijm", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_92_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-93",
    "name": "Irs Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Irs). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 216,
    "features": ["Scent Profile: Inspired by Irs", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_93_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-94",
    "name": "Guidance 46 Amouage Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Guidance 46 Amouage). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 228,
    "features": ["Scent Profile: Inspired by Guidance 46 Amouage", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_94_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "oil-95",
    "name": "Erba Gold Oil Concentrate",
    "category": "perfumes",
    "subCategory": "Fragrance Oils",
    "description": "High-purity concentrated French fragrance oil (Erba Gold). Engineered for exceptional longevity, luxury projection, and formulation stability.",
    "price": 240,
    "features": ["Scent Profile: Inspired by Erba Gold", "Dosage & Concentration: 100% Pure Undiluted Concentrate (30%+ EDP)", "Supply Packaging: 1kg Sealed B2B Aluminum Canister"],
    "image": "/images/oils/photo_95_2026-08-03_22-26-44.jpg"
  },
  {
    "id": "bottle-normal-1",
    "name": "Étoile Classic Cylinder - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #1. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 15,
    "features": [
      "Capacity: 30ml",
      "Finish: Clear Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_1_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-2",
    "name": "Étoile Square Minimal - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #2. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 18,
    "features": [
      "Capacity: 50ml",
      "Finish: High Polish",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_2_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-3",
    "name": "Étoile Linear Essence - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #3. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 21,
    "features": [
      "Capacity: 75ml",
      "Finish: Matte Frosted",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_3_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-4",
    "name": "Étoile Prism Elegance - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #4. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 24,
    "features": [
      "Capacity: 100ml",
      "Finish: Amber Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_4_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-5",
    "name": "Étoile Diamond Cut - 150ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #5. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 27,
    "features": [
      "Capacity: 150ml",
      "Finish: Smoky Quartz",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_5_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-6",
    "name": "Étoile Orbital Lustre - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #6. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 30,
    "features": [
      "Capacity: 30ml",
      "Finish: Midnight Black",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_6_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-7",
    "name": "Étoile Crown Jewel - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #7. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 33,
    "features": [
      "Capacity: 50ml",
      "Finish: Fire-polished Crystal",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_7_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-8",
    "name": "Étoile Imperial Flask - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #8. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 36,
    "features": [
      "Capacity: 75ml",
      "Finish: Clear Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_8_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-9",
    "name": "Étoile Architectural Curve - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #9. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 39,
    "features": [
      "Capacity: 100ml",
      "Finish: High Polish",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_9_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-10",
    "name": "Étoile Nordic Monolith - 150ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #10. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 42,
    "features": [
      "Capacity: 150ml",
      "Finish: Matte Frosted",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_10_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-11",
    "name": "Étoile Crystal Arch - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #11. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 45,
    "features": [
      "Capacity: 30ml",
      "Finish: Amber Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_11_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-12",
    "name": "Étoile Emerald Pillar - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #12. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 48,
    "features": [
      "Capacity: 50ml",
      "Finish: Smoky Quartz",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_12_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-13",
    "name": "Étoile Opulent Oval - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #13. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 51,
    "features": [
      "Capacity: 75ml",
      "Finish: Midnight Black",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_13_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-14",
    "name": "Étoile Sovereign Column - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #14. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 54,
    "features": [
      "Capacity: 100ml",
      "Finish: Fire-polished Crystal",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_14_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-15",
    "name": "Étoile Heritage Decanter - 150ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #15. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 12,
    "features": [
      "Capacity: 150ml",
      "Finish: Clear Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_15_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-16",
    "name": "Étoile Majesty Flacon - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #16. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 15,
    "features": [
      "Capacity: 30ml",
      "Finish: High Polish",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_16_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-17",
    "name": "Étoile Classic Cylinder - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #17. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 18,
    "features": [
      "Capacity: 50ml",
      "Finish: Matte Frosted",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_17_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-18",
    "name": "Étoile Square Minimal - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #18. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 21,
    "features": [
      "Capacity: 75ml",
      "Finish: Amber Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_18_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-19",
    "name": "Étoile Linear Essence - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #19. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 24,
    "features": [
      "Capacity: 100ml",
      "Finish: Smoky Quartz",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_19_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-20",
    "name": "Étoile Prism Elegance - 150ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #20. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 27,
    "features": [
      "Capacity: 150ml",
      "Finish: Midnight Black",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_20_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-21",
    "name": "Étoile Diamond Cut - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #21. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 30,
    "features": [
      "Capacity: 30ml",
      "Finish: Fire-polished Crystal",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_21_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-22",
    "name": "Étoile Orbital Lustre - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #22. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 33,
    "features": [
      "Capacity: 50ml",
      "Finish: Clear Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_22_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-23",
    "name": "Étoile Crown Jewel - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #23. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 36,
    "features": [
      "Capacity: 75ml",
      "Finish: High Polish",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_23_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-24",
    "name": "Étoile Imperial Flask - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #24. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 39,
    "features": [
      "Capacity: 100ml",
      "Finish: Matte Frosted",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_24_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-25",
    "name": "Étoile Architectural Curve - 150ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #25. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 42,
    "features": [
      "Capacity: 150ml",
      "Finish: Amber Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_25_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-26",
    "name": "Étoile Nordic Monolith - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #26. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 45,
    "features": [
      "Capacity: 30ml",
      "Finish: Smoky Quartz",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_26_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-27",
    "name": "Étoile Crystal Arch - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #27. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 48,
    "features": [
      "Capacity: 50ml",
      "Finish: Midnight Black",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_27_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-28",
    "name": "Étoile Emerald Pillar - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #28. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 51,
    "features": [
      "Capacity: 75ml",
      "Finish: Fire-polished Crystal",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_28_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-29",
    "name": "Étoile Opulent Oval - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #29. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 54,
    "features": [
      "Capacity: 100ml",
      "Finish: Clear Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_29_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-30",
    "name": "Étoile Sovereign Column - 150ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #30. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 12,
    "features": [
      "Capacity: 150ml",
      "Finish: High Polish",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_30_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-31",
    "name": "Étoile Heritage Decanter - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #31. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 15,
    "features": [
      "Capacity: 30ml",
      "Finish: Matte Frosted",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_31_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-32",
    "name": "Étoile Majesty Flacon - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #32. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 18,
    "features": [
      "Capacity: 50ml",
      "Finish: Amber Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_32_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-33",
    "name": "Étoile Classic Cylinder - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #33. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 21,
    "features": [
      "Capacity: 75ml",
      "Finish: Smoky Quartz",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_33_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-34",
    "name": "Étoile Square Minimal - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #34. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 24,
    "features": [
      "Capacity: 100ml",
      "Finish: Midnight Black",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_34_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-35",
    "name": "Étoile Linear Essence - 150ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #35. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 27,
    "features": [
      "Capacity: 150ml",
      "Finish: Fire-polished Crystal",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_35_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-36",
    "name": "Étoile Prism Elegance - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #36. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 30,
    "features": [
      "Capacity: 30ml",
      "Finish: Clear Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_36_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-37",
    "name": "Étoile Diamond Cut - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #37. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 33,
    "features": [
      "Capacity: 50ml",
      "Finish: High Polish",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_37_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-38",
    "name": "Étoile Orbital Lustre - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #38. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 36,
    "features": [
      "Capacity: 75ml",
      "Finish: Matte Frosted",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_38_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-39",
    "name": "Étoile Crown Jewel - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #39. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 39,
    "features": [
      "Capacity: 100ml",
      "Finish: Amber Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_39_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-40",
    "name": "Étoile Imperial Flask - 150ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #40. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 42,
    "features": [
      "Capacity: 150ml",
      "Finish: Smoky Quartz",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_40_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-41",
    "name": "Étoile Architectural Curve - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #41. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 45,
    "features": [
      "Capacity: 30ml",
      "Finish: Midnight Black",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_41_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-42",
    "name": "Étoile Nordic Monolith - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #42. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 48,
    "features": [
      "Capacity: 50ml",
      "Finish: Fire-polished Crystal",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_42_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-43",
    "name": "Étoile Crystal Arch - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #43. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 51,
    "features": [
      "Capacity: 75ml",
      "Finish: Clear Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_43_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-44",
    "name": "Étoile Emerald Pillar - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #44. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 54,
    "features": [
      "Capacity: 100ml",
      "Finish: High Polish",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_44_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-45",
    "name": "Étoile Opulent Oval - 150ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #45. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 12,
    "features": [
      "Capacity: 150ml",
      "Finish: Matte Frosted",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_45_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-46",
    "name": "Étoile Sovereign Column - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #46. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 15,
    "features": [
      "Capacity: 30ml",
      "Finish: Amber Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_46_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-47",
    "name": "Étoile Heritage Decanter - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #47. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 18,
    "features": [
      "Capacity: 50ml",
      "Finish: Smoky Quartz",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_47_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-48",
    "name": "Étoile Majesty Flacon - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #48. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 21,
    "features": [
      "Capacity: 75ml",
      "Finish: Midnight Black",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_48_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-49",
    "name": "Étoile Classic Cylinder - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #49. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 24,
    "features": [
      "Capacity: 100ml",
      "Finish: Fire-polished Crystal",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_49_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-50",
    "name": "Étoile Square Minimal - 150ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #50. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 27,
    "features": [
      "Capacity: 150ml",
      "Finish: Clear Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_50_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-51",
    "name": "Étoile Linear Essence - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #51. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 30,
    "features": [
      "Capacity: 30ml",
      "Finish: High Polish",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_51_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-52",
    "name": "Étoile Prism Elegance - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #52. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 33,
    "features": [
      "Capacity: 50ml",
      "Finish: Matte Frosted",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_52_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-53",
    "name": "Étoile Diamond Cut - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #53. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 36,
    "features": [
      "Capacity: 75ml",
      "Finish: Amber Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_53_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-54",
    "name": "Étoile Orbital Lustre - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #54. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 39,
    "features": [
      "Capacity: 100ml",
      "Finish: Smoky Quartz",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_54_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-55",
    "name": "Étoile Crown Jewel - 150ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #55. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 42,
    "features": [
      "Capacity: 150ml",
      "Finish: Midnight Black",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_55_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-56",
    "name": "Étoile Imperial Flask - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #56. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 45,
    "features": [
      "Capacity: 30ml",
      "Finish: Fire-polished Crystal",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_56_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-57",
    "name": "Étoile Architectural Curve - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #57. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 48,
    "features": [
      "Capacity: 50ml",
      "Finish: Clear Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_57_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-58",
    "name": "Étoile Nordic Monolith - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #58. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 51,
    "features": [
      "Capacity: 75ml",
      "Finish: High Polish",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_58_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-59",
    "name": "Étoile Crystal Arch - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #59. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 54,
    "features": [
      "Capacity: 100ml",
      "Finish: Matte Frosted",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_59_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-60",
    "name": "Étoile Emerald Pillar - 150ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #60. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 12,
    "features": [
      "Capacity: 150ml",
      "Finish: Amber Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_60_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-61",
    "name": "Étoile Opulent Oval - 30ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #61. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 15,
    "features": [
      "Capacity: 30ml",
      "Finish: Smoky Quartz",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_61_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-62",
    "name": "Étoile Sovereign Column - 50ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #62. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 18,
    "features": [
      "Capacity: 50ml",
      "Finish: Midnight Black",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_62_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-63",
    "name": "Étoile Heritage Decanter - 75ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #63. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 21,
    "features": [
      "Capacity: 75ml",
      "Finish: Fire-polished Crystal",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_63_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "bottle-normal-64",
    "name": "Étoile Majesty Flacon - 100ml",
    "category": "bottles",
    "subCategory": "Normal Bottle",
    "description": "Premium luxury glass perfume bottle #64. Crafted with thick crystal base and precision neck finish for high-end perfumery.",
    "price": 24,
    "features": [
      "Capacity: 100ml",
      "Finish: Clear Glass",
      "Neck: Standard 15mm Crimp"
    ],
    "image": "/images/Bottles/photo_64_2026-07-22_23-11-04.jpg"
  },
  {
    "id": "cap-plastic-1",
    "name": "Plastic Cap #1",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #1. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_1_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-2",
    "name": "Plastic Cap #2",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #2. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_2_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-3",
    "name": "Plastic Cap #3",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #3. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_3_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-4",
    "name": "Plastic Cap #4",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #4. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_4_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-5",
    "name": "Plastic Cap #5",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #5. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_5_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-6",
    "name": "Plastic Cap #6",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #6. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_6_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-7",
    "name": "Plastic Cap #7",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #7. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_7_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-8",
    "name": "Plastic Cap #8",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #8. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_8_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-9",
    "name": "Plastic Cap #9",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #9. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_9_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-10",
    "name": "Plastic Cap #10",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #10. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_10_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-11",
    "name": "Plastic Cap #11",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #11. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_11_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-12",
    "name": "Plastic Cap #12",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #12. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_12_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-13",
    "name": "Plastic Cap #13",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #13. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_13_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-14",
    "name": "Plastic Cap #14",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #14. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_14_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-15",
    "name": "Plastic Cap #15",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #15. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_15_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-16",
    "name": "Plastic Cap #16",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #16. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_16_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-17",
    "name": "Plastic Cap #17",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #17. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_17_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-18",
    "name": "Plastic Cap #18",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #18. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_18_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-19",
    "name": "Plastic Cap #19",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #19. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_19_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-20",
    "name": "Plastic Cap #20",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #20. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_20_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-21",
    "name": "Plastic Cap #21",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #21. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_21_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-22",
    "name": "Plastic Cap #22",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #22. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_22_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-23",
    "name": "Plastic Cap #23",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #23. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_23_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-24",
    "name": "Plastic Cap #24",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #24. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_24_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-25",
    "name": "Plastic Cap #25",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #25. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_25_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-26",
    "name": "Plastic Cap #26",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #26. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_26_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-27",
    "name": "Plastic Cap #27",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #27. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_27_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-28",
    "name": "Plastic Cap #28",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #28. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_28_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-29",
    "name": "Plastic Cap #29",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #29. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_29_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-30",
    "name": "Plastic Cap #30",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #30. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_30_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-31",
    "name": "Plastic Cap #31",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #31. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_31_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-32",
    "name": "Plastic Cap #32",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #32. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_32_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-33",
    "name": "Plastic Cap #33",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #33. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_33_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-34",
    "name": "Plastic Cap #34",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #34. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_34_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-35",
    "name": "Plastic Cap #35",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #35. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_35_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-36",
    "name": "Plastic Cap #36",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #36. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_36_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-37",
    "name": "Plastic Cap #37",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #37. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_37_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-38",
    "name": "Plastic Cap #38",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #38. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_38_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-39",
    "name": "Plastic Cap #39",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #39. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_39_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-40",
    "name": "Plastic Cap #40",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #40. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_40_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-41",
    "name": "Plastic Cap #41",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #41. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_41_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-42",
    "name": "Plastic Cap #42",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #42. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_42_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-43",
    "name": "Plastic Cap #43",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #43. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_43_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-44",
    "name": "Plastic Cap #44",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #44. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_44_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-45",
    "name": "Plastic Cap #45",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #45. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_45_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-46",
    "name": "Plastic Cap #46",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #46. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_46_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-47",
    "name": "Plastic Cap #47",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #47. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_47_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-48",
    "name": "Plastic Cap #48",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #48. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_48_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-49",
    "name": "Plastic Cap #49",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #49. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_49_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-50",
    "name": "Plastic Cap #50",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #50. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_50_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-plastic-51",
    "name": "Plastic Cap #51",
    "category": "caps",
    "subCategory": "Plastic Cap",
    "description": "Luxury plastic perfume bottle cap #51. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.",
    "price": 8,
    "features": [
        "Material: High-Grade Polymer",
        "Fit: Standard 15mm Neck",
        "Finish: Premium Polish"
    ],
    "image": "/images/caps/plastic/photo_51_2026-07-24_21-17-39.jpg"
},
  {
    "id": "cap-zamac-1",
    "name": "Zamac Cap #1",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #1. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_1_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-2",
    "name": "Zamac Cap #2",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #2. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_2_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-3",
    "name": "Zamac Cap #3",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #3. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_3_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-4",
    "name": "Zamac Cap #4",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #4. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_4_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-5",
    "name": "Zamac Cap #5",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #5. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_5_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-6",
    "name": "Zamac Cap #6",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #6. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_6_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-7",
    "name": "Zamac Cap #7",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #7. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_7_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-8",
    "name": "Zamac Cap #8",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #8. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_8_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-9",
    "name": "Zamac Cap #9",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #9. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_9_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-10",
    "name": "Zamac Cap #10",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #10. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_10_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-11",
    "name": "Zamac Cap #11",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #11. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_11_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-12",
    "name": "Zamac Cap #12",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #12. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_12_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-13",
    "name": "Zamac Cap #13",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #13. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_13_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-14",
    "name": "Zamac Cap #14",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #14. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_14_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-15",
    "name": "Zamac Cap #15",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #15. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_15_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-16",
    "name": "Zamac Cap #16",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #16. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_16_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-17",
    "name": "Zamac Cap #17",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #17. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_17_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-18",
    "name": "Zamac Cap #18",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #18. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_18_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-19",
    "name": "Zamac Cap #19",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #19. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_19_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-20",
    "name": "Zamac Cap #20",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #20. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_20_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-21",
    "name": "Zamac Cap #21",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #21. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_21_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-22",
    "name": "Zamac Cap #22",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #22. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_22_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-23",
    "name": "Zamac Cap #23",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #23. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_23_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-24",
    "name": "Zamac Cap #24",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #24. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_24_2026-07-24_21-19-44.jpg"
},
  {
    "id": "cap-zamac-25",
    "name": "Zamac Cap #25",
    "category": "caps",
    "subCategory": "Zamac Cap",
    "description": "Luxury Zamac metal alloy perfume bottle cap #25. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.",
    "price": 18,
    "features": [
        "Material: Heavy Zamac Metal Alloy",
        "Fit: Standard 15mm Neck",
        "Finish: Electroplated Gold & Chrome"
    ],
    "image": "/images/caps/zamac/photo_25_2026-07-24_21-19-44.jpg"
},
  {
    "id": "pump-1",
    "name": "Invisible Dip Tube Pump",
    "category": "pumps",
    "subCategory": "Standard",
    "description": "Advanced pump system featuring a tube that becomes invisible in liquid."
  },
  {
    "id": "pump-1",
    "name": "Étoile FEA 15 Precision Crimp Pump - Champagne Gold",
    "category": "pumps",
    "subCategory": "FEA 15 Crimp",
    "description": "Industrial-grade FEA 15mm precision crimp spray pump crafted in electroplated champagne gold. Features micro-droplet atomizer technology for an effortless, wide cloud sillage.",
    "price": 12,
    "features": ["Neck Size: FEA 15mm Standard", "Dosage: 0.08ml - 0.10ml per spray", "Material: Anodized Electroplated Gold Aluminum", "Closure: Invisible Dip Tube Compatible"],
    "image": "/images/pumps/pump_1.png"
  },
  {
    "id": "pump-2",
    "name": "Étoile Screw-On Atomizer Pump - Matte Obsidian Black",
    "category": "pumps",
    "subCategory": "Screw Pump",
    "description": "Sleek matte black 18/415 thread screw spray pump. Ideal for niche travel atomizers and refillable luxury perfume flacons.",
    "price": 11,
    "features": ["Neck Thread: 18/415 Screw", "Finish: Matte Black Powder Coated", "Leakproof: Quadruple Gasket Seal"],
    "image": "/images/pumps/pump_2.png"
  },
  {
    "id": "pump-3",
    "name": "Étoile Royal Crown Zamac Collar Spray Pump - Rose Gold",
    "category": "pumps",
    "subCategory": "Weighted Collar Pump",
    "description": "Ultra-prestige weighted metal collar spray pump finished in polished rose gold. Designed for high-end Extrait de Parfum collections.",
    "price": 24,
    "features": ["Collar Material: Heavyweight Zamac Alloy", "Finish: Mirror Rose Gold", "Neck Compatibility: FEA 15mm"],
    "image": "/images/pumps/pump_3.png"
  },
  {
    "id": "pump-4",
    "name": "Étoile Crystal Mist Snap-On Pump - Chrome Silver",
    "category": "pumps",
    "subCategory": "Snap-On Pump",
    "description": "High-speed snap-on precision atomizer in mirror chrome. Engineered for high-volume automated production lines with zero crimping required.",
    "price": 10,
    "features": ["Mechanism: Press Snap-On Collar", "Finish: Bright Chrome Silver", "Dip Tube: High Clarity Crystal PVC"],
    "image": "/images/pumps/pump_4.png"
  },
  {
    "id": "pump-5",
    "name": "Étoile Imperial Heavy-Duty Dispensing Pump - Burnished Bronze",
    "category": "pumps",
    "subCategory": "Heavy Duty Pump",
    "description": "Industrial heavy-duty oil and perfume dispenser pump with antique burnished bronze collar and extended dip tube.",
    "price": 18,
    "features": ["Finish: Antique Burnished Bronze", "Dosage: 0.14ml Extended Cloud", "Gasket: Solvents-Resistant Synthetic Rubber"],
    "image": "/images/pumps/pump_5.png"
  },
  {
    "id": "pump-6",
    "name": "Étoile Micro-Cloud Fine Atomizer - Brushed Gold",
    "category": "pumps",
    "subCategory": "Micro-Mist Pump",
    "description": "Engineered with nano-aperture nozzle for an ultra-dry micro-cloud mist. Accentuates delicate floral and citrus head notes.",
    "price": 15,
    "features": ["Technology: Nano-Aperture Micro-Mist", "Finish: Satin Brushed Champagne Gold", "Neck Size: FEA 15mm"],
    "image": "/images/pumps/pump_6.png"
  },
  {
    "id": "pump-7",
    "name": "Étoile Minimalist Invisible-Tube Pump - Platinum Silver",
    "category": "pumps",
    "subCategory": "Invisible Dip Tube",
    "description": "Ultra-clearing invisible dip tube pump technology in polished platinum silver. Disappears completely inside liquid for pure crystal aesthetics.",
    "price": 16,
    "features": ["Dip Tube: Zero-Refraction Invisible Polymer", "Finish: Polished Platinum", "Spray Angle: 65° Conical Spray Pattern"],
    "image": "/images/pumps/pump_7.png"
  },
  {
    "id": "pump-8",
    "name": "Étoile Vintage Bulb Atomizer Pump - Gold Mesh & Collar",
    "category": "pumps",
    "subCategory": "Bulb Atomizer",
    "description": "Classic vintage style spray pump with woven gold silk bulb and crimped brass collar. Brings haute couture nostalgia to vanity flacons.",
    "price": 32,
    "features": ["Style: Retro Luxury Squeeze Bulb", "Mesh: Hand-woven Metallic Thread", "Neck Size: 18mm Threaded"],
    "image": "/images/pumps/pump_8.png"
  },
  {
    "id": "pump-9",
    "name": "Étoile Velvet Touch Spray Pump - Soft Metallic Emerald & Gold",
    "category": "pumps",
    "subCategory": "Weighted Collar Pump",
    "description": "Dual-tone luxury pump featuring dark emerald green anodized collar with gold nozzle accent. Perfect match for forest green glass flacons.",
    "price": 21,
    "features": ["Tone: Emerald Green & Champagne Gold", "Neck Size: FEA 15mm Standard", "Actuation Force: Ultra Smooth Soft Touch"],
    "image": "/images/pumps/pump_9.png"
  },
  {
    "id": "pump-10",
    "name": "Étoile Magnetic Snap Atomizer Assembly - Polished Brass",
    "category": "pumps",
    "subCategory": "Magnetic Assembly",
    "description": "Integrated magnetic-ready pump assembly in raw polished brass. Seamlessly aligns with magnetic weighted caps.",
    "price": 28,
    "features": ["Magnetic Alignment: N52 Ring Magnet Integrated", "Finish: Raw Mirror Brass", "Seal: High-Pressure Hermetic Ring"],
    "image": "/images/pumps/pump_10.png"
  },
  {
    "id": "pump-11",
    "name": "Étoile Pocket Travel Spray Pump - Compact Gold",
    "category": "pumps",
    "subCategory": "Travel Pump",
    "description": "Compact 10ml/15ml pocket atomizer pump module in polished champagne gold. Spill-proof design engineered for luxury travel kits.",
    "price": 10,
    "features": ["Compatibility: 10ml-20ml Vials & Pocket Flacons", "Leakproof: TSA Compliant Aircraft Pressure Seal"],
    "image": "/images/pumps/pump_11.png"
  }
];
