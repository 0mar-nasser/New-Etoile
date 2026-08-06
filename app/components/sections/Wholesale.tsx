"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    title: "Select Empty Glass Bottle (الغرشة الفاضية)",
    desc: "Choose from 30ml, 50ml, or 100ml heavy-base crystal glass flacons, frosted, amber, cylindrical or architectural square designs.",
    badge: "Bottles",
  },
  {
    step: "02",
    title: "Choose Luxury Cap (الكاب والأغطية)",
    desc: "Match your bottle with a magnetic gold cap, heavy weighted Zamak alloy metal closure, natural carved wood, or crystal acrylic cap.",
    badge: "Caps",
  },
  {
    step: "03",
    title: "Match Spray Pump (البمب والرشاش)",
    desc: "Select precision 15mm fine-mist crimp or screw atomizers in anodized gold, rose gold, silver, or matte black metallic finishes.",
    badge: "Pumps",
  },
  {
    step: "04",
    title: "Pick Concentrated Oil (الزيت العطري المركز)",
    desc: "Select high-purity French and Oriental fragrance oil compounds (25-35% concentration) to fill and finalize your perfume line.",
    badge: "Oils",
  },
];

export default function Wholesale() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="wholesale"
      className="relative z-20 overflow-hidden bg-[#F7F4EC] py-12 md:py-20 text-[#273124]"
    >
      {/* Background Subtle Overlay */}
      <div className="absolute inset-0 bg-[url('/images/category-exclusive.jpg')] bg-cover bg-center opacity-[0.03] mix-blend-overlay pointer-events-none" />

      {/* Background Glows */}
      <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#B9924E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-[#B9924E]/8 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 z-10">

        {/* ================= HERO INTRO SECTION ================= */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20 mb-24">

          {/* Text Column */}
          <div className="fade-in-section flex flex-col space-y-6 lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center space-x-3">
              <div className="h-[1px] w-8 bg-[#B9924E]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#B9924E]">
                Industrial Manufacturing & B2B Supply
              </span>
            </div>

            <h2 className="font-serif text-3xl font-light leading-tight tracking-wide text-[#273124] md:text-5xl lg:text-6xl">
              Factory Solutions for
              <br />
              <span className="italic text-[#B9924E]">
                Perfume Brands & Packaging
              </span>
            </h2>

            <div className="my-2 h-[1px] w-full bg-[#D8D0BC]" />

            <p className="text-sm font-light leading-relaxed text-[#5F6658] md:text-base">
              As a leading perfume manufacturing factory and glass packaging supplier, Étoile provides everything needed to produce market-ready fragrance lines. We manufacture empty crystal flacons, precision spray pumps, magnetic caps, and 100% pure concentrated perfume oils.
            </p>

            <p className="text-sm font-light leading-relaxed text-[#5F6658] md:text-base">
              Whether you are looking to source empty bottles in bulk, request custom mold engineering, or order turnkey private label perfume manufacturing, our flexible program guarantees fast sampling and global B2B freight.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button variant="primary" href="/contact?subject=wholesale">
                Request B2B Quotation
              </Button>
              <Button variant="secondary" href="/collections">
                View Supply Catalog
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="fade-in-section relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-[#D8D0BC] shadow-2xl lg:col-span-5 order-1 lg:order-2 group">
            <Image
              src="/images/category/category-bottles.png"
              alt="Industrial Perfume Bottle & Packaging Factory"
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Subtle Luxury Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#273124]/40 via-transparent to-transparent opacity-90 pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-[16px] bg-[#FDFBF5]/85 backdrop-blur-md border border-[#D8D0BC]/40">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#B9924E] font-semibold block">Factory Guarantee</span>
              <p className="text-xs text-[#273124] font-serif font-light mt-0.5">Custom Glass Molds · 15mm Precision Crimp · Pure Oil Compounds</p>
            </div>
          </div>
        </div>

        {/* ================= 4-STEP MIX & MATCH CUSTOM ASSEMBLY ================= */}
        <div className="mb-24 bg-[#F4F2E8] border border-[#D8D0BC]/80 rounded-[32px] p-8 md:p-14 shadow-xl">
          <div className="fade-in-section text-center max-w-2xl mx-auto mb-12">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-[#B9924E]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#B9924E]">The Assembly Flow</span>
              <span className="h-[1px] w-8 bg-[#B9924E]" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-[#273124]">
              Build Your Perfume <span className="italic text-[#B9924E]">Step by Step</span>
            </h3>
            <p className="mt-3 text-xs md:text-sm font-light text-[#5F6658] leading-relaxed">
              Select your empty bottle, match compatible caps and pumps, and choose your fragrance oil concentrate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {ASSEMBLY_STEPS.map((item, idx) => (
              <div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-[24px] p-6 transition-all duration-500 border ${
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
                    <span>Browse {item.badge}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= WHO WE WORK WITH ================= */}
        <div className="mb-20">
          <div className="fade-in-section text-center max-w-2xl mx-auto mb-16">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-[#B9924E]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#B9924E]">B2B Clients</span>
              <span className="h-[1px] w-8 bg-[#B9924E]" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-[#273124]">
              Who We <span className="italic text-[#B9924E]">Supply & Work With</span>
            </h3>
            <p className="mt-4 text-sm font-light text-[#5F6658] leading-relaxed">
              We design tailor-made manufacturing solutions, supply agreements, and fast logistics for commercial perfume brands globally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.title}
                className="fade-in-section group bg-[#F4F2E8]/40 border border-[#D8D0BC]/50 rounded-[20px] overflow-hidden hover:bg-[#F4F2E8]/90 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
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

        {/* ================= PRIVATE LABEL HIGHLIGHT ================= */}
        <div className="fade-in-section">
          <div className="glass-panel-dark text-[#F4F2E8] border border-[#384233]/70 rounded-[32px] overflow-hidden p-8 md:p-16 relative">
            {/* Background Texture/glow */}
            <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-[#C8A76A]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#C8A76A] font-bold">
                  Bespoke OEM / ODM Manufacturing
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
                  Launch Your Own <span className="italic text-[#E7DFC9]">Perfume Line Today</span>
                </h3>
                <p className="text-xs md:text-sm font-light leading-relaxed text-[#E7DFC9]/80 max-w-2xl">
                  Build your brand with our turnkey factory solutions. Choose empty crystal bottles, match precision spray pumps & weighted magnetic caps, and select premium concentrated perfume oils with custom labeling and packaging.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Button variant="primary" href="/contact?subject=bespoke" className="shadow-2xl">
                  Contact Factory Team
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
