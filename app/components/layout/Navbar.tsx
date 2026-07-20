"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../../context/CartContext";
import { PRODUCTS } from "../../data/products";
import navigationData from "../../data/navigation.json";

export default function Navbar() {
  const pathname = usePathname();
  const { 
    cartItemCount, 
    toggleCartOpen, 
    searchQuery, 
    setSearchQuery, 
    wishlist, 
    toggleWishlist,
    addToCart
  } = useCart();

  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

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

  // Close search/wishlist panels when navigating to a new page
  useEffect(() => {
    setSearchActive(false); // eslint-disable-line react-hooks/set-state-in-effect
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWishlistOpen(false);
  }, [pathname]);

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  // Determine navbar background color & padding
  const navBgClass = isHome
    ? scrolled
      ? "bg-[#2B3325]/95 backdrop-blur-md py-4 border-b border-[#384233]/40 shadow-lg"
      : "bg-transparent py-6 border-b border-transparent"
    : "bg-[#2B3325] py-4 border-b border-[#384233]/60 shadow-lg";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Center Logo */}
        <Link href="/" className="flex flex-col items-center focus:outline-none">
          <Image 
            src="/Logos/title-light.png" 
            alt="Etoile logo" 
            width={120} 
            height={35} 
            className="object-contain"
            priority
          />
        </Link>
        {/* Left Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-light text-[#F4F2E8]">
          {navigationData.navbarLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:text-[#C8A76A] transition-colors duration-300 ${
                pathname === link.path ? "text-[#C8A76A]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center">
          <Link href="/collections" className="text-[#F4F2E8] hover:text-[#C8A76A] mr-4 text-xs tracking-widest uppercase font-light">
            Shop
          </Link>
        </div>



        {/* Right Nav Options */}
        <div className="flex items-center space-x-4 md:space-x-6 text-xs tracking-[0.2em] uppercase font-light text-[#F4F2E8]">
          
          {/* Search Icon & Box */}
          <div className="relative flex items-center">
            {searchActive && (
              <input
                type="text"
                placeholder="Search scent..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#1D2418] border border-[#384233] rounded-full px-4 py-1.5 text-[10px] text-[#F4F2E8] focus:outline-none focus:border-[#C8A76A] mr-2 w-32 md:w-44 transition-all duration-300 animate-fade-in"
                autoFocus
              />
            )}
            <button
              onClick={() => {
                setSearchActive(!searchActive);
                if (searchActive) setSearchQuery("");
              }}
              className="hover:text-[#C8A76A] transition-colors focus:outline-none p-1"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.637Z" />
              </svg>
            </button>
          </div>

          {/* Wishlist Dropdown */}
          <div className="relative">
            <button
              onClick={() => setWishlistOpen(!wishlistOpen)}
              className="relative hover:text-[#C8A76A] transition-colors focus:outline-none p-1 flex items-center"
              aria-label="Wishlist"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C8A76A] text-[#1D2418] font-bold text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {wishlistOpen && (
              <div className="absolute right-0 mt-3 w-64 bg-[#F4F2E8] border border-[#E7DFC9] rounded-[16px] shadow-2xl p-4 z-50 text-[#1D2418] normal-case tracking-normal">
                <div className="flex items-center justify-between border-b border-[#E7DFC9] pb-2 mb-2">
                  <span className="font-serif text-xs font-semibold tracking-wider uppercase text-[#2B3325]">Wishlist</span>
                  <button onClick={() => setWishlistOpen(false)} className="text-[10px] text-[#C8A76A] hover:underline uppercase tracking-wider font-light">Close</button>
                </div>

                {wishlistedProducts.length === 0 ? (
                  <p className="text-[11px] text-[#2B3325]/60 text-center py-4 font-light">Your wishlist is empty.</p>
                ) : (
                  <div className="space-y-2.5 max-h-60 overflow-y-auto">
                    {wishlistedProducts.map((p) => (
                      <div key={p.id} className="flex items-center justify-between gap-2 border-b border-[#E7DFC9]/50 pb-2 last:border-b-0 last:pb-0">
                        <div className="flex flex-col">
                          <Link href={`/collections/${p.id}`} className="font-serif text-xs font-medium text-[#1D2418] hover:text-[#C8A76A]">
                            {p.name}
                          </Link>
                          <span className="text-[9px] text-[#C8A76A] font-semibold">${p.price}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <button
                            onClick={() => addToCart(p, "100ml")}
                            className="bg-[#2B3325] text-white hover:bg-[#C8A76A] hover:text-[#1D2418] px-2 py-1 rounded-full text-[8px] tracking-wider uppercase font-medium transition-colors"
                          >
                            Add
                          </button>
                          <button
                            onClick={() => toggleWishlist(p.id)}
                            className="text-red-400 hover:text-red-600 p-1"
                            aria-label="Remove from wishlist"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                              <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.536l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.006.306l-1.5 2.5a.75.75 0 1 0 1.292.76l1.5-2.5a.75.75 0 0 0-.286-1.066Zm5.34.306a.75.75 0 1 0-1.292-.762l-1.5 2.5a.75.75 0 1 0 1.292.762l1.5-2.5Z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <button
            onClick={toggleCartOpen}
            className="relative flex items-center space-x-1 md:space-x-2 focus:outline-none group p-1"
            aria-label="Open Cart"
          >
            <span className="hover:text-[#C8A76A] transition-colors duration-300 hidden sm:inline">Cart</span>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.2"
                stroke="currentColor"
                className="w-5 h-5 group-hover:text-[#C8A76A] transition-colors duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C8A76A] text-[#1D2418] font-semibold text-[10px] w-[18px] h-[18px] rounded-full flex items-center justify-center shadow-md animate-scale-in">
                  {cartItemCount}
                </span>
              )}
            </div>
          </button>

        </div>
      </div>
    </nav>
  );
}
