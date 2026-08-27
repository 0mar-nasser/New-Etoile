"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../data/products";

export interface CartItem {
  id: string; // productId + '-' + volume
  productId: string;
  name: string;
  price: number;
  volume: string;
  quantity: number;
  image?: string;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: string[]; // array of product.id
  cartOpen: boolean;
  searchQuery: string;
  addToCart: (product: Product, volume: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleCartOpen: () => void;
  setCartOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  cartTotal: number;
  cartItemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Hydrate cart and wishlist from localStorage after initial render to avoid SSR hydration mismatch
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("etoile_cart");
      if (savedCart) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCart(JSON.parse(savedCart) as CartItem[]);
      }
      const savedWishlist = localStorage.getItem("etoile_wishlist");
      if (savedWishlist) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setWishlist(JSON.parse(savedWishlist) as string[]);
      }
    } catch {
      // Ignore JSON parse errors or access errors
    }
  }, []);

  // Save cart/wishlist to local storage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("etoile_cart", JSON.stringify(newCart));
  };

  const saveWishlist = (newWishlist: string[]) => {
    setWishlist(newWishlist);
    localStorage.setItem("etoile_wishlist", JSON.stringify(newWishlist));
  };

  const addToCart = (product: Product, volume: string, quantity = 1) => {
    const sizeOption = product.sizes.find((s) => s.volume === volume) || { price: product.price, volume };
    const cartItemId = `${product.id}-${volume}`;

    const newCart = [...cart];
    const existingIndex = newCart.findIndex((item) => item.id === cartItemId);

    if (existingIndex > -1) {
      newCart[existingIndex].quantity += quantity;
    } else {
      newCart.push({
        id: cartItemId,
        productId: product.id,
        name: product.name,
        price: sizeOption.price,
        volume: volume,
        quantity: quantity,
        image: product.image,
      });
    }

    saveCart(newCart);
    setCartOpen(true); // Automatically slide open cart drawer
  };

  const removeFromCart = (cartItemId: string) => {
    const newCart = cart.filter((item) => item.id !== cartItemId);
    saveCart(newCart);
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    const newCart = cart
      .map((item) => {
        if (item.id === cartItemId) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);

    saveCart(newCart);
  };

  const toggleWishlist = (productId: string) => {
    let newWishlist: string[];
    if (wishlist.includes(productId)) {
      newWishlist = wishlist.filter((id) => id !== productId);
    } else {
      newWishlist = [...wishlist, productId];
    }
    saveWishlist(newWishlist);
  };

  const isInWishlist = (productId: string) => {
    return wishlist.includes(productId);
  };

  const toggleCartOpen = () => {
    setCartOpen((prev) => !prev);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        cartOpen,
        searchQuery,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        toggleCartOpen,
        setCartOpen,
        setSearchQuery,
        cartTotal,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
