import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A84C]/8 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="border border-[#C9A84C]/20 bg-[#0D1525]/50 p-16">
          <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-6">
            Join the Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Be Part of Ghana's
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Energy Future
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you're a potential partner, supplier, or professional looking to build a career in Pan-African energy, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#A07830] to-[#C9A84C] text-[#0A0F1E] font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link
              href="/careers"
              className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-widest text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
            >
              View Careers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
