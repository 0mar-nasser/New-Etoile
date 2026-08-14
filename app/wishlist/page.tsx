"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

export default function WishlistPage() {
  const { t, i18n } = useTranslation(["navbar", "common", "cart"]);
  const { wishlist, toggleWishlist, addToCart } = useCart();
  const isArabic = i18n.language?.startsWith("ar");

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
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
                  ? "استكشف مجموعتنا الفاخرة من العطور والمنتجات واحفظ خياراتك المفضلة هنا."
                  : "Explore our luxury catalog of perfumes and products, then save your top choices here."}
              </p>
            </div>
            <Link
              href="/collections"
              className="inline-block bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-md hover:scale-105"
            >
              {isArabic ? "تصفح المجموعات" : "Explore Catalog"}
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-[#E7DFC9] pb-4">
              <span className="text-xs uppercase tracking-widest text-[#2B3325]/70 font-medium">
                {isArabic
                  ? `إجمالي المنتجات المحفوظة: ${wishlistedProducts.length}`
                  : `Total Saved Items: ${wishlistedProducts.length}`}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/70 border border-[#E7DFC9] rounded-[24px] p-5 flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl transition-all duration-300 group"
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
                      <p className="font-serif text-lg font-bold text-[#C8A76A] mt-2">${product.price}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E7DFC9]/60">
                    <Link
                      href={`/collections/${product.id}`}
                      className="border border-[#2B3325] text-[#2B3325] hover:bg-[#2B3325] hover:text-[#F4F2E8] py-2.5 rounded-full text-[10px] tracking-[0.15em] uppercase font-bold transition-all text-center"
                    >
                      {isArabic ? "التفاصيل" : "View"}
                    </Link>
                    <button
                      onClick={() => addToCart(product, "100ml")}
                      className="bg-[#2B3325] hover:bg-[#C8A76A] text-white hover:text-[#1D2418] py-2.5 rounded-full text-[10px] tracking-[0.15em] uppercase font-bold transition-all text-center cursor-pointer shadow-sm"
                    >
                      {t("common:addToCart")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
