"use server";

import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "etoile2026";
const SESSION_COOKIE_NAME = "etoile_admin_session";
const SESSION_SECRET_VALUE = "authenticated_etoile_admin_access";

export async function loginAdmin(password: string): Promise<{ success: boolean; error?: string }> {
  try {
    if (!password) {
      return { success: false, error: "يرجى إدخال كلمة المرور" };
    }

    if (password !== ADMIN_PASSWORD) {
      return { success: false, error: "كلمة المرور غير صحيحة" };
    }

    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, SESSION_SECRET_VALUE, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return { success: true };
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, error: "حدث خطأ أثناء تسجيل الدخول" };
  }
}

export async function checkAdminSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get(SESSION_COOKIE_NAME);
    return session?.value === SESSION_SECRET_VALUE;
  } catch {
    return false;
  }
}

export async function logoutAdmin(): Promise<{ success: boolean }> {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);
    return { success: true };
  } catch {
    return { success: false };
  }
}
