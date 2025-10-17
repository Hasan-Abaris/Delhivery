"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Image Logo */}
          <Image
            src="/images/favicon.png"
            alt="Courier Connect Logo"
            width={50} 
            height={50} 
            className="rounded-full"
          />
          {/* Text Logo */}
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-orange-400">Delia </span> UG
          </span>
        </Link>
        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-orange-400 transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-orange-400 transition">
            Services
          </Link>
          <Link href="/pricing" className="hover:text-orange-400 transition">
            Pricing
          </Link>
          <Link href="/track" className="hover:text-orange-400 transition">
            Track
          </Link>
          <Link href="/contact" className="hover:text-orange-400 transition">
            Contact
          </Link>
        </div>

        {/* ✅ Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-800 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-center border-t border-gray-800 py-4 space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Services
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Pricing
          </Link>
          <Link
            href="/track"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Track
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-orange-400 transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
