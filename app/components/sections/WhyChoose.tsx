"use client";

import React from "react";
import brandData from "../../data/brand.json";

export default function WhyChoose() {
  const getIcon = (id: string) => {
    switch (id) {
      // Botanical Ingredients
      case "ingredients":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21c0-7 4-12 10-15-1 7-5 12-10 15Zm0 0c0-5-3-9-8-11 1 6 4 10 8 11Z"
            />
          </svg>
        );

      // Longevity
      case "longevity":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m5-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 3h4"
            />
          </svg>
        );

      // Perfume Bottle
      case "packaging":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 3h6v4H9V3Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 7h10l1 14H6L7 7Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6"
            />
          </svg>
        );

      // Global Shipping
      case "shipping":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.2"
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2a10 10 0 1 0 10 10"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2c3 4 3 16 0 20M2 12h20"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section
      className="
      relative z-20 overflow-hidden
      bg-[#F7F4EC]
      py-24 md:py-28
      text-[#273124]
      border-t border-[#D8D0BC]
      "
    >
      {/* Glow */}
      <div className="absolute left-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#B9924E]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 bg-[#B9924E]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#B9924E]">
              The Étoile Difference
            </span>
            <span className="h-[1px] w-8 bg-[#B9924E]" />
          </div>

          <h2 className="font-serif text-4xl font-light tracking-wide text-[#273124] md:text-5xl">
            Crafted Beyond{" "}
            <span className="italic text-[#B9924E]">
              Ordinary
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-[#5F6658]">
            Every Étoile fragrance is created with rare ingredients,
            timeless craftsmanship, and an obsession for unforgettable details.
          </p>
        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

          {brandData.features.map((feature) => (
            <div
              key={feature.id}
              className="
              group flex flex-col items-center
              rounded-[28px]
              border border-[#D8D0BC]
              bg-[#FDFBF5]
              p-8
              text-center
              transition-all duration-500
              hover:-translate-y-2
              hover:border-[#B9924E]/50
              hover:shadow-xl
              "
            >

              {/* Icon */}
              <div
                className="
                mb-5 flex h-16 w-16
                items-center justify-center
                rounded-full
                border border-[#B9924E]/40
                bg-[#F7F4EC]
                text-[#B9924E]
                transition-all duration-500
                group-hover:bg-[#B9924E]
                group-hover:text-[#FDFBF5]
                "
              >
                {getIcon(feature.id)}
              </div>


              <h3 className="font-serif text-xl font-light tracking-wide text-[#273124]">
                {feature.title}
              </h3>


              <p className="mt-3 text-xs font-light leading-relaxed text-[#5F6658]">
                {feature.text}
              </p>


              {/* Decorative line */}
              <div className="mt-6 h-[1px] w-10 bg-[#B9924E]/40 transition-all duration-500 group-hover:w-20" />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}