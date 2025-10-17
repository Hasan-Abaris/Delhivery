"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Image
            src="/images/favicon.png"
            alt="Delia UG Logo"
            width={100}
            height={100}
            className="mx-auto mb-4 rounded-full"
          />
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            About <span className="text-orange-400">Delia UG</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Bonn-based logistics company specializing in structured, data-driven last-mile fleet operations. Founded in 2024, we enable businesses to outsource fleet management and focus on growth while we deliver consistent, measurable performance.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Mission</h2>
            <p className="text-gray-700">
              To deliver professional fleet and driver services through structured operations, transparent communication, and data-driven performance.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Vision</h2>
            <p className="text-gray-700">
              To be the trusted fleet operations partner across Germany, enabling sustainable growth for businesses, drivers, and partners.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Core Values</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Reliability", "Teamwork", "Transparency", "Innovation & Data"].map((value) => (
              <div key={value} className="px-6 py-4 bg-orange-50 rounded-2xl shadow-md text-gray-900 font-medium">
                {value}
              </div>
            ))}
          </div>
        </div>

        {/* Fleet Performance Focus */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Fleet Performance Focus</h2>
          <ul className="space-y-4 text-gray-700 max-w-3xl mx-auto list-disc list-inside">
            <li><strong>On-Time Delivery Performance:</strong> punctual routes and deliveries.</li>
            <li><strong>Fleet Utilization:</strong> smarter use of vehicles and resources.</li>
            <li><strong>Operational Transparency:</strong> real-time updates and clear reporting.</li>
          </ul>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fleet Hiring & Operations</h3>
              <p className="text-gray-700">Full fleet recruitment, licensing checks, and operational management.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Driver Management & Partner Network</h3>
              <p className="text-gray-700">Vetted drivers, training support, scheduling and payroll coordination.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fleet Data & Reporting</h3>
              <p className="text-gray-700">Performance monitoring, insurance coordination, and safety management.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Scalable Solutions</h3>
              <p className="text-gray-700">Flexible operations that grow with your business.</p>
            </div>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Why Work With Us</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            Delia acts as an external operations partner so companies don’t have to build internal fleet management from scratch. We deliver dependable operations, data-supported improvements, and a transparent partnership model that scales as your business grows.
          </p>
        </div>

        {/* For Drivers & Fleet Owners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">For Drivers & Fleet Owners</h2>
          <ul className="text-gray-700 max-w-3xl mx-auto list-disc list-inside space-y-2">
            <li>Join a reliable logistics network.</li>
            <li>Clear coordination, regular work, and fast payments.</li>
            <li>Long-term opportunities and performance feedback.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
