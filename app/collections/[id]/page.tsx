"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCart } from "../../context/CartContext";
import { CATALOG_ITEMS, CatalogItem } from "../../data/catalog";
import { PRODUCTS, Product as LegacyProduct } from "../../data/products";
import ImagePlaceholder from "../../components/ui/ImagePlaceholder";

interface UnifiedProduct {
  id: string;
  name: string;
  category: "perfumes" | "bottles" | "caps" | "pumps" | string;
  subCategory?: string;
  description: string;
  price: number;
  image?: string;
  features?: string[];
  notesDetailed?: {
    head: string;
    heart: string;
    base: string;
  };
  sizes: { volume: string; price: number }[];
}

function resolveProduct(id: string): UnifiedProduct | null {
  // 1. Try CATALOG_ITEMS
  const catalogItem = CATALOG_ITEMS.find((item) => item.id === id);
  if (catalogItem) {
    let sizes = [{ volume: "100ml", price: catalogItem.price || 150 }];
    if (catalogItem.category === "bottles") {
      sizes = [
        { volume: "30ml", price: Math.max(8, (catalogItem.price || 20) - 10) },
        { volume: "50ml", price: Math.max(12, (catalogItem.price || 20) - 5) },
        { volume: "75ml", price: catalogItem.price || 20 },
        { volume: "100ml", price: (catalogItem.price || 20) + 5 },
        { volume: "150ml", price: (catalogItem.price || 20) + 10 },
      ];
    } else if (catalogItem.category === "perfumes") {
      const base = catalogItem.price || 180;
      sizes = [
        { volume: "50ml", price: Math.round(base * 0.65) },
        { volume: "100ml", price: base },
        { volume: "200ml", price: Math.round(base * 1.6) },
      ];
    } else if (catalogItem.category === "caps" || catalogItem.category === "pumps") {
      const base = catalogItem.price || 15;
      sizes = [
        { volume: "Single Sample", price: base },
        { volume: "Pack of 10", price: Math.round(base * 8.5) },
        { volume: "Bulk Pack (100)", price: Math.round(base * 70) },
      ];
    }

    return {
      id: catalogItem.id,
      name: catalogItem.name,
      category: catalogItem.category,
      subCategory: catalogItem.subCategory,
      description: catalogItem.description,
      price: catalogItem.price || 150,
      image: catalogItem.image,
      features: catalogItem.features,
      notesDetailed: catalogItem.category === "perfumes" ? {
        head: "Bergamot, Dewy Green Notes, Pink Pepper",
        heart: "Damask Rose, Grasse Jasmine, Floral Accord",
        base: "Golden Amber, White Musk, Sandalwood Cream"
      } : undefined,
      sizes: sizes,
    };
  }

  // 2. Try PRODUCTS
  const legacyProd = PRODUCTS.find((p) => p.id === id);
  if (legacyProd) {
    return {
      id: legacyProd.id,
      name: legacyProd.name,
      category: "perfumes",
      subCategory: legacyProd.family,
      description: legacyProd.description,
      price: legacyProd.price,
      image: legacyProd.image,
      features: legacyProd.notes.map(n => `Note: ${n}`),
      notesDetailed: legacyProd.notesDetailed,
      sizes: legacyProd.sizes,
    };
  }

  return null;
}

