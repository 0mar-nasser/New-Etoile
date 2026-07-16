"use client";

import React from "react";
import Image from "next/image";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: string;
  theme?: "light" | "dark";
}

const PLACEHOLDER_IMAGE = "/images/hero_perfume.png";

export default function ImagePlaceholder({
  label,
  className = "",
  aspect = "aspect-[3/4]",
  theme = "light"
}: ImagePlaceholderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`relative w-full overflow-hidden border transition-all duration-700 ${aspect} ${
        isDark
          ? "bg-[#1D2418] border-[#384233]/50"
          : "bg-[#F4F2E8] border-[#E7DFC9]/80"
      } ${className}`}
    >
      <Image
        src={PLACEHOLDER_IMAGE}
        alt={label}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
