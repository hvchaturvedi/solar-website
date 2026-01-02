"use client";

import { useState } from "react";

export default function ProjectsSection() {
  const [activeImage, setActiveImage] = useState(null);

  const projects = [
    {
      src: "/projects/project1.jpg",
      alt: "Residential rooftop solar installation",
    },
    { src: "/projects/project2.jpg", alt: "Solar panel mounting structure" },
    {
      src: "/projects/project3.jpg",
      alt: "Rooftop solar system",
    },
    {
      src: "/projects/project4.jpg",
      alt: "Solar panel structure installation",
    },
    {
      src: "/projects/project5.jpg",
      alt: "Large scale solar plant installation",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden text-white"
    >
      {/* BACKGROUND */}
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
          Our Projects / हमारे प्रोजेक्ट्स
        </h2>

        <p className="mt-3 text-center text-white/80 max-w-2xl mx-auto">
          Real solar installations completed by Krishna Solar Energy across
          India.
        </p>

        {/* GALLERY */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(project)}
              className="group cursor-pointer overflow-hidden rounded-2xl
              bg-white text-gray-900 shadow-lg
              hover:scale-[1.02] transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover
                  group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-5 font-medium text-sm">{project.alt}</div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="mt-4 text-center text-white text-sm">
              {activeImage.alt}
            </p>

            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 text-white text-2xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
