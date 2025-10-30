"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <section
      id="banner"
      className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/Banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight tracking-tight">
          {t("banner.title", "Reliable. Scalable. Data-Driven Logistics")}
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          {t(
            "banner.description",
            "Delia UG provides structured fleet solutions and professional driver services for businesses seeking reliable, efficient last-mile delivery. We combine operational excellence with transparent communication and data-driven fleet performance."
          )}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-300 animate-bounce">
        ↓
      </div>
    </section>
  );
}
