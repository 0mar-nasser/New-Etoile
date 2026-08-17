"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CATALOG_ITEMS, CatalogItem } from "../data/catalog";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import { useCart } from "../context/CartContext";
import ProductInquiryModal from "../components/ui/ProductInquiryModal";

function CatalogCard({
  item,
  onQuickView,
  onInquire,
}: {
  item: CatalogItem;
  onQuickView: (item: CatalogItem) => void;
  onInquire: (item: CatalogItem) => void;
}) {
  const { t, i18n } = useTranslation(["products", "common"]);
  const isRtl = i18n.language?.startsWith("ar");
  const { toggleWishlist, isInWishlist } = useCart();
  const isFav = isInWishlist(item.id);

  return (
    <div className="bg-[#F4F2E8] rounded-[24px] border border-[#E7DFC9]/60 p-6 flex flex-col relative group shadow-sm transition-all duration-500 hover:shadow-xl hover:border-[#C8A76A]/40 rtl:text-right">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] rounded-[18px] overflow-hidden flex items-center justify-center cursor-pointer mb-6 border border-[#E7DFC9]/50 bg-white/40">
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

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(item.id);
          }}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 bg-[#1D2418]/70 hover:bg-[#1D2418] text-[#F4F2E8] w-9 h-9 rounded-full flex items-center justify-center border border-[#384233] transition-all focus:outline-none z-20 cursor-pointer hover:scale-110 active:scale-95"
          aria-label={t("common:wishlist")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFav ? "#C8A76A" : "none"}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={isFav ? "#C8A76A" : "currentColor"}
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#2B3325]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(item);
            }}
            className="bg-[#F4F2E8] text-[#2B3325] hover:bg-[#C8A76A] hover:text-[#1D2418] px-3.5 py-2 rounded-full text-[9px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0 cursor-pointer"
          >
            {t("common:quickView")}
          </button>
          <Link
            href={`/collections/${item.id}`}
            className="bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418] px-3.5 py-2 rounded-full text-[9px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0 cursor-pointer"
          >
            {t("common:viewDetails")}
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow text-left rtl:text-right space-y-2">
        <span className="text-[10px] uppercase tracking-wider text-[#C8A76A] font-bold">
          {item.category} {item.subCategory ? `· ${item.subCategory}` : ""}
        </span>
        <Link
          href={`/collections/${item.id}`}
          className="font-serif text-xl text-[#1D2418] font-light tracking-wide hover:text-[#C8A76A] transition-colors leading-snug"
        >
          {item.name}
        </Link>
        <p className="text-xs text-[#2B3325]/75 font-light leading-relaxed flex-grow line-clamp-2">
          {item.description}
        </p>

        {/* Feature tags if any */}
        {item.features && item.features.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.features.slice(0, 2).map((feat, i) => (
              <span
                key={i}
                className="text-[9px] bg-[#E7DFC9]/60 text-[#384233] px-2.5 py-0.5 rounded-full font-light"
              >
                {feat}
              </span>
            ))}
          </div>
        )}

        {/* Action Row - Inquire & View Details (No Prices) */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E7DFC9]/50 mt-4 gap-2">
          <Link
            href={`/collections/${item.id}`}
            className="text-[10px] tracking-wider uppercase text-[#2B3325] hover:text-[#C8A76A] font-semibold border-b border-[#2B3325]/20 hover:border-[#C8A76A] pb-0.5 transition-colors"
          >
            {t("common:viewDetails")}
          </Link>

          <button
            onClick={() => onInquire(item)}
            className="luxury-btn bg-[#2B3325] hover:bg-[#C8A76A] text-[#F4F2E8] hover:text-[#1D2418] px-4 py-2 rounded-full text-[10px] tracking-wider uppercase font-bold transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
          >
            {t("common:inquire")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CollectionsPage() {
  const { t, i18n } = useTranslation(["products", "common"]);
  const isRtl = i18n.language?.startsWith("ar");
  const [activeTab, setActiveTab] = useState<"all" | "perfumes" | "bottles" | "caps" | "pumps">("all");
  const [quickViewItem, setQuickViewItem] = useState<CatalogItem | null>(null);
  const [inquiryItem, setInquiryItem] = useState<CatalogItem | null>(null);

  const { searchQuery, setSearchQuery } = useCart();

  // Filter items based on activeTab and searchQuery
  let filteredItems = CATALOG_ITEMS;

  if (activeTab !== "all") {
    filteredItems = filteredItems.filter((item) => item.category === activeTab);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filteredItems = CATALOG_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        (item.subCategory && item.subCategory.toLowerCase().includes(q))
    );
  }

  const categoryTabs = [
    { id: "all", label: t("products:allCategories") },
    { id: "perfumes", label: t("products:categoryPerfumeOils") },
    { id: "bottles", label: t("products:categoryBottles") },
    { id: "caps", label: t("products:categoryCaps") },
    { id: "pumps", label: t("products:categoryPumps") },
  ];

  return (
    <div className="bg-[#F4F2E8] min-h-screen text-[#1D2418] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#C8A76A] font-bold">
            ✦ {t("common:catalog")} ✦
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-[#1D2418] font-light">
            {t("products:allCategories")}
          </h1>
          <div className="h-[1px] w-12 bg-[#C8A76A]/60 mx-auto" />
        </div>

        {/* Live Search Bar Box */}
        <div className="max-w-xl mx-auto relative">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder={t("common:searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E7DFC9] focus:border-[#C8A76A] rounded-full px-6 py-3.5 pl-12 rtl:pl-6 rtl:pr-12 text-sm text-[#1D2418] shadow-sm focus:outline-none transition-all"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 absolute left-4 rtl:left-auto rtl:right-4 text-[#C8A76A] pointer-events-none"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.637Z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 rtl:right-auto rtl:left-4 text-xs font-bold text-[#C8A76A] hover:text-[#1D2418] uppercase tracking-wider cursor-pointer"
              >
                {t("common:clear")}
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        {!searchQuery && (
          <div className="flex justify-center border-b border-[#E7DFC9] overflow-x-auto gap-4 md:gap-8 pb-4">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "all" | "perfumes" | "bottles" | "caps" | "pumps")}
                className={`px-4 py-2 text-xs md:text-sm uppercase tracking-[0.15em] font-semibold border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "border-[#C8A76A] text-[#1D2418]"
                    : "border-transparent text-[#2B3325]/60 hover:text-[#1D2418]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Catalog Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <p className="font-serif text-2xl font-light text-[#1D2418]/70">
              {isRtl ? "لا توجد منتجات مطابقة لبحثك." : "No products match your search."}
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="bg-[#2B3325] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase hover:bg-[#C8A76A] hover:text-[#1D2418] transition-all cursor-pointer"
            >
              {t("common:clear")}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <CatalogCard
                key={item.id}
                item={item}
                onQuickView={(i) => setQuickViewItem(i)}
                onInquire={(i) => setInquiryItem(i)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {quickViewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#F4F2E8] border border-[#E7DFC9] rounded-[28px] max-w-lg w-full p-6 space-y-4 relative text-left rtl:text-right shadow-2xl">
            <button
              onClick={() => setQuickViewItem(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 text-sm font-bold text-[#C8A76A] hover:text-[#1D2418] cursor-pointer"
            >
              {t("common:close")}
            </button>
            <span className="text-[10px] uppercase tracking-wider text-[#C8A76A] font-bold">
              {quickViewItem.category}
            </span>
            <h3 className="font-serif text-2xl font-light text-[#1D2418]">{quickViewItem.name}</h3>
            <p className="text-xs text-[#2B3325]/75 leading-relaxed">{quickViewItem.description}</p>
            
            <div className="pt-4 flex justify-between items-center border-t border-[#E7DFC9] gap-3">
              <Link
                href={`/collections/${quickViewItem.id}`}
                onClick={() => setQuickViewItem(null)}
                className="text-xs uppercase tracking-wider text-[#2B3325] hover:text-[#C8A76A] font-semibold border-b border-[#2B3325]/20 hover:border-[#C8A76A] pb-0.5"
              >
                {t("common:viewDetails")}
              </Link>
              <button
                onClick={() => {
                  const target = quickViewItem;
                  setQuickViewItem(null);
                  setInquiryItem(target);
                }}
                className="bg-[#2B3325] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase hover:bg-[#C8A76A] hover:text-[#1D2418] transition-all cursor-pointer shadow-md"
              >
                {t("common:inquire")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Modal */}
      {inquiryItem && (
        <ProductInquiryModal
          product={{
            id: inquiryItem.id,
            name: inquiryItem.name,
            category: inquiryItem.category,
            description: inquiryItem.description,
            image: inquiryItem.image,
          }}
          onClose={() => setInquiryItem(null)}
        />
      )}
    </div>
  );
}
