import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://web.whatsapp.com/send?phone=917084457758";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div className="glass-strong mx-auto max-w-6xl rounded-2xl pl-3 pr-3 py-2 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="SmartBiz Digital Marketing"
            className="h-10 w-10 rounded-lg object-cover glow-cyan-soft"
          />
          <span className="font-display font-extrabold tracking-tight hidden sm:inline">
            <span className="text-white">SmartBiz</span>{" "}
            <span className="text-neon">Digital</span>
          </span>
        </a>
        <a
          href={WHATSAPP_URL}
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
