import Link from "next/link";
import { ArrowRight, Shield, Leaf, Users, BookOpen } from "lucide-react";

const pillars = [
  { icon: Shield, label: "HSSE", desc: "Health, Safety, Security & Environment standards at every level of operations." },
  { icon: Leaf, label: "Environment", desc: "Sustainable development within a just energy transition framework for Africa." },
  { icon: Users, label: "Community", desc: "Skills development, job creation and empowerment of Ghanaian communities." },
  { icon: BookOpen, label: "Governance", desc: "Zero-tolerance ethics, compliance and transparent corporate governance." },
];

export default function Sustainability() {
  return (
    <section className="py-28 bg-[#060A14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
              Sustainability
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Responsible{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Energy Development
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We produce resources in a safe, efficient and environmentally responsible manner. Our 2024 Sustainability Report reflects our commitment to a just energy transition for Africa — one that delivers prosperity without compromising future generations.
            </p>
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#A07830] to-[#C9A84C] text-[#0A0F1E] font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
            >
              Read Sustainability Report <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="p-6 bg-[#0D1525] border border-white/5 hover:border-[#C9A84C]/20 transition-colors group"
              >
                <div className="w-10 h-10 border border-[#C9A84C]/20 flex items-center justify-center mb-4 group-hover:bg-[#C9A84C]/10 transition-colors">
                  <p.icon className="text-[#C9A84C]" size={18} />
                </div>
                <div className="text-white font-bold mb-2">{p.label}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
