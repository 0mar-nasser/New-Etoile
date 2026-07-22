"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { Product } from "../../data/products";
import ImagePlaceholder from "../ui/ImagePlaceholder";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  className?: string;
}

export default function ProductCard({
  product,
  onQuickView,
  className = ""
}: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const isFav = isInWishlist(product.id);

  return (
    <div
      className={`bg-[#F4F2E8] rounded-[24px] border border-[#E7DFC9]/60 p-6 flex flex-col relative group shadow-sm transition-all duration-500 hover:shadow-xl hover:border-[#C8A76A]/40 ${className}`}
    >
      {/* Placeholder Container */}
      <div className="relative w-full aspect-[4/5] rounded-[18px] overflow-hidden flex items-center justify-center cursor-pointer mb-6">
        {/* <ImagePlaceholder label={`${product.name} Bottle Scent`} aspect="aspect-[4/5]" theme="light" /> */}

        {/* Hover Info Overlay */}
        <div className="absolute inset-0 bg-[#2B3325]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button
            onClick={() => onQuickView(product)}
            className="bg-[#F4F2E8] text-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] px-5 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0 cursor-pointer"
          >
            Quick View
          </button>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-[#2B3325] w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors focus:outline-none z-20 cursor-pointer"
          aria-label="Add to Wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFav ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-[18px] h-[18px] ${isFav ? "text-[#C8A76A]" : "text-[#2B3325]"}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>

        {/* Default Sizing tag */}
        <span className="absolute bottom-4 left-4 bg-[#2B3325] text-white text-[8px] tracking-widest uppercase font-light px-3 py-1 rounded-full opacity-90">
          100ml
        </span>
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow space-y-2 text-left">
        <span className="text-[10px] uppercase tracking-wider text-[#C8A76A] font-semibold">{product.family}</span>
        <Link href={`/collections/${product.id}`} className="font-serif text-xl text-[#1D2418] font-light tracking-wide hover:text-[#C8A76A] transition-colors">
          {product.name}
        </Link>
        <p className="text-xs text-[#2B3325]/75 font-light leading-relaxed flex-grow line-clamp-2">
          {product.tagline}
        </p>

        {/* Notes tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {product.notes.map((note, i) => (
            <span key={i} className="text-[9px] bg-[#E7DFC9]/50 text-[#384233] px-2.5 py-0.5 rounded-full font-light">
              {note}
            </span>
          ))}
        </div>

        {/* Price and Add button */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E7DFC9]/50 mt-4">
          <span className="font-serif text-lg text-[#1D2418] font-medium">${product.price}</span>
          <div className="flex items-center space-x-3">
            <Link
              href={`/collections/${product.id}`}
              className="text-[9px] tracking-widest uppercase text-[#2B3325] hover:text-[#C8A76A] font-semibold border-b border-[#2B3325]/20 hover:border-[#C8A76A]/40 pb-0.5"
            >
              View Details
            </Link>
            <button
              onClick={() => addToCart(product, "100ml")}
              className="luxury-btn bg-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] text-[#F4F2E8] px-4 py-2.5 rounded-full text-[9px] tracking-widest uppercase font-semibold transition-all duration-300 shadow-md focus:outline-none cursor-pointer"
            >
              Add To Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
