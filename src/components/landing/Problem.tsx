import { AlertTriangle, EyeOff, MapPinOff, PhoneOff, SearchX, Store, UsersRound } from "lucide-react";

const problems = [
  {
    number: "01",
    title: "Losing Customers to Competitors",
    text: "When customers search on Google, they end up visiting another shop instead of yours.",
    icon: SearchX,
    supportingIcon: Store,
    metric: "Missed Searches",
  },
  {
    number: "02",
    title: "Wrong Contact Information",
    text: "Incorrect phone numbers or timings on Maps stop new customers from reaching out.",
    icon: PhoneOff,
    supportingIcon: MapPinOff,
    metric: "Lost Calls",
  },
  {
    number: "03",
    title: "Zero Local Visibility",
    text: "People in your own area don't even know your shop and the services you offer.",
    icon: EyeOff,
    supportingIcon: UsersRound,
    metric: "Low Reach",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-neon">
            <AlertTriangle className="h-3 w-3" /> The 3 Biggest Mistakes
          </div>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-center max-w-3xl mx-auto leading-tight">
          Why your shop is <span className="text-neon">invisible on Google</span>
        </h2>
        <p className="mt-4 text-center text-white/60 text-lg">
          Most local businesses make these 3 critical mistakes — and lose customers every day.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-7 group hover:border-neon/40 hover:glow-cyan-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative mb-6 h-32 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-full border border-white/10 bg-black/30 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-danger/70" />
                  <span className="text-[10px] font-semibold uppercase text-white/45 tracking-wider">{p.metric}</span>
                  <span className="h-2 w-2 rounded-full bg-neon/70" />
                </div>
                <div className="absolute left-6 bottom-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-neon/10 border border-neon/30 text-neon group-hover:scale-105 transition-transform duration-300">
                  <p.icon className="h-8 w-8" />
                </div>
                <div className="absolute right-6 bottom-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/8 border border-white/10 text-white/55">
                  <p.supportingIcon className="h-6 w-6" />
                </div>
                <div className="absolute -right-6 -bottom-8 h-28 w-28 rounded-full border border-neon/20" />
                <div className="absolute right-9 bottom-3 h-px w-16 rotate-[-18deg] bg-gradient-to-r from-danger/70 to-neon/60" />
              </div>
              <div className="font-display font-black text-4xl text-gradient-cyan mb-4">{p.number}</div>
              <h3 className="font-display font-extrabold text-lg text-white mb-2">
                {p.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
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
