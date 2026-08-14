import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins, Tajawal } from "next/font/google";
import { CartProvider } from "./context/CartContext";
import { I18nProvider } from "@/src/i18n";
import Navbar from "./components/layout/Navbar";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/layout/Footer";
import LanguageLoader from "./components/ui/LanguageLoader";
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

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Etoile | Haute Parfumerie & Packaging",
  description: "Experience French elegance, timeless beauty, and sophisticated industrial packaging craftsmanship. Discover your signature scent from Etoile's luxury fragrance catalog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${poppins.variable} ${tajawal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F4F2E8] text-[#1D2418] font-sans selection:bg-[#C8A76A]/30 selection:text-[#1D2418]">
        <I18nProvider>
          <LanguageLoader />
          <CartProvider>
            <Navbar />
            <CartDrawer />
            <main className="flex-grow pt-0">{children}</main>
            <Footer />
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
