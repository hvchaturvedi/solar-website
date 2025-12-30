export default function SavingsTable() {
  const rows = [
    { size: "3kW", emi: "₹3,200", saving: "₹3,700+" },
    { size: "4kW", emi: "₹4,300", saving: "₹4,900+" },
    { size: "5kW", emi: "₹5,500", saving: "₹6,900+" },
  ];

  return (
    <section
      className="
        py-24
        bg-gradient-to-br from-[#020617] via-[#041f2e] to-[#020617]
        text-gray-200
      "
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Solar Savings Calculator
        </h2>

        <p className="mt-4 text-center text-gray-400">
          Compare your monthly EMI with estimated electricity savings
        </p>

        {/* Table Wrapper */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-sm md:text-base">
            {/* Header */}
            <thead className="bg-gradient-to-r from-green-600 to-emerald-500 text-white">
              <tr>
                <th className="p-4 text-left">System Size</th>
                <th className="p-4 text-left">Monthly EMI (5 yrs)</th>
                <th className="p-4 text-left">Monthly Savings</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="bg-[#020617]/70 backdrop-blur-md">
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className="
                    border-t border-white/10
                    hover:bg-white/5 transition
                  "
                >
                  <td className="p-4 font-semibold text-white">{r.size}</td>
                  <td className="p-4 text-gray-300">{r.emi}</td>
                  <td className="p-4 font-semibold text-green-400">
                    {r.saving}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
