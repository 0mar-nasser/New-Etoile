"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";

const PARTNERS = [
  {
    title: "Perfume Brand Owners",
    description: "Established fragrance houses and indie niche brands sourcing empty flacons, custom cap molds, and signature concentrated oils.",
    image: "/images/category/category-bottles.png",
  },
  {
    title: "Niche Fragrance Shops",
    description: "Specialist scent stores creating in-house custom perfume bars where clients select empty bottles, pumps, caps, and oils.",
    image: "/images/perfumes/perfume_discovery_set.png",
  },
  {
    title: "Private Label Startups",
    description: "Entrepreneurs launching new perfume brands with full turn-key manufacturing, custom branding, and low MOQ starter packs.",
    image: "/images/category/category-caps.png",
  },
  {
    title: "Wholesale Bottlers & Labs",
    description: "Compounding laboratories requiring high-volume supply of 15mm crimp bottles, leakproof spray pumps, and raw oil canisters.",
    image: "/images/category/category-pumps.png",
  },
  {
    title: "Corporate & Event Gifting",
    description: "Businesses ordering custom-engraved flacons, luxury magnetic caps, and bespoke fragrances for high-end VIP events.",
    image: "/images/perfumes/perfume_trio_coffret.png",
  },
  {
    title: "Global Distributors",
    description: "Regional packaging distributors seeking container-load agreements for crystal glass flacons, sprayers, and raw fragrance compounds.",
    image: "/images/category/category-perfumes.png",
  },
];

const ASSEMBLY_STEPS = [
  {
    step: "01",
    title: "Select Empty Glass Bottle",
    desc: "Choose from 30ml, 50ml, or 100ml heavy-base crystal glass flacons, frosted, amber, cylindrical or architectural square designs.",
    badge: "Bottles",
  },
  {
    step: "02",
    title: "Choose Luxury Cap",
    desc: "Match your bottle with a magnetic gold cap, heavy weighted Zamak alloy metal closure, natural carved wood, or crystal acrylic cap.",
    badge: "Caps",
  },
  {
    step: "03",
    title: "Match Spray Pump",
    desc: "Select precision 15mm fine-mist crimp or screw atomizers in anodized gold, rose gold, silver, or matte black metallic finishes.",
    badge: "Pumps",
  },
  {
    step: "04",
    title: "Select French Perfume Oil",
    desc: "Choose your fragrance concentrate profiles formulated in Grasse with high sillage and longevity.",
    badge: "Perfumes",
  },
];

export default function Wholesale() {
  const { t, i18n } = useTranslation(["home", "common"]);
  const [activeStep, setActiveStep] = useState(0);
  const isRtl = i18n.language === "ar";

  return (
    <section id="wholesale" className="py-20 md:py-32 bg-[#FDFBF5] relative z-20 text-[#273124]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="fade-in-section text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full border border-[#B9924E]/40 bg-[#B9924E]/10 text-[#B9924E] text-[10px] uppercase tracking-[0.25em] mb-4">
            <span>✦</span>
            <span>{t("wholesale.badge")}</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#273124] leading-tight">
            {t("wholesale.title")}
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#5F6658] font-light leading-relaxed">
            {t("wholesale.subtitle")}
          </p>
        </div>

        {/* Assembly Steps */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {ASSEMBLY_STEPS.map((item, idx) => (
              <div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-[24px] p-6 transition-all duration-500 border rtl:text-right ${
                  activeStep === idx
                    ? "bg-[#273124] text-[#F4F2E8] border-[#B9924E] shadow-xl scale-[1.02]"
                    : "bg-[#FDFBF5] text-[#273124] border-[#D8D0BC]/70 hover:border-[#B9924E]/50 hover:bg-[#FDFBF5]/90"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-serif text-3xl font-light ${activeStep === idx ? "text-[#B9924E]" : "text-[#B9924E]/70"}`}>
                    {item.step}
                  </span>
                  <span className={`text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border ${
                    activeStep === idx
                      ? "border-[#B9924E] text-[#B9924E] bg-[#B9924E]/10"
                      : "border-[#D8D0BC] text-[#5F6658]"
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <h4 className="font-serif text-base font-light mb-2 leading-snug">
                  {item.title}
                </h4>

                <p className={`text-[11px] font-light leading-relaxed ${
                  activeStep === idx ? "text-[#E7DFC9]/80" : "text-[#5F6658]"
                }`}>
                  {item.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-[#D8D0BC]/30 flex items-center justify-between">
                  <Link
                    href={`/collections?category=${item.badge.toLowerCase()}`}
                    className={`text-[10px] uppercase tracking-wider font-medium flex items-center gap-1 ${
                      activeStep === idx ? "text-[#B9924E] hover:underline" : "text-[#273124] hover:text-[#B9924E]"
                    }`}
                  >
                    <span>{t("common:learnMore")}</span>
                    <span>{isRtl ? "←" : "→"}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.title}
                className="fade-in-section group bg-[#F4F2E8]/40 border border-[#D8D0BC]/50 rounded-[20px] overflow-hidden hover:bg-[#F4F2E8]/90 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 rtl:text-right"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#D8D0BC]/50">
                  <Image
                    src={partner.image}
                    alt={partner.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h4 className="font-serif text-2xl font-light text-[#273124] mb-2">
                    {partner.title}
                  </h4>
                  <p className="text-sm font-light leading-relaxed text-[#5F6658]">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Private Label Banner */}
        <div className="fade-in-section">
          <div className="glass-panel-dark text-[#F4F2E8] border border-[#384233]/70 rounded-[32px] overflow-hidden p-8 md:p-16 relative">
            <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-[#C8A76A]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rtl:text-right">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#C8A76A] font-bold">
                  Bespoke OEM / ODM Manufacturing
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
                  {t("wholesale.title")}
                </h3>
                <p className="text-xs md:text-sm font-light leading-relaxed text-[#E7DFC9]/80 max-w-2xl">
                  {t("wholesale.subtitle")}
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right rtl:lg:text-left">
                <Button variant="primary" href="/contact?subject=bespoke" className="shadow-2xl">
                  {t("common:submit")}
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
