"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  DocumentTextIcon,
  UsersIcon,
  EnvelopeIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
      aria-labelledby="contact-heading"
    >
      {/* Header */}
      <div className="text-center mb-16 px-4 sm:px-6">
        <Image
          src="/images/logo1.jpg"
          alt="Delia UG Logo"
          width={80}
          height={80}
          className="rounded-full mx-auto mb-6 shadow-lg"
          priority
        />
        <h2
          id="contact-heading"
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight"
        >
          {t("contact_section.title", "Let's Talk Logistics")}
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed opacity-90">
          {t(
            "contact_section.description",
            "Whether you're a courier, fleet, or enterprise, we provide structured, transparent, and data-driven logistics solutions."
          )}
        </p>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              key: "onboarding",
              icon: "file-text",
              gradient: "from-gray-700 to-gray-800",
            },
            {
              key: "support",
              icon: "users",
              gradient: "from-gray-700 to-gray-800",
            },
            {
              key: "general",
              icon: "mail",
              gradient: "from-orange-500 to-red-500",
            },
            {
              key: "legal",
              icon: "scale",
              gradient: "from-orange-500 to-red-500",
            },
          ].map((card) => (
            <ContactCard
              key={card.key}
              title={t(`contact_section.cards.${card.key}.title`)}
              email={t(`contact_section.cards.${card.key}.email`)}
              description={t(`contact_section.cards.${card.key}.description`)}
              icon={card.icon}
              gradient={card.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ✅ Contact Card Component
const ContactCard = ({ title, email, description, icon, gradient }) => {
  const icons = {
    "file-text": <DocumentTextIcon className="w-6 h-6 text-white" />,
    users: <UsersIcon className="w-6 h-6 text-white" />,
    mail: <EnvelopeIcon className="w-6 h-6 text-white" />,
    scale: <ScaleIcon className="w-6 h-6 text-white" />,
  };

  return (
    <div className="group p-6 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700 bg-gray-900/60 hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex items-start gap-4">
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradient} transition-transform duration-300 group-hover:scale-110`}
        >
          {icons[icon]}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <a
            href={`mailto:${email}`}
            className="text-gray-300 font-semibold hover:text-gray-100 transition-colors text-sm block mb-1"
          >
            {email}
          </a>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
