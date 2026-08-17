"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { PRODUCTS } from "../../data/products";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import ProductInquiryModal from "../ui/ProductInquiryModal";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { t, i18n } = useTranslation(["navbar", "common"]);
  const isRtl = i18n.language?.startsWith("ar");
  const wishlistDrawerX = isRtl ? "-100%" : "100%";
  const {
    wishlist,
    toggleWishlist,
  } = useCart();

  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<{ id: string; name: string; category?: string; description?: string; image?: string } | null>(null);

  const isHome = pathname === "/";

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close panels when navigating
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSearchActive(false);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWishlistOpen(false);
  }, [pathname]);

  // Prevent background body scroll when wishlist drawer is open
  useEffect(() => {
    if (wishlistOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [wishlistOpen]);

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const navBgClass = isHome
    ? scrolled
      ? "bg-[#2B3325]/95 backdrop-blur-md py-4 border-b border-[#384233]/40 shadow-lg"
      : "bg-[#2B3325]/95 py-5 border-b border-transparent"
    : "bg-[#2B3325] py-4 border-b border-[#384233]/60 shadow-lg";

  const navLinks = [
    { path: "/", label: t("navbar:home") },
    { path: "/collections", label: t("navbar:collections") },
    { path: "/about", label: t("navbar:about") },
    { path: "/contact", label: t("navbar:contact") },
  ];

  const handleSearchClick = () => {
    if (pathname !== "/collections") {
      router.push("/collections");
    }
    setSearchActive(!searchActive);
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${navBgClass}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6">

          {/* Brand Logo */}
          <Link href="/" className="flex items-center focus:outline-none shrink-0 group">
            <Image
              src="/Logos/title-light.png"
              alt="Étoile Logo"
              width={130}
              height={40}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 md:gap-10 text-xs md:text-base tracking-[0.18em] uppercase font-medium text-[#F4F2E8]">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative py-1 transition-colors duration-300 cursor-pointer ${isActive ? "text-[#C8A76A] font-semibold" : "hover:text-[#C8A76A]"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C8A76A] rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3 md:gap-4 text-xs tracking-[0.15em] uppercase font-light text-[#F4F2E8]">

            {/* Language Switcher */}
            <LanguageSwitcher variant="compact" />

            {/* Search Button */}
            <button
              type="button"
              onClick={handleSearchClick}
              className="w-11 h-11 rounded-full bg-[#1D2418] hover:bg-[#C8A76A] text-[#C8A76A] hover:text-[#1D2418] border-2 border-[#C8A76A]/60 hover:border-[#C8A76A] flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 cursor-pointer group"
              aria-label={t("common:search")}
              title={t("common:search")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.637Z" />
              </svg>
            </button>

            {/* Saved Items / Wishlist Button */}
            <button
              onClick={() => setWishlistOpen(!wishlistOpen)}
              className="relative w-11 h-11 rounded-full bg-[#1D2418] hover:bg-[#C8A76A] text-[#C8A76A] hover:text-[#1D2418] border-2 border-[#C8A76A]/60 hover:border-[#C8A76A] flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 cursor-pointer group"
              aria-label={t("common:wishlist")}
              title={t("common:wishlist")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 rtl:-left-1 rtl:right-auto bg-[#C8A76A] text-[#1D2418] font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1D2418] shadow-lg animate-scale-in">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Contact / Inquire Button */}
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#C8A76A] hover:bg-[#F4F2E8] text-[#1D2418] border-2 border-[#C8A76A] hover:border-[#F4F2E8] transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 cursor-pointer font-bold tracking-wider text-xs uppercase"
            >
              <span>{t("common:contactUs")}</span>
            </Link>

            {/* Saved Items Side Drawer */}
            <AnimatePresence>
              {wishlistOpen && (
                <>
                  {/* Backdrop Overlay */}
                  <motion.div
                    key="wishlist-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setWishlistOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 pointer-events-auto"
                  />

                  {/* Side Drawer Panel */}
                  <motion.div
                    key="wishlist-drawer"
                    initial={{ x: wishlistDrawerX }}
                    animate={{ x: 0 }}
                    exit={{ x: wishlistDrawerX }}
                    transition={{ type: "spring", damping: 25, stiffness: 220 }}
                    className="fixed top-0 right-0 rtl:right-auto rtl:left-0 h-full w-full sm:max-w-md bg-[#F4F2E8] text-[#1D2418] shadow-2xl z-50 flex flex-col pointer-events-auto normal-case tracking-normal"
                  >
                    {/* Header */}
                    <div className="p-6 border-b border-[#E7DFC9] flex items-center justify-between bg-[#2B3325] text-[#F4F2E8]">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="font-serif text-lg tracking-wide uppercase font-light">
                          {t("navbar:wishlistTitle")}
                        </span>
                        <span className="text-[10px] bg-[#C8A76A] text-[#1D2418] font-bold px-2 py-0.5 rounded-full">
                          {wishlistedProducts.length}
                        </span>
                      </div>
                      <button
                        onClick={() => setWishlistOpen(false)}
                        className="hover:text-[#C8A76A] hover:rotate-90 transition-all duration-300 focus:outline-none p-1 cursor-pointer"
                        aria-label={t("common:close")}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Items List */}
                    <div className="flex-grow overflow-y-auto overscroll-contain p-6 space-y-4">
                      {wishlistedProducts.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center space-y-4 text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className="w-12 h-12 text-[#2B3325]/30">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                          </svg>
                          <p className="font-serif text-lg font-light text-[#1D2418]/65">{t("navbar:emptyWishlist")}</p>
                          <Link
                            href="/collections"
                            onClick={() => setWishlistOpen(false)}
                            className="bg-[#2B3325] text-white hover:bg-[#C8A76A] hover:text-[#1D2418] px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-widest transition-all"
                          >
                            {isRtl ? "تصفح الكتالوج" : "Browse Catalog"}
                          </Link>
                        </div>
                      ) : (
                        wishlistedProducts.map((p) => (
                          <div key={p.id} className="flex items-center justify-between gap-3 border-b border-[#E7DFC9]/50 pb-4 last:border-b-0 last:pb-0 group p-2 hover:bg-white/40 rounded-xl transition-all">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="relative w-14 h-16 rounded-[10px] overflow-hidden shrink-0 border border-[#E7DFC9] bg-[#F4F2E8] shadow-sm">
                                {p.image ? (
                                  <Image
                                    src={p.image}
                                    alt={p.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="56px"
                                  />
                                ) : (
                                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 relative select-none">
                                    <span className="font-serif text-[8px] font-semibold text-[#1D2418] tracking-widest opacity-85">Étoile</span>
                                  </div>
                                )}
                              </div>

                              <div className="flex flex-col min-w-0">
                                <Link
                                  href={`/collections/${p.id}`}
                                  onClick={() => setWishlistOpen(false)}
                                  className="font-serif text-sm font-semibold text-[#1D2418] hover:text-[#C8A76A] transition-colors leading-tight truncate max-w-[140px]"
                                >
                                  {p.name}
                                </Link>
                                <span className="text-[10px] text-[#C8A76A] font-semibold uppercase tracking-wider mt-0.5">
                                  {p.family}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                onClick={() => {
                                  setInquiryProduct(p);
                                  setWishlistOpen(false);
                                }}
                                className="bg-[#2B3325] text-white hover:bg-[#C8A76A] hover:text-[#1D2418] px-3.5 py-1.5 rounded-full text-[10px] tracking-wider uppercase font-bold transition-all duration-300 cursor-pointer shadow-sm"
                              >
                                {t("common:inquire")}
                              </button>
                              <button
                                onClick={() => toggleWishlist(p.id)}
                                className="text-[#2B3325]/45 hover:text-red-500 transition-all p-1.5 rounded-full hover:bg-black/5 cursor-pointer"
                                aria-label={t("common:remove")}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                  <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.536l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.006.306l-1.5 2.5a.75.75 0 1 0 1.292.76l1.5-2.5a.75.75 0 0 0-.286-1.066Zm5.34.306a.75.75 0 1 0-1.292-.762l-1.5 2.5a.75.75 0 1 0 1.292.762l1.5-2.5Z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Drawer Footer */}
                    {wishlistedProducts.length > 0 && (
                      <div className="p-6 border-t border-[#E7DFC9] bg-[#E7DFC9]/20">
                        <Link
                          href="/wishlist"
                          onClick={() => setWishlistOpen(false)}
                          className="block w-full bg-[#2B3325] hover:bg-[#C8A76A] text-[#F4F2E8] hover:text-[#1D2418] py-3 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md text-center cursor-pointer"
                        >
                          {isRtl ? "عرض صفحة المفضلة الكاملة" : "View Wishlist Page"}
                        </Link>
                      </div>
                    )}
                  </motion.div>
                </>
              )}
            </AnimatePresence>

          </div>
        </div>
      </nav>

      {/* Inquiry Modal */}
      {inquiryProduct && (
        <ProductInquiryModal
          product={{
            id: inquiryProduct.id,
            name: inquiryProduct.name,
            category: inquiryProduct.category,
            description: inquiryProduct.description,
            image: inquiryProduct.image,
          }}
          onClose={() => setInquiryProduct(null)}
        />
      )}
    </>
  );
}
