"use server";

import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";
import { CatalogItem } from "../data/catalog";
import { checkAdminSession } from "./admin-auth";

const CATALOG_FILE_PATH = path.join(process.cwd(), "app", "data", "catalog.json");

function readCatalog(): CatalogItem[] {
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

function writeCatalog(items: CatalogItem[]): boolean {
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
    const items = readCatalog();
    return { success: true, data: items };
  } catch {
    return { success: false, data: [], error: "فشل تحميل الكتالوج" };
  }
}

export async function getAdminProductById(id: string): Promise<{ success: boolean; data?: CatalogItem; error?: string }> {
  try {
    const items = readCatalog();
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
    const items = readCatalog();
    
    // Generate a unique ID based on category
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

    // Prepend new item to the top
    items.unshift(newItem);
    const saved = writeCatalog(items);

    if (!saved) {
      return { success: false, error: "فشل حفظ المنتج في ملف البيانات." };
    }

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
    const items = readCatalog();
    const index = items.findIndex((i) => i.id === id);

    if (index === -1) {
      return { success: false, error: "المنتج غير موجود." };
    }

    items[index] = {
      ...items[index],
      ...updatedData,
      id, // ensure ID cannot be corrupted
      price: updatedData.price !== undefined ? Number(updatedData.price) : items[index].price,
    };

    const saved = writeCatalog(items);
    if (!saved) {
      return { success: false, error: "فشل حفظ التعديلات." };
    }

    revalidatePath("/collections");
    revalidatePath(`/collections/${id}`);
    revalidatePath("/admin/products");
    revalidatePath(`/admin/products/${id}`);
    revalidatePath("/admin");

    return { success: true, data: items[index] };
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
    const items = readCatalog();
    const filtered = items.filter((i) => i.id !== id);

    if (filtered.length === items.length) {
      return { success: false, error: "المنتج المطلوب حذفه غير موجود." };
    }

    const saved = writeCatalog(filtered);
    if (!saved) {
      return { success: false, error: "فشل حذف المنتج." };
    }

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
    const items = readCatalog();
    const index = items.findIndex((i) => i.id === id);
    if (index === -1) {
      return { success: false, error: "المنتج غير موجود." };
    }

    items[index].price = Number(newPrice);
    writeCatalog(items);

    revalidatePath("/collections");
    revalidatePath("/admin/products");
    return { success: true };
  } catch {
    return { success: false, error: "فشل تحديث السعر" };
  }
}

export async function getCatalogStats() {
  const items = readCatalog();
  const totalCount = items.length;

  const categoryCounts = {
    perfumes: items.filter((i) => i.category === "perfumes").length,
    bottles: items.filter((i) => i.category === "bottles").length,
    caps: items.filter((i) => i.category === "caps").length,
    pumps: items.filter((i) => i.category === "pumps").length,
  };

  const subCategories = Array.from(new Set(items.map((i) => i.subCategory).filter(Boolean))) as string[];

  const prices = items.map((i) => i.price || 0).filter((p) => p > 0);
  const avgPrice = prices.length ? Math.round(prices.reduce((a, b) => a + b, 0) / prices.length) : 0;
  const minPrice = prices.length ? Math.min(...prices) : 0;
  const maxPrice = prices.length ? Math.max(...prices) : 0;

  return {
    totalCount,
    categoryCounts,
    subCategoriesCount: subCategories.length,
    subCategories,
    avgPrice,
    minPrice,
    maxPrice,
  };
}
