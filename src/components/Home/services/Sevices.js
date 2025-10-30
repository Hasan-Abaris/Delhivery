"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  TruckIcon,
  GlobeAltIcon,
  ClockIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      key: "last_mile_delivery",
      icon: <TruckIcon className="w-8 h-8 text-white" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      key: "fleet_management",
      icon: <ChartBarIcon className="w-8 h-8 text-white" />,
      gradient: "from-gray-700 to-gray-800",
    },
    {
      key: "international_coverage",
      icon: <GlobeAltIcon className="w-8 h-8 text-white" />,
      gradient: "from-gray-700 to-gray-800",
    },
    {
      key: "support_24_7",
      icon: <ClockIcon className="w-8 h-8 text-white" />,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* ✅ Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
          {t("services_section.title", "Our Core Services")}
        </h2>

        {/* ✅ Description */}
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
          {t(
            "services_section.description",
            "Delia UG delivers reliability, scalability, and efficiency across all levels of logistics — powered by technology and data-driven performance."
          )}
        </p>

        {/* ✅ Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700 bg-gray-900/60 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {t(`services_section.items.${service.key}.title`)}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t(`services_section.items.${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
