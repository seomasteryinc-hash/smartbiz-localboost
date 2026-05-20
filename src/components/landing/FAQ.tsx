import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Payment ke baad kaam kab shuru hoga?",
    a: "Jaise hi aap payment karenge, hamari team aapse details legi aur agle 4 ghante me kaam shuru ho jayega.",
  },
  {
    q: "Kya meri purani Google listing sahi ho sakti hai?",
    a: "Haan bilkul! Agar aapki shop pehle se hai par galat hai, toh hum use completely update aur optimize karenge.",
  },
  {
    q: "Kya mera paisa safe hai?",
    a: "Haan, hum Cashfree ka official verified secure payment portal use karte hain.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-center">
          Frequently Asked <span className="text-neon">Questions</span>
        </h2>
        <p className="mt-3 text-center text-white/60">(Sawaal Jawaab)</p>

        <Accordion type="single" collapsible className="mt-10 glass rounded-2xl px-5">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
              <AccordionTrigger className="text-left text-base font-semibold hover:text-neon hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/75 text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
