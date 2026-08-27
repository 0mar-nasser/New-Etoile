"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/app/actions/admin-auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await loginAdmin(password);
      if (res.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(res.error || "كلمة المرور غير صحيحة");
      }
    } catch {
      setError("حدث خطأ أثناء الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D120B] flex items-center justify-center p-4 relative overflow-hidden rtl font-sans" dir="rtl">
      {/* Background luxury gradient glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#C8A76A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#2D3A25]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-[#141A12]/90 backdrop-blur-xl border border-[#C8A76A]/30 rounded-3xl p-8 shadow-2xl relative z-10 space-y-8">
        {/* Header & Logo */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <Image
              src="/Logos/title-light.png"
              alt="L'Étoile"
              width={160}
              height={45}
              className="object-contain"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-serif text-[#F4F2E8] font-bold">
              لوحة الإدارة والتحكم
            </h1>
            <p className="text-xs text-[#C8A76A] tracking-wider uppercase">
              Etoile Luxury Catalog Control Panel
            </p>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-950/70 border border-red-500/50 rounded-xl text-red-200 text-xs text-center">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2 text-right">
            <label className="text-xs font-medium text-[#E7DFC9]/80">
              كلمة مرور المشرف (Admin Password)
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور..."
                className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:ring-1 focus:ring-[#C8A76A] focus:outline-none rounded-xl px-4 py-3 text-sm text-[#F4F2E8] placeholder:text-[#E7DFC9]/30 transition-all pr-4 pl-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#C8A76A] hover:text-[#E7DFC9] transition-colors px-1 py-0.5"
              >
                {showPassword ? "إخفاء" : "إظهار"}
              </button>
            </div>
            <p className="text-[11px] text-[#E7DFC9]/50 text-right">
              كلمة المرور الافتراضية: <code className="text-[#C8A76A] font-mono font-bold bg-[#1D2418] px-1.5 py-0.5 rounded">etoile2026</code>
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C8A76A] via-[#D4AF37] to-[#B8965A] text-[#141A12] font-bold text-sm shadow-lg shadow-[#C8A76A]/20 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "جاري التحقق والدخول..." : "تسجيل الدخول إلى لوحة التحكم"}
          </button>
        </form>

        {/* Footer info */}
        <div className="pt-4 border-t border-[#263120] text-center">
          <a
            href="/collections"
            className="text-xs text-[#E7DFC9]/60 hover:text-[#C8A76A] transition-colors"
          >
            &larr; العودة إلى واجهة المتجر الرئيسية
          </a>
        </div>
      </div>
    </div>
  );
}
