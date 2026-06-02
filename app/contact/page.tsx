import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Pecan Energies",
  description: "Get in touch with Pecan Energies — headquartered in Accra, Ghana with offices in Oslo, Norway.",
};

export default function ContactPage() {
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
          <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Contact</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Whether you're a potential partner, supplier, investor or professional, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#060A14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-[#0D1525] border border-white/5 p-10">
              <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">First Name</label>
                    <input type="text" className="w-full bg-[#0A0F1E] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Last Name</label>
                    <input type="text" className="w-full bg-[#0A0F1E] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="Mensah" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-[#0A0F1E] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Subject</label>
                  <select className="w-full bg-[#0A0F1E] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors">
                    <option value="">Select a topic</option>
                    <option>Partnership Enquiry</option>
                    <option>Supplier / Procurement</option>
                    <option>Media & Press</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-[#0A0F1E] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C9A84C] transition-colors resize-none" placeholder="Tell us how we can help..." />
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#A07830] to-[#C9A84C] text-[#0A0F1E] font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Our Offices</h2>
                <div className="space-y-6">
                  {[
                    { city: "Accra, Ghana", label: "Headquarters", address: "Accra, Ghana" },
                    { city: "Oslo, Norway", label: "International Office", address: "Oslo, Norway" },
                  ].map((o, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-[#0D1525] border border-white/5">
                      <MapPin className="text-[#C9A84C] shrink-0 mt-0.5" size={20} />
                      <div>
                        <div className="text-white font-bold">{o.city}</div>
                        <div className="text-[#C9A84C] text-xs uppercase tracking-wide mt-1">{o.label}</div>
                        <div className="text-gray-500 text-sm mt-1">{o.address}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4">Email Us</h3>
                <div className="space-y-3">
                  {[
                    { label: "General", email: "info@pecanenergies.com" },
                    { label: "Careers", email: "careers@pecanenergies.com" },
                  ].map((e, i) => (
                    <a key={i} href={`mailto:${e.email}`} className="flex items-center gap-3 text-gray-400 hover:text-[#C9A84C] transition-colors">
                      <Mail size={16} className="text-[#C9A84C]" />
                      <span className="text-sm">{e.label}: {e.email}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div id="suppliers">
                <h3 className="text-white font-bold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="https://twitter.com/pecanenergies" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 border border-white/10 text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    @pecanenergies
                  </a>
                  <a href="https://linkedin.com/company/pecan-energies" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 border border-white/10 text-gray-400 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="p-6 bg-[#0D1525] border border-[#C9A84C]/20">
                <h3 className="text-[#C9A84C] font-bold mb-2">Suppliers & Procurement</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pecan Energies is committed to working with local Ghanaian suppliers. If you are interested in becoming a supplier, please reach out via our contact form selecting "Supplier / Procurement".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
