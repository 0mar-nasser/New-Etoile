"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { PRODUCTS, Product } from "../../data/products";
import ImagePlaceholder from "../ui/ImagePlaceholder";

interface BestSellersProps {
  onQuickView: (product: Product) => void;
}

interface BestSellerItemProps {
  product: Product;
  index: number;
  onQuickView: (product: Product) => void;
}

function BestSellerItem({ product, index, onQuickView }: BestSellerItemProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const isFav = isInWishlist(product.id);
  const rank = String(index).padStart(2, "0");

  return (
    <article className="fade-in-section group relative grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-6 md:gap-8 p-6 md:p-8 rounded-[28px] border border-[#384233]/70 bg-[#2B3325]/40 hover:bg-[#2B3325]/70 hover:border-[#C8A76A]/30 transition-all duration-500">
      <div className="relative aspect-[4/5] md:aspect-auto md:h-full min-h-[280px] rounded-[20px] overflow-hidden border border-[#384233]/60">
        <ImagePlaceholder
          label={`${product.name} Bottle Scent`}
          aspect="aspect-[4/5]"
          theme="dark"
          className="h-full"
        />

        <button
          onClick={() => onQuickView(product)}
          className="absolute inset-0 flex items-center justify-center bg-[#1D2418]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] cursor-pointer"
          aria-label={`Quick view ${product.name}`}
        >
          <span className="bg-[#F4F2E8] text-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] px-5 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300">
            Quick View
          </span>
        </button>

        <button
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-4 right-4 bg-[#1D2418]/70 hover:bg-[#1D2418] text-[#F4F2E8] w-9 h-9 rounded-full flex items-center justify-center border border-[#384233] transition-colors focus:outline-none z-20 cursor-pointer"
          aria-label="Add to wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFav ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-[18px] h-[18px] ${isFav ? "text-[#C8A76A]" : "text-[#E7DFC9]"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <span className="font-serif text-5xl md:text-6xl text-[#C8A76A]/25 leading-none select-none">
              {rank}
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A76A] font-semibold pt-2">
              {product.family}
            </span>
          </div>

          <div className="space-y-2 -mt-2">
            <Link
              href={`/collections/${product.id}`}
              className="font-serif text-2xl md:text-3xl text-[#F4F2E8] font-light tracking-wide hover:text-[#C8A76A] transition-colors"
            >
              {product.name}
            </Link>
            <p className="text-sm text-[#E7DFC9]/75 font-light leading-relaxed max-w-xl">
              {product.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.notes.map((note) => (
              <span
                key={note}
                className="text-[9px] bg-[#1D2418]/60 border border-[#384233] text-[#E7DFC9] px-3 py-1 rounded-full font-light tracking-wide"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pt-4 border-t border-[#384233]/80">
          <div className="space-y-1">
            <span className="font-serif text-2xl text-[#F4F2E8]">${product.price}</span>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#E7DFC9]/50 font-light">
              {product.volume} Eau de Parfum
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={`/collections/${product.id}`}
              className="text-[10px] tracking-[0.2em] uppercase text-[#E7DFC9] hover:text-[#C8A76A] border-b border-[#E7DFC9]/30 hover:border-[#C8A76A]/50 pb-0.5 font-light transition-colors"
            >
              View Details
            </Link>
            <button
              onClick={() => addToCart(product, "100ml")}
              className="luxury-btn bg-[#C8A76A] hover:bg-[#F4F2E8] text-[#1D2418] px-6 py-3 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 cursor-pointer"
            >
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BestSellers({ onQuickView }: BestSellersProps) {
  const bestSellers = PRODUCTS.filter((p) => p.id !== "originelle-intense");

  return (
    <section
      id="best-sellers"
      className="py-24 md:py-32 bg-[#1D2418] text-[#F4F2E8] relative z-20"
    >
      <div className="absolute left-0 top-1/4 w-[420px] h-[420px] bg-[#C8A76A]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[320px] h-[320px] bg-[#C8A76A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-[1px] w-8 bg-[#C8A76A]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-semibold">
                Olfactory Masterpieces
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide leading-tight">
              The Best <span className="italic text-[#E7DFC9]">Sellers</span>
            </h2>

            <p className="text-sm md:text-base text-[#E7DFC9]/75 font-light leading-relaxed">
              Four signature compositions adored by our patrons — each a refined expression of
              French perfumery, chosen for their depth, longevity, and unmistakable character.
            </p>

            <div className="flex items-center gap-8 pt-2">
              <div>
                <span className="font-serif text-3xl text-[#C8A76A]">04</span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#E7DFC9]/60 mt-1">
                  Iconic Scents
                </p>
              </div>
              <div className="h-10 w-[1px] bg-[#384233]" />
              <div>
                <span className="font-serif text-3xl text-[#C8A76A]">24h+</span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#E7DFC9]/60 mt-1">
                  Lasting Aura
                </p>
              </div>
            </div>

            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#F4F2E8] hover:text-[#C8A76A] font-light transition-colors pt-2"
            >
              <span>Explore Full Collection</span>
              <span>→</span>
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
