"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[#e6f9f0] via-[#dff4ff] to-[#ffffff]"
    >
      {/* subtle dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cfeee0_1px,transparent_1px)] bg-[size:26px_26px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE */}
        <div
          className={`relative transition-all duration-[1200ms] ease-out
          ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"
          }`}
        >
          {/* background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(#d6f1e4_1px,transparent_1px),linear-gradient(90deg,#d6f1e4_1px,transparent_1px)] bg-[size:40px_40px] rounded-2xl" />

          {/* images */}
          <div className="relative grid gap-6 p-6">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d"
              alt="Solar Panels"
              className="rounded-2xl shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d"
              alt="Rooftop Solar"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* rotating logo */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            rounded-full p-5 bg-white/90 backdrop-blur-md
            shadow-[0_25px_70px_rgba(0,0,0,0.25)]
            transition-all duration-[1400ms]
            ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          >
            <div className="logo-rotate-wrapper">
              <img
                src="/logo.png"
                alt="Krishna Solar Energy"
                className="w-28 h-28 object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`transition-all duration-[1200ms] delay-200 ease-out
          ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"
          }`}
        >
          <p className="text-green-600 font-semibold mb-3 tracking-wide">
            ABOUT COMPANY
          </p>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Power Your World with Clean,
            <br /> Renewable Energy
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Krishna Solar Energy specializes in off-grid, on-grid, and hybrid
            solar energy solutions. We work with residential, commercial, and
            industrial clients to deliver reliable, cost-effective solar
            installations.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Over the years, we have successfully completed hundreds of
            installations, helping customers reduce electricity bills and carbon
            footprints with government-approved solar systems.
          </p>

          <ul className="mt-6 space-y-3 text-gray-800">
            <li>✅ Rooftop & Ground-mounted solar systems</li>
            <li>✅ Off-grid, On-grid & Hybrid solutions</li>
            <li>✅ Net-metering & subsidy assistance</li>
            <li>✅ Long-term performance warranty</li>
          </ul>

          <a
            href="#contact"
            className="inline-block mt-8 bg-green-600 hover:bg-green-700
            text-white px-7 py-3 rounded-xl font-semibold transition-all
            hover:scale-105 hover:shadow-lg"
          >
            Get Free Consultation
          </a>
        </div>
      </div>

      {/* animation */}
    </section>
  );
}
