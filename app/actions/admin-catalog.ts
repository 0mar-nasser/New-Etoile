"use server";

import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import prisma from "@/app/lib/prisma";
import { CatalogItem } from "../data/catalog";
import { checkAdminSession } from "./admin-auth";

const CATALOG_FILE_PATH = path.join(process.cwd(), "app", "data", "catalog.json");

function readCatalogFile(): CatalogItem[] {
  try {
    if (!fs.existsSync(CATALOG_FILE_PATH)) {
      return [];
    }
    const content = fs.readFileSync(CATALOG_FILE_PATH, "utf-8");
    return JSON.parse(content) as CatalogItem[];
  } catch (error) {
    console.error("Error reading catalog file:", error);
    return [];
  }
}

function writeCatalogFile(items: CatalogItem[]): boolean {
  try {
    fs.writeFileSync(CATALOG_FILE_PATH, JSON.stringify(items, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing to catalog file:", error);
    return false;
  }
}

export async function getAdminCatalog(): Promise<{ success: boolean; data: CatalogItem[]; error?: string }> {
  try {
    // 1. Try fetching from PostgreSQL via Prisma
    const dbProducts = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });

    if (dbProducts && dbProducts.length > 0) {
      const formatted: CatalogItem[] = dbProducts.map((p) => ({
        id: p.id,
        name: p.name,
        category: p.category as any,
        subCategory: p.subCategory || undefined,
        description: p.description,
        price: p.price,
        features: p.features,
        image: p.image,
      }));
      return { success: true, data: formatted };
    }
  } catch {
    // Fallback to local JSON if DB is not reachable
  }

  // 2. Fallback to local JSON storage
  try {
    const items = readCatalogFile();
    return { success: true, data: items };
  } catch {
    return { success: false, data: [], error: "فشل تحميل الكتالوج" };
  }
}

export async function getAdminProductById(id: string): Promise<{ success: boolean; data?: CatalogItem; error?: string }> {
  try {
    const dbProduct = await prisma.product.findUnique({
      where: { id },
    });

    if (dbProduct) {
      return {
        success: true,
        data: {
          id: dbProduct.id,
          name: dbProduct.name,
          category: dbProduct.category as any,
          subCategory: dbProduct.subCategory || undefined,
          description: dbProduct.description,
          price: dbProduct.price,
          features: dbProduct.features,
          image: dbProduct.image,
        },
      };
    }
  } catch {
    // Fallback to local JSON
  }

  try {
    const items = readCatalogFile();
    const item = items.find((i) => i.id === id);
    if (!item) {
      return { success: false, error: "المنتج غير موجود" };
    }
    return { success: true, data: item };
  } catch {
    return { success: false, error: "حدث خطأ أثناء جلب المنتج" };
  }
}

export async function createAdminProduct(productData: {
  name: string;
  category: "perfumes" | "bottles" | "caps" | "pumps";
  subCategory?: string;
  description: string;
  price?: number;
  features?: string[];
  image?: string;
}): Promise<{ success: boolean; data?: CatalogItem; error?: string }> {
  const isAuth = await checkAdminSession();
  if (!isAuth) {
    return { success: false, error: "غير مصرح لك بإجراء هذا التعديل. يرجى تسجيل الدخول أولاً." };
  }

  if (!productData.name || !productData.category) {
    return { success: false, error: "يرجى ملء الحقول الإجبارية (الاسم والفئة)." };
  }

  try {
    const prefixMap: Record<string, string> = {
      perfumes: "oil",
      bottles: "bottle",
      caps: "cap",
      pumps: "pump",
    };
    const prefix = prefixMap[productData.category] || "item";
    const newId = `${prefix}-${Date.now().toString().slice(-6)}`;

    const newItem: CatalogItem = {
      id: newId,
      name: productData.name.trim(),
      category: productData.category,
      subCategory: productData.subCategory?.trim() || undefined,
      description: productData.description?.trim() || "",
      price: productData.price !== undefined ? Number(productData.price) : 0,
      features: productData.features && productData.features.length > 0 ? productData.features : [],
      image: productData.image?.trim() || "/images/perfumes/perfume_originelle.png",
    };

    // 1. Try PostgreSQL insertion
    try {
      await prisma.product.create({
        data: {
          id: newItem.id,
          name: newItem.name,
          category: newItem.category,
          subCategory: newItem.subCategory || null,
          description: newItem.description,
          price: newItem.price || 0,
          features: newItem.features || [],
          image: newItem.image || "/images/perfumes/perfume_originelle.png",
          inStock: true,
        },
      });
    } catch (dbErr) {
      console.warn("PostgreSQL create product skipped/failed, syncing with file storage:", dbErr);
    }

    // 2. Also keep local JSON in sync
    const items = readCatalogFile();
    items.unshift(newItem);
    writeCatalogFile(items);

    revalidatePath("/collections");
    revalidatePath("/admin/products");
    revalidatePath("/admin");

    return { success: true, data: newItem };
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, error: "حدث خطأ أثناء إنشاء المنتج" };
  }
}

