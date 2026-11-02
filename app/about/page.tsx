"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
      <section className="relative h-[100vh] items-end overflow-hidden group">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="/Video/video-1.mp4"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={(e) => {
              e.currentTarget.playbackRate = 0.8;
            }}
            className="w-full h-full object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#11160F] via-[#1D2418]/60 to-black/30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-20 md:pb-24 text-[#F4F2E8] flex flex-col justify-center min-h-[100vh]">

          <div className="max-w-5xl space-y-6 mx-auto text-center">
            {/* Transparent Cutout Split Text Heading (Reveals Background Video) */}
            <motion.h1
              dir="ltr"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.14,
                    delayChildren: 0.15,
                  },
                },
              }}
              className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold uppercase select-none leading-[1.1] text-center flex flex-wrap justify-center gap-x-4 sm:gap-x-7 gap-y-2 drop-shadow-2xl ltr"
              style={{
                direction: "ltr",
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(200, 167, 106, 0.85)",
                textShadow: "0 0 35px rgba(200, 167, 106, 0.3)",
              }}
            >
              {"Designed in the details".split(" ").map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  dir="ltr"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.04,
                      },
                    },
                  }}
                  className="inline-flex overflow-hidden py-1.5 ltr"
                  style={{ direction: "ltr" }}
                >
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      variants={{
                        hidden: {
                          y: "120%",
                          opacity: 0,
                          rotateX: 45,
                          filter: "blur(4px)",
                        },
                        visible: {
                          y: "0%",
                          opacity: 1,
                          rotateX: 0,
                          filter: "blur(0px)",
                          transition: {
                            duration: 1.0,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        },
                      }}
                      className="inline-block [will-change:transform,opacity,filter]"
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Luxury Story & Heritage Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#F7F4EC]">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C8A76A]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#273124]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center rtl:text-right">
            
            {/* Left / Text Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-8"
            >
              {/* Badge */}
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A76A]/15 border border-[#C8A76A]/30 text-[10px] tracking-[0.25em] uppercase text-[#8E7036] font-bold shadow-sm">
                  <span className="text-[#C8A76A]">✦</span>
                  {t("storyTitle")}
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1D2418] font-light leading-[1.2]">
                الإرث الفرنسي العريق يلتقي مع{" "}
                <span className="font-semibold text-[#8E7036] italic">
                  الهندسة الصناعية الفاخرة
                </span>
              </h2>

              {/* Description Paragraphs */}
              <div className="space-y-4 text-sm md:text-[15px] text-[#4A5244] font-light leading-relaxed">
                <p className="border-r-2 border-[#C8A76A] pr-4 rtl:border-r-2 rtl:border-l-0 rtl:pr-4 ltr:border-l-2 ltr:border-r-0 ltr:pl-4">
                  {t("storyP1")}
                </p>
                <p>
                  {t("storyP2")}
                </p>
              </div>

              {/* Key Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#EFECE2] border border-[#DDD8C9] space-y-1.5 hover:border-[#C8A76A]/50 transition-colors">
                  <div className="flex items-center gap-2 text-[#8E7036] font-serif font-bold text-sm">
                    <span>✦</span>
                    <span>خلاصات نقية +30%</span>
                  </div>
                  <p className="text-xs text-[#5F6658]">
                    زيوت فرنسية خام بتركيز Extrait de Parfum لأعلى درجات الفوحان والثبات.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#EFECE2] border border-[#DDD8C9] space-y-1.5 hover:border-[#C8A76A]/50 transition-colors">
                  <div className="flex items-center gap-2 text-[#8E7036] font-serif font-bold text-sm">
                    <span>✦</span>
                    <span>زجاج كريستالي فاخر</span>
                  </div>
                  <p className="text-xs text-[#5F6658]">
                    قوارير ثقيلة الوزن مع أغطية مغناطيسية ومضخات كبس معيارية دقيقة.
                  </p>
                </div>
              </div>

              {/* Quote / Highlight Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1D2418] to-[#2B3325] text-[#F4F2E8] border border-[#384233] shadow-lg flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-[#C8A76A] font-serif italic">
                    &ldquo;نبتكر المزيج الذي يمنح علامتك التجارية بصمة عطرية تدوم للأبد.&rdquo;
                  </p>
                  <p className="text-[10px] text-[#E7DFC9]/60">
                    L&apos;Étoile Haute Parfumerie — Grasse, France
                  </p>
                </div>
                <Link
                  href="/collections"
                  className="px-4 py-2 rounded-xl bg-[#C8A76A] hover:bg-[#D4AF37] text-[#141A12] font-bold text-xs whitespace-nowrap transition-colors shadow-md"
                >
                  استكشف الكتالوج &larr;
                </Link>
              </div>
            </motion.div>

            {/* Right / Luxury Imagery Layered Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0"
            >
              {/* Main Atelier Visual Card */}
              <div className="relative w-full aspect-[4/5] max-w-md md:max-w-lg rounded-[32px] overflow-hidden shadow-2xl border-2 border-[#C8A76A]/40 bg-[#1D2418]">
                <Image
                  src="/images/about/grasse_atelier.png"
                  alt="L'Étoile Grasse Atelier"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 right-6 left-6 rtl:text-right text-[#F4F2E8] space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A76A] font-mono font-semibold">
                    Atelier de Grasse
                  </span>
                  <p className="font-serif text-lg font-light text-[#F4F2E8]">
                    مختبرات التصنيع وتعتيق الزيوت العطرية
                  </p>
                </div>
              </div>

              {/* Floating Layered Card (Craftsmanship) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.3 }}
                className="absolute -bottom-8 -left-4 sm:-left-8 rtl:left-auto rtl:-left-4 sm:rtl:-left-8 w-44 sm:w-56 aspect-[4/4] rounded-2xl overflow-hidden shadow-2xl border border-[#C8A76A]/60 bg-[#141A12] hidden sm:block"
              >
                <Image
                  src="/images/about/perfumer_at_work.png"
                  alt="Master Perfumer at Work"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-2.5 right-2.5 left-2.5 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center">
                  <p className="text-[10px] font-mono text-[#C8A76A] font-semibold">
                    100% French Origin
                  </p>
                </div>
              </motion.div>

              {/* Floating Heritage Badge */}
              <div className="absolute -top-4 -right-4 rtl:right-auto rtl:-left-4 px-4 py-2.5 rounded-2xl bg-[#1D2418]/95 backdrop-blur-md border border-[#C8A76A]/60 shadow-xl text-center space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-[#C8A76A] font-mono font-bold block">
                  Est. Heritage
                </span>
                <span className="text-xs font-serif text-[#F4F2E8] font-light">
                  Grasse &bull; Haute Parfumerie
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Luxury Values & Core Pillars Section */}
      <section className="py-28 md:py-36 bg-gradient-to-b from-[#161F13] via-[#121810] to-[#0E130C] text-[#F4F2E8] relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#C8A76A]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#384233]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto mb-20 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C8A76A]/10 border border-[#C8A76A]/30 backdrop-blur-md shadow-sm">
              <span className="text-[#C8A76A] text-xs">✦</span>
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                {t("valuesTitle")}
              </span>
              <span className="text-[#C8A76A] text-xs">✦</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F4F2E8] leading-[1.2]">
              ركائز الجودة والأصالة في{" "}
              <span className="text-[#C8A76A] italic font-normal">
                دار إيتوال
              </span>
            </h2>

            <p className="text-xs md:text-sm text-[#E7DFC9]/70 font-light leading-relaxed max-w-xl mx-auto">
              نلتزم بأعلى المقاييس العالمية لصناعة العطور والزجاج الفاخر لنكون الشريك الاستراتيجي الأول للعلامات الراقية.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                num: "01",
                title: t("val1Title"),
                desc: t("val1Desc"),
                icon: "sparkles",
                tags: ["فحوصات GC-MS الدقيقة", "نقاء فرنسي 100%", "معايير IFRA الدولية"],
                accent: "from-amber-500/20 to-amber-500/5",
                borderAccent: "hover:border-amber-400/60",
                iconColor: "text-amber-400",
              },
              {
                num: "02",
                title: t("val2Title"),
                desc: t("val2Desc"),
                icon: "sun",
                tags: ["زجاج ثقيل قابل للتدوير", "طلاء صديق للبيئة", "مضخات كبس معيارية"],
                accent: "from-emerald-500/20 to-emerald-500/5",
                borderAccent: "hover:border-emerald-400/60",
                iconColor: "text-emerald-400",
              },
              {
                num: "03",
                title: t("val3Title"),
                desc: t("val3Desc"),
                icon: "globe",
                tags: ["حلول التصنيع الشاملة", "من الفكرة للمنتج النهائي", "توريد موثوق B2B"],
                accent: "from-[#C8A76A]/20 to-[#C8A76A]/5",
                borderAccent: "hover:border-[#C8A76A]/60",
                iconColor: "text-[#C8A76A]",
              },
            ].map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative bg-[#161E13]/80 backdrop-blur-xl border border-[#2B3824] rounded-[28px] p-8 flex flex-col justify-between space-y-6 ${val.borderAccent} transition-all duration-500 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1 rtl:text-right overflow-hidden`}
              >
                {/* Decorative Watermark Number */}
                <span className="absolute -top-4 left-6 rtl:left-auto rtl:right-6 font-serif text-8xl font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-[#C8A76A]/10 transition-colors duration-500">
                  {val.num}
                </span>

                <div className="space-y-5 relative z-10">
                  {/* Icon & Number Badge Header */}
                  <div className="flex items-center justify-between">
                    <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${val.accent} border border-white/10 flex items-center justify-center ${val.iconColor} shadow-inner`}>
                      {getIcon(val.icon)}
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#11170F] text-[#E7DFC9]/50 border border-[#2B3824]">
                      {val.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-normal text-[#F4F2E8] group-hover:text-[#C8A76A] transition-colors duration-300">
                    {val.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#E7DFC9]/75 font-light leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                {/* Tags / Badges */}
                <div className="pt-4 border-t border-[#26331F] space-y-2 relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {val.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] bg-[#10160D] text-[#E7DFC9]/80 px-2.5 py-1 rounded-lg border border-[#2D3A26] font-light"
                      >
                        ✦ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Trust & Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="mt-16 bg-[#141B11] border border-[#2A3723] rounded-3xl p-6 md:p-8 shadow-xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-[#26331F]">
              <div className="space-y-1">
                <span className="text-3xl md:text-4xl font-serif font-bold text-[#C8A76A] block">
                  +30%
                </span>
                <span className="text-xs text-[#E7DFC9]/80 font-medium">تركيز الزيوت العطرية</span>
                <p className="text-[10px] text-[#E7DFC9]/50">Extrait de Parfum نقي</p>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <span className="text-3xl md:text-4xl font-serif font-bold text-[#F4F2E8] block">
                  100%
                </span>
                <span className="text-xs text-[#E7DFC9]/80 font-medium">أصالة فرنسية من غراس</span>
                <p className="text-[10px] text-[#E7DFC9]/50">مستخلصات نباتية ومعملية</p>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <span className="text-3xl md:text-4xl font-serif font-bold text-[#C8A76A] block">
                  IFRA
                </span>
                <span className="text-xs text-[#E7DFC9]/80 font-medium">مطابقة المعايير العالمية</span>
                <p className="text-[10px] text-[#E7DFC9]/50">شهادات جودة معتمدة</p>
              </div>

              <div className="space-y-1 pt-4 md:pt-0">
                <span className="text-3xl md:text-4xl font-serif font-bold text-[#F4F2E8] block">
                  B2B
                </span>
                <span className="text-xs text-[#E7DFC9]/80 font-medium">توريد مباشر للمصانع</span>
                <p className="text-[10px] text-[#E7DFC9]/50">حلول شاملة للعلامات الفاخرة</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
