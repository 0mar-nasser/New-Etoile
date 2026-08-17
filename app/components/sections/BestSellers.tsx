"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useCart } from "../../context/CartContext";
import { PRODUCTS, Product } from "../../data/products";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import ProductInquiryModal from "../ui/ProductInquiryModal";

interface BestSellersProps {
  onQuickView: (product: Product) => void;
}

interface BestSellerItemProps {
  product: Product;
  index: number;
  onQuickView: (product: Product) => void;
  onInquire: (product: Product) => void;
}

function BestSellerItem({ product, index, onQuickView, onInquire }: BestSellerItemProps) {
  const { t, i18n } = useTranslation(["home", "common"]);
  const { toggleWishlist, isInWishlist } = useCart();
  const isFav = isInWishlist(product.id);
  const rank = String(index).padStart(2, "0");
  const isRtl = i18n.language === "ar";

  return (
    <article className="fade-in-section group relative grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-6 md:gap-8 p-6 md:p-8 rounded-[28px] border border-[#384233]/70 bg-[#2B3325]/40 hover:bg-[#2B3325]/70 hover:border-[#C8A76A]/30 transition-all duration-500 rtl:text-right">
      <div className="relative aspect-[4/5] md:aspect-auto md:h-full min-h-[280px] rounded-[20px] overflow-hidden border border-[#384233]/60 bg-[#1D2418]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        ) : (
          <ImagePlaceholder
            label={`${product.name} Scent`}
            aspect="aspect-[4/5]"
            theme="dark"
            className="h-full"
          />
        )}

        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-0 flex items-center justify-center bg-[#1D2418]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] cursor-pointer"
          aria-label={`Quick view ${product.name}`}
        >
          <span className="bg-[#F4F2E8] text-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] px-5 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 shadow-lg">
            {t("common:quickView")}
          </span>
        </button>

        <button
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 bg-[#1D2418]/70 hover:bg-[#1D2418] text-[#F4F2E8] w-9 h-9 rounded-full flex items-center justify-center border border-[#384233] transition-colors focus:outline-none z-20 cursor-pointer"
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
      </div>

      <div className="flex flex-col justify-between py-1 space-y-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#E7DFC9]/60">
            <span className="font-serif text-[#C8A76A] text-sm font-semibold">#{rank}</span>
            <span>{product.family}</span>
          </div>

          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-[#F4F2E8] font-light group-hover:text-[#E7DFC9] transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-[#C8A76A] tracking-[0.15em] uppercase mt-1">
              {product.tagline}
            </p>
          </div>

          <p className="text-xs md:text-sm text-[#E7DFC9]/80 font-light leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {product.notes.map((note) => (
              <span
                key={note}
                className="text-[10px] bg-[#1D2418] text-[#E7DFC9]/80 px-3 py-1 rounded-full border border-[#384233]"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Action area (No Prices) */}
        <div className="flex items-center justify-between pt-4 border-t border-[#384233]/70 gap-4">
          <Link
            href={`/collections/${product.id}`}
            className="text-xs tracking-[0.18em] uppercase text-[#E7DFC9]/80 hover:text-[#C8A76A] font-semibold border-b border-[#E7DFC9]/20 hover:border-[#C8A76A] pb-0.5 transition-colors"
          >
            {t("common:viewDetails")}
          </Link>

          <button
            onClick={() => onInquire(product)}
            className="luxury-btn bg-[#C8A76A] text-[#1D2418] hover:bg-[#E7DFC9] px-6 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 cursor-pointer shadow-md hover:scale-105 active:scale-95"
          >
            {t("common:inquire")}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function BestSellers({ onQuickView }: BestSellersProps) {
  const { t, i18n } = useTranslation(["home", "common"]);
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);
  const bestSellers = PRODUCTS.slice(0, 3);
  const isRtl = i18n.language === "ar";

  return (
    <>
      <section className="py-24 bg-[#1D2418] text-[#F4F2E8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
              <div className="space-y-6 rtl:text-right">
                <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full border border-[#C8A76A]/40 bg-[#C8A76A]/10 text-[#C8A76A] text-[10px] uppercase tracking-[0.25em]">
                  <span>✦</span>
                  <span>{t("bestsellers.badge")}</span>
                </div>

                <h2 className="font-serif text-4xl md:text-5xl font-light text-[#F4F2E8] leading-tight">
                  {t("bestsellers.title")}
                </h2>

                <p className="text-sm text-[#E7DFC9]/80 font-light leading-relaxed">
                  {t("bestsellers.subtitle")}
                </p>

                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#F4F2E8] hover:text-[#C8A76A] font-semibold transition-colors pt-2"
                >
                  <span>{t("bestsellers.viewAll")}</span>
                  <span>{isRtl ? "←" : "→"}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-6">
              {bestSellers.map((product, index) => (
                <BestSellerItem
                  key={product.id}
                  product={product}
                  index={index + 1}
                  onQuickView={onQuickView}
                  onInquire={(p) => setInquiryProduct(p)}
                />
              ))}
            </div>
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
