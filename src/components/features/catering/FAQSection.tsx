import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    value: "ablauf",
    question: "Wie läuft eine Catering-Anfrage ab?",
    answer: (
      <>
        <p className="mb-3">
          Nach Eingang eurer Anfrage melden wir uns innerhalb von 24 Stunden. 
          Gemeinsam klären wir Details wie Termin, Gästezahl und besondere Anforderungen.
        </p>
        <p>
          Ihr erhaltet anschließend ein verbindliches Angebot mit allen wichtigen Informationen.
        </p>
      </>
    )
  },
  {
    value: "lieferung",
    question: "Wie wird die Lieferung koordiniert?",
    answer: (
      <>
        <p className="mb-3">
          Die Lieferung erfolgt in einem vorab vereinbarten Zeitfenster. 
          So stellen wir sicher, dass alles rechtzeitig vor Ort ist – 
          bevor euer Meeting oder Event beginnt.
        </p>
        <p>
          Bei Aufbau-Service kommen wir rechtzeitig, um alles vorzubereiten.
        </p>
      </>
    )
  },
  {
    value: "mindestpersonen",
    question: "Ab wie vielen Personen bietet ihr Catering an?",
    answer: (
      <>
        <p className="mb-3">
          Unser Catering-Service ist ab 20 Personen verfügbar. 
          Diese Mindestgröße ermöglicht uns eine professionelle Durchführung 
          mit entsprechendem Service-Level.
        </p>
        <p>
          <strong>Für kleinere Gruppen:</strong> Nutzt gerne unseren 
          regulären Lieferservice über den Online-Shop.
        </p>
      </>
    )
  },
  {
    value: "anpassungen",
    question: "Können Änderungen nach der Buchung vorgenommen werden?",
    answer: (
      <p className="mb-3">
        Ja, Anpassungen bei der Personenanzahl sind bis eine Woche vor dem Liefertag möglich. 
        Wir informieren euch rechtzeitig über die Fristen.
      </p>
    )
  },
  {
    value: "ausstattung",
    question: "Ist Geschirr und Ausstattung enthalten?",
    answer: (
      <p className="mb-3">
        Auf Wunsch stellen wir Geschirr, Besteck und Wärmebehälter bereit. 
        Die Details besprechen wir gemeinsam nach eurer Anfrage.
      </p>
    )
  },
  {
    value: "ernaehrung",
    question: "Gibt es vegetarische und vegane Optionen?",
    answer: (
      <p className="mb-3">
        Ja, unsere Küche bietet eine große Auswahl an vegetarischen und veganen Gerichten. 
        Teilt uns eure Anforderungen einfach in der Anfrage mit.
      </p>
    )
  },
  {
    value: "liefergebiet",
    question: "Wie weit liefert ihr?",
    answer: (
      <p className="mb-3">
        Wir liefern in Düsseldorf und Umgebung – bis zu 50 km Radius. 
        Innerhalb Düsseldorfs ist die Anlieferung in der Regel inklusive.
      </p>
    )
  },
  {
    value: "kontakt",
    question: "Wer ist mein Ansprechpartner?",
    answer: (
      <p className="mb-3">
        Ihr erhaltet nach der Anfrage einen festen Ansprechpartner, 
        der euch durch den gesamten Prozess begleitet – 
        von der Planung bis zur Durchführung.
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
