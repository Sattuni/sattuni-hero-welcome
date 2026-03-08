import { useMemo } from "react";
import { Building2, PartyPopper, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useMobileDetection } from "@/hooks/useMobileDetection";
import { useState } from "react";

// Business examples (Unternehmen)
const businessExamples = [
  {
    title: "140 Leute, 100% vegan – Veganuary im Office",
    text: `Als die Anfrage kam, haben wir kurz geschluckt: 140 Leute, komplett vegan, und das Buffet sollte auch die Skeptiker überzeugen. Wir haben getüftelt, probiert und am Ende ein Menü zusammengestellt, das richtig gut ankam – Couscous mit frischer Minze, gefüllte Weinblätter, und ja, auch die Fleisch-Fans haben nachgeschöpft.`,
    short: "140 Leute, komplett vegan – Couscous, Weinblätter & Co. Auch die Skeptiker haben nachgeschöpft.",
  },
  {
    title: "Kundenbesuch – täglich frisch für 15 Personen",
    text: `Eine Agentur hatte wichtige Kunden aus den USA zu Besuch – fünf Tage lang. „Wir wollen nicht jeden Tag das Gleiche servieren", war die Ansage. Kein Problem: Montag gab's mediterrane Mezze, Dienstag frische Bowls, Mittwoch Fingerfood, Donnerstag ein Brunch-Buffet und Freitag zum Abschluss unser Signature-Menü. Die Gäste waren begeistert – und wir auch.`,
    short: "5 Tage, 5 verschiedene Menüs für internationale Gäste. Jeden Tag frisch und abwechslungsreich.",
  },
  {
    title: "Workshop im Office – 30 hungrige Köpfe",
    text: `Nach vier Stunden Brainstorming war der Hunger groß. Wir haben das Buffet so aufgebaut, dass alle sich bedienen konnten, ohne den Flow zu stören. Hummus, Falafel, frische Salate – alles fingerfood-tauglich, damit niemand mit Messer und Gabel hantieren musste. Der Workshop-Leiter meinte hinterher: „Das Essen war das Highlight."`,
    short: "Fingerfood-taugliches Buffet, ohne den Workshop-Flow zu stören. „Das Essen war das Highlight."",
  },
  {
    title: "Fortbildung mit Fingerfood – 25 Teilnehmer",
    text: `Eine ganztägige Fortbildung, Pausen von maximal 20 Minuten. Da muss das Essen schnell gehen, aber trotzdem satt machen. Wir haben Fingerfood in kleinen Portionen vorbereitet: Mini-Wraps, Falafel-Häppchen, Gemüsesticks mit Dip. Alles stand bereit, die Teilnehmer haben zugegriffen – fertig. Einfach und lecker.`,
    short: "Mini-Wraps, Falafel-Häppchen, Gemüsesticks – schnell, satt, unkompliziert.",
  },
  {
    title: "After-Work-Buffet – 40 Kollegen",
    text: `Freitag, 17 Uhr, das Team hatte eine harte Woche hinter sich. Unser Buffet stand bereit: Orientalische Klassiker, ein paar besondere Dips, frisches Brot aus dem Ofen. Die Stimmung war locker, das Essen verschwand schnell, und irgendwann saßen alle zusammen und haben geredet. Genau so soll es sein.`,
    short: "Orientalische Klassiker zum Feierabend. Locker, lecker, gemeinschaftlich.",
  },
  {
    title: "Sommerfest-Brunch – 90 Personen",
    text: `Das jährliche Firmensommerfest, diesmal als Brunch im Innenhof. 90 Leute, Kinder dabei, Vegetarier, Veganer – alles bunt gemischt. Wir haben ein vielfältiges Buffet aufgebaut: von herzhaften Mezze bis zu süßen Köstlichkeiten. Um 14 Uhr war alles weg, und die HR-Leiterin hat uns für nächstes Jahr schon wieder gebucht.`,
    short: "90 Personen, alle glücklich – und direkt für nächstes Jahr wieder gebucht.",
  },
];

