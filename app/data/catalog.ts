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
  // PERFUMES
  {
    id: "perfume-individual-1",
    name: "L'Étoile Originelle",
    category: "perfumes",
    subCategory: "Individual Bottles",
    description: "Our signature floral woody fragrance featuring Grasse jasmine and warm amber.",
    price: 185,
  },
  {
    id: "perfume-individual-2",
    name: "Bois de Nuit",
    category: "perfumes",
    subCategory: "Individual Bottles",
    description: "Deep and seductive scent with notes of Tuscan leather and Virginia cedarwood.",
    price: 195,
  },
  {
    id: "perfume-gift-1",
    name: "Signature Discovery Set",
    category: "perfumes",
    subCategory: "Gift Boxes",
    description: "A beautifully curated box of our 3 most iconic 50ml fragrances.",
    price: 350,
  },
  {
    id: "perfume-combo-1",
    name: "The Ultimate Trail",
    category: "perfumes",
    subCategory: "Combined Sets",
    description: "A complete set featuring a 100ml fragrance, pure absolute oil, and luxury travel spray.",
    price: 450,
  },

  // BOTTLES
  // Normal Bottles
  {
    id: "bottle-normal-30",
    name: "Classic Cylinder - 30ml",
    category: "bottles",
    subCategory: "Normal Bottle",
    description: "A timeless, straight-walled cylindrical glass bottle ideal for travel sizes.",
    features: ["Capacity: 30ml", "Finish: Clear Glass", "Neck: Crimp 15mm"],
    image: "/images/Bottles/photo_1_2026-07-22_23-11-04.jpg"
  },
  {
    id: "bottle-normal-100",
    name: "Square Minimal - 100ml",
    category: "bottles",
    subCategory: "Normal Bottle",
    description: "Clean, modern square profile perfect for contemporary brands.",
    features: ["Capacity: 100ml", "Finish: Matte Frosted", "Neck: Crimp 15mm"],
    image: "/images/Bottles/photo_2_2026-07-22_23-11-04.jpg"
  },
  {
    id: "bottle-normal-150",
    name: "Linear Essence - 150ml",
    category: "bottles",
    subCategory: "Normal Bottle",
    description: "Elegant tall rectangular profile with structured shoulders.",
    features: ["Capacity: 150ml", "Finish: Amber Glass", "Neck: Screw 15mm"],
    image: "/images/Bottles/photo_3_2026-07-22_23-11-04.jpg"
  },

  // Polished Bottles
  {
    id: "bottle-polished-50",
    name: "Prism Elegance - 50ml",
    category: "bottles",
    subCategory: "Polished Bottle",
    description: "High-polish multi-faceted bottle that captures and reflects light beautifully.",
    features: ["Capacity: 50ml", "Finish: High Polish", "Neck: Screw 15mm"],
    image: "/images/Bottles/photo_4_2026-07-22_23-11-04.jpg"
  },
  {
    id: "bottle-polished-75",
    name: "Diamond Cut - 75ml",
    category: "bottles",
    subCategory: "Polished Bottle",
    description: "Exquisite diamond-cut pattern offering a highly tactile luxury experience.",
    features: ["Capacity: 75ml", "Finish: Fire-polished Crystal", "Neck: Crimp 15mm"],
    image: "/images/Bottles/photo_5_2026-07-22_23-11-04.jpg"
  },
  {
    id: "bottle-polished-100",
    name: "Orbital Lustre - 100ml",
    category: "bottles",
    subCategory: "Polished Bottle",
    description: "Spherical silhouette with a hand-polished, ultra-glossy exterior.",
    features: ["Capacity: 100ml", "Finish: High-gloss Clear", "Neck: Screw 15mm"],
    image: "/images/Bottles/photo_6_2026-07-22_23-11-04.jpg"
  },

  // VIP Bottles
  {
    id: "bottle-vip-100",
    name: "Crown Jewel - 100ml",
    category: "bottles",
    subCategory: "VIP Bottle",
    description: "Heavyweight crystal-clear glass with an ultra-thick base for a premium feel.",
    features: ["Capacity: 100ml", "Finish: Premium Crystal Clear", "Neck: Crimp 15mm"],
    image: "/images/Bottles/photo_7_2026-07-22_23-11-04.jpg"
  },
  {
    id: "bottle-vip-200",
    name: "Heritage Decanter - 200ml",
    category: "bottles",
    subCategory: "VIP Bottle",
    description: "Oversized luxury decanter style bottle for exclusive and niche collections.",
    features: ["Capacity: 200ml", "Finish: Fire-polished", "Neck: Crimp 20mm"],
    image: "/images/Bottles/photo_8_2026-07-22_23-11-04.jpg"
  },
  {
    id: "bottle-vip-250",
    name: "Imperial Flask - 250ml",
    category: "bottles",
    subCategory: "VIP Bottle",
    description: "Bold flask architecture designed for VIP clients and limited runs.",
    features: ["Capacity: 250ml", "Finish: Platinum Coating", "Neck: Crimp 20mm"],
    image: "/images/Bottles/photo_9_2026-07-22_23-11-04.jpg"
  },

  // CAPS
  {
    id: "cap-plastic-1",
    name: "Essential Surlyn Cap",
    category: "caps",
    subCategory: "Plastic Caps",
    description: "High-clarity Surlyn cap offering a glass-like appearance with durability.",
    image: "/images/caps/1.jpg",
  },
  {
    id: "cap-wood-1",
    name: "Ash Wood Cylinder",
    category: "caps",
    subCategory: "Wood Caps",
    description: "Sustainably sourced ash wood with a smooth, tactile matte finish.",
    image: "/images/caps/2.jpg",
  },
  {
    id: "cap-zamac-1",
    name: "Heavyweight Gold Zamac",
    category: "caps",
    subCategory: "Zamac Caps",
    description: "Premium Zamac alloy cap with luxurious weight and a polished gold plating.",
    image: "/images/caps/3.jpg",
  },
  {
    id: "cap-magnetic-1",
    name: "Magnetic Click Cap",
    category: "caps",
    subCategory: "Magnetic Caps",
    description: "Features a satisfying magnetic closure that self-aligns perfectly every time.",
    image: "/images/caps/4.jpg",
  },
  {
    id: "cap-ceramic-1",
    name: "White Porcelain Dome",
    category: "caps",
    subCategory: "Ceramic Caps",
    description: "Elegant, cool-to-the-touch ceramic cap with a glossy white glaze.",
    image: "/images/caps/5.jpg",
  },

  // PUMPS
  {
    id: "pump-1",
    name: "Invisible Dip Tube Pump",
    category: "pumps",
    subCategory: "Standard",
    description: "Advanced pump system featuring a tube that becomes invisible in liquid.",
  },
  {
    id: "pump-2",
    name: "Fine Mist Atomizer",
    category: "pumps",
    subCategory: "Premium",
    description: "Delivers a wide, ultra-fine continuous mist for a luxurious application.",
  },
  {
    id: "pump-3",
    name: "Low-Profile Gold Pump",
    category: "pumps",
    subCategory: "Aesthetic",
    description: "Minimalist collar and actuator designed to sit flush against the bottle.",
  }
];
