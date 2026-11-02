"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CatalogItem } from "@/app/data/catalog";
import { getAdminCatalog, toggleShowcaseStatus } from "@/app/actions/admin-catalog";

export default function AdminShowcasePage() {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showcaseFilter, setShowcaseFilter] = useState<"all" | "newArrivals" | "mostSelected" | "any">("all");
  const [togglingId, setTogglingId] = useState<string | null>(null);

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

  const handleToggle = async (id: string, field: "isNewArrival" | "isMostSelected", currentVal: boolean) => {
    const newVal = !currentVal;
    setTogglingId(`${id}-${field}`);

    // Optimistic UI update
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: newVal } : item))
    );

    const res = await toggleShowcaseStatus(id, field, newVal);
    if (!res.success) {
      // Revert if failed
      setItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, [field]: currentVal } : item))
      );
      alert(res.error || "فشل تحديث حالة المنتج");
    }

    setTogglingId(null);
  };

  const newArrivalsList = items.filter((i) => i.isNewArrival);
  const mostSelectedList = items.filter((i) => i.isMostSelected);

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      (item.subCategory && item.subCategory.toLowerCase().includes(search.toLowerCase()));

    const matchesCat = categoryFilter === "all" || item.category === categoryFilter;

    let matchesShowcase = true;
    if (showcaseFilter === "newArrivals") matchesShowcase = !!item.isNewArrival;
    else if (showcaseFilter === "mostSelected") matchesShowcase = !!item.isMostSelected;
    else if (showcaseFilter === "any") matchesShowcase = !!item.isNewArrival || !!item.isMostSelected;

    return matchesSearch && matchesCat && matchesShowcase;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Page Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-[#182315] via-[#141A12] to-[#222B1B] border border-[#C8A76A]/30 p-6 md:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="space-y-2 z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#C8A76A]/20 text-[#C8A76A] border border-[#C8A76A]/40">
              Homepage Showcase Controller
            </span>
            <span className="text-xs text-[#E7DFC9]/60">تحكم فوري بالواجهة الرئيسية</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-serif text-[#F4F2E8] font-bold">
            إدارة أقسام <span className="text-[#C8A76A]">NEW ARRIVALS</span> و <span className="text-[#C8A76A]">MOST SELECTED</span>
          </h1>
          <p className="text-xs md:text-sm text-[#E7DFC9]/70 max-w-2xl leading-relaxed">
            حدد بضغطة زر واحدة الأصناف التي تود إبرازها للزوار في شريط <strong>وصل حديثاً</strong> أو سلايدر <strong>الأكثر طلباً</strong> في الصفحة الرئيسية للموقع.
          </p>
        </div>

        <div className="flex items-center gap-3 z-10">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#C8A76A] to-[#D4AF37] text-[#141A12] font-bold text-xs shadow-lg shadow-[#C8A76A]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>معاينة الصفحة الرئيسية &rarr;</span>
          </Link>
        </div>
      </div>

      {/* Overview Cards for the 2 Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Section 1: NEW ARRIVALS */}
        <div className="bg-[#141A12] border border-[#263120] rounded-3xl p-6 space-y-4 hover:border-[#C8A76A]/40 transition-colors shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-[#263120]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                ⚡
              </div>
              <div>
                <h2 className="text-base font-serif font-bold text-[#F4F2E8]">
                  قسم NEW ARRIVALS (وصل حديثاً)
                </h2>
                <p className="text-[11px] text-[#E7DFC9]/60">يظهر في كروت العرض الأنيقة أعلى الصفحة الرئيسية</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-950/60 text-amber-300 text-xs font-mono font-semibold border border-amber-800/40">
              {newArrivalsList.length} أصناف مفعلة
            </span>
          </div>

          {/* Active Items Mini Grid */}
          {loading ? (
            <p className="text-xs text-[#E7DFC9]/50 py-4 text-center">جاري التحميل...</p>
          ) : newArrivalsList.length === 0 ? (
            <div className="p-6 text-center bg-[#1D2418]/60 rounded-2xl border border-dashed border-[#384233]">
              <p className="text-xs text-[#E7DFC9]/60">لم يتم تفعيل أي منتج في هذا القسم بعد.</p>
              <p className="text-[11px] text-[#C8A76A] mt-1">اختر منتجات من الجدول أدناه لتفعيلها فوراً.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {newArrivalsList.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1D2418] border border-[#384233] rounded-2xl p-2.5 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-black/40 border border-[#384233]/60 mb-2">
                    <Image
                      src={item.image || "/images/perfumes/perfume_originelle.png"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={() => handleToggle(item.id, "isNewArrival", true)}
                      title="إزالة من وصل حديثاً"
                      className="absolute top-1 left-1 w-6 h-6 rounded-full bg-black/80 text-red-300 hover:bg-red-900 hover:text-white flex items-center justify-center text-xs transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-[11px] font-medium text-[#F4F2E8] truncate">{item.name}</p>
                  <span className="text-[10px] text-[#C8A76A] font-mono mt-0.5">${item.price ?? 0}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section 2: MOST SELECTED */}
        <div className="bg-[#141A12] border border-[#263120] rounded-3xl p-6 space-y-4 hover:border-[#C8A76A]/40 transition-colors shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-[#263120]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#C8A76A]/10 border border-[#C8A76A]/30 flex items-center justify-center text-[#C8A76A] font-bold">
                ⭐
              </div>
              <div>
                <h2 className="text-base font-serif font-bold text-[#F4F2E8]">
                  قسم MOST SELECTED (الأكثر طلباً)
                </h2>
                <p className="text-[11px] text-[#E7DFC9]/60">يظهر في السلايدر التفاعلي الأنيق في الصفحة الرئيسية</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#C8A76A]/20 text-[#C8A76A] text-xs font-mono font-semibold border border-[#C8A76A]/40">
              {mostSelectedList.length} أصناف مفعلة
            </span>
          </div>

          {/* Active Items Mini Grid */}
          {loading ? (
            <p className="text-xs text-[#E7DFC9]/50 py-4 text-center">جاري التحميل...</p>
          ) : mostSelectedList.length === 0 ? (
            <div className="p-6 text-center bg-[#1D2418]/60 rounded-2xl border border-dashed border-[#384233]">
              <p className="text-xs text-[#E7DFC9]/60">لم يتم تفعيل أي منتج في هذا القسم بعد.</p>
              <p className="text-[11px] text-[#C8A76A] mt-1">اختر منتجات من الجدول أدناه لتفعيلها فوراً.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {mostSelectedList.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1D2418] border border-[#384233] rounded-2xl p-2.5 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-black/40 border border-[#384233]/60 mb-2">
                    <Image
                      src={item.image || "/images/perfumes/perfume_originelle.png"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={() => handleToggle(item.id, "isMostSelected", true)}
                      title="إزالة من الأكثر طلباً"
                      className="absolute top-1 left-1 w-6 h-6 rounded-full bg-black/80 text-red-300 hover:bg-red-900 hover:text-white flex items-center justify-center text-xs transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-[11px] font-medium text-[#F4F2E8] truncate">{item.name}</p>
                  <span className="text-[10px] text-[#C8A76A] font-mono mt-0.5">${item.price ?? 0}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Interactive Catalog Picker & Toggle Table */}
      <div className="bg-[#141A12] border border-[#263120] rounded-3xl overflow-hidden shadow-xl">
        {/* Table Filter Toolbar */}
        <div className="p-6 border-b border-[#263120] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-serif text-[#F4F2E8] font-bold">
              جدول تخصيص الأقسام لكامل الكتالوج ({items.length} صنف)
            </h2>
            <p className="text-xs text-[#E7DFC9]/60 mt-0.5">
              اضغط على مفتاح التبديل بجوار أي صنف لإضافته أو حذفه فوراً من الواجهة الرئيسية
            </p>
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
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-3 py-2 text-xs text-[#F4F2E8]"
            >
              <option value="all">كافة الفئات</option>
              <option value="perfumes">زيوت وعطور</option>
              <option value="bottles">قوارير</option>
              <option value="caps">أغطية</option>
              <option value="pumps">مضخات</option>
            </select>

            {/* Showcase Status Filter */}
            <select
              value={showcaseFilter}
              onChange={(e) => setShowcaseFilter(e.target.value as any)}
              className="bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-3 py-2 text-xs text-[#F4F2E8]"
            >
              <option value="all">كافة الحالات</option>
              <option value="newArrivals">فقط المعروض في (وصل حديثاً)</option>
              <option value="mostSelected">فقط المعروض في (الأكثر طلباً)</option>
              <option value="any">المعروضين في أي قسم</option>
            </select>
          </div>
        </div>

        {/* Table Body */}
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-[#10150E] border-b border-[#263120] text-[#E7DFC9]/60 uppercase">
                <th className="py-3.5 px-4 font-medium">المنتج</th>
                <th className="py-3.5 px-4 font-medium">الفئة</th>
                <th className="py-3.5 px-4 font-medium">السعر</th>
                <th className="py-3.5 px-4 font-medium text-center">⚡ وصل حديثاً (New Arrivals)</th>
                <th className="py-3.5 px-4 font-medium text-center">⭐ الأكثر طلباً (Most Selected)</th>
                <th className="py-3.5 px-4 font-medium text-center">معاينة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#263120]">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-[#E7DFC9]/60">
                    جاري تحميل الكتالوج...
                  </td>
                </tr>
              ) : filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-[#E7DFC9]/60">
                    لا توجد منتجات مطابقة للبحث أو التصفية
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => {
                  const isNewToggling = togglingId === `${item.id}-isNewArrival`;
                  const isMostToggling = togglingId === `${item.id}-isMostSelected`;

                  return (
                    <tr key={item.id} className="hover:bg-[#1D2418]/40 transition-colors group">
                      {/* Product Name & Image */}
                      <td className="py-3 px-4">
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
                      <td className="py-3 px-4 text-[#E7DFC9]/70 font-mono text-[11px]">
                        {item.category}
                      </td>

                      {/* Price */}
                      <td className="py-3 px-4 font-mono font-bold text-[#F4F2E8]">
                        ${item.price ?? 0}
                      </td>

                      {/* Toggle 1: New Arrivals */}
                      <td className="py-3 px-4 text-center">
                        <button
                          disabled={isNewToggling}
                          onClick={() => handleToggle(item.id, "isNewArrival", !!item.isNewArrival)}
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            item.isNewArrival
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm shadow-amber-500/20 scale-105"
                              : "bg-[#1D2418] text-[#E7DFC9]/40 border border-[#384233] hover:text-[#E7DFC9] hover:border-[#C8A76A]/40"
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full ${item.isNewArrival ? "bg-amber-400 animate-pulse" : "bg-gray-600"}`} />
                          <span>{item.isNewArrival ? "معروض (Active)" : "غير معروض"}</span>
                        </button>
                      </td>

                      {/* Toggle 2: Most Selected */}
                      <td className="py-3 px-4 text-center">
                        <button
                          disabled={isMostToggling}
                          onClick={() => handleToggle(item.id, "isMostSelected", !!item.isMostSelected)}
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                            item.isMostSelected
                              ? "bg-[#C8A76A]/20 text-[#C8A76A] border border-[#C8A76A]/50 shadow-sm shadow-[#C8A76A]/20 scale-105"
                              : "bg-[#1D2418] text-[#E7DFC9]/40 border border-[#384233] hover:text-[#E7DFC9] hover:border-[#C8A76A]/40"
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full ${item.isMostSelected ? "bg-[#C8A76A] animate-pulse" : "bg-gray-600"}`} />
                          <span>{item.isMostSelected ? "معروض (Active)" : "غير معروض"}</span>
                        </button>
                      </td>

                      {/* View Link */}
                      <td className="py-3 px-4 text-center">
                        <Link
                          href={`/collections/${item.id}`}
                          target="_blank"
                          className="p-1.5 rounded-lg bg-[#1D2418] hover:bg-[#C8A76A]/20 hover:text-[#C8A76A] border border-[#384233] text-[#E7DFC9] transition-colors inline-block"
                          title="عرض المنتج في المتجر"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
