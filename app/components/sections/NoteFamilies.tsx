"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation(["home", "common"]);
  const [selectedNote, setSelectedNote] = React.useState<NoteFamily>(noteFamiliesData[0]);
  const isRtl = i18n.language === "ar";
  const meta = familyMeta[selectedNote.id];

  return (
    <section id="notes" className="py-20 md:py-32 bg-[#E7DFC9]/25 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="fade-in-section text-center max-w-2xl mx-auto mb-14 md:mb-20 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="h-[1px] w-8 bg-[#C8A76A]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-semibold">
              {t("noteFamilies.badge")}
            </span>
            <div className="h-[1px] w-8 bg-[#C8A76A]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1D2418] font-light">
            {t("noteFamilies.title")}
          </h2>
          <p className="text-sm text-[#2B3325]/70 font-light leading-relaxed">
            {t("noteFamilies.subtitle")}
          </p>
        </div>

        {/* Note Family Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {noteFamiliesData.map((note) => {
            const isSelected = note.id === selectedNote.id;
            return (
              <button
                key={note.id}
                onClick={() => setSelectedNote(note)}
                className={`p-6 rounded-[22px] border text-left rtl:text-right transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#2B3325] text-[#F4F2E8] border-[#C8A76A] shadow-xl scale-102"
                    : "bg-[#F4F2E8] text-[#1D2418] border-[#E7DFC9] hover:border-[#C8A76A]/50 hover:bg-[#F4F2E8]/80"
                }`}
              >
                <span
                  className={`text-[10px] tracking-[0.2em] uppercase font-bold block mb-2 ${
                    isSelected ? "text-[#C8A76A]" : "text-[#2B3325]/60"
                  }`}
                >
                  {note.name}
                </span>
                <p
                  className={`text-xs font-light line-clamp-2 ${
                    isSelected ? "text-[#E7DFC9]/80" : "text-[#1D2418]/70"
                  }`}
                >
                  {note.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <div className="bg-[#2B3325] text-[#F4F2E8] rounded-[28px] border border-[#384233] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rtl:text-right">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A76A] font-bold block">
                {meta.mood}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#F4F2E8] font-light">
                {selectedNote.name}
              </h3>
              <p className="text-sm text-[#E7DFC9]/80 font-light leading-relaxed">
                {selectedNote.description}
              </p>

              <div className="pt-4">
                <Link
                  href="/collections"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C8A76A] font-semibold hover:text-[#F4F2E8] transition-colors"
                >
                  <span>{t("common:viewDetails")}</span>
                  <span>{isRtl ? "←" : "→"}</span>
                </Link>
              </div>
            </div>

            <div className="space-y-3 bg-[#1D2418]/80 p-6 rounded-[20px] border border-[#384233]">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C8A76A] font-bold block">
                {isRtl ? "المكونات الأساسية" : "Key Ingredients"}
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedNote.keyNotes.map((ing: string) => (
                  <span
                    key={ing}
                    className="text-xs bg-[#2B3325] text-[#E7DFC9] px-3.5 py-1.5 rounded-full border border-[#384233]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
