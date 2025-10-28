import Link from "next/link";
import { Truck, UserCheck, BarChart, Handshake, ArrowRight } from "lucide-react";

export default function JoinNetwork() {
  return (
    <section
      id="network-join"
      className="relative w-full py-20 text-black bg-white"
    >
      <div className="container mx-auto max-w-6xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Join the Network —{" "}
          <span className="text-orange-500">as a Driver or Partner</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Delia UG provides structured fleet solutions and professional driver
          services for businesses seeking reliable, efficient last-mile delivery.{" "}
          Transparent, fair, and data-driven operations for drivers, fleet owners,
          and partners.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          {[
            {
              icon: <Truck className="w-8 h-8 text-orange-500" />,
              text: "Fleet Solutions — Turnkey fleet hiring and operations.",
            },
            {
              icon: <UserCheck className="w-8 h-8 text-orange-500" />,
              text: "Driver & Partner Network — Vetted drivers and trusted partners.",
            },
            {
              icon: <BarChart className="w-8 h-8 text-orange-500" />,
              text: "Fleet Insights — Data-supported performance and route tracking.",
            },
            {
              icon: <Handshake className="w-8 h-8 text-orange-500" />,
              text: "Transparent Collaboration — Clear contracts and open communication.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <p className="text-lg font-medium text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Why Work With Us */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Why Work With Us
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Delia acts as an external operations partner so companies don’t have
            to build internal fleet management from scratch. We deliver dependable
            operations, data-supported improvements, and a transparent partnership
            model that scales as your business grows.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Join Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* For Drivers & Fleet Owners */}
        <div className="mt-20 bg-orange-50 py-12 px-6 rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            For Drivers & Fleet Owners
          </h3>
          <ul className="text-gray-700 text-lg space-y-2 max-w-2xl mx-auto text-left sm:text-center">
            <li>• Join a reliable logistics network.</li>
            <li>• Clear coordination, regular work, and fast payments.</li>
            <li>• Long-term opportunities and performance feedback.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
