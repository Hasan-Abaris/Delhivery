"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto mt-15">
          <h1 className="text-4xl font-bold mb-8 text-center">
            {t("terms.title", "Terms of Service")}
          </h1>

          {/* Intro */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6">
            <div className="p-6 pt-6">
              <p className="text-muted-foreground">
                {t(
                  "terms.intro",
                  "These terms of service govern the use of our platform."
                )}
              </p>
            </div>
          </div>

          {/* Main Sections */}
          <div className="grid gap-6">
            {/* Scope */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {t("terms.sections.scope.title", "Scope")}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>
                  {t(
                    "terms.sections.scope.text",
                    "These terms apply to all business relationships between Delia and our customers."
                  )}
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {t("terms.sections.services.title", "Services")}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>
                  {t(
                    "terms.sections.services.text",
                    "Delia provides a logistics platform for the intermediation of transport services."
                  )}
                </p>
              </div>
            </div>

            {/* Liability */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {t("terms.sections.liability.title", "Liability")}
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>
                  {t(
                    "terms.sections.liability.text",
                    "Liability is governed by statutory provisions."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
