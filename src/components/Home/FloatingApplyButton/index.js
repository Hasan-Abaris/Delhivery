"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FloatingApplyButton() {
  return (
    <Link
      href="/apply"
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-4 rounded-full shadow-xl flex items-center gap-2 animate-bounce hover:animate-none transition-all duration-300"
      aria-label="Apply for a job"
    >
      Apply Now <ArrowRight className="w-5 h-5" />
    </Link>
  );
}
