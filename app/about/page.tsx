import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Are | Pecan Energies",
  description: "Learn about Pecan Energies — our history, vision, mission, values and leadership team.",
};

const values = [
  { title: "Value Creating", desc: "Unlock prosperity through expertise and local economic growth." },
  { title: "Ambitious", desc: "High-performing, entrepreneurial, innovation-focused." },
  { title: "Respectful", desc: "Team-oriented, culturally sensitive, people-focused." },
  { title: "Transparent", desc: "Integrity-driven with zero tolerance for corruption." },
];

const milestones = [
  { year: "2018", event: "Founded as Aker Energy in June 2018 following acquisition of the DWT/CTP block." },
  { year: "2021", event: "Africa Finance Corporation (AFC) acquires full ownership and renames to Pecan Energies." },
  { year: "2023", event: "Plan of Development approved by Ghanaian authorities on July 3rd." },
  { year: "2024", event: "2024 Sustainability Report published, PISP programme expanded." },
  { year: "2026", event: "New Group CEO appointed. Advancing towards Final Investment Decision (FID)." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-[#0A0F1E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Who We Are</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Pan-African Energy,<br />
            <span style={{ background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Built for Africa
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Pecan Energies is a Pan-African offshore oil and gas operator headquartered in Accra, Ghana. We are fully owned by Africa Finance Corporation and are committed to developing Ghana's offshore resources for the benefit of all Ghanaians.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#060A14]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-[#0D1525] border border-[#C9A84C]/20">
            <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Our Vision</div>
            <p className="text-white text-xl font-semibold leading-relaxed">
              "Building a Pan-African oil and gas operator of choice in offshore deep waters of Ghana."
            </p>
          </div>
          <div className="p-10 bg-[#0D1525] border border-white/5">
            <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Our Mission</div>
            <p className="text-white text-xl font-semibold leading-relaxed">
              "Produce resources in a safe, efficient and environmentally responsible manner for the mutual benefit of the Ghanaian people, the company and partners."
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Our Values</div>
            <h2 className="text-4xl font-bold text-white">The VART Framework</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 bg-[#0D1525] border border-white/5 hover:border-[#C9A84C]/30 transition-colors">
                <CheckCircle className="text-[#C9A84C] mb-4" size={24} />
                <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="governance" className="py-24 bg-[#060A14]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Our History</div>
            <h2 className="text-4xl font-bold text-white">Key Milestones</h2>
          </div>
          <div className="relative border-l border-[#C9A84C]/30 pl-10 space-y-10">
            {milestones.map((m, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[2.85rem] w-5 h-5 rounded-full border-2 border-[#C9A84C] bg-[#0A0F1E]" />
                <div className="text-[#C9A84C] font-bold text-sm uppercase tracking-widest mb-1">{m.year}</div>
                <p className="text-gray-300 leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFC */}
      <section className="py-20 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block border border-[#C9A84C]/20 bg-[#0D1525] p-12 max-w-2xl">
            <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Ownership</div>
            <h2 className="text-3xl font-bold text-white mb-4">Africa Finance Corporation</h2>
            <p className="text-gray-400 leading-relaxed">
              Pecan Energies is fully owned by the Africa Finance Corporation (AFC), a multilateral development finance institution financing and developing infrastructure across Africa. AFC's backing enables us to combine world-class financial strength with Pan-African development purpose.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
