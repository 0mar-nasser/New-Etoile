"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CatalogItem } from "@/app/data/catalog";
import { createAdminProduct, updateAdminProduct } from "@/app/actions/admin-catalog";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: CatalogItem | null;
  onSuccess: (updatedOrNewItem: CatalogItem) => void;
}

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
  { value: "perfumes", labelAr: "زيوت وعطور (Perfumes)", labelEn: "Perfumes" },
  { value: "bottles", labelAr: "قوارير وزجاجات (Bottles)", labelEn: "Bottles" },
  { value: "caps", labelAr: "أغطية فاخرة (Caps)", labelEn: "Caps" },
  { value: "pumps", labelAr: "مضخات وبخاخات (Pumps)", labelEn: "Pumps" },
];

export default function ProductModal({
  isOpen,
  onClose,
  product,
  onSuccess,
}: ProductModalProps) {
  const isEditing = !!product;

  const [name, setName] = useState("");
  const [category, setCategory] = useState<"perfumes" | "bottles" | "caps" | "pumps">("perfumes");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [newFeature, setNewFeature] = useState("");
  const [image, setImage] = useState("/images/perfumes/perfume_originelle.png");
  const [customImageUrl, setCustomImageUrl] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setCategory(product.category || "perfumes");
      setSubCategory(product.subCategory || "");
      setPrice(product.price !== undefined ? product.price : "");
      setDescription(product.description || "");
      setFeatures(product.features || []);
      setImage(product.image || "/images/perfumes/perfume_originelle.png");
      setCustomImageUrl(product.image?.startsWith("http") ? product.image : "");
    } else {
      setName("");
      setCategory("perfumes");
      setSubCategory("زيوت عطرية فرنسية");
      setPrice("");
      setDescription("");
      setFeatures([]);
      setImage("/images/perfumes/perfume_originelle.png");
      setCustomImageUrl("");
    }
    setError(null);
  }, [product, isOpen]);

  if (!isOpen) return null;

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

    const payload = {
      name: name.trim(),
      category,
      subCategory: subCategory.trim() || undefined,
      description: description.trim(),
      price: price === "" ? 0 : Number(price),
      features,
      image: finalImage,
    };

    try {
      if (isEditing && product) {
        const res = await updateAdminProduct(product.id, payload);
        if (res.success && res.data) {
          onSuccess(res.data);
          onClose();
        } else {
          setError(res.error || "فشل تحديث المنتج");
        }
      } else {
        const res = await createAdminProduct(payload);
        if (res.success && res.data) {
          onSuccess(res.data);
          onClose();
        } else {
          setError(res.error || "فشل إنشاء المنتج");
        }
      }
    } catch {
      setError("حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#141A12] border border-[#C8A76A]/30 rounded-2xl shadow-2xl p-6 md:p-8 text-[#F4F2E8] my-8 max-h-[90vh] overflow-y-auto rtl"
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#384233]">
          <div>
            <h2 className="text-xl md:text-2xl font-serif text-[#C8A76A]">
              {isEditing ? "تعديل بيانات المنتج" : "إضافة منتج جديد إلى الكتالوج"}
            </h2>
            <p className="text-xs text-[#E7DFC9]/60 mt-1">
              {isEditing ? `معرّف المنتج: ${product?.id}` : "املأ التفاصيل لحفظ المنتج في المتجر"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1D2418] border border-[#384233] text-[#E7DFC9] flex items-center justify-center hover:text-[#C8A76A] hover:border-[#C8A76A] transition-colors"
          >
            ✕
          </button>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-950/60 border border-red-500/50 rounded-xl text-red-200 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Row 1: Name & Price */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs text-[#C8A76A] font-medium">اسم المنتج / الصنف *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="مثال: زيت عطري فرنسي مركز (IDÔLE...)"
                className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-2.5 text-sm text-[#F4F2E8] placeholder:text-[#E7DFC9]/40"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#C8A76A] font-medium">السعر (USD / ر.س)</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="مثال: 185"
                className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-2.5 text-sm text-[#F4F2E8] placeholder:text-[#E7DFC9]/40"
              />
            </div>
          </div>

          {/* Row 2: Category & SubCategory */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-[#C8A76A] font-medium">الفئة الرئيسية *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-2.5 text-sm text-[#F4F2E8]"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.labelAr}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#C8A76A] font-medium">التصنيف الفرعي (Sub-Category)</label>
              <input
                type="text"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                placeholder="مثال: زيوت عطرية فرنسية، عبوات كريستال..."
                className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-2.5 text-sm text-[#F4F2E8] placeholder:text-[#E7DFC9]/40"
              />
            </div>
          </div>

          {/* Row 3: Description */}
          <div className="space-y-1.5">
            <label className="text-xs text-[#C8A76A] font-medium">الوصف التفصيلي</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="اكتب وصفاً جذاباً يشمل درجات الثبات والفوحان والمواصفات الصناعية..."
              className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-2.5 text-sm text-[#F4F2E8] placeholder:text-[#E7DFC9]/40 leading-relaxed resize-y"
            />
          </div>

          {/* Row 4: Features / Tags */}
          <div className="space-y-2">
            <label className="text-xs text-[#C8A76A] font-medium">المميزات والمواصفات (Features Tags)</label>
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
                placeholder="أضف ميزة (مثال: درجة التركيز: زيت خام 100%) واضغط إضافة"
                className="flex-1 bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-2 text-sm text-[#F4F2E8] placeholder:text-[#E7DFC9]/40"
              />
              <button
                type="button"
                onClick={() => handleAddFeature()}
                className="px-4 py-2 bg-[#C8A76A]/20 border border-[#C8A76A]/40 text-[#C8A76A] hover:bg-[#C8A76A] hover:text-[#141A12] rounded-xl text-xs font-semibold transition-all"
              >
                + إضافة
              </button>
            </div>

            {features.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1D2418] border border-[#384233] rounded-lg text-xs text-[#E7DFC9]"
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

          {/* Row 5: Image Selection & Preview */}
          <div className="space-y-3 pt-2 border-t border-[#384233]">
            <label className="text-xs text-[#C8A76A] font-medium">صورة المنتج</label>
            
            {/* Direct URL input */}
            <div className="space-y-1.5">
              <input
                type="text"
                value={customImageUrl}
                onChange={(e) => setCustomImageUrl(e.target.value)}
                placeholder="رابط صورة مباشر (URL) أو اختر من المعرض أدناه"
                className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-2 text-xs text-[#F4F2E8] placeholder:text-[#E7DFC9]/40"
              />
            </div>

            {/* Image Presets Selector */}
            <div>
              <p className="text-[11px] text-[#E7DFC9]/60 mb-2">أو اختر صورة من مكتبة الموقع:</p>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 max-h-36 overflow-y-auto p-2 bg-[#1D2418] rounded-xl border border-[#384233]">
                {DEFAULT_IMAGES.map((imgSrc, i) => {
                  const selected = (customImageUrl ? customImageUrl === imgSrc : image === imgSrc);
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

            {/* Live Preview */}
            <div className="flex items-center gap-4 bg-[#1D2418] p-3 rounded-xl border border-[#384233]">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-black/40 border border-[#384233] flex-shrink-0">
                <Image
                  src={customImageUrl.trim() || image}
                  alt="preview"
                  fill
                  className="object-cover"
                  onError={() => {}}
                />
              </div>
              <div className="text-xs text-[#E7DFC9]/70 space-y-0.5">
                <p className="text-[#C8A76A] font-semibold">معاينة الصورة المختارة</p>
                <p className="truncate max-w-md text-[11px] opacity-70">
                  {customImageUrl.trim() || image}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#384233] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-[#384233] text-[#E7DFC9] text-xs hover:bg-[#1D2418] transition-colors"
            >
              إلغاء
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#C8A76A] to-[#D4AF37] text-[#141A12] font-semibold text-xs shadow-lg shadow-[#C8A76A]/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "جاري الحفظ..." : isEditing ? "تحديث المنتج" : "إضافة المنتج الآن"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
