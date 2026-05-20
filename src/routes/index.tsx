import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Pricing } from "@/components/landing/Pricing";
import { Partners } from "@/components/landing/Partners";
import { Trust } from "@/components/landing/Trust";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { PaymentModal } from "@/components/landing/PaymentModal";
import { SuccessScreen } from "@/components/landing/SuccessScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SmartBiz Digital Marketing — Apni Dukan ko Google Maps par laayein" },
      {
        name: "description",
        content:
          "India's most trusted digital growth partner for Janseva Kendras & Mobile Shops. Google Business setup, local ads & branding starting at ₹399.",
      },
      { property: "og:title", content: "SmartBiz Digital Marketing" },
      { property: "og:description", content: "Apni shop ko online lekar aayein. 24-48 hrs setup. Cashfree secured." },
    ],
  }),
  component: LandingPage,
});

declare global {
  interface Window {
    Cashfree?: any;
  }
}

function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<{ id: string; amount: number } | null>(null);
  const [success, setSuccess] = useState<{ id: string; amount: number } | null>(null);

  // Inject Cashfree SDK v3
  useEffect(() => {
    if (document.querySelector('script[data-cashfree="v3"]')) return;
    const s = document.createElement("script");
    s.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    s.async = true;
    s.dataset.cashfree = "v3";
    s.onload = () => {
      try {
        if (window.Cashfree) {
          // Initialize in sandbox mode
          window.Cashfree({ mode: "sandbox" });
        }
      } catch (e) {
        console.warn("Cashfree init skipped", e);
      }
    };
    document.head.appendChild(s);
  }, []);

  const handlePayment = (planId: string, amount: number) => {
    setSelected({ id: planId, amount });
    setModalOpen(true);
  };

  if (success) {
    return (
      <main className="min-h-screen">
        <SuccessScreen
          planId={success.id}
          amount={success.amount}
          onBack={() => setSuccess(null)}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <Hero />
      <Problem />
      <Pricing onBuy={handlePayment} />
      <Partners />
      <Trust />
      <FAQ />
      <Footer />

      <PaymentModal
        open={modalOpen}
        planId={selected?.id ?? null}
        amount={selected?.amount ?? null}
        onClose={() => setModalOpen(false)}
        onSuccess={() => {
          setModalOpen(false);
          if (selected) setSuccess(selected);
        }}
      />
    </main>
  );
}
