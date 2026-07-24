"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "../ui/ImagePlaceholder";

type CollectionCardProps = {
  tag: string;
  title: string;
  description?: string;
  href: string;
  imageSrc?: string;
  placeholderLabel?: string;
  placeholderTheme?: "light" | "dark";
  featured?: boolean;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
};

function CollectionCard({
  tag,
  title,
  description,
  href,
  imageSrc,
  placeholderLabel,
  placeholderTheme = "light",
  featured = false,
  className = "",
  titleClassName = "text-3xl",
  contentClassName = "p-8",
}: CollectionCardProps) {
  return (
    <div
      className={`fade-in-section relative overflow-hidden shadow-2xl border border-[#E7DFC9]/20 bg-[#1D2418] group ${featured ? "rounded-[32px]" : "rounded-[28px]"
        } ${className}`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority={featured}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      ) : (
        <ImagePlaceholder
          label={placeholderLabel ?? title}
          className="opacity-100 h-full"
          theme={placeholderTheme}
        />
      )}

      {/* Elegant dark gradient overlay for optimal readability */}
      <div
        className={`absolute inset-0 z-10 ${featured
          ? "bg-gradient-to-r from-[#1D2418]/90 via-[#1D2418]/50 to-[#1D2418]/15 md:from-[#1D2418]/95 md:via-[#1D2418]/55 md:to-transparent"
          : "bg-gradient-to-t from-[#1D2418]/95 via-[#1D2418]/40 to-transparent"
          }`}
      />

      <div
        className={`absolute z-30 flex flex-col space-y-3 ${featured
          ? "inset-0 justify-center max-w-xl"
          : "inset-x-0 bottom-0 justify-end"
          } ${contentClassName}`}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A76A] font-semibold">
          {tag}
        </span>
        <h3 className={`font-serif text-[#F4F2E8] font-light leading-tight ${titleClassName}`}>
          {title}
        </h3>
        {description && (
          <p className="max-w-xl text-sm text-[#E7DFC9]/85 font-light leading-relaxed">
            {description}
          </p>
        )}
        <Link
          href={href}
          className="inline-flex items-center space-x-2 text-xs text-[#F4F2E8] hover:text-[#C8A76A] font-light tracking-[0.25em] uppercase transition-colors duration-300 pt-1"
        >
          <span>Explore Collection</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function FeaturedCollection() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-[#F4F2E8] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="fade-in-section text-center max-w-2xl mx-auto mb-10 md:mb-20 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3 mb-1">
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
            Curated Selections
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1D2418] font-light">
            Featured Collections
          </h2>
          <p className="text-sm md:text-base text-[#2B3325]/75 font-light leading-relaxed">
            Explore our premium range of perfumery essentials. From captivating fragrances to elegant bottles, caps, and pumps, we provide everything needed to elevate your brand.
          </p>
          <div className="h-[1px] w-16 bg-[#2B3325]/40 mt-2" />
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          {/* 1. PERFUMES CATEGORY */}
          <CollectionCard
            featured
            tag="Perfumes"
            title="Perfumes Collection"
            description="Discover our signature fragrance set & royal gift boxes, featuring matching perfume oils, plush velvet lining, and raw French ingredients."
            href="/collections?category=perfumes"
            imageSrc="/images/category/category-perfumes.png"
            className="aspect-[2/1] w-full min-h-[360px] md:min-h-[440px]"
            titleClassName="text-4xl md:text-5xl"
            contentClassName="px-8 md:px-12 py-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {/* 2. GLASS BOTTLES CATEGORY */}
            <CollectionCard
              tag="Bottles"
              title="Glass Bottles"
              href="/collections?category=bottles"
              imageSrc="/images/category/category-bottles.png"
              className="h-[340px]"
              titleClassName="text-2xl md:text-3xl"
              contentClassName="p-6 md:p-8"
            />

            {/* 3. PREMIUM CAPS CATEGORY */}
            <CollectionCard
              tag="Caps"
              title="Premium Caps"
              href="/collections?category=caps"
              imageSrc="/images/category/category-caps.png"
              className="h-[340px]"
              titleClassName="text-2xl md:text-3xl"
              contentClassName="p-6 md:p-8"
            />

            {/* 4. SPRAY PUMPS CATEGORY */}
            <CollectionCard
              tag="Pumps"
              title="Spray Pumps"
              href="/collections?category=pumps"
              imageSrc="/images/category/category-pumps.png"
              className="h-[340px]"
              titleClassName="text-2xl md:text-3xl"
              contentClassName="p-6 md:p-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
