"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import brandData from "../data/brand.json";

export default function AboutPage() {
  const { t } = useTranslation(["about", "common"]);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // بطء السرعة إلى 60%
    }
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "sparkles":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
          </svg>
        );
      case "sun":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
        );
      case "globe":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F7F4EC] min-h-screen text-[#273124]">

      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-end overflow-hidden group">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="/Video/video-1.mp4"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={(e) => {
              e.currentTarget.playbackRate = 0.5;
            }}
            className="w-full h-full object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#11160F] via-[#1D2418]/60 to-black/30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-20 md:pb-24 text-[#F4F2E8] flex flex-col justify-end min-h-[100vh]">
          <div className="max-w-2xl space-y-6 rtl:text-right">
            {/* Luxury Badge */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A76A]/15 border border-[#C8A76A]/35 backdrop-blur-md text-[11px] tracking-[0.35em] uppercase text-[#D4AF37] font-medium shadow-lg shadow-black/20">
                <span className="text-[#C8A76A] text-xs">✦</span>
                {t("heroBadge")}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-extralight leading-[1.15] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#F4F2E8] via-[#FFFDFB] to-[#E2D8C3] drop-shadow-lg">
              {t("title")}
            </h1>

            {/* Decorative Gold Accent Line */}
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#C8A76A] via-[#C8A76A]/60 to-transparent rtl:bg-gradient-to-l rtl:from-[#C8A76A] rtl:via-[#C8A76A]/60 rtl:to-transparent" />

            {/* Subtitle */}
            <p className="text-base md:text-lg text-[#E7DFC9]/90 font-light leading-relaxed max-w-xl">
              {t("subtitle")}
            </p>
          </div>

          {/* Floating Scroll Indicator */}
          <div className="absolute bottom-8 right-6 md:right-12 rtl:right-auto rtl:left-6 md:rtl:left-12 hidden sm:flex items-center gap-3 text-xs tracking-[0.25em] text-[#C8A76A]/70 uppercase font-light pointer-events-none">
            <span className="w-8 h-[1px] bg-[#C8A76A]/40" />
            <span className="animate-pulse">Scroll</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center rtl:text-right">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#B9924E] font-bold">
              ✦ {t("storyTitle")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1D2418] font-light">
              {t("storyTitle")}
            </h2>
            <p className="text-sm text-[#5F6658] font-light leading-relaxed">
              {t("storyP1")}
            </p>
            <p className="text-sm text-[#5F6658] font-light leading-relaxed">
              {t("storyP2")}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#1D2418] text-[#F4F2E8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A76A] font-bold">
              ✦ {t("valuesTitle")} ✦
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              {t("valuesTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t("val1Title"), desc: t("val1Desc"), icon: "sparkles" },
              { title: t("val2Title"), desc: t("val2Desc"), icon: "sun" },
              { title: t("val3Title"), desc: t("val3Desc"), icon: "globe" },
            ].map((val) => (
              <div
                key={val.title}
                className="bg-[#2B3325] border border-[#384233] rounded-[24px] p-8 space-y-4 hover:border-[#C8A76A]/40 transition-colors rtl:text-right"
              >
                <div className="text-[#C8A76A]">{getIcon(val.icon)}</div>
                <h3 className="font-serif text-2xl font-light text-[#F4F2E8]">
                  {val.title}
                </h3>
                <p className="text-xs text-[#E7DFC9]/80 font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
