"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation("common");
  const isRtl = i18n.language === "ar";

  return (
    <div
      className={`fade-in-section relative overflow-hidden shadow-2xl border border-[#E7DFC9]/20 bg-[#1D2418] group ${
        featured ? "rounded-[32px]" : "rounded-[28px]"
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

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 z-10 ${
          featured
            ? "bg-gradient-to-r from-[#1D2418]/90 via-[#1D2418]/50 to-[#1D2418]/15 rtl:bg-gradient-to-l rtl:from-[#1D2418]/90 rtl:via-[#1D2418]/50 rtl:to-[#1D2418]/15"
            : "bg-gradient-to-t from-[#1D2418]/95 via-[#1D2418]/60 to-transparent"
        }`}
      />

      {/* Content */}
      <div
        className={`relative z-20 h-full flex flex-col justify-between text-[#F4F2E8] rtl:text-right ${contentClassName}`}
      >
        <div className="space-y-2">
          <span className="inline-block text-[10px] tracking-[0.25em] uppercase text-[#C8A76A] font-semibold bg-[#1D2418]/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#C8A76A]/30">
            {tag}
          </span>
        </div>

        <div className="space-y-3">
          <h3
            className={`font-serif font-light text-[#F4F2E8] leading-tight group-hover:text-[#E7DFC9] transition-colors ${titleClassName}`}
          >
            {title}
          </h3>

          {description && (
            <p className="text-xs md:text-sm text-[#E7DFC9]/85 font-light leading-relaxed max-w-xl">
              {description}
            </p>
          )}

          <div className="pt-2">
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A76A] font-semibold hover:text-[#F4F2E8] transition-colors"
            >
              <span>{t("learnMore")}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                {isRtl ? "←" : "→"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedCollection() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <section className="py-24 bg-[#F4F2E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
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
          <h2 className="font-serif text-4xl md:text-5xl text-[#1D2418] font-light">
            {t("featuredCollection.title")}
          </h2>
          <p className="text-sm md:text-base text-[#2B3325]/75 font-light leading-relaxed">
            {t("featuredCollection.subtitle")}
          </p>
          <div className="h-[1px] w-16 bg-[#2B3325]/40 mt-2" />
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          <CollectionCard
            featured
            tag={t("home:featuredCollection.badge")}
            title={t("home:featuredCollection.title")}
            description={t("home:featuredCollection.subtitle")}
            href="/collections?category=perfumes"
            imageSrc="/images/category/category-perfumes.png"
            className="aspect-[2/1] w-full min-h-[360px] md:min-h-[440px]"
            titleClassName="text-4xl md:text-5xl"
            contentClassName="px-8 md:px-12 py-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <CollectionCard
              tag="Flacons"
              title="Glass Bottles"
              description="Heavy base crystal glass bottles (30ml, 50ml, 100ml)."
              href="/collections?category=bottles"
              imageSrc="/images/category/category-bottles.png"
              className="h-[360px]"
              titleClassName="text-2xl md:text-3xl"
              contentClassName="p-6 md:p-8"
            />

            <CollectionCard
              tag="Caps"
              title="Magnetic Caps"
              description="Weighted Zamak metal, natural wood, and acrylic caps."
              href="/collections?category=caps"
              imageSrc="/images/category/category-caps.png"
              className="h-[360px]"
              titleClassName="text-2xl md:text-3xl"
              contentClassName="p-6 md:p-8"
            />

            <CollectionCard
              tag="Pumps"
              title="Precision Atomizers"
              description="Fine-mist leakproof spray atomizers."
              href="/collections?category=pumps"
              imageSrc="/images/category/category-pumps.png"
              className="h-[360px]"
              titleClassName="text-2xl md:text-3xl"
              contentClassName="p-6 md:p-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
