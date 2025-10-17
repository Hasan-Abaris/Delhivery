"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function CookiesSettings() {
  const [cookies, setCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const handleToggle = (type) => {
    if (type === "necessary") return; // can't disable necessary cookies
    setCookies({ ...cookies, [type]: !cookies[type] });
  };

  const handleSave = () => {
    // You could later integrate with localStorage or cookie consent logic
    alert("Your cookie preferences have been saved.");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto mt-15">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Cookie Settings
          </h1>

          {/* Intro */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6">
            <div className="p-6">
              <p className="text-muted-foreground">
                We use cookies to improve your browsing experience, analyze
                website traffic, and serve personalized content. Manage your
                preferences below.
              </p>
            </div>
          </div>

          {/* Cookie Options */}
          <div className="grid gap-6">
            {/* Necessary Cookies */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Necessary Cookies
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    These cookies are essential for the website to function
                    properly and cannot be disabled.
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
                    Analytics Cookies
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Help us understand how visitors interact with our website.
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
                    Marketing Cookies
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Used to show personalized ads and measure ad performance.
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
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
