import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    id: "smart-start",
    name: "Smart Start",
    price: 399,
    tag: "One-Time",
    features: [
      "Google Business Profile (GMB) Setup",
      "Local Keywords Optimization",
      "Correct Contact & Timings Configuration",
      "3 Canva Creatives (Shop Branding)",
      "30 Days WhatsApp Support",
    ],
    cta: "Buy Smart Start",
    popular: false,
  },
  {
    id: "growth-kit",
    name: "Dukaan Growth Kit",
    price: 699,
    tag: "One-Time",
    features: [
      "Everything in Smart Start",
      "5 Customized Canva Festival & Offer Banners",
      "Digital QR Code Branding Sticker",
      "30 Days Premium Support",
    ],
    cta: "Buy Growth Kit",
    popular: true,
  },
  {
    id: "vip",
    name: "Digital Vyapaar VIP",
    price: 1299,
    tag: "One-Time",
    features: [
      "Everything in Growth Kit",
      "10 Premium Canva Creatives (Festivals + Offers)",
      "Mini Landing Page / Digital Portfolio",
      "Social Media Page Setup",
      "Local Meta / Facebook Ads Configuration",
      "30 Days Dedicated Phone Support",
    ],
    cta: "Buy VIP Plan",
    popular: false,
  },
];

type Props = {
  onBuy: (planId: string, amount: number) => void;
};

export function Pricing({ onBuy }: Props) {
  return (
    <section id="pricing" className="py-24 px-4 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-neon mb-4">
            <Sparkles className="h-3 w-3" /> Local Shop Growth Kit
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl">
            SmartBiz <span className="text-neon">"Local Shop Growth Kit"</span>
          </h2>
          <p className="mt-3 text-white/60">Choose Your Plan</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative glass rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "glow-cyan border-neon/40 md:scale-105"
                  : "hover:glow-cyan-soft"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon text-neon-foreground text-[11px] font-extrabold tracking-wider px-3 py-1 rounded-full">
                  MOST POPULAR CHOICE
                </div>
              )}
              <h3 className="font-display font-extrabold text-xl">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-black text-gradient-cyan">₹{plan.price}</span>
                <span className="text-xs text-white/50">{plan.tag}</span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                    <Check className="h-4 w-4 text-neon shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onBuy(plan.id, plan.price)}
                className={`mt-8 w-full rounded-xl px-5 py-3.5 text-sm font-bold transition hover:scale-[1.02] ${
                  plan.popular
                    ? "bg-neon text-neon-foreground glow-cyan"
                    : "bg-white/10 text-white hover:bg-white/15 border border-white/15"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Security badges */}
        <div className="mt-12 glass rounded-2xl p-5 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
          {["🛡 PCI-DSS Compliant", "🔒 100% Secure SSL Checkout", "✅ Cashfree Secured Partner"].map((b) => (
            <span key={b} className="text-white/80 font-medium">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
