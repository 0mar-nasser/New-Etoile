"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useCart } from "./context/CartContext";
import { Product } from "./data/products";
import ImagePlaceholder from "./components/ui/ImagePlaceholder";

// Section Components
import Hero from "./components/sections/Hero";
import FeaturedCollection from "./components/sections/FeaturedCollection";
import BestSellers from "./components/sections/BestSellers";
import Wholesale from "./components/sections/Wholesale";
import NoteFamilies from "./components/sections/NoteFamilies";
import WhyChoose from "./components/sections/WhyChoose";
import NewArrivals from "./components/sections/NewArrivals";
import SocialGallery from "./components/sections/SocialGallery";
import Newsletter from "./components/sections/Newsletter";

export default function Home() {
  const { t } = useTranslation(["home", "common"]);
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Page Intro Loader
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1600);

    const unmountTimer = setTimeout(() => {
      setLoading(false);
    }, 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  // Intersection Observer scroll animation
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [loading]);

  return (
    <>
      {/* 1. LOADING SCREEN */}
      {loading && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1D2418] transition-all duration-700 ease-out ${
            fadeOut ? "opacity-0 translate-y-[-20px] pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="relative flex flex-col items-center">
            <div className="mb-6 animate-spin-fast">
              <Image
                src="/Logos/Nav-Logo-light.png"
                alt="Étoile emblem"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
                priority
              />
            </div>
            <div className="overflow-hidden mb-2">
              <h1 className="font-serif text-4xl md:text-5xl text-[#E7DFC9] uppercase animate-tracking-in">
                Étoile
              </h1>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A76A]/75 font-light animate-pulse">
              Haute Parfumerie & Packaging
            </p>

            <div className="mt-10 w-36 h-[1px] bg-[#E7DFC9]/10 relative overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 h-full bg-[#C8A76A] animate-progress" />
            </div>
          </div>
        </div>
      )}

      {/* MAIN LAYOUT */}
      <div
        className={`relative min-h-screen flex flex-col transition-opacity duration-1000 ${
          fadeOut ? "opacity-100" : "opacity-0"
        }`}
      >
        <Hero />

        <FeaturedCollection />

        <BestSellers onQuickView={setQuickViewProduct} />

        <Wholesale />

        <NewArrivals />

        <WhyChoose />

        <Newsletter />

        {/* DYNAMIC QUICK VIEW MODAL */}
        {quickViewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              onClick={() => setQuickViewProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <div className="bg-[#F4F2E8] border border-[#E7DFC9] rounded-[28px] max-w-2xl w-full p-8 shadow-2xl relative z-10 rtl:text-right">
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-6 right-6 rtl:right-auto rtl:left-6 hover:text-[#C8A76A] transition-colors focus:outline-none p-1 text-[#2B3325] cursor-pointer"
                aria-label={t("common:close")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left rtl:text-right">
                <div className="relative aspect-square w-full rounded-[20px] overflow-hidden">
                  <ImagePlaceholder label={`${quickViewProduct.name} Scent`} aspect="aspect-square" theme="light" />
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-[#C8A76A] font-semibold">
                      {quickViewProduct.family}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1D2418] font-light mt-1">
                      {quickViewProduct.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#2B3325]/85 leading-relaxed font-light">
                    {quickViewProduct.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#E7DFC9]/60">
                    <span className="font-serif text-xl font-semibold">${quickViewProduct.price}</span>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <button
                        onClick={() => {
                          addToCart(quickViewProduct, "100ml");
                          setQuickViewProduct(null);
                        }}
                        className="luxury-btn bg-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] text-[#F4F2E8] px-6 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all duration-300 cursor-pointer"
                      >
                        {t("common:addToCart")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
