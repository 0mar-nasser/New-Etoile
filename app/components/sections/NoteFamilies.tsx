"use client";

import React from "react";
import Link from "next/link";
import noteFamiliesData from "../../data/note_families.json";

type NoteFamily = (typeof noteFamiliesData)[number];

const familyMeta: Record<
  NoteFamily["id"],
  { symbol: string; accent: string; mood: string }
> = {
  woody: {
    symbol: "W",
    accent: "from-[#2B3325] to-[#384233]",
    mood: "Deep & Earthy",
  },
  floral: {
    symbol: "F",
    accent: "from-[#3A2F35] to-[#5C3D4A]",
    mood: "Romantic & Soft",
  },
  citrus: {
    symbol: "C",
    accent: "from-[#3D3A2A] to-[#5C5230]",
    mood: "Bright & Radiant",
  },
  oriental: {
    symbol: "O",
    accent: "from-[#3A2A1F] to-[#5C3F2A]",
    mood: "Warm & Sensual",
  },
  fresh: {
    symbol: "R",
    accent: "from-[#243038] to-[#2F4A4A]",
    mood: "Airy & Clean",
  },
};

export default function NoteFamilies() {
  const [selectedNote, setSelectedNote] = React.useState<NoteFamily>(noteFamiliesData[0]);
  const selectedIndex = noteFamiliesData.findIndex((note) => note.id === selectedNote.id);
  const meta = familyMeta[selectedNote.id];

  return (
    <section id="notes" className="py-20 md:py-32 bg-[#E7DFC9]/25 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="fade-in-section text-center max-w-2xl mx-auto mb-14 md:mb-20 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <div className="h-[1px] w-8 bg-[#C8A76A]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-semibold">
              The Olfactory Wheel
            </span>
            <div className="h-[1px] w-8 bg-[#C8A76A]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1D2418] font-light">
            Fragrance Note <span className="italic text-[#2B3325]">Families</span>
          </h2>
          <p className="text-sm text-[#2B3325]/70 font-light leading-relaxed">
            Explore the five pillars of perfumery and discover the raw character behind each
            composition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="fade-in-section lg:col-span-4">
            <div className="flex lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible snap-x snap-mandatory lg:snap-none">
              {noteFamiliesData.map((note, index) => {
                const isActive = selectedNote.id === note.id;
                const noteMeta = familyMeta[note.id];

                return (
                  <button
                    key={note.id}
                    onClick={() => setSelectedNote(note)}
                    className={`min-w-[220px] lg:min-w-0 snap-start text-left rounded-[22px] border px-5 py-4 transition-all duration-300 cursor-pointer outline-none ${
                      isActive
                        ? "bg-[#1D2418] border-[#C8A76A]/60 text-[#F4F2E8] shadow-xl"
                        : "bg-[#F4F2E8]/80 border-[#E7DFC9] text-[#1D2418] hover:border-[#C8A76A]/40 hover:bg-[#F4F2E8]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-serif text-lg ${
                          isActive
                            ? "border-[#C8A76A]/50 bg-[#C8A76A]/10 text-[#C8A76A]"
                            : "border-[#E7DFC9] bg-white/50 text-[#2B3325]"
                        }`}
                      >
                        {noteMeta.symbol}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] tracking-[0.25em] uppercase text-[#C8A76A] font-semibold">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="font-serif text-xl font-light tracking-wide truncate">
                          {note.name}
                        </p>
                        <p
                          className={`text-[11px] font-light mt-0.5 ${
                            isActive ? "text-[#E7DFC9]/70" : "text-[#2B3325]/55"
                          }`}
                        >
                          {noteMeta.mood}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="fade-in-section lg:col-span-8">
            <div
              key={selectedNote.id}
              className={`relative overflow-hidden rounded-[32px] border border-[#384233]/40 bg-gradient-to-br ${meta.accent} text-[#F4F2E8] shadow-2xl transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,167,106,0.18),transparent_55%)]" />
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#C8A76A]/10 blur-3xl" />

              <div className="relative z-10 p-8 md:p-12 space-y-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div className="space-y-3">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A76A] font-semibold">
                      Fragrance Profile
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-light tracking-wide">
                      {selectedNote.name} Notes
                    </h3>
                    <p className="text-sm md:text-base text-[#E7DFC9]/80 font-light leading-relaxed max-w-2xl">
                      {selectedNote.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-5xl text-[#C8A76A]/25 leading-none">
                      {String(selectedIndex + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#E7DFC9]/50 mt-1">
                      of 05 families
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-[24px] border border-[#384233]/60 bg-[#1D2418]/35 p-6 space-y-4">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A76A] font-semibold">
                      Key Essences
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedNote.keyNotes.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#C8A76A]/30 bg-[#C8A76A]/10 px-4 py-2 text-xs text-[#F4F2E8] font-light tracking-wide"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#384233]/60 bg-[#1D2418]/35 p-6 space-y-4">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A76A] font-semibold">
                      Ingredients Sourcing
                    </span>
                    <p className="text-sm text-[#E7DFC9]/75 font-light leading-relaxed italic">
                      {selectedNote.ingredients}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2 border-t border-[#384233]/60">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#E7DFC9]/55 font-light">
                    Mood: {meta.mood}
                  </p>
                  <Link
                    href={`/collections?filter=${selectedNote.id}`}
                    className="luxury-btn inline-flex items-center justify-center gap-2 bg-[#C8A76A] hover:bg-[#F4F2E8] text-[#1D2418] px-7 py-3 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300"
                  >
                    <span>View Fragrances</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
