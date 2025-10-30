"use client";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FloatingApplyButton() {
  const { t } = useTranslation(); // ✅ Hook to use translations

  return (
    <a
      href="https://airtable.com/apppKqH2vrbjCFBP9/pag4Zjxt9Ph7hPK2Q/form"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 
                 bg-orange-500 hover:bg-orange-600 text-white font-bold 
                 px-6 py-4 rounded-full shadow-xl flex items-center gap-2 
                 animate-bounce hover:animate-none transition-all duration-300"
      aria-label={t("apply_driver")} // ✅ translated for accessibility too
    >
      {t("apply_driver")} <ArrowRight className="w-5 h-5" />
    </a>
  );
}
