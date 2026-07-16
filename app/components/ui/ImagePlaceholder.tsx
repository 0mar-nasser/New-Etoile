"use client";

import React from "react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: string;
  theme?: "light" | "dark";
}

export default function ImagePlaceholder({
  label,
  className = "",
  aspect = "aspect-[3/4]",
  theme = "light"
}: ImagePlaceholderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`relative w-full overflow-hidden border flex flex-col items-center justify-center p-6 text-center select-none group transition-all duration-700 ${aspect} ${
        isDark
          ? "bg-gradient-to-br from-[#1D2418] to-[#2B3325] border-[#384233]/50 text-[#F4F2E8]"
          : "bg-gradient-to-br from-[#F4F2E8] to-[#E7DFC9]/80 border-[#E7DFC9]/80 text-[#1D2418]"
      } ${className}`}
    >
      {/* Background aesthetic grid lines */}
      <div className="absolute inset-4 border border-dashed border-[#C8A76A]/10 pointer-events-none transition-all duration-700 group-hover:inset-3" />
      
      {/* Centered gold star icon */}
      <div className="mb-3 text-[#C8A76A]/60 transition-transform duration-700 group-hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.198-.39 1.302-.39 1.5 0l1.85 3.75 4.138.6c.43.063.602.592.29.902l-2.995 2.92.707 4.123c.074.43-.377.758-.76.552L12 14.348l-3.71 1.952c-.382.206-.834-.122-.76-.552l.707-4.123-2.995-2.92c-.312-.31-.14-.839.29-.902l4.138-.6 1.85-3.75Z" />
        </svg>
      </div>

      {/* Label info */}
      <span className="font-serif text-sm md:text-base tracking-widest font-light text-[#C8A76A]">
        {label}
      </span>

      {/* Fine-print luxury styling details */}
      <span className={`text-[8px] uppercase tracking-[0.25em] font-light mt-2 opacity-50 ${isDark ? "text-[#E7DFC9]" : "text-[#2B3325]"}`}>
        Maison Étoile • Paris (48.8566° N)
      </span>
      
      {/* Aspect Ratio Details */}
      <div className="absolute bottom-3 right-3 text-[8px] tracking-wider font-light opacity-30 text-[#C8A76A]">
        [ SCENT VISUAL ]
      </div>
    </div>
  );
}
