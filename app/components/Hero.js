export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center"
      style={{
        backgroundImage: "url('/hero/solar-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        {/* Badge */}
        <div
          className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold
          bg-green-500/20 text-green-400 border border-green-400/30"
        >
          Trusted Solar Solutions • MP & Delhi
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Providing Reliable{" "}
          <span className="text-green-400">Solar Energy</span> Solutions
        </h1>

        {/* UPDATED LOCATION LINE */}
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          मध्य प्रदेश और दिल्ली में भरोसेमंद सोलर इंस्टॉलेशन सेवाएं
        </p>

        <p className="mt-1 text-sm md:text-base text-gray-300">
          Serving homes & businesses across <b>Madhya Pradesh</b> and{" "}
          <b>Delhi</b>
        </p>

        {/* Savings */}
        <p className="mt-3 text-sm md:text-base text-gray-200">
          Save up to{" "}
          <span className="text-green-400 font-semibold">80–90%</span> on
          electricity bills with government-approved solar systems
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-green-600 hover:bg-green-700 px-7 py-3 rounded-lg
            font-semibold transition hover:scale-105"
          >
            Get Free Consultation
          </a>

          <a
            href="https://wa.me/919310078444"
            target="_blank"
            className="border border-white/80 px-7 py-3 rounded-lg font-semibold
            hover:bg-white hover:text-black transition"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
