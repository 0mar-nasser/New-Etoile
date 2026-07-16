"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCart } from "../../context/CartContext";
import { PRODUCTS } from "../../data/products";
import ImagePlaceholder from "../../components/ui/ImagePlaceholder";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = typeof params?.id === "string" ? params.id : "";
  const product = PRODUCTS.find((p) => p.id === productId);

  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState(
    product ? product.sizes[1] : null
  );
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState<"notes" | "story" | "details">("notes");

  if (!product || !selectedSize) {
    return (
      <div className="bg-[#F4F2E8] min-h-screen flex flex-col items-center justify-center pt-28 text-[#1D2418]">
        <span className="text-3xl mb-4">✦</span>
        <h1 className="font-serif text-3xl font-light mb-2">Fragrance Not Found</h1>
        <p className="text-sm text-[#2B3325]/60 font-light mb-8">
          The fragrance you are looking for does not exist or has been retired from the collection.
        </p>
        <Link
          href="/collections"
          className="bg-[#2B3325] text-[#F4F2E8] px-8 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#C8A76A] hover:text-[#1D2418] transition-all"
        >
          Browse Collections
        </Link>
      </div>
    );
  }

  const isFav = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, selectedSize.volume);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="bg-[#F4F2E8] min-h-screen text-[#1D2418]">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-4">
        <nav className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#2B3325]/50 font-light">
          <Link href="/" className="hover:text-[#C8A76A] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-[#C8A76A] transition-colors">Collections</Link>
          <span>/</span>
          <span className="text-[#C8A76A]">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left – Image */}
          <div className="sticky top-28">
            <div className="relative w-full aspect-[3/4] rounded-[28px] overflow-hidden shadow-lg">
              <ImagePlaceholder label={`${product.name} — ${product.family}`} aspect="aspect-[3/4]" theme="light" />
              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors cursor-pointer focus:outline-none"
                aria-label="Toggle Wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill={isFav ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 ${isFav ? "text-[#C8A76A]" : "text-[#2B3325]"}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
              {/* Family badge */}
              <div className="absolute bottom-5 left-5 bg-[#1D2418]/80 backdrop-blur-sm text-[#F4F2E8] text-[9px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full">
                {product.family}
              </div>
            </div>

            {/* Thumbnail Row (decorative) */}
            <div className="flex gap-3 mt-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`relative flex-1 aspect-square rounded-[14px] overflow-hidden cursor-pointer border-2 transition-colors ${i === 1 ? "border-[#C8A76A]" : "border-[#E7DFC9] hover:border-[#C8A76A]/60"}`}>
                  <ImagePlaceholder label="" aspect="aspect-square" theme="light" />
                </div>
              ))}
            </div>
          </div>

          {/* Right – Details */}
          <div className="space-y-7 pt-2">

            {/* Family tag + name */}
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A76A] font-bold">{product.family}</span>
              <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-wide text-[#1D2418]">
                {product.name}
              </h1>
              <p className="text-sm text-[#2B3325]/70 font-light italic mt-1">{product.tagline}</p>
            </div>

            {/* Price display */}
            <div className="flex items-baseline space-x-3">
              <span className="font-serif text-3xl text-[#1D2418] font-medium">${selectedSize.price}</span>
              <span className="text-xs text-[#2B3325]/55 font-light">{selectedSize.volume} · Eau de Parfum</span>
            </div>

            {/* Size Selector */}
            <div className="space-y-3">
              <h3 className="text-[10px] uppercase tracking-widest text-[#1D2418] font-semibold">Select Size</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.volume}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 py-3 px-4 rounded-2xl border text-xs font-medium transition-all duration-200 cursor-pointer ${
                      selectedSize.volume === size.volume
                        ? "bg-[#2B3325] border-[#C8A76A] text-[#F4F2E8] shadow-md"
                        : "bg-transparent border-[#E7DFC9] text-[#2B3325] hover:border-[#C8A76A]/50 hover:bg-[#E7DFC9]/30"
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-semibold tracking-widest text-[11px] uppercase">{size.volume}</div>
                      <div className={`text-[10px] mt-0.5 ${selectedSize.volume === size.volume ? "text-[#C8A76A]" : "text-[#2B3325]/60"}`}>${size.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart + Wishlist */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-md focus:outline-none cursor-pointer ${
                  addedToCart
                    ? "bg-[#384233] text-[#C8A76A] border border-[#C8A76A]/50"
                    : "bg-[#2B3325] text-[#F4F2E8] hover:bg-[#C8A76A] hover:text-[#1D2418]"
                }`}
              >
                {addedToCart ? "✓ Added to Bag" : "Add to Bag"}
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className="w-14 h-14 rounded-full border border-[#E7DFC9] hover:border-[#C8A76A] flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill={isFav ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 ${isFav ? "text-[#C8A76A]" : "text-[#2B3325]"}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
            </div>

            {/* Free shipping callout */}
            <div className="flex items-center space-x-3 bg-[#E7DFC9]/40 border border-[#E7DFC9] rounded-2xl px-5 py-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#C8A76A] shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-[#1D2418]">Complimentary Worldwide Shipping</p>
                <p className="text-[9px] text-[#2B3325]/55 mt-0.5 font-light">On all orders · Delivered in elegant Étoile packaging</p>
              </div>
            </div>

            {/* Tabs: Notes / Story / Details */}
            <div className="border border-[#E7DFC9] rounded-[22px] overflow-hidden">
              {/* Tab Headers */}
              <div className="flex border-b border-[#E7DFC9] bg-[#E7DFC9]/20">
                {(["notes", "story", "details"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3.5 text-[10px] uppercase tracking-widest font-semibold transition-colors cursor-pointer ${
                      activeTab === tab
                        ? "text-[#C8A76A] border-b-2 border-[#C8A76A] bg-white/40"
                        : "text-[#2B3325]/50 hover:text-[#2B3325]"
                    }`}
                  >
                    {tab === "notes" ? "Olfactory Notes" : tab === "story" ? "Brand Story" : "Details"}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "notes" && (
                  <div className="space-y-5">
                    {(["head", "heart", "base"] as const).map((tier) => {
                      const labels = { head: "Top Notes", heart: "Heart Notes", base: "Base Notes" };
                      const icons = { head: "◉", heart: "♡", base: "◈" };
                      return (
                        <div key={tier} className="flex items-start space-x-4">
                          <div className="w-8 h-8 rounded-full bg-[#E7DFC9]/60 flex items-center justify-center shrink-0">
                            <span className="text-[#C8A76A] text-xs">{icons[tier]}</span>
                          </div>
                          <div>
                            <h4 className="text-[9px] uppercase tracking-widest text-[#C8A76A] font-semibold mb-1">{labels[tier]}</h4>
                            <p className="text-xs text-[#2B3325]/80 font-light leading-relaxed">{product.notesDetailed[tier]}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {activeTab === "story" && (
                  <p className="text-sm text-[#2B3325]/80 font-light leading-loose">
                    {product.description}
                  </p>
                )}

                {activeTab === "details" && (
                  <table className="w-full text-xs text-[#2B3325]/80 font-light">
                    <tbody className="divide-y divide-[#E7DFC9]/60">
                      {[
                        ["Concentration", "Eau de Parfum (EDP)"],
                        ["Volume", selectedSize.volume],
                        ["Scent Family", product.family],
                        ["Country of Origin", "Paris, France"],
                        ["Batch", "Limited — Handpoured"],
                        ["Packaging", "Étoile Signature Gift Box"],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td className="py-3 pr-4 text-[10px] uppercase tracking-widest text-[#1D2418] font-semibold w-36">{label}</td>
                          <td className="py-3 text-[#2B3325]/75">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-[#E7DFC9] mt-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C8A76A] font-bold">You May Also Love</span>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-[#1D2418] mt-1">Related Fragrances</h2>
          </div>
          <Link href="/collections" className="text-xs text-[#2B3325] hover:text-[#C8A76A] border-b border-[#2B3325]/20 hover:border-[#C8A76A]/40 pb-0.5 uppercase tracking-widest font-light transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((related) => (
            <div key={related.id} className="bg-white/40 rounded-[20px] border border-[#E7DFC9]/60 p-5 group hover:border-[#C8A76A]/40 hover:shadow-lg transition-all duration-300">
              <div className="relative w-full aspect-square rounded-[14px] overflow-hidden mb-5">
                <ImagePlaceholder label={related.name} aspect="aspect-square" theme="light" />
              </div>
              <span className="text-[9px] uppercase tracking-widest text-[#C8A76A] font-semibold">{related.family}</span>
              <h3 className="font-serif text-base text-[#1D2418] font-light mt-0.5 group-hover:text-[#C8A76A] transition-colors">{related.name}</h3>
              <p className="text-[10px] text-[#2B3325]/55 mt-1 font-light mb-4">{related.tagline}</p>
              <div className="flex items-center justify-between">
                <span className="font-serif text-base font-medium">${related.price}</span>
                <Link
                  href={`/collections/${related.id}`}
                  className="text-[9px] uppercase tracking-widest text-[#2B3325] hover:text-[#C8A76A] border border-[#E7DFC9] hover:border-[#C8A76A]/50 px-4 py-2 rounded-full transition-all"
                >
                  Discover
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
