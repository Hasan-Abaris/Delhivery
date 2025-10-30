"use client";

import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react"; // ✅ Import Languages icon
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n"; // ✅ make sure your i18n config is imported

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("banner");
  const { t } = useTranslation();

  // ✅ Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // ✅ Detect active section on scroll
  useEffect(() => {
    const sections = ["banner", "network-join", "services", "about", "contact"];
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

  // ✅ Navigation items
  const navItems = [
    { id: "banner", label: t("nav.home", "Home") },
    { id: "services", label: t("nav.services", "Our Services") },
    { id: "network-join", label: t("nav.join", "Join") },
    { id: "about", label: t("nav.about", "About") },
    { id: "contact", label: t("nav.contact", "Get in Touch") },
  ];

  // ✅ Language toggle
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "de" : "en";
    i18n.changeLanguage(newLang);
  };

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
        <div className="hidden md:flex space-x-8 font-medium relative items-center">
          {navItems.map((item) => (
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

          {/* ✅ Translation Button */}
          <button
            onClick={toggleLanguage}
            className="p-2 hover:text-orange-400 transition"
            title="Switch Language"
          >
            <Languages size={22} />
          </button>
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
          {navItems.map((item) => (
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

          {/* ✅ Translation button for mobile */}
          <button
            onClick={toggleLanguage}
            className="flex justify-center w-full mt-4 hover:text-orange-400 transition"
          >
            <Languages size={22} />
            <span className="ml-2">
              {i18n.language === "en" ? "DE" : "EN"}
            </span>
          </button>
        </div>
      )}
    </nav>
  );
}