export default function ProductDetailPage() {
  const params = useParams();
  const productId = typeof params?.id === "string" ? params.id : "";
  const product = resolveProduct(productId);

  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState(
    product ? product.sizes[0] : null
  );
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState<"specs" | "story" | "features">("specs");

  if (!product || !selectedSize) {
    return (
      <div className="bg-[#F4F2E8] min-h-screen flex flex-col items-center justify-center pt-28 text-[#1D2418]">
        <span className="text-3xl mb-4">✦</span>
        <h1 className="font-serif text-3xl font-light mb-2">Item Not Found</h1>
        <p className="text-sm text-[#2B3325]/60 font-light mb-8">
          The requested item does not exist or has been removed from our catalog.
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

  // Find related items from CATALOG_ITEMS in same category
  const relatedItems = CATALOG_ITEMS.filter(
    (item) => item.category === product.category && item.id !== product.id
  ).slice(0, 3);

  const handleAddToCart = () => {
    // Map to Cart product item format
    const cartProduct: LegacyProduct = {
      id: product.id,
      name: product.name,
      tagline: product.description,
      description: product.description,
      price: selectedSize.price,
      volume: selectedSize.volume,
      family: product.category,
      notes: product.features || [],
      notesDetailed: product.notesDetailed || { head: "", heart: "", base: "" },
      sizes: product.sizes,
      image: product.image
    };

    addToCart(cartProduct, selectedSize.volume);
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
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-[#C8A76A] font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left – Image Container */}
          <div className="sticky top-28 space-y-4">
            <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden shadow-lg border border-[#E7DFC9]/80 group">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <ImagePlaceholder label={`${product.name}`} aspect="aspect-[4/5]" theme="light" />
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#F4F2E8]/85 backdrop-blur-md flex items-center justify-center shadow-md hover:bg-[#F4F2E8] transition-all cursor-pointer focus:outline-none border border-[#E7DFC9]"
                aria-label="Toggle Wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill={isFav ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 ${isFav ? "text-[#C8A76A]" : "text-[#2B3325]"}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>

              {/* Category / Subcategory Badge */}
              <div className="absolute bottom-5 left-5 bg-[#1D2418]/85 backdrop-blur-sm text-[#F4F2E8] text-[9px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full font-light">
                {product.subCategory || product.category}
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`relative flex-1 aspect-square rounded-[16px] overflow-hidden cursor-pointer border-2 transition-colors ${i === 0 ? "border-[#C8A76A]" : "border-[#E7DFC9] hover:border-[#C8A76A]/60"}`}>
                  {product.image ? (
                    <Image src={product.image} alt="" fill className="object-cover" />
                  ) : (
                    <ImagePlaceholder label="" aspect="aspect-square" theme="light" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right – Details */}
          <div className="space-y-7 pt-2">

            {/* Category tag + Name */}
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A76A] font-bold">
                {product.category} · {product.subCategory || "Exclusive Supply"}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-wide text-[#1D2418]">
                {product.name}
              </h1>
              <p className="text-xs md:text-sm text-[#2B3325]/75 font-light leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price display */}
            <div className="flex items-baseline space-x-3 pt-1 border-t border-[#E7DFC9]/60">
              <span className="font-serif text-3xl text-[#1D2418] font-medium">${selectedSize.price}</span>
              <span className="text-xs text-[#2B3325]/60 font-light">({selectedSize.volume}) · Tax included</span>
            </div>

            {/* Feature Highlights */}
            {product.features && product.features.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {product.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] uppercase tracking-wider bg-[#E7DFC9]/50 border border-[#E7DFC9] text-[#2B3325] px-3.5 py-1.5 rounded-full font-medium"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            )}

            {/* Size / Variant Selector */}
            <div className="space-y-3 pt-2">
              <h3 className="text-[10px] uppercase tracking-widest text-[#1D2418] font-semibold">
                Select Option / Specification
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.volume}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 min-w-[100px] py-3.5 px-4 rounded-2xl border text-xs font-medium transition-all duration-200 cursor-pointer ${
                      selectedSize.volume === size.volume
                        ? "bg-[#2B3325] border-[#C8A76A] text-[#F4F2E8] shadow-md"
                        : "bg-transparent border-[#E7DFC9] text-[#2B3325] hover:border-[#C8A76A]/50 hover:bg-[#E7DFC9]/30"
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-semibold tracking-widest text-[11px] uppercase">{size.volume}</div>
                      <div className={`text-[10px] mt-0.5 ${selectedSize.volume === size.volume ? "text-[#C8A76A]" : "text-[#2B3325]/60"}`}>
                        ${size.price}
                      </div>
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
                {addedToCart ? "✓ Added to Selection" : "Add to Order / Bag"}
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

            {/* Shipping & Quality Guarantee */}
            <div className="flex items-center space-x-3 bg-[#E7DFC9]/40 border border-[#E7DFC9] rounded-2xl px-5 py-3.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#C8A76A] shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-[#1D2418]">Luxury French Craftsmanship</p>
                <p className="text-[9px] text-[#2B3325]/55 mt-0.5 font-light">Worldwide Express Logistics & Custom Branding Available</p>
              </div>
            </div>

            {/* Dynamic Tabs: Specifications / Story / Features */}
            <div className="border border-[#E7DFC9] rounded-[22px] overflow-hidden">
              {/* Tab Headers */}
              <div className="flex border-b border-[#E7DFC9] bg-[#E7DFC9]/20">
                {(["specs", "story", "features"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3.5 text-[10px] uppercase tracking-widest font-semibold transition-colors cursor-pointer ${
                      activeTab === tab
                        ? "text-[#C8A76A] border-b-2 border-[#C8A76A] bg-white/40"
                        : "text-[#2B3325]/50 hover:text-[#2B3325]"
                    }`}
                  >
                    {tab === "specs" ? "Technical Specs" : tab === "story" ? "Overview & Story" : "Features"}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "specs" && (
                  <table className="w-full text-xs text-[#2B3325]/80 font-light">
                    <tbody className="divide-y divide-[#E7DFC9]/60">
                      {product.category === "perfumes" ? [
                        ["Concentration", "Eau de Parfum / Extrait"],
                        ["Selected Volume", selectedSize.volume],
                        ["Scent Family", product.subCategory || "Luxury Fragrance"],
                        ["Origin", "Grasse & Paris, France"],
                        ["Sillage & Longevity", "24 Hours Long-Lasting Trail"],
                        ["Packaging", "Signature Étoile Velvet Rigid Box"],
                      ] : product.category === "bottles" ? [
                        ["Material", "Thick Crystal Base Glass"],
                        ["Capacity", selectedSize.volume],
                        ["Neck Finish", "Standard FEA 15mm Crimp"],
                        ["Coating", "High-Polish UV & Scratch Resistant"],
                        ["Origin", "European Glassware Standards"],
                        ["Usage", "Luxury Fine Fragrances & Oils"],
                      ] : product.category === "caps" ? [
                        ["Material", "Heavy Zamac Metal Alloy / Premium Polymer"],
                        ["Fitment", "Standard 15mm Crimp Neck"],
                        ["Inner Gasket", "Leak-Proof Friction Insert"],
                        ["Finish", "Electroplated Gold / Matte Polish"],
                        ["Weight", "45g High Density Feel"],
                      ] : [
                        ["Atomization Dosage", "0.08ml - 0.12ml Ultra Fine Mist"],
                        ["Crimp Diameter", "FEA 15mm Standard"],
                        ["Dip Tube", "Precision Cut Transparent Tube"],
                        ["Spring Mechanism", "Corrosion-resistant Stainless Steel"],
                        ["Collar Finish", "Anodized Aluminum Gold / Silver"],
                      ].map(([label, value]) => (
                        <tr key={label}>
                          <td className="py-3 pr-4 text-[10px] uppercase tracking-widest text-[#1D2418] font-semibold w-40">{label}</td>
                          <td className="py-3 text-[#2B3325]/75">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {activeTab === "story" && (
                  <div className="space-y-4">
                    <p className="text-sm text-[#2B3325]/80 font-light leading-relaxed">
                      {product.description}
                    </p>
                    {product.notesDetailed && (
                      <div className="pt-3 border-t border-[#E7DFC9]/60 space-y-2">
                        <h4 className="text-[10px] uppercase tracking-widest text-[#C8A76A] font-bold">Olfactory Pyramid</h4>
                        <p className="text-xs text-[#2B3325]/75"><strong>Top:</strong> {product.notesDetailed.head}</p>
                        <p className="text-xs text-[#2B3325]/75"><strong>Heart:</strong> {product.notesDetailed.heart}</p>
                        <p className="text-xs text-[#2B3325]/75"><strong>Base:</strong> {product.notesDetailed.base}</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "features" && (
                  <ul className="space-y-3 text-xs text-[#2B3325]/80 font-light">
                    {product.features && product.features.length > 0 ? (
                      product.features.map((feat, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="text-[#C8A76A]">✦</span>
                          <span>{feat}</span>
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="flex items-center space-x-2"><span className="text-[#C8A76A]">✦</span><span>Crafted to European luxury packaging standards</span></li>
                        <li className="flex items-center space-x-2"><span className="text-[#C8A76A]">✦</span><span>Rigorous pressure and leak testing passed</span></li>
                        <li className="flex items-center space-x-2"><span className="text-[#C8A76A]">✦</span><span>Custom logo engraving available on bulk orders</span></li>
                      </>
                    )}
                  </ul>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedItems.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-[#E7DFC9] mt-12">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#C8A76A] font-bold">More From Collection</span>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-[#1D2418] mt-1 capitalize">
                Related {product.category}
              </h2>
            </div>
            <Link href="/collections" className="text-xs text-[#2B3325] hover:text-[#C8A76A] border-b border-[#2B3325]/20 hover:border-[#C8A76A]/40 pb-0.5 uppercase tracking-widest font-light transition-colors">
              Explore All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedItems.map((related) => (
              <div key={related.id} className="bg-white/40 rounded-[20px] border border-[#E7DFC9]/60 p-5 group hover:border-[#C8A76A]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="relative w-full aspect-[4/5] rounded-[14px] overflow-hidden mb-5">
                    {related.image ? (
                      <Image src={related.image} alt={related.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <ImagePlaceholder label={related.name} aspect="aspect-[4/5]" theme="light" />
                    )}
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-[#C8A76A] font-semibold">{related.category}</span>
                  <h3 className="font-serif text-base text-[#1D2418] font-light mt-0.5 group-hover:text-[#C8A76A] transition-colors">{related.name}</h3>
                  <p className="text-[10px] text-[#2B3325]/60 mt-1 font-light line-clamp-2 mb-4">{related.description}</p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#E7DFC9]/50">
                  <span className="font-serif text-base font-medium">${related.price || 150}</span>
                  <Link
                    href={`/collections/${related.id}`}
                    className="text-[9px] uppercase tracking-widest text-[#2B3325] hover:text-[#C8A76A] border border-[#E7DFC9] hover:border-[#C8A76A]/50 px-4 py-2 rounded-full transition-all"
                  >
                    View Item
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