// Private examples
const privateExamples = [
  {
    title: "Runder Geburtstag mit 90 Gästen",
    text: `Die Tochter rief an: „Mein Papa wird 60, wir brauchen jemanden, der das Essen macht – und zwar richtig gut." Gesagt, getan. Wir haben die Location dekoriert, das Buffet aufgebaut und uns dann unsichtbar gemacht. Die Familie hat gefeiert, wir haben hinterher alles wieder eingepackt. So soll das sein.`,
    short: "Papa wird 60: Buffet aufgebaut, unsichtbar gemacht, hinterher alles eingepackt.",
  },
  {
    title: "Geburtstag Zuhause – 20 Gäste",
    text: `„Ich will meinen Geburtstag genießen, nicht in der Küche stehen." Das war der Plan. Wir haben alles vorbereitet: Hummus, Falafel, Tabouleh, frisches Brot. Pünktlich geliefert, hübsch angerichtet. Die Gastgeberin hat mit ihren Freunden gelacht, statt zu kochen. Mission erfüllt.`,
    short: "Genießen statt kochen – pünktlich geliefert, hübsch angerichtet.",
  },
  {
    title: "BBQ im Garten – Beilagen für 25 Personen",
    text: `Der Gastgeber wollte selbst grillen, aber die Beilagen sollten was Besonderes sein. Wir haben geliefert: Baba Ganoush, verschiedene Salate, Fladenbrot, eingelegtes Gemüse. Das Fleisch kam vom Grill, der Rest von uns. Die perfekte Kombi – am Ende war von unseren Sachen zuerst alles weg.`,
    short: "Grillen + unsere Beilagen = perfekte Kombi. Unsere Sachen waren zuerst weg.",
  },
  {
    title: "Verlobungsfeier – 45 Gäste",
    text: `Die Verlobung sollte gefeiert werden, aber bitte ohne Catering-Feeling. Wir haben das Buffet so gestaltet, dass es aussah, als hätte jemand stundenlang selbst gekocht: Schalen, Platten, Holzbretter. Die Gäste haben gestaunt, das Paar hat gestrahlt. Genau die richtige Atmosphäre.`,
    short: "Sah aus wie selbst gekocht – Gäste staunten, das Paar strahlte.",
  },
  {
    title: "Hochzeit – 60 Gäste, orientalisch elegant",
    text: `Eine Hochzeit mit 60 Gästen in einer gemieteten Halle. Das Brautpaar wollte ein orientalisches Buffet – kein gesetztes Menü, sondern Vielfalt zum Selberbedienen. Wir haben Chafing-Dishes aufgestellt, die Tische dekoriert und ein Buffet zusammengestellt, das von Mezze über Hauptgerichte bis zum Dessert alles abdeckte. Der Abend war unvergesslich – für alle.`,
    short: "Orientalisches Hochzeitsbuffet: Mezze bis Dessert. Unvergesslich für alle.",
  },
  {
    title: "Falafel-Stand – Kindergeburtstag mit 35 Gästen",
    text: `„Können wir Falafel frisch vor Ort machen?" Die Mama war mutig, und wir haben zugesagt. Im Garten haben wir einen kleinen Stand aufgebaut und frische Falafel gebrutzelt. Die Kinder standen Schlange, haben zugeschaut, probiert – und am Ende waren alle satt und glücklich. Manchmal sind die verrückten Ideen die besten.`,
    short: "Frische Falafel live im Garten. Kinder standen Schlange – alle satt und glücklich.",
  },
];

const getRandomItem = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

interface PraxisBeispieleProps {
  className?: string;
}

const PraxisBeispiele = ({ className = "" }: PraxisBeispieleProps) => {
  const isMobile = useMobileDetection();
  const [expandedCard, setExpandedCard] = useState<'business' | 'private' | null>(null);

  const selectedExamples = useMemo(() => ({
    business: getRandomItem(businessExamples),
    private: getRandomItem(privateExamples),
  }), []);

  return (
    <section className={`py-8 md:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-4">
            Beispiele aus der Praxis
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Zwei typische Caterings, die zeigen, wie wir arbeiten.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto ${isMobile ? 'space-y-3' : 'grid md:grid-cols-2 gap-6 md:gap-8 items-stretch'}`}>
          {/* Business Example */}
          <Card className="border-l-4 border-l-primary h-full flex flex-col">
            <CardContent className={`${isMobile ? 'p-4' : 'p-6'} flex flex-col h-full`}>
              <div className="flex items-center gap-2 mb-2 md:mb-4">
                <Building2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-primary">Unternehmen</span>
              </div>
              <h3 className="text-sm md:text-lg font-bold text-foreground mb-2 md:mb-3">
                {selectedExamples.business.title}
              </h3>
              {isMobile ? (
                <>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {expandedCard === 'business' ? selectedExamples.business.text : selectedExamples.business.short}
                  </p>
                  <button
                    onClick={() => setExpandedCard(expandedCard === 'business' ? null : 'business')}
                    className="flex items-center gap-1 mt-2 text-xs text-primary font-medium min-h-[36px] touch-manipulation"
                  >
                    {expandedCard === 'business' ? (
                      <>Weniger <ChevronUp className="w-3 h-3" /></>
                    ) : (
                      <>Mehr lesen <ChevronDown className="w-3 h-3" /></>
                    )}
                  </button>
                </>
              ) : (
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {selectedExamples.business.text}
                </p>
              )}
            </CardContent>
          </Card>

          {/* Private Example */}
          <Card className="border-l-4 border-l-accent h-full flex flex-col">
            <CardContent className={`${isMobile ? 'p-4' : 'p-6'} flex flex-col h-full`}>
              <div className="flex items-center gap-2 mb-2 md:mb-4">
                <PartyPopper className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-accent">Private Feier</span>
              </div>
              <h3 className="text-sm md:text-lg font-bold text-foreground mb-2 md:mb-3">
                {selectedExamples.private.title}
              </h3>
              {isMobile ? (
                <>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {expandedCard === 'private' ? selectedExamples.private.text : selectedExamples.private.short}
                  </p>
                  <button
                    onClick={() => setExpandedCard(expandedCard === 'private' ? null : 'private')}
                    className="flex items-center gap-1 mt-2 text-xs text-primary font-medium min-h-[36px] touch-manipulation"
                  >
                    {expandedCard === 'private' ? (
                      <>Weniger <ChevronUp className="w-3 h-3" /></>
                    ) : (
                      <>Mehr lesen <ChevronDown className="w-3 h-3" /></>
                    )}
                  </button>
                </>
              ) : (
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {selectedExamples.private.text}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PraxisBeispiele;
