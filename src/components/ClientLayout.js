"use client";

import "../i18n/i18n"; // ✅ initialize translations
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
