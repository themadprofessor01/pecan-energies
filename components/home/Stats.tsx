const stats = [
  { value: "550M", label: "Barrels Recoverable", sub: "Full contract area potential" },
  { value: "USD 3.5B", label: "Total CAPEX", sub: "Phase 1a+1b development" },
  { value: "268M", label: "Phase 1 Barrels", sub: "Expected production" },
  { value: "2,700m", label: "Water Depth", sub: "Ultra-deep offshore Ghana" },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-[#060A14] border-y border-[#C9A84C]/15">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center border-r border-white/5 last:border-0 px-4"
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-2 tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div className="text-white font-semibold text-sm uppercase tracking-wide mb-1">
                {s.label}
              </div>
              <div className="text-gray-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
