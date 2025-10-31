"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto mt-10">
          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-8 text-center">
            {t("privacy_policy.title")}
          </h1>

          {/* Intro */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6">
            <div className="p-6 pt-6">
              <p className="text-muted-foreground">{t("privacy_policy.intro")}</p>
            </div>
          </div>

          {/* Sections */}
          <div className="grid gap-6">
            {/* Data Processing */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {t("privacy_policy.sections.data_processing.title")}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>{t("privacy_policy.sections.data_processing.text")}</p>
              </div>
            </div>

            {/* Cookies */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {t("privacy_policy.sections.cookies.title")}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>{t("privacy_policy.sections.cookies.text")}</p>
              </div>
            </div>

            {/* User Rights */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {t("privacy_policy.sections.user_rights.title")}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>{t("privacy_policy.sections.user_rights.text")}</p>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {t("privacy_policy.sections.contact.title")}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>
                  {t("privacy_policy.sections.contact.text")}{" "}
                  <a
                    href="mailto:info@deliaug.com"
                    className="text-primary hover:underline"
                  >
                    {t("privacy_policy.sections.contact.email")}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
