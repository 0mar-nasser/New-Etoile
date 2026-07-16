import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Etoile | Haute Parfumerie",
  description: "Experience French elegance, timeless beauty, and sophisticated craftsmanship. Discover your signature scent from Etoile's premium luxury fragrance collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F4F2E8] text-[#1D2418] font-sans selection:bg-[#C8A76A]/30 selection:text-[#1D2418]">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-grow pt-0">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
