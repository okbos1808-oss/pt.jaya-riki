"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  // ✅ init state langsung dari localStorage
  const [submission, setSubmission] = useState(() => {
    if (typeof window === "undefined") return null;
    const data = localStorage.getItem("submission");
    return data ? JSON.parse(data) : null;
  });

  // 🔐 guard admin
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "admin") {
      router.push("/login");
    }
  }, [router]);

  const verify = () => {
    if (!submission) return;

    const updated = {
      ...submission,
      verified: true,
      adminNote: "",
    };

    localStorage.setItem("submission", JSON.stringify(updated));
    setSubmission(updated);
  };

  const reject = () => {
    if (!submission) return;

    const updated = {
      ...submission,
      verified: false,
      adminNote: "Data belum lengkap, silakan perbaiki",
    };

    localStorage.setItem("submission", JSON.stringify(updated));
    setSubmission(updated);
  };

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 w-full max-w-lg rounded-xl shadow relative">

        {/* Logout */}
        <button
          onClick={logout}
          className="absolute top-4 right-4 text-sm text-red-600 hover:underline"
        >
          Logout
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Admin Panel
        </h2>

        {!submission ? (
          <p className="text-center">📂 Belum ada pengajuan</p>
        ) : (
          <div className="space-y-2 text-sm">
            <p><b>Nama:</b> {submission.pemilik.namaLengkap}</p>
            <p><b>No KTP:</b> {submission.pemilik.noKTP}</p>
            <p><b>Alamat:</b> {submission.pemilik.alamat}</p>
            <p><b>Usaha:</b> {submission.usaha.namaUsaha}</p>
            <p><b>Jenis:</b> {submission.usaha.jenisUsaha}</p>

            <p className="pt-2">
              <b>Status:</b>{" "}
              {submission.verified ? (
                <span className="text-green-600 font-semibold">
                  ✅ Diverifikasi
                </span>
              ) : (
                <span className="text-red-600 font-semibold">
                  ❌ Belum Diverifikasi
                </span>
              )}
            </p>

            {!submission.verified && (
              <div className="flex gap-2 mt-4">
                <button
                  onClick={verify}
                  className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  Verifikasi
                </button>

                <button
                  onClick={reject}
                  className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700"
                >
                  Tolak
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
