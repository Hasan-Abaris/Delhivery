"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LegalNotice() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-16 ">
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-8 text-center">
          {t("legalNotice.title")}
        </h1>

        <div className="grid gap-6">
          {/* Company */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {t("legalNotice.company.title")}
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="font-semibold">{t("legalNotice.company.name")}</p>
            </div>
          </div>

          {/* Address */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {t("legalNotice.address.title")}
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-1">
              <p>{t("legalNotice.address.city")}</p>
              <p>{t("legalNotice.address.country")}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {t("legalNotice.contact.title")}
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-1">
              <p>{t("legalNotice.contact.phone")}</p>
              <p>{t("legalNotice.contact.email")}</p>
            </div>
          </div>

          {/* Legal Info */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {t("legalNotice.legalInfo.title")}
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-2">
              <p>{t("legalNotice.legalInfo.registerCourt")}</p>
              <p>{t("legalNotice.legalInfo.commercialNumber")}</p>
              <p>{t("legalNotice.legalInfo.vatId")}</p>
              <p>{t("legalNotice.legalInfo.director")}</p>
              <br />
              <p className="font-medium">
                {t("legalNotice.legalInfo.responsible")}
              </p>
              <p>{t("legalNotice.legalInfo.companyName")}</p>
              <p>{t("legalNotice.legalInfo.street")}</p>
              <p>{t("legalNotice.legalInfo.zipCity")}</p>
            </div>
          </div>

          {/* Liability Disclaimer */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                {t("legalNotice.liability.title")}
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">
                {t("legalNotice.liability.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
