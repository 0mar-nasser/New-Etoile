const fs = require('fs');
const path = require('path');

const bottlesDir = path.join(__dirname, '../public/images/Bottles');
const files = fs.readdirSync(bottlesDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

// Sort files numerically by photo index: photo_X_...
files.sort((a, b) => {
  const numA = parseInt(a.match(/photo_(\d+)_/)?.[1] || '0', 10);
  const numB = parseInt(b.match(/photo_(\d+)_/)?.[1] || '0', 10);
  return numA - numB;
});

const volumes = ['30ml', '50ml', '75ml', '100ml', '150ml'];
const styles = ['Classic Cylinder', 'Square Minimal', 'Linear Essence', 'Prism Elegance', 'Diamond Cut', 'Orbital Lustre', 'Crown Jewel', 'Imperial Flask', 'Architectural Curve', 'Nordic Monolith', 'Crystal Arch', 'Emerald Pillar', 'Opulent Oval', 'Sovereign Column'];
const finishes = ['Clear Glass', 'High Polish', 'Matte Frosted', 'Amber Glass', 'Smoky Quartz', 'Midnight Black', 'Fire-polished Crystal'];

const items = files.map((file, index) => {
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

console.log(JSON.stringify(items, null, 2));
