"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-black">
      {/* MOVING BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bgSlowMove scale-125"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1509391366360-2e959784a276)",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* MOVING GRID */}
      <div className="absolute inset-0 solar-grid pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* LEFT */}
        <div className="text-white animate-fadeUp">
          <h2 className="text-5xl font-bold">
            Get a Free <span className="text-green-400">Solar</span>{" "}
            Consultation
          </h2>

          <p className="mt-6 text-white/90 max-w-lg">
            Install solar panels for your home or business with expert guidance,
            subsidy support, and long-term savings.
          </p>

          <div className="mt-10 space-y-4">
            <p>
              📍 <b>Ganj Basoda, Madhya Pradesh</b>
            </p>
            <p className="text-green-400 font-semibold">📞 +91 9310078444</p>
            <p className="text-green-400 font-semibold">💬 WhatsApp Chat</p>
          </div>
        </div>

        {/* FORM */}
        <div
          className="relative bg-white/95 p-9 rounded-3xl
          shadow-[0_40px_120px_rgba(0,0,0,0.9)]
          animate-floatSlow"
        >
          <form className="space-y-5">
            <input
              className="w-full p-3 rounded-xl border"
              placeholder="Your Name"
            />
            <input
              className="w-full p-3 rounded-xl border"
              placeholder="Phone Number"
            />
            <textarea
              className="w-full p-3 rounded-xl border"
              rows="4"
              placeholder="Message"
            />
            <button className="w-full bg-green-600 py-3 rounded-xl text-white font-bold hover:scale-105 transition">
              Request a Call Back
            </button>
          </form>
        </div>
      </div>

    </section>
  );
}
