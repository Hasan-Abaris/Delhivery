"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LegalNotice() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto mt-10">
        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-8 text-center">
          {t("legal_notice.title")}
        </h1>

        <div className="grid gap-6">
          {/* Company */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {t("legal_notice.company.title")}
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="font-semibold">{t("legal_notice.company.name")}</p>
            </div>
          </div>

          {/* Address */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {t("legal_notice.address.title")}
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-1">
              <p>{t("legal_notice.address.city")}</p>
              <p>{t("legal_notice.address.country")}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {t("legal_notice.contact.title")}
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-1">
              <p>{t("legal_notice.contact.phone")}</p>
              <p>{t("legal_notice.contact.email")}</p>
            </div>
          </div>

          {/* Legal Info */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {t("legal_notice.legal_info.title")}
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-2">
              <p>{t("legal_notice.legal_info.register_court")}</p>
              <p>{t("legal_notice.legal_info.commercial_number")}</p>
              <p>{t("legal_notice.legal_info.vat_id")}</p>
              <p>{t("legal_notice.legal_info.director")}</p>
              <br />
              <p className="font-medium">
                {t("legal_notice.legal_info.responsible")}
              </p>
              <p>{t("legal_notice.legal_info.company_name")}</p>
              <p>{t("legal_notice.legal_info.street")}</p>
              <p>{t("legal_notice.legal_info.zip_city")}</p>
            </div>
          </div>

          {/* Liability Disclaimer */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {t("legal_notice.liability.title")}
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">
                {t("legal_notice.liability.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
