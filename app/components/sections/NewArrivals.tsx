"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useCart } from "../../context/CartContext";
import { PRODUCTS } from "../../data/products";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function NewArrivals() {
  const { t, i18n } = useTranslation(["home", "common"]);
  const { addToCart } = useCart();
  const isRtl = i18n.language === "ar";

  const newArrivalProduct =
    PRODUCTS.find((p) => p.id === "originelle-intense") || PRODUCTS[0];

  const upcomingProducts = [
    newArrivalProduct,
    {
      ...newArrivalProduct,
      id: "noir-etoile",
      name: "Noir Étoile",
      price: 210,
      notes: ["Oud", "Leather", "Patchouli"],
      description:
        "A mysterious woody fragrance with rich leather accords and deep oriental warmth.",
      image: "/images/perfumes/perfume_bois_de_nuit.png",
    },
    {
      ...newArrivalProduct,
      id: "velvet-rose",
      name: "Velvet Rose",
      price: 195,
      notes: ["Rose", "Peony", "White Musk"],
      description:
        "An elegant floral fragrance wrapped in velvety rose petals and soft white musk.",
      image: "/images/perfumes/perfume_or_rose.png",
    },
  ];

  return (
    <section
      id="new-arrivals"
      className="relative z-20 bg-[#1D2418] py-20 md:py-32 text-[#F4F2E8]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[420px] w-[420px] rounded-full bg-[#C8A76A]/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-[#C8A76A]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Side */}
          <div className="lg:col-span-4 rtl:text-right">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="h-[1px] w-8 bg-[#C8A76A]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#C8A76A]">
                  {t("newArrivals.badge")}
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-light text-[#F4F2E8]">
                {t("newArrivals.title")}
              </h2>

              <p className="text-sm text-[#E7DFC9]/80 font-light leading-relaxed">
                {t("newArrivals.subtitle")}
              </p>

              <div className="pt-4">
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A76A] font-semibold hover:text-[#F4F2E8] transition-colors"
                >
                  <span>{t("common:viewDetails")}</span>
                  <span>{isRtl ? "←" : "→"}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Product Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingProducts.map((p) => (
              <div
                key={p.id}
                className="group relative flex flex-col justify-between rounded-[24px] border border-[#384233]/60 bg-[#2B3325]/40 p-6 transition-all duration-500 hover:border-[#C8A76A]/40 hover:bg-[#2B3325]/70"
              >
                <div>
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[18px] border border-[#384233]/60">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <ImagePlaceholder
                        label={p.name}
                        aspect="aspect-[3/4]"
                        theme="dark"
                      />
                    )}
                  </div>

                  <div className="mt-5 space-y-2 rtl:text-right">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#C8A76A] font-bold block">
                      {p.tagline}
                    </span>
                    <h3 className="font-serif text-xl font-light text-[#F4F2E8]">
                      {p.name}
                    </h3>
                    <p className="text-xs text-[#E7DFC9]/70 font-light leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#384233]/60 pt-4">
                  <span className="font-serif text-lg font-semibold text-[#F4F2E8]">
                    ${p.price}
                  </span>
                  <button
                    onClick={() => addToCart(p, "100ml")}
                    className="bg-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] text-[#F4F2E8] px-4 py-2 rounded-full text-[10px] tracking-wider uppercase font-bold transition-all duration-300 cursor-pointer"
                  >
                    {t("common:addToCart")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}