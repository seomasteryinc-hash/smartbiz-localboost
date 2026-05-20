import { MessageCircle } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div className="glass-strong mx-auto max-w-6xl rounded-2xl px-5 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-extrabold tracking-tight">
          <span className="inline-block h-7 w-7 rounded-lg bg-neon glow-cyan-soft" />
          <span className="text-white">SmartBiz</span>
          <span className="text-neon">Digital</span>
        </a>
        <a
          href="https://wa.me/917084457758"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-black glow-green transition hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Direct Help:</span> Chat Now
        </a>
      </div>
    </header>
  );
}
