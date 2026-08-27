"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useCart } from "../../context/CartContext";
import { Product } from "../../data/products";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import ProductInquiryModal from "../ui/ProductInquiryModal";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  className?: string;
}

export default function ProductCard({
  product,
  onQuickView,
  className = "",
}: ProductCardProps) {
  const { t, i18n } = useTranslation(["common", "products"]);
  const isRtl = i18n.language?.startsWith("ar");
  const { toggleWishlist, isInWishlist } = useCart();
  const isFav = isInWishlist(product.id);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <>
      <div
        className={`bg-[#F4F2E8] rounded-[24px] border border-[#E7DFC9]/60 p-6 flex flex-col relative group shadow-sm transition-all duration-500 hover:shadow-xl hover:border-[#C8A76A]/40 ${isRtl ? "text-right" : "text-left"
          } ${className}`}
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] rounded-[18px] overflow-hidden flex items-center justify-center cursor-pointer mb-6 border border-[#E7DFC9]/50 bg-white/40">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <ImagePlaceholder label={`${product.name}`} aspect="aspect-[4/5]" theme="light" />
          )}

          {/* Hover Info Overlay */}
          <div className="absolute inset-0 bg-[#2B3325]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
            <button
              onClick={() => onQuickView(product)}
              className="bg-[#F4F2E8] text-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] px-4 py-2 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-lg transform translate-y-3 group-hover:translate-y-0 cursor-pointer"
            >
              {t("common:quickView")}
            </button>
            <Link
              href={`/collections/${product.id}`}
              className="bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-4 py-2 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-lg transform translate-y-3 group-hover:translate-y-0 cursor-pointer"
            >
              {t("common:viewDetails")}
            </Link>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className="absolute top-4 right-4 rtl:right-auto rtl:left-4 bg-white/85 hover:bg-white text-[#2B3325] w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all focus:outline-none z-20 cursor-pointer hover:scale-110 active:scale-95"
            aria-label={t("common:addToWishlist")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isFav ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-[18px] h-[18px] ${isFav ? "text-[#C8A76A]" : "text-[#2B3325]"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>

          {/* Catalog badge */}
          <span className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 bg-[#2B3325]/90 text-white text-[8px] tracking-widest uppercase font-light px-3 py-1 rounded-full backdrop-blur-xs">
            {product.volume || "Catalog"}
          </span>
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-grow space-y-2">
          <span className="text-[10px] uppercase tracking-wider text-[#C8A76A] font-bold">
            {product.family}
          </span>
          <Link
            href={`/collections/${product.id}`}
            className="font-serif text-xl text-[#1D2418] font-light tracking-wide hover:text-[#C8A76A] transition-colors leading-snug"
          >
            {product.name}
          </Link>
          <p className="text-xs text-[#2B3325]/75 font-light leading-relaxed flex-grow line-clamp-2">
            {product.tagline || product.description}
          </p>

          {/* Notes / features tags */}
          {product.notes && product.notes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {product.notes.slice(0, 3).map((note, i) => (
                <span
                  key={i}
                  className="text-[9px] bg-[#E7DFC9]/60 text-[#384233] px-2.5 py-0.5 rounded-full font-light"
                >
                  {note}
                </span>
              ))}
            </div>
          )}

          {/* Action Row - Inquire & View Details (No Prices) */}
          <div className="flex items-center justify-between pt-4 border-t border-[#E7DFC9]/60 mt-4 gap-2">
            <Link
              href={`/collections/${product.id}`}
              className="text-[10px] tracking-wider uppercase text-[#2B3325] hover:text-[#C8A76A] font-semibold border-b border-[#2B3325]/20 hover:border-[#C8A76A] pb-0.5 transition-colors"
            >
              {t("common:viewDetails")}
            </Link>

            <button
              onClick={() => setInquiryOpen(true)}
              className="luxury-btn bg-[#2B3325] hover:bg-[#C8A76A] text-[#F4F2E8] hover:text-[#1D2418] px-4 py-2 rounded-full text-[10px] tracking-wider uppercase font-bold transition-all duration-300 shadow-md focus:outline-none cursor-pointer hover:scale-105 active:scale-95"
            >
              {t("common:inquire")}
            </button>
          </div>
        </div>
      </div>

      {/* Inquiry Modal */}
      {inquiryOpen && (
        <ProductInquiryModal
          product={{
            id: product.id,
            name: product.name,
            category: product.family,
            description: product.description,
            image: product.image,
            selectedSpec: product.volume,
          }}
          onClose={() => setInquiryOpen(false)}
        />
      )}
    </>
  );
}
