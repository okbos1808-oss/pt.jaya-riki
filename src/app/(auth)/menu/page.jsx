"use client";

import { generateSuratPDF } from "@/lib/generateSurat";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MenuUser() {
  const router = useRouter();

  const [submission, setSubmission] = useState(() => {
    if (typeof window === "undefined") return null;
    const saved = localStorage.getItem("submission");
    return saved ? JSON.parse(saved) : null;
  });

  const [form, setForm] = useState({
    namaLengkap: "",
    noKTP: "",
    alamat: "",
    namaUsaha: "",
    jenisUsaha: "",
  });

  // 🔐 guard user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || user.role !== "user") {
      router.push("/login");
    }
  }, [router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      pemilik: {
        namaLengkap: form.namaLengkap,
        noKTP: form.noKTP,
        alamat: form.alamat,
      },
      usaha: {
        namaUsaha: form.namaUsaha,
        jenisUsaha: form.jenisUsaha,
      },
      verified: false,
      adminNote: "",
    };

    localStorage.setItem("submission", JSON.stringify(data));
    setSubmission(data);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 w-full max-w-lg rounded-xl shadow relative">

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 text-sm text-red-600 hover:underline"
        >
          Logout
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Menu User – Pengajuan Usaha
        </h2>

        {!submission ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              name="namaLengkap"
              placeholder="Nama Lengkap"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-white text-black placeholder-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              name="noKTP"
              placeholder="No KTP"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-white text-black placeholder-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              name="alamat"
              placeholder="Alamat"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-white text-black placeholder-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              name="namaUsaha"
              placeholder="Nama Usaha"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-white text-black placeholder-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              name="jenisUsaha"
              placeholder="Jenis Usaha"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-white text-black placeholder-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
            >
              📤 Kirim Pengajuan
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-lg font-medium">Status Pengajuan:</p>

            <p className="text-xl">
              {submission.verified ? (
                <span className="text-green-600 font-semibold">
                  ✅ Sudah Diverifikasi
                </span>
              ) : (
                <span className="text-yellow-600 font-semibold">
                  ⏳ Menunggu Verifikasi Admin
                </span>
              )}
            </p>

            {submission.verified && (
              <button
                onClick={() => generateSuratPDF(submission)}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                📄 Download Surat Perizinan (PDF)
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
