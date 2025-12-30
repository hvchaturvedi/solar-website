"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Rooftop Solar", href: "/rooftop-solar" },
    { name: "Our Services", href: "/services" },
    { name: "Our Work", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[#0b2c3d] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/logo-small.png"
            alt="Krishna Solar Logo"
            className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
          />

          <span className="text-xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Krishna Solar
          </span>

          <span className="text-xs text-green-400 font-semibold">ENERGY</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {menu.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="relative hover:text-green-400 transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/919310078444"
          target="_blank"
          className="hidden md:block bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-sm font-semibold"
        >
          WhatsApp
        </a>

        {/* MOBILE HAMBURGER */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0b2c3d] border-t border-white/10 px-6 py-4 space-y-4">
          {menu.map((item, i) => (
            <a
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm hover:text-green-400 transition"
            >
              {item.name}
            </a>
          ))}

          <a
            href="https://wa.me/919310078444"
            target="_blank"
            className="block mt-3 bg-green-600 text-center py-2 rounded-full text-sm font-semibold"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
