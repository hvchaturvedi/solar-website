"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-black">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-125"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1509391366360-2e959784a276)",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* LEFT CONTENT */}
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Get a Free <span className="text-green-400">Solar</span>{" "}
            Consultation
          </h2>

          <p className="mt-6 text-white/90 max-w-lg">
            Residential & Commercial Solar Solutions across{" "}
            <b>All Over India</b>.
            <br />
            <span className="text-white/70 text-sm">
              (Subsidy available in MP & Delhi)
            </span>
          </p>

          <div className="mt-10 space-y-4 text-white/90 text-lg">
            <p>
              📍 <b>Head Office:</b> Delhi
            </p>

            <p>📞 +91 9310078444</p>
            <p>📞 +91 8178350115</p>
            <p>📞 +91 7974786396</p>
            <p>📞 +91 7000471024</p>

            <p className="text-green-400 font-semibold">
              💬 WhatsApp available
            </p>
          </div>
        </div>

        {/* FORM */}
        <div
          className="relative bg-white/95 p-9 rounded-3xl
          shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
        >
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();

              const name = e.target.name.value;
              const phone = e.target.phone.value;
              const message = e.target.message.value;

              const text =
                `Hello Krishna Solar Energy,%0A%0A` +
                `Name: ${name}%0A` +
                `Phone: ${phone}%0A` +
                `Message: ${message}%0A%0A` +
                `I am interested in solar installation.`;

              window.open(`https://wa.me/919310078444?text=${text}`, "_blank");
            }}
          >
            <input
              name="name"
              required
              className="w-full p-3 rounded-xl border"
              placeholder="Your Name"
            />

            <input
              name="phone"
              required
              className="w-full p-3 rounded-xl border"
              placeholder="Phone Number"
            />

            <textarea
              name="message"
              className="w-full p-3 rounded-xl border"
              rows="4"
              placeholder="Message"
            />

            <button
              type="submit"
              className="w-full bg-green-600 py-3 rounded-xl text-white font-bold
              hover:scale-105 transition"
            >
              Request a Call Back
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
