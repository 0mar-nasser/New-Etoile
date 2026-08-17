"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppInquiryUrl, getContactInquiryUrl } from "../../utils/inquiry";
import ImagePlaceholder from "./ImagePlaceholder";

export interface InquiryProduct {
  id: string;
  name: string;
  category?: string;
  description?: string;
  image?: string;
  selectedSpec?: string;
}

interface ProductInquiryModalProps {
  product: InquiryProduct | null;
  onClose: () => void;
}

export default function ProductInquiryModal({
  product,
  onClose,
}: ProductInquiryModalProps) {
  const { t, i18n } = useTranslation(["common", "contact"]);
  const isArabic = i18n.language?.startsWith("ar");

  const [formName, setFormName] = useState("");
  const [formContact, setFormContact] = useState("");
  const [formQty, setFormQty] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tab, setTab] = useState<"whatsapp" | "form">("whatsapp");

  if (!product) return null;

  const whatsappUrl = getWhatsAppInquiryUrl(
    product.name,
    product.selectedSpec,
    isArabic
  );

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formContact.trim()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative bg-[#F4F2E8] border border-[#E7DFC9] rounded-[28px] max-w-xl w-full p-6 md:p-8 shadow-2xl z-10 text-[#1D2418] max-h-[90vh] overflow-y-auto overscroll-contain"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-[#2B3325]/70 hover:text-[#C8A76A] hover:rotate-90 transition-all p-1.5 rounded-full hover:bg-black/5 cursor-pointer z-20"
            aria-label={t("common:close")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Product Header Summary */}
          <div className="flex items-center gap-4 pb-5 border-b border-[#E7DFC9] rtl:text-right">
            <div className="relative w-16 h-20 md:w-20 md:h-24 rounded-[14px] overflow-hidden border border-[#E7DFC9] bg-[#E7DFC9]/30 shrink-0 shadow-sm">
              {product.image ? (
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              ) : (
                <ImagePlaceholder label={product.name} theme="light" />
              )}
            </div>
            <div className="min-w-0 flex-grow">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C8A76A] font-bold block">
                {product.category || (isArabic ? "كتالوج إيتوال" : "Étoile Catalog")}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-light text-[#1D2418] leading-tight truncate">
                {product.name}
              </h3>
              {product.selectedSpec && (
                <span className="inline-block mt-1 text-[10px] bg-[#2B3325] text-[#F4F2E8] px-2.5 py-0.5 rounded-full font-light tracking-wider">
                  {product.selectedSpec}
                </span>
              )}
              <p className="text-[11px] text-[#2B3325]/60 font-light mt-1 line-clamp-1">
                {product.description}
              </p>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex gap-2 my-5 p-1 bg-[#E7DFC9]/40 rounded-full border border-[#E7DFC9]">
            <button
              onClick={() => setTab("whatsapp")}
              className={`flex-1 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                tab === "whatsapp"
                  ? "bg-[#2B3325] text-[#F4F2E8] shadow-sm"
                  : "text-[#2B3325]/70 hover:text-[#1D2418]"
              }`}
            >
              <svg className="w-4 h-4 fill-current text-green-400" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>{isArabic ? "واتساب مباشر" : "WhatsApp"}</span>
            </button>
            <button
              onClick={() => setTab("form")}
              className={`flex-1 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                tab === "form"
                  ? "bg-[#2B3325] text-[#F4F2E8] shadow-sm"
                  : "text-[#2B3325]/70 hover:text-[#1D2418]"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span>{isArabic ? "طلب استفسار رسمي" : "Inquiry Form"}</span>
            </button>
          </div>

          {/* Tab 1: WhatsApp */}
          {tab === "whatsapp" && (
            <div className="space-y-5 text-center rtl:text-right">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5 text-emerald-950">
                <h4 className="font-serif text-lg font-semibold text-[#1D2418]">
                  {isArabic ? "محادثة فورية مع فريق الاستشارات" : "Direct Chat With Fragrance Concierge"}
                </h4>
                <p className="text-xs text-[#2B3325]/75 mt-1.5 font-light leading-relaxed">
                  {isArabic
                    ? "اضغط على الزر أدناه لفتح محادثة واتساب جاهزة باسم المنتج لمعرفة التوفر، المواصفات، والحد الأدنى للطلب."
                    : "Click below to start an instant WhatsApp conversation with the product details pre-filled for rapid inquiry and availability."}
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20BA59] text-white py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-lg flex items-center justify-center gap-3 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>{isArabic ? "فتح محادثة واتساب" : "Open WhatsApp Chat"}</span>
              </a>

              <div className="pt-2">
                <Link
                  href={getContactInquiryUrl(product.name, product.category)}
                  onClick={onClose}
                  className="text-xs text-[#2B3325]/70 hover:text-[#C8A76A] font-light underline uppercase tracking-wider"
                >
                  {isArabic ? "أو الانتقال لصفحة التواصل الكاملة" : "Or go to full contact page"}
                </Link>
              </div>
            </div>
          )}

          {/* Tab 2: Form */}
          {tab === "form" && (
            <div>
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#C8A76A]/20 border border-[#C8A76A] flex items-center justify-center mx-auto text-[#C8A76A]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-2xl font-light text-[#1D2418]">
                    {isArabic ? "تم استلام استفسارك بنجاح" : "Inquiry Received"}
                  </h4>
                  <p className="text-xs text-[#2B3325]/75 font-light max-w-sm mx-auto">
                    {isArabic
                      ? "شكراً لتواصلك معنا. سيقوم فريقنا بمراجعة استفسارك والتواصل معك خلال 24 ساعة."
                      : "Thank you for reaching out. Our fragrance concierge will contact you shortly with full catalog details."}
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                  >
                    {t("common:close")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitForm} className="space-y-4 rtl:text-right">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1">
                        {isArabic ? "الاسم الكريم *" : "Your Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder={isArabic ? "الاسم بالكامل" : "Full Name"}
                        className="w-full bg-white border border-[#E7DFC9] rounded-xl px-3.5 py-2.5 text-xs text-[#1D2418] focus:outline-none focus:border-[#C8A76A]"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1">
                        {isArabic ? "البريد / الهاتف *" : "Email / Phone *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formContact}
                        onChange={(e) => setFormContact(e.target.value)}
                        placeholder={isArabic ? "example@domain.com أو رقم الجوال" : "Email or Phone"}
                        className="w-full bg-white border border-[#E7DFC9] rounded-xl px-3.5 py-2.5 text-xs text-[#1D2418] focus:outline-none focus:border-[#C8A76A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1">
                      {isArabic ? "الكمية أو الحجم المطلوب (اختياري)" : "Required Quantity / Spec (Optional)"}
                    </label>
                    <input
                      type="text"
                      value={formQty}
                      onChange={(e) => setFormQty(e.target.value)}
                      placeholder={isArabic ? "مثال: 50 قطعة أو عينة تجريبية" : "e.g. 50 units, Sample, or Bulk"}
                      className="w-full bg-white border border-[#E7DFC9] rounded-xl px-3.5 py-2.5 text-xs text-[#1D2418] focus:outline-none focus:border-[#C8A76A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1">
                      {isArabic ? "تفاصيل الاستفسار" : "Message / Inquiries"}
                    </label>
                    <textarea
                      rows={3}
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      placeholder={
                        isArabic
                          ? "اكتب أي تفاصيل إضافية عن متطلباتك أو استفسارك..."
                          : "Write any specific requirements or questions..."
                      }
                      className="w-full bg-white border border-[#E7DFC9] rounded-xl p-3 text-xs text-[#1D2418] focus:outline-none focus:border-[#C8A76A]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2B3325] hover:bg-[#C8A76A] text-[#F4F2E8] hover:text-[#1D2418] py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md cursor-pointer"
                  >
                    {isSubmitting ? t("common:loading") : (isArabic ? "إرسال طلب الاستفسار" : "Send Inquiry Request")}
                  </button>
                </form>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
