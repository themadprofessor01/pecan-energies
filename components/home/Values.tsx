const values = [
  {
    letter: "V",
    title: "Value Creating",
    desc: "Unlock prosperity through technical expertise and local economic growth. We create lasting value for Ghana and its people.",
  },
  {
    letter: "A",
    title: "Ambitious",
    desc: "High-performing, entrepreneurial, and innovation-focused. We set bold goals and pursue them with discipline and creativity.",
  },
  {
    letter: "R",
    title: "Respectful",
    desc: "Team-oriented, culturally sensitive, and people-focused. We honour the communities we work in and the partners we work with.",
  },
  {
    letter: "T",
    title: "Transparent",
    desc: "Integrity-driven with zero tolerance for corruption. Open communication builds trust with partners, governments, and communities.",
  },
];

export default function Values() {
  return (
    <section className="py-28 bg-[#0A0F1E] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Our Values
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What We Stand For
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="group relative p-8 bg-[#0D1525]/80 border border-white/5 hover:border-[#C9A84C]/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 text-[120px] font-black text-[#C9A84C]/5 leading-none select-none group-hover:text-[#C9A84C]/10 transition-colors">
                {v.letter}
              </div>
              <div
                className="text-5xl font-black mb-4"
                style={{
                  background: "linear-gradient(135deg, #A07830, #C9A84C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {v.letter}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
