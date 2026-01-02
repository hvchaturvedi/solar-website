"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyChooseSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const points = [
    {
      title: "Instant EMI & Easy Financing",
      desc: "Flexible EMI options available for residential and commercial solar projects. Government subsidy available as per applicable state policies.",
      icon: "💳",
    },
    {
      title: "Strong & Weather-Resistant Structures",
      desc: "High-quality galvanized solar mounting structures designed to withstand strong winds, rain, and harsh weather conditions.",
      icon: "🌪️",
    },
    {
      title: "5-Year Maintenance Support",
      desc: "Dedicated maintenance support including system health checks, cleaning guidance, and technical assistance.",
      icon: "🛠️",
    },
    {
      title: "Subsidy & Documentation Assistance",
      desc: "Complete assistance with documentation and approval process. Residential subsidy available in selected states as per government norms.",
      icon: "📄",
    },
    {
      title: "Pan India Commercial Installations",
      desc: "Commercial solar installations for hospitals, schools, offices, factories and institutions across India.",
      icon: "🇮🇳",
    },
    {
      title: "End-to-End Solar Solutions",
      desc: "From site survey and system design to installation and after-sales support — we manage everything seamlessly.",
      icon: "⚡",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden text-white"
    >
      {/* DARK GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#021b33] via-[#042a4a] to-[#021b33]" />

      {/* DIAGONAL STRIPES */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 8px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Why Choose Krishna Solar Energy
        </h2>

        <p className="mt-4 text-center text-white/80 max-w-2xl mx-auto">
          Trusted solar solutions for residential and commercial projects with
          reliable execution and nationwide reach.
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((item, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`group relative rounded-2xl p-7
              bg-white/10 backdrop-blur-md
              border border-white/10
              transition-all duration-700
              hover:-translate-y-3 hover:bg-white/15
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              {/* glow border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-green-400/40 transition" />

              {/* icon */}
              <div
                className="w-14 h-14 rounded-xl
                bg-gradient-to-br from-green-500 to-emerald-400
                text-white text-3xl flex items-center justify-center
                shadow-lg mb-5
                group-hover:scale-110 transition"
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold">{item.title}</h3>

              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
