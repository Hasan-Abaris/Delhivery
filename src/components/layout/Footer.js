"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Logo & Description */}
          <div className="flex flex-col md:items-start items-center gap-4 text-center md:text-left">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/favicon.png"
                alt="Delia UG Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-orange-400">Delia </span>UG
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Bonn-based logistics company providing structured, data-driven fleet and driver services.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col md:items-start items-center">
            <h4 className="text-sm font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/track" className="hover:text-white transition-colors">Track</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col md:items-start items-center">
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/Legal/Impressum" className="hover:underline">Impressum</Link></li>
              <li><Link href="/Legal/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/Legal/Terms" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col md:items-start items-center">
            <h4 className="text-sm font-semibold mb-3">Contact</h4>
            <ul className="space-y-1 text-gray-400 text-sm text-center md:text-left">
              <li><a href="mailto:info@deliagroup.eu" className="hover:underline">info@deliagroup.eu</a></li>
              <li><a href="mailto:hr@deliagroup.eu" className="hover:underline">hr@deliagroup.eu</a></li>
            </ul>
            <div className="mt-4 flex gap-2 justify-center md:justify-start flex-wrap">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/delia-ug" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="flex flex-col md:items-start items-center text-center md:text-left">
            <h4 className="text-sm font-semibold mb-3">Our Philosophy</h4>
            <p className="text-gray-400 text-sm mb-2">
              <span className="font-semibold">Mission:</span> Deliver professional fleet and driver services through structured operations, transparent communication, and data-driven performance.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              <span className="font-semibold">Vision:</span> Be the trusted fleet operations partner across Germany, enabling sustainable growth for businesses, drivers, and partners.
            </p>
            <p className="text-gray-400 text-sm">
              <span className="font-semibold">Values:</span> Reliability · Teamwork · Transparency · Innovation & Data
            </p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>Delia UG, Bonn, Germany. All rights reserved © 2025.</p><br />
          <p>Powered by Abaris Software</p>
        </div>
      </div>
    </footer>
  );
}
