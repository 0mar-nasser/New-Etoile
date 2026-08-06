"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import { PRODUCTS } from "../../data/products";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function NewArrivals() {
  const { addToCart } = useCart();

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
          <div className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="flex items-center space-x-3">
                <div className="h-[1px] w-8 bg-[#C8A76A]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#C8A76A]">
                  Factory Innovations
                </span>
              </div>

              <h2 className="font-serif text-4xl font-light leading-tight tracking-wide md:text-5xl">
                Upcoming{" "}
                <span className="italic text-[#E7DFC9]">
                  Releases
                </span>
              </h2>

              <p className="text-sm font-light leading-relaxed text-[#E7DFC9]/75 md:text-base">
                Preview our upcoming glass flacon mold designs, weighted zamak caps, and high-purity perfume oil compounds engineered for next-generation fragrance brands.
              </p>

              <div className="flex items-center gap-8 pt-2">
                <div>
                  <span className="font-serif text-3xl text-[#C8A76A]">
                    01
                  </span>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#E7DFC9]/60">
                    Coming Soon
                  </p>
                </div>

                <div className="h-10 w-[1px] bg-[#384233]" />

                <div>
                  <span className="font-serif text-3xl text-[#C8A76A]">
                    2026
                  </span>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#E7DFC9]/60">
                    Limited Edition
                  </p>
                </div>
              </div>

              <Link
                href={`/collections/${newArrivalProduct.id}`}
                className="inline-flex items-center gap-2 pt-2 text-[10px] font-light uppercase tracking-[0.25em] text-[#F4F2E8] transition-colors hover:text-[#C8A76A]"
              >
                <span>Explore Preview</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {upcomingProducts.map((product, index) => (
              <article
                key={product.id}
                className="group relative grid grid-cols-1 gap-6 rounded-[28px] border border-[#384233]/70 bg-[#2B3325]/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C8A76A]/30 hover:bg-[#2B3325]/70 md:grid-cols-[260px_1fr] md:gap-8 md:p-8"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-[#384233]/60">
                  <div className="transition-transform duration-700 group-hover:scale-105 h-full w-full">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={`${product.name} Bottle`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    ) : (
                      <ImagePlaceholder
                        label={`${product.name} Bottle`}
                        aspect="aspect-[4/5]"
                        theme="dark"
                        className="h-full"
                      />
                    )}
                  </div>

                  <span className="absolute left-4 top-4 rounded-full bg-[#C8A76A] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#1D2418]">
                    Coming Soon
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between gap-6">
                  <div className="space-y-5">
                    <div className="flex items-start justify-between">
                      <span className="select-none font-serif text-5xl leading-none text-[#C8A76A]/20 md:text-6xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="pt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8A76A]">
                        Exclusive Release
                      </span>
                    </div>

                    <div className="-mt-2 space-y-2">
                      <h3 className="font-serif text-3xl font-light tracking-wide text-[#F4F2E8]">
                        {product.name}
                      </h3>

                      <p className="max-w-xl text-sm font-light leading-relaxed text-[#E7DFC9]/75">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {product.notes.map((note) => (
                        <span
                          key={note}
                          className="rounded-full border border-[#384233] bg-[#1D2418]/60 px-3 py-1 text-[9px] font-light tracking-wide text-[#E7DFC9]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col gap-4 border-t border-[#384233]/80 pt-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <span className="font-serif text-2xl text-[#F4F2E8]">
                        ${product.price}
                      </span>

                      <p className="mt-1 text-[10px] font-light uppercase tracking-[0.2em] text-[#E7DFC9]/50">
                        {product.volume} Eau de Parfum
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href={`/collections/${product.id}`}
                        className="border-b border-[#E7DFC9]/30 pb-0.5 text-[10px] font-light uppercase tracking-[0.2em] text-[#E7DFC9] transition-colors hover:border-[#C8A76A]/50 hover:text-[#C8A76A]"
                      >
                        View Details
                      </Link>

                      <button
                        onClick={() => addToCart(product, "100ml")}
                        className="rounded-full bg-[#C8A76A] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1D2418] transition-all duration-300 hover:bg-[#F4F2E8]"
                      >
                        Pre-Order
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}