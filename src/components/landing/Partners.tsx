import { BadgeCheck } from "lucide-react";

const partners = [
  {
    name: "Google Partner",
    badge: "Verified Partner",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/>
      </svg>
    ),
  },
  {
    name: "Meta Business",
    badge: "Marketing Partner",
    svg: (
      <svg viewBox="0 0 287.56 191" className="h-6 w-auto" aria-hidden>
        <defs>
          <linearGradient id="m1" x1="62.34" y1="101.45" x2="260.34" y2="91.45" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0064e1"/>
            <stop offset=".4" stopColor="#0064e1"/>
            <stop offset=".83" stopColor="#0073ee"/>
            <stop offset="1" stopColor="#0082fb"/>
          </linearGradient>
          <linearGradient id="m2" x1="41.42" y1="53" x2="41.42" y2="126" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0082fb"/>
            <stop offset="1" stopColor="#0064e0"/>
          </linearGradient>
        </defs>
        <path fill="#0081fb" d="M31.06 126c0 11 2.41 19.41 5.56 24.51A19 19 0 0053.19 160c8.1 0 15.51-2 29.79-21.76 11.44-15.83 24.92-38 34-51.94l15.36-23.6c10.67-16.39 23-34.61 37.18-47C181.07 5.6 193.54 0 206.09 0c21.07 0 41.14 12.21 56.5 35.11C279.41 60.18 287.56 91.74 287.56 124.32c0 19.36-3.81 33.57-10.29 44.79-6.27 10.86-18.49 21.73-39.05 21.73v-31c17.6 0 22-16.16 22-34.65 0-26.34-6.14-55.56-19.68-76.46-9.61-14.83-22.07-23.89-35.78-23.89-14.83 0-26.77 11.18-40.19 31.13-7.13 10.59-14.46 23.5-22.69 38.07L143.4 113.9c-17.79 31.51-22.31 38.65-31.23 50.55C96.6 185.27 83.27 191 65.18 191c-21.27 0-34.72-9.21-43.05-23.09C15.32 156.55 12 141.62 12 124.6z"/>
        <path fill="url(#m1)" d="M24.49 37.3C38.73 15.35 59.28 0 82.85 0c13.65 0 27.22 4 41.39 15.61 15.5 12.65 32 33.48 52.63 67.81l7.39 12.32c17.84 29.72 28 45 33.93 52.22 7.64 9.26 13 12 19.94 12 17.6 0 22-16.16 22-34.65l27.4-.86c0 19.36-3.81 33.57-10.29 44.79-6.27 10.86-18.49 21.73-39.05 21.73-12.78 0-24.11-2.78-36.63-14.6-9.62-9.07-20.88-25.18-29.55-39.67l-25.77-43.08C162.7 71.59 151.31 56.5 144.78 49.66c-7-7.36-16.21-16.24-30.84-16.24-11.85 0-21.93 8.32-30.34 21z"/>
        <path fill="url(#m2)" d="M82.35 33.42c-11.85 0-21.93 8.32-30.34 21C40.16 73 32.91 100.21 32.91 126.31c0 11 2.41 19.41 5.56 24.51l-26.48 17.41C5.32 156.55 2 141.62 2 124.6c0-30.16 8.28-61.6 24.04-85.85 14.24-21.95 34.79-37.3 58.36-37.3z"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp Business",
    badge: "Verified API",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        <path fill="#25D366" d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.041zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/>
      </svg>
    ),
  },
  {
    name: "Digital India",
    badge: "Govt. Initiative",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        <circle cx="12" cy="12" r="11" fill="#fff"/>
        <rect y="1" width="24" height="7" fill="#FF9933"/>
        <rect y="16" width="24" height="7" fill="#138808"/>
        <circle cx="12" cy="12" r="3" fill="none" stroke="#000080" strokeWidth="1"/>
        <circle cx="12" cy="12" r=".7" fill="#000080"/>
      </svg>
    ),
  },
  {
    name: "MSME Registered",
    badge: "Udyam Certified",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        <circle cx="12" cy="12" r="11" fill="#C8102E"/>
        <path d="M6 8h12v2H6zM6 11h12v2H6zM6 14h12v2H6z" fill="#fff"/>
        <text x="12" y="20" textAnchor="middle" fontSize="3.5" fontWeight="bold" fill="#fff">MSME</text>
      </svg>
    ),
  },
  {
    name: "SSL Secured",
    badge: "256-bit Encryption",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
        <path fill="#00C48C" d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4z"/>
        <path fill="#fff" d="M10.5 14.5l-2.5-2.5 1.4-1.4 1.1 1.1 4.1-4.1L16 9z"/>
      </svg>
    ),
  },
];

export function Partners() {
  return (
    <section className="py-20 px-4 border-y border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-neon mb-4">
            <BadgeCheck className="h-3.5 w-3.5" /> Verified Partners & Certifications
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl">
            India ke <span className="text-neon">Bharosemand Platforms</span> ke saath
          </h2>
          <p className="mt-3 text-white/55 text-sm sm:text-base max-w-xl mx-auto">
            Hum sirf official aur verified tools use karte hain — taaki aapka business 100% safe rahe.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="glass rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 hover:glow-cyan-soft hover:border-neon/30 transition group"
            >
              <div className="h-9 flex items-center justify-center">{p.svg}</div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white leading-tight">{p.name}</p>
                <p className="text-[10px] sm:text-[11px] text-neon/80 mt-0.5">{p.badge}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
