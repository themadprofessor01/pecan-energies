import Link from "next/link";
import { Waves, Anchor, BarChart3, ArrowRight } from "lucide-react";

const items = [
  {
    icon: Waves,
    title: "Pecan Field Development",
    desc: "Operating the DWT/CTP block with a 50% stake in ultra-deep waters 115km offshore Ghana at depths of 2,400–2,700 meters.",
  },
  {
    icon: Anchor,
    title: "FPSO & Subsea Systems",
    desc: "Utilizing a Floating Production Storage and Offloading vessel paired with advanced subsea production systems for safe, efficient extraction.",
  },
  {
    icon: BarChart3,
    title: "Final Investment Decision",
    desc: "Plan of Development approved by Ghanaian authorities in July 2023. Actively pursuing FID to unlock Phase 1a+1b production of 268 million barrels.",
  },
];

export default function Operations() {
  return (
    <section className="py-28 bg-[#060A14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Our Operations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Deepwater Energy
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for a Prosperous Ghana
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Developing one of Ghana's most significant offshore oil fields with technical excellence and a commitment to local economic growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="group p-8 bg-[#0D1525] border border-white/5 hover:border-[#C9A84C]/30 transition-all duration-300 hover:bg-[#111827]"
            >
              <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/10 transition-colors">
                <item.icon className="text-[#C9A84C]" size={22} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Block ownership bar */}
        <div className="bg-[#0D1525] border border-white/5 p-8">
          <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-6">
            DWT/CTP Block Ownership
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {[
              { name: "Pecan Energies (Operator)", pct: 50, color: "#C9A84C" },
              { name: "Lukoil Overseas Ghana", pct: 38, color: "#4A6FA5" },
              { name: "GNPC", pct: 10, color: "#2D8B55" },
              { name: "Fueltrade", pct: 2, color: "#7A5C3A" },
            ].map((p) => (
              <div key={p.name} className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm font-medium">{p.name}</span>
                  <span className="text-sm font-bold" style={{ color: p.color }}>
                    {p.pct}%
                  </span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${p.pct}%`, backgroundColor: p.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/operations"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#C9A84C] text-[#C9A84C] uppercase tracking-widest text-sm font-semibold hover:bg-[#C9A84C] hover:text-[#0A0F1E] transition-all"
          >
            Full Operations Overview <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
