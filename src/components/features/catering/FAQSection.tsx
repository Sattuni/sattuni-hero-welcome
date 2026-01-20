import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    value: "ablauf",
    question: "Wie läuft so eine Anfrage ab?",
    answer: (
      <>
        <p className="mb-3">
          Ziemlich unkompliziert: Ihr schickt uns eine Anfrage, wir melden uns innerhalb von einem Tag. 
          Dann quatschen wir kurz über die Details – Termin, wie viele Leute, ob's was Besonderes gibt.
        </p>
        <p>
          Danach kriegt ihr ein Angebot mit allem drin. Wenn's passt, läuft's.
        </p>
      </>
    )
  },
  {
    value: "lieferung",
    question: "Und wie ist das mit der Lieferung?",
    answer: (
      <>
        <p className="mb-3">
          Wir machen vorher ein Zeitfenster aus – damit das Essen da ist, bevor euer Meeting oder Event losgeht. 
          Nicht zu früh, nicht zu spät.
        </p>
        <p>
          Wenn ihr wollt, bauen wir auch auf. Dann ist alles fertig, wenn ihr's braucht.
        </p>
      </>
    )
  },
  {
    value: "mindestpersonen",
    question: "Ab wie vielen Leuten macht ihr das?",
    answer: (
      <>
        <p className="mb-3">
          Ab 20 Personen. Das ist die Größe, ab der sich's für uns lohnt und ihr auch was davon habt.
        </p>
        <p>
          <strong>Weniger Leute?</strong> Kein Problem – dann bestellt einfach über unseren normalen Lieferservice.
        </p>
      </>
    )
  },
  {
    value: "anpassungen",
    question: "Kann man noch was ändern, wenn's schon gebucht ist?",
    answer: (
      <p className="mb-3">
        Klar, Anzahl anpassen geht noch bis eine Woche vorher. Wir sagen euch Bescheid, welche Fristen gelten.
      </p>
    )
  },
  {
    value: "ausstattung",
    question: "Bringt ihr auch Geschirr mit?",
    answer: (
      <p className="mb-3">
        Wenn ihr wollt, ja. Teller, Besteck, Wärmebehälter – alles kein Thema. Sagt einfach Bescheid.
      </p>
    )
  },
  {
    value: "ernaehrung",
    question: "Gibt's auch was Veganes?",
    answer: (
      <p className="mb-3">
        Jede Menge. Falafel, Hummus, die ganzen Salate – vieles ist bei uns von Natur aus vegan oder vegetarisch. 
        Schreibt uns einfach, was ihr braucht.
      </p>
    )
  },
  {
    value: "liefergebiet",
    question: "Wie weit liefert ihr?",
    answer: (
      <p className="mb-3">
        Düsseldorf und drumherum – so etwa 50 km. In Düsseldorf selbst ist die Lieferung meistens inklusive.
      </p>
    )
  },
  {
    value: "kontakt",
    question: "Mit wem rede ich eigentlich?",
    answer: (
      <p className="mb-3">
        Ihr kriegt einen festen Ansprechpartner. Der bleibt auch dran – von der ersten Nachricht bis zum fertigen Buffet. 
        Kein ständiges Weiterleiten.
      </p>
    )
  }
];

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 3;
  
  const visibleFaqs = showAll ? faqs : faqs.slice(0, initialCount);
  const hiddenCount = faqs.length - initialCount;

  return (
    <section className="py-12 md:py-20 bg-gradient-subtle scroll-mt-24" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-2 md:mb-4">
            <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Häufige Fragen
            </h2>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {visibleFaqs.map((faq) => (
              <AccordionItem 
                key={faq.value}
                value={faq.value} 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {hiddenCount > 0 && (
            <div className="text-center mt-6">
              <Button
                variant="ghost"
                onClick={() => setShowAll(!showAll)}
                className="gap-2 text-primary hover:text-primary/80"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Weniger anzeigen
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    {hiddenCount} weitere Fragen anzeigen
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
