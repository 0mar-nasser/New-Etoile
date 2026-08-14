"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Footer() {
  const { t } = useTranslation(["footer", "navbar", "common"]);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1D2418] text-[#F4F2E8] pt-20 pb-10 border-t border-[#384233] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#384233]">
        
        {/* Column 1: Logo & Statement */}
        <div className="lg:col-span-2 space-y-6 rtl:text-right">
          <Link href="/" className="focus:outline-none flex flex-col items-start rtl:items-end group">
            <Image 
              src="/Logos/title-light.png" 
              alt="Etoile logo" 
              width={140} 
              height={40} 
              className="object-contain"
            />
          </Link>
          <p className="text-xs text-[#E7DFC9]/70 leading-relaxed max-w-sm font-light">
            {t("footer:tagline")}
          </p>
          
          {/* Language Switcher in Footer */}
          <div className="pt-2">
            <span className="text-[10px] uppercase tracking-widest text-[#C8A76A] block mb-2 font-bold">
              {t("footer:language")}
            </span>
            <LanguageSwitcher variant="pill" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4 rtl:text-right">
          <h4 className="text-xs tracking-[0.2em] uppercase text-[#C8A76A] font-bold">
            {t("footer:quickLinks")}
          </h4>
          <ul className="space-y-2.5 text-xs font-light text-[#E7DFC9]/80">
            <li><Link href="/about" className="hover:text-[#C8A76A] transition-colors">{t("navbar:about")}</Link></li>
            <li><Link href="/collections" className="hover:text-[#C8A76A] transition-colors">{t("navbar:collections")}</Link></li>
            <li><Link href="/#wholesale" className="hover:text-[#C8A76A] transition-colors">{t("navbar:wholesale")}</Link></li>
            <li><Link href="/contact" className="hover:text-[#C8A76A] transition-colors">{t("navbar:contact")}</Link></li>
          </ul>
        </div>

        {/* Column 3: Supply Catalog */}
        <div className="space-y-4 rtl:text-right">
          <h4 className="text-xs tracking-[0.2em] uppercase text-[#C8A76A] font-bold">
            {t("footer:catalog")}
          </h4>
          <ul className="space-y-2.5 text-xs font-light text-[#E7DFC9]/80">
            <li><Link href="/collections" className="hover:text-[#C8A76A] transition-colors">{t("navbar:bottlesCaps")}</Link></li>
            <li><Link href="/collections" className="hover:text-[#C8A76A] transition-colors">{t("navbar:perfumeOils")}</Link></li>
          </ul>
        </div>

        {/* Column 4: B2B Consultation */}
        <div className="space-y-4 rtl:text-right">
          <h4 className="text-xs tracking-[0.2em] uppercase text-[#C8A76A] font-bold">
            {t("footer:contact")}
          </h4>
          <ul className="space-y-2.5 text-xs font-light text-[#E7DFC9]/80">
            <li><Link href="/contact" className="hover:text-[#C8A76A] transition-colors">{t("navbar:contact")}</Link></li>
            <li className="text-[11px] text-[#E7DFC9]/60">{t("footer:address")}</li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-light text-[#E7DFC9]/50 tracking-wider space-y-4 md:space-y-0">
        <span>{t("footer:copyright", { year: currentYear })}</span>
        <div className="flex space-x-6 rtl:space-x-reverse">
          <a href="#" className="hover:text-[#C8A76A] transition-colors">{t("footer:privacyPolicy")}</a>
          <a href="#" className="hover:text-[#C8A76A] transition-colors">{t("footer:termsOfService")}</a>
        </div>
      </div>
    </footer>
  );
}
