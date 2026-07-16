"use client";

import React from "react";
import Link from "next/link";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function FeaturedCollection() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-[#F4F2E8] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="fade-in-section text-center max-w-xl mx-auto mb-16 md:mb-24 flex flex-col items-center space-y-4">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C8A76A] font-bold">Curated Selections</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1D2418] font-light">Featured Collections</h2>
          <div className="h-[1px] w-12 bg-[#2B3325]/40 mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Men */}
          <div className="fade-in-section relative h-[450px] group overflow-hidden rounded-[24px] shadow-md border border-[#E7DFC9] bg-[#2B3325]">
            <ImagePlaceholder label="Men's Fragrance Campaign" className="opacity-95" theme="dark" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D2418]/90 via-[#1D2418]/25 to-transparent z-10" />
            <div className="absolute inset-0 p-8 z-30 flex flex-col justify-end items-start space-y-2">
              <span className="text-[10px] tracking-[0.25em] text-[#C8A76A] uppercase font-medium">For Him</span>
              <h3 className="font-serif text-2xl text-[#F4F2E8] tracking-wide font-light">Men&rsquo;s Collection</h3>
              <p className="text-xs text-[#E7DFC9]/80 font-light line-clamp-2">Earthy, leather, and smoked woods tailored for power and grace.</p>
              <Link href="/collections?filter=men" className="pt-2 text-xs text-[#F4F2E8] hover:text-[#C8A76A] flex items-center space-x-2 transition-colors duration-300 font-light tracking-widest uppercase">
                <span>Explore</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Women */}
          <div className="fade-in-section relative h-[450px] group overflow-hidden rounded-[24px] shadow-md border border-[#E7DFC9] bg-[#2B3325]">
            <ImagePlaceholder label="Women's Floral Atmosphere" className="opacity-95" theme="light" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D2418]/90 via-[#1D2418]/25 to-transparent z-10" />
            <div className="absolute inset-0 p-8 z-30 flex flex-col justify-end items-start space-y-2">
              <span className="text-[10px] tracking-[0.25em] text-[#C8A76A] uppercase font-medium">For Her</span>
              <h3 className="font-serif text-2xl text-[#F4F2E8] tracking-wide font-light">Women&rsquo;s Collection</h3>
              <p className="text-xs text-[#E7DFC9]/80 font-light line-clamp-2">Ethereal floral, rich jasmine, and white musk of timeless romance.</p>
              <Link href="/collections?filter=women" className="pt-2 text-xs text-[#F4F2E8] hover:text-[#C8A76A] flex items-center space-x-2 transition-colors duration-300 font-light tracking-widest uppercase">
                <span>Explore</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Unisex */}
          <div className="fade-in-section relative h-[450px] group overflow-hidden rounded-[24px] shadow-md border border-[#E7DFC9] bg-[#2B3325]">
            <ImagePlaceholder label="Shared/Unisex Sculptural Bottle" className="opacity-95" theme="dark" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D2418]/90 via-[#1D2418]/25 to-transparent z-10" />
            <div className="absolute inset-0 p-8 z-30 flex flex-col justify-end items-start space-y-2">
              <span className="text-[10px] tracking-[0.25em] text-[#C8A76A] uppercase font-medium">Shared</span>
              <h3 className="font-serif text-2xl text-[#F4F2E8] tracking-wide font-light">Unisex Scent</h3>
              <p className="text-xs text-[#E7DFC9]/80 font-light line-clamp-2">Harmonious balanced blends created for the shared aesthetic.</p>
              <Link href="/collections?filter=unisex" className="pt-2 text-xs text-[#F4F2E8] hover:text-[#C8A76A] flex items-center space-x-2 transition-colors duration-300 font-light tracking-widest uppercase">
                <span>Explore</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Exclusive */}
          <div className="fade-in-section relative h-[450px] group overflow-hidden rounded-[24px] shadow-md border border-[#E7DFC9] bg-[#2B3325]">
            <ImagePlaceholder label="Exclusive Collection Scent Flask" className="opacity-95" theme="light" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D2418]/90 via-[#1D2418]/25 to-transparent z-10" />
            <div className="absolute inset-0 p-8 z-30 flex flex-col justify-end items-start space-y-2">
              <span className="text-[10px] tracking-[0.25em] text-[#C8A76A] uppercase font-medium">Rare</span>
              <h3 className="font-serif text-2xl text-[#F4F2E8] tracking-wide font-light">Exclusive Line</h3>
              <p className="text-xs text-[#E7DFC9]/80 font-light line-clamp-2">Limited-run compositions using the rarest olfactory notes on Earth.</p>
              <Link href="/collections" className="pt-2 text-xs text-[#F4F2E8] hover:text-[#C8A76A] flex items-center space-x-2 transition-colors duration-300 font-light tracking-widest uppercase">
                <span>Explore</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
