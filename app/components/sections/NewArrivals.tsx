"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { PRODUCTS } from "../../data/products";
import ImagePlaceholder from "../ui/ImagePlaceholder";
import Button from "../ui/Button";

export default function NewArrivals() {
  const { addToCart } = useCart();
  
  // Get L'Étoile Originelle Intense for new arrival presentation
  const newArrivalProduct = PRODUCTS.find((p) => p.id === "originelle-intense");

  if (!newArrivalProduct) return null;

  return (
    <section className="py-24 md:py-32 bg-[#E7DFC9]/15 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="fade-in-section text-center max-w-xl mx-auto mb-16 flex flex-col items-center space-y-4">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C8A76A] font-bold">New Chapters</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1D2418] font-light">The New Arrivals</h2>
          <div className="h-[1px] w-12 bg-[#2B3325]/40 mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#F4F2E8] p-8 md:p-12 rounded-[28px] border border-[#E7DFC9]/65 shadow-md">
          <div className="fade-in-section relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-[#2B3325]">
            <ImagePlaceholder label="L'Étoile Originelle Intense Scent Bottle" aspect="aspect-[4/3]" theme="dark" />
          </div>

          <div className="fade-in-section flex flex-col space-y-6 lg:pl-6 text-[#1D2418]">
            <div className="flex items-center space-x-2">
              <span className="bg-[#C8A76A]/20 text-[#C8A76A] text-[9px] tracking-widest uppercase font-bold px-3 py-1 rounded-full">
                Exclusive Release
              </span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-[#1D2418] font-light tracking-wide">
              {newArrivalProduct.name}
            </h3>
            <p className="text-xs text-[#C8A76A] tracking-[0.15em] uppercase font-semibold">
              {newArrivalProduct.notes.join(", ")}
            </p>
            <p className="text-sm text-[#2B3325]/80 font-light leading-relaxed">
              {newArrivalProduct.description}
            </p>
            
            <div className="flex items-center space-x-6">
              <span className="font-serif text-2xl text-[#1D2418] font-medium">${newArrivalProduct.price}</span>
              <span className="text-xs text-[#2B3325]/60 font-light">100ml / 3.4 FL. OZ.</span>
            </div>

            <div className="pt-2 flex items-center space-x-4">
              <Button
                onClick={() => addToCart(newArrivalProduct, "100ml")}
                variant="dark"
              >
                Pre-Order Scent
              </Button>
              <Link
                href={`/collections/${newArrivalProduct.id}`}
                className="text-xs tracking-widest uppercase text-[#2B3325] hover:text-[#C8A76A] border-b border-[#2B3325]/20 pb-0.5 font-light"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
