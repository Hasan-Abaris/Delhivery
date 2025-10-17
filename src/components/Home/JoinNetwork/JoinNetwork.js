import Link from "next/link";
import { Clock, Shield, Headphones, ArrowRight } from "lucide-react";

export default function JoinNetwork() {
  return (
    <section
      id="network-join"
      className="relative min-h-screen w-full py-20  text-black"
    >
      <div className="container mx-auto max-w-5xl px-6 text-center">
        {/* 🧭 Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
          Join the Network —{" "}
          <span className="text-orange-400">as a Courier or Fleet</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
          Transparent, network-driven logistics built on shared-economy
          partnerships — fair for couriers, scalable for fleets.
        </p>

        {/* 🚚 Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            href="/apply?type=courier"
            className="inline-flex items-center justify-center gap-2 h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Apply as Courier <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        {/* 💎 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
            <p className="text-lg font-medium text-gray-500">
              For Couriers: Flexible routes and transparent contracts.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-orange-400" />
            </div>
            <p className="text-lg font-medium text-gray-500">
              For Fleets: Route assignment with zone/skill matching.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-8 h-8 text-orange-400" />
            </div>
            <p className="text-lg font-medium text-gray-500">
              For Both: Dedicated support whenever you need it.
            </p>
          </div>
        </div>

        {/* 📞 Footer text */}
        <p className="text-gray-400">
          Have questions?{" "}
          <Link
            href="/contact"
            className="text-orange-400 hover:text-orange-300 underline"
          >
            Contact us anytime
          </Link>{" "}
          or visit our FAQ.
        </p>
      </div>
    </section>
  );
}
