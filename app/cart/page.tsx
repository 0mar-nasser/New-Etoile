"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";

const PROMO_CODES: Record<string, number> = {
  ETOILE10: 10,
  WELCOME15: 15,
  LUXE20: 20,
};

export default function CartPage() {
  const { t } = useTranslation(["cart", "common"]);
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");
  const [discount, setDiscount] = useState(0);
  const [checkoutState, setCheckoutState] = useState<"idle" | "processing" | "done">("idle");

  const shippingThreshold = 150;
  const shipping = cartTotal >= shippingThreshold ? 0 : 25;
  const discountAmount = Math.round((cartTotal * discount) / 100);
  const total = cartTotal - discountAmount + shipping;

  const handlePromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setDiscount(PROMO_CODES[code]);
      setPromoCode(code);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code.");
      setDiscount(0);
      setPromoCode("");
    }
  };

  const handleCheckout = async () => {
    setCheckoutState("processing");
    await new Promise((r) => setTimeout(r, 2200));
    setCheckoutState("done");
  };

  if (checkoutState === "done") {
    return (
      <div className="bg-[#F4F2E8] min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-24 space-y-8 animate-in fade-in duration-700">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-[#C8A76A]/10 border border-[#C8A76A]/30 flex items-center justify-center mx-auto animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-[#C8A76A]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C8A76A] animate-ping" />
        </div>
        <div className="space-y-3 max-w-lg">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A76A] font-bold block animate-pulse">Order Confirmed</span>
          <h1 className="font-serif text-4xl text-[#1D2418]">Thank You for Your Order</h1>
          <p className="text-xs text-[#2B3325]/60 leading-relaxed font-light">Your order has been logged in our system. Our team is preparing your selection.</p>
        </div>
        <Link
          href="/"
          className="bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-8 py-3.5 rounded-full text-xs tracking-widest uppercase font-bold transition-all shadow-md"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F2E8] min-h-screen text-[#1D2418] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Page Title */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-bold">
            ✦ {t("cart:title")} ✦
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1D2418] font-light">
            {t("cart:title")}
          </h1>
          <div className="h-[1px] w-12 bg-[#C8A76A]/60 mx-auto" />
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 space-y-6 max-w-md mx-auto">
            <p className="font-serif text-2xl font-light text-[#1D2418]">{t("cart:emptyTitle")}</p>
            <p className="text-xs text-[#2B3325]/60 font-light">{t("cart:emptySub")}</p>
            <Link
              href="/collections"
              className="inline-block bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-md"
            >
              {t("cart:startShopping")}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start rtl:text-right">
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/60 border border-[#E7DFC9] rounded-[24px] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm"
                >
                  <div className="relative w-24 h-28 rounded-[18px] overflow-hidden shrink-0 border border-[#E7DFC9] bg-[#F4F2E8]">
                    {item.image ? (
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    ) : (
                      <ImagePlaceholder label={item.name} theme="light" />
                    )}
                  </div>
                  <div className="flex-grow space-y-2 text-center sm:text-left rtl:sm:text-right w-full">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-lg font-light text-[#1D2418]">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 text-xs font-light tracking-wider uppercase"
                      >
                        {t("common:remove")}
                      </button>
                    </div>
                    <p className="text-xs text-[#C8A76A] font-semibold">${item.price}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#E7DFC9] rounded-full px-3 py-1 bg-white">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-2 text-sm">-</button>
                        <span className="px-3 text-xs font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-2 text-sm">+</button>
                      </div>
                      <span className="font-serif text-base font-bold">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-[#2B3325] text-[#F4F2E8] rounded-[28px] p-8 space-y-6 border border-[#384233]">
              <h3 className="font-serif text-2xl font-light text-[#C8A76A] border-b border-[#384233] pb-4">
                {t("cart:subtotal")}
              </h3>
              <div className="space-y-3 text-xs font-light text-[#E7DFC9]/80">
                <div className="flex justify-between">
                  <span>{t("cart:subtotal")}</span>
                  <span className="font-serif text-sm font-semibold text-[#F4F2E8]">${cartTotal}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-[#384233] text-sm text-[#F4F2E8] font-bold">
                  <span>{t("common:total")}</span>
                  <span className="font-serif text-xl text-[#C8A76A]">${total}</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                disabled={checkoutState === "processing"}
                className="w-full bg-[#C8A76A] hover:bg-[#E7DFC9] text-[#1D2418] py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer shadow-lg"
              >
                {checkoutState === "processing" ? t("common:loading") : t("cart:checkout")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
