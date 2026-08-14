"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import brandData from "../data/brand.json";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const { t, i18n } = useTranslation(["contact", "common"]);
  const isRtl = i18n.language === "ar";

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const sub = params.get("subject");
      if (sub && ["general", "order", "consultation", "bespoke", "press", "returns", "wholesale", "distributor"].includes(sub)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setForm((prev) => ({ ...prev, subject: sub }));
      }
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "A valid email address is required.";
    if (!form.subject) newErrors.subject = "Please select an enquiry type.";
    if (!form.message.trim() || form.message.trim().length < 20)
      newErrors.message = "Please write at least 20 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F4F2E8] min-h-screen text-[#1D2418] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-bold">
            ✦ {t("title")} ✦
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-[#1D2418] font-light">
            {t("title")}
          </h1>
          <p className="text-sm md:text-base text-[#2B3325]/75 font-light leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="h-[1px] w-12 bg-[#C8A76A]/60 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start rtl:text-right">
          {/* Left Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4 bg-[#E7DFC9]/30 border border-[#E7DFC9] rounded-[24px] p-6">
              <h3 className="font-serif text-xl font-light text-[#1D2418]">{t("officeAddress")}</h3>
              <p className="text-xs text-[#2B3325]/70">{t("officeAddressVal")}</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="border border-[#C8A76A]/40 rounded-[28px] p-12 text-center bg-[#E7DFC9]/20 space-y-5">
                <h3 className="font-serif text-2xl font-light">{t("formTitle")}</h3>
                <p className="text-sm text-[#2B3325]/65 font-light">
                  Thank you, {form.firstName}. Our Concierge team will respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/40 border border-[#E7DFC9] rounded-[28px] p-8 space-y-6 shadow-sm">
                <h2 className="font-serif text-2xl font-light">{t("formTitle")}</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1.5">{t("name")} *</label>
                    <input
                      type="text"
                      placeholder={t("namePlaceholder")}
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full bg-[#F4F2E8] border border-[#E7DFC9] rounded-full px-4 py-2.5 text-xs text-[#1D2418] focus:outline-none focus:border-[#C8A76A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1.5">{t("email")} *</label>
                    <input
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#F4F2E8] border border-[#E7DFC9] rounded-full px-4 py-2.5 text-xs text-[#1D2418] focus:outline-none focus:border-[#C8A76A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1.5">{t("subject")}</label>
                  <input
                    type="text"
                    placeholder={t("subjectPlaceholder")}
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-[#F4F2E8] border border-[#E7DFC9] rounded-full px-4 py-2.5 text-xs text-[#1D2418] focus:outline-none focus:border-[#C8A76A]"
                  />
                </div>

                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1.5">{t("message")}</label>
                  <textarea
                    rows={4}
                    placeholder={t("messagePlaceholder")}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#F4F2E8] border border-[#E7DFC9] rounded-[18px] p-4 text-xs text-[#1D2418] focus:outline-none focus:border-[#C8A76A]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2B3325] hover:bg-[#C8A76A] text-[#F4F2E8] hover:text-[#1D2418] py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md cursor-pointer"
                >
                  {isSubmitting ? t("common:loading") : t("submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
