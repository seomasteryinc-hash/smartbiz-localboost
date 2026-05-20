const items = [
  { icon: "⏱️", title: "Fast Delivery", desc: "Aapka setup 24 se 48 ghante me live ho jayega." },
  { icon: "🔒", title: "Full Control", desc: "Aapki shop ka complete ownership hamesha aapke paas rahega." },
  { icon: "💳", title: "No Hidden Charges", desc: "Ek baar payment ke baad koi monthly ya extra fees nahi." },
];

export function Trust() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-center">
          SmartBiz Ka <span className="text-neon">Wada</span>
        </h2>
        <p className="mt-3 text-center text-white/60">(Our 100% Guarantee)</p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="glass rounded-2xl p-7 text-center hover:glow-cyan-soft transition">
              <div className="text-4xl mb-3">{i.icon}</div>
              <h3 className="font-display font-bold text-lg text-neon">{i.title}</h3>
              <p className="mt-2 text-white/75 text-sm leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
