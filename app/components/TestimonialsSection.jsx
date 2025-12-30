export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Ravi Sharma",
      place: "Ganj Basoda",
      text: "Very professional installation. Electricity bill reduced a lot.",
    },
    {
      name: "Anita Verma",
      place: "Vidisha",
      text: "Good support and subsidy guidance. Highly recommended.",
    },
    {
      name: "Mukesh Jain",
      place: "Nearby Area",
      text: "Quality work and strong structure. Team is very helpful.",
    },
  ];

  return (
    <section
      className="
        py-24
        bg-gradient-to-br from-[#020617] via-[#042a2e] to-[#020617]
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          What Our Clients Say
        </h2>

        <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">
          Trusted by homeowners and businesses across Ganj Basoda and nearby
          regions.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-2xl p-7
                shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                transition-all duration-500
                hover:-translate-y-2
                hover:border-green-400/40
              "
            >
              {/* Stars */}
              <div className="text-green-400 text-lg mb-4">★★★★★</div>

              {/* Review */}
              <p className="text-white/80 text-sm leading-relaxed">
                “{r.text}”
              </p>

              {/* User */}
              <div className="flex items-center mt-6 gap-4">
                <div
                  className="
                    w-12 h-12 rounded-full
                    bg-gradient-to-br from-green-500 to-emerald-400
                    text-white flex items-center justify-center
                    font-bold text-lg shadow-lg
                  "
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{r.name}</h4>
                  <span className="text-xs text-white/60">{r.place}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
