import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useMobileDetection } from "@/hooks/useMobileDetection";

const faqs = [
  {
    value: "ablauf",
    question: "Wie läuft eine Anfrage ab?",
    answer: "Anfrage senden → wir melden uns in 24h → Details besprechen → Angebot erhalten → bestätigen → fertig."
  },
  {
    value: "lieferung",
    question: "Wie ist das mit der Lieferung?",
    answer: "Wir machen vorher ein Zeitfenster aus. Wenn ihr wollt, bauen wir auch auf. Dann ist alles fertig, wenn ihr's braucht."
  },
  {
    value: "mindestpersonen",
    question: "Ab wie vielen Leuten?",
    answer: "Ab 20 Personen. Weniger? Kein Problem – dann bestellt einfach über unseren normalen Lieferservice."
  },
  {
    value: "anpassungen",
    question: "Kann man noch was ändern?",
    answer: "Klar, Anzahl anpassen geht noch bis eine Woche vorher. Wir sagen euch Bescheid, welche Fristen gelten."
  },
  {
    value: "ausstattung",
    question: "Bringt ihr auch Geschirr mit?",
    answer: "Wenn ihr wollt, ja. Teller, Besteck, Wärmebehälter – alles kein Thema."
  },
  {
    value: "ernaehrung",
    question: "Gibt's auch was Veganes?",
    answer: "Jede Menge. Falafel, Hummus, Salate – vieles ist bei uns von Natur aus vegan oder vegetarisch."
  },
  {
    value: "liefergebiet",
    question: "Wie weit liefert ihr?",
    answer: "Düsseldorf und drumherum – circa 50 km. In Düsseldorf selbst ist die Lieferung meistens inklusive."
  },
  {
    value: "kontakt",
    question: "Mit wem rede ich?",
    answer: "Ihr kriegt einen festen Ansprechpartner. Der bleibt dran – von der ersten Nachricht bis zum fertigen Buffet."
  }
];

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useMobileDetection();
  const initialCount = isMobile ? 3 : 4;
  
  const visibleFaqs = showAll ? faqs : faqs.slice(0, initialCount);
  const hiddenCount = faqs.length - initialCount;

  return (
    <section className="py-8 md:py-16 bg-gradient-subtle scroll-mt-24" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            <h2 className="text-lg md:text-3xl font-bold text-foreground">
              Häufige Fragen
            </h2>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
            {visibleFaqs.map((faq) => (
              <AccordionItem 
                key={faq.value}
                value={faq.value} 
                className="bg-background border border-border rounded-lg px-4 md:px-5"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-4 text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {hiddenCount > 0 && (
            <div className="text-center mt-4">
              <Button variant="ghost" size="sm" onClick={() => setShowAll(!showAll)} className="gap-1 text-primary text-xs">
                {showAll ? <><ChevronUp className="w-3 h-3" /> Weniger</> : <><ChevronDown className="w-3 h-3" /> {hiddenCount} weitere Fragen</>}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
