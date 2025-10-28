"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col md:items-start items-center gap-4 text-center md:text-left">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo1.jpg"
                alt="Delia UG Logo"
                width={50}
                height={50}
                className="rounded-full shadow-md"
              />
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-orange-400">Delia </span>UG
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Bonn-based logistics company providing structured, data-driven
              fleet and driver services across Germany and Europe.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:items-start items-center">
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#network-join"
                  className="hover:text-white transition-colors"
                >
                  Join Network
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col md:items-start items-center">
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/Legal/Impressum" className="hover:underline">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/Legal/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/Legal/Terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col md:items-start items-center">
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-1 text-gray-400 text-sm text-center md:text-left">
              <li>
                <a
                  href="mailto:info@deliagroup.eu"
                  className="hover:text-white transition-colors"
                >
                  info@deliagroup.eu
                </a>
              </li>
              <li>
                <a
                  href="mailto:hr@deliagroup.eu"
                  className="hover:text-white transition-colors"
                >
                  hr@deliagroup.eu
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3 justify-center md:justify-start">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/delia-ug"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                aria-label="Delia UG on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="flex flex-col md:items-start items-center text-center md:text-left">
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">
              About Us
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="font-semibold text-gray-300">Values:</span>{" "}
              Reliability · Teamwork · Transparency · Innovation · Data-Driven
              Growth
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>Delia UG · Bonn, Germany — All rights reserved © 2025</p>
          <p className="mt-1">Powered by Abaris Software</p>
        </div>
      </div>
    </footer>
  );
}