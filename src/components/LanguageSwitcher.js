"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export default function LanguageWidget() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  // ✅ Ensure correct language on first load
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      setCurrentLang(savedLang);
    }
  }, []);

  // ✅ Handle language change
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    localStorage.setItem("lang", lang);
    setOpen(false);
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* 🌍 Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
        title="Change Language"
      >
        <Globe className="w-6 h-6" />
      </button>

      {/* 🔽 Dropdown */}
      {open && (
        <div className="absolute bottom-14 right-0 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200 w-40">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChangeLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-500 transition ${
                currentLang === lang.code
                  ? "bg-orange-100 text-orange-600 font-semibold"
                  : ""
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
