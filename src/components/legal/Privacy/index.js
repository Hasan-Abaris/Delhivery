"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl font-bold mb-8 text-center">
            {t("privacyPolicy.title")}
          </h1>

          {/* Intro */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6">
            <div className="p-6 pt-6">
              <p className="text-muted-foreground">
                {t("privacyPolicy.intro")}
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="grid gap-6">
            {/* Data Processing */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {t("privacyPolicy.sections.dataProcessing.title")}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>{t("privacyPolicy.sections.dataProcessing.text")}</p>
              </div>
            </div>

            {/* Cookies */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {t("privacyPolicy.sections.cookies.title")}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>{t("privacyPolicy.sections.cookies.text")}</p>
              </div>
            </div>

            {/* User Rights */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {t("privacyPolicy.sections.userRights.title")}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>{t("privacyPolicy.sections.userRights.text")}</p>
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {t("privacyPolicy.sections.contact.title")}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>
                  {t("privacyPolicy.sections.contact.text")}{" "}
                  <a
                    href="mailto:info@deliaug.com"
                    className="text-primary hover:underline"
                  >
                    {t("privacyPolicy.sections.contact.email")}
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
