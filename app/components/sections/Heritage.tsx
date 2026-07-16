"use client";

import React from "react";
import Button from "../ui/Button";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function Heritage() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-[#1D2418] text-[#F4F2E8] relative z-20 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-[#C8A76A]/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Image Column */}
          <div className="fade-in-section lg:col-span-5 relative w-full aspect-[4/5] rounded-[24px] overflow-hidden border border-[#384233] shadow-2xl">
            <ImagePlaceholder label="Raw Botanical Ingredients & Pipette" aspect="aspect-[4/5]" theme="dark" />
          </div>

          {/* Text Column */}
          <div className="fade-in-section lg:col-span-7 flex flex-col space-y-6 lg:pl-6">
            <div className="flex items-center space-x-3">
              <div className="h-[1px] w-8 bg-[#C8A76A]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-semibold">
                The Heritage
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-[#F4F2E8] leading-tight">
              Crafted by Hand, <br />
              <span className="italic text-[#E7DFC9]">Inspired by Elegance</span>
            </h2>
            
            <div className="h-[1px] w-full bg-[#384233] my-2" />
            
            <p className="text-sm md:text-base text-[#E7DFC9]/80 font-light leading-relaxed">
              Founded in Paris, the house of Étoile stems from a single vision: to revive the traditional art of high-end French perfumery through a contemporary, minimalist lens. We create fragrances that are not merely smelled, but remembered.
            </p>
            <p className="text-sm md:text-base text-[#E7DFC9]/80 font-light leading-relaxed">
              Every scent is composed using rare, responsibly sourced absolute oils—Grasse jasmine, Tuscan iris, and wild-harvested sandalwood. Blending science and romance, our nose masters craft balanced, olfactory poetry designed to linger as a warm, signature aura.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4 text-[#F4F2E8]">
              <div className="flex flex-col">
                <span className="font-serif text-3xl text-[#C8A76A] font-light">100%</span>
                <span className="text-[10px] tracking-widest uppercase text-[#E7DFC9]/70 font-light mt-1">Natural Absolutes</span>
              </div>
              <div className="hidden sm:block h-10 w-[1px] bg-[#384233]" />
              <div className="flex flex-col">
                <span className="font-serif text-3xl text-[#C8A76A] font-light">24h+</span>
                <span className="text-[10px] tracking-widest uppercase text-[#E7DFC9]/70 font-light mt-1">Olfactory Longevity</span>
              </div>
              <div className="hidden sm:block h-10 w-[1px] bg-[#384233]" />
              <div className="flex flex-col">
                <span className="font-serif text-3xl text-[#C8A76A] font-light">Paris</span>
                <span className="text-[10px] tracking-widest uppercase text-[#E7DFC9]/70 font-light mt-1">Origin & Design</span>
              </div>
            </div>

            <div className="pt-2">
              <Button variant="primary" href="/about">
                Read Scent Heritage
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
