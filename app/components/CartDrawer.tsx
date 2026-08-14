"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { t, i18n } = useTranslation(["cart", "common"]);
  const isRtl = i18n.language?.startsWith("ar");
  const cartDrawerX = isRtl ? "-100%" : "100%";
  const {
    cart,
    cartOpen,
    setCartOpen,
    cartItemCount,
    updateQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  // Prevent background body scroll when cart drawer is open
  React.useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  const getInitials = (name: string) => {
    return name
      .replace("L'", "")
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex pointer-events-none">
          {/* Backdrop */}
          <motion.div
            key="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
          />

          {/* Drawer Body */}
          <motion.div
            key="cart-drawer-panel"
            initial={{ x: cartDrawerX }}
            animate={{ x: 0 }}
            exit={{ x: cartDrawerX }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="absolute top-0 right-0 rtl:right-auto rtl:left-0 h-full w-full sm:max-w-md bg-[#F4F2E8] text-[#1D2418] shadow-2xl flex flex-col pointer-events-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#E7DFC9] flex items-center justify-between bg-[#2B3325] text-[#F4F2E8]">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="font-serif text-lg tracking-wide uppercase font-light">
                  {t("cart:title")}
                </span>
                <span className="text-[10px] bg-[#C8A76A] text-[#1D2418] font-bold px-2 py-0.5 rounded-full">
                  {cartItemCount}
                </span>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="hover:text-[#C8A76A] hover:rotate-90 transition-all duration-300 focus:outline-none p-1 cursor-pointer"
                aria-label={t("common:close")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-grow overflow-y-auto overscroll-contain p-6 space-y-5">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="w-12 h-12 text-[#2B3325]/30">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <p className="font-serif text-lg font-light text-[#1D2418]/65">{t("cart:emptyTitle")}</p>
                  <p className="text-xs text-[#2B3325]/60 font-light">{t("cart:emptySub")}</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="luxury-btn bg-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] text-[#F4F2E8] px-6 py-2.5 rounded-full text-xs tracking-widest uppercase font-medium transition-all duration-300 cursor-pointer"
                  >
                    {t("cart:startShopping")}
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-4 rtl:space-x-reverse pb-5 border-b border-[#E7DFC9]/50 hover:bg-white/20 p-3 rounded-[16px] -mx-3 transition-all duration-300 group"
                  >
                    {/* Product Image */}
                    <div className="relative w-16 h-20 rounded-[12px] overflow-hidden shrink-0 border border-[#E7DFC9] bg-[#F4F2E8] shadow-sm">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-108"
                          sizes="64px"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center relative select-none">
                          <span className="font-serif text-xs font-semibold text-[#1D2418] tracking-widest opacity-80">
                            {getInitials(item.name)}
                          </span>
                          <span className="text-[6px] text-[#C8A76A] uppercase font-bold tracking-widest mt-0.5">Étoile</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-grow flex flex-col justify-between py-0.5 min-w-0">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-serif text-xs font-semibold text-[#1D2418] leading-tight truncate-two-lines">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400/90 hover:text-red-500 text-[9px] uppercase font-light tracking-widest cursor-pointer transition-colors duration-300 shrink-0"
                            aria-label={t("common:remove")}
                          >
                            {t("common:remove")}
                          </button>
                        </div>
                        <p className="text-[9px] text-[#2B3325]/50 mt-0.5">{item.volume}</p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-[#E7DFC9] rounded-full px-1.5 py-0.5 bg-white/60 hover:border-[#C8A76A]/40 transition-colors">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-[#2B3325] hover:text-[#C8A76A] px-1.5 text-xs focus:outline-none cursor-pointer transition-colors font-light"
                          >
                            −
                          </button>
                          <span className="text-[10px] font-semibold px-2 text-[#2B3325]">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-[#2B3325] hover:text-[#C8A76A] px-1.5 text-xs focus:outline-none cursor-pointer transition-colors font-light"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-serif text-xs font-semibold text-[#1D2418]">
                          ${(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#E7DFC9] bg-[#E7DFC9]/20 space-y-4">
                <div className="flex justify-between items-center text-xs tracking-wider text-[#2B3325]/70">
                  <span>{t("cart:estimatedShipping")}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-light tracking-wide">{t("cart:subtotal")}</span>
                  <span className="font-serif text-xl font-semibold text-[#1D2418]">${cartTotal.toLocaleString()}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                    href="/cart"
                    onClick={() => setCartOpen(false)}
                    className="border border-[#2B3325] text-[#2B3325] hover:bg-[#2B3325] hover:text-[#F4F2E8] py-3 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-sm text-center hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {t("common:cart")}
                  </Link>
                  <button
                    onClick={() => {
                      alert(t("cart:moqNotice"));
                      setCartOpen(false);
                    }}
                    className="bg-[#2B3325] hover:bg-[#C8A76A] text-[#F4F2E8] hover:text-[#1D2418] py-3 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md text-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {t("cart:checkout")}
                  </button>
                </div>

                <p className="text-[9px] text-[#2B3325]/50 text-center italic mt-2 font-light">
                  {t("cart:moqNotice")}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
