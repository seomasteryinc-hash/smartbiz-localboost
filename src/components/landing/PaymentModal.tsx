import { useEffect, useMemo, useState } from "react";
import { ShieldCheck, CheckCircle2, Smartphone, Copy, ExternalLink } from "lucide-react";

type Props = {
  open: boolean;
  planId: string | null;
  amount: number | null;
  onClose: () => void;
  onSuccess: () => void;
};

const UPI_ID = "wavenb2b@ptaxis";
const PAYEE_NAME = "SmartBiz Digital Marketing";

export function PaymentModal({ open, planId, amount, onClose, onSuccess }: Props) {
  const [copied, setCopied] = useState(false);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    if (!open) {
      setCopied(false);
      setPaid(false);
    }
  }, [open]);

  const txnRef = useMemo(
    () => `SBZ${Date.now().toString().slice(-8)}`,
    [open, planId]
  );

  const upiLink = useMemo(() => {
    const params = new URLSearchParams({
      pa: UPI_ID,
      pn: PAYEE_NAME,
      am: String(amount ?? ""),
      cu: "INR",
      tn: `SmartBiz ${planId ?? ""} ${txnRef}`,
      tr: txnRef,
    });
    return `upi://pay?${params.toString()}`;
  }, [planId, amount, txnRef]);

  const appLinks = [
    { name: "Google Pay", url: `tez://upi/pay?${upiLink.split("?")[1]}` },
    { name: "PhonePe", url: `phonepe://pay?${upiLink.split("?")[1]}` },
    { name: "Paytm", url: `paytmmp://pay?${upiLink.split("?")[1]}` },
    { name: "Any UPI App", url: upiLink },
  ];

  const handleOpenUPI = (url: string) => {
    window.location.href = url;
    setPaid(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  if (!open) return null;

  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiLink)}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-float-up overflow-y-auto">
      <div className="glass-strong glow-cyan rounded-2xl max-w-md w-full p-6 sm:p-8 text-center relative my-8">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white/40 hover:text-white text-sm"
        >
          ✕
        </button>

        <div className="flex justify-center mb-4">
          <div className="h-14 w-14 rounded-full bg-neon/10 border border-neon/40 flex items-center justify-center">
            <Smartphone className="h-7 w-7 text-neon" />
          </div>
        </div>

        <h3 className="font-display font-extrabold text-xl text-white">
          Pay with any UPI App
        </h3>
        <p className="mt-2 text-sm text-white/65">
          Mobile par button dabayein — aapki UPI app turant khulegi.
        </p>

        {/* Amount summary */}
        <div className="mt-5 glass rounded-xl p-4 text-left text-sm">
          <div className="flex justify-between text-white/60">
            <span>Plan</span>
            <span className="text-white font-semibold">{planId}</span>
          </div>
          <div className="flex justify-between text-white/60 mt-1">
            <span>Amount</span>
            <span className="text-neon font-bold">₹{amount}</span>
          </div>
          <div className="flex justify-between text-white/60 mt-1">
            <span>UPI ID</span>
            <button
              onClick={handleCopy}
              className="text-white font-mono text-xs inline-flex items-center gap-1 hover:text-neon"
            >
              {UPI_ID} <Copy className="h-3 w-3" />
            </button>
          </div>
          {copied && (
            <p className="text-[11px] text-neon mt-1 text-right">UPI ID copied!</p>
          )}
        </div>

        {/* App buttons */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {appLinks.map((app) => (
            <button
              key={app.name}
              onClick={() => handleOpenUPI(app.url)}
              className="rounded-xl bg-white/10 hover:bg-neon/20 border border-white/15 hover:border-neon/50 text-white text-sm font-semibold py-3 transition inline-flex items-center justify-center gap-1.5"
            >
              <ExternalLink className="h-3.5 w-3.5" /> {app.name}
            </button>
          ))}
        </div>

        {/* QR for desktop */}
        <div className="mt-5 glass rounded-xl p-4">
          <p className="text-xs text-white/60 mb-2">Desktop? Scan QR from any UPI app</p>
          <img
            src={qrSrc}
            alt="UPI QR Code"
            className="mx-auto rounded-lg bg-white p-2"
            width={180}
            height={180}
          />
        </div>

        {/* Confirm payment */}
        {paid && (
          <button
            onClick={onSuccess}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-neon text-neon-foreground font-bold py-3 glow-cyan"
          >
            <CheckCircle2 className="h-4 w-4" /> Maine Payment Kar Diya
          </button>
        )}

        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/50">
          <ShieldCheck className="h-3.5 w-3.5 text-neon" />
          100% Secure UPI · Direct to Verified Merchant
        </div>
      </div>
    </div>
  );
}
