import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917084457758"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[60]"
    >
      <div className="relative group">
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/30 animate-pulse" />

        {/* Button */}
        <div className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-black shadow-lg shadow-[#25D366]/40 transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
          <MessageCircle className="h-7 w-7 fill-black" />
        </div>
      </div>
    </a>
  );
}
