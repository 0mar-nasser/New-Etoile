"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CATALOG_ITEMS, CatalogItem } from "../data/catalog";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import { useCart } from "../context/CartContext";
import { Product } from "../data/products";

// Convert CatalogItem to Product structure for Cart compatibility
const itemToProduct = (item: CatalogItem, volume: string): Product => {
  let sizes = [{ volume: "100ml", price: item.price || 0 }];
  let price = item.price || 0;

  if (item.category === "bottles") {
    sizes = [
      { volume: "30ml", price: 10 },
      { volume: "50ml", price: 15 },
      { volume: "75ml", price: 20 },
      { volume: "100ml", price: 25 },
      { volume: "150ml", price: 30 },
      { volume: "200ml", price: 35 },
    ];
    price = sizes.find(s => s.volume === volume)?.price || 25;
  }

  return {
    id: item.id,
    name: item.name,
    tagline: item.description,
    description: item.description,
    price: price,
    volume: volume,
    family: item.category,
    notes: [],
    notesDetailed: { head: "", heart: "", base: "" },
    sizes: sizes,
    image: item.image
  };
};

function CatalogCard({ item, onQuickView }: { item: CatalogItem, onQuickView: (item: CatalogItem) => void }) {
  return (
    <div className="bg-[#F4F2E8] rounded-[24px] border border-[#E7DFC9]/60 p-6 flex flex-col relative group shadow-sm transition-all duration-500 hover:shadow-xl hover:border-[#C8A76A]/40">
      <div className="relative w-full aspect-[4/5] rounded-[18px] overflow-hidden flex items-center justify-center cursor-pointer mb-6" onClick={() => onQuickView(item)}>
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <ImagePlaceholder label={item.name} aspect="aspect-[4/5]" theme="light" />
        )}
        <div className="absolute inset-0 bg-[#2B3325]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button className="bg-[#F4F2E8] text-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] px-5 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0 cursor-pointer">
            Quick View
          </button>
        </div>
        {item.subCategory && (
          <span className="absolute bottom-4 left-4 bg-[#2B3325] text-white text-[8px] tracking-widest uppercase font-light px-3 py-1 rounded-full opacity-90">
            {item.subCategory}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-grow text-left space-y-2">
        <span className="text-[10px] uppercase tracking-wider text-[#C8A76A] font-semibold">{item.category}</span>
        <h3 className="font-serif text-xl text-[#1D2418] font-light tracking-wide">{item.name}</h3>
        <p className="text-xs text-[#2B3325]/75 font-light leading-relaxed flex-grow line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-[#E7DFC9]/50 mt-4">
          {item.price ? (
            <span className="font-serif text-lg text-[#1D2418] font-medium">${item.price}</span>
          ) : (
            <span className="font-serif text-sm text-[#1D2418] font-medium uppercase tracking-widest text-[#C8A76A]">Inquire</span>
          )}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onQuickView(item)}
              className="luxury-btn bg-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] text-[#F4F2E8] px-4 py-2.5 rounded-full text-[9px] tracking-widest uppercase font-semibold transition-all duration-300 shadow-md cursor-pointer"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CollectionsPage() {
  const [activeTab, setActiveTab] = useState<"perfumes" | "bottles" | "caps" | "pumps">("perfumes");
  const [quickViewItem, setQuickViewItem] = useState<CatalogItem | null>(null);
  const [selectedVolume, setSelectedVolume] = useState<string>("100ml");

  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  // For Bottles filtering
  const [bottleStyleFilter, setBottleStyleFilter] = useState<string>("All");

  const filteredItems = CATALOG_ITEMS.filter((item) => {
    if (item.category !== activeTab) return false;

    if (activeTab === "bottles" && bottleStyleFilter !== "All") {
      return item.subCategory?.includes(bottleStyleFilter) || false;
    }

    return true;
  });

  const tabs = [
    { id: "perfumes", name: "Perfumes" },
    { id: "bottles", name: "Empty Bottles" },
    { id: "caps", name: "Caps" },
    { id: "pumps", name: "Pumps" },
  ] as const;

  const bottleStyles = ["All", "Normal Bottle", "Polished Bottle", "VIP Bottle"];

  return (
    <div className="bg-[#F4F2E8] min-h-screen pt-28 pb-24 text-[#1D2418]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Editorial Heading */}
        <div className="space-y-4 max-w-2xl text-center mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase font-semibold text-[#C8A76A]">Premium Supply</span>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-[#1D2418]">
            Packaging & Perfumery
          </h1>
          <p className="text-xs md:text-sm text-[#2B3325]/70 font-light leading-relaxed">
            Discover our comprehensive catalog of luxury perfumery components. From our signature fragrances to exquisite empty bottles, caps, and pumps for your brand.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar Filters (Sticky) */}
          <div className="w-full lg:w-1/4 sticky top-[72px] lg:top-32 z-40 bg-[#F4F2E8]/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none py-3 lg:py-0 border-b lg:border-b-0 border-[#E7DFC9] space-y-4 lg:space-y-10">
            {/* Main Categories */}
            <div className="space-y-2 lg:space-y-4">
              <h2 className="hidden lg:block text-[10px] uppercase tracking-[0.2em] font-bold text-[#1D2418] border-b border-[#E7DFC9] pb-3">
                Categories
              </h2>
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                {tabs.map((tab) => (
                  <div key={tab.id} className="flex flex-col gap-1 flex-shrink-0 lg:flex-shrink">
                    <button
                      onClick={() => {
                        setActiveTab(tab.id);
                        setBottleStyleFilter("All");
                      }}
                      className={`whitespace-nowrap text-left px-4 py-2.5 rounded-[12px] text-xs tracking-wider transition-all duration-300 cursor-pointer ${activeTab === tab.id
                        ? "bg-[#2B3325] text-[#F4F2E8] font-medium shadow-sm"
                        : "text-[#2B3325] hover:bg-[#E7DFC9]/40 bg-[#E7DFC9]/20 lg:bg-transparent"
                        }`}
                    >
                      {tab.name}
                    </button>

                    {/* Desktop nested styles for Empty Bottles */}
                    {activeTab === "bottles" && tab.id === "bottles" && (
                      <div className="hidden lg:flex flex-col pl-4 mt-1 gap-1 animate-in fade-in slide-in-from-left-2 duration-300 border-l border-[#E7DFC9] ml-2">
                        {bottleStyles.map(style => (
                          <button
                            key={style}
                            onClick={() => setBottleStyleFilter(style)}
                            className={`text-left px-3 py-1.5 rounded-md text-[10px] tracking-wider transition-all duration-300 cursor-pointer ${bottleStyleFilter === style
                              ? "text-[#C8A76A] font-bold"
                              : "text-[#2B3325]/75 hover:text-[#1D2418] hover:bg-[#E7DFC9]/30"
                              }`}
                          >
                            {style}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile separate row styles for Empty Bottles */}
            {activeTab === "bottles" && (
              <div className="block lg:hidden animate-in fade-in slide-in-from-left-2 duration-300">
                <div className="flex flex-row gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {bottleStyles.map(style => (
                    <button
                      key={style}
                      onClick={() => setBottleStyleFilter(style)}
                      className={`whitespace-nowrap text-left px-3 py-1.5 rounded-md text-[10px] tracking-wider transition-all duration-300 cursor-pointer ${bottleStyleFilter === style
                        ? "text-[#C8A76A] font-bold bg-[#2B3325]/10 px-3 py-1.5"
                        : "text-[#2B3325]/75 hover:text-[#1D2418] hover:bg-[#E7DFC9]/30 bg-transparent"
                        }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-3/4 min-h-[500px]">
            {/* Pumps specific layout */}
            {activeTab === "pumps" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-700">
                {filteredItems.map(item => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden rounded-[32px] aspect-[16/9] bg-[#E7DFC9]/30 flex items-center justify-center shadow-sm hover:shadow-xl transition-all cursor-pointer"
                    onClick={() => {
                      setSelectedVolume("100ml");
                      setQuickViewItem(item);
                    }}
                  >
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <ImagePlaceholder label={item.name} aspect="aspect-[16/9]" theme="light" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D2418]/90 via-[#1D2418]/20 to-transparent flex flex-col justify-end p-8 text-left">
                      <h3 className="font-serif text-3xl text-[#F4F2E8] font-light">{item.name}</h3>
                      <p className="text-sm text-[#E7DFC9]/90 mt-2 max-w-md">{item.description}</p>
                      <div className="mt-4">
                        <span className="text-[10px] tracking-widest uppercase text-[#C8A76A] font-bold">{item.subCategory}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Normal Grid for others */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-in fade-in duration-700">
                {filteredItems.map((item) => (
                  <CatalogCard
                    key={item.id}
                    item={item}
                    onQuickView={(clickedItem) => {
                      setSelectedVolume(clickedItem.category === "bottles" ? "30ml" : "100ml");
                      setQuickViewItem(clickedItem);
                    }}
                  />
                ))}
                {filteredItems.length === 0 && (
                  <div className="col-span-full py-20 text-center space-y-4">
                    <h3 className="font-serif text-2xl text-[#1D2418] font-light">No products found</h3>
                    <p className="text-sm text-[#2B3325]/70">Try adjusting your filters.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* QUICK VIEW MODAL */}
      {quickViewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setQuickViewItem(null)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <div className="bg-[#F4F2E8] border border-[#E7DFC9] rounded-[28px] max-w-2xl w-full p-8 shadow-2xl relative z-10">
            <button
              onClick={() => setQuickViewItem(null)}
              className="absolute top-6 right-6 hover:text-[#C8A76A] transition-colors focus:outline-none p-1 text-[#2B3325] cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
              <div className="relative aspect-square w-full rounded-[20px] overflow-hidden">
                {quickViewItem.image ? (
                  <Image
                    src={quickViewItem.image}
                    alt={quickViewItem.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <ImagePlaceholder label={quickViewItem.name} aspect="aspect-square" theme="light" />
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-[#C8A76A] font-semibold">{quickViewItem.subCategory}</span>
                  <h3 className="font-serif text-2xl text-[#1D2418] font-light mt-1">{quickViewItem.name}</h3>
                </div>

                <p className="text-xs text-[#2B3325]/85 leading-relaxed font-light">
                  {quickViewItem.description}
                </p>

                {quickViewItem.features && (
                  <div className="space-y-1 pt-2">
                    <h4 className="text-[10px] uppercase tracking-wider text-[#1D2418] font-semibold">Specifications:</h4>
                    <ul className="list-disc list-inside text-xs text-[#2B3325]/80 space-y-1">
                      {quickViewItem.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                )}

                {/* Bottle Size Selector */}
                {quickViewItem.category === "bottles" && (
                  <div className="space-y-2 pt-2">
                    <h4 className="text-[10px] uppercase tracking-wider text-[#1D2418] font-semibold">Select Size:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["30ml", "50ml", "75ml", "100ml", "150ml", "200ml"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedVolume(size)}
                          className={`px-3 py-1 rounded-md text-[10px] tracking-wider transition-all duration-300 border cursor-pointer ${selectedVolume === size
                            ? "bg-[#C8A76A] text-[#1D2418] border-[#C8A76A] font-bold"
                            : "bg-transparent text-[#2B3325] border-[#E7DFC9] hover:border-[#C8A76A]"
                            }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-4 pt-6 border-t border-[#E7DFC9]/60">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-[#2B3325]/60 font-bold">Price</span>
                    <span className="font-serif text-2xl font-semibold text-[#1D2418]">
                      {quickViewItem.category === "bottles"
                        ? `$${{
                          "30ml": 10,
                          "50ml": 15,
                          "75ml": 20,
                          "100ml": 25,
                          "150ml": 30,
                          "200ml": 35,
                        }[selectedVolume] || 25
                        }`
                        : quickViewItem.price
                          ? `$${quickViewItem.price}`
                          : "Contact for Pricing"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Add to Wishlist */}
                    <button
                      onClick={() => toggleWishlist(quickViewItem.id)}
                      className={`flex-1 border py-3 rounded-full text-[10px] tracking-wider uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${isInWishlist(quickViewItem.id)
                        ? "bg-[#C8A76A]/20 border-[#C8A76A] text-[#1D2418]"
                        : "bg-transparent border-[#2B3325] text-[#2B3325] hover:bg-[#2B3325] hover:text-[#F4F2E8]"
                        }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={isInWishlist(quickViewItem.id) ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 text-[#C8A76A]"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                      {isInWishlist(quickViewItem.id) ? "In Wishlist" : "Wishlist"}
                    </button>

                    {/* Add to Cart */}
                    <button
                      onClick={() => {
                        const product = itemToProduct(quickViewItem, selectedVolume);
                        addToCart(product, selectedVolume);
                        setQuickViewItem(null);
                      }}
                      className="flex-1 luxury-btn bg-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] text-[#F4F2E8] py-3 rounded-full text-[10px] tracking-wider uppercase font-semibold transition-all duration-300 shadow-md cursor-pointer"
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
