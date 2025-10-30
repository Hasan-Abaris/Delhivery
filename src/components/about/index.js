"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  // ✅ Get array safely from translations
  const values = t("about_section.values.list", {
    returnObjects: true,
    defaultValue: [
      "Reliability",
      "Teamwork",
      "Transparency",
      "Innovation & Data",
      "Accountability",
    ],
  });

  return (
    <section id="about" className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Image
            src="/images/logo1.jpg"
            alt="Delia UG Logo"
            width={100}
            height={100}
            className="mx-auto mb-4 rounded-full"
          />
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            {t("about_section.title", "About")}{" "}
            <span className="text-orange-400">Delia UG</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {t(
              "about_section.description",
              "Delia UG is a Bonn-based logistics company established in 2024, focused on delivering structured, technology-driven last-mile operations. We help businesses scale efficiently by managing fleets, drivers, and operations with transparency and measurable performance."
            )}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              {t("about_section.mission.title", "Mission")}
            </h2>
            <p className="text-gray-700">
              {t(
                "about_section.mission.description",
                "To deliver reliable fleet and driver management through structured operations, transparent communication, and data-backed performance — ensuring consistency, trust, and efficiency for every client."
              )}
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              {t("about_section.vision.title", "Vision")}
            </h2>
            <p className="text-gray-700">
              {t(
                "about_section.vision.description",
                "To be Germany’s most trusted fleet operations partner — empowering businesses, drivers, and partners to achieve sustainable growth through collaboration and innovation."
              )}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            {t("about_section.values.title", "Core Values")}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="px-6 py-4 bg-orange-50 rounded-2xl shadow-md text-gray-900 font-medium"
              >
                {value}
              </div>
            ))}
          </div>
        </div>

        {/* About Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            {t("about_section.details.title", "About Details")}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            {t(
              "about_section.details.description",
              "Delia UG operates as an external logistics partner, offering complete fleet outsourcing solutions. From driver management to data analytics, our services are designed to optimize routes, increase delivery accuracy, and reduce operational costs. With a focus on fairness and transparency, Delia UG builds long-term partnerships with both clients and drivers, maintaining high operational standards backed by measurable performance data."
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
