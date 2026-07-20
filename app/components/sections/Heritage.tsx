"use client";

import React from "react";
import Button from "../ui/Button";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function Heritage() {
  return (
    <section
      id="philosophy"
      className="relative z-20 overflow-hidden bg-[#F7F4EC] py-24 md:py-32 text-[#273124]"
    >
      {/* Background Glow */}
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#B9924E]/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-24">
          {/* Image Column */}
          <div className="fade-in-section relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-[#D8D0BC] shadow-xl lg:col-span-5">
            <ImagePlaceholder
              label="Raw Botanical Ingredients & Pipette"
              aspect="aspect-[4/5]"
              theme="light"
            />
          </div>

          {/* Text Column */}
          <div className="fade-in-section flex flex-col space-y-6 lg:col-span-7 lg:pl-6">
            <div className="flex items-center space-x-3">
              <div className="h-[1px] w-8 bg-[#B9924E]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#B9924E]">
                The Heritage
              </span>
            </div>

            <h2 className="font-serif text-3xl font-light leading-tight tracking-wide text-[#273124] md:text-5xl">
              Crafted by Hand,
              <br />
              <span className="italic text-[#B9924E]">
                Inspired by Elegance
              </span>
            </h2>

            <div className="my-2 h-[1px] w-full bg-[#D8D0BC]" />

            <p className="text-sm font-light leading-relaxed text-[#5F6658] md:text-base">
              Founded in Paris, the house of Étoile stems from a single vision:
              to revive the traditional art of high-end French perfumery through
              a contemporary, minimalist lens. We create fragrances that are not
              merely smelled, but remembered.
            </p>

            <p className="text-sm font-light leading-relaxed text-[#5F6658] md:text-base">
              Every scent is composed using rare, responsibly sourced absolute
              oils—Grasse jasmine, Tuscan iris, and wild-harvested sandalwood.
              Blending science and romance, our nose masters craft balanced,
              olfactory poetry designed to linger as a warm, signature aura.
            </p>

            {/* Stats */}
            <div className="flex flex-col items-start space-y-4 pt-4 text-[#273124] sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-light text-[#B9924E]">
                  100%
                </span>
                <span className="mt-1 text-[10px] font-light uppercase tracking-widest text-[#777B70]">
                  Natural Absolutes
                </span>
              </div>

              <div className="hidden h-10 w-[1px] bg-[#D8D0BC] sm:block" />

              <div className="flex flex-col">
                <span className="font-serif text-3xl font-light text-[#B9924E]">
                  24h+
                </span>
                <span className="mt-1 text-[10px] font-light uppercase tracking-widest text-[#777B70]">
                  Olfactory Longevity
                </span>
              </div>

              <div className="hidden h-10 w-[1px] bg-[#D8D0BC] sm:block" />

              <div className="flex flex-col">
                <span className="font-serif text-3xl font-light text-[#B9924E]">
                  Paris
                </span>
                <span className="mt-1 text-[10px] font-light uppercase tracking-widest text-[#777B70]">
                  Origin & Design
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Button variant="primary" href="/about">
                Read Scent Heritage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}