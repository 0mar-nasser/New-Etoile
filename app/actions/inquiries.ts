"use server";

import prisma from "@/app/lib/prisma";
import { checkAdminSession } from "./admin-auth";
import { revalidatePath } from "next/cache";

export interface InquiryRecord {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message: string;
  status: string;
  productId?: string | null;
  productName?: string | null;
  createdAt: Date;
}

export async function submitInquiry(data: {
  name: string;
  contact: string; // email or phone
  company?: string;
  message?: string;
  quantity?: string;
  productId?: string;
  productName?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    if (!data.name?.trim() || !data.contact?.trim()) {
      return { success: false, error: "يرجى كتابة الاسم ورقم التواصل أو البريد الإلكتروني" };
    }

    const isEmail = data.contact.includes("@");
    const email = isEmail ? data.contact.trim() : "no-email@inquiry.etoile";
    const phone = !isEmail ? data.contact.trim() : undefined;

    const fullMessage = [
      data.message?.trim(),
      data.quantity?.trim() ? `الكمية المطلوبة: ${data.quantity.trim()}` : "",
    ]
      .filter(Boolean)
      .join(" | ");

    await prisma.inquiry.create({
      data: {
        name: data.name.trim(),
        email,
        phone,
        company: data.company?.trim() || null,
        message: fullMessage || "استفسار مباشر عن المنتج",
        productId: data.productId || null,
        productName: data.productName || null,
        status: "PENDING",
      },
    });

    revalidatePath("/admin/inquiries");
    revalidatePath("/admin");

    return { success: true };
  } catch (error) {
    console.error("Error submitting inquiry to PostgreSQL:", error);
    // Don't fail customer experience even if DB is temporarily down
    return { success: true };
  }
}

export async function getAdminInquiries(): Promise<{ success: boolean; data: InquiryRecord[]; error?: string }> {
  const isAuth = await checkAdminSession();
  if (!isAuth) {
    return { success: false, data: [], error: "غير مصرح لك" };
  }

  try {
    const records = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: records as InquiryRecord[] };
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return { success: false, data: [], error: "فشل استرجاع الاستفسارات" };
  }
}

export async function updateInquiryStatus(
  id: string,
  status: "PENDING" | "CONTACTED" | "COMPLETED" | "CANCELLED"
): Promise<{ success: boolean; error?: string }> {
  const isAuth = await checkAdminSession();
  if (!isAuth) {
    return { success: false, error: "غير مصرح لك" };
  }

  try {
    await prisma.inquiry.update({
      where: { id },
      data: { status },
    });
    revalidatePath("/admin/inquiries");
    revalidatePath("/admin");
    return { success: true };
  } catch {
    return { success: false, error: "فشل تحديث حالة الاستفسار" };
  }
}

export async function deleteInquiry(id: string): Promise<{ success: boolean; error?: string }> {
  const isAuth = await checkAdminSession();
  if (!isAuth) {
    return { success: false, error: "غير مصرح لك" };
  }

  try {
    await prisma.inquiry.delete({
      where: { id },
    });
    revalidatePath("/admin/inquiries");
    revalidatePath("/admin");
    return { success: true };
  } catch {
    return { success: false, error: "فشل حذف الاستفسار" };
  }
}
