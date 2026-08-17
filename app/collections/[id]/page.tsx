"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useCart } from "../../context/CartContext";
import { CATALOG_ITEMS } from "../../data/catalog";
import { PRODUCTS } from "../../data/products";
import ImagePlaceholder from "../../components/ui/ImagePlaceholder";
import ProductInquiryModal from "../../components/ui/ProductInquiryModal";
import { getWhatsAppInquiryUrl } from "../../utils/inquiry";

interface UnifiedProduct {
  id: string;
  name: string;
  category: "perfumes" | "bottles" | "caps" | "pumps" | string;
  subCategory?: string;
  description: string;
  image?: string;
  features?: string[];
  notesDetailed?: {
    head: string;
    heart: string;
    base: string;
  };
  sizes: { volume: string; label?: string }[];
}

function resolveProduct(id: string): UnifiedProduct | null {
  // 1. Try CATALOG_ITEMS
  const catalogItem = CATALOG_ITEMS.find((item) => item.id === id);
  if (catalogItem) {
    let sizes = [{ volume: "100ml Standard" }];
    if (catalogItem.category === "bottles") {
      sizes = [
        { volume: "30ml Flacon" },
        { volume: "50ml Flacon" },
        { volume: "75ml Flacon" },
        { volume: "100ml Flacon" },
        { volume: "150ml Flacon" },
      ];
    } else if (catalogItem.category === "perfumes") {
      sizes = [
        { volume: "50ml Concentrate" },
        { volume: "100ml Concentrate" },
        { volume: "200ml Sample Flacon" },
        { volume: "1 Liter Bulk Canister" },
      ];
    } else if (catalogItem.category === "caps" || catalogItem.category === "pumps") {
      sizes = [
        { volume: "Single Sample" },
        { volume: "Pack of 10 Units" },
        { volume: "Bulk Carton (100 Units)" },
      ];
    }

    return {
      id: catalogItem.id,
      name: catalogItem.name,
      category: catalogItem.category,
      subCategory: catalogItem.subCategory,
      description: catalogItem.description,
      image: catalogItem.image,
      features: catalogItem.features,
      notesDetailed: catalogItem.category === "perfumes" ? {
        head: "Bergamot, Dewy Green Notes, Pink Pepper",
        heart: "Damask Rose, Grasse Jasmine, Floral Accord",
        base: "Golden Amber, White Musk, Sandalwood Cream"
      } : undefined,
      sizes: sizes,
    };
  }

  // 2. Try PRODUCTS
  const legacyProd = PRODUCTS.find((p) => p.id === id);
  if (legacyProd) {
    return {
      id: legacyProd.id,
      name: legacyProd.name,
      category: "perfumes",
      subCategory: legacyProd.family,
      description: legacyProd.description,
      image: legacyProd.image,
      features: legacyProd.notes.map(n => `Note: ${n}`),
      notesDetailed: legacyProd.notesDetailed,
      sizes: legacyProd.sizes.map((s) => ({ volume: s.volume })),
    };
  }

  return null;
}

