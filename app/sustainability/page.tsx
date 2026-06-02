import type { Metadata } from "next";
import { Shield, Leaf, Users, BookOpen, Heart, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability | Pecan Energies",
  description: "Pecan Energies' commitment to responsible energy development, HSSE, community empowerment and a just energy transition for Africa.",
};

const pillars = [
  { icon: Shield, title: "Health, Safety, Security & Environment", desc: "HSSE is central to every aspect of our operations. We maintain the highest international standards to protect our people, communities and the environment." },
  { icon: Leaf, title: "Environmental Responsibility", desc: "We are committed to developing Ghana's resources within a framework of environmental stewardship and a just energy transition that serves Africa." },
  { icon: Users, title: "Community Empowerment", desc: "Through skills development, local content programmes and the PISP initiative, we invest in the next generation of Ghanaian energy professionals." },
  { icon: BookOpen, title: "Corporate Governance", desc: "Transparent, ethical governance with zero tolerance for corruption. Our policies ensure accountability to all stakeholders." },
  { icon: Heart, title: "Social Investment", desc: "We support healthcare, education and community development initiatives — including Breast Cancer Awareness programmes — in our operational communities." },
  { icon: Globe, title: "Just Energy Transition", desc: "We advocate for Africa to have agency in its own energy transition, ensuring development and prosperity are not sacrificed in the process." },
];

export default function SustainabilityPage() {
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
          <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Sustainability</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Responsible Business,<br />
            <span style={{ background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Lasting Impact
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Sustainability is not an afterthought at Pecan Energies — it is embedded in our strategy, operations, and culture. Our 2024 Sustainability Report reflects our progress and our commitments going forward.
          </p>
        </div>
      </section>

      <section id="hsse" className="py-24 bg-[#060A14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Our Pillars</div>
            <h2 className="text-4xl font-bold text-white">Sustainability Framework</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="p-8 bg-[#0D1525] border border-white/5 hover:border-[#C9A84C]/30 transition-all group">
                <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/10 transition-colors">
                  <p.icon className="text-[#C9A84C]" size={22} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A0F1E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="border border-[#C9A84C]/20 bg-[#0D1525] p-12">
            <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">2024 Sustainability Report</div>
            <h2 className="text-3xl font-bold text-white mb-4">Measuring Our Impact</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our annual Sustainability Report provides a transparent account of our environmental, social and governance performance. Download the 2024 report to learn about our progress against our commitments.
            </p>
            <a
              href="https://www.pecanenergies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#A07830] to-[#C9A84C] text-[#0A0F1E] font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
            >
              Download 2024 Report
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#060A14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Community Programmes</div>
            <h2 className="text-4xl font-bold text-white">Investing in People</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "PISP Programme", desc: "The Pecan Industry Scholarship Programme develops the next generation of Ghanaian energy professionals through training, mentorship and hands-on experience." },
              { title: "Local Content", desc: "We prioritise Ghanaian suppliers, contractors and employees — ensuring energy development translates to real economic opportunity for local communities." },
              { title: "Health Initiatives", desc: "From Breast Cancer Awareness to community health outreach, we invest in the wellbeing of the communities where we operate." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-[#0D1525] border border-white/5">
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
