"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="min-h-screen bg-gray-100 py-20 px-6"> {/* ✅ Added id here */}
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Image
            src="/images/logo1.jpg"
            alt="Delia UG Logo"
            width={100}
            height={100}
            className="mx-auto mb-4 rounded-full"
          />
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            About <span className="text-orange-400">Delia UG</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Delia UG is a Bonn-based logistics company established in 2024,
            focused on delivering structured, technology-driven last-mile
            operations. We help businesses scale efficiently by managing fleets,
            drivers, and operations with transparency and measurable
            performance.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Mission</h2>
            <p className="text-gray-700">
              To deliver reliable fleet and driver management through structured
              operations, transparent communication, and data-backed performance
              — ensuring consistency, trust, and efficiency for every client.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Vision</h2>
            <p className="text-gray-700">
              To be Germany’s most trusted fleet operations partner — empowering
              businesses, drivers, and partners to achieve sustainable growth
              through collaboration and innovation.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            Core Values
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Reliability",
              "Teamwork",
              "Transparency",
              "Innovation & Data",
              "Accountability",
            ].map((value) => (
              <div
                key={value}
                className="px-6 py-4 bg-orange-50 rounded-2xl shadow-md text-gray-900 font-medium"
              >
                {value}
              </div>
            ))}
          </div>
        </div>

        {/* About Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            About Details
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            Delia UG operates as an external logistics partner, offering
            complete fleet outsourcing solutions. From driver management to data
            analytics, our services are designed to optimize routes, increase
            delivery accuracy, and reduce operational costs.
            <br />
            <br />
            With a focus on fairness and transparency, Delia UG builds long-term
            partnerships with both clients and drivers, maintaining high
            operational standards backed by measurable performance data.
          </p>
        </div>
      </div>
    </section>
  );
}
