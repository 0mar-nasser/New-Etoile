"use client";

import React, { useState } from "react";
import Link from "next/link";
import noteFamiliesData from "../../data/note_families.json";

export default function NoteFamilies() {
  const [selectedNote, setSelectedNote] = useState(noteFamiliesData[0]);

  return (
    <section id="notes" className="py-24 md:py-32 bg-[#F4F2E8] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="fade-in-section text-center max-w-xl mx-auto mb-16 md:mb-20 flex flex-col items-center space-y-4">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#C8A76A] font-bold">The Olfactory Wheel</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1D2418] font-light">Fragrance Note Families</h2>
          <p className="text-xs text-[#2B3325]/70 font-light mt-2 max-w-sm">Select a note family to discover its raw ingredients and characters.</p>
          <div className="h-[1px] w-12 bg-[#2B3325]/40 mt-2" />
        </div>

        {/* Note Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-12">
          {noteFamiliesData.map((note) => {
            const isActive = selectedNote.id === note.id;
            return (
              <button
                key={note.id}
                onClick={() => setSelectedNote(note)}
                className={`p-6 rounded-[20px] transition-all duration-500 flex flex-col items-center justify-center text-center space-y-3 cursor-pointer outline-none border ${
                  isActive
                    ? "bg-[#2B3325] border-[#C8A76A] text-[#F4F2E8] shadow-lg scale-105"
                    : "bg-[#E7DFC9]/20 hover:bg-[#E7DFC9]/40 border-[#E7DFC9]/60 text-[#1D2418]"
                }`}
              >
                <span className="text-2xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                  {note.id === "woody" && "🪵"}
                  {note.id === "floral" && "🌹"}
                  {note.id === "citrus" && "🍋"}
                  {note.id === "oriental" && "✨"}
                  {note.id === "fresh" && "🍃"}
                </span>
                <span className="text-xs tracking-[0.15em] uppercase font-medium">
                  {note.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div className="fade-in-section bg-[#E7DFC9]/35 rounded-[24px] border border-[#E7DFC9] p-8 md:p-12 transition-all duration-700 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#C8A76A]/5 rounded-full blur-[60px]" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-7 flex flex-col space-y-4">
              <span className="text-[10px] tracking-[0.30em] uppercase text-[#C8A76A] font-semibold">Fragrance Profile</span>
              <h3 className="font-serif text-3xl text-[#1D2418] font-light tracking-wide">{selectedNote.name} Notes</h3>
              <p className="text-sm md:text-base text-[#2B3325]/80 leading-relaxed font-light">
                {selectedNote.description}
              </p>
              <div className="pt-2">
                <h4 className="text-[11px] uppercase tracking-wider text-[#1D2418] font-semibold mb-2">Ingredients Sourcing:</h4>
                <p className="text-xs text-[#2B3325]/75 italic font-light leading-relaxed max-w-xl">
                  {selectedNote.ingredients}
                </p>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col bg-[#F4F2E8] p-6 rounded-[20px] border border-[#E7DFC9]/60 shadow-sm space-y-4">
              <span className="text-[9px] tracking-widest uppercase text-[#C8A76A] font-bold">Key Essences</span>
              <ul className="space-y-3">
                {selectedNote.keyNotes.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-xs md:text-sm font-light text-[#2B3325]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A76A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/collections?filter=${selectedNote.id}`}
                className="luxury-btn bg-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] text-[#F4F2E8] px-6 py-2.5 rounded-full text-center text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-300 mt-2"
              >
                View Fragrances
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
