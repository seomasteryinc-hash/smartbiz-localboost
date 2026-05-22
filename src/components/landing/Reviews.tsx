import { MapPin, Quote, Star, TrendingUp, User } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Verma",
    role: "Janseva Kendra Owner",
    location: "Lucknow, UP",
    outcome: "Local calls badhe",
    review:
      "SmartBiz ne hamari Google Business profile ko bilkul professional bana diya. Ab customers ko address, services aur number aasani se mil jata hai aur enquiries kaafi badh gayi hain.",
  },
  {
    name: "Priya Sharma",
    role: "CSC & Digital Services",
    location: "Kanpur, UP",
    outcome: "Online trust improve hua",
    review:
      "Team ne sab kuch clearly handle kiya — listing, service details, photos aur support. Setup genuine lagta hai aur customers call karne se pehle confident feel karte hain.",
  },
  {
    name: "Aman Khan",
    role: "Mobile Shop Owner",
    location: "Prayagraj, UP",
    outcome: "Walk-ins zyada hue",
    review:
      "Pehle meri shop online theek se dikhti nahi thi. Ab aas-paas ke log mobile repair aur accessories services search aur maps se directly dhoondh lete hain.",
  },
  {
    name: "Neha Gupta",
    role: "Boutique Owner",
    location: "Varanasi, UP",
    outcome: "Naye customers mile",
    review:
      "Boutique ki online presence pehle bilkul nahi thi. SmartBiz ne profile, photos aur WhatsApp setup sab kar diya. Ab roz naye customers WhatsApp pe order karte hain.",
  },
  {
    name: "Suresh Yadav",
    role: "Electrician Service",
    location: "Gorakhpur, UP",
    outcome: "Direct WhatsApp leads",
    review:
      "Mujhe technical knowledge nahi thi, lekin SmartBiz ki team ne sab kuch khud setup kiya. Ab Google par search hote hi log seedha WhatsApp pe message karte hain.",
  },
];

export function Reviews() {
  return (
    <section className="px-4 py-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-neon">
              <Star className="h-3.5 w-3.5 fill-current" /> Customer Reviews
            </div>
            <h2 className="font-display text-2xl font-black sm:text-3xl md:text-4xl">
              Indian businesses trust <span className="text-neon">SmartBiz services</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Local business owners ka feedback jinhone apni online presence, customer calls aur shop visibility improve ki.
            </p>
          </div>

          <div className="glass flex w-full items-center gap-3 rounded-xl px-4 py-3 md:w-auto">
            <TrendingUp className="h-5 w-5 text-neon" />
            <div>
              <p className="text-sm font-bold text-foreground">Built for local growth</p>
              <p className="text-xs text-muted-foreground">Google Maps • Branding • WhatsApp leads</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="glass-strong group relative overflow-hidden rounded-xl p-5 transition hover:border-neon/40 hover:glow-cyan-soft"
            >
              <div className="absolute right-4 top-4 text-neon/20 transition group-hover:text-neon/35">
                <Quote className="h-10 w-10" />
              </div>

              <div className="relative flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-neon/25 bg-card shadow-lg shadow-neon/10">
                  <User className="h-7 w-7 text-neon" />
                </div>
                <div>
                  <p className="font-display text-base font-black text-foreground">{review.name}</p>
                  <p className="text-xs font-semibold text-neon">{review.role}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {review.location}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-1 text-neon" aria-label="5 star rating">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">“{review.review}”</p>

              <div className="mt-5 rounded-lg border border-neon/15 bg-card px-3 py-2">
                <p className="text-xs font-bold text-neon">{review.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
