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
      className={`fade-in-section relative overflow-hidden shadow-xl border border-[#E7DFC9] bg-[#2B3325] group ${
        featured ? "rounded-[32px]" : "rounded-[28px]"
      } ${className}`}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      ) : (
        <ImagePlaceholder
          label={placeholderLabel ?? title}
          className="opacity-100 h-full "
          theme={placeholderTheme}
        />
      )}

      <div
        className={`absolute inset-0 z-10 ${
          featured
            ? "bg-gradient-to-r from-[#1D2418]/95 via-[#1D2418]/55 to-[#1D2418]/10"
            : "bg-gradient-to-t from-[#1D2418]/95 via-[#1D2418]/20 to-transparent"
        }`}
      />

      <div
        className={`absolute z-30 flex flex-col space-y-3 ${
          featured
            ? "inset-0 justify-center max-w-xl"
            : "inset-x-0 bottom-0 justify-end"
        } ${contentClassName}`}
      >
        <span className="text-[10px] tracking-[0.28em] uppercase text-[#C8A76A] font-semibold">
          {tag}
        </span>
        <h3 className={`font-serif text-[#F4F2E8] font-light leading-tight ${titleClassName}`}>
          {title}
        </h3>
        {description && (
          <p className="max-w-xl text-sm text-[#E7DFC9]/90 font-light leading-relaxed">
            {description}
          </p>
        )}
        <Link
          href={href}
          className="inline-flex items-center space-x-2 text-xs text-[#F4F2E8] hover:text-[#C8A76A] font-light tracking-[0.25em] uppercase transition-colors duration-300"
        >
          <span>Explore</span>
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
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C8A76A] font-bold">
            Curated Selections
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1D2418] font-light">
            Featured Collections
          </h2>
          <p className="text-sm md:text-base text-[#2B3325]/75 font-light leading-relaxed">
            Discover four refined scent stories from Étoile, each crafted with rare ingredients and
            designed to reflect a distinct mood.
          </p>
          <div className="h-[1px] w-16 bg-[#2B3325]/40 mt-2" />
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          <CollectionCard
            featured
            tag="For Him"
            title="Men's Collection"
            description="Earthy leather, smoked woods, and warm accents designed to radiate confidence and quiet elegance."
            href="/collections?filter=men"
            imageSrc="/images/category-1.jpg"
            className="h-[380px] md:h-[440px]"
            titleClassName="text-4xl md:text-5xl"
            contentClassName="px-8 md:px-12 py-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <CollectionCard
              tag="For Her"
              title="Women's Collection"
              href="/collections?filter=women"
              imageSrc="/images/category-women.jpg"
              className="h-[340px]"
              titleClassName="text-2xl md:text-3xl"
              contentClassName="p-6 md:p-8"
            />

            <CollectionCard
              tag="Shared"
              title="Unisex Scent"
              href="/collections?filter=unisex"
              imageSrc="/images/category-unisex.jpg"
              className="h-[340px]"
              titleClassName="text-2xl md:text-3xl"
              contentClassName="p-6 md:p-8"
            />

            <CollectionCard
              tag="Rare"
              title="Exclusive Line"
              href="/collections"
              imageSrc="/images/category-exclusive.jpg"
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
