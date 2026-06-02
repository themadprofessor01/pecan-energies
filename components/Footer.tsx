import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const sections = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "Who We Are" },
      { href: "/operations", label: "Operations" },
      { href: "/sustainability", label: "Sustainability" },
      { href: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/media", label: "Media Centre" },
      { href: "/media#reports", label: "Reports & Documents" },
      { href: "/sustainability#hsse", label: "HSSE" },
      { href: "/about#governance", label: "Corporate Governance" },
    ],
  },
  {
    title: "Partners",
    links: [
      { href: "/contact#suppliers", label: "Suppliers" },
      { href: "/careers", label: "Join Our Team" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#060A14] border-t border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#A07830] flex items-center justify-center text-[#0A0F1E] font-bold text-lg">
                P
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">PECAN</div>
                <div className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase">Energies</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building a Pan-African oil and gas operator of choice in offshore deep waters of Ghana. Unlocking prosperity for African communities.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/pecanenergies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all"
                aria-label="Twitter / X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/pecan-energies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-[#C9A84C] text-xs uppercase tracking-[0.2em] font-semibold mb-5">
                {s.title}
              </h4>
              <ul className="space-y-3">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#C9A84C]" />
              Accra, Ghana & Oslo, Norway
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#C9A84C]" />
              info@pecanenergies.com
            </div>
          </div>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Pecan Energies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
