"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Privacy Policy
          </h1>

          {/* Intro */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6">
            <div className="p-6 pt-6">
              <p className="text-muted-foreground">
                We take the protection of your personal data very seriously.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="grid gap-6">
            {/* Data Processing */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Data Processing
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>
                  We process personal data only within the framework of legal
                  provisions.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Cookies
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>
                  We use cookies to ensure the functionality of our website.
                </p>
              </div>
            </div>

            {/* User Rights */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Your Rights
                </h3>
              </div>
              <div className="p-6 pt-0">
                <p>
                  You have the right to information, correction, deletion and
                  restriction of the processing of your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
