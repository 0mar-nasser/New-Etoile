"use client";

import React from "react";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function SocialGallery() {
  return (
    <section className="py-20 bg-[#E7DFC9]/20 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="fade-in-section flex justify-between items-end mb-10">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A76A] font-bold">Social Vignettes</span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1D2418] font-light mt-1">Shared Journeys</h2>
          </div>
          <a href="#" className="text-xs text-[#2B3325] hover:text-[#C8A76A] transition-colors duration-300 font-medium tracking-widest uppercase pb-1 border-b border-[#2B3325]/30">
            Follow @etoile.parfums
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="fade-in-section relative aspect-square rounded-[20px] overflow-hidden group border border-[#E7DFC9] shadow-sm bg-[#2B3325]">
            <ImagePlaceholder label="Scent Bottle on Vanity" aspect="aspect-square" theme="light" />
          </div>
          <div className="fade-in-section relative aspect-square rounded-[20px] overflow-hidden group border border-[#E7DFC9] shadow-sm bg-[#2B3325]">
            <ImagePlaceholder label="Balcony Over Paris" aspect="aspect-square" theme="dark" />
          </div>
          <div className="fade-in-section relative aspect-square rounded-[20px] overflow-hidden group border border-[#E7DFC9] shadow-sm bg-[#2B3325]">
            <ImagePlaceholder label="Etoile Luxury Box Packaging" aspect="aspect-square" theme="light" />
          </div>
          <div className="fade-in-section relative aspect-square rounded-[20px] overflow-hidden group border border-[#E7DFC9] shadow-sm bg-[#2B3325]">
            <ImagePlaceholder label="White Rose and Dewdrops" aspect="aspect-square" theme="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
