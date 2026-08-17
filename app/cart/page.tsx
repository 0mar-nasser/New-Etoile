"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function CartPage() {
  const router = useRouter();
  const { t, i18n } = useTranslation(["common", "navbar"]);
  const isArabic = i18n.language?.startsWith("ar");

  useEffect(() => {
    // Redirect to collections catalog
    const timer = setTimeout(() => {
      router.replace("/collections");
    }, 1200);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-[#F4F2E8] min-h-screen text-[#1D2418] pt-32 pb-24 flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center space-y-6 bg-white/40 border border-[#E7DFC9] rounded-[28px] p-8 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#C8A76A]/10 border border-[#C8A76A]/30 flex items-center justify-center mx-auto text-[#C8A76A]">
          <span className="text-2xl font-serif">✦</span>
        </div>
        <div className="space-y-2">
          <h1 className="font-serif text-3xl text-[#1D2418]">
            {isArabic ? "كتالوج منتجات إيتوال" : "Étoile Product Catalog"}
          </h1>
          <p className="text-xs text-[#2B3325]/70 font-light leading-relaxed">
            {isArabic
              ? "يعمل الموقع حالياً ككتالوج لعرض المنتجات والتوريد. جاري نقلك إلى الكتالوج الكامل..."
              : "Our website operates as a product showcase catalog. Redirecting you to the catalog..."}
          </p>
        </div>
        <Link
          href="/collections"
          className="inline-block bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-md"
        >
          {isArabic ? "الانتقال للكتالوج الآن" : "Go to Catalog Now"}
        </Link>
      </div>
    </div>
  );
}
