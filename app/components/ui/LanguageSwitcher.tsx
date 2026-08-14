"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/src/i18n";

interface LanguageSwitcherProps {
  variant?: "pill" | "text" | "compact";
  className?: string;
}

export default function LanguageSwitcher({
  variant = "pill",
  className = "",
}: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("ar") ? "ar" : "en";

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  if (variant === "text") {
    return (
      <div className={`flex items-center gap-3 text-md tracking-wider uppercase font-medium ${className}`}>
        {Object.values(SUPPORTED_LANGUAGES).map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`transition-colors duration-200 cursor-pointer ${currentLang === lang.code
              ? "text-[#C8A76A] font-semibold underline underline-offset-4"
              : "text-[#E7DFC9]/70 hover:text-[#F4F2E8]"
              }`}
            aria-label={`Switch to ${lang.nativeName}`}
          >
            {lang.nativeName}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-[#1D2418]/60 border border-[#C8A76A]/30 backdrop-blur-sm ${className}`}
    >
      {Object.values(SUPPORTED_LANGUAGES).map((lang) => {
        const isActive = currentLang === lang.code;
        return (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${isActive
              ? "bg-[#C8A76A] text-[#1D2418] shadow-md font-semibold"
              : "text-[#E7DFC9]/80 hover:text-[#F4F2E8]"
              }`}
            aria-label={`Switch language to ${lang.label}`}
          >
            {lang.nativeName}
          </button>
        );
      })}
    </div>
  );
}
