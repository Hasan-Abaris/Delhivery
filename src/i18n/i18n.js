"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import de from "../locales/de.json";

const savedLang =
  typeof window !== "undefined" ? localStorage.getItem("language") : null;

const defaultLang = savedLang || "en";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    lng: defaultLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

  i18n.on("languageChanged", (lng) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lng);
      document.documentElement.lang = lng;
    }
  });
}

export default i18n;
