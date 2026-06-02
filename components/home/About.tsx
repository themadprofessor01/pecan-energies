import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-28 bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Africa's Resources,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Africa's Prosperity
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Pecan Energies is a Pan-African offshore oil and gas operator headquartered in Accra, Ghana, with offices in Oslo, Norway. Fully owned by Africa Finance Corporation (AFC), we advocate for Africa to harness its resources for development and prosperity.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our approach blends Pan-African and Scandinavian values — emphasizing localization, community empowerment, transparency, and technical excellence to deliver sustainable energy development for Ghana.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold hover:gap-4 transition-all duration-300 uppercase tracking-wide text-sm border-b border-[#C9A84C]/30 pb-1"
            >
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative h-[480px]">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 overflow-hidden border border-[#C9A84C]/20">
              <Image
                src="/images/Who-we-are-2.jpg"
                alt="Pecan Energies team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0A0F1E]/30" />
            </div>
            <div className="absolute bottom-0 left-0 w-2/3 h-1/2 overflow-hidden border border-[#C9A84C]/30">
              <Image
                src="/images/Who-we-are-4.jpg"
                alt="Pecan Energies operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0A0F1E]/20" />
            </div>
            <div className="absolute bottom-8 right-0 w-32 bg-[#0A0F1E] border border-[#C9A84C]/40 p-4 text-center">
              <div className="text-[#C9A84C] font-black text-lg">AFC</div>
              <div className="text-white text-xs mt-1">Owned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
