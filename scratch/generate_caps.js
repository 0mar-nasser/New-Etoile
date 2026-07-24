const fs = require('fs');
const path = require('path');

const catalogPath = path.join(__dirname, '../app/data/catalog.ts');
const plasticDir = path.join(__dirname, '../public/images/caps/plastic');
const zamacDir = path.join(__dirname, '../public/images/caps/zamac');

const plasticFiles = fs.readdirSync(plasticDir)
  .filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.png') || f.toLowerCase().endsWith('.jpeg'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/photo_(\d+)_/)?.[1] || 0, 10);
    const numB = parseInt(b.match(/photo_(\d+)_/)?.[1] || 0, 10);
    return numA - numB;
  });

const zamacFiles = fs.readdirSync(zamacDir)
  .filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.png') || f.toLowerCase().endsWith('.jpeg'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/photo_(\d+)_/)?.[1] || 0, 10);
    const numB = parseInt(b.match(/photo_(\d+)_/)?.[1] || 0, 10);
    return numA - numB;
  });

console.log(`Found ${plasticFiles.length} plastic files, ${zamacFiles.length} zamac files`);

const plasticItems = plasticFiles.map((file, idx) => ({
  id: `cap-plastic-${idx + 1}`,
  name: `Plastic Cap #${idx + 1}`,
  category: "caps",
  subCategory: "Plastic Cap",
  description: `Luxury plastic perfume bottle cap #${idx + 1}. Crafted with premium lightweight polymer and precision neck finish for standard 15mm neck bottles.`,
  price: 8,
  features: [
    "Material: High-Grade Polymer",
    "Fit: Standard 15mm Neck",
    "Finish: Premium Polish"
  ],
  image: `/images/caps/plastic/${file}`
}));

const zamacItems = zamacFiles.map((file, idx) => ({
  id: `cap-zamac-${idx + 1}`,
  name: `Zamac Cap #${idx + 1}`,
  category: "caps",
  subCategory: "Zamac Cap",
  description: `Luxury Zamac metal alloy perfume bottle cap #${idx + 1}. Crafted with heavy zinc alloy and precision electroplated finish for 15mm neck bottles.`,
  price: 18,
  features: [
    "Material: Heavy Zamac Metal Alloy",
    "Fit: Standard 15mm Neck",
    "Finish: Electroplated Gold & Chrome"
  ],
  image: `/images/caps/zamac/${file}`
}));

const allNewCapItems = [...plasticItems, ...zamacItems];

let catalogContent = fs.readFileSync(catalogPath, 'utf8');

// Find start of cap-item-1 and end of cap-item-52
const startIndex = catalogContent.indexOf('{\n    "id": "cap-item-1"');
const endIndex = catalogContent.indexOf('{\n    "id": "pump-1"');

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find start/end markers in catalog.ts");
  process.exit(1);
}

const capItemsFormatted = allNewCapItems.map(item => JSON.stringify(item, null, 4)).join(',\n  ') + ',\n  ';

const newContent = catalogContent.slice(0, startIndex) + capItemsFormatted + catalogContent.slice(endIndex);

fs.writeFileSync(catalogPath, newContent, 'utf8');
console.log("Successfully updated app/data/catalog.ts with new plastic and zamac cap items!");
