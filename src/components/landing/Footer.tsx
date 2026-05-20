export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-6 items-center justify-between text-sm">
        <div>
          <p className="font-display font-bold text-white">
            SmartBiz <span className="text-neon">Digital Marketing</span>
          </p>
          <p className="text-white/55 text-xs mt-1">Smarter Business, Bigger Growth.</p>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <div className="flex gap-5 text-white/70">
            <a href="#" className="hover:text-neon">Privacy Policy</a>
            <a href="#" className="hover:text-neon">Terms of Service</a>
          </div>
          <p className="text-white/55 text-xs">
            WhatsApp Helpline: <span className="text-neon font-semibold">+91 7084457758</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
