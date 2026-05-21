import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

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
      { property: "og:description", content: "Apni shop ko online lekar aayein. 24-48 hrs setup with verified digital support." },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState<{ id: string; amount: number } | null>(null);
  const [success, setSuccess] = useState<{ id: string; amount: number } | null>(null);

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

      <FloatingWhatsApp />

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
