"use client";
import React from "react";

export default function LegalNotice() {
  return (
    <div className="container mx-auto px-6 py-16 ">
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Legal Notice</h1>

        <div className="grid gap-6">
          {/* Company */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Company
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="font-semibold">Delia UG</p>
            </div>
          </div>

          {/* Address */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Address
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-1">
              <p>Bonn</p>
              <p>Germany</p>
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Contact
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-1">
              <p>Phone: +91-8851746286</p>
              <p>Email:info@deliaug.com</p>
            </div>
          </div>

          {/* Legal Info */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Legal Information
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-2">
              <p>Register Court: Amtsgericht Berlin</p>
              <p>Commercial Register Number: HRB (pending)</p>
              <p>VAT ID: DE (pending)</p>
              <p>Managing Director: (to be added)</p>
              <br />
              <p className="font-medium">
                Responsible for content according to § 55 para. 2 RStV
              </p>
              <p>Delia GmbH</p>
              <p>Sample Street 123</p>
              <p>10115 Berlin, Germany</p>
            </div>
          </div>

          {/* Liability Disclaimer */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Liability Disclaimer
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">
                Despite careful content control, we assume no liability for the
                content of external links. The operators of the linked pages are
                solely responsible for their content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
