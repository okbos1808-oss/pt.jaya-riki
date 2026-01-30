"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const users = [
    {
      email: "admin@demo.com",
      password: "admin123",
      role: "admin",
      name: "Admin Sistem",
    },
    {
      email: "user@demo.com",
      password: "user123",
      role: "user",
      name: "User Biasa",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      alert("Email atau password salah");
      return;
    }

    localStorage.setItem("user", JSON.stringify(foundUser));

    router.push(foundUser.role === "admin" ? "/admin" : "/menu");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      
      {/* ❌ Tombol Keluar */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-5 right-5 text-gray-400 hover:text-red-500 text-xl"
      >
        ✕
      </button>

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 bg-white text-black placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 bg-white text-black placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Login
          </button>
        </form>

        {/* 🔗 Daftar */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Belum punya akun?{" "}
          <button
            onClick={() => router.push("/register")}
            className="text-teal-600 font-semibold hover:underline"
          >
            Daftar
          </button>
        </p>

        <div className="text-sm mt-6 text-gray-500">
          <p className="font-medium">🔑 Dummy akun:</p>
          <p>Admin → admin@demo.com | admin123</p>
          <p>User → user@demo.com | user123</p>
        </div>
      </div>
    </div>
  );
}
