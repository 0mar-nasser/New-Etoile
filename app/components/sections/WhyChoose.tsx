"use client";

import React from "react";
import Image from "next/image";
import brandData from "../../data/brand.json";

export default function WhyChoose() {
  const getFeatureImage = (id: string) => {
    switch (id) {
      case "ingredients":
        return "/images/why_ingredients.png";
      case "longevity":
        return "/images/why_longevity.png";
      case "packaging":
        return "/images/why_packaging.png";
      case "shipping":
        return "/images/why_shipping.png";
      default:
        return "/images/why_ingredients.png";
    }
  };

  return (
    <section
      className="
      relative z-20 overflow-hidden
      bg-[#F7F4EC]
      py-20 md:py-28
      text-[#273124]
      border-t border-[#D8D0BC]
      "
    >
      {/* Glow */}
      <div className="absolute left-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#B9924E]/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-[#B9924E]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#B9924E]">
              The Factory Standard
            </span>
            <span className="h-[1px] w-8 bg-[#B9924E]" />
          </div>

          <h2 className="font-serif text-4xl font-light tracking-wide text-[#273124] md:text-5xl">
            Engineered for{" "}
            <span className="italic text-[#B9924E]">
              Perfume Excellence
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-[#5F6658]">
            We supply end-to-end industrial perfumery solutions: crystal empty flacons, weighted magnetic caps, micro-mist pumps, and 100% pure concentrated oils.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-2 mx-auto">

          {brandData.features.map((feature) => (
            <div
              key={feature.id}
              className="
              group relative flex flex-col justify-end
              min-h-[320px] md:min-h-[420px] w-full
              rounded-[24px]
              border border-[#D8D0BC]/60
              overflow-hidden
              transition-all duration-700 ease-out
              hover:-translate-y-2
              hover:border-[#B9924E]/50
              hover:shadow-2xl hover:shadow-[#B9924E]/5
              p-3 md:p-5
              "
            >
              {/* Image covering the entire card background */}
              <Image
                src={getFeatureImage(feature.id)}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              {/* Subtle dark luxury gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />

              {/* Decorative Brand Text over image at top right */}
              <span className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.25em] text-white/80 font-light select-none">
                Maison Étoile
              </span>

              {/* Card Body with Glassmorphism and Backdrop Blur */}
              <div className="relative z-10 p-5 md:p-6 rounded-[16px] bg-[#FDFBF5]/80 backdrop-blur-md border border-[#D8D0BC]/30 flex flex-col justify-between transition-all duration-500 group-hover:bg-[#FDFBF5]/90">
                <div className="space-y-2">
                  {/* Step counter */}
                  <span className="font-serif text-xs italic text-[#B9924E] block select-none">
                    0{brandData.features.findIndex(f => f.id === feature.id) + 1}
                  </span>

                  <h3 className="font-serif text-base md:text-lg font-light tracking-wide text-[#273124] group-hover:text-[#B9924E] transition-colors duration-500">
                    {feature.title}
                  </h3>

                  <p className="text-[11px] md:text-xs font-light leading-relaxed text-[#5F6658]">
                    {feature.text}
                  </p>
                </div>

                {/* Left-aligned decorative line that expands on hover */}
                <div className="mt-4 h-[1px] w-6 bg-[#B9924E]/40 transition-all duration-500 group-hover:w-12 group-hover:bg-[#B9924E]" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}