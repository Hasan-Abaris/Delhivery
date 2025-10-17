import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative mt-3">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* ✅ Logo & Description */}
          <div className="flex items-center md:items-start gap-4">
            {/* ✅ Logo */}
            <Link href="/" className="flex items-center gap-2">
              {/* Image Logo */}
              <Image
                src="/images/favicon.png"
                alt="Courier Connect Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              {/* Text Logo */}
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-orange-400">Delia </span> UG
              </span>
            </Link>
            {/* ✅ Tagline */}
            <p className="text-sm text-white/80 max-w-sm px-15 ">
              Fair, Transparent, and Scalable — Powered by Delia.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center">
            <ul className="flex flex-col md:flex-col gap-3">
              <li>
                <Link
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  href="/solutions"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80 hover:text-white transition-colors text-sm"
                  href="/platform"
                >
                  Platform
                </Link>
              </li>
              <li>
                <button className="text-white/80 hover:text-white transition-colors text-sm">
                  Partners
                </button>
              </li>
              <li>
                <button className="text-white/80 hover:text-white transition-colors text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <div>
            <div className="text-sm font-semibold">Legal</div>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
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
                  Terms of Service
                </Link>
              </li>
              <li>
               <Link href="/Legal/Cookies" className="hover:underline">
                  Cookies Setting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              <li>
                <a href="mailto:hello@seplo.io" className="hover:underline">
                  info@deliag.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:onboarding@seplo.io"
                  className="hover:underline"
                >
                  info@deliaug.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:operations@seplo.io"
                  className="hover:underline"
                >
                  info@deliaug.com
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/seplo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin w-5 h-5 text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3l-3.5 6L7 2H4l5.5 9L4 22h3l4-6 4 6h3l-5.5-9L18 2z"></path>
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M16.5 3c.6 1.9 2 3.5 3.8 4.3v3.1c-1.6-.1-3-.6-4.3-1.4v5.9c0 3.9-3.1 7.1-7 7.1S2.9 18.8 2.9 15c0-3.9 3.1-7.1 7-7.1.4 0 .8 0 1.2.1V11c-.4-.1-.8-.2-1.2-.2-2.4 0-4.3 2-4.3 4.4s1.9 4.4 4.3 4.4 4.3-2 4.3-4.4V3h2.3z"></path>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.41c0-2.37 1.41-3.68 3.56-3.68 1.03 0 2.11.18 2.11.18v2.33h-1.19c-1.17 0-1.53.73-1.53 1.49v1.79h2.6l-.42 2.91h-2.18V22c4.78-.75 8.44-4.91 8.44-9.93z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Impressum Summary */}
        <div className="mt-8 text-[11px] text-white/70 leading-relaxed">
          <div className="font-medium text-white/90 mb-1">
            Impressum (summary)
          </div>
          <div>
            Delia GmbH, Berlin, Germany. Register court: Amtsgericht Berlin
            (tbc), HRB pending. Managing Director(s): pending. VAT ID: pending.
            Contact: contact@Delia.io.
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-white/60">
          © 2025 Abaris. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
