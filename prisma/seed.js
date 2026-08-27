const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting PostgreSQL database seeding for L'Étoile...");

  // 1. Seed Admin User
  const adminEmail = "admin@etoile-parfum.com";
  const passwordHash = await bcrypt.hash("etoile2026", 10);

  const admin = await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: { passwordHash },
    create: {
      email: adminEmail,
      name: "Etoile Admin",
      passwordHash,
      role: "SUPERADMIN",
    },
  });
  console.log(`✓ Admin user configured: ${admin.email}`);

  // 2. Load Catalog Items
  const catalogPath = path.join(__dirname, "../app/data/catalog.json");
  if (fs.existsSync(catalogPath)) {
    const rawData = fs.readFileSync(catalogPath, "utf-8");
    const items = JSON.parse(rawData);

    console.log(`📦 Seeding ${items.length} catalog products into PostgreSQL...`);

    let count = 0;
    for (const item of items) {
      await prisma.product.upsert({
        where: { id: item.id },
        update: {
          name: item.name,
          category: item.category,
          subCategory: item.subCategory || null,
          description: item.description || "",
          price: item.price ? Number(item.price) : 0,
          features: Array.isArray(item.features) ? item.features : [],
          image: item.image || "/images/perfumes/perfume_originelle.png",
          inStock: true,
        },
        create: {
          id: item.id,
          name: item.name,
          category: item.category,
          subCategory: item.subCategory || null,
          description: item.description || "",
          price: item.price ? Number(item.price) : 0,
          features: Array.isArray(item.features) ? item.features : [],
          image: item.image || "/images/perfumes/perfume_originelle.png",
          inStock: true,
        },
      });
      count++;
    }
    console.log(`✓ Successfully seeded ${count} products into PostgreSQL!`);
  } else {
    console.warn("⚠️ catalog.json not found, skipping products seed.");
  }

  console.log("✨ Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