export async function updateAdminProduct(
  id: string,
  updatedData: Partial<CatalogItem>
): Promise<{ success: boolean; data?: CatalogItem; error?: string }> {
  const isAuth = await checkAdminSession();
  if (!isAuth) {
    return { success: false, error: "غير مصرح لك بإجراء هذا التعديل. يرجى تسجيل الدخول أولاً." };
  }

  try {
    // 1. Try PostgreSQL update
    try {
      await prisma.product.update({
        where: { id },
        data: {
          name: updatedData.name,
          category: updatedData.category,
          subCategory: updatedData.subCategory !== undefined ? updatedData.subCategory : undefined,
          description: updatedData.description,
          price: updatedData.price !== undefined ? Number(updatedData.price) : undefined,
          features: updatedData.features,
          image: updatedData.image,
        },
      });
    } catch (dbErr) {
      console.warn("PostgreSQL update product skipped/failed, syncing with file storage:", dbErr);
    }

    // 2. Sync local JSON
    const items = readCatalogFile();
    const index = items.findIndex((i) => i.id === id);

    if (index !== -1) {
      items[index] = {
        ...items[index],
        ...updatedData,
        id,
        price: updatedData.price !== undefined ? Number(updatedData.price) : items[index].price,
      };
      writeCatalogFile(items);
    }

    revalidatePath("/collections");
    revalidatePath(`/collections/${id}`);
    revalidatePath("/admin/products");
    revalidatePath(`/admin/products/${id}`);
    revalidatePath("/admin");

    const returnItem = items[index] || { id, ...updatedData } as CatalogItem;
    return { success: true, data: returnItem };
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false, error: "حدث خطأ أثناء تعديل المنتج" };
  }
}

export async function deleteAdminProduct(id: string): Promise<{ success: boolean; error?: string }> {
  const isAuth = await checkAdminSession();
  if (!isAuth) {
    return { success: false, error: "غير مصرح لك بإجراء هذا التعديل. يرجى تسجيل الدخول أولاً." };
  }

  try {
    // 1. Try PostgreSQL delete
    try {
      await prisma.product.delete({
        where: { id },
      });
    } catch (dbErr) {
      console.warn("PostgreSQL delete product skipped/failed, syncing with file storage:", dbErr);
    }

    // 2. Sync local JSON
    const items = readCatalogFile();
    const filtered = items.filter((i) => i.id !== id);
    writeCatalogFile(filtered);

    revalidatePath("/collections");
    revalidatePath("/admin/products");
    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, error: "حدث خطأ أثناء حذف المنتج" };
  }
}

export async function quickUpdatePrice(id: string, newPrice: number): Promise<{ success: boolean; error?: string }> {
  const isAuth = await checkAdminSession();
  if (!isAuth) {
    return { success: false, error: "غير مصرح لك بالتعديل." };
  }

  try {
    const num = Number(newPrice);

    // 1. Try PostgreSQL
    try {
      await prisma.product.update({
        where: { id },
        data: { price: num },
      });
    } catch (dbErr) {
      console.warn("PostgreSQL update price skipped/failed:", dbErr);
    }

    // 2. Sync local JSON
    const items = readCatalogFile();
    const index = items.findIndex((i) => i.id === id);
    if (index !== -1) {
      items[index].price = num;
      writeCatalogFile(items);
    }

    revalidatePath("/collections");
    revalidatePath("/admin/products");
    return { success: true };
  } catch {
    return { success: false, error: "فشل تحديث السعر" };
  }
}
