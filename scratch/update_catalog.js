const fs = require('fs');
const path = require('path');

// 1. BOTTLES
const bottlesDir = path.join(__dirname, '../public/images/Bottles');
const bottleFiles = fs.readdirSync(bottlesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

bottleFiles.sort((a, b) => {
  const numA = parseInt(a.match(/photo_(\d+)_/)?.[1] || '0', 10);
  const numB = parseInt(b.match(/photo_(\d+)_/)?.[1] || '0', 10);
  return numA - numB;
});

const volumes = ['30ml', '50ml', '75ml', '100ml', '150ml'];
const styles = [
  'Classic Cylinder', 'Square Minimal', 'Linear Essence', 'Prism Elegance', 
  'Diamond Cut', 'Orbital Lustre', 'Crown Jewel', 'Imperial Flask', 
  'Architectural Curve', 'Nordic Monolith', 'Crystal Arch', 'Emerald Pillar', 
  'Opulent Oval', 'Sovereign Column', 'Heritage Decanter', 'Majesty Flacon'
];
const finishes = [
  'Clear Glass', 'High Polish', 'Matte Frosted', 'Amber Glass', 
  'Smoky Quartz', 'Midnight Black', 'Fire-polished Crystal'
];

const bottleItems = bottleFiles.map((file, index) => {
  const num = index + 1;
  const style = styles[(num - 1) % styles.length];
  const volume = volumes[(num - 1) % volumes.length];
  const finish = finishes[(num - 1) % finishes.length];
  const price = 12 + ((num * 3) % 45);

  return {
    id: `bottle-normal-${num}`,
    name: `Étoile ${style} - ${volume}`,
    category: "bottles",
    subCategory: "Normal Bottle",
    description: `Premium luxury glass perfume bottle #${num}. Crafted with thick crystal base and precision neck finish for high-end perfumery.`,
    price: price,
    features: [`Capacity: ${volume}`, `Finish: ${finish}`, `Neck: Standard 15mm Crimp`],
    image: `/images/Bottles/${file}`
  };
});

// 2. CAPS
const capsDir = path.join(__dirname, '../public/images/caps');
const capFiles = fs.readdirSync(capsDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

capFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

const capMaterials = [
  'Zamac Alloy', 'Magnetic Gold', 'Surlyn Crystal', 'Ash Wood', 
  'Porcelain Ceramic', 'Crown Jewel Metal', 'Brushed Brass', 'Anodized Chrome'
];
const capSubCategories = ['Zamac Caps', 'Magnetic Caps', 'Plastic Caps', 'Wood Caps', 'Ceramic Caps'];

const capItems = capFiles.map((file, index) => {
  const num = index + 1;
  const material = capMaterials[(num - 1) % capMaterials.length];
  const subCat = capSubCategories[(num - 1) % capSubCategories.length];
  const price = 8 + ((num * 2) % 30);

  return {
    id: `cap-item-${num}`,
    name: `Étoile ${material} Cap #${num}`,
    category: "caps",
    subCategory: subCat,
    description: `Luxury perfume bottle cap #${num} crafted with premium ${material.toLowerCase()}. Engineered for a smooth click fit on 15mm neck bottles.`,
    price: price,
    features: [`Material: ${material}`, `Fit: Standard 15mm Neck`, `Finish: Premium Electroplated`],
    image: `/images/caps/${file}`
  };
});

// 3. PERFUMES
const perfumes = [
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
  }
];

// 4. PUMPS
const pumps = [
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

const catalogItems = [...perfumes, ...bottleItems, ...capItems, ...pumps];

const content = `export interface CatalogItem {
  id: string;
  name: string;
  category: "perfumes" | "bottles" | "caps" | "pumps";
  subCategory?: string; // e.g. "Individual", "Gift Box", "30ml", "Plastic", etc.
  description: string;
  price?: number;
  features?: string[];
  image?: string;
}

export const CATALOG_ITEMS: CatalogItem[] = ${JSON.stringify(catalogItems, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../app/data/catalog.ts'), content, 'utf8');
console.log('Successfully updated catalog.ts with ' + bottleItems.length + ' bottles and ' + capItems.length + ' caps!');
