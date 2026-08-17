/**
 * Helper to generate WhatsApp and Contact inquiry links for Catalog items
 */

export const WHATSAPP_PHONE = "971500000000"; // Replace with actual business WhatsApp number if configured

export function getWhatsAppInquiryUrl(productName: string, specification?: string, isArabic = false): string {
  const text = isArabic
    ? `مرحباً، أود الاستفسار بخصوص منتج من الكتالوج:\n• اسم المنتج: ${productName}${specification ? `\n• المواصفات/الحجم: ${specification}` : ""}\n\nيرجى تزويدي بمزيد من التفاصيل والتوفر.`
    : `Hello, I would like to inquire about this catalog product:\n• Product: ${productName}${specification ? `\n• Specification/Size: ${specification}` : ""}\n\nPlease provide me with availability and further details.`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export function getContactInquiryUrl(productName: string, category?: string): string {
  const params = new URLSearchParams();
  params.set("subject", "product");
  params.set("product", productName);
  if (category) params.set("category", category);
  return `/contact?${params.toString()}`;
}
