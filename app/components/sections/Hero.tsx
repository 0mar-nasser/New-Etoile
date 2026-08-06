"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#1D2418] flex items-center overflow-hidden">
      <Image
        src="/images/hero_perfume_nature_bg.png"
        alt="Perfume Packaging Components - Empty Glass Bottle, Cap, Spray Pump, and Perfume Oil in Natural Scenery"
        fill
        priority
        className="object-cover object-right md:object-right"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1D2418]/95 via-[#1D2418]/65 to-transparent z-10" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-20 h-full pt-20 flex items-center">
        <div className="flex flex-col justify-center space-y-6 text-[#F4F2E8] max-w-xl md:max-w-2xl">
          <div className="flex items-center space-x-3 opacity-90 mx-auto mb-4 gap-5">
            <div className="h-[1px] w-24 md:w-36 bg-[#C8A76A]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-[#C8A76A] font-semibold whitespace-nowrap">
              Perfume & Packaging Factory
            </span>
            <div className="h-[1px] w-24 md:w-36 bg-[#C8A76A]" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl xl:text-7xl font-light tracking-wide leading-tight md:leading-none">
            Build Your Custom <br />
            <span className="italic text-[#E7DFC9]">Perfume Brand</span>
          </h1>
          <p className="text-sm md:text-base text-[#E7DFC9]/85 font-light leading-relaxed max-w-xl">
            Industrial supplier of luxury empty glass flacons, magnetic caps, precision spray pumps, and concentrated French perfume oils. Select your components and craft your signature fragrance line with low MOQ and white-glove global supply.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <Button variant="primary" href="/collections">
              Explore Supply Catalog
            </Button>
            <Button variant="secondary" href="#wholesale">
              Customize Perfume Line
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
