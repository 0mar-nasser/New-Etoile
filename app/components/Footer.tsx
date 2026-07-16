"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1D2418] text-[#F4F2E8] pt-20 pb-10 border-t border-[#384233] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#384233]">
        
        {/* Column 1: Logo & Statement */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="focus:outline-none flex flex-col items-start">
            <Image 
              src="/Logos/title-light.png" 
              alt="Etoile logo" 
              width={140} 
              height={40} 
              className="object-contain"
            />
          </Link>
          <p className="text-xs text-[#E7DFC9]/70 leading-relaxed max-w-sm font-light">
            Étoile is a modern luxury fragrance house inspired by French elegance, timeless beauty, and sophisticated craftsmanship. Composed in Paris, enjoyed globally.
          </p>
          
          {/* Social Media */}
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full border border-[#384233] flex items-center justify-center text-[#E7DFC9] hover:text-[#C8A76A] hover:border-[#C8A76A] transition-all duration-300" aria-label="Instagram">
              <span className="text-xs font-light">IG</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#384233] flex items-center justify-center text-[#E7DFC9] hover:text-[#C8A76A] hover:border-[#C8A76A] transition-all duration-300" aria-label="Pinterest">
              <span className="text-xs font-light">PT</span>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#384233] flex items-center justify-center text-[#E7DFC9] hover:text-[#C8A76A] hover:border-[#C8A76A] transition-all duration-300" aria-label="Facebook">
              <span className="text-xs font-light">FB</span>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xs tracking-[0.2em] uppercase text-[#C8A76A] font-bold">Maison Etoile</h4>
          <ul className="space-y-2.5 text-xs font-light text-[#E7DFC9]/80">
            <li><Link href="/about" className="hover:text-[#C8A76A] transition-colors">Our Story</Link></li>
            <li><Link href="/collections" className="hover:text-[#C8A76A] transition-colors">Shop All Scents</Link></li>
            <li><Link href="/#notes" className="hover:text-[#C8A76A] transition-colors">Fragrance Families</Link></li>
            <li><a href="#" className="hover:text-[#C8A76A] transition-colors">Sustainability</a></li>
          </ul>
        </div>

        {/* Column 3: Collections */}
        <div className="space-y-4">
          <h4 className="text-xs tracking-[0.2em] uppercase text-[#C8A76A] font-bold">Collections</h4>
          <ul className="space-y-2.5 text-xs font-light text-[#E7DFC9]/80">
            <li><Link href="/collections?filter=men" className="hover:text-[#C8A76A] transition-colors">Men&rsquo;s Fragrances</Link></li>
            <li><Link href="/collections?filter=women" className="hover:text-[#C8A76A] transition-colors">Women&rsquo;s Fragrances</Link></li>
            <li><Link href="/collections?filter=unisex" className="hover:text-[#C8A76A] transition-colors">Unisex Blend</Link></li>
            <li><Link href="/collections" className="hover:text-[#C8A76A] transition-colors">The Exclusive Line</Link></li>
          </ul>
        </div>

        {/* Column 4: Client Services */}
        <div className="space-y-4">
          <h4 className="text-xs tracking-[0.2em] uppercase text-[#C8A76A] font-bold">Support</h4>
          <ul className="space-y-2.5 text-xs font-light text-[#E7DFC9]/80">
            <li><Link href="/contact" className="hover:text-[#C8A76A] transition-colors">Contact Us</Link></li>
            <li><Link href="/cart" className="hover:text-[#C8A76A] transition-colors">Shopping Bag</Link></li>
            <li><a href="#" className="hover:text-[#C8A76A] transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-[#C8A76A] transition-colors">Bespoke Concierge</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-light text-[#E7DFC9]/50 tracking-wider space-y-4 md:space-y-0">
        <span>© {new Date().getFullYear()} Étoile Haute Parfumerie. All rights reserved.</span>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-[#C8A76A] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#C8A76A] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#C8A76A] transition-colors">Accessibility Statement</a>
        </div>
      </div>
    </footer>
  );
}
