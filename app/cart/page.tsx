"use client";

import React, { useState } from "react";
import Link from "next/link";
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
      <div className="bg-[#F4F2E8] min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-24 space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#C8A76A]/10 border border-[#C8A76A]/30 flex items-center justify-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-[#C8A76A]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-[#C8A76A] font-bold">Order Confirmed</span>
          <h1 className="font-serif text-3xl md:text-4xl font-light text-[#1D2418]">Merci. Your Order is On Its Way.</h1>
          <p className="text-sm text-[#2B3325]/60 font-light leading-relaxed max-w-md mx-auto">
            Your fragrances will be carefully hand-wrapped in Étoile signature packaging and dispatched within 24 hours. A confirmation will be sent to your email.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/collections" className="bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-8 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-md">
            Continue Shopping
          </Link>
          <Link href="/" className="border border-[#E7DFC9] text-[#2B3325] hover:border-[#C8A76A] px-8 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-light transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F4F2E8] min-h-screen text-[#1D2418] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">

        {/* Page Header */}
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8A76A] font-bold">Your Selection</span>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide">Shopping Bag</h1>
          <p className="text-xs text-[#2B3325]/55 font-light">
            {cart.length === 0 ? "Your bag is currently empty." : `${cart.reduce((s, i) => s + i.quantity, 0)} item${cart.reduce((s, i) => s + i.quantity, 0) > 1 ? "s" : ""} in your bag`}
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Bag State */
          <div className="py-24 text-center space-y-6 max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#E7DFC9]/50 border border-[#E7DFC9] flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-9 h-9 text-[#C8A76A]/70">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-light mb-2">Your Bag is Empty</h2>
              <p className="text-sm text-[#2B3325]/55 font-light leading-relaxed">
                Discover our curated fragrance collections and begin your Étoile journey.
              </p>
            </div>
            <Link
              href="/collections"
              className="inline-block bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-8 py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-md"
            >
              Browse Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {/* Free shipping progress bar */}
              {cartTotal < shippingThreshold && (
                <div className="bg-[#E7DFC9]/40 border border-[#E7DFC9] rounded-[16px] px-5 py-4 space-y-2">
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-widest font-semibold">
                    <span className="text-[#2B3325]">Free Shipping Progress</span>
                    <span className="text-[#C8A76A]">${shippingThreshold - cartTotal} away</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#E7DFC9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C8A76A] rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((cartTotal / shippingThreshold) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-[9px] text-[#2B3325]/55 font-light">Add ${shippingThreshold - cartTotal} more to unlock complimentary worldwide shipping.</p>
                </div>
              )}

              {cartTotal >= shippingThreshold && (
                <div className="flex items-center space-x-2 bg-[#384233]/10 border border-[#384233]/20 rounded-[14px] px-5 py-3">
                  <span className="text-[#C8A76A]">✓</span>
                  <span className="text-xs text-[#2B3325]/70 font-light">You have unlocked <strong className="font-semibold text-[#C8A76A]">complimentary shipping</strong> on this order.</span>
                </div>
              )}

              {/* Cart Item Cards */}
              {cart.map((item) => {
                const product = PRODUCTS.find((p) => p.id === item.productId);
                return (
                  <div
                    key={item.id}
                    className="bg-white/30 border border-[#E7DFC9] rounded-[22px] p-5 flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Product Image */}
                    <div className="relative w-24 h-28 rounded-[14px] overflow-hidden shrink-0">
                      <ImagePlaceholder label={item.name} aspect="h-full" theme="light" />
                    </div>

                    {/* Item Info */}
                    <div className="flex-1 space-y-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          {product && (
                            <span className="text-[9px] uppercase tracking-wider text-[#C8A76A] font-semibold">{product.family}</span>
                          )}
                          <h3 className="font-serif text-base font-light text-[#1D2418] leading-tight">{item.name}</h3>
                          <p className="text-[10px] text-[#2B3325]/50 font-light mt-0.5">{item.volume} · Eau de Parfum</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          aria-label="Remove item"
                          className="text-[#2B3325]/35 hover:text-red-400 transition-colors focus:outline-none shrink-0 p-1 cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4.5 h-4.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-[#E7DFC9] rounded-full overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center text-[#2B3325] hover:bg-[#E7DFC9]/50 transition-colors font-light text-sm cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-xs font-semibold text-[#1D2418]">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center text-[#2B3325] hover:bg-[#E7DFC9]/50 transition-colors font-light text-sm cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        {/* Line Total */}
                        <span className="font-serif text-base font-semibold text-[#1D2418]">
                          ${(item.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Continue Shopping */}
              <Link href="/collections" className="inline-flex items-center space-x-2 text-xs text-[#2B3325]/60 hover:text-[#C8A76A] font-light transition-colors pt-2">
                <span>←</span>
                <span>Continue Shopping</span>
              </Link>
            </div>

            {/* Order Summary */}
            <div className="space-y-5 sticky top-28">
              <div className="bg-white/40 border border-[#E7DFC9] rounded-[24px] p-7 space-y-5 shadow-sm">
                <h2 className="font-serif text-xl font-light border-b border-[#E7DFC9] pb-4">Order Summary</h2>

                {/* Promo Code */}
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-[#1D2418] font-semibold">Promotional Code</label>
                  {promoCode ? (
                    <div className="flex items-center justify-between bg-[#C8A76A]/10 border border-[#C8A76A]/30 rounded-xl px-4 py-2.5">
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
                        className="flex-1 bg-[#F4F2E8] border border-[#E7DFC9] hover:border-[#C8A76A]/40 focus:border-[#C8A76A]/60 rounded-xl px-4 py-2.5 text-sm font-light focus:outline-none placeholder:text-[#2B3325]/25 transition-colors"
                        onKeyDown={(e) => { if (e.key === "Enter") handlePromo(); }}
                      />
                      <button
                        onClick={handlePromo}
                        className="bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                  {promoError && <p className="text-red-400 text-[9px] font-light">{promoError}</p>}
                  <p className="text-[9px] text-[#2B3325]/40 font-light">Try: ETOILE10 · WELCOME15 · LUXE20</p>
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-2 py-2 border-t border-[#E7DFC9]">
                  <div className="flex justify-between text-sm font-light">
                    <span className="text-[#2B3325]/70">Subtotal</span>
                    <span>${cartTotal}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm font-light text-[#C8A76A]">
                      <span>Promo ({discount}%)</span>
                      <span>−${discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm font-light">
                    <span className="text-[#2B3325]/70">Shipping</span>
                    <span>{shipping === 0 ? <span className="text-[#C8A76A] font-medium">Free</span> : `$${shipping}`}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-[#E7DFC9] pt-4 flex justify-between items-baseline">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#1D2418]">Total (USD)</span>
                  <span className="font-serif text-2xl font-light">${total}</span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={checkoutState === "processing"}
                  className={`w-full py-4 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md focus:outline-none ${
                    checkoutState === "processing"
                      ? "bg-[#384233] text-[#C8A76A]/70 cursor-not-allowed"
                      : "bg-[#C8A76A] hover:bg-[#b09156] text-[#1D2418] cursor-pointer"
                  }`}
                >
                  {checkoutState === "processing" ? "Processing..." : "Proceed to Checkout"}
                </button>

                {/* Trust signals */}
                <div className="flex items-center justify-center gap-4 pt-1 text-[8px] uppercase tracking-widest text-[#2B3325]/40 font-light flex-wrap">
                  <span>🔒 Secure Payment</span>
                  <span>·</span>
                  <span>🚚 Free Returns</span>
                  <span>·</span>
                  <span>🎁 Gift Wrapping</span>
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-[#E7DFC9]/30 border border-[#E7DFC9] rounded-[20px] px-6 py-5 flex items-center space-x-4">
                <div className="w-9 h-9 rounded-full bg-[#2B3325]/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4.5 h-4.5 text-[#2B3325]/70">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#1D2418] uppercase tracking-wider">Need Assistance?</p>
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
          <div className="border-t border-[#E7DFC9] pt-16 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C8A76A] font-bold">Complete Your Collection</span>
                <h2 className="font-serif text-2xl font-light mt-1">You May Also Love</h2>
              </div>
              <Link href="/collections" className="text-xs text-[#2B3325] hover:text-[#C8A76A] border-b border-[#2B3325]/20 pb-0.5 uppercase tracking-wider font-light transition-colors">
                See All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PRODUCTS.filter((p) => !cart.some((c) => c.productId === p.id)).slice(0, 3).map((product) => (
                <Link
                  href={`/collections/${product.id}`}
                  key={product.id}
                  className="bg-white/30 border border-[#E7DFC9] rounded-[20px] p-5 flex items-center space-x-4 hover:border-[#C8A76A]/40 hover:shadow-md transition-all group"
                >
                  <div className="relative w-16 h-20 rounded-[12px] overflow-hidden shrink-0">
                    <ImagePlaceholder label={product.name} aspect="h-full" theme="light" />
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
