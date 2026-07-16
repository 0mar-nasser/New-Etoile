"use client";

import React from "react";
import Link from "next/link";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function FeaturedCollection() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-[#F4F2E8] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="fade-in-section text-center max-w-2xl mx-auto mb-14 md:mb-20 flex flex-col items-center space-y-4">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C8A76A] font-bold">Curated Selections</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1D2418] font-light">Featured Collections</h2>
          <p className="text-sm md:text-base text-[#2B3325]/75 font-light leading-relaxed">
            Discover four refined scent stories from Étoile, each crafted with rare ingredients and designed to reflect a distinct mood.
          </p>
          <div className="h-[1px] w-16 bg-[#2B3325]/40 mt-2" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="fade-in-section relative h-[680px] overflow-hidden rounded-[32px] shadow-2xl border border-[#E7DFC9] bg-[#2B3325] group">
            <ImagePlaceholder label="Men's Fragrance Campaign" className="opacity-100 h-full" theme="dark" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D2418]/95 via-[#1D2418]/15 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 p-10 z-30 flex flex-col justify-end space-y-4">
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#C8A76A] font-semibold">
                For Him
              </span>
              <h3 className="font-serif text-4xl text-[#F4F2E8] font-light leading-tight">
                Men&rsquo;s Collection
              </h3>
              <p className="max-w-xl text-sm text-[#E7DFC9]/90 font-light leading-relaxed">
                Earthy leather, smoked woods, and warm accents designed to radiate confidence and quiet elegance.
              </p>
              <Link href="/collections?filter=men" className="inline-flex items-center space-x-2 text-xs text-[#F4F2E8] hover:text-[#C8A76A] font-light tracking-[0.25em] uppercase transition-colors duration-300">
                <span>Explore</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="fade-in-section relative h-[320px] overflow-hidden rounded-[28px] shadow-xl border border-[#E7DFC9] bg-[#2B3325] group">
              <ImagePlaceholder label="Women's Floral Atmosphere" className="opacity-100 h-full" theme="light" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2418]/90 via-[#1D2418]/15 to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 p-8 z-30 flex flex-col justify-end space-y-3">
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#C8A76A] font-semibold">
                  For Her
                </span>
                <h3 className="font-serif text-3xl text-[#F4F2E8] font-light leading-tight">
                  Women&rsquo;s Collection
                </h3>
                <Link href="/collections?filter=women" className="inline-flex items-center space-x-2 text-xs text-[#F4F2E8] hover:text-[#C8A76A] transition-colors duration-300 font-light tracking-[0.25em] uppercase">
                  <span>Explore</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="fade-in-section relative h-[320px] overflow-hidden rounded-[28px] shadow-xl border border-[#E7DFC9] bg-[#2B3325] group">
                <ImagePlaceholder label="Shared/Unisex Sculptural Bottle" className="opacity-100 h-full" theme="dark" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D2418]/90 via-[#1D2418]/15 to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 p-6 z-30 flex flex-col justify-end space-y-3">
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[#C8A76A] font-semibold">
                    Shared
                  </span>
                  <h3 className="font-serif text-2xl text-[#F4F2E8] font-light leading-tight">
                    Unisex Scent
                  </h3>
                  <Link href="/collections?filter=unisex" className="inline-flex items-center space-x-2 text-xs text-[#F4F2E8] hover:text-[#C8A76A] transition-colors duration-300 font-light tracking-[0.25em] uppercase">
                    <span>Explore</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

              <div className="fade-in-section relative h-[320px] overflow-hidden rounded-[28px] shadow-xl border border-[#E7DFC9] bg-[#2B3325] group">
                <ImagePlaceholder label="Exclusive Collection Scent Flask" className="opacity-100 h-full" theme="light" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D2418]/90 via-[#1D2418]/15 to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 p-6 z-30 flex flex-col justify-end space-y-3">
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[#C8A76A] font-semibold">
                    Rare
                  </span>
                  <h3 className="font-serif text-2xl text-[#F4F2E8] font-light leading-tight">
                    Exclusive Line
                  </h3>
                  <Link href="/collections" className="inline-flex items-center space-x-2 text-xs text-[#F4F2E8] hover:text-[#C8A76A] transition-colors duration-300 font-light tracking-[0.25em] uppercase">
                    <span>Explore</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
