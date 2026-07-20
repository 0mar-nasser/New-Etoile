"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#1D2418] flex items-center overflow-hidden">
      <Image
        src="/images/Firefly.png"
        alt="Étoile Signature Perfume"
        fill
        priority
        className="object-cover object-[70%_center] md:object-right"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1D2418]/95 via-[#1D2418]/75 to-[#1D2418]/20 z-10" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-20 h-full pt-20 flex items-center">
        <div className="flex flex-col justify-center space-y-6 text-[#F4F2E8] max-w-xl md:max-w-2xl">
          <div className="flex items-center space-x-3 opacity-90 mx-auto mb-8 gap-5">
            <div className="h-[1px] w-40 bg-[#C8A76A]" />
            <Image
              src="/Logos/Nav-Logo-light.png"
              alt="Étoile emblem"
              width={42}
              height={42}
              className="object-contain"
            />
            <div className="h-[1px] w-40 bg-[#C8A76A]" />
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
