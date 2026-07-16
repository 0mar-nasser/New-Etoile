"use client";

import React from "react";
import { PRODUCTS, Product } from "../../data/products";
import ProductCard from "../products/ProductCard";

interface BestSellersProps {
  onQuickView: (product: Product) => void;
}

export default function BestSellers({ onQuickView }: BestSellersProps) {
  // Filter out originelle intense to show the 4 core fragrances in Best Sellers
  const bestSellers = PRODUCTS.filter((p) => p.id !== "originelle-intense");

  return (
    <section id="best-sellers" className="py-24 md:py-32 bg-[#E7DFC9]/35 border-t border-[#E7DFC9]/60 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="fade-in-section text-center max-w-xl mx-auto mb-16 md:mb-24 flex flex-col items-center space-y-4">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C8A76A] font-bold">Olfactory Masterpieces</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1D2418] font-light">The Best Sellers</h2>
          <div className="h-[1px] w-12 bg-[#2B3325]/40 mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              className="fade-in-section"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
