"use client";

import React from "react";
import Button from "../ui/Button";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#1D2418] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#1D2418]/90 z-10" />
      
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20 h-full pt-20">
        {/* Hero Copy (Left) */}
        <div className="flex flex-col justify-center space-y-6 text-[#F4F2E8] max-w-xl md:max-w-2xl">
          <div className="flex items-center space-x-3 opacity-90">
            <div className="h-[1px] w-8 bg-[#C8A76A]" />
            <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#C8A76A] font-semibold">
              Maison de Parfum
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl font-light tracking-wide leading-tight md:leading-none">
            Discover Your <br />
            <span className="italic text-[#E7DFC9]">Signature Scent</span>
          </h1>
          <p className="text-sm md:text-base text-[#E7DFC9]/80 font-light leading-relaxed max-w-lg">
            Luxury fragrances crafted with raw French ingredients and sophisticated craftsmanship to leave unforgettable impressions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <Button variant="primary" href="/collections">
              Shop Collection
            </Button>
            <Button variant="secondary" href="#philosophy">
              Discover More
            </Button>
          </div>
        </div>

        {/* Perfume Bottle Image (Right) */}
        <div className="hidden lg:flex justify-center items-center relative h-full">
          <div className="relative w-[450px] h-[550px] animate-float flex items-center justify-center">
            <div className="absolute w-72 h-72 rounded-full bg-[#C8A76A]/5 blur-[100px] z-0" />
            <ImagePlaceholder 
              label="Etoile Signature Perfume Bottle" 
              className="rounded-[24px] shadow-2xl scale-95 border-[#C8A76A]/20" 
              theme="dark"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-20">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#E7DFC9]/50 font-light">Scroll</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-[#C8A76A] to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-[#F4F2E8] animate-bounce" style={{ animationDuration: '2s' }} />
        </div>
      </div>
    </section>
  );
}
