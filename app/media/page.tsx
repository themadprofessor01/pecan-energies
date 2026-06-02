import type { Metadata } from "next";
import { FileText, Image as ImageIcon, Video, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Media Centre | Pecan Energies",
  description: "Pecan Energies media centre — news, press releases, documents, image gallery and video archive.",
};

const news = [
  { date: "January 2026", title: "New Group CEO Appointed", desc: "Pecan Energies announces the appointment of a new Group Chief Executive Officer, marking a new chapter in the company's leadership." },
  { date: "October 2025", title: "Breast Cancer Awareness Month", desc: "Pecan Energies recognises Breast Cancer Awareness Month with community health initiatives across our operational areas in Ghana." },
  { date: "2025", title: "PISP 2025 Graduation", desc: "Inaugural graduation and inauguration of the Pecan Industry Scholarship Programme (PISP) 2025 cohort, celebrating Ghanaian energy talent." },
  { date: "2024", title: "2024 Sustainability Report Published", desc: "Our annual Sustainability Report details our environmental, social and governance performance and commitments for the future." },
  { date: "July 2023", title: "Plan of Development Approved", desc: "The Government of Ghana approves Pecan Energies' Plan of Development for the DWT/CTP block — a landmark milestone for the Pecan field." },
];

export default function MediaPage() {
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
          <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Media Centre</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            News &{" "}
            <span style={{ background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Resources
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Stay up to date with the latest news, announcements and publications from Pecan Energies.
          </p>
        </div>
      </section>

      {/* Media types */}
      <section className="py-12 bg-[#060A14] border-y border-[#C9A84C]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-6">
          {[
            { icon: FileText, label: "Documents & Reports" },
            { icon: ImageIcon, label: "Image Gallery" },
            { icon: Video, label: "Video Archive" },
          ].map((m, i) => (
            <div key={i} className="flex items-center gap-4 p-5 bg-[#0D1525] border border-white/5 hover:border-[#C9A84C]/30 transition-colors cursor-pointer group">
              <m.icon className="text-[#C9A84C]" size={22} />
              <span className="text-white font-semibold text-sm group-hover:text-[#C9A84C] transition-colors">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* News */}
      <section id="reports" className="py-24 bg-[#0A0F1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-10">Latest News</div>
          <div className="space-y-4">
            {news.map((n, i) => (
              <div key={i} className="group flex gap-8 p-8 bg-[#0D1525] border border-white/5 hover:border-[#C9A84C]/30 transition-all cursor-pointer">
                <div className="w-28 shrink-0">
                  <div className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide">{n.date}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#C9A84C] transition-colors">{n.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{n.desc}</p>
                </div>
                <ExternalLink className="text-gray-600 group-hover:text-[#C9A84C] transition-colors shrink-0 mt-1" size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press contact */}
      <section className="py-16 bg-[#060A14]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="border border-[#C9A84C]/20 bg-[#0D1525] p-10">
            <h2 className="text-2xl font-bold text-white mb-3">Press & Media Enquiries</h2>
            <p className="text-gray-400 mb-6">For press enquiries, interview requests or media resources, please contact our communications team.</p>
            <a href="mailto:info@pecanenergies.com" className="inline-flex items-center gap-2 px-8 py-4 border border-[#C9A84C] text-[#C9A84C] uppercase tracking-widest text-sm font-semibold hover:bg-[#C9A84C] hover:text-[#0A0F1E] transition-all">
              Contact Media Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
