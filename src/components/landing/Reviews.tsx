import { MapPin, Quote, Star, TrendingUp } from "lucide-react";
import rajeshPhoto from "@/assets/review-rajesh.jpg";
import priyaPhoto from "@/assets/review-priya.jpg";
import amanPhoto from "@/assets/review-aman.jpg";

const reviews = [
  {
    name: "Rajesh Verma",
    role: "Janseva Kendra Owner",
    location: "Lucknow, UP",
    image: rajeshPhoto,
    outcome: "More local calls",
    review:
      "SmartBiz made our Google Business profile look professional. Customers can now find our address, services and contact number easily, and enquiries have improved a lot.",
  },
  {
    name: "Priya Sharma",
    role: "CSC & Digital Services",
    location: "Kanpur, UP",
    image: priyaPhoto,
    outcome: "Better trust online",
    review:
      "Their team handled everything clearly — business listing, service details, photos and support. The setup looks genuine and customers feel more confident before calling.",
  },
  {
    name: "Aman Khan",
    role: "Mobile Shop Owner",
    location: "Prayagraj, UP",
    image: amanPhoto,
    outcome: "Higher walk-ins",
    review:
      "Before SmartBiz, my shop was not visible properly online. Now people nearby can discover my mobile repair and accessories services directly through search and maps.",
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
              Feedback from local business owners who improved their online presence, customer calls and shop visibility.
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

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="glass-strong group relative overflow-hidden rounded-xl p-5 transition hover:border-neon/40 hover:glow-cyan-soft"
            >
              <div className="absolute right-4 top-4 text-neon/20 transition group-hover:text-neon/35">
                <Quote className="h-10 w-10" />
              </div>

              <div className="relative flex items-center gap-4">
                <img
                  src={review.image}
                  alt={`${review.name} customer profile`}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="h-16 w-16 rounded-full border border-neon/25 object-cover shadow-lg shadow-neon/10"
                />
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