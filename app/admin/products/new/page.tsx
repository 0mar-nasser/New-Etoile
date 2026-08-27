"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createAdminProduct } from "@/app/actions/admin-catalog";

const DEFAULT_IMAGES = [
  "/images/perfumes/perfume_originelle.png",
  "/images/perfumes/perfume_bois_de_nuit.png",
  "/images/perfumes/perfume_or_rose.png",
  "/images/perfumes/perfume_fleur_secrete.png",
  "/images/bottles/bottle_originelle_100ml.png",
  "/images/bottles/bottle_bois_de_nuit_50ml.png",
  "/images/bottles/bottle_or_rose_100ml.png",
  "/images/bottles/bottle_fleur_secrete_50ml.png",
  "/images/caps/cap_crystal_gold.png",
  "/images/caps/cap_smoked_black.png",
  "/images/caps/cap_rose_gold_magnetic.png",
  "/images/caps/cap_matte_silver.png",
  "/images/pumps/pump_gold_mist.png",
  "/images/pumps/pump_black_matte.png",
  "/images/pumps/pump_rose_gold_fine.png",
  "/images/pumps/pump_silver_precision.png",
];

const CATEGORIES = [
  { value: "perfumes", labelAr: "زيوت وعطور فرنسية (Perfumes)", defaultSub: "زيوت عطرية فرنسية" },
  { value: "bottles", labelAr: "قوارير وزجاجات (Bottles)", defaultSub: "عبوات زجاجية فاخرة" },
  { value: "caps", labelAr: "أغطية فاخرة (Caps)", defaultSub: "أغطية معدنية ومغناطيسية" },
  { value: "pumps", labelAr: "مضخات وبخاخات (Pumps)", defaultSub: "مضخات كبس معيارية" },
];

