"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import { Product } from "../data/products";

import ProductCard from "../components/products/ProductCard";

function CollectionsContent() {
  const { addToCart, toggleWishlist, isInWishlist, searchQuery, setSearchQuery } = useCart();
  const searchParams = useSearchParams();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Derive active filter: URL param drives it, tab clicks override locally
  const urlFilter = searchParams.get("filter") || "all";
  const [tabOverride, setTabOverride] = useState<string | null>(null);
  const activeFilter = tabOverride ?? urlFilter;

  // When the URL filter changes (e.g. nav link clicked), clear the local tab override
  useEffect(() => {
    setTabOverride(null); // eslint-disable-line react-hooks/set-state-in-effect
  }, [urlFilter]);

  // Filter products based on search query and category tab selection
  const filteredProducts = PRODUCTS.filter((product) => {
    // 1. Search Query filter
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.family.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.notes.some((note) => note.toLowerCase().includes(searchQuery.toLowerCase()));

    // 2. Category Tab filter
    let matchesCategory = true;
    if (activeFilter === "men") {
      matchesCategory = product.family.toLowerCase().includes("woody") || product.id === "bois";
    } else if (activeFilter === "women") {
      matchesCategory = product.family.toLowerCase().includes("floral") && product.id !== "originelle-intense";
    } else if (activeFilter === "unisex") {
      matchesCategory = product.family.toLowerCase().includes("fresh") || product.id === "originelle" || product.id === "originelle-intense";
    } else if (activeFilter === "exclusive") {
      matchesCategory = product.id === "originelle-intense";
    }

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#F4F2E8] min-h-screen pt-28 pb-24 text-[#1D2418]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

        {/* Editorial Heading */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center space-x-3 text-[#C8A76A]">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold">Haute Curation</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wide text-[#1D2418]">
            The Fragrance Collections
          </h1>
          <p className="text-xs md:text-sm text-[#2B3325]/70 font-light leading-relaxed">
            Browse our refined families of scent, composed in Paris using pure, wild-harvested absolute oils. Filter by scent profile or search our catalog to find your custom trail.
          </p>
        </div>

        {/* Filter Toolbar (Tabs & Search Status) */}
        <div className="border-b border-[#E7DFC9] pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", name: "All Scents" },
              { id: "men", name: "For Him" },
              { id: "women", name: "For Her" },
              { id: "unisex", name: "Shared / Unisex" },
              { id: "exclusive", name: "Exclusive Line" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTabOverride(tab.id)}
                className={`px-5 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 border cursor-pointer ${activeFilter === tab.id
                  ? "bg-[#2B3325] border-[#C8A76A] text-[#F4F2E8] shadow-sm"
                  : "bg-[#E7DFC9]/20 border-[#E7DFC9]/65 hover:bg-[#E7DFC9]/40 text-[#1D2418]"
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Search Status Summary */}
          {searchQuery && (
            <div className="flex items-center space-x-3 text-xs font-light text-[#2B3325]/75">
              <span>Showing search results for &ldquo;{searchQuery}&rdquo;</span>
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#C8A76A] underline uppercase tracking-widest text-[9px] hover:text-[#1D2418] cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Collections Catalog Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 max-w-md mx-auto">
            <span className="text-2xl">✦</span>
            <h3 className="font-serif text-xl font-light text-[#1D2418]">No Scents Match Your Selection</h3>
            <p className="text-xs text-[#2B3325]/60 font-light leading-relaxed">
              We couldn&rsquo;t find any Etoile fragrances matching your filters or search terms. Try adjusting your filters or search query.
            </p>
            <button
              onClick={() => {
                setTabOverride("all");
                setSearchQuery("");
              }}
              className="luxury-btn bg-[#2B3325] text-[#F4F2E8] px-6 py-2 rounded-full text-xs tracking-wider uppercase font-semibold mt-2 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        )}

        {/* Etoile Concierge Quiz Callout banner */}
        <div className="bg-[#2B3325] rounded-[28px] border border-[#384233] p-8 md:p-12 relative overflow-hidden shadow-md text-[#F4F2E8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#C8A76A]/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="space-y-2 text-left relative z-10 max-w-xl">
            <span className="text-[9px] tracking-widest uppercase text-[#C8A76A] font-bold">Unsure about your scent profile?</span>
            <h3 className="font-serif text-2xl font-light">Let our olfactory nose concierge guide you</h3>
            <p className="text-xs text-[#E7DFC9]/75 font-light leading-relaxed">
              Answer a few questions about your sensory preferences, and we will reveal your tailored signature scent profile.
            </p>
          </div>
          <Link
            href="/#notes"
            className="luxury-btn bg-[#C8A76A] hover:bg-[#b09156] text-[#1D2418] px-8 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all shadow-md shrink-0 whitespace-nowrap"
          >
            Find My Scent
          </Link>
        </div>

      </div>

      {/* DYNAMIC QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setQuickViewProduct(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <div className="bg-[#F4F2E8] border border-[#E7DFC9] rounded-[28px] max-w-2xl w-full p-8 shadow-2xl relative z-10">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-6 right-6 hover:text-[#C8A76A] transition-colors focus:outline-none p-1 text-[#2B3325] cursor-pointer"
              aria-label="Close Modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              {/* Product Image */}
              <div className="relative aspect-square w-full rounded-[20px] overflow-hidden">
                <ImagePlaceholder label={`${quickViewProduct.name} Scent`} aspect="aspect-square" theme="light" />
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-[#C8A76A] font-semibold">{quickViewProduct.family}</span>
                  <h3 className="font-serif text-2xl text-[#1D2418] font-light mt-1">{quickViewProduct.name}</h3>
                </div>

                <p className="text-xs text-[#2B3325]/85 leading-relaxed font-light">
                  {quickViewProduct.description}
                </p>

                <div className="space-y-1">
                  <h4 className="text-[10px] uppercase tracking-wider text-[#1D2418] font-semibold">Olfactory Palette:</h4>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {quickViewProduct.notes.map((note, i) => (
                      <span key={i} className="text-[9px] bg-[#E7DFC9] text-[#384233] px-2.5 py-0.5 rounded-full">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#E7DFC9]/60">
                  <span className="font-serif text-xl font-semibold">${quickViewProduct.price}</span>
                  <div className="flex items-center space-x-2">
                    <Link
                      href={`/collections/${quickViewProduct.id}`}
                      className="text-xs text-[#2B3325] hover:text-[#C8A76A] border border-[#2B3325] hover:border-[#C8A76A] px-4 py-2.5 rounded-full uppercase tracking-wider font-light text-center"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => {
                        addToCart(quickViewProduct, "100ml");
                        setQuickViewProduct(null);
                      }}
                      className="luxury-btn bg-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] text-[#F4F2E8] px-6 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all duration-300 cursor-pointer"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

function CollectionsLoadingFallback() {
  return (
    <div className="bg-[#F4F2E8] min-h-screen pt-28 pb-24 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="text-2xl text-[#C8A76A] animate-pulse">✦</span>
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#2B3325]/50 font-light">
          Loading Collection
        </p>
      </div>
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<CollectionsLoadingFallback />}>
      <CollectionsContent />
    </Suspense>
  );
}
