"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CatalogItem } from "@/app/data/catalog";
import { getAdminCatalog, deleteAdminProduct, quickUpdatePrice } from "@/app/actions/admin-catalog";
import ProductModal from "@/app/components/admin/ProductModal";

export default function AdminDashboardPage() {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

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

  const perfumesCount = items.filter((i) => i.category === "perfumes").length;
  const bottlesCount = items.filter((i) => i.category === "bottles").length;
  const capsCount = items.filter((i) => i.category === "caps").length;
  const pumpsCount = items.filter((i) => i.category === "pumps").length;

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.subCategory && item.subCategory.toLowerCase().includes(search.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(search.toLowerCase()));
    const matchesCat = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const recentItems = filteredItems.slice(0, 8);

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
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome & Quick Action Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-[#161F13] via-[#141A12] to-[#1D2418] border border-[#2D3A25] p-6 rounded-3xl shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#C8A76A]/20 text-[#C8A76A] border border-[#C8A76A]/30">
              Etoile Core v2.0
            </span>
            <span className="text-xs text-[#E7DFC9]/60">نظام إدارة المحتوى المباشر</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-serif text-[#F4F2E8] font-bold">
            مرحباً بك في لوحة تحكم <span className="text-[#C8A76A]">L&apos;Étoile</span>
          </h1>
          <p className="text-xs md:text-sm text-[#E7DFC9]/70">
            يمكنك من هنا إضافة الأصناف، تعديل الأسعار والمواصفات، وتنسيق الأقسام الفاخرة بسهولة.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleOpenAddModal}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#C8A76A] to-[#D4AF37] text-[#141A12] font-bold text-xs shadow-lg shadow-[#C8A76A]/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            <span>إضافة صنف جديد</span>
          </button>
          <Link
            href="/admin/products"
            className="px-4 py-3 rounded-2xl bg-[#1D2418] border border-[#384233] text-[#E7DFC9] hover:text-[#C8A76A] hover:border-[#C8A76A]/40 text-xs font-medium transition-all"
          >
            عرض كافة المنتجات ({items.length})
          </Link>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Products */}
        <div className="bg-[#141A12] border border-[#263120] p-5 rounded-2xl relative overflow-hidden group hover:border-[#C8A76A]/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#E7DFC9]/70 font-medium">إجمالي المنتجات</span>
            <div className="w-10 h-10 rounded-xl bg-[#C8A76A]/10 border border-[#C8A76A]/20 flex items-center justify-center text-[#C8A76A]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-serif font-bold text-[#F4F2E8]">
              {loading ? "..." : items.length}
            </span>
            <span className="text-xs text-[#C8A76A] mr-2">صنف مسجل</span>
          </div>
          <p className="text-[11px] text-[#E7DFC9]/50 mt-2">محفوظة ومحدثة محلياً</p>
        </div>

        {/* Card 2: Perfumes */}
        <div className="bg-[#141A12] border border-[#263120] p-5 rounded-2xl relative overflow-hidden group hover:border-amber-500/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#E7DFC9]/70 font-medium">الزيوت والعطور الفرنسية</span>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-serif font-bold text-[#F4F2E8]">
              {loading ? "..." : perfumesCount}
            </span>
            <span className="text-xs text-amber-400 mr-2">خلاصة عطرية</span>
          </div>
          <p className="text-[11px] text-[#E7DFC9]/50 mt-2">Extrait de Parfum +30%</p>
        </div>

        {/* Card 3: Bottles */}
        <div className="bg-[#141A12] border border-[#263120] p-5 rounded-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#E7DFC9]/70 font-medium">القوارير والزجاج</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-serif font-bold text-[#F4F2E8]">
              {loading ? "..." : bottlesCount}
            </span>
            <span className="text-xs text-emerald-400 mr-2">تصميم زجاجي</span>
          </div>
          <p className="text-[11px] text-[#E7DFC9]/50 mt-2">أشكال وأحجام معيارية</p>
        </div>

        {/* Card 4: Caps & Pumps */}
        <div className="bg-[#141A12] border border-[#263120] p-5 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#E7DFC9]/70 font-medium">الأغطية والمضخات</span>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-serif font-bold text-[#F4F2E8]">
              {loading ? "..." : capsCount + pumpsCount}
            </span>
            <span className="text-xs text-purple-400 mr-2">قطعة إكسسوار</span>
          </div>
          <p className="text-[11px] text-[#E7DFC9]/50 mt-2">{capsCount} غطاء • {pumpsCount} مضخة</p>
        </div>
      </div>

      {/* Distribution Overview */}
      <div className="bg-[#141A12] border border-[#263120] p-6 rounded-3xl space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-serif text-[#C8A76A] font-bold">توزيع أصناف الكتالوج</h2>
          <span className="text-xs text-[#E7DFC9]/60">إجمالي {items.length} عنصر</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="bg-[#1D2418] p-4 rounded-xl border border-[#384233] space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-[#E7DFC9]/80">الزيوت العطرية</span>
              <span className="text-[#C8A76A] font-mono font-bold">
                {items.length ? Math.round((perfumesCount / items.length) * 100) : 0}%
              </span>
            </div>
            <div className="w-full bg-[#121810] h-2 rounded-full overflow-hidden">
              <div
                className="bg-amber-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${items.length ? (perfumesCount / items.length) * 100 : 0}%` }}
              />
            </div>
          </div>

          <div className="bg-[#1D2418] p-4 rounded-xl border border-[#384233] space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-[#E7DFC9]/80">القوارير الزجاجية</span>
              <span className="text-emerald-400 font-mono font-bold">
                {items.length ? Math.round((bottlesCount / items.length) * 100) : 0}%
              </span>
            </div>
            <div className="w-full bg-[#121810] h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${items.length ? (bottlesCount / items.length) * 100 : 0}%` }}
              />
            </div>
          </div>

          <div className="bg-[#1D2418] p-4 rounded-xl border border-[#384233] space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-[#E7DFC9]/80">الأغطية الفاخرة</span>
              <span className="text-purple-400 font-mono font-bold">
                {items.length ? Math.round((capsCount / items.length) * 100) : 0}%
              </span>
            </div>
            <div className="w-full bg-[#121810] h-2 rounded-full overflow-hidden">
              <div
                className="bg-purple-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${items.length ? (capsCount / items.length) * 100 : 0}%` }}
              />
            </div>
          </div>

          <div className="bg-[#1D2418] p-4 rounded-xl border border-[#384233] space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-[#E7DFC9]/80">مضخات الكبس</span>
              <span className="text-blue-400 font-mono font-bold">
                {items.length ? Math.round((pumpsCount / items.length) * 100) : 0}%
              </span>
            </div>
            <div className="w-full bg-[#121810] h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${items.length ? (pumpsCount / items.length) * 100 : 0}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Catalog Search & Recent Products Section */}
      <div className="bg-[#141A12] border border-[#263120] rounded-3xl overflow-hidden shadow-xl">
        {/* Table Toolbar */}
        <div className="p-6 border-b border-[#263120] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-serif text-[#F4F2E8] font-bold">أحدث الأصناف في الكتالوج</h2>
            <p className="text-xs text-[#E7DFC9]/60">تحكم فوري بالأسعار والتفاصيل والصور</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[220px]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="بحث بالاسم أو الكود..."
                className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-2 text-xs text-[#F4F2E8] placeholder:text-[#E7DFC9]/40 pr-9"
              />
              <svg className="w-4 h-4 text-[#E7DFC9]/40 absolute right-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-3 py-2 text-xs text-[#F4F2E8]"
            >
              <option value="all">كافة الأقسام</option>
              <option value="perfumes">زيوت وعطور</option>
              <option value="bottles">قوارير</option>
              <option value="caps">أغطية</option>
              <option value="pumps">مضخات</option>
            </select>

            <Link
              href="/admin/products"
              className="text-xs text-[#C8A76A] hover:underline px-2"
            >
              فتح جدول الكتالوج الكامل &larr;
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-[#10150E] border-b border-[#263120] text-[#E7DFC9]/60 uppercase">
                <th className="py-3.5 px-4 font-medium">المنتج</th>
                <th className="py-3.5 px-4 font-medium">الفئة</th>
                <th className="py-3.5 px-4 font-medium">السعر</th>
                <th className="py-3.5 px-4 font-medium">المميزات</th>
                <th className="py-3.5 px-4 font-medium text-center">إجراءات سريعة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#263120]">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-[#E7DFC9]/60">
                    جاري تحميل الكتالوج...
                  </td>
                </tr>
              ) : recentItems.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-[#E7DFC9]/60">
                    لا توجد منتجات مطابقة للبحث
                  </td>
                </tr>
              ) : (
                recentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-[#1D2418]/40 transition-colors group">
                    {/* Item Name & Image */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-black/40 border border-[#384233] flex-shrink-0">
                          <Image
                            src={item.image || "/images/perfumes/perfume_originelle.png"}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-[#F4F2E8] group-hover:text-[#C8A76A] transition-colors truncate max-w-xs md:max-w-md">
                            {item.name}
                          </p>
                          <p className="text-[10px] text-[#E7DFC9]/50 font-mono">
                            ID: {item.id} {item.subCategory ? `• ${item.subCategory}` : ""}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3.5 px-4">
                      {getCategoryBadge(item.category)}
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
                          className="flex items-center gap-1 cursor-pointer group/price hover:text-[#C8A76A]"
                          title="اضغط للتعديل السريع"
                        >
                          <span className="font-mono font-bold text-sm text-[#F4F2E8]">
                            ${item.price ?? 0}
                          </span>
                          <svg className="w-3.5 h-3.5 opacity-0 group-hover/price:opacity-100 text-[#C8A76A] transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      )}
                    </td>

                    {/* Features count */}
                    <td className="py-3.5 px-4 text-[#E7DFC9]/70">
                      {item.features?.length ? (
                        <span className="bg-[#1D2418] px-2 py-1 rounded text-[10px] border border-[#384233]">
                          {item.features.length} ميزة
                        </span>
                      ) : (
                        <span className="text-[10px] text-[#E7DFC9]/30">—</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {/* Edit Button */}
                        <button
                          onClick={() => handleOpenEditModal(item)}
                          className="p-1.5 rounded-lg bg-[#1D2418] hover:bg-[#C8A76A]/20 hover:text-[#C8A76A] border border-[#384233] text-[#E7DFC9] transition-colors"
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
                          className="p-1.5 rounded-lg bg-[#1D2418] hover:bg-[#C8A76A]/20 hover:text-[#C8A76A] border border-[#384233] text-[#E7DFC9] transition-colors"
                          title="عرض في المتجر"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </Link>

                        {/* Delete Button */}
                        <button
                          onClick={() => setDeletingId(item.id)}
                          className="p-1.5 rounded-lg bg-[#1D2418] hover:bg-red-950/60 hover:text-red-300 border border-[#384233] text-red-400/80 transition-colors"
                          title="حذف المنتج"
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
