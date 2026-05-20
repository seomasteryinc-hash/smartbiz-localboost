import { useEffect, useState } from "react";
import { Loader2, ShieldCheck, CheckCircle2 } from "lucide-react";

type Props = {
  open: boolean;
  planId: string | null;
  amount: number | null;
  onClose: () => void;
  onSuccess: () => void;
};

export function PaymentModal({ open, planId, amount, onClose, onSuccess }: Props) {
  const [stage, setStage] = useState<"init" | "loading" | "redirect">("init");

  useEffect(() => {
    if (!open) {
      setStage("init");
      return;
    }
    setStage("init");
    const t1 = setTimeout(() => setStage("loading"), 800);
    const t2 = setTimeout(() => setStage("redirect"), 2200);
    const t3 = setTimeout(() => onSuccess(), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [open, onSuccess]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-float-up">
      <div className="glass-strong glow-cyan rounded-2xl max-w-md w-full p-8 text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white/40 hover:text-white text-sm"
        >
          ✕
        </button>
        <div className="flex justify-center mb-5">
          <div className="h-16 w-16 rounded-full bg-neon/10 border border-neon/40 flex items-center justify-center">
            {stage === "redirect" ? (
              <CheckCircle2 className="h-8 w-8 text-neon" />
            ) : (
              <Loader2 className="h-8 w-8 text-neon animate-spin" />
            )}
          </div>
        </div>

        <h3 className="font-display font-extrabold text-xl text-white">
          {stage === "init" && "Initiating Secure Payment…"}
          {stage === "loading" && "Connecting to Cashfree Gateway…"}
          {stage === "redirect" && "Payment Verified!"}
        </h3>
        <p className="mt-2 text-sm text-white/65">
          {stage === "redirect"
            ? "Redirecting to your success page…"
            : "Initiating Secure Cashfree Payment Gateway..."}
        </p>

        <div className="mt-6 glass rounded-xl p-4 text-left text-sm">
          <div className="flex justify-between text-white/60">
            <span>Plan</span>
            <span className="text-white font-semibold">{planId}</span>
          </div>
          <div className="flex justify-between text-white/60 mt-1">
            <span>Amount</span>
            <span className="text-neon font-bold">₹{amount}</span>
          </div>
          <div className="flex justify-between text-white/60 mt-1">
            <span>Mode</span>
            <span className="text-white">Sandbox</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/50">
          <ShieldCheck className="h-3.5 w-3.5 text-neon" />
          PCI-DSS · SSL Secured · Cashfree Verified
        </div>
      </div>
    </div>
  );
}
