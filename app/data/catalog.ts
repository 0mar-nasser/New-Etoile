import catalogData from "./catalog.json";

export interface CatalogItem {
  id: string;
  name: string;
  category: "perfumes" | "bottles" | "caps" | "pumps";
  subCategory?: string;
  description: string;
  price?: number;
  features?: string[];
  image?: string;
}

export const CATALOG_ITEMS: CatalogItem[] = catalogData as CatalogItem[];

export function getCatalogItemById(id: string): CatalogItem | undefined {
  return CATALOG_ITEMS.find((item) => item.id === id);
}

export function getCatalogItemsByCategory(category: string): CatalogItem[] {
  return CATALOG_ITEMS.filter((item) => item.category === category);
}
