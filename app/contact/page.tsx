"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

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

import brandData from "../data/brand.json";

export default function ContactPage() {
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
  const [selectedBoutique, setSelectedBoutique] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const sub = params.get("subject");
      if (sub && ["general", "order", "consultation", "bespoke", "press", "returns", "wholesale", "distributor"].includes(sub)) {
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
    // Simulate async send delay
    await new Promise((r) => setTimeout(r, 1800));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const BOUTIQUES = brandData.boutiques;
  const currentBoutique = BOUTIQUES[selectedBoutique];

  return (
    <div className="bg-[#F4F2E8] min-h-screen text-[#1D2418]">

      {/* Page Header */}
      <div className="bg-[#2B3325] pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-[#F4F2E8] space-y-3">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#C8A76A] font-bold">Industrial B2B Desk</span>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wide">Factory B2B Inquiry & Quotation</h1>
          <p className="text-sm text-[#F4F2E8]/70 font-light leading-relaxed max-w-xl">
            Contact our factory sales team to request empty glass flacon samples, custom mold quotes, sprayer & cap specifications, or bulk concentrated perfume oil supply.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-20">

        {/* Support Details + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: Support Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-light">Maison Concierge</h2>
              <p className="text-xs text-[#2B3325]/60 font-light leading-relaxed">
                Our dedicated team of fragrance experts is available to assist you with orders, scent discovery, and bespoke enquiries.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "Email Concierge",
                  value: "concierge@etoile-parfums.com",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                    </svg>
                  ),
                  label: "International Line",
                  value: "+33 1 42 65 00 00",
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  ),
                  label: "Response Time",
                  value: "Within 24 hours · Mon–Sat",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#E7DFC9]/60 border border-[#E7DFC9] flex items-center justify-center shrink-0 text-[#C8A76A]">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-[#C8A76A] font-semibold mb-0.5">{label}</p>
                    <p className="text-sm text-[#2B3325]/80 font-light">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Subject Links */}
            <div className="bg-[#E7DFC9]/30 border border-[#E7DFC9] rounded-[20px] p-6 space-y-3">
              <h3 className="text-[10px] uppercase tracking-widest text-[#1D2418] font-semibold">B2B Enquiry Topics</h3>
              {["Empty Bottle Wholesale", "Custom Glass Mold Quote", "Caps & Pumps Supply", "Concentrated Oil Compounding", "Turnkey OEM Perfume Line"].map((t) => (
                <button
                  key={t}
                  onClick={() => setForm((p) => ({ ...p, subject: t.toLowerCase().replace(/ /g, "_") }))}
                  className="block w-full text-left text-xs text-[#2B3325]/70 hover:text-[#C8A76A] py-1.5 border-b border-[#E7DFC9]/50 last:border-0 transition-colors font-light cursor-pointer"
                >
                  {t} →
                </button>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="border border-[#C8A76A]/40 rounded-[28px] p-12 text-center bg-[#E7DFC9]/20 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#C8A76A]/15 border border-[#C8A76A]/30 flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-[#C8A76A]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light mb-2">Message Received</h3>
                  <p className="text-sm text-[#2B3325]/65 font-light leading-relaxed max-w-sm mx-auto">
                    Thank you, {form.firstName}. Our Concierge team will respond to your enquiry within 24 hours via {form.email}.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "general", message: "" }); }}
                  className="text-xs uppercase tracking-widest text-[#C8A76A] hover:text-[#1D2418] font-semibold border-b border-[#C8A76A]/40 pb-0.5 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/30 border border-[#E7DFC9] rounded-[28px] p-8 space-y-6 shadow-sm" noValidate>
                <h2 className="font-serif text-xl font-light">Send Us a Message</h2>

                {/* Name Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1.5">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Marguerite"
                      className={`w-full bg-[#F4F2E8] border rounded-xl px-4 py-3 text-sm font-light focus:outline-none focus:ring-2 focus:ring-[#C8A76A]/40 placeholder:text-[#2B3325]/30 transition-colors ${errors.firstName ? "border-red-400/60" : "border-[#E7DFC9] hover:border-[#C8A76A]/40"}`}
                    />
                    {errors.firstName && <p className="text-red-400 text-[9px] mt-1 font-light">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1.5">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Dupont"
                      className={`w-full bg-[#F4F2E8] border rounded-xl px-4 py-3 text-sm font-light focus:outline-none focus:ring-2 focus:ring-[#C8A76A]/40 placeholder:text-[#2B3325]/30 transition-colors ${errors.lastName ? "border-red-400/60" : "border-[#E7DFC9] hover:border-[#C8A76A]/40"}`}
                    />
                    {errors.lastName && <p className="text-red-400 text-[9px] mt-1 font-light">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full bg-[#F4F2E8] border rounded-xl px-4 py-3 text-sm font-light focus:outline-none focus:ring-2 focus:ring-[#C8A76A]/40 placeholder:text-[#2B3325]/30 transition-colors ${errors.email ? "border-red-400/60" : "border-[#E7DFC9] hover:border-[#C8A76A]/40"}`}
                    />
                    {errors.email && <p className="text-red-400 text-[9px] mt-1 font-light">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1.5">Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="w-full bg-[#F4F2E8] border border-[#E7DFC9] hover:border-[#C8A76A]/40 rounded-xl px-4 py-3 text-sm font-light focus:outline-none focus:ring-2 focus:ring-[#C8A76A]/40 placeholder:text-[#2B3325]/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1.5">Enquiry Type *</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full bg-[#F4F2E8] border rounded-xl px-4 py-3 text-sm font-light focus:outline-none focus:ring-2 focus:ring-[#C8A76A]/40 transition-colors appearance-none cursor-pointer ${errors.subject ? "border-red-400/60" : "border-[#E7DFC9] hover:border-[#C8A76A]/40"}`}
                  >
                    <option value="general">General Enquiry</option>
                    <option value="order">Order & Tracking</option>
                    <option value="consultation">Fragrance Consultation</option>
                    <option value="bespoke">Bespoke / Private Label</option>
                    <option value="wholesale">Wholesale & B2B Orders</option>
                    <option value="distributor">Distribution Partnerships</option>
                    <option value="press">Press & Partnerships</option>
                    <option value="returns">Returns & Exchanges</option>
                  </select>
                  {errors.subject && <p className="text-red-400 text-[9px] mt-1 font-light">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold mb-1.5">Your Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we may assist you..."
                    rows={5}
                    className={`w-full bg-[#F4F2E8] border rounded-xl px-4 py-3 text-sm font-light focus:outline-none focus:ring-2 focus:ring-[#C8A76A]/40 placeholder:text-[#2B3325]/30 resize-none transition-colors ${errors.message ? "border-red-400/60" : "border-[#E7DFC9] hover:border-[#C8A76A]/40"}`}
                  />
                  <div className="flex justify-between items-start mt-1">
                    {errors.message ? (
                      <p className="text-red-400 text-[9px] font-light">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <span className={`text-[9px] ${form.message.length >= 20 ? "text-[#C8A76A]" : "text-[#2B3325]/40"}`}>
                      {form.message.length} chars
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md focus:outline-none ${
                    isSubmitting
                      ? "bg-[#384233] text-[#C8A76A]/70 cursor-not-allowed"
                      : "bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] cursor-pointer"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Boutique Locations */}
        <div className="border-t border-[#E7DFC9] pt-20 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8A76A] font-bold">Visit In Person</span>
            <h2 className="font-serif text-3xl font-light">Our Global Boutiques</h2>
          </div>

          {/* Boutique Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {BOUTIQUES.map((b, i) => (
              <button
                key={b.city}
                onClick={() => setSelectedBoutique(i)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold border transition-all duration-200 cursor-pointer ${
                  selectedBoutique === i
                    ? "bg-[#2B3325] text-[#F4F2E8] border-[#C8A76A]"
                    : "bg-transparent text-[#2B3325] border-[#E7DFC9] hover:border-[#C8A76A]/40"
                }`}
              >
                <span>{b.flag}</span>
                <span>{b.city}</span>
                {b.flagship && <span className="text-[#C8A76A] ml-1">★</span>}
              </button>
            ))}
          </div>

          {/* Selected Boutique Details */}
          <div className="max-w-2xl mx-auto bg-white/40 border border-[#E7DFC9] rounded-[24px] p-8 shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-2xl">{currentBoutique.flag}</span>
                  <h3 className="font-serif text-2xl font-light">{currentBoutique.city}</h3>
                  {currentBoutique.flagship && (
                    <span className="text-[9px] uppercase tracking-widest bg-[#C8A76A]/15 border border-[#C8A76A]/30 text-[#C8A76A] px-2.5 py-0.5 rounded-full font-semibold">Flagship</span>
                  )}
                </div>
                <p className="text-[10px] text-[#2B3325]/50 uppercase tracking-wider">{currentBoutique.country}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: "📍", label: "Address", value: currentBoutique.address },
                { icon: "🕐", label: "Opening Hours", value: currentBoutique.hours },
                { icon: "📞", label: "Direct Line", value: currentBoutique.phone },
              ].map(({ icon, label, value }) => (
                <div key={label} className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-[#C8A76A] font-semibold">{icon} {label}</span>
                  <p className="text-xs text-[#2B3325]/75 font-light leading-relaxed">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#E7DFC9]/60 flex items-center justify-between">
              <p className="text-xs text-[#2B3325]/50 font-light italic">Bespoke scent appointments available</p>
              <Link
                href="/contact"
                className="text-[9px] uppercase tracking-widest text-[#C8A76A] hover:text-[#1D2418] font-semibold border-b border-[#C8A76A]/30 pb-0.5 transition-colors"
              >
                Book a Visit →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
