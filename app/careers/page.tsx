import type { Metadata } from "next";
import Image from "next/image";
import { Rocket, Globe2, Users2, Sparkles, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Pecan Energies",
  description: "Join Pecan Energies and help build Ghana's next Pan-African energy operator. View open roles and learn about our culture.",
};

const culture = [
  { icon: Rocket, title: "Innovative & Ambitious", desc: "We use new technology to realise ambitious goals. Shape your role with room to grow." },
  { icon: Globe2, title: "Making History", desc: "Be part of the first Pan-African owned oil and gas operator in Ghana." },
  { icon: Users2, title: "Flat & Open", desc: "A trust-based organisation with no bureaucracy — your voice matters from day one." },
  { icon: Sparkles, title: "Diverse by Design", desc: "We believe our differences are our strength. Fair recruitment regardless of background." },
];

export default function CareersPage() {
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
          <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Careers</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Build Africa's Energy<br />
            <span style={{ background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Future With Us
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Pecan Energies is an entrepreneurial, mission-driven organisation. We're building something historic — and we want exceptional people to join us.
          </p>
        </div>
      </section>

      {/* Photo strip */}
      <section className="bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6 pt-16">
          <div className="grid grid-cols-2 gap-2 h-64">
            {["Join-our-team-2.jpg","Join-our-team-3.jpg"].map((img, i) => (
              <div key={i} className="relative overflow-hidden">
                <Image src={`/images/${img}`} alt="Pecan Energies team" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#0A0F1E]/25" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-[#060A14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Our Culture</div>
            <h2 className="text-4xl font-bold text-white">Why Pecan Energies?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {culture.map((c, i) => (
              <div key={i} className="p-8 bg-[#0D1525] border border-white/5 hover:border-[#C9A84C]/30 transition-all group">
                <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/10 transition-colors">
                  <c.icon className="text-[#C9A84C]" size={22} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-20 bg-[#0A0F1E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Open Positions</div>
          <h2 className="text-4xl font-bold text-white mb-6">Current Opportunities</h2>
          <div className="border border-white/10 bg-[#0D1525] p-12">
            <p className="text-gray-400 mb-6">
              We currently have no open positions listed directly. All vacancies are advertised through our recruitment partners:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {["Elidel Prestige Limited", "Preng & Associates"].map((r) => (
                <div key={r} className="border border-[#C9A84C]/20 bg-[#C9A84C]/5 p-4 text-[#C9A84C] font-semibold">
                  {r}
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Follow these partners on their websites and social media for the latest openings.
            </p>
          </div>
        </div>
      </section>

      {/* Warning box */}
      <section className="py-12 bg-[#060A14]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-4 border border-amber-500/30 bg-amber-500/5 p-6">
            <AlertCircle className="text-amber-400 shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="text-amber-400 font-bold mb-2">Recruitment Fraud Warning</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pecan Energies and its recruitment partners will <strong className="text-white">never</strong> ask for payments from applicants. All legitimate offers include in-person interviews with company representatives. If you have concerns about the authenticity of an offer, contact us at{" "}
                <a href="mailto:careers@pecanenergies.com" className="text-[#C9A84C] hover:underline">
                  careers@pecanenergies.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
