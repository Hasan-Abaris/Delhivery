"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function CookiesSettings() {
  const { t } = useTranslation();
  const [cookies, setCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const handleToggle = (type) => {
    if (type === "necessary") return; // cannot disable necessary cookies
    setCookies({ ...cookies, [type]: !cookies[type] });
  };

  const handleSave = () => {
    alert(t("cookies.alert_saved"));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto mt-15">
          <h1 className="text-4xl font-bold mb-8 text-center">
            {t("cookies.title")}
          </h1>

          {/* Intro */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6">
            <div className="p-6">
              <p className="text-muted-foreground">{t("cookies.intro")}</p>
            </div>
          </div>

          {/* Cookie Options */}
          <div className="grid gap-6">
            {/* Necessary Cookies */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {t("cookies.necessary.title")}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {t("cookies.necessary.desc")}
                  </p>
                </div>
                <Switch checked={cookies.necessary} disabled />
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {t("cookies.analytics.title")}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {t("cookies.analytics.desc")}
                  </p>
                </div>
                <Switch
                  checked={cookies.analytics}
                  onCheckedChange={() => handleToggle("analytics")}
                />
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    {t("cookies.marketing.title")}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {t("cookies.marketing.desc")}
                  </p>
                </div>
                <Switch
                  checked={cookies.marketing}
                  onCheckedChange={() => handleToggle("marketing")}
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-center mt-8">
            <Button onClick={handleSave} className="px-8 py-2">
              {t("cookies.save_button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
