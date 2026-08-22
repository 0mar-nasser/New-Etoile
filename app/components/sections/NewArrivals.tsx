"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useCart } from "../../context/CartContext";
import { PRODUCTS, Product } from "../../data/products";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import ProductInquiryModal from "../ui/ProductInquiryModal";

interface NewArrivalsProps {
  onQuickView?: (product: Product) => void;
}

export default function NewArrivals({ onQuickView }: NewArrivalsProps) {
  const { t, i18n } = useTranslation(["home", "common"]);
  const { toggleWishlist, isInWishlist } = useCart();
  const isRtl = i18n.language === "ar";
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);

  const baseProduct = PRODUCTS.find((p) => p.id === "originelle-intense") || PRODUCTS[0];

  const upcomingProducts: Product[] = [
    {
      ...baseProduct,
      id: "originelle-intense",
      name: isRtl ? "أوريجينيل إنتنس" : "Originelle Intense",
      family: isRtl ? "خلاصة شرقية" : "Oriental Extract",
      notes: ["Oud", "Amber", "Rose"],
      description: isRtl
        ? "عطر فرنسي فاخر بتركيز عالٍ ونوتات غنية تدوم طويلاً."
        : "A rich luxury French fragrance with high sillage and longevity.",
      image: baseProduct.image || "/images/perfumes/perfume_or_rose.png",
    },
    {
      ...baseProduct,
      id: "noir-etoile",
      name: isRtl ? "نوار إتوال" : "Noir Étoile",
      family: isRtl ? "أخشاب شرقية" : "Woody Oriental",
      notes: ["Oud", "Leather", "Patchouli"],
      description: isRtl
        ? "عطر خشبي غامض يتألق بنفحات الجلود الفاخرة ودفء العود الشرقي الأصيل."
        : "A mysterious woody fragrance with rich leather accords and deep oriental warmth.",
      image: "/images/perfumes/perfume_bois_de_nuit.png",
    },
    {
      ...baseProduct,
      id: "velvet-rose",
      name: isRtl ? "فلفت روز" : "Velvet Rose",
      family: isRtl ? "زهري ناعم" : "Velvet Floral",
      notes: ["Rose", "Peony", "White Musk"],
      description: isRtl
        ? "عطر زهري راقٍ يفوح ببتلات الورد المخملي والمسك الأبيض النقي."
        : "An elegant floral fragrance wrapped in velvety rose petals and soft white musk.",
      image: "/images/perfumes/perfume_or_rose.png",
    },
    {
      ...baseProduct,
      id: "ambre-imperial",
      name: isRtl ? "عنبر إمبريال" : "Ambre Impérial",
      family: isRtl ? "عنبر بلسمي" : "Amber Warmth",
      notes: ["Amber", "Bourbon Vanilla", "Sandalwood"],
      description: isRtl
        ? "تركيز عنبري دافئ غني بفانيليا البوربون النادرة وخشب الصندل الكريمي."
        : "A warm golden amber concentrate infused with rare bourbon vanilla and creamy sandalwood.",
      image: "/images/perfumes/perfume_discovery_set.png",
    },
  ];

  return (
    <>
      <section id="new-arrivals" className="relative overflow-hidden bg-[#151C12] py-14 text-[#F4F2E8] md:py-18">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C8A76A]/10 blur-[140px]" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-[450px] w-[400px] rounded-full bg-[#384233]/40 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12 z-10">
          {/* Section Header - Kept exactly as specified */}
          <div className="flex flex-col items-center justify-center text-center w-full mx-auto mb-6 md:mb-10 select-none opacity-50 overflow-hidden">
            <span className="font-serif text-[clamp(1.6rem,7vw,7.5rem)] font-bold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-[#C8A76A] uppercase whitespace-nowrap leading-none block">
              NEW ARRIVALS
            </span>
          </div>

          {/* Cards Grid with Requested Card Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 mt-6">
            {upcomingProducts.map((product) => {
              const isFav = isInWishlist(product.id);

              return (
                <div
                  key={product.id}
                  className="w-full group relative flex flex-col justify-between bg-[#242D1F]/60 rounded-3xl border border-[#384233]/70 hover:border-[#C8A76A]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 "
                >
                  {/* Top Image Container */}
                  <div className="relative aspect-[2/2] w-full rounded-2xl overflow-hidden bg-[#161C12] border border-[#384233]/50">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 280px, 350px"
                      />
                    ) : (
                      <ImagePlaceholder
                        label={product.name}
                        aspect="aspect-[4/5]"
                        theme="dark"
                        className="h-full"
                      />
                    )}

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-3.5 right-3.5 rtl:right-auto rtl:left-3.5 z-20 bg-[#1D2418]/85 hover:bg-[#C8A76A] hover:text-[#1D2418] text-[#F4F2E8] w-8 h-8 rounded-full flex items-center justify-center border border-[#384233] transition-all duration-300 cursor-pointer shadow-md"
                      aria-label={t("common:addToWishlist")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={isFav ? "#C8A76A" : "none"}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke={isFav ? "#C8A76A" : "currentColor"}
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    </button>

                    {/* Quick View Button on Image Hover */}
                    {onQuickView && (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center z-10 pointer-events-none group-hover:pointer-events-auto">
                        <button
                          onClick={() => onQuickView(product)}
                          className="bg-[#F4F2E8] text-[#1D2418] hover:bg-[#C8A76A] px-4 py-2 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 shadow-lg cursor-pointer mb-4"
                        >
                          {t("common:quickView")}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="space-y-3 rtl:text-right flex-1 flex flex-col justify-between p-5">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A76A] font-semibold block">
                        {product.family}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-light text-[#F4F2E8] group-hover:text-[#C8A76A] transition-colors mt-1 line-clamp-1">
                        {product.name}
                      </h3>
                    </div>

                    {/* Notes tags */}
                    {product.notes && product.notes.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.notes.slice(0, 3).map((note) => (
                          <span
                            key={note}
                            className="text-[9px] bg-[#1D2418] text-[#E7DFC9]/80 px-2.5 py-0.5 rounded-full border border-[#384233]/70 font-light"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="pt-4 border-t border-[#384233]/60 flex items-center justify-between gap-3">
                      <Link
                        href={`/collections/${product.id}`}
                        className="text-[11px] tracking-[0.15em] uppercase text-[#E7DFC9]/80 hover:text-[#C8A76A] font-medium transition-colors"
                      >
                        {t("common:viewDetails")}
                      </Link>

                      <button
                        onClick={() => setInquiryProduct(product)}
                        className="bg-[#C8A76A] hover:bg-[#E7DFC9] text-[#1D2418] px-4 py-2 rounded-full text-[10px] tracking-[0.18em] uppercase font-bold transition-all duration-300 cursor-pointer shadow-md hover:scale-105 active:scale-95"
                      >
                        {t("common:inquire")}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
