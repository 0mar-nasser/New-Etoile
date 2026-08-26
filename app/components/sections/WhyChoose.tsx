"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import brandData from "../../data/brand.json";

const FEATURE_IMAGES: Record<string, string> = {
  ingredients: "/images/why_ingredients.png",
  longevity: "/images/why_longevity.png",
  packaging: "/images/why_packaging.png",
  shipping: "/images/why_shipping.png",
};

const FEATURE_ICONS = [
  // Ingredient / Droplet (Pure Concentrates)
  <svg key="i" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a.75.75 0 0 1 .612.315l6.182 8.748A6.75 6.75 0 1 1 5.206 11.313l6.182-8.748A.75.75 0 0 1 12 2.25Z" />
  </svg>,
  // Glass Flacon / Diamond (Precision Glass)
  <svg key="c" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 3.75-5.25 4.5L12 21l8.25-12.75L15 3.75H9Z" />
  </svg>,
  // Sprayer / Atomizer (Leak-Proof Pumps)
  <svg key="p" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>,
  // Global Logistics / Plane / Globe
  <svg key="g" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>,
];

export default function WhyChoose() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <section
      id="why-choose"
      className="relative z-20 overflow-hidden bg-[#161D13] py-10 md:py-14 text-[#F4F2E8] border-t border-[#384233]/70 select-none"
    >
      {/* Subtle Ambient Lighting Effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-full max-w-7xl -translate-x-1/2 rounded-full bg-[#C8A76A]/5 blur-[160px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#384233]/30 blur-[140px]" />
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[#C8A76A]/5 blur-[120px]" />

      <div className="relative mx-auto px-6 md:px-12 z-10 space-y-16">

        {/* ── Section Header with Smooth Scroll Reveal ── */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#C8A76A]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#C8A76A]">
              {t("whyChoose.badge")}
            </span>
            <span className="h-px w-10 bg-[#C8A76A]" />
          </motion.div>

          {/* <div className="overflow-hidden py-1">
            <motion.h2
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity, filter" }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#F4F2E8] leading-[1.2]"
            >
              {t("whyChoose.title")}
            </motion.h2>
          </div> */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base text-[#E7DFC9]/80 font-light leading-relaxed max-w-2xl mx-auto"
          >
            {t("whyChoose.subtitle")}
          </motion.p>
        </div>

        {/* ── 4 Luxury Visual Cards Grid with Staggered Scroll Animation ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandData.features.map((feature, idx) => {
            const titleKey = `whyChoose.feature${idx + 1}Title` as const;
            const descKey = `whyChoose.feature${idx + 1}Desc` as const;
            const imgSrc = FEATURE_IMAGES[feature.id] || "/images/why_ingredients.png";

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 60, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 1.1,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
                className="group relative flex flex-col justify-between bg-[#1D2519]/80 rounded-[28px] border border-[#384233]/70 hover:border-[#C8A76A]/60 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Top Image Banner with Zoom on Hover */}
                <div className="relative h-56 w-full overflow-hidden bg-[#121810]">
                  <Image
                    src={imgSrc}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D2519] via-[#1D2519]/30 to-transparent" />

                  {/* Top Floating Badge: Numeral + Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="font-mono text-xs tracking-widest text-[#C8A76A] bg-[#161D13]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C8A76A]/30 font-bold">
                      0{idx + 1}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#161D13]/80 backdrop-blur-md border border-[#384233] text-[#C8A76A] group-hover:border-[#C8A76A] group-hover:bg-[#C8A76A] group-hover:text-[#1D2418] transition-all duration-300 shadow-md">
                      {FEATURE_ICONS[idx]}
                    </div>
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="p-6 rtl:text-right flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F4F2E8] group-hover:text-[#C8A76A] transition-colors duration-300 leading-snug">
                      {t(titleKey, { defaultValue: feature.title })}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#E7DFC9]/75 font-light leading-relaxed">
                      {t(descKey, { defaultValue: feature.text })}
                    </p>
                  </div>

                  {/* Subtle Bottom Aesthetic Line */}
                  <div className="pt-2 border-t border-[#384233]/40 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#C8A76A]/70 font-semibold group-hover:text-[#C8A76A] transition-colors">
                      Maison Étoile
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A76A]/40 group-hover:bg-[#C8A76A] group-hover:scale-150 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}