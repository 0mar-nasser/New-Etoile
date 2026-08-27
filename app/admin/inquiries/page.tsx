"use client";

import React, { useState, useEffect } from "react";
import { InquiryRecord, getAdminInquiries, updateInquiryStatus, deleteInquiry } from "@/app/actions/inquiries";

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchInquiries = async () => {
    setLoading(true);
    const res = await getAdminInquiries();
    if (res.success && res.data) {
      setInquiries(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleStatusChange = async (id: string, newStatus: any) => {
    const res = await updateInquiryStatus(id, newStatus);
    if (res.success) {
      setInquiries((prev) =>
        prev.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
      );
    }
  };

  const handleDelete = async (id: string) => {
    const res = await deleteInquiry(id);
    if (res.success) {
      setInquiries((prev) => prev.filter((inq) => inq.id !== id));
      setDeletingId(null);
    }
  };

  const filtered = inquiries.filter((inq) => {
    const matchesStatus = filterStatus === "all" || inq.status === filterStatus;
    const matchesSearch =
      inq.name.toLowerCase().includes(search.toLowerCase()) ||
      inq.email.toLowerCase().includes(search.toLowerCase()) ||
      (inq.phone && inq.phone.includes(search)) ||
      (inq.productName && inq.productName.toLowerCase().includes(search.toLowerCase())) ||
      inq.message.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-950/50 text-amber-300 border border-amber-700/50">جديد (قيد الانتظار)</span>;
      case "CONTACTED":
        return <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-blue-950/50 text-blue-300 border border-blue-700/50">تم التواصل</span>;
      case "COMPLETED":
        return <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-950/50 text-emerald-300 border border-emerald-700/50">مكتمل</span>;
      case "CANCELLED":
        return <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-gray-800 text-gray-400 border border-gray-700">ملغي</span>;
      default:
        return <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-gray-800 text-gray-300">{status}</span>;
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-[#F4F2E8]">
            استفسارات وطلبات العملاء (PostgreSQL)
          </h1>
          <p className="text-xs text-[#E7DFC9]/60 mt-1">
            إجمالي الاستفسارات المسجلة في قاعدة البيانات: <span className="text-[#C8A76A] font-bold">{inquiries.length}</span>
          </p>
        </div>

        <button
          onClick={fetchInquiries}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1D2418] border border-[#384233] text-xs text-[#E7DFC9] hover:text-[#C8A76A]"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>تحديث القائمة</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-[#141A12] border border-[#263120] p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="بحث بالاسم، الإيميل، الهاتف، أو المنتج..."
            className="w-full bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-4 py-2.5 text-xs text-[#F4F2E8] placeholder:text-[#E7DFC9]/40 pr-9"
          />
          <svg className="w-4 h-4 text-[#E7DFC9]/40 absolute right-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-xs text-[#E7DFC9]/60">الحالة:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] focus:outline-none rounded-xl px-3 py-2 text-xs text-[#F4F2E8]"
          >
            <option value="all">كافة الحالات</option>
            <option value="PENDING">جديد (قيد الانتظار)</option>
            <option value="CONTACTED">تم التواصل</option>
            <option value="COMPLETED">مكتمل</option>
            <option value="CANCELLED">ملغي</option>
          </select>
        </div>
      </div>

      {/* Inquiries List */}
      <div className="bg-[#141A12] border border-[#263120] rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs">
            <thead>
              <tr className="bg-[#10150E] border-b border-[#263120] text-[#E7DFC9]/60 uppercase">
                <th className="py-4 px-4 font-medium">العميل / جهة الاتصال</th>
                <th className="py-4 px-4 font-medium">المنتج المعني</th>
                <th className="py-4 px-4 font-medium">تفاصيل الرسالة</th>
                <th className="py-4 px-4 font-medium">الحالة</th>
                <th className="py-4 px-4 font-medium">التاريخ</th>
                <th className="py-4 px-4 font-medium text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#263120]">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-[#E7DFC9]/60">
                    جاري تحميل الاستفسارات من قاعدة البيانات...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-[#E7DFC9]/60">
                    لا توجد استفسارات مسجلة حالياً
                  </td>
                </tr>
              ) : (
                filtered.map((inq) => (
                  <tr key={inq.id} className="hover:bg-[#1D2418]/50 transition-colors">
                    {/* Customer */}
                    <td className="py-4 px-4">
                      <p className="font-bold text-[#F4F2E8]">{inq.name}</p>
                      <div className="text-[11px] text-[#E7DFC9]/60 space-y-0.5 mt-0.5">
                        {inq.email && !inq.email.includes("no-email") && (
                          <p className="font-mono text-[#C8A76A]">{inq.email}</p>
                        )}
                        {inq.phone && (
                          <p className="font-mono">{inq.phone}</p>
                        )}
                        {inq.company && (
                          <p className="text-[10px] text-[#E7DFC9]/40">{inq.company}</p>
                        )}
                      </div>
                    </td>

                    {/* Product */}
                    <td className="py-4 px-4">
                      {inq.productName ? (
                        <span className="font-medium text-[#C8A76A] bg-[#1D2418] px-2 py-1 rounded-lg border border-[#384233]">
                          {inq.productName}
                        </span>
                      ) : (
                        <span className="text-[#E7DFC9]/40">استفسار عام</span>
                      )}
                    </td>

                    {/* Message */}
                    <td className="py-4 px-4 max-w-xs">
                      <p className="text-[#E7DFC9]/80 leading-relaxed text-[11px] line-clamp-2">
                        {inq.message}
                      </p>
                    </td>

                    {/* Status Dropdown */}
                    <td className="py-4 px-4">
                      <select
                        value={inq.status}
                        onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                        className="bg-[#1D2418] border border-[#384233] focus:border-[#C8A76A] rounded-lg px-2 py-1 text-[11px] text-[#F4F2E8]"
                      >
                        <option value="PENDING">جديد</option>
                        <option value="CONTACTED">تم التواصل</option>
                        <option value="COMPLETED">مكتمل</option>
                        <option value="CANCELLED">ملغي</option>
                      </select>
                    </td>

                    {/* Date */}
                    <td className="py-4 px-4 font-mono text-[11px] text-[#E7DFC9]/50">
                      {new Date(inq.createdAt).toLocaleDateString("ar-EG", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>

                    {/* Delete */}
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => setDeletingId(inq.id)}
                        className="p-1.5 rounded-lg bg-[#1D2418] hover:bg-red-950/60 hover:text-red-300 border border-[#384233] text-red-400/80 transition-colors"
                        title="حذف الاستفسار"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deletingId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#141A12] border border-red-500/40 rounded-2xl p-6 max-w-sm w-full space-y-4 text-right">
            <h3 className="text-base font-bold text-red-300">تأكيد حذف الاستفسار</h3>
            <p className="text-xs text-[#E7DFC9]/80">
              هل أنت متأكد من رغبتك في حذف هذا الاستفسار نهائياً من قاعدة البيانات؟
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setDeletingId(null)}
                className="px-4 py-2 rounded-xl border border-[#384233] text-xs text-[#E7DFC9]"
              >
                إلغاء
              </button>
              <button
                onClick={() => handleDelete(deletingId)}
                className="px-4 py-2 rounded-xl bg-red-800 hover:bg-red-700 text-white text-xs font-semibold"
              >
                نعم، احذف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
