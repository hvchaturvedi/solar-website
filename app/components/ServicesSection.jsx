"use client";

import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
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

  const services = [
    {
      title: "Residential Rooftop Solar",
      image: "/image1.jpg",
      desc: "Solar systems for homes with maximum savings and government subsidy.",
      hindi:
        "घरों के लिए रूफटॉप सोलर सिस्टम – अधिकतम बचत और सरकारी सब्सिडी के साथ",
    },
    {
      title: "Commercial Solar",
      image: "/image2.jpg",
      desc: "High-capacity solar solutions for shops, factories, and offices.",
      hindi:
        "दुकानों, फैक्ट्रियों और ऑफिसों के लिए उच्च क्षमता वाले सोलर समाधान",
    },
    {
      title: "Solar Street Lights",
      image: "/image3.jpg",
      desc: "Energy-efficient solar lighting for streets and societies.",
      hindi: "सड़कों और कॉलोनियों के लिए ऊर्जा-सक्षम सोलर स्ट्रीट लाइट",
    },
    {
      title: "Maintenance & AMC",
      image: "/image4.jpg",
      desc: "Complete maintenance, cleaning, and long-term system care.",
      hindi: "पूर्ण रखरखाव, सफाई और दीर्घकालिक सेवा (AMC)",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden
      bg-gradient-to-br from-[#020617] via-[#041f2e] to-[#020617]"
    >
      {/* animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,197,94,0.08),rgba(14,165,233,0.06),rgba(34,197,94,0.08))] animate-bgMove" />

      {/* glow blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-300/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Our Solar Services / हमारी सेवाएं
        </h2>

        <p className="mt-4 text-center text-white/80 max-w-2xl mx-auto">
          Complete solar solutions designed for homes, businesses, and public
          infrastructure with long-term reliability.
        </p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-xl
              rounded-3xl overflow-hidden shadow-md transition-all duration-700
              hover:-translate-y-3 hover:shadow-2xl
              ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-700">{service.desc}</p>

                <p className="mt-1 text-xs text-gray-500">{service.hindi}</p>
              </div>

              {/* hover glow border */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-green-400/40 transition" />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
    </section>
  );
}
