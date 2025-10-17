import Link from "next/link";
import { Truck, UserCheck, BarChart, Handshake, ArrowRight } from "lucide-react";

export default function JoinNetwork() {
  return (
    <section
      id="network-join"
      className="relative min-h-screen w-full py-20 text-black"
    >
      <div className="container mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
          Join the Network —{" "}
          <span className="text-orange-400">as a Driver or Partner</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
          Delia UG provides structured fleet solutions and professional driver services
          for businesses seeking reliable, efficient last-mile delivery.  
          Transparent, fair, and data-driven operations for drivers, fleet owners, and partners.
        </p>

        {/* Apply Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            href="/apply?type=driver"
            className="inline-flex items-center justify-center gap-2 h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Apply as Driver <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-orange-400" />
            </div>
            <p className="text-lg font-medium text-gray-500">
              Fleet Solutions — Turnkey fleet hiring and operations.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-orange-400" />
            </div>
            <p className="text-lg font-medium text-gray-500">
              Driver & Partner Network — Vetted drivers and trusted partners.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart className="w-8 h-8 text-orange-400" />
            </div>
            <p className="text-lg font-medium text-gray-500">
              Fleet Insights — Data-supported performance and route tracking.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="w-8 h-8 text-orange-400" />
            </div>
            <p className="text-lg font-medium text-gray-500">
              Transparent Collaboration — Clear contracts and open communication.
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-gray-400">
          Have questions?{" "}
          <Link
            href="/contact"
            className="text-orange-400 hover:text-orange-300 underline"
          >
            Contact us anytime
          </Link>
        </p>
      </div>
    </section>
  );
}
