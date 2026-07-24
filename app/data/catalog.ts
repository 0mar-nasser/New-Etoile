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
    "id": "perfume-individual-1",
    "name": "L'Étoile Originelle",
    "category": "perfumes",
    "subCategory": "Individual Bottles",
    "description": "Our signature floral woody fragrance featuring Grasse jasmine, warm amber, and creamy sandalwood.",
    "price": 185,
    "features": [
      "Notes: Grasse Jasmine, Amber, Sandalwood",
      "Concentration: Eau de Parfum (20%)",
      "Volume: 100ml French Crystal Flacon"
    ],
    "image": "/images/perfumes/perfume_originelle.png"
  },
  {
    "id": "perfume-individual-2",
    "name": "Bois de Nuit",
    "category": "perfumes",
    "subCategory": "Individual Bottles",
    "description": "Mysterious, deep, and seductive scent with notes of Tuscan leather, smoked cedarwood, and Haitian vetiver.",
    "price": 195,
    "features": [
      "Notes: Tuscan Leather, Cedarwood, Vetiver",
      "Concentration: Eau de Parfum (22%)",
      "Volume: 100ml Smoky Amber Glass"
    ],
    "image": "/images/perfumes/perfume_bois_de_nuit.png"
  },
  {
    "id": "perfume-individual-3",
    "name": "Or Rose",
    "category": "perfumes",
    "subCategory": "Individual Bottles",
    "description": "A luminous floral oriental masterpiece combining Damask rose petals, Florence iris, and Madagascar vanilla.",
    "price": 190,
    "features": [
      "Notes: Damask Rose, Iris, Madagascar Vanilla",
      "Concentration: Eau de Parfum (20%)",
      "Volume: 100ml Rose Gold Flacon"
    ],
    "image": "/images/perfumes/perfume_or_rose.png"
  },
  {
    "id": "perfume-individual-4",
    "name": "Fleur Secrète",
    "category": "perfumes",
    "subCategory": "Individual Bottles",
    "description": "A fresh, ethereal fragrance opening with Italian bergamot and neroli, settling into sun-drenched orange blossom.",
    "price": 180,
    "features": [
      "Notes: Italian Bergamot, Orange Blossom, White Musk",
      "Concentration: Eau de Parfum (18%)",
      "Volume: 100ml Crystal Glass"
    ],
    "image": "/images/perfumes/perfume_fleur_secrete.png"
  },
  {
    "id": "perfume-individual-5",
    "name": "Ambre Impérial",
    "category": "perfumes",
    "subCategory": "Individual Bottles",
    "description": "Opulent amber warmth blended with spiced vanilla pod, benzoin resin, and rare Cambodian oud infusion.",
    "price": 210,
    "features": [
      "Notes: Golden Amber, Benzoin, Spiced Vanilla",
      "Concentration: Eau de Parfum (24%)",
      "Volume: 100ml Amber Glass"
    ],
    "image": "/images/perfumes/perfume_ambre_imperial.png"
  },
  {
    "id": "perfume-individual-6",
    "name": "Cuir Royal",
    "category": "perfumes",
    "subCategory": "Individual Bottles",
    "description": "Commanding and regal blend of Tuscan leather, crushed cardamom, saffron thread, and smoked amberwood.",
    "price": 225,
    "features": [
      "Notes: Tuscan Leather, Cardamom, Saffron, Amberwood",
      "Concentration: Eau de Parfum (25%)",
      "Volume: 100ml Heavy Architectural Flacon"
    ],
    "image": "/images/perfumes/perfume_cuir_royal.png"
  },
  {
    "id": "perfume-gift-1",
    "name": "Signature Discovery Set",
    "category": "perfumes",
    "subCategory": "Gift Boxes",
    "description": "A beautifully curated velvet box of our 3 iconic 50ml fragrances: Originelle, Bois de Nuit, and Or Rose.",
    "price": 350,
    "features": [
      "Includes: 3 x 50ml Eau de Parfum Bottles",
      "Presentation: Rigid Linen Coffret with Gold Foil",
      "Ideal for: Gifting & Brand Discovery"
    ],
    "image": "/images/perfumes/perfume_discovery_set.png"
  },
  {
    "id": "perfume-gift-2",
    "name": "Royal Gold Trio Coffret",
    "category": "perfumes",
    "subCategory": "Gift Boxes",
    "description": "An opulent gift collection featuring three 50ml Extrait de Parfum creations in a handcrafted satin-lined box.",
    "price": 390,
    "features": [
      "Includes: 3 x 50ml Extrait de Parfum Flacons",
      "Presentation: Dark Olive & Gold Embossed Box",
      "Concentration: High Extrait Concentration (30%)"
    ],
    "image": "/images/perfumes/perfume_trio_coffret.png"
  },
  {
    "id": "perfume-combo-1",
    "name": "The Ultimate Trail Set",
    "category": "perfumes",
    "subCategory": "Combined Sets",
    "description": "The complete luxury ritual featuring a 100ml fragrance, 15ml pure perfume oil absolute, and pocket atomizer.",
    "price": 450,
    "features": [
      "Includes: 100ml EDP, 15ml Oil Absolute, Pocket Spray",
      "Finish: Refillable Gold Travel Spray Included",
      "Sillage: Long-lasting Layering Scent Trail"
    ],
    "image": "/images/perfumes/perfume_ultimate_trail.png"
  },
  {
    "id": "perfume-extrait-1",
    "name": "L'Étoile Originelle Intense",
    "category": "perfumes",
    "subCategory": "Extrait de Parfum",
    "description": "Our legendary signature scent elevated to 30% concentration, with smoked amber crystals and vanilla pod infusion.",
    "price": 235,
    "features": [
      "Notes: Double Grasse Jasmine, Smoked Amber, Vanilla",
      "Concentration: Extrait de Parfum (30%)",
      "Volume: 100ml Frosted Crystal Flacon"
    ],
    "image": "/images/perfumes/perfume_originelle_intense.png"
  },
  {
    "id": "perfume-extrait-2",
    "name": "Oud Supreme Monolith",
    "category": "perfumes",
    "subCategory": "Extrait de Parfum",
    "description": "Rare aged Cambodian oud wood enveloped in dark Damask rose absolute, smoked incense, and golden resin.",
    "price": 260,
    "features": [
      "Notes: Aged Cambodian Oud, Rose Absolute, Incense",
      "Concentration: Pure Extrait (35%)",
      "Volume: 100ml Obsidian Glass Flacon"
    ],
    "image": "/images/perfumes/perfume_oud_supreme.png"
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
    "id": "pump-2",
    "name": "Fine Mist Atomizer",
    "category": "pumps",
    "subCategory": "Premium",
    "description": "Delivers a wide, ultra-fine continuous mist for a luxurious application."
  },
  {
    "id": "pump-3",
    "name": "Low-Profile Gold Pump",
    "category": "pumps",
    "subCategory": "Aesthetic",
    "description": "Minimalist collar and actuator designed to sit flush against the bottle."
  }
];
