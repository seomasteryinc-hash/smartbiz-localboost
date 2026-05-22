import { BadgeCheck, MapPin, MessageCircle, Phone, Search, ShieldCheck, Star, TrendingUp } from "lucide-react";

const proofPoints = [
  {
    icon: MapPin,
    metric: "1,200+",
    label: "Google Maps listings setup",
    note: "Janseva Kendras, mobile shops & local stores across UP, Bihar & MP",
  },
  {
    icon: Phone,
    metric: "3x",
    label: "Avg. customer calls in 30 days",
    note: "Based on Google Business Profile insights shared by clients",
  },
  {
    icon: MessageCircle,
    metric: "24-48 hrs",
    label: "Profile go-live time",
    note: "Full verification, photos, services & WhatsApp setup",
  },
  {
    icon: ShieldCheck,
    metric: "100%",
    label: "Refund if listing not approved",
    note: "Written assurance on WhatsApp before payment",
  },
];

const mockSearchResult = {
  name: "Sharma Mobile & Janseva Kendra",
  rating: 4.8,
  reviews: 142,
  category: "Mobile shop · Janseva Kendra",
  address: "Civil Lines, Lucknow, UP 226001",
  status: "Open",
  closes: "Closes 9 pm",
};

const mockInsights = [
  { label: "Searched on Google", value: "1,842", change: "+218%" },
  { label: "Maps direction requests", value: "327", change: "+154%" },
  { label: "Calls from listing", value: "486", change: "+312%" },
  { label: "Website clicks", value: "211", change: "+96%" },
];

export function VerifiedSupport() {
  return (
    <section className="px-4 py-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-neon">
            <BadgeCheck className="h-3.5 w-3.5" /> Verified Local Shop Support
          </div>
          <h2 className="font-display text-2xl font-black sm:text-3xl md:text-4xl">
            Real setup, real numbers — <span className="text-neon">no fake promises</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Hum aapki dukan ke liye Google Business Profile, Maps listing aur WhatsApp lead system khud
            setup karte hain. Niche dekho ek sample profile aur insights jo aam tor par 30 din me dikhte hain.
          </p>
        </div>

        {/* Proof point grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((p) => (
            <div
              key={p.label}
              className="glass-strong rounded-xl p-4 transition hover:border-neon/40 hover:glow-cyan-soft"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neon/10 text-neon">
                <p.icon className="h-5 w-5" />
              </div>
              <p className="font-display text-2xl font-black text-foreground">{p.metric}</p>
              <p className="mt-1 text-sm font-bold text-neon">{p.label}</p>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{p.note}</p>
            </div>
          ))}
        </div>

        {/* Mock screenshots */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Mock Google Search result */}
          <div className="glass-strong rounded-xl p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Sample Google listing
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-neon/10 px-2 py-0.5 text-[10px] font-bold text-neon">
                <BadgeCheck className="h-3 w-3" /> Verified
              </span>
            </div>

            <div className="rounded-lg border border-border/60 bg-card p-4">
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Search className="mt-0.5 h-3.5 w-3.5" />
                <span>mobile shop near me</span>
              </div>

              <div className="mt-3 border-t border-border/60 pt-3">
                <p className="font-display text-base font-black text-foreground">
                  {mockSearchResult.name}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">{mockSearchResult.rating}</span>
                  <span className="flex text-neon" aria-label="rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </span>
                  <span>({mockSearchResult.reviews})</span>
                  <span>·</span>
                  <span>{mockSearchResult.category}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{mockSearchResult.address}</p>
                <p className="mt-2 text-xs">
                  <span className="font-bold text-neon">{mockSearchResult.status}</span>{" "}
                  <span className="text-muted-foreground">· {mockSearchResult.closes}</span>
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-neon/30 px-3 py-1 text-[11px] font-semibold text-neon">
                    Call
                  </span>
                  <span className="rounded-full border border-border/60 px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                    Directions
                  </span>
                  <span className="rounded-full border border-border/60 px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                    Website
                  </span>
                </div>
              </div>

              <p className="mt-3 text-[11px] italic text-muted-foreground">
                * Sample preview for illustration. Aapki dukan ka actual listing same style me banta hai.
              </p>
            </div>
          </div>

          {/* Mock Insights */}
          <div className="glass-strong rounded-xl p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Sample 30-day insights
              </p>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-neon">
                <TrendingUp className="h-3 w-3" /> Last 30 days
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {mockInsights.map((m) => (
                <div key={m.label} className="rounded-lg border border-border/60 bg-card p-3">
                  <p className="text-[11px] text-muted-foreground">{m.label}</p>
                  <p className="mt-1 font-display text-xl font-black text-foreground">{m.value}</p>
                  <p className="mt-1 text-[11px] font-bold text-neon">{m.change} vs prev.</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-neon/20 bg-neon/5 p-3">
              <p className="text-xs leading-5 text-muted-foreground">
                Yeh numbers ek average janseva kendra client ke Google Business dashboard se liye
                gaye hain. Aapke shop ka growth location, category aur reviews par depend karta hai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
