"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient + grid */}
      <div className="absolute inset-0 bg-[#0A0F1E]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0D1525] to-[#0A0F1E]" />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#1E40AF]/15 rounded-full blur-3xl" />
      </div>

      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] border border-[#C9A84C]/5 rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute w-[800px] h-[800px] border border-[#C9A84C]/5 rounded-full animate-[spin_45s_linear_infinite_reverse]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 border border-[#C9A84C]/30 bg-[#C9A84C]/5 text-[#C9A84C] text-xs uppercase tracking-[0.3em] px-5 py-2 mb-8">
          <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-pulse" />
          Pan-African Energy Leadership
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-6">
          <span className="block text-white">Unlocking</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #A07830, #C9A84C, #E8C96A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Prosperity
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building a Pan-African oil and gas operator of choice in the offshore deep waters of Ghana — developing the Pecan field for the mutual benefit of the Ghanaian people.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/operations"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#A07830] to-[#C9A84C] text-[#0A0F1E] font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity"
          >
            Our Operations <ArrowRight size={16} />
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-widest text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
          >
            Who We Are
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#C9A84C] rounded-full" />
            50% DWT/CTP Operator
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#C9A84C] rounded-full" />
            AFC Owned
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#C9A84C] rounded-full" />
            Accra, Ghana
          </div>
        </div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-[#C9A84C] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
