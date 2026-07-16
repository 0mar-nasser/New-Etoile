"use client";

import React from "react";
import testimonialsData from "../../data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#F4F2E8] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="fade-in-section text-center max-w-xl mx-auto mb-16 md:mb-24 flex flex-col items-center space-y-4">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C8A76A] font-bold">Verifiable Experiences</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1D2418] font-light">Whispers of Etoile</h2>
          <div className="h-[1px] w-12 bg-[#2B3325]/40 mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((review, i) => (
            <div
              key={i}
              className="fade-in-section bg-[#E7DFC9]/20 border border-[#E7DFC9]/70 rounded-[24px] p-8 flex flex-col space-y-6 shadow-sm transition-all duration-500 hover:shadow-md"
            >
              <div className="flex space-x-1">
                {[...Array(review.rating)].map((_, idx) => (
                  <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#C8A76A]">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-[#2B3325]/80 font-light italic leading-relaxed flex-grow">
                &ldquo;{review.quote}&rdquo;
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-[#E7DFC9]/60">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#1D2418]">{review.name}</h4>
                  <span className="text-[10px] text-[#2B3325]/60 font-light uppercase tracking-wider">{review.location}</span>
                </div>
                <span className="text-[9px] bg-[#2B3325] text-[#F4F2E8] px-3 py-1 rounded-full font-light tracking-widest uppercase">
                  {review.perfume}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
