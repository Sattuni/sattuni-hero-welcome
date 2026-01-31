import { useMemo } from "react";
import { Building2, PartyPopper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Business examples (Unternehmen)
const businessExamples = [
  {
    title: "140 Leute, 100% vegan – Veganuary im Office",
    text: `Als die Anfrage kam, haben wir kurz geschluckt: 140 Leute, komplett vegan, und das Buffet sollte auch die Skeptiker überzeugen. Wir haben getüftelt, probiert und am Ende ein Menü zusammengestellt, das richtig gut ankam – Couscous mit frischer Minze, gefüllte Weinblätter, und ja, auch die Fleisch-Fans haben nachgeschöpft.`,
  },
  {
    title: "Kundenbesuch für eine Woche – täglich frisch für 15 Personen",
    text: `Eine Agentur hatte wichtige Kunden aus den USA zu Besuch – fünf Tage lang. „Wir wollen nicht jeden Tag das Gleiche servieren", war die Ansage. Kein Problem: Montag gab's mediterrane Mezze, Dienstag frische Bowls, Mittwoch Fingerfood, Donnerstag ein Brunch-Buffet und Freitag zum Abschluss unser Signature-Menü. Die Gäste waren begeistert – und wir auch.`,
  },
  {
    title: "Teambuilding-Workshop im Office – 30 hungrige Köpfe",
    text: `Nach vier Stunden Brainstorming war der Hunger groß. Wir haben das Buffet so aufgebaut, dass alle sich bedienen konnten, ohne den Flow zu stören. Hummus, Falafel, frische Salate – alles fingerfood-tauglich, damit niemand mit Messer und Gabel hantieren musste. Der Workshop-Leiter meinte hinterher: „Das Essen war das Highlight."`,
  },
  {
    title: "Fortbildung mit Fingerfood – 25 Teilnehmer, null Stress",
    text: `Eine ganztägige Fortbildung, Pausen von maximal 20 Minuten. Da muss das Essen schnell gehen, aber trotzdem satt machen. Wir haben Fingerfood in kleinen Portionen vorbereitet: Mini-Wraps, Falafel-Häppchen, Gemüsesticks mit Dip. Alles stand bereit, die Teilnehmer haben zugegriffen – fertig. Einfach und lecker.`,
  },
  {
    title: "After-Work-Buffet – 40 Kollegen feiern den Feierabend",
    text: `Freitag, 17 Uhr, das Team hatte eine harte Woche hinter sich. Unser Buffet stand bereit: Orientalische Klassiker, ein paar besondere Dips, frisches Brot aus dem Ofen. Die Stimmung war locker, das Essen verschwand schnell, und irgendwann saßen alle zusammen und haben geredet. Genau so soll es sein.`,
  },
  {
    title: "Sommerfest-Brunch – 90 Personen feiern im Freien",
    text: `Das jährliche Firmensommerfest, diesmal als Brunch im Innenhof. 90 Leute, Kinder dabei, Vegetarier, Veganer – alles bunt gemischt. Wir haben ein vielfältiges Buffet aufgebaut: von herzhaften Mezze bis zu süßen Köstlichkeiten. Um 14 Uhr war alles weg, und die HR-Leiterin hat uns für nächstes Jahr schon wieder gebucht.`,
  },
];

// Private examples (Private Feiern)
const privateExamples = [
  {
    title: "Runder Geburtstag mit 90 Gästen",
    text: `Die Tochter rief an: „Mein Papa wird 60, wir brauchen jemanden, der das Essen macht – und zwar richtig gut." Gesagt, getan. Wir haben die Location dekoriert, das Buffet aufgebaut und uns dann unsichtbar gemacht. Die Familie hat gefeiert, wir haben hinterher alles wieder eingepackt. So soll das sein.`,
  },
  {
    title: "Geburtstag Zuhause – 20 Gäste, 0 Stress",
    text: `„Ich will meinen Geburtstag genießen, nicht in der Küche stehen." Das war der Plan. Wir haben alles vorbereitet: Hummus, Falafel, Tabouleh, frisches Brot. Pünktlich geliefert, hübsch angerichtet. Die Gastgeberin hat mit ihren Freunden gelacht, statt zu kochen. Mission erfüllt.`,
  },
  {
    title: "BBQ im Garten – unsere Beilagen zum Grillen für 25 Personen",
    text: `Der Gastgeber wollte selbst grillen, aber die Beilagen sollten was Besonderes sein. Wir haben geliefert: Baba Ganoush, verschiedene Salate, Fladenbrot, eingelegtes Gemüse. Das Fleisch kam vom Grill, der Rest von uns. Die perfekte Kombi – am Ende war von unseren Sachen zuerst alles weg.`,
  },
  {
    title: "Verlobungsfeier Zuhause – 45 Gäste, ein besonderer Abend",
    text: `Die Verlobung sollte gefeiert werden, aber bitte ohne Catering-Feeling. Wir haben das Buffet so gestaltet, dass es aussah, als hätte jemand stundenlang selbst gekocht: Schalen, Platten, Holzbretter. Die Gäste haben gestaunt, das Paar hat gestrahlt. Genau die richtige Atmosphäre.`,
  },
  {
    title: "Hochzeit in einer Location – 60 Gäste, orientalisch elegant",
    text: `Eine Hochzeit mit 60 Gästen in einer gemieteten Halle. Das Brautpaar wollte ein orientalisches Buffet – kein gesetztes Menü, sondern Vielfalt zum Selberbedienen. Wir haben Chafing-Dishes aufgestellt, die Tische dekoriert und ein Buffet zusammengestellt, das von Mezze über Hauptgerichte bis zum Dessert alles abdeckte. Der Abend war unvergesslich – für alle.`,
  },
  {
    title: "Falafel-Stand live – Kindergeburtstag mit 35 kleinen Gästen",
    text: `„Können wir Falafel frisch vor Ort machen?" Die Mama war mutig, und wir haben zugesagt. Im Garten haben wir einen kleinen Stand aufgebaut und frische Falafel gebrutzelt. Die Kinder standen Schlange, haben zugeschaut, probiert – und am Ende waren alle satt und glücklich. Manchmal sind die verrückten Ideen die besten.`,
  },
];

// Helper to get random item from array
const getRandomItem = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

interface PraxisBeispieleProps {
  className?: string;
}

const PraxisBeispiele = ({ className = "" }: PraxisBeispieleProps) => {
  // Select one random example from each category on mount
  const selectedExamples = useMemo(() => ({
    business: getRandomItem(businessExamples),
    private: getRandomItem(privateExamples),
  }), []);

  return (
    <section className={`py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Beispiele aus der Praxis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zwei typische Caterings, die zeigen, wie wir arbeiten.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto items-stretch">
          {/* Business Example */}
          <Card className="border-l-4 border-l-primary h-full flex flex-col">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-primary">Unternehmen</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {selectedExamples.business.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {selectedExamples.business.text}
              </p>
            </CardContent>
          </Card>

          {/* Private Example */}
          <Card className="border-l-4 border-l-accent h-full flex flex-col">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                <PartyPopper className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-accent">Private Feier</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {selectedExamples.private.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {selectedExamples.private.text}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PraxisBeispiele;
