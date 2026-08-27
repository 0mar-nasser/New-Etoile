"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { CatalogItem } from "@/app/data/catalog";
import { getAdminCatalog, deleteAdminProduct, quickUpdatePrice } from "@/app/actions/admin-catalog";
import ProductModal from "@/app/components/admin/ProductModal";

export default function AdminProductsPage() {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters & Search
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<CatalogItem | null>(null);

  // Quick Price Editing inline state
  const [editingPriceId, setEditingPriceId] = useState<string | null>(null);
  const [tempPrice, setTempPrice] = useState<number | string>("");

  // Delete confirm state
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    const res = await getAdminCatalog();
    if (res.success && res.data) {
      setItems(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Unique subcategories list
  const subCategories = useMemo(() => {
    return Array.from(new Set(items.map((i) => i.subCategory).filter(Boolean))) as string[];
  }, [items]);

  // Filtered & Sorted items
  const filteredItems = useMemo(() => {
    let result = items.filter((item) => {
      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase()) ||
        (item.subCategory && item.subCategory.toLowerCase().includes(search.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(search.toLowerCase()));

      const matchCat = selectedCategory === "all" || item.category === selectedCategory;
      const matchSub = selectedSubCategory === "all" || item.subCategory === selectedSubCategory;

      return matchSearch && matchCat && matchSub;
    });

    if (sortBy === "price-asc") {
      result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name, "ar"));
    }

    return result;
  }, [items, search, selectedCategory, selectedSubCategory, sortBy]);

  // Total pages
  const totalPages = Math.ceil(filteredItems.length / pageSize) || 1;
  const paginatedItems = filteredItems.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: CatalogItem) => {
    setEditingProduct(item);
    setIsModalOpen(true);
  };

  const handleModalSuccess = (savedItem: CatalogItem) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === savedItem.id);
      if (idx >= 0) {
        const updated = [...prev];
        updated[idx] = savedItem;
        return updated;
      } else {
        return [savedItem, ...prev];
      }
    });
  };

  const handleQuickPriceSave = async (id: string) => {
    if (tempPrice === "" || isNaN(Number(tempPrice))) {
      setEditingPriceId(null);
      return;
    }
    const num = Number(tempPrice);
    const res = await quickUpdatePrice(id, num);
    if (res.success) {
      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, price: num } : i))
      );
    }
    setEditingPriceId(null);
  };

  const handleDelete = async (id: string) => {
    setDeleteLoading(true);
    const res = await deleteAdminProduct(id);
    if (res.success) {
      setItems((prev) => prev.filter((i) => i.id !== id));
      setDeletingId(null);
    }
    setDeleteLoading(false);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `etoile_catalog_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "perfumes":
        return <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-amber-950/40 text-amber-300 border border-amber-800/40">زيوت وعطور</span>;
      case "bottles":
        return <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-emerald-950/40 text-emerald-300 border border-emerald-800/40">قوارير وزجاج</span>;
      case "caps":
        return <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-purple-950/40 text-purple-300 border border-purple-800/40">أغطية فاخرة</span>;
      case "pumps":
        return <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-blue-950/40 text-blue-300 border border-blue-800/40">مضخات وكبس</span>;
      default:
        return <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-gray-800 text-gray-300">{category}</span>;
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header & Main Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-[#F4F2E8]">
            إدارة الكتالوج والمنتجات
          </h1>
          <p className="text-xs text-[#E7DFC9]/60 mt-1">
            إجمالي الأصناف المتوفرة: <span className="text-[#C8A76A] font-bold">{items.length}</span> صنف
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleExportJSON}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1D2418] border border-[#384233] text-[#E7DFC9] hover:text-[#C8A76A] text-xs font-medium transition-all"
            title="تصدير نسخة احتياطية من الكتالوج"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>تصدير الكتالوج (JSON)</span>
          </button>

          <button
            onClick={handleOpenAddModal}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C8A76A] to-[#D4AF37] text-[#141A12] font-bold text-xs shadow-lg shadow-[#C8A76A]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            <span>+ إضافة منتج جديد</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#141A12] border border-[#263120] p-4 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="بحث بالاسم، الكود، أو الوصف..."
            className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-2.5 text-xs text-[#F4F2E8] placeholder:text-[#E7DFC9]/40 pr-9"
          />
          <svg className="w-4 h-4 text-[#E7DFC9]/40 absolute right-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-3 py-2.5 text-xs text-[#F4F2E8]"
        >
          <option value="all">كافة الأقسام الرئيسية</option>
          <option value="perfumes">زيوت وعطور فرنسية</option>
          <option value="bottles">قوارير وزجاجات</option>
          <option value="caps">أغطية فاخرة</option>
          <option value="pumps">مضخات وبخاخات</option>
        </select>

        {/* SubCategory Filter */}
        <select
          value={selectedSubCategory}
          onChange={(e) => {
            setSelectedSubCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-3 py-2.5 text-xs text-[#F4F2E8]"
        >
          <option value="all">كافة التصنيفات الفرعية</option>
          {subCategories.map((sub, i) => (
            <option key={i} value={sub}>
              {sub}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-3 py-2.5 text-xs text-[#F4F2E8]"
        >
          <option value="default">الترتيب الافتراضي</option>
          <option value="name-asc">الاسم (أ - ي)</option>
          <option value="price-asc">السعر: من الأقل للأعلى</option>
          <option value="price-desc">السعر: من الأعلى للأقل</option>
        </select>
      </div>

      {/* Products Table Card */}
      <div className="bg-[#141A12] border border-[#263120] rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-[#10150E] border-b border-[#263120] text-[#E7DFC9]/60 uppercase">
                <th className="py-4 px-4 font-medium">المنتج والرمز</th>
                <th className="py-4 px-4 font-medium">القسم والتصنيف</th>
                <th className="py-4 px-4 font-medium">السعر ($)</th>
                <th className="py-4 px-4 font-medium">المواصفات والخصائص</th>
                <th className="py-4 px-4 font-medium text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#263120]">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-16 text-center text-[#E7DFC9]/60">
                    جاري تحميل قائمة المنتجات...
                  </td>
                </tr>
              ) : paginatedItems.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-16 text-center text-[#E7DFC9]/60">
                    لا توجد منتجات تطابق الفلاتر المحددة
                  </td>
                </tr>
              ) : (
                paginatedItems.map((item) => (
                  <tr key={item.id} className="hover:bg-[#1D2418]/50 transition-colors group">
                    {/* Item Name, Image, and ID */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black/40 border border-[#384233] flex-shrink-0">
                          <Image
                            src={item.image || "/images/perfumes/perfume_originelle.png"}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="min-w-0 max-w-sm md:max-w-md">
                          <p className="font-semibold text-[#F4F2E8] group-hover:text-[#C8A76A] transition-colors truncate">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-[#E7DFC9]/50 font-mono mt-0.5">
                            ID: <span className="text-[#C8A76A]">{item.id}</span>
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3.5 px-4 space-y-1">
                      <div>{getCategoryBadge(item.category)}</div>
                      {item.subCategory && (
                        <p className="text-[10px] text-[#E7DFC9]/60 truncate max-w-[140px]">
                          {item.subCategory}
                        </p>
                      )}
                    </td>

                    {/* Price Inline Editable */}
                    <td className="py-3.5 px-4">
                      {editingPriceId === item.id ? (
                        <div className="flex items-center gap-1.5">
                          <input
                            type="number"
                            autoFocus
                            value={tempPrice}
                            onChange={(e) => setTempPrice(e.target.value)}
                            className="w-20 bg-[#0E130C] border border-[#C8A76A] rounded px-2 py-1 text-xs text-[#F4F2E8]"
                          />
                          <button
                            onClick={() => handleQuickPriceSave(item.id)}
                            className="text-xs text-emerald-400 hover:text-emerald-300 font-bold"
                          >
                            ✓
                          </button>
                          <button
                            onClick={() => setEditingPriceId(null)}
                            className="text-xs text-red-400 hover:text-red-300"
                          >
                            ✕
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            setEditingPriceId(item.id);
                            setTempPrice(item.price || 0);
                          }}
                          className="flex items-center gap-1.5 cursor-pointer group/price hover:text-[#C8A76A]"
                          title="اضغط للتعديل السريع"
                        >
                          <span className="font-mono font-bold text-sm text-[#F4F2E8]">
                            ${item.price ?? 0}
                          </span>
                          <span className="text-[10px] text-[#C8A76A] opacity-0 group-hover/price:opacity-100 transition-opacity">
                            ✏️
                          </span>
                        </div>
                      )}
                    </td>

                    {/* Features count & snippets */}
                    <td className="py-3.5 px-4 text-[#E7DFC9]/70">
                      {item.features && item.features.length > 0 ? (
                        <div className="space-y-1">
                          <span className="bg-[#1D2418] px-2 py-0.5 rounded text-[10px] border border-[#384233] text-[#C8A76A]">
                            {item.features.length} ميزات
                          </span>
                          <p className="text-[10px] text-[#E7DFC9]/60 truncate max-w-xs">
                            {item.features[0]}
                          </p>
                        </div>
                      ) : (
                        <span className="text-[10px] text-[#E7DFC9]/30">بدون ميزات إضافية</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {/* Edit Button */}
                        <button
                          onClick={() => handleOpenEditModal(item)}
                          className="p-2 rounded-xl bg-[#1D2418] hover:bg-[#C8A76A]/20 hover:text-[#C8A76A] border border-[#384233] text-[#E7DFC9] transition-colors"
                          title="تعديل المنتج"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>

                        {/* View in Store Button */}
                        <Link
                          href={`/collections/${item.id}`}
                          target="_blank"
                          className="p-2 rounded-xl bg-[#1D2418] hover:bg-[#C8A76A]/20 hover:text-[#C8A76A] border border-[#384233] text-[#E7DFC9] transition-colors"
                          title="معاينة في المتجر"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </Link>

                        {/* Delete Button */}
                        <button
                          onClick={() => setDeletingId(item.id)}
                          className="p-2 rounded-xl bg-[#1D2418] hover:bg-red-950/60 hover:text-red-300 border border-[#384233] text-red-400/80 transition-colors"
                          title="حذف الصنف"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="p-4 border-t border-[#263120] bg-[#10150E] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#E7DFC9]/60">
              عرض {((currentPage - 1) * pageSize) + 1} إلى {Math.min(currentPage * pageSize, filteredItems.length)} من أصل {filteredItems.length} منتج
            </p>

            <div className="flex items-center gap-1.5">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="px-3 py-1.5 rounded-lg bg-[#1D2418] border border-[#384233] text-xs text-[#E7DFC9] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#C8A76A]"
              >
                السابق
              </button>

              <div className="flex items-center gap-1 px-2">
                <span className="text-xs text-[#C8A76A] font-bold">{currentPage}</span>
                <span className="text-xs text-[#E7DFC9]/40">/</span>
                <span className="text-xs text-[#E7DFC9]/70">{totalPages}</span>
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                className="px-3 py-1.5 rounded-lg bg-[#1D2418] border border-[#384233] text-xs text-[#E7DFC9] disabled:opacity-30 disabled:cursor-not-allowed hover:text-[#C8A76A]"
              >
                التالي
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deletingId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#141A12] border border-red-500/40 rounded-2xl p-6 max-w-sm w-full space-y-4 text-right">
            <h3 className="text-base font-bold text-red-300">تأكيد حذف الصنف</h3>
            <p className="text-xs text-[#E7DFC9]/80 leading-relaxed">
              هل أنت متأكد من رغبتك في إزالة هذا المنتج نهائياً من الكتالوج؟
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setDeletingId(null)}
                className="px-4 py-2 rounded-xl border border-[#384233] text-xs text-[#E7DFC9] hover:bg-[#1D2418]"
              >
                إلغاء
              </button>
              <button
                disabled={deleteLoading}
                onClick={() => handleDelete(deletingId)}
                className="px-4 py-2 rounded-xl bg-red-800 hover:bg-red-700 text-white text-xs font-semibold"
              >
                {deleteLoading ? "جاري الحذف..." : "نعم، احذف"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Add/Edit Modal */}
      <ProductModal
        isOpen={isModalOpen}
        product={editingProduct}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
    </div>
  );
}
