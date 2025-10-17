import Link from 'next/link'

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
      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* ✅ Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Move Your World — <span className="text-orange-400">Fast, Smart, Secure</span>
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          <i>We provide end-to-end courier and logistics solutions designed to keep your business running smoothly.</i>
        </p>
        <div className="flex justify-center gap-5 flex-wrap">
          <Link
            href="/track"
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-md"
          >
            Track Shipment
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
  )
}
