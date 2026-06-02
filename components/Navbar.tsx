"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "Who We Are" },
  { href: "/operations", label: "Operations" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/careers", label: "Careers" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0F1E]/95 backdrop-blur-md border-b border-[#C9A84C]/20 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo-alt.svg"
            alt="Pecan Energies"
            width={160}
            height={40}
            className="h-10 w-auto brightness-0 invert"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-[#C9A84C] transition-colors duration-300 tracking-wide uppercase"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden lg:block px-5 py-2 border border-[#C9A84C] text-[#C9A84C] text-sm uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0A0F1E] transition-all duration-300 font-semibold"
        >
          Get in Touch
        </a>

        <button
          className="lg:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0A0F1E]/98 backdrop-blur-md border-t border-[#C9A84C]/20 px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-[#C9A84C] transition-colors py-2 border-b border-white/5 uppercase tracking-wide text-sm"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/contact"
            className="mt-2 text-center px-5 py-3 border border-[#C9A84C] text-[#C9A84C] text-sm uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0A0F1E] transition-all duration-300 font-semibold"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
}
