const problems = [
  {
    icon: "❌",
    text: "Customer Google par search karke kisi doosri shop par chala jata hai.",
  },
  {
    icon: "❌",
    text: "Maps par sahi mobile number ya timing na hone se naye customers call nahi kar paate.",
  },
  {
    icon: "❌",
    text: "Local area me sabhi logo ko aapki shop aur services ke baare me pata hi nahi chalta.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-center max-w-3xl mx-auto leading-tight">
          Kya aapki dukan Google par <span className="text-neon">nahi dikhti?</span>
        </h2>
        <p className="mt-4 text-center text-white/60 text-lg">
          Aap ye 3 galti kar rahe hain:
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-7 group hover:border-neon/40 hover:glow-cyan-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 grayscale-0">{p.icon}</div>
              <p className="text-white/85 text-base leading-relaxed font-medium">
                {p.text}
              </p>
              <div className="mt-6 h-px w-12 bg-neon/60 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
