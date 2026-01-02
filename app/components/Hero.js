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
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Providing Reliable{" "}
          <span className="text-green-400">Solar Energy</span> Solutions
        </h1>

        {/* Hindi + Coverage */}
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Residential & Commercial Solar Solutions – All Over India
        </p>

        <p className="mt-2 text-sm md:text-base text-gray-200 max-w-2xl">
          Homes, Hospitals, Schools, Offices, Factories & Industries.
          <br />
          Government Subsidy available in <b>MP & Delhi</b>.
        </p>

        {/* Trust badges */}
        <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/90">
          <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur">
            ✔ Residential Solar – Local Service
          </span>
          <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur">
            ✔ Commercial Solar – PAN India
          </span>
          <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur">
            ✔ Govt. Approved Systems
          </span>
        </div>

        {/* CTA */}
        <div className="mt-7 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded font-semibold transition hover:scale-105"
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
