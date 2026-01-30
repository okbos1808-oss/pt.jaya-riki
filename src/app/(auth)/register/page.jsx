"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ambil users lama (jika ada)
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // cek email sudah terdaftar
    const exists = users.find((u) => u.email === form.email);
    if (exists) {
      alert("Email sudah terdaftar");
      return;
    }

    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
      role: "user", // default role
    };

    users.push(newUser);

    // simpan user list
    localStorage.setItem("users", JSON.stringify(users));

    // auto login setelah daftar
    localStorage.setItem("user", JSON.stringify(newUser));

    router.push("/menu");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      
      {/* ❌ Tombol Keluar */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-5 right-5 text-gray-500 hover:text-red-500 text-xl"
      >
        ✕
      </button>

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold text-center mb-6">
          Daftar Akun
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Nama Lengkap"
            className="w-full border p-2 rounded"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
            Daftar
          </button>
        </form>

        {/* 🔗 Login */}
        <p className="text-sm text-center mt-4">
          Sudah punya akun?{" "}
          <button
            onClick={() => router.push("/login")}
            className="text-teal-600 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
