"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";

export default function Newsletter() {
  const { t } = useTranslation(["home", "footer", "common"]);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error">("idle");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterStatus("error");
      return;
    }
    setNewsletterStatus("success");
    setNewsletterEmail("");
    setTimeout(() => setNewsletterStatus("idle"), 4000);
  };

  return (
    <section className="py-16 md:py-18 bg-[#1D2418] text-[#F4F2E8] border-t border-[#384233] relative z-20 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A76A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-bold">
          {t("footer:newsletterTitle")}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#F4F2E8] font-light tracking-wide leading-tight">
          {t("home:newsletter.title")}
        </h2>
        <p className="text-xs md:text-sm text-[#E7DFC9]/80 font-light max-w-lg mx-auto leading-relaxed">
          {t("home:newsletter.subtitle")}
        </p>

        <form onSubmit={handleNewsletterSubmit} className="max-w-2xl mx-auto pt-4 relative">
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <input
              type="email"
              placeholder={t("footer:newsletterPlaceholder")}
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-grow bg-[#2B3325] border border-[#384233] rounded-full px-6 py-3.5 text-xs text-[#F4F2E8] placeholder-[#E7DFC9]/40 focus:outline-none focus:border-[#C8A76A] transition-colors duration-300"
              aria-label="Email Address"
              required
            />
            <Button
              type="submit"
              variant="primary"
              className="px-8 py-3.5 shadow-md flex items-center justify-center"
            >
              {t("home:newsletter.button")}
            </Button>
          </div>

          {/* Newsletter Feedback */}
          {newsletterStatus === "success" && (
            <div className="mt-4 text-xs text-[#C8A76A] flex items-center justify-center space-x-1 rtl:space-x-reverse">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              <span>{t("home:wholesale.form.successMessage")}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
