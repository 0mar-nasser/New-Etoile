"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";

const HERO_IMAGES = [
  "/images/Hero/hero-banner-1.png",
  "/images/Hero/hero-banner-2.png",
  "/images/Hero/hero-banner-3.png",
  "/images/Hero/hero-banner-4.jpg",
  "/images/Hero/hero-banner-5.jpg",
  "/images/Hero/hero-banner-6.jpg",
];

const AUTO_PLAY_DELAY = 5000; // 5 seconds

export default function Hero() {
  const { t, i18n } = useTranslation("home");
  const isArabic = i18n.language?.startsWith("ar");

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[70vh] bg-[#1D2418] flex items-center overflow-hidden pt-24 pb-16 md:py-0 select-none">
      {/* Background Images Slider */}
      {HERO_IMAGES.map((imgSrc, index) => (
        <div
          key={imgSrc}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-75 md:opacity-85 z-0" : "opacity-0 z-0 pointer-events-none"
            }`}
        >
          <Image
            src={imgSrc}
            alt="Étoile Haute Parfumerie"
            fill
            priority={index === 0}
            className="object-cover object-center lg:object-right rtl:lg:object-left"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Left Arrow Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous image"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-[#C8A76A] text-[#F4F2E8] hover:text-[#1D2418] backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow Button */}
      <button
        onClick={nextSlide}
        aria-label="Next image"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-[#C8A76A] text-[#F4F2E8] hover:text-[#1D2418] backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Simple Indicator Dots at Bottom */}
      <div className="absolute bottom-6 inset-x-0 z-30 flex items-center justify-center gap-2">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex
              ? "w-8 bg-[#C8A76A]"
              : "w-2 bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
