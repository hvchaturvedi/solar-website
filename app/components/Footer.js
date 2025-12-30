export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#020617] via-[#041f2e] to-[#020617] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-semibold text-white">
            Krishna Solar Energy
          </h3>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            By Krishna Trading & Co. <br />
            Trusted solar solutions provider in Ganj Basoda, Vidisha and nearby
            regions of Madhya Pradesh.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 transition">
              Residential Rooftop Solar
            </li>
            <li className="hover:text-green-400 transition">
              Commercial Solar Systems
            </li>
            <li className="hover:text-green-400 transition">
              Solar Street Lights
            </li>
            <li className="hover:text-green-400 transition">
              Maintenance & AMC
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm text-gray-400">
            📍 Ganj Basoda, Madhya Pradesh
          </p>

          <p className="mt-3 text-sm">
            📞{" "}
            <a
              href="tel:+919310078444"
              className="hover:text-green-400 transition"
            >
              +91 9310078444
            </a>
          </p>

          <p className="mt-3 text-sm">
            💬{" "}
            <a
              href="https://wa.me/919310078444"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              WhatsApp Chat
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Krishna Solar Energy. All rights reserved.
      </div>
    </footer>
  );
}
