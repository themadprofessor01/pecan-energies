import type { Metadata } from "next";
import Image from "next/image";
import { Waves, Anchor, Map, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Operations | Pecan Energies",
  description: "Pecan Energies operates the DWT/CTP block offshore Ghana — developing the Pecan field in ultra-deep waters.",
};

export default function OperationsPage() {
  return (
    <>
      <section className="pt-40 pb-24 bg-[#0A0F1E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Operations</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Deepwater Excellence<br />
            <span style={{ background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Offshore Ghana
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Pecan Energies operates the Deepwater Tano Cape Three Points (DWT/CTP) block with a 50% operator stake, developing one of Ghana's most significant offshore oil fields in ultra-deep waters.
          </p>
        </div>
      </section>

      {/* Key specs */}
      <section className="py-16 bg-[#060A14] border-y border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Water Depth", value: "2,400–2,700m", sub: "Ultra-deep offshore" },
              { label: "Distance Offshore", value: "115 km", sub: "From Ghana coastline" },
              { label: "Operator Stake", value: "50%", sub: "DWT/CTP block" },
              { label: "Total CAPEX", value: "USD 3.5B", sub: "Phase 1a+1b" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold mb-2"
                  style={{ background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {s.value}
                </div>
                <div className="text-white font-semibold text-sm uppercase tracking-wide mb-1">{s.label}</div>
                <div className="text-gray-500 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pecan field */}
      {/* Operations photo strip */}
      <section className="bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6 pt-16">
          <div className="grid grid-cols-3 gap-2 h-56">
            {["what-we-do-2.jpg","what-we-do-3.jpg","what-we-do-4.jpg"].map((img, i) => (
              <div key={i} className="relative overflow-hidden">
                <Image src={`/images/${img}`} alt="Pecan Energies operations" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#0A0F1E]/30" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">The Pecan Field</div>
              <h2 className="text-4xl font-bold text-white mb-6">Ghana's Deepwater Prize</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The Pecan field is located in the DWT/CTP block, approximately 115 kilometres offshore Ghana in ultra-deep waters ranging from 2,400 to 2,700 meters. The full contract area holds recoverable resource potential of approximately 550 million barrels of oil.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Phase 1a+1b of the development targets 268 million barrels of production. The Plan of Development received approval from Ghanaian authorities on July 3, 2023, and the company is actively pursuing a Final Investment Decision (FID).
              </p>
              <div className="space-y-4">
                {[
                  "FPSO (Floating Production Storage and Offloading) vessel",
                  "Subsea production systems",
                  "Lean organisational structure leveraging contractor partnerships",
                  "Technology transfer and skills development for Ghanaians",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full mt-2 shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: Waves, title: "Ultra-Deep Water Operations", desc: "Operating in water depths of 2,400–2,700 meters demands world-class engineering and safety practices. Our teams are equipped with deep expertise in subsea and FPSO operations." },
                { icon: Anchor, title: "FPSO Technology", desc: "The Pecan field will use a Floating Production Storage and Offloading vessel — a self-contained production platform enabling safe extraction, storage and export of crude oil." },
                { icon: Map, title: "Strategic Location", desc: "Located 115km offshore Ghana, the DWT/CTP block sits within one of West Africa's most prolific deepwater hydrocarbon provinces." },
                { icon: Zap, title: "Final Investment Decision", desc: "With the Plan of Development approved, we are advancing toward FID — the milestone that will unlock full field development and production." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-6 bg-[#0D1525] border border-white/5 hover:border-[#C9A84C]/20 transition-colors">
                  <div className="w-10 h-10 border border-[#C9A84C]/30 flex items-center justify-center shrink-0">
                    <item.icon className="text-[#C9A84C]" size={18} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-[#060A14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Block Partners</div>
            <h2 className="text-4xl font-bold text-white">DWT/CTP Joint Venture</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Pecan Energies", role: "Operator", pct: "50%", highlight: true },
              { name: "Lukoil Overseas Ghana", role: "Partner", pct: "38%", highlight: false },
              { name: "GNPC", role: "Ghana National Petroleum Corporation", pct: "10%", highlight: false },
              { name: "Fueltrade Limited", role: "Partner", pct: "2%", highlight: false },
            ].map((p, i) => (
              <div key={i} className={`p-8 border text-center ${p.highlight ? "border-[#C9A84C]/40 bg-[#C9A84C]/5" : "border-white/5 bg-[#0D1525]"}`}>
                <div className="text-4xl font-black mb-3"
                  style={{ background: "linear-gradient(135deg, #A07830, #C9A84C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {p.pct}
                </div>
                <div className="text-white font-bold mb-1">{p.name}</div>
                <div className="text-gray-500 text-xs">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
