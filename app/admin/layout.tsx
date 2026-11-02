"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logoutAdmin } from "@/app/actions/admin-auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoginPage = pathname === "/admin/login";

  // If we are on the login page, render full screen without the dashboard chrome
  if (isLoginPage) {
    return <div className="min-h-screen bg-[#0D120B] text-[#F4F2E8]">{children}</div>;
  }

  const handleLogout = async () => {
    await logoutAdmin();
    router.push("/admin/login");
    router.refresh();
  };

  const navLinks = [
    {
      label: "لوحة المؤشرات",
      labelEn: "Dashboard",
      href: "/admin",
      exact: true,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      label: "إدارة المنتجات والكتالوج",
      labelEn: "Products & Catalog",
      href: "/admin/products",
      exact: false,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      label: "أقسام الواجهة (Showcase)",
      labelEn: "Showcase & Highlights",
      href: "/admin/showcase",
      exact: true,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      label: "إضافة منتج جديد",
      labelEn: "Add New Product",
      href: "/admin/products/new",
      exact: true,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      label: "إدارة الفئات والأقسام",
      labelEn: "Categories",
      href: "/admin/categories",
      exact: true,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
    },
    {
      label: "الاستفسارات والطلبات",
      labelEn: "Inquiries",
      href: "/admin/inquiries",
      exact: true,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D120B] text-[#F4F2E8] flex flex-col md:flex-row rtl font-sans" dir="rtl">
      {/* Mobile Topbar */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-[#141A12] border-b border-[#2A3623] sticky top-0 z-40">
        <Link href="/admin" className="flex items-center gap-2">
          <Image
            src="/Logos/title-light.png"
            alt="Etoile"
            width={100}
            height={30}
            className="object-contain"
          />
          <span className="text-[10px] uppercase tracking-wider bg-[#C8A76A]/20 text-[#C8A76A] px-2 py-0.5 rounded font-mono">
            Admin
          </span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#E7DFC9] hover:text-[#C8A76A] focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-[#121810] border-l border-[#263120] flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top brand header */}
        <div className="p-6 border-b border-[#263120]">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex flex-col">
              <Image
                src="/Logos/title-light.png"
                alt="Etoile"
                width={130}
                height={38}
                className="object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-[11px] text-[#C8A76A] tracking-widest font-serif mt-1">
                لوحة الإدارة والتحكم
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden text-[#E7DFC9] hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="p-4 space-y-1.5 flex-1 overflow-y-auto">
          <div className="text-[11px] font-semibold text-[#E7DFC9]/40 px-3 py-2 uppercase tracking-wider">
            القائمة الرئيسية
          </div>

          {navLinks.map((item) => {
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href) && item.href !== "/admin";
            const isRootActive = item.href === "/admin" && pathname === "/admin";
            const active = isActive || isRootActive;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-[#C8A76A]/20 to-[#C8A76A]/5 text-[#C8A76A] border-r-4 border-[#C8A76A] shadow-md shadow-black/30"
                    : "text-[#E7DFC9]/80 hover:bg-[#1D2418]/60 hover:text-[#F4F2E8]"
                }`}
              >
                <span className={active ? "text-[#C8A76A]" : "text-[#E7DFC9]/60"}>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="pt-6 text-[11px] font-semibold text-[#E7DFC9]/40 px-3 py-2 uppercase tracking-wider">
            المتجر
          </div>

          <Link
            href="/collections"
            target="_blank"
            className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-[#E7DFC9]/70 hover:bg-[#1D2418] hover:text-[#C8A76A] transition-colors"
          >
            <span className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#C8A76A]/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>معاينة المتجر العام</span>
            </span>
            <span className="text-[10px] bg-[#2A3623] px-2 py-0.5 rounded text-[#C8A76A]">Live</span>
          </Link>
        </nav>

        {/* Bottom Profile & Logout */}
        <div className="p-4 border-t border-[#263120] bg-[#0E130C]/60 space-y-3">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-[#C8A76A]/20 border border-[#C8A76A]/40 flex items-center justify-center text-[#C8A76A] font-serif font-bold text-sm">
              É
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#F4F2E8] truncate">مشرف المتجر (Admin)</p>
              <p className="text-[10px] text-[#C8A76A] truncate">جلسة نشطة ومحمية</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-950/40 border border-red-800/40 text-red-200 text-xs hover:bg-red-900/60 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* Top Header Bar */}
        <header className="hidden md:flex items-center justify-between px-8 py-4 bg-[#121810]/80 backdrop-blur-md border-b border-[#263120] sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <h1 className="text-sm font-medium text-[#E7DFC9]">
              لوحة التحكم المركزية &bull; <span className="text-[#C8A76A]">L&apos;Étoile Catalog Manager</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/admin/products/new"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#C8A76A] to-[#D4AF37] text-[#141A12] text-xs font-semibold shadow-md shadow-[#C8A76A]/20 hover:opacity-95 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>إضافة صنف جديد</span>
            </Link>

            <Link
              href="/collections"
              target="_blank"
              className="px-3.5 py-2 rounded-xl bg-[#1D2418] border border-[#384233] text-[#E7DFC9] hover:text-[#C8A76A] text-xs transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>المتجر المباشر</span>
            </Link>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
