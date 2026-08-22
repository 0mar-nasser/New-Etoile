"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface CategoryItem {
  id: string;
  index: string;
  tagKey: string;
  titleKey: string;
  descKey: string;
  href: string;
  imageSrc: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: "perfumes",
    index: "01",
    tagKey: "featuredCollection.fragrances.tag",
    titleKey: "featuredCollection.fragrances.title",
    descKey: "featuredCollection.fragrances.description",
    href: "/collections?category=perfumes",
    imageSrc: "/images/category/category-oils.png",
  },
  {
    id: "bottles",
    index: "02",
    tagKey: "featuredCollection.bottles.tag",
    titleKey: "featuredCollection.bottles.title",
    descKey: "featuredCollection.bottles.description",
    href: "/collections?category=bottles",
    imageSrc: "/images/category/category-bottles.png",
  },
  {
    id: "caps",
    index: "03",
    tagKey: "featuredCollection.caps.tag",
    titleKey: "featuredCollection.caps.title",
    descKey: "featuredCollection.caps.description",
    href: "/collections?category=caps",
    imageSrc: "/images/category/category-caps.png",
  },
  {
    id: "pumps",
    index: "04",
    tagKey: "featuredCollection.atomizers.tag",
    titleKey: "featuredCollection.atomizers.title",
    descKey: "featuredCollection.atomizers.description",
    href: "/collections?category=pumps",
    imageSrc: "/images/category/category-pumps.png",
  },
];

export default function FeaturedCollection() {
  const { t, i18n } = useTranslation(["home", "common"]);
  const isRtl = i18n.language === "ar";

  return (
    <section className="pt-10 bg-[#F4F2E8] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A76A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2B3325]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full mx-auto space-y-12 md:space-y-16 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center w-full  mx-auto gap-3">
          <div className="flex items-center space-x-0 rtl:space-x-reverse">
            <div className="h-[1px] w-12 bg-[#C8A76A]/60" />
            <Image
              src="/Logos/Nav-Logo-dark.png"
              alt="Étoile emblem"
              width={20}
              height={20}
              className="object-contain"
            />
            <div className="h-[1px] w-12 bg-[#C8A76A]/60" />
          </div>
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#2B3325]/80 font-bold">
            {t("featuredCollection.badge")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D2418] font-light">
            {t("featuredCollection.title")}
          </h2>
          <p className="text-sm md:text-base text-[#2B3325]/75 font-light leading-relaxed">
            {t("featuredCollection.subtitle")}
          </p>
          <div className="h-[1px] w-16 bg-[#2B3325]/40 mt-2" />
        </div>

        {/* Categories Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative h-[440px] md:h-[480px]  overflow-hidden bg-[#1D2418] border border-[#2B3325]/20 hover:border-[#C8A76A]/50  transition-all duration-500  flex flex-col justify-between p-6 md:p-7 select-none"
            >
              {/* Background Image with Smooth Zoom */}
              <Image
                src={cat.imageSrc}
                alt={t(cat.titleKey)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700"
              />

              {/* Dynamic Gradient Overlays for perfect legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#131910] via-[#131910]/60 to-[#131910]/20 transition-opacity duration-500 group-hover:opacity-90 z-10" />
              <div className="absolute inset-0 bg-[#C8A76A]/0 group-hover:bg-[#C8A76A]/5 transition-colors duration-500 z-10 pointer-events-none" />

              {/* Top Bar: Tag & Number Index */}
              <div className="relative z-20 flex items-center justify-center">
                <span className="inline-block text-[12px] tracking-[0.2em] uppercase text-[#C8A76A] font-semibold bg-[#1D2418]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C8A76A]/30 shadow-md">
                  {t(cat.tagKey)}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-20 space-y-3 rtl:text-right text-left">
                <h3 className="font-serif text-2xl md:text-3xl text-[#F4F2E8] font-light leading-tight group-hover:text-[#E7DFC9] transition-colors">
                  {t(cat.titleKey)}
                </h3>

                <p className="text-xs text-[#E7DFC9]/80 font-light leading-relaxed line-clamp-2">
                  {t(cat.descKey)}
                </p>

                {/* Explore Action Button */}
                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#C8A76A] font-medium group-hover:text-[#F4F2E8] transition-colors">
                    {t("common:learnMore", "استكشف التشكيلة")}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#2B3325]/80 group-hover:bg-[#C8A76A] text-[#E7DFC9] group-hover:text-[#1D2418] border border-[#C8A76A]/40 flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110">
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isRtl ? "group-hover:-translate-x-0.5 rotate-180" : "group-hover:translate-x-0.5"
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
