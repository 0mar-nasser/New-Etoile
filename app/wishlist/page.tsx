"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import { PRODUCTS, Product } from "../data/products";
import ProductInquiryModal from "../components/ui/ProductInquiryModal";
import { getWhatsAppInquiryUrl } from "../utils/inquiry";

export default function WishlistPage() {
  const { t, i18n } = useTranslation(["navbar", "common"]);
  const { wishlist, toggleWishlist } = useCart();
  const isArabic = i18n.language?.startsWith("ar");
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  // WhatsApp bulk inquiry text
  const bulkWhatsAppUrl = () => {
    const itemsList = wishlistedProducts.map((p, idx) => `${idx + 1}. ${p.name} (${p.family})`).join("\n");
    const text = isArabic
      ? `مرحباً، أود الاستفسار عن توفر ومواصفات قائمة المنتجات المحفوظة التالية من الكتالوج:\n\n${itemsList}\n\nيرجى تزويدي بالحد الأدنى للطلب وتفاصيل التوريد.`
      : `Hello, I would like to inquire about the following saved items from your catalog:\n\n${itemsList}\n\nPlease provide availability and supply details.`;
    return `https://wa.me/971500000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      <div className="bg-[#F4F2E8] min-h-screen text-[#1D2418] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* Page Title */}
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-bold">
              ✦ {t("common:wishlist")} ✦
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1D2418] font-light">
              {t("navbar:wishlistTitle")}
            </h1>
            <div className="h-[1px] w-12 bg-[#C8A76A]/60 mx-auto" />
          </div>

          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-20 space-y-6 max-w-md mx-auto bg-white/40 border border-[#E7DFC9] rounded-[28px] p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#C8A76A]/10 border border-[#C8A76A]/30 flex items-center justify-center mx-auto text-[#C8A76A]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="font-serif text-2xl font-light text-[#1D2418]">
                  {t("navbar:emptyWishlist")}
                </p>
                <p className="text-xs text-[#2B3325]/60 font-light leading-relaxed">
                  {isArabic
                    ? "استكشف مجموعتنا الفاخرة من العطور والتغليف واحفظ خياراتك المفضلة هنا للاستفسار عنها."
                    : "Explore our luxury catalog of fragrances and components, then save your top choices here for easy inquiry."}
                </p>
              </div>
              <Link
                href="/collections"
                className="inline-block bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-md hover:scale-105"
              >
                {isArabic ? "تصفح الكتالوج" : "Explore Catalog"}
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-[#E7DFC9] pb-4">
                <span className="text-xs uppercase tracking-widest text-[#2B3325]/70 font-medium">
                  {isArabic
                    ? `إجمالي المنتجات المحفوظة: ${wishlistedProducts.length}`
                    : `Total Saved Items: ${wishlistedProducts.length}`}
                </span>

                <a
                  href={bulkWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20BA59] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>{isArabic ? "استفسار واتساب عن القائمة بالكامل" : "Inquire All on WhatsApp"}</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {wishlistedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white/70 border border-[#E7DFC9] rounded-[24px] p-5 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl transition-all duration-300 group rtl:text-right"
                  >
                    <div className="space-y-4">
                      {/* Image Container */}
                      <div className="relative w-full h-64 rounded-[18px] overflow-hidden border border-[#E7DFC9] bg-[#F4F2E8]">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-108"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 relative select-none">
                            <span className="font-serif text-lg font-semibold text-[#1D2418] tracking-widest opacity-80">
                              Étoile
                            </span>
                          </div>
                        )}

                        {/* Remove from wishlist button */}
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="absolute top-3 right-3 rtl:right-auto rtl:left-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
                          title={t("common:remove")}
                          aria-label={t("common:remove")}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.536l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.006.306l-1.5 2.5a.75.75 0 1 0 1.292.76l1.5-2.5a.75.75 0 0 0-.286-1.066Zm5.34.306a.75.75 0 1 0-1.292-.762l-1.5 2.5a.75.75 0 1 0 1.292.762l1.5-2.5Z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>

                      {/* Product Details */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-start gap-2">
                          <Link
                            href={`/collections/${product.id}`}
                            className="font-serif text-xl font-light text-[#1D2418] hover:text-[#C8A76A] transition-colors leading-tight"
                          >
                            {product.name}
                          </Link>
                        </div>
                        <p className="text-xs text-[#2B3325]/60 font-light">{product.family}</p>
                        <p className="text-xs text-[#2B3325]/80 font-light line-clamp-2 mt-1">{product.description}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E7DFC9]/60">
                      <Link
                        href={`/collections/${product.id}`}
                        className="border border-[#2B3325] text-[#2B3325] hover:bg-[#2B3325] hover:text-[#F4F2E8] py-2.5 rounded-full text-[10px] tracking-[0.15em] uppercase font-bold transition-all text-center"
                      >
                        {t("common:viewDetails")}
                      </Link>
                      <button
                        onClick={() => setInquiryProduct(product)}
                        className="bg-[#2B3325] hover:bg-[#C8A76A] text-white hover:text-[#1D2418] py-2.5 rounded-full text-[10px] tracking-[0.15em] uppercase font-bold transition-all text-center cursor-pointer shadow-sm"
                      >
                        {t("common:inquire")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Inquiry Modal */}
      {inquiryProduct && (
        <ProductInquiryModal
          product={{
            id: inquiryProduct.id,
            name: inquiryProduct.name,
            category: inquiryProduct.family,
            description: inquiryProduct.description,
            image: inquiryProduct.image,
            selectedSpec: inquiryProduct.volume,
          }}
          onClose={() => setInquiryProduct(null)}
        />
      )}
    </>
  );
}
