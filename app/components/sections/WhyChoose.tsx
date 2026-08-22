"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import brandData from "../../data/brand.json";

const FEATURE_IMAGES: Record<string, string> = {
  ingredients: "/images/why_ingredients.png",
  longevity: "/images/why_longevity.png",
  packaging: "/images/why_packaging.png",
  shipping: "/images/why_shipping.png",
};

const FEATURE_ICONS = [
  // Ingredient / droplet
  <svg key="i" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.4" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a.75.75 0 0 1 .612.315l6.182 8.748A6.75 6.75 0 1 1 5.206 11.313l6.182-8.748A.75.75 0 0 1 12 2.25Z" /></svg>,
  // Crystal / gem
  <svg key="c" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.4" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m9 3.75-5.25 4.5L12 21l8.25-12.75L15 3.75H9Z" /></svg>,
  // Precision / target
  <svg key="p" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.4" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
  // Globe / shipping
  <svg key="g" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.4" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>,
];

export default function WhyChoose() {
  const { t, i18n } = useTranslation(["home", "common"]);
  const isRtl = i18n.language === "ar";
  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % brandData.features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (idx: number) => {
    if (idx === activeIdx) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setAnimating(false);
    }, 200);
  };

  const activeFeature = brandData.features[activeIdx];
  const titleKey = `whyChoose.feature${activeIdx + 1}Title` as const;
  const descKey = `whyChoose.feature${activeIdx + 1}Desc` as const;

  return (
    <section
      id="why-choose"
      className="relative z-20 overflow-hidden bg-[#F7F4EC] py-20 md:py-28 text-[#273124] border-t border-[#DCD6C5]"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/3 rounded-full bg-[#C8A76A]/8 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-[#273124]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div className="space-y-3 max-w-2xl rtl:text-right">
            <div className="flex items-center gap-3 rtl:flex-row-reverse">
              <span className="h-px w-10 bg-[#C8A76A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#A68340]">
                {t("whyChoose.badge")}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#1D2418] leading-[1.1]">
              {t("whyChoose.title")}
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-[#5F6658] md:text-right rtl:text-left md:rtl:text-right border-l border-[#C8A76A]/30 pl-5 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-5">
            {t("whyChoose.subtitle")}
          </p>
        </div>

        {/* ── Main Layout: Image Left + Tabs Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* LEFT: Large Feature Image with Overlay Metadata */}
          <div className="relative rounded-[32px] overflow-hidden min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] border border-[#DCD6C5]">
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}
            >
              <Image
                src={FEATURE_IMAGES[activeFeature.id]}
                alt={activeFeature.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1410]/90 via-[#0E1410]/40 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-${isRtl ? "l" : "r"} from-transparent to-[#0E1410]/30`} />
            </div>

            {/* Top-left watermark */}
            <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6 z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-light">
                Maison Étoile
              </span>
            </div>

            {/* Progress bar top */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-10">
              <div
                className="h-full bg-[#C8A76A] transition-all duration-[5000ms] ease-linear"
                style={{ width: `${((activeIdx + 1) / brandData.features.length) * 100}%` }}
              />
            </div>

            {/* Bottom Feature Active Info */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-7 md:p-9 z-10 transition-all duration-300 ${animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"} rtl:text-right`}
            >
              <div className="flex items-center gap-3 mb-3 rtl:flex-row-reverse">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C8A76A]/50 bg-[#C8A76A]/15 text-[#C8A76A]">
                  {FEATURE_ICONS[activeIdx]}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#C8A76A]">
                  0{activeIdx + 1} / 0{brandData.features.length}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F4F2E8] leading-snug">
                {t(titleKey, { defaultValue: activeFeature.title })}
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-light text-[#E7DFC9]/80 leading-relaxed max-w-sm">
                {t(descKey, { defaultValue: activeFeature.text })}
              </p>

              {/* Dot Indicators */}
              <div className="mt-6 flex items-center gap-2 rtl:flex-row-reverse">
                {brandData.features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeIdx
                        ? "w-6 h-2 bg-[#C8A76A]"
                        : "w-2 h-2 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Feature ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Feature Tab List */}
          <div className="flex flex-col justify-between gap-4">
            {brandData.features.map((feature, idx) => {
              const fTitleKey = `whyChoose.feature${idx + 1}Title` as const;
              const fDescKey = `whyChoose.feature${idx + 1}Desc` as const;
              const isActive = idx === activeIdx;

              return (
                <button
                  key={feature.id}
                  onClick={() => handleSelect(idx)}
                  className={`group w-full text-left rtl:text-right rounded-[24px] border p-5 sm:p-6 transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "border-[#C8A76A]/60 bg-[#273124] shadow-xl shadow-[#273124]/15"
                      : "border-[#DCD6C5] bg-white/60 hover:border-[#C8A76A]/30 hover:bg-white/90"
                  }`}
                >
                  <div className="flex items-start gap-4 rtl:flex-row-reverse">
                    {/* Icon */}
                    <div
                      className={`shrink-0 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-[#C8A76A]/50 bg-[#C8A76A]/15 text-[#C8A76A]"
                          : "border-[#DCD6C5] bg-[#F7F4EC] text-[#8C8B7A] group-hover:border-[#C8A76A]/30 group-hover:text-[#A68340]"
                      }`}
                    >
                      {FEATURE_ICONS[idx]}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Number + Tag */}
                      <div className="flex items-center gap-2 mb-1.5 rtl:flex-row-reverse">
                        <span
                          className={`font-mono text-[10px] tracking-widest ${isActive ? "text-[#C8A76A]" : "text-[#9C9A8B]"}`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="h-px flex-1 bg-current opacity-15" />
                      </div>

                      <h3
                        className={`font-serif text-base sm:text-lg font-light leading-snug transition-colors duration-300 ${
                          isActive ? "text-[#F4F2E8]" : "text-[#273124] group-hover:text-[#1D2418]"
                        }`}
                      >
                        {t(fTitleKey, { defaultValue: feature.title })}
                      </h3>

                      {/* Expandable desc */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isActive ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-xs sm:text-sm font-light leading-relaxed text-[#E7DFC9]/75">
                          {t(fDescKey, { defaultValue: feature.text })}
                        </p>
                      </div>
                    </div>

                    {/* Active Arrow */}
                    <span
                      className={`shrink-0 text-[#C8A76A] transition-all duration-300 self-center ${
                        isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 rtl:translate-x-2"
                      } ${isRtl ? "rotate-180" : ""}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Stats Row */}
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {brandData.stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-[18px] border border-[#DCD6C5] bg-white/60 px-4 py-4 text-center backdrop-blur-sm"
                >
                  <span className="font-serif text-xl sm:text-2xl font-light text-[#A68340] block tracking-tight leading-none">
                    {stat.num}
                  </span>
                  <span className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#5F6658] font-medium block leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}