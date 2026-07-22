"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";

const PROMO_CODES: Record<string, number> = {
  ETOILE10: 10,
  WELCOME15: 15,
  LUXE20: 20,
};

export default function CartPage() {
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
      setPromoError("This promotional code is invalid or has expired.");
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
          <h1 className="font-serif text-3xl md:text-5xl font-light text-[#1D2418] tracking-wide leading-tight">
            Merci. Your Order is On Its Way.
          </h1>
          <p className="text-xs md:text-sm text-[#2B3325]/70 font-light leading-relaxed max-w-md mx-auto">
            Your fragrances will be carefully hand-wrapped in Étoile signature packaging and dispatched within 24 hours. A confirmation will be sent to your email.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link href="/collections" className="bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-10 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-lg hover:scale-105 active:scale-95">
            Continue Shopping
          </Link>
          <Link href="/" className="border border-[#E7DFC9] text-[#2B3325] hover:border-[#C8A76A] px-10 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-light transition-all duration-300 hover:scale-105 active:scale-95">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F2E8] min-h-screen text-[#1D2418] pt-28 pb-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

        {/* Page Header */}
        <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8A76A] font-bold block">Your Selection</span>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide">Shopping Bag</h1>
          <p className="text-xs text-[#2B3325]/60 font-light">
            {cart.length === 0 ? "Your bag is currently empty." : `${cart.reduce((s, i) => s + i.quantity, 0)} item${cart.reduce((s, i) => s + i.quantity, 0) > 1 ? "s" : ""} in your bag`}
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Bag State */
          <div className="py-24 text-center space-y-8 max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-24 h-24 rounded-full bg-[#E7DFC9]/50 border border-[#E7DFC9] flex items-center justify-center mx-auto shadow-inner transition-transform duration-500 hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-10 h-10 text-[#C8A76A]/80">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-2xl md:text-3xl font-light">Your Bag is Empty</h2>
              <p className="text-xs md:text-sm text-[#2B3325]/60 font-light leading-relaxed">
                Discover our curated fragrance collections and begin your Étoile journey.
              </p>
            </div>
            <Link
              href="/collections"
              className="inline-block bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-10 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
            >
              Browse Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Free shipping progress bar */}
              {cartTotal < shippingThreshold && (
                <div className="bg-[#E7DFC9]/35 border border-[#E7DFC9]/80 rounded-[20px] px-6 py-5 space-y-3 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.15em] font-semibold">
                    <span className="text-[#2B3325]">Free Shipping Progress</span>
                    <span className="text-[#C8A76A]">${shippingThreshold - cartTotal} away</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#E7DFC9]/60 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C8A76A] rounded-full transition-all duration-750 ease-out"
                      style={{ width: `${Math.min((cartTotal / shippingThreshold) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-[9px] text-[#2B3325]/60 font-light">Add ${shippingThreshold - cartTotal} more to unlock complimentary worldwide shipping.</p>
                </div>
              )}

              {cartTotal >= shippingThreshold && (
                <div className="flex items-center space-x-3 bg-[#384233]/10 border border-[#384233]/20 rounded-[18px] px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-[#C8A76A] text-sm">✦</span>
                  <span className="text-xs text-[#2B3325]/75 font-light">You have unlocked <strong className="font-semibold text-[#C8A76A]">complimentary worldwide shipping</strong> on this order.</span>
                </div>
              )}

              {/* Cart Item Cards */}
              <div className="space-y-4">
                {cart.map((item, index) => {
                  const product = PRODUCTS.find((p) => p.id === item.productId);
                  return (
                    <div
                      key={item.id}
                      className="bg-white/40 hover:bg-white/65 backdrop-blur-md border border-[#E7DFC9]/80 rounded-[24px] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm hover:shadow-xl hover:border-[#C8A76A]/30 transition-all duration-500 transform hover:-translate-y-0.5"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Product Image */}
                      <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-[18px] overflow-hidden shrink-0 border border-[#E7DFC9] bg-[#F4F2E8] shadow-inner group">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-110"
                            sizes="112px"
                            priority={index < 2}
                          />
                        ) : (
                          <ImagePlaceholder label={item.name} aspect="h-full" theme="light" />
                        )}
                      </div>

                      {/* Item Info */}
                      <div className="flex-1 w-full space-y-2 flex flex-col justify-between self-stretch text-center sm:text-left">
                        <div className="space-y-1">
                          <div className="flex items-start justify-between gap-4">
                            <div className="w-full sm:w-auto">
                              {product && (
                                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C8A76A] font-semibold">{product.family}</span>
                              )}
                              <h3 className="font-serif text-lg md:text-xl font-light text-[#1D2418] leading-snug mt-0.5">{item.name}</h3>
                              <p className="text-[10px] text-[#2B3325]/65 font-light mt-1">{item.volume} · Eau de Parfum</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              aria-label="Remove item"
                              className="hidden sm:block text-[#2B3325]/45 hover:text-[#C8A76A] hover:rotate-90 transition-all duration-300 focus:outline-none shrink-0 p-1.5 rounded-full hover:bg-black/5 cursor-pointer"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#E7DFC9]/40 mt-2">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-[#E7DFC9] bg-[#F4F2E8]/40 rounded-full shadow-sm hover:border-[#C8A76A]/40 transition-colors duration-300">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-9 h-9 flex items-center justify-center text-[#2B3325] hover:bg-[#E7DFC9]/40 hover:text-[#C8A76A] active:scale-90 transition-all font-light text-base cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="w-8 text-center text-xs font-semibold text-[#1D2418]">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-9 h-9 flex items-center justify-center text-[#2B3325] hover:bg-[#E7DFC9]/40 hover:text-[#C8A76A] active:scale-90 transition-all font-light text-base cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <div className="flex items-center gap-4">
                            {/* Mobile Delete Button */}
                            <button
                              onClick={() => removeFromCart(item.id)}
                              aria-label="Remove item"
                              className="sm:hidden text-red-400/80 hover:text-red-500 active:scale-95 transition-all text-xs font-medium border border-red-200/50 rounded-full px-4 py-1.5 cursor-pointer"
                            >
                              Remove
                            </button>
                            {/* Line Total */}
                            <span className="font-serif text-lg md:text-xl font-medium text-[#1D2418]">
                              ${(item.price * item.quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Continue Shopping */}
              <Link href="/collections" className="inline-flex items-center space-x-2 text-xs text-[#2B3325]/60 hover:text-[#C8A76A] font-light transition-all duration-300 pt-2 hover:translate-x-[-4px]">
                <span>←</span>
                <span>Continue Shopping</span>
              </Link>
            </div>

            {/* Order Summary */}
            <div className="space-y-6 sticky top-28 animate-in fade-in slide-in-from-right-4 duration-700">
              <div className="bg-white/40 backdrop-blur-md border border-[#E7DFC9] rounded-[24px] p-8 space-y-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <h2 className="font-serif text-2xl font-light border-b border-[#E7DFC9] pb-4">Order Summary</h2>

                {/* Promo Code */}
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-[#1D2418] font-bold block">Promotional Code</label>
                  {promoCode ? (
                    <div className="flex items-center justify-between bg-[#C8A76A]/10 border border-[#C8A76A]/30 rounded-xl px-4 py-2.5 animate-in zoom-in duration-300">
                      <div>
                        <span className="text-xs font-semibold text-[#C8A76A]">{promoCode}</span>
                        <span className="text-[10px] text-[#2B3325]/60 ml-2">(-{discount}%)</span>
                      </div>
                      <button
                        onClick={() => { setPromoCode(""); setDiscount(0); setPromoInput(""); }}
                        className="text-[#2B3325]/40 hover:text-red-400 text-xs transition-colors cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoInput}
                        onChange={(e) => { setPromoInput(e.target.value.toUpperCase()); setPromoError(""); }}
                        placeholder="ETOILE10"
                        className="flex-1 bg-[#F4F2E8] border border-[#E7DFC9] hover:border-[#C8A76A]/40 focus:border-[#C8A76A]/60 rounded-xl px-4 py-2.5 text-sm font-light focus:outline-none placeholder:text-[#2B3325]/30 transition-all duration-300"
                        onKeyDown={(e) => { if (e.key === "Enter") handlePromo(); }}
                      />
                      <button
                        onClick={handlePromo}
                        className="bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-103 active:scale-97 cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                  {promoError && <p className="text-red-400/80 text-[9px] font-light animate-shake">{promoError}</p>}
                  <p className="text-[9px] text-[#2B3325]/45 font-light">Try: ETOILE10 · WELCOME15 · LUXE20</p>
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-2.5 py-3 border-t border-[#E7DFC9]">
                  <div className="flex justify-between text-sm font-light">
                    <span className="text-[#2B3325]/75">Subtotal</span>
                    <span className="font-serif">${cartTotal.toLocaleString()}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm font-light text-[#C8A76A] animate-in slide-in-from-left-2 duration-300">
                      <span>Promo ({discount}%)</span>
                      <span className="font-serif">−${discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-light">
                    <span className="text-[#2B3325]/75">Shipping</span>
                    <span className="font-serif">{shipping === 0 ? <span className="text-[#C8A76A] font-semibold uppercase tracking-wider text-[10px]">Free</span> : `$${shipping}`}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-[#E7DFC9] pt-5 flex justify-between items-baseline">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1D2418]">Total (USD)</span>
                  <span className="font-serif text-3xl font-light text-[#C8A76A]">${total.toLocaleString()}</span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={checkoutState === "processing"}
                  className={`w-full py-4.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-500 shadow-md hover:shadow-xl focus:outline-none relative overflow-hidden group cursor-pointer ${
                    checkoutState === "processing"
                      ? "bg-[#384233] text-[#C8A76A]/70 cursor-not-allowed"
                      : "bg-[#2B3325] hover:bg-[#C8A76A] text-[#F4F2E8] hover:text-[#1D2418] hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  {checkoutState === "processing" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-[#C8A76A]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Preparing Order...
                    </span>
                  ) : (
                    <span>Proceed to Checkout</span>
                  )}
                </button>

                {/* Trust signals */}
                <div className="flex items-center justify-center gap-4 pt-2 text-[8px] uppercase tracking-widest text-[#2B3325]/40 font-light flex-wrap">
                  <span>🔒 Secure Payment</span>
                  <span>·</span>
                  <span>🚚 Free Returns</span>
                  <span>·</span>
                  <span>🎁 Gift Wrapping</span>
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-[#E7DFC9]/30 border border-[#E7DFC9] rounded-[22px] px-6 py-5 flex items-center space-x-4 hover:border-[#C8A76A]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-10 h-10 rounded-full bg-[#2B3325]/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#2B3325]/75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1D2418] uppercase tracking-wider">Need Assistance?</p>
                  <Link href="/contact" className="text-[9px] text-[#C8A76A] hover:text-[#1D2418] font-light underline underline-offset-2 transition-colors">
                    Contact our Concierge →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* You May Also Like – featured products when bag is not empty */}
        {cart.length > 0 && (
          <div className="border-t border-[#E7DFC9] pt-16 space-y-8 animate-in fade-in duration-1000">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C8A76A] font-bold">Complete Your Collection</span>
                <h2 className="font-serif text-2xl md:text-3xl font-light mt-1">You May Also Love</h2>
              </div>
              <Link href="/collections" className="text-xs text-[#2B3325] hover:text-[#C8A76A] border-b border-[#2B3325]/20 pb-0.5 uppercase tracking-widest font-light transition-colors">
                See All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRODUCTS.filter((p) => !cart.some((c) => c.productId === p.id)).slice(0, 3).map((product) => (
                <Link
                  href={`/collections/${product.id}`}
                  key={product.id}
                  className="bg-white/40 border border-[#E7DFC9] rounded-[22px] p-5 flex items-center space-x-4 hover:border-[#C8A76A]/40 hover:bg-white/70 hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1"
                >
                  <div className="relative w-16 h-20 rounded-[12px] overflow-hidden shrink-0 border border-[#E7DFC9] bg-[#F4F2E8]">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-108"
                        sizes="64px"
                      />
                    ) : (
                      <ImagePlaceholder label={product.name} aspect="h-full" theme="light" />
                    )}
                  </div>
                  <div className="min-w-0 space-y-0.5">
                    <span className="text-[9px] uppercase tracking-wider text-[#C8A76A] font-semibold">{product.family}</span>
                    <h3 className="font-serif text-sm font-light text-[#1D2418] group-hover:text-[#C8A76A] transition-colors leading-tight">{product.name}</h3>
                    <p className="text-[10px] text-[#2B3325]/55 font-light">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