export default function AddProductPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [category, setCategory] = useState<"perfumes" | "bottles" | "caps" | "pumps">("perfumes");
  const [subCategory, setSubCategory] = useState("زيوت عطرية فرنسية");
  const [price, setPrice] = useState<number | string>("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [newFeature, setNewFeature] = useState("");
  const [image, setImage] = useState("/images/perfumes/perfume_originelle.png");
  const [customImageUrl, setCustomImageUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddFeature = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (newFeature.trim() && !features.includes(newFeature.trim())) {
      setFeatures([...features, newFeature.trim()]);
      setNewFeature("");
    }
  };

  const handleRemoveFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("يرجى كتابة اسم المنتج");
      return;
    }

    setLoading(true);
    const finalImage = customImageUrl.trim() || image;

    try {
      const res = await createAdminProduct({
        name: name.trim(),
        category,
        subCategory: subCategory.trim() || undefined,
        description: description.trim(),
        price: price === "" ? 0 : Number(price),
        features,
        image: finalImage,
      });

      if (res.success) {
        router.push("/admin/products");
        router.refresh();
      } else {
        setError(res.error || "فشل إنشاء المنتج");
      }
    } catch {
      setError("حدث خطأ غير متوقع أثناء إضافة المنتج");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-bold text-[#F4F2E8]">
            إضافة منتج جديد للكتالوج
          </h1>
          <p className="text-xs text-[#E7DFC9]/60 mt-1">
            سيتم حفظ المنتج مباشرة في الكتالوج وعرضه في المتجر للعملاء
          </p>
        </div>
        <Link
          href="/admin/products"
          className="px-4 py-2 rounded-xl bg-[#1D2418] border border-[#384233] text-xs text-[#E7DFC9] hover:text-[#C8A76A]"
        >
          &larr; رجوع لقائمة المنتجات
        </Link>
      </div>

      {error && (
        <div className="p-4 bg-red-950/60 border border-red-500/50 rounded-2xl text-red-200 text-sm">
          {error}
        </div>
      )}

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#141A12] border border-[#263120] rounded-3xl p-6 md:p-8 space-y-6 shadow-xl"
      >
        {/* Row 1: Name & Price */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2 space-y-1.5">
            <label className="text-xs text-[#C8A76A] font-semibold">اسم المنتج الكامل *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="مثال: زيت عطري فرنسي مركز (IDÔLE PEACH 'N ROSES)"
              className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#F4F2E8] placeholder:text-[#E7DFC9]/40"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-[#C8A76A] font-semibold">السعر الافتراضي ($ / USD)</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="مثال: 185"
              className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#F4F2E8] placeholder:text-[#E7DFC9]/40"
            />
          </div>
        </div>

        {/* Row 2: Category & SubCategory */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-xs text-[#C8A76A] font-semibold">القسم الرئيسي *</label>
            <select
              value={category}
              onChange={(e) => {
                const newCat = e.target.value as any;
                setCategory(newCat);
                const found = CATEGORIES.find((c) => c.value === newCat);
                if (found) setSubCategory(found.defaultSub);
              }}
              className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#F4F2E8]"
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.labelAr}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-[#C8A76A] font-semibold">التصنيف الفرعي</label>
            <input
              type="text"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              placeholder="مثال: زيوت عطرية فرنسية"
              className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#F4F2E8] placeholder:text-[#E7DFC9]/40"
            />
          </div>
        </div>

        {/* Row 3: Description */}
        <div className="space-y-1.5">
          <label className="text-xs text-[#C8A76A] font-semibold">الوصف والعرض الترويجي</label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="زيت عطري فرنسي نقي عالي التركيز والثبات..."
            className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#F4F2E8] placeholder:text-[#E7DFC9]/40 leading-relaxed resize-y"
          />
        </div>

        {/* Row 4: Features */}
        <div className="space-y-2">
          <label className="text-xs text-[#C8A76A] font-semibold">المواصفات والنوتات العطرية (Features)</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddFeature();
                }
              }}
              placeholder="أدخل ميزة جديدة واضغط Enter أو إضافة"
              className="flex-1 bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-2.5 text-sm text-[#F4F2E8] placeholder:text-[#E7DFC9]/40"
            />
            <button
              type="button"
              onClick={() => handleAddFeature()}
              className="px-5 py-2.5 bg-[#C8A76A]/20 border border-[#C8A76A]/40 text-[#C8A76A] hover:bg-[#C8A76A] hover:text-[#141A12] rounded-xl text-xs font-semibold transition-all"
            >
              + إضافة
            </button>
          </div>

          {features.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {features.map((feat, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1D2418] border border-[#384233] rounded-xl text-xs text-[#E7DFC9]"
                >
                  <span>{feat}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFeature(idx)}
                    className="text-red-400 hover:text-red-300 font-bold px-1"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Row 5: Image & Presets */}
        <div className="space-y-4 pt-4 border-t border-[#263120]">
          <label className="text-xs text-[#C8A76A] font-semibold">صورة المنتج</label>

          <input
            type="text"
            value={customImageUrl}
            onChange={(e) => setCustomImageUrl(e.target.value)}
            placeholder="أدخل رابط صورة خارجي مباشر (URL) أو اختر من المعرض أدناه"
            className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-2.5 text-xs text-[#F4F2E8] placeholder:text-[#E7DFC9]/40"
          />

          <div>
            <p className="text-[11px] text-[#E7DFC9]/60 mb-2">أو اختر صورة جاهزة من مكتبة التصاميم:</p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 p-3 bg-[#1D2418] rounded-xl border border-[#384233]">
              {DEFAULT_IMAGES.map((imgSrc, i) => {
                const selected = customImageUrl ? customImageUrl === imgSrc : image === imgSrc;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setImage(imgSrc);
                      setCustomImageUrl("");
                    }}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selected
                        ? "border-[#C8A76A] ring-2 ring-[#C8A76A]/40 scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={imgSrc} alt="preset" fill className="object-cover" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#1D2418] p-3 rounded-xl border border-[#384233]">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-black/40 border border-[#384233] flex-shrink-0">
              <Image
                src={customImageUrl.trim() || image}
                alt="preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-xs text-[#E7DFC9]/70">
              <p className="text-[#C8A76A] font-semibold">الصورة المختارة</p>
              <p className="truncate max-w-lg text-[11px] opacity-70">
                {customImageUrl.trim() || image}
              </p>
            </div>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="pt-6 border-t border-[#263120] flex items-center justify-end gap-3">
          <Link
            href="/admin/products"
            className="px-6 py-3 rounded-xl border border-[#384233] text-[#E7DFC9] text-xs hover:bg-[#1D2418] transition-colors"
          >
            إلغاء
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#C8A76A] via-[#D4AF37] to-[#B8965A] text-[#141A12] font-bold text-xs shadow-lg shadow-[#C8A76A]/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "جاري الحفظ..." : "حفظ المنتج وإضافته للكتالوج"}
          </button>
        </div>
      </form>
    </div>
  );
}