export default function ProductDetailPage() {
  const params = useParams();
  const productId = typeof params?.id === "string" ? params.id : "";
  const product = resolveProduct(productId);
  const { t, i18n } = useTranslation(["common", "products"]);
  const isArabic = i18n.language?.startsWith("ar");

  const { toggleWishlist, isInWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState(
    product ? product.sizes[0] : null
  );
  const [activeTab, setActiveTab] = useState<"specs" | "story" | "features">("specs");
  const [inquiryOpen, setInquiryOpen] = useState(false);

  if (!product || !selectedSize) {
    return (
      <div className="bg-[#F4F2E8] min-h-screen flex flex-col items-center justify-center pt-28 text-[#1D2418]">
        <span className="text-3xl mb-4 text-[#C8A76A]">✦</span>
        <h1 className="font-serif text-3xl font-light mb-2">
          {isArabic ? "المنتج غير موجود" : "Item Not Found"}
        </h1>
        <p className="text-sm text-[#2B3325]/60 font-light mb-8">
          {isArabic
            ? "المنتج المطلوب غير متاح حالياً أو تمت إزالته من الكتالوج."
            : "The requested item does not exist or has been updated in our catalog."}
        </p>
        <Link
          href="/collections"
          className="bg-[#2B3325] text-[#F4F2E8] px-8 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#C8A76A] hover:text-[#1D2418] transition-all"
        >
          {isArabic ? "تصفح الكتالوج" : "Browse Collections"}
        </Link>
      </div>
    );
  }

  const isFav = isInWishlist(product.id);

  // Find related items from CATALOG_ITEMS in same category
  const relatedItems = CATALOG_ITEMS.filter(
    (item) => item.category === product.category && item.id !== product.id
  ).slice(0, 3);

  const whatsappDirectUrl = getWhatsAppInquiryUrl(
    product.name,
    selectedSize.volume,
    isArabic
  );

  return (
    <>
      <div className="bg-[#F4F2E8] min-h-screen text-[#1D2418]">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-4">
          <nav className="flex items-center space-x-2 rtl:space-x-reverse text-[10px] uppercase tracking-widest text-[#2B3325]/60 font-light">
            <Link href="/" className="hover:text-[#C8A76A] transition-colors">{isArabic ? "الرئيسية" : "Home"}</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-[#C8A76A] transition-colors">{isArabic ? "الكتالوج" : "Collections"}</Link>
            <span>/</span>
            <span className="capitalize">{product.category}</span>
            <span>/</span>
            <span className="text-[#C8A76A] font-semibold">{product.name}</span>
          </nav>
        </div>

        {/* Main Product Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left – Image Container */}
            <div className="sticky top-28 space-y-4">
              <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden shadow-lg border border-[#E7DFC9]/80 group bg-white/40">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <ImagePlaceholder label={`${product.name}`} aspect="aspect-[4/5]" theme="light" />
                )}

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-5 right-5 rtl:right-auto rtl:left-5 w-11 h-11 rounded-full bg-[#F4F2E8]/85 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-[#F4F2E8] transition-all cursor-pointer focus:outline-none border border-[#E7DFC9]"
                  aria-label={t("common:addToWishlist")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill={isFav ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 ${isFav ? "text-[#C8A76A]" : "text-[#2B3325]"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>

                {/* Category / Subcategory Badge */}
                <div className="absolute bottom-5 left-5 rtl:left-auto rtl:right-5 bg-[#1D2418]/85 backdrop-blur-sm text-[#F4F2E8] text-[9px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full font-light">
                  {product.subCategory || product.category}
                </div>
              </div>

              {/* Thumbnail Row */}
              <div className="flex gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`relative flex-1 aspect-square rounded-[16px] overflow-hidden cursor-pointer border-2 transition-colors ${i === 0 ? "border-[#C8A76A]" : "border-[#E7DFC9] hover:border-[#C8A76A]/60"}`}>
                    {product.image ? (
                      <Image src={product.image} alt="" fill className="object-cover" />
                    ) : (
                      <ImagePlaceholder label="" aspect="aspect-square" theme="light" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Details */}
            <div className="space-y-7 pt-2 rtl:text-right">

              {/* Category tag + Name */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A76A] font-bold">
                  {product.category} · {product.subCategory || (isArabic ? "توريد حصري" : "Exclusive Supply")}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-wide text-[#1D2418]">
                  {product.name}
                </h1>
                <p className="text-xs md:text-sm text-[#2B3325]/75 font-light leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Catalog Availability Badge (Replaces Price) */}
              <div className="flex items-center space-x-3 rtl:space-x-reverse pt-2 border-t border-[#E7DFC9]/60">
                <div className="flex items-center gap-2 bg-[#2B3325]/10 border border-[#2B3325]/20 rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#1D2418]">
                    {isArabic ? "متوفر في الكتالوج للاستفسار والطلب" : "Available for Inquiry & Supply"}
                  </span>
                </div>
                <span className="text-xs text-[#2B3325]/60 font-light">
                  ({selectedSize.volume})
                </span>
              </div>

              {/* Feature Highlights */}
              {product.features && product.features.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {product.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] uppercase tracking-wider bg-[#E7DFC9]/50 border border-[#E7DFC9] text-[#2B3325] px-3.5 py-1.5 rounded-full font-medium"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              )}

              {/* Size / Variant Selector (No Prices) */}
              <div className="space-y-3 pt-2">
                <h3 className="text-[10px] uppercase tracking-widest text-[#1D2418] font-bold">
                  {isArabic ? "اختر الحجم أو المواصفة المطلوبة" : "Select Option / Specification"}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.volume}
                      onClick={() => setSelectedSize(size)}
                      className={`flex-1 min-w-[120px] py-3.5 px-4 rounded-2xl border text-xs font-medium transition-all duration-200 cursor-pointer ${
                        selectedSize.volume === size.volume
                          ? "bg-[#2B3325] border-[#C8A76A] text-[#F4F2E8] shadow-md"
                          : "bg-transparent border-[#E7DFC9] text-[#2B3325] hover:border-[#C8A76A]/50 hover:bg-[#E7DFC9]/30"
                      }`}
                    >
                      <div className="text-center">
                        <div className="font-semibold tracking-wider text-[11px] uppercase">{size.volume}</div>
                        <div className={`text-[9px] mt-0.5 ${selectedSize.volume === size.volume ? "text-[#C8A76A]" : "text-[#2B3325]/60"}`}>
                          {isArabic ? "جاهز للاستفسار" : "Ready for Inquiry"}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Inquiry Action Buttons (Catalog Replacement for Buy/Cart) */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setInquiryOpen(true)}
                    className="flex-1 py-4 px-6 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md focus:outline-none cursor-pointer bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <span>{t("common:inquireProduct")}</span>
                  </button>

                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-6 rounded-full text-xs tracking-[0.15em] uppercase font-bold transition-all duration-300 shadow-md focus:outline-none cursor-pointer bg-[#25D366] hover:bg-[#20BA59] text-white flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>{t("common:inquireWhatsApp")}</span>
                  </a>
                </div>
              </div>

              {/* Quality & Consultation Guarantee */}
              <div className="flex items-center space-x-3 rtl:space-x-reverse bg-[#E7DFC9]/40 border border-[#E7DFC9] rounded-2xl px-5 py-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#C8A76A] shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-[#1D2418]">
                    {isArabic ? "معايير الجودة الفرنسية والتخصيص" : "Luxury French Craftsmanship"}
                  </p>
                  <p className="text-[9px] text-[#2B3325]/55 mt-0.5 font-light">
                    {isArabic ? "شحن دولي سريع، توفير عينات فيزيائية، وطباعة اللوجو للعلامات التجارية" : "Worldwide Express Logistics & Custom Branding Available"}
                  </p>
                </div>
              </div>

              {/* Dynamic Tabs: Specifications / Story / Features */}
              <div className="border border-[#E7DFC9] rounded-[22px] overflow-hidden">
                {/* Tab Headers */}
                <div className="flex border-b border-[#E7DFC9] bg-[#E7DFC9]/20">
                  {(["specs", "story", "features"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-3.5 text-[10px] uppercase tracking-widest font-semibold transition-colors cursor-pointer ${
                        activeTab === tab
                          ? "text-[#C8A76A] border-b-2 border-[#C8A76A] bg-white/40"
                          : "text-[#2B3325]/50 hover:text-[#2B3325]"
                      }`}
                    >
                      {tab === "specs" ? (isArabic ? "المواصفات الفنية" : "Technical Specs") : tab === "story" ? (isArabic ? "الوصف والنوتات" : "Overview & Story") : (isArabic ? "الميزات" : "Features")}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === "specs" && (
                    <table className="w-full text-xs text-[#2B3325]/80 font-light">
                      <tbody className="divide-y divide-[#E7DFC9]/60">
                        {product.category === "perfumes" ? [
                          [isArabic ? "درجة التركيز" : "Concentration", isArabic ? "ماء عطر / مستخلص مركز" : "Eau de Parfum / Extrait"],
                          [isArabic ? "المواصفة / الحجم" : "Selected Volume", selectedSize.volume],
                          [isArabic ? "العائلة العطرية" : "Scent Family", product.subCategory || "Luxury Fragrance"],
                          [isArabic ? "بلد المنشأ" : "Origin", isArabic ? "غراس وباريس، فرنسا" : "Grasse & Paris, France"],
                          [isArabic ? "الثبات والفوحان" : "Sillage & Longevity", isArabic ? "أكثر من 24 ساعة أثر عطري ممتد" : "24 Hours Long-Lasting Trail"],
                          [isArabic ? "التغليف" : "Packaging", isArabic ? "عبوة ألمنيوم أو زجاج محمي" : "Signature Étoile Velvet Box"],
                        ] : product.category === "bottles" ? [
                          [isArabic ? "نوع الزجاج" : "Material", isArabic ? "كريستال فائق النقاء بقاعدة سميكة" : "Thick Crystal Base Glass"],
                          [isArabic ? "السعة" : "Capacity", selectedSize.volume],
                          [isArabic ? "فتحة العنق" : "Neck Finish", isArabic ? "قياس قياسي FEA 15mm Crimp" : "Standard FEA 15mm Crimp"],
                          [isArabic ? "الطلاء" : "Coating", isArabic ? "مقاوم للخدش والأشعة فوق البنفسجية" : "High-Polish UV & Scratch Resistant"],
                          [isArabic ? "المطابقة" : "Origin", isArabic ? "معايير مصانع العطور الأوروبية" : "European Glassware Standards"],
                          [isArabic ? "الاستخدام" : "Usage", isArabic ? "العطور الفاخرة وزيوت النيش" : "Luxury Fine Fragrances & Oils"],
                        ] : product.category === "caps" ? [
                          [isArabic ? "الخامة" : "Material", isArabic ? "سبيكة زماك ثقيلة / خشب طبيعي" : "Heavy Zamac Metal Alloy / Premium Polymer"],
                          [isArabic ? "المقاس" : "Fitment", isArabic ? "عنق قياسي 15 ملم" : "Standard 15mm Crimp Neck"],
                          [isArabic ? "نوع القفل" : "Inner Gasket", isArabic ? "حشوة احتكاك محكمة مانعة للتسرب" : "Leak-Proof Friction Insert"],
                          [isArabic ? "اللمسة النهائية" : "Finish", isArabic ? "مطلي بالذهب / أسود مطفي" : "Electroplated Gold / Matte Polish"],
                          [isArabic ? "الوزن" : "Weight", isArabic ? "45 غرام ملمس فخم وثقيل" : "45g High Density Feel"],
                        ] : [
                          [isArabic ? "معدل الرذاذ" : "Atomization Dosage", isArabic ? "0.08 مل - 0.12 مل رذاذ ناعم جداً" : "0.08ml - 0.12ml Ultra Fine Mist"],
                          [isArabic ? "قطر الكبس" : "Crimp Diameter", "FEA 15mm Standard"],
                          [isArabic ? "أنبوب الغمر" : "Dip Tube", isArabic ? "شفاف عالي الدقة" : "Precision Cut Transparent Tube"],
                          [isArabic ? "زنبرك الضخ" : "Spring Mechanism", isArabic ? "ستانلس ستيل مقاوم للتآكل" : "Corrosion-resistant Stainless Steel"],
                          [isArabic ? "لون الطوق" : "Collar Finish", isArabic ? "ألمنيوم مؤكسد ذهبي / فضي" : "Anodized Aluminum Gold / Silver"],
                        ].map(([label, value]) => (
                          <tr key={label}>
                            <td className="py-3 pr-4 rtl:pr-0 rtl:pl-4 text-[10px] uppercase tracking-widest text-[#1D2418] font-semibold w-40">{label}</td>
                            <td className="py-3 text-[#2B3325]/75">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {activeTab === "story" && (
                    <div className="space-y-4">
                      <p className="text-sm text-[#2B3325]/80 font-light leading-relaxed">
                        {product.description}
                      </p>
                      {product.notesDetailed && (
                        <div className="pt-3 border-t border-[#E7DFC9]/60 space-y-2">
                          <h4 className="text-[10px] uppercase tracking-widest text-[#C8A76A] font-bold">
                            {isArabic ? "الهرم العطري" : "Olfactory Pyramid"}
                          </h4>
                          <p className="text-xs text-[#2B3325]/75"><strong>{isArabic ? "القمة:" : "Top:"}</strong> {product.notesDetailed.head}</p>
                          <p className="text-xs text-[#2B3325]/75"><strong>{isArabic ? "القلب:" : "Heart:"}</strong> {product.notesDetailed.heart}</p>
                          <p className="text-xs text-[#2B3325]/75"><strong>{isArabic ? "القاعدة:" : "Base:"}</strong> {product.notesDetailed.base}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "features" && (
                    <ul className="space-y-3 text-xs text-[#2B3325]/80 font-light">
                      {product.features && product.features.length > 0 ? (
                        product.features.map((feat, i) => (
                          <li key={i} className="flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-[#C8A76A]">✦</span>
                            <span>{feat}</span>
                          </li>
                        ))
                      ) : (
                        <>
                          <li className="flex items-center space-x-2 rtl:space-x-reverse"><span className="text-[#C8A76A]">✦</span><span>{isArabic ? "مصنع وفق أعلى معايير التغليف الأوروبية" : "Crafted to European luxury packaging standards"}</span></li>
                          <li className="flex items-center space-x-2 rtl:space-x-reverse"><span className="text-[#C8A76A]">✦</span><span>{isArabic ? "اجتياز اختبارات الضغط ومنع التسرب" : "Rigorous pressure and leak testing passed"}</span></li>
                          <li className="flex items-center space-x-2 rtl:space-x-reverse"><span className="text-[#C8A76A]">✦</span><span>{isArabic ? "إمكانية حفر الشعار والتخصيص" : "Custom logo engraving available on bulk orders"}</span></li>
                        </>
                      )}
                    </ul>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Related Products Section */}
        {relatedItems.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-[#E7DFC9] mt-12">
            <div className="flex items-center justify-between mb-10 rtl:text-right">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C8A76A] font-bold">
                  {isArabic ? "المزيد من الكتالوج" : "More From Collection"}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-light text-[#1D2418] mt-1 capitalize">
                  {isArabic ? `منتجات ${product.category} أخرى` : `Related ${product.category}`}
                </h2>
              </div>
              <Link href="/collections" className="text-xs text-[#2B3325] hover:text-[#C8A76A] border-b border-[#2B3325]/20 hover:border-[#C8A76A] pb-0.5 uppercase tracking-widest font-semibold transition-colors">
                {isArabic ? "عرض كل الكتالوج" : "Explore All"}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedItems.map((related) => (
                <div key={related.id} className="bg-white/40 rounded-[20px] border border-[#E7DFC9]/60 p-5 group hover:border-[#C8A76A]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between rtl:text-right">
                  <div>
                    <div className="relative w-full aspect-[4/5] rounded-[14px] overflow-hidden mb-5 border border-[#E7DFC9]/60">
                      {related.image ? (
                        <Image src={related.image} alt={related.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <ImagePlaceholder label={related.name} aspect="aspect-[4/5]" theme="light" />
                      )}
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-[#C8A76A] font-semibold">{related.category}</span>
                    <h3 className="font-serif text-base text-[#1D2418] font-light mt-0.5 group-hover:text-[#C8A76A] transition-colors">{related.name}</h3>
                    <p className="text-[10px] text-[#2B3325]/60 mt-1 font-light line-clamp-2 mb-4">{related.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#E7DFC9]/50">
                    <span className="text-[10px] text-[#C8A76A] uppercase font-bold tracking-wider">
                      {isArabic ? "متوفر" : "Available"}
                    </span>
                    <Link
                      href={`/collections/${related.id}`}
                      className="text-[9px] uppercase tracking-widest text-[#2B3325] hover:text-[#C8A76A] border border-[#E7DFC9] hover:border-[#C8A76A] px-4 py-2 rounded-full transition-all font-semibold"
                    >
                      {t("common:viewDetails")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Product Inquiry Modal */}
      {inquiryOpen && (
        <ProductInquiryModal
          product={{
            id: product.id,
            name: product.name,
            category: product.category,
            description: product.description,
            image: product.image,
            selectedSpec: selectedSize.volume,
          }}
          onClose={() => setInquiryOpen(false)}
        />
      )}
    </>
  );
}
