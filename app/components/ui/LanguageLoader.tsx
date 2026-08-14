"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import i18n from "@/src/i18n/config";

export default function LanguageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [targetLang, setTargetLang] = useState<string>("ar");

  useEffect(() => {
    let isFirstMount = true;

    const handleLanguageChanged = (lng: string) => {
      // Skip loader on initial mount
      if (isFirstMount) {
        isFirstMount = false;
        return;
      }

      setTargetLang(lng);
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1400);

      return () => clearTimeout(timer);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    // Turn off first mount flag after initial hydration completes
    const mountTimer = setTimeout(() => {
      isFirstMount = false;
    }, 500);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
      clearTimeout(mountTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="language-loader-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#1D2418] text-[#F4F2E8] pointer-events-auto"
        >
          <div className="relative flex flex-col items-center p-8 text-center">
            {/* Emblem Spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
              className="mb-6"
            >
              <Image
                src="/Logos/Nav-Logo-light.png"
                alt="Étoile emblem"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
                priority
              />
            </motion.div>

            {/* Brand Header */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-serif text-3xl md:text-4xl text-[#E7DFC9] uppercase tracking-[0.25em] font-light"
              >
                Étoile
              </motion.h1>
            </div>

            {/* Status Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[11px] uppercase tracking-[0.3em] text-[#C8A76A] font-medium mb-8"
            >
              {targetLang === "ar" ? "جاري تغيير اللغة..." : "Updating Language..."}
            </motion.p>

            {/* Gold Progress Bar */}
            <div className="w-44 h-[2px] bg-[#E7DFC9]/15 relative overflow-hidden rounded-full">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-full bg-[#C8A76A]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
