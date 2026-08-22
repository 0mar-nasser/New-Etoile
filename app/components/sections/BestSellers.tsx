"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useCart } from "../../context/CartContext";
import { PRODUCTS, Product } from "../../data/products";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import ProductInquiryModal from "../ui/ProductInquiryModal";

interface BestSellersProps {
  onQuickView?: (product: Product) => void;
}

export default function BestSellers({ onQuickView }: BestSellersProps) {
  const { t, i18n } = useTranslation(["home", "common"]);
  const { toggleWishlist, isInWishlist } = useCart();
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const isRtl = i18n.language?.startsWith("ar");

  // Display all best selling products in slider
  const bestSellers = PRODUCTS;

  const updateScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    // In RTL, scrollLeft can be negative or positive depending on the browser
    const scrollPos = Math.abs(scrollLeft);
    const maxScroll = scrollWidth - clientWidth - 5;

    setCanScrollLeft(scrollPos > 10);
    setCanScrollRight(scrollPos < maxScroll);

    // Calculate approximate active card index
    const cardWidth = 360;
    const newIndex = Math.min(
      Math.max(0, Math.round(scrollPos / cardWidth)),
      bestSellers.length - 1
    );
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    updateScrollState();
    slider.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      slider.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [bestSellers.length, isRtl]);

  const handleScroll = (direction: "prev" | "next") => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollAmount = 380; // approximate width of one card + gap

    // Direction calculation handling RTL
    let delta = direction === "next" ? scrollAmount : -scrollAmount;
    if (isRtl) {
      delta = -delta;
    }

    container.scrollBy({
      left: delta,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const cardWidth = 380;
    const targetScroll = index * cardWidth;

    container.scrollTo({
      left: isRtl ? -targetScroll : targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="py-12 md:py-18 bg-[#1D2418] text-[#F4F2E8] relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#C8A76A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#384233]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[92%]  mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          {/* Section Header with Slider Navigation */}
          <div className="flex flex-col items-center justify-center text-center w-full mx-auto mb-6 md:mb-10 select-none opacity-50 overflow-hidden">
            <span className="font-serif text-[clamp(1.6rem,7vw,7.5rem)] font-bold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-[#C8A76A] uppercase whitespace-nowrap leading-none block">
              MOST SELECTED
            </span>
          </div>

          {/* Interactive Products Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 px-1 -mx-1"
          >
            {bestSellers.map((product, index) => {
              const isFav = isInWishlist(product.id);

              return (
                <div
                  key={product.id}
                  className="w-[280px] sm:w-[320px] md:w-[300px] shrink-0 snap-start group relative flex flex-col justify-between bg-[#242D1F]/60 rounded-3xl border border-[#384233]/70 hover:border-[#C8A76A]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50"
                >
                  {/* Top Image Container */}
                  <div className="relative aspect-[2/2] w-full rounded-2xl overflow-hidden bg-[#161C12] border border-[#384233]/50">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out "
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
                      <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center z-10 ">
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

          {/* Slider Pagination Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {bestSellers.map((product, idx) => (
              <button
                key={product.id}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex
                  ? "w-8 bg-[#C8A76A]"
                  : "w-2 bg-[#384233] hover:bg-[#C8A76A]/50"
                  }`}
              />
            ))}
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
