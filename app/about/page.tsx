"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import brandData from "../data/brand.json";

export default function AboutPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "sparkles":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
          </svg>
        );
      case "sun":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        );
      case "globe":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        );
      case "face":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F7F4EC] min-h-screen text-[#273124]">

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-end overflow-hidden group">
        <div className="absolute inset-0">
          <Image
            src="/images/about/grasse_atelier.png"
            alt="Étoile Glass & Perfume Atelier — Grasse, France"
            fill
            priority
            className="object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-105"
            sizes="100vw"
          />
        </div>
        {/* Subtle Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D2418] via-[#1D2418]/45 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 text-[#F4F2E8] space-y-4 max-w-2xl">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-bold">Industrial Atelier · Est. 2008</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight tracking-wide">
            Mastery of Glass,<br />Caps & Pure Oils
          </h1>
          <p className="text-sm md:text-base text-[#E7DFC9]/80 font-light leading-relaxed max-w-lg">
            Maison Étoile manufactures heavy-base crystal flacons, precision spray pumps, magnetic caps, and concentrated perfume oil compounds for luxury fragrance brands worldwide.
          </p>
        </div>
      </section>

      {/* Intro / Industrial Philosophy */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="space-y-6 lg:col-span-7">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#B9924E] font-bold">Factory Mission</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#273124]">
              Empowering Fragrance Brands<br />with <span className="italic text-[#B9924E]">Industrial Precision</span>
            </h2>
            <div className="space-y-5 text-sm text-[#5F6658] font-light leading-relaxed">
              <p>
                At Étoile, we bridge the gap between French perfume artistry and industrial component manufacturing. We provide brand owners with complete freedom: choose your empty glass bottle shape, match compatible magnetic caps and leak-proof atomizers, and select high-purity raw fragrance oils.
              </p>
              <p>
                From custom glass mold engineering to automated 15mm crimp assembly and bulk liter oil compounding, our factories in Grasse and Dubai ensure strict quality standards, low minimum order quantities (MOQ), and reliable international logistics.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/collections"
                className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#273124] hover:text-[#B9924E] font-semibold border-b border-[#273124]/20 hover:border-[#B9924E]/50 pb-1 transition-all duration-300"
              >
                <span>Explore Component Catalog</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Campaign image */}
          <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border border-[#D8D0BC]/40 lg:col-span-5 group">
            <Image
              src="/images/about/perfumer_at_work.png"
              alt="Master Perfume Formulators & Glass Mold Engineers"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#273124]/20 via-transparent to-transparent opacity-65 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-[#1D2418] border-y border-[#384233]/40 text-[#F4F2E8] py-16 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#C8A76A]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {brandData.stats.map(({ num, label }) => (
            <div key={label} className="text-center space-y-2 group">
              <div className="font-serif text-4xl md:text-5xl text-[#C8A76A] font-light transition-transform duration-500 group-hover:scale-105">
                {num}
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#F4F2E8]/60 font-light">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#B9924E] font-bold">Industrial Milestones</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[#273124]">
            History of <span className="italic text-[#B9924E]">Innovation</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#D8D0BC] hidden md:block" />

          <div className="space-y-12">
            {brandData.milestones.map((m, i) => (
              <div key={m.year} className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <div className="bg-[#FDFBF5]/65 backdrop-blur-sm border border-[#D8D0BC]/40 p-6 md:p-8 rounded-[24px] hover:shadow-xl hover:border-[#B9924E]/40 hover:-translate-y-1 transition-all duration-500 inline-block text-left w-full max-w-lg md:max-w-none">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#B9924E] font-bold">{m.year}</span>
                    <h3 className="font-serif text-xl font-light mt-2 mb-2 text-[#273124]">{m.title}</h3>
                    <p className="text-xs text-[#5F6658] font-light leading-relaxed">{m.text}</p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#B9924E] border-2 border-[#F7F4EC] shadow-md z-10" />

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#1D2418] text-[#F4F2E8] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-3">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#C8A76A] font-bold">Factory Guarantees</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Our Manufacturing <span className="italic text-[#C8A76A]">Pillars</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandData.values.map((v) => (
              <div
                key={v.title}
                className="bg-[#2B3325]/40 backdrop-blur-sm border border-[#384233]/70 rounded-[24px] p-7 space-y-4 hover:border-[#C8A76A]/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:bg-[#2B3325]/60 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#C8A76A]/10 border border-[#C8A76A]/30 flex items-center justify-center text-[#C8A76A] group-hover:bg-[#C8A76A]/25 transition-all duration-500">
                  {getIcon(v.icon)}
                </div>
                <h3 className="font-serif text-lg font-light tracking-wide text-[#F4F2E8] group-hover:text-[#C8A76A] transition-colors duration-500">
                  {v.title}
                </h3>
                <p className="text-xs text-[#E7DFC9]/70 font-light leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#1D2418] py-20 px-6 border-t border-[#384233]/30">
        <div className="max-w-2xl mx-auto text-center text-[#F4F2E8] space-y-6">
          <span className="text-[#C8A76A] text-lg">✦</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light">Build Your Perfume Line Today</h2>
          <p className="text-sm text-[#E7DFC9]/70 font-light leading-relaxed">
            Choose your empty bottles, match caps and pumps, and select raw concentrated oils with full factory support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/collections" className="bg-[#C8A76A] hover:bg-[#b09156] text-[#1D2418] px-8 py-3.5 rounded-full text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300 shadow-md">
              Browse Supply Catalog
            </Link>
            <Link href="/contact?subject=wholesale" className="border border-[#F4F2E8]/30 hover:border-[#C8A76A] text-[#F4F2E8] hover:text-[#C8A76A] px-8 py-3.5 rounded-full text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300">
              Request B2B Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
