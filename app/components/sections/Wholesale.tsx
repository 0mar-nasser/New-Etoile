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
    <section id="wholesale" className="py-6 bg-[#FDFBF5] relative z-20 text-[#273124]">
      <div className="mx-auto px-6 ">

        {/* Private Label Banner */}
        <div className="fade-in-section">
          <div className="glass-panel-dark text-[#F4F2E8] border border-[#384233]/70 rounded-[32px] overflow-hidden p-8 md:p-16 relative shadow-2xl">
            {/* Background Floral Roses Image with Opacity */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <Image
                src="/images/wholesale_floral_bg.jpg"
                alt="Étoile Floral Background"
                fill
                className="object-cover object-center opacity-30 mix-blend-overlay scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1D2418]/90 via-[#1D2418]/70 to-[#1D2418]/90" />
            </div>

            {/* Brand Name Watermark with Opacity */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
              <span className="font-serif text-[60px] sm:text-[100px] md:text-[150px] lg:text-[190px] font-bold tracking-[0.25em] text-[#C8A76A]/[0.08] uppercase whitespace-nowrap select-none transform -rotate-1">
                ÉTOILE
              </span>
            </div>

            {/* Ambient Gold Glows */}
            <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-[#C8A76A]/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute left-0 bottom-0 w-[250px] h-[250px] bg-[#C8A76A]/10 rounded-full blur-[70px] pointer-events-none" />

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
