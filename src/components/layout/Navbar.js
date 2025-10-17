"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800 text-white transition-all italic font-bold">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 py-2 flex justify-between items-center">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/favicon.png"
            alt="Delia UG Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-orange-400">Delia </span> UG
          </span>
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium relative">
          <Link href="/" className="hover:text-orange-400 transition">
            Home
          </Link>

          {/* ✅ Services Dropdown */}
         {/* Desktop Dropdown */}
<div className="relative group">
  <button className="flex items-center gap-1 hover:text-orange-400 transition">
    Services
    <ChevronDown size={18} className="transition-transform duration-200 group-hover:rotate-180" />
  </button>

  {/* Dropdown stays open while hovering over the parent group */}
  <div className="absolute left-0 mt-2 w-64 bg-black/90 border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    {[
      { title: "Fleet Hiring & Operations", href: "/services/fleet-hiring" },
      { title: "Driver Management & Partner Network", href: "/services/driver-management" },
      { title: "Fleet Data & Reporting", href: "/services/fleet-data" },
      { title: "Scalable Solutions", href: "/services/scalable-solutions" },
    ].map((item, index) => (
      <Link
        key={index}
        href={item.href}
        className="block px-5 py-2 hover:bg-orange-500/20 hover:text-orange-400 transition text-sm"
      >
        {item.title}
      </Link>
    ))}
  </div>
</div>


          <Link href="/pricing" className="hover:text-orange-400 transition">
            Pricing
          </Link>
          <Link href="/track" className="hover:text-orange-400 transition">
            Track
          </Link>
          <Link href="/contact" className="hover:text-orange-400 transition">
            Contact
          </Link>
          <Link href="/about-us" className="hover:text-orange-400 transition">
            About Us
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

          {/* ✅ Services Dropdown (Mobile) */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex justify-center items-center w-full hover:text-orange-400 transition"
            >
              Services
              <ChevronDown
                size={18}
                className={`ml-1 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div className="mt-2 space-y-2">
                <Link
                  href="/services/fleet-hiring"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm hover:text-orange-400 transition"
                >
                  Fleet Hiring & Operations
                </Link>
                <Link
                  href="/services/driver-management"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm hover:text-orange-400 transition"
                >
                  Driver Management & Partner Network
                </Link>
                <Link
                  href="/services/fleet-data"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm hover:text-orange-400 transition"
                >
                  Fleet Data & Reporting
                </Link>
                <Link
                  href="/services/scalable-solutions"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm hover:text-orange-400 transition"
                >
                  Scalable Solutions
                </Link>
              </div>
            )}
          </div>

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
