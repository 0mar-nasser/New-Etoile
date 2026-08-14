"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";

export default function Hero() {
  const { t, i18n } = useTranslation("home");
  const isArabic = i18n.language?.startsWith("ar");

  return (
    <section className="relative min-h-[92vh] md:min-h-screen bg-[#1D2418] flex items-center overflow-hidden pt-24 pb-16 md:py-0">
      {/* Background Image positioned dynamically for LTR and RTL */}
      <Image
        src="/images/hero_perfume_nature_bg.png"
        alt="Étoile Haute Parfumerie & Packaging"
        fill
        priority
        className="object-cover object-center lg:object-right rtl:lg:object-left transition-all duration-700 opacity-70 md:opacity-85"
        sizes="100vw"
      />

      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1D2418] via-[#1D2418]/85 to-[#1D2418]/30 rtl:bg-gradient-to-l rtl:from-[#1D2418] rtl:via-[#1D2418]/85 rtl:to-[#1D2418]/30 z-10" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-20 h-full flex flex-col justify-center">
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-[#F4F2E8] max-w-xl md:max-w-2xl text-left rtl:text-right">

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-wide leading-tight md:leading-[1.15]">
            {t("hero.title")}{" "}
            <span className={`block sm:inline ${isArabic ? "text-[#C8A76A] font-medium" : "italic text-[#E7DFC9]"}`}>
              {t("hero.titleHighlight")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base xl:text-lg text-[#E7DFC9]/90 font-light leading-relaxed max-w-xl">
            {t("hero.subtitle")}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2">
            <Button variant="primary" href="/collections" className="shadow-xl hover:scale-105">
              {t("hero.exploreCatalog")}
            </Button>
            <Button variant="secondary" href="/contact" className="hover:scale-105">
              {t("hero.contactUs")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
