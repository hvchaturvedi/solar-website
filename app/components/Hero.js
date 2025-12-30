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
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Providing Reliable{" "}
          <span className="text-green-400">Solar Energy</span> Solutions
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          गंज बासोदा और विदिशा में भरोसेमंद सोलर इंस्टॉलेशन सेवाएं
        </p>

        <p className="mt-2 text-sm md:text-base text-gray-200">
          Save up to 80–90% on electricity bills with government-approved solar
          systems
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded font-semibold transition"
          >
            Get Free Consultation
          </a>

          <a
            href="https://wa.me/919310078444"
            target="_blank"
            className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}
