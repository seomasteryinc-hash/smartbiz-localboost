import { Star, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-4 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl text-center animate-float-up">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm">
          <Star className="h-3.5 w-3.5 fill-neon text-neon" />
          <span className="text-white/90">4.9/5 Rating by <b className="text-neon">500+ Indian Shop Owners</b></span>
        </div>

        <h1 className="font-display font-black tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-gradient-cyan">
          Apni Janseva Kendra ya Mobile Shop ko Google Maps par laayein
        </h1>
        <p className="mt-5 text-lg sm:text-xl font-semibold text-neon">
          aur roz ke 30–40 naye customers payein!
        </p>

        <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-white/70">
          India's most trusted digital growth partner for local shops.
          Hum aapki dukan ko online lekar aayenge — safely.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#pricing"
            className="animate-pulse-neon group inline-flex items-center gap-2 rounded-full bg-neon px-7 py-4 text-base font-bold text-neon-foreground transition hover:scale-105"
          >
            Apna Plan Chunein
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <a href="#problem" className="text-sm font-medium text-white/70 hover:text-white">
            Pehle samjhein kaise →
          </a>
        </div>

        <div className="mt-14 flex items-center justify-center gap-6 sm:gap-10 text-xs text-white/50">
          <span>🇮🇳 Made for Bharat</span>
          <span>•</span>
          <span>24–48 hrs Setup</span>
          <span>•</span>
          <span>Cashfree Secured</span>
        </div>
      </div>
    </section>
  );
}
