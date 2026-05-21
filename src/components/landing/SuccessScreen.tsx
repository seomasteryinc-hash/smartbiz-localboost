import { CheckCircle2, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://web.whatsapp.com/send?phone=917084457758";

type Props = {
  planId: string;
  amount: number;
  onBack: () => void;
};

export function SuccessScreen({ planId, amount, onBack }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="glass-strong glow-cyan rounded-3xl max-w-lg w-full p-10 text-center animate-float-up">
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full bg-neon/15 border border-neon/50 flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-neon" />
          </div>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-gradient-cyan">
          Payment Successful!
        </h1>
        <p className="mt-3 text-white/70">
          Shukriya! Aapka order safely receive ho gaya hai.
        </p>

        <div className="mt-6 glass rounded-xl p-5 text-left text-sm space-y-2">
          <div className="flex justify-between"><span className="text-white/55">Plan</span><span className="font-semibold">{planId}</span></div>
          <div className="flex justify-between"><span className="text-white/55">Amount Paid</span><span className="font-bold text-neon">₹{amount}</span></div>
          <div className="flex justify-between"><span className="text-white/55">Order ID</span><span className="font-mono text-xs">SBZ-{Date.now().toString().slice(-8)}</span></div>
          <div className="flex justify-between"><span className="text-white/55">Status</span><span className="text-whatsapp font-semibold">Confirmed</span></div>
        </div>

        <p className="mt-6 text-sm text-white/70">
          Hamari team agle <b className="text-neon">4 ghante</b> me aapse WhatsApp par contact karegi.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp text-black font-bold py-3 glow-green"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Karein
          </a>
          <button
            onClick={onBack}
            className="flex-1 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold py-3"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
