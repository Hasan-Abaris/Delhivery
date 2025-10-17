"use client";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden text-white"
      style={{
        backgroundImage: "url('/images/Banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 mt-15"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Reliable. Scalable. Data-Driven Logistics
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Delia UG provides structured fleet solutions and professional driver services
          for businesses seeking reliable, efficient last-mile delivery. Operational
          excellence, transparent communication, and data-driven performance.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-5 flex-wrap">
          <Link
            href="/apply?type=driver"
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-md"
          >
            Apply as Driver
          </Link>
          <Link
            href="/services"
            className="bg-transparent border border-gray-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
