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
            Head Office: Delhi <br />
            Commercial solar projects across India. <br />
            Residential subsidy available in MP & Delhi.
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
              Commercial Solar (Hospitals, Schools, Offices, Factories)
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
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>

          <p className="text-sm text-gray-400">📍 Delhi (Head Office)</p>

          <p className="mt-3 text-sm">📞 +91 9310078444</p>
          <p className="mt-2 text-sm">📞 +91 8178350115</p>
          <p className="mt-2 text-sm">📞 +91 7974786396</p>
          <p className="mt-2 text-sm">📞 +91 7000471024</p>

          
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Krishna Solar Energy. All rights reserved.
      </div>
    </footer>
  );
}
