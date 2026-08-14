"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function SocialGallery() {
  const { t } = useTranslation("home");

  return (
    <section className="py-20 bg-[#E7DFC9]/20 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="fade-in-section flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 rtl:text-right">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A76A] font-bold">
              ✦ {t("socialGallery.title")}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1D2418] font-light mt-1">
              {t("socialGallery.subtitle")}
            </h2>
          </div>
          <a href="#" className="text-xs text-[#2B3325] hover:text-[#C8A76A] transition-colors duration-300 font-medium tracking-widest uppercase pb-1 border-b border-[#2B3325]/30">
            @etoile.parfums
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="fade-in-section relative aspect-square rounded-[20px] overflow-hidden group border border-[#E7DFC9] shadow-sm bg-[#2B3325]">
            <ImagePlaceholder label="Scent Bottle Flacon" aspect="aspect-square" theme="light" />
          </div>
          <div className="fade-in-section relative aspect-square rounded-[20px] overflow-hidden group border border-[#E7DFC9] shadow-sm bg-[#2B3325]">
            <ImagePlaceholder label="Atelier Glass Mold" aspect="aspect-square" theme="dark" />
          </div>
          <div className="fade-in-section relative aspect-square rounded-[20px] overflow-hidden group border border-[#E7DFC9] shadow-sm bg-[#2B3325]">
            <ImagePlaceholder label="Luxury Perfume Packaging" aspect="aspect-square" theme="light" />
          </div>
          <div className="fade-in-section relative aspect-square rounded-[20px] overflow-hidden group border border-[#E7DFC9] shadow-sm bg-[#2B3325]">
            <ImagePlaceholder label="Grasse Flower Harvest" aspect="aspect-square" theme="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
