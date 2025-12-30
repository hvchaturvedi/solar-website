import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#0b2c3d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-2">
          <span
            className="
              w-3 h-3 rounded-full
              bg-gradient-to-r from-green-400 to-emerald-500
              shadow-[0_0_12px_rgba(34,197,94,0.8)]
              group-hover:scale-125 transition
            "
          />
          <span
            className="
              text-xl md:text-2xl font-extrabold tracking-wide
              bg-gradient-to-r from-green-400 via-emerald-300 to-green-500
              bg-clip-text text-transparent
              group-hover:tracking-widest transition-all duration-300
            "
          >
            Krishna Solar
          </span>
          <span className="text-xs text-green-400 font-semibold tracking-wider">
            ENERGY
          </span>
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "#about" },
            { name: "Rooftop Solar", href: "/rooftop-solar" },
            { name: "Our Services", href: "/services" },
            { name: "Contact Us", href: "#contact" },
            { name: "Our Work", href: "/projects" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="
                relative group transition-all
                hover:text-green-400
              "
            >
              {item.name}

              {/* underline animation */}
              <span
                className="
                  absolute left-0 -bottom-1 h-[2px] w-0
                  bg-gradient-to-r from-green-400 to-emerald-500
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/919310078444"
          target="_blank"
          className="
            relative overflow-hidden
            bg-gradient-to-r from-green-600 to-emerald-500
            px-5 py-2 rounded-full text-sm font-semibold
            transition-all duration-300
            hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]
          "
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
