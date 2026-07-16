"use client";

import React from "react";
import Link from "next/link";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
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
    <div className="bg-[#F4F2E8] min-h-screen text-[#1D2418]">

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ImagePlaceholder label="Étoile Atelier — Grasse, France" aspect="h-full" theme="dark" />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D2418] via-[#1D2418]/40 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 text-[#F4F2E8] space-y-4 max-w-2xl">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-bold">Est. Paris, 2008</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight tracking-wide">
            The Art of<br />Invisible Elegance
          </h1>
          <p className="text-sm md:text-base text-[#F4F2E8]/70 font-light leading-relaxed max-w-lg">
            We believe that the most beautiful things in life are felt, not seen. Étoile was founded on this principle — to craft the most intimate luxury.
          </p>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A76A] font-bold">Our Philosophy</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-snug">
              Fragrance as a form<br />of self-expression
            </h2>
            <div className="space-y-4 text-sm text-[#2B3325]/75 font-light leading-loose">
              <p>
                At Étoile, we treat perfumery as a high art form — equal parts alchemy, craft, and poetry. Our compositions are not designed to impress, but to resonate. To align with who you truly are, beneath the surface.
              </p>
              <p>
                Working exclusively with artisan cultivators in Grasse, Calabria, Madagascar, and the Haitian highlands, we source only the rarest raw materials harvested at peak bloom. No shortcuts. No compromises. No fragrance that doesn&rsquo;t feel like it was created for exactly one person.
              </p>
            </div>
            <Link
              href="/collections"
              className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-[#2B3325] hover:text-[#C8A76A] font-semibold border-b border-[#2B3325]/20 hover:border-[#C8A76A]/50 pb-1 transition-all"
            >
              <span>Explore Our Collections</span>
              <span>→</span>
            </Link>
          </div>

          {/* Campaign image */}
          <div className="relative aspect-square rounded-[28px] overflow-hidden shadow-lg">
            <ImagePlaceholder label="Master Perfumer — Paris Atelier" aspect="aspect-square" theme="light" />
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-[#2B3325] text-[#F4F2E8] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {brandData.stats.map(({ num, label }) => (
            <div key={label} className="text-center space-y-1">
              <div className="font-serif text-4xl text-[#C8A76A] font-light">{num}</div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-[#F4F2E8]/60 font-light">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-14 space-y-2">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#C8A76A] font-bold">Our Journey</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light">Milestones in Fragrance</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E7DFC9] hidden md:block" />

          <div className="space-y-12">
            {brandData.milestones.map((m, i) => (
              <div key={m.year} className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A76A] font-bold">{m.year}</span>
                  <h3 className="font-serif text-xl font-light mt-1 mb-2">{m.title}</h3>
                  <p className="text-xs text-[#2B3325]/70 font-light leading-relaxed max-w-sm mx-auto md:mx-0 md:ml-auto">{m.text}</p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#C8A76A] border-2 border-[#F4F2E8] shadow-md z-10" />

                {/* Empty space other side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#1D2418] text-[#F4F2E8] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14 space-y-2">
            <span className="text-[10px] tracking-[0.35em] uppercase text-[#C8A76A] font-bold">What We Stand For</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light">Our Founding Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandData.values.map((v) => (
              <div key={v.title} className="bg-[#2B3325]/60 border border-[#384233] rounded-[22px] p-7 space-y-4 hover:border-[#C8A76A]/40 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#C8A76A]/10 border border-[#C8A76A]/30 flex items-center justify-center text-[#C8A76A] group-hover:bg-[#C8A76A]/20 transition-colors">
                  {getIcon(v.icon)}
                </div>
                <h3 className="font-serif text-base font-light">{v.title}</h3>
                <p className="text-xs text-[#F4F2E8]/55 font-light leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfumer Portrait section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Portrait Placeholder */}
          <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden shadow-lg">
            <ImagePlaceholder label="Élise Moreau — Founder & Master Perfumer" aspect="aspect-[3/4]" theme="light" />
          </div>

          <div className="space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A76A] font-bold">The Visionary</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light">Élise Moreau,<br />Nose & Founder</h2>
            <blockquote className="border-l-2 border-[#C8A76A] pl-6 italic font-serif text-lg text-[#1D2418]/80 leading-relaxed">
              &ldquo;A perfume is not what you smell. It is what you remember. We compose not for the world, but for the one person who understands.&rdquo;
            </blockquote>
            <div className="space-y-3 text-sm text-[#2B3325]/70 font-light leading-loose">
              <p>Trained at the Institut Supérieur International du Parfum in Versailles, Élise spent twelve years working for the great houses before founding Étoile with a single conviction: luxury must be earned through authenticity.</p>
              <p>Today, she personally approves every formula before it leaves the atelier — ensuring that each fragrance carries her signature: a balance of restraint and revelation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#2B3325] py-16 px-6">
        <div className="max-w-2xl mx-auto text-center text-[#F4F2E8] space-y-5">
          <span className="text-[#C8A76A] text-lg">✦</span>
          <h2 className="font-serif text-3xl font-light">Experience the Collection</h2>
          <p className="text-sm text-[#F4F2E8]/60 font-light leading-relaxed">
            Each fragrance is a chapter in our story. Begin yours today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link href="/collections" className="bg-[#C8A76A] hover:bg-[#b09156] text-[#1D2418] px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md">
              Browse Collections
            </Link>
            <Link href="/contact" className="border border-[#F4F2E8]/30 hover:border-[#C8A76A] text-[#F4F2E8] hover:text-[#C8A76A] px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-semibold transition-all">
              Visit a Boutique
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
