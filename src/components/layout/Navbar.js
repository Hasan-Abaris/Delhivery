"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");

  // ✅ Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // Offset for fixed navbar
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // ✅ Detect active section on scroll
  useEffect(() => {
    const sections = ["banner", "network-join", "services", "contact", "about"];

    const handleActiveSection = () => {
      let current = "banner";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800 text-white transition-all italic font-bold">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 py-2 flex justify-between items-center">
        {/* ✅ Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Image
            src="/images/logo1.jpg"
            alt="Delia UG Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-orange-400">Delia</span> UG
          </span>
        </div>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium relative">
          {[
            { id: "banner", label: "Home" },
            { id: "network-join", label: "Join Network" },
            { id: "services", label: "Services" },
            { id: "contact", label: "Contact" },
            { id: "about", label: "About" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`transition ${
                activeSection === item.id
                  ? "text-orange-400"
                  : "hover:text-orange-400"
              }`}
            >
              {item.label}
            </button>
          ))}
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

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-center border-t border-gray-800 py-4 space-y-4">
          {[
            { id: "banner", label: "Home" },
            { id: "network-join", label: "Join Network" },
            { id: "services", label: "Services" },
            { id: "contact", label: "Contact" },
            { id: "about", label: "About" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`block w-full transition ${
                activeSection === item.id
                  ? "text-orange-400"
                  : "hover:text-orange-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
