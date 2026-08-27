"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CatalogItem } from "@/app/data/catalog";
import { getAdminCatalog } from "@/app/actions/admin-catalog";

interface CategoryMeta {
  key: "perfumes" | "bottles" | "caps" | "pumps";
  titleAr: string;
  titleEn: string;
  desc: string;
  image: string;
  gradient: string;
  borderColor: string;
}

const CATEGORIES_METADATA: CategoryMeta[] = [
  {
    key: "perfumes",
    titleAr: "الزيوت والخلاصات العطرية",
    titleEn: "French Perfume Oils & Extracts",
    desc: "زيوت خام نقية عالية التركيز والثبات (+30% Extrait) مطورة للبراندات والمصانع الفاخرة.",
    image: "/images/perfumes/perfume_originelle.png",
    gradient: "from-amber-950/30 to-[#141A12]",
    borderColor: "border-amber-700/40",
  },
  {
    key: "bottles",
    titleAr: "القوارير والزجاجات الكريستالية",
    titleEn: "Luxury Glass Bottles & Flacons",
    desc: "قوارير زجاجية بنقاء كريستالي فائق وأشكال هندسية راقية تدعم أحدث معايير الكبس والتعليب.",
    image: "/images/bottles/bottle_originelle_100ml.png",
    gradient: "from-emerald-950/30 to-[#141A12]",
    borderColor: "border-emerald-700/40",
  },
  {
    key: "caps",
    titleAr: "الأغطية الملكية الفاخرة",
    titleEn: "Heavy Magnetic & Metal Caps",
    desc: "أغطية معدنية ثقيلة، مغناطيسية، وكريستالية مصممة لإضفاء لمسة فخامة استثنائية على كل قارورة.",
    image: "/images/caps/cap_crystal_gold.png",
    gradient: "from-purple-950/30 to-[#141A12]",
    borderColor: "border-purple-700/40",
  },
  {
    key: "pumps",
    titleAr: "مضخات وبخاخات الرذاذ الدقيق",
    titleEn: "Precision Fine Mist Pumps",
    desc: "مضخات كبس معيارية تضمن رشاش رذاذي ناعم جداً ومحكم مانع للتسريب بألوان وتطعيمات متعددة.",
    image: "/images/pumps/pump_gold_mist.png",
    gradient: "from-blue-950/30 to-[#141A12]",
    borderColor: "border-blue-700/40",
  },
];

export default function AdminCategoriesPage() {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const res = await getAdminCatalog();
      if (res.success && res.data) {
        setItems(res.data);
      }
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-[#F4F2E8]">
            إدارة وتوزيع الأقسام والفئات
          </h1>
          <p className="text-xs text-[#E7DFC9]/60 mt-1">
            نظرة شاملة على بنية وتصنيفات منتجات <span className="text-[#C8A76A]">L&apos;Étoile</span>
          </p>
        </div>

        <Link
          href="/admin/products/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C8A76A] to-[#D4AF37] text-[#141A12] font-bold text-xs shadow-lg shadow-[#C8A76A]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <span>+ إضافة صنف جديد لقسم</span>
        </Link>
      </div>

      {/* Main Categories Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CATEGORIES_METADATA.map((cat) => {
          const catItems = items.filter((i) => i.category === cat.key);
          const count = catItems.length;
          const subCats = Array.from(new Set(catItems.map((i) => i.subCategory).filter(Boolean))) as string[];
          const prices = catItems.map((i) => i.price || 0).filter((p) => p > 0);
          const avgPrice = prices.length ? Math.round(prices.reduce((a, b) => a + b, 0) / prices.length) : 0;
          const minPrice = prices.length ? Math.min(...prices) : 0;
          const maxPrice = prices.length ? Math.max(...prices) : 0;

          return (
            <div
              key={cat.key}
              className={`bg-gradient-to-b ${cat.gradient} border ${cat.borderColor} rounded-3xl p-6 relative overflow-hidden shadow-xl flex flex-col justify-between`}
            >
              {/* Category Header */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#C8A76A] bg-[#1D2418] px-2.5 py-0.5 rounded border border-[#384233]">
                      {cat.key}
                    </span>
                    <h2 className="text-xl font-serif font-bold text-[#F4F2E8]">
                      {cat.titleAr}
                    </h2>
                    <p className="text-xs text-[#E7DFC9]/60">{cat.titleEn}</p>
                  </div>

                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-black/40 border border-[#384233] flex-shrink-0">
                    <Image src={cat.image} alt={cat.titleAr} fill className="object-cover" />
                  </div>
                </div>

                <p className="text-xs text-[#E7DFC9]/70 mt-4 leading-relaxed font-light">
                  {cat.desc}
                </p>

                {/* Stat Metrics */}
                <div className="grid grid-cols-3 gap-3 my-5 p-3 rounded-2xl bg-[#0E130C]/60 border border-[#263120]">
                  <div className="text-center">
                    <p className="text-[10px] text-[#E7DFC9]/50">عدد المنتجات</p>
                    <p className="text-lg font-serif font-bold text-[#C8A76A]">
                      {loading ? "..." : count}
                    </p>
                  </div>
                  <div className="text-center border-x border-[#263120]">
                    <p className="text-[10px] text-[#E7DFC9]/50">متوسط السعر</p>
                    <p className="text-lg font-mono font-bold text-[#F4F2E8]">
                      {loading ? "..." : `$${avgPrice}`}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-[#E7DFC9]/50">نطاق الأسعار</p>
                    <p className="text-xs font-mono text-[#E7DFC9]/80 mt-1">
                      {loading ? "..." : `$${minPrice} - $${maxPrice}`}
                    </p>
                  </div>
                </div>

                {/* Subcategories list */}
                {subCats.length > 0 && (
                  <div className="space-y-1.5 mb-4">
                    <p className="text-[11px] text-[#E7DFC9]/60 font-semibold">التصنيفات الفرعية المرتبطة:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {subCats.map((sub, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-[#141A12] border border-[#2D3A25] px-2.5 py-1 rounded-lg text-[#E7DFC9]"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#263120] flex items-center justify-between gap-3">
                <Link
                  href={`/collections?cat=${cat.key}`}
                  target="_blank"
                  className="text-xs text-[#E7DFC9]/70 hover:text-[#C8A76A] transition-colors"
                >
                  معاينة القسم في المتجر &rarr;
                </Link>

                <Link
                  href={`/admin/products`}
                  className="px-4 py-2 rounded-xl bg-[#1D2418] hover:bg-[#C8A76A] hover:text-[#141A12] border border-[#384233] text-xs font-medium text-[#C8A76A] transition-all"
                >
                  إدارة منتجات هذا القسم ({count})
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
