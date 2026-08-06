"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { PRODUCTS, Product } from "../../data/products";
import ImagePlaceholder from "../ui/ImagePlaceholder";

export default function ScentQuiz() {
  const { addToCart } = useCart();

  const [quizStep, setQuizStep] = useState(0); // 0: intro, 1: note family preference, 2: intensity preference, 3: result
  const [quizNotesPref, setQuizNotesPref] = useState("");
  const [_quizIntensityPref, setQuizIntensityPref] = useState("");
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);

  // Recommendation logic for scent quiz
  const handleQuizNext = (step: number, answer: string) => {
    if (step === 1) {
      setQuizNotesPref(answer);
      setQuizStep(2);
    } else if (step === 2) {
      setQuizIntensityPref(answer);
      
      // Calculate recommendation
      let match: Product | undefined;
      const notes = quizNotesPref;
      const intensity = answer;

      if (notes === "woody") {
        match = intensity === "bold" ? PRODUCTS.find(p => p.id === "bois") : PRODUCTS.find(p => p.id === "originelle");
      } else if (notes === "floral") {
        match = intensity === "bold" ? PRODUCTS.find(p => p.id === "originelle-intense") : PRODUCTS.find(p => p.id === "or-rose");
      } else if (notes === "citrus") {
        match = intensity === "bold" ? PRODUCTS.find(p => p.id === "originelle") : PRODUCTS.find(p => p.id === "fleur-secrete");
      } else { // oriental
        match = intensity === "bold" ? PRODUCTS.find(p => p.id === "originelle-intense") : PRODUCTS.find(p => p.id === "or-rose");
      }

      // Fallback
      if (!match) match = PRODUCTS[0];

      setRecommendedProduct(match);
      setQuizStep(3);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizNotesPref("");
    setQuizIntensityPref("");
    setRecommendedProduct(null);
  };

  return (
    <section className="py-20 bg-[#F4F2E8] border-t border-[#E7DFC9]/60 relative z-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[#2B3325] text-[#F4F2E8] rounded-[28px] border border-[#384233] p-8 md:p-12 relative overflow-hidden shadow-xl text-center">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#C8A76A]/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            {quizStep === 0 && (
              <div className="space-y-6 py-6">
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-bold">Fragrance Concierge</span>
                <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-[#F4F2E8]">
                  Find Your Signature Scent
                </h2>
                <p className="text-xs md:text-sm text-[#E7DFC9]/80 font-light max-w-md mx-auto leading-relaxed">
                  Every scent tells a story. Take our interactive olfactory consultation to discover the Étoile fragrance that aligns with your essence.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setQuizStep(1)}
                    className="luxury-btn bg-[#C8A76A] hover:bg-[#b09156] text-[#1D2418] px-8 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Begin Consultation
                  </button>
                </div>
              </div>
            )}

            {quizStep === 1 && (
              <div className="space-y-6 py-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A76A] font-medium">Question 1 of 2</span>
                <h3 className="font-serif text-2xl font-light text-[#F4F2E8]">
                  Which olfactory notes are you naturally drawn to?
                </h3>
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-2">
                  <button
                    onClick={() => handleQuizNext(1, "woody")}
                    className="p-4 border border-[#384233] hover:border-[#C8A76A] rounded-[16px] text-xs uppercase tracking-widest font-light bg-[#1D2418]/60 hover:bg-[#1D2418] transition-all text-[#F4F2E8] cursor-pointer"
                  >
                    🪵 Woody & Earthy
                  </button>
                  <button
                    onClick={() => handleQuizNext(1, "floral")}
                    className="p-4 border border-[#384233] hover:border-[#C8A76A] rounded-[16px] text-xs uppercase tracking-widest font-light bg-[#1D2418]/60 hover:bg-[#1D2418] transition-all text-[#F4F2E8] cursor-pointer"
                  >
                    🌹 Floral & Powdery
                  </button>
                  <button
                    onClick={() => handleQuizNext(1, "citrus")}
                    className="p-4 border border-[#384233] hover:border-[#C8A76A] rounded-[16px] text-xs uppercase tracking-widest font-light bg-[#1D2418]/60 hover:bg-[#1D2418] transition-all text-[#F4F2E8] cursor-pointer"
                  >
                    🍋 Fresh & Zesty
                  </button>
                  <button
                    onClick={() => handleQuizNext(1, "oriental")}
                    className="p-4 border border-[#384233] hover:border-[#C8A76A] rounded-[16px] text-xs uppercase tracking-widest font-light bg-[#1D2418]/60 hover:bg-[#1D2418] transition-all text-[#F4F2E8] cursor-pointer"
                  >
                    ✨ Warm & Sweet
                  </button>
                </div>
                <div className="pt-2">
                  <button onClick={resetQuiz} className="text-[10px] tracking-widest text-[#E7DFC9]/50 hover:text-[#C8A76A] uppercase font-light">Cancel</button>
                </div>
              </div>
            )}

            {quizStep === 2 && (
              <div className="space-y-6 py-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A76A] font-medium">Question 2 of 2</span>
                <h3 className="font-serif text-2xl font-light text-[#F4F2E8]">
                  How would you describe your preferred scent presence?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 max-w-sm mx-auto">
                  <button
                    onClick={() => handleQuizNext(2, "subtle")}
                    className="flex-1 p-5 border border-[#384233] hover:border-[#C8A76A] rounded-[16px] text-xs uppercase tracking-widest font-light bg-[#1D2418]/60 hover:bg-[#1D2418] transition-all text-[#F4F2E8] cursor-pointer"
                  >
                    Ethereal & Subtle
                    <span className="block text-[8px] text-[#E7DFC9]/50 mt-1 font-sans normal-case">Lighter trail, whispers elegant longevity</span>
                  </button>
                  <button
                    onClick={() => handleQuizNext(2, "bold")}
                    className="flex-1 p-5 border border-[#384233] hover:border-[#C8A76A] rounded-[16px] text-xs uppercase tracking-widest font-light bg-[#1D2418]/60 hover:bg-[#1D2418] transition-all text-[#F4F2E8] cursor-pointer"
                  >
                    Bold & Mysterious
                    <span className="block text-[8px] text-[#E7DFC9]/50 mt-1 font-sans normal-case">Deconstructive trail, leaves a statement</span>
                  </button>
                </div>
                <div className="pt-4 flex justify-center space-x-6">
                  <button onClick={() => setQuizStep(1)} className="text-[10px] tracking-widest text-[#E7DFC9]/50 hover:text-[#C8A76A] uppercase font-light">Back</button>
                  <button onClick={resetQuiz} className="text-[10px] tracking-widest text-[#E7DFC9]/50 hover:text-red-400 uppercase font-light">Cancel</button>
                </div>
              </div>
            )}

            {quizStep === 3 && recommendedProduct && (
              <div className="space-y-6 py-2 text-left">
                <div className="text-center">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-bold">Your Olfactory Profile Match</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#1D2418]/60 p-6 rounded-[20px] border border-[#384233] max-w-xl mx-auto text-left">
                  <div className="relative aspect-square w-full rounded-[12px] overflow-hidden">
                    <ImagePlaceholder label={`${recommendedProduct.name} Visual`} aspect="aspect-square" theme="dark" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-[#C8A76A] font-bold">{recommendedProduct.family}</span>
                      <h4 className="font-serif text-xl text-[#F4F2E8] font-light mt-0.5">{recommendedProduct.name}</h4>
                    </div>
                    <p className="text-[11px] text-[#E7DFC9]/80 font-light leading-relaxed line-clamp-3">
                      {recommendedProduct.description}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#384233]/60">
                      <span className="font-serif text-base text-[#F4F2E8] font-medium">${recommendedProduct.price}</span>
                      <button
                        onClick={() => addToCart(recommendedProduct, "100ml")}
                        className="bg-[#C8A76A] hover:bg-[#b09156] text-[#1D2418] px-4 py-2 rounded-full text-[9px] tracking-wider uppercase font-semibold transition-colors cursor-pointer"
                      >
                        Add To Bag
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                  <Link
                    href={`/collections/${recommendedProduct.id}`}
                    className="text-[10px] tracking-widest uppercase text-[#F4F2E8] hover:text-[#C8A76A] font-light border-b border-[#F4F2E8]/20 pb-0.5"
                  >
                    View Full Scent Profile
                  </Link>
                  <span className="hidden sm:inline text-[#C8A76A]/45">•</span>
                  <button
                    onClick={resetQuiz}
                    className="text-[10px] tracking-widest uppercase text-[#C8A76A] hover:underline font-light cursor-pointer"
                  >
                    Consult Again
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
