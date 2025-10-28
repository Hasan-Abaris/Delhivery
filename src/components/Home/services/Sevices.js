"use client";
import React from "react";
import { TruckIcon, GlobeAltIcon, ClockIcon, ChartBarIcon } from "@heroicons/react/24/outline";

function Services() {
  const services = [
    {
      title: "Last-Mile Delivery",
      description:
        "Reliable and fast last-mile delivery solutions designed for businesses that demand on-time performance and customer satisfaction.",
      icon: <TruckIcon className="w-8 h-8 text-white" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Fleet Management",
      description:
        "End-to-end structured fleet solutions with driver management, tracking, and performance insights for operational excellence.",
      icon: <ChartBarIcon className="w-8 h-8 text-white" />,
      gradient: "from-gray-700 to-gray-800",
    },
    {
      title: "International Coverage",
      description:
        "Cross-border logistics support across Europe with compliance, documentation, and coordination handled professionally.",
      icon: <GlobeAltIcon className="w-8 h-8 text-white" />,
      gradient: "from-gray-700 to-gray-800",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team ensures your deliveries and operations never stop — available day and night for all logistics queries.",
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
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
          Our Core Services
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
          Delia UG delivers reliability, scalability, and efficiency across all
          levels of logistics — powered by technology and data-driven
          performance.
        </p>

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
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
