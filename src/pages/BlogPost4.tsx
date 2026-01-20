import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Leaf, Users, CheckCircle } from "lucide-react";
import LazyImage from "@/components/common/LazyImage";
import { useSiteMode } from "@/contexts/SiteModeContext";
import veganHeroImage from "@/assets/blog/vegan-arabic-classics.jpg";

const BlogPost4 = () => {
  const { setMode } = useSiteMode();

  useEffect(() => {
    setMode('catering');
  }, [setMode]);

  const veganClassics = [
    {
      title: "Falafel mit Sesam & Kräutern",
      description: "Die knusprigen Kichererbsen-Bällchen sind DER Klassiker schlechthin. Bei uns werden sie täglich frisch zubereitet – mit einer perfekten Balance aus Petersilie, Koriander, Kreuzkümmel und geröstetem Sesam. Die goldbraune Kruste und der saftige Kern machen sie zum absoluten Liebling auf jedem Buffet.",
      tip: "Serviert mit frischer Tahinisauce und eingelegtem Gemüse – ein Muss!"
    },
    {
      title: "Cremiger Hummus – klassisch & modern",
      description: "Hummus ist mehr als nur ein Dip – er ist das Herzstück der arabischen Mezze-Kultur. Unser klassischer Hummus überzeugt durch seine samtige Textur und den intensiven Tahini-Geschmack. Für Abwechslung sorgen unsere Variationen: mit gerösteter Paprika, Rote Bete oder frischen Kräutern.",
      tip: "Perfekt als Basis für Wraps oder als Dip für frisches Fladenbrot."
    },
    {
      title: "Baba Ghanoush mit Rauch-Aroma",
      description: "Geröstete Auberginen, über offener Flamme gegrillt, verleihen diesem Klassiker sein unverwechselbares Raucharoma. Kombiniert mit Tahini, Zitrone und einem Hauch Knoblauch entsteht ein cremiger Dip, der selbst Skeptiker überzeugt. Die rauchige Note macht ihn zum perfekten Begleiter für würzige Gerichte.",
      tip: "Das Geheimnis liegt im langsamen Rösten – so entfaltet sich das volle Aroma."
    },
    {
      title: "Frische Salate: Taboulé & Fattoush",
      description: "Keine Mezze-Platte ist komplett ohne diese beiden Salat-Klassiker. Taboulé besticht durch frische Petersilie, Minze, Bulgur und sonnengereiften Tomaten. Fattoush bringt mit knusprigen Fladenbrot-Chips und dem säuerlichen Sumak-Dressing eine ganz eigene Textur ins Spiel. Beide Salate sind leicht, erfrischend und voller Vitamine.",
      tip: "Ideal als Ausgleich zu reichhaltigeren Gerichten – bringt Frische auf den Teller."
    },
    {
      title: "Ofengemüse & gefüllte Teigtaschen",
      description: "Bunt, aromatisch und sättigend: Unser Ofengemüse wird mit orientalischen Gewürzen wie Ras el Hanout und Za'atar geröstet. Dazu servieren wir hausgemachte Teigtaschen – gefüllt mit Spinat und Zwiebeln oder würzigem Kürbis. Diese Kombination zeigt, wie vielfältig und befriedigend vegane Küche sein kann.",
      tip: "Die Teigtaschen eignen sich perfekt als Fingerfood für Stehempfänge."
    }
  ];

  return (
    <>
      <Helmet>
        <title>5 vegane Klassiker der arabischen Küche für Teams | Sattuni Blog</title>
        <meta name="description" content="Entdecke 5 bewährte vegane Lieblingsgerichte der arabischen Küche: Falafel, Hummus, Baba Ghanoush, Taboulé und mehr. Perfekt für Firmenevents und Team-Catering." />
        <meta name="keywords" content="veganes Catering, arabische Küche vegan, Falafel Catering, Hummus, Baba Ghanoush, Team Catering Düsseldorf, pflanzliches Buffet" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <ModeHeader />
        
        {/* Back Navigation */}
        <div className="container mx-auto px-4 pt-24 md:pt-28">
          <a 
            href="/catering/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zum Blog
          </a>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Hero Image */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-elegant">
              <LazyImage
                src={veganHeroImage}
                alt="Vegane arabische Klassiker: Falafel, Hummus, Baba Ghanoush und frische Salate"
                className="w-full h-full object-cover saturate-[0.8] contrast-[0.95] brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-primary/10 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-foreground/5"></div>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>20. Jan 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 min Lesezeit</span>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                Veganes Catering
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              5 vegane Klassiker der arabischen Küche, die jedes Team liebt
            </h1>

            {/* Intro */}
            <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
              <p className="text-xl leading-relaxed">
                <strong className="text-foreground">Keine Experimente – nur bewährte Lieblingsgerichte.</strong> Wenn es um veganes Catering geht, 
                muss niemand auf Geschmack oder Vielfalt verzichten. Die arabische Küche bietet von Haus aus 
                unzählige pflanzliche Klassiker, die seit Generationen begeistern. Hier sind fünf Gerichte, 
                die bei jedem Firmenevent garantiert für leere Teller sorgen.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl">
            
            {/* Why Vegan Arabic Works */}
            <div className="bg-card rounded-2xl p-8 mb-12 border border-border/50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Warum arabische Küche ideal für veganes Catering ist
                  </h2>
                  <p className="text-muted-foreground">
                    Anders als bei vielen westlichen Küchen, wo vegane Alternativen oft als "Ersatz" wahrgenommen werden, 
                    sind pflanzliche Gerichte in der arabischen Küche seit jeher die Stars. Hülsenfrüchte, Gemüse, Kräuter 
                    und Gewürze stehen im Mittelpunkt – nicht als Kompromiss, sondern als kulinarische Tradition.
                  </p>
                </div>
              </div>
            </div>

            {/* The 5 Classics */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Die 5 Klassiker im Detail
            </h2>

            <div className="space-y-8 mb-12">
              {veganClassics.map((dish, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {dish.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {dish.description}
                      </p>
                      <div className="flex items-start gap-2 p-4 bg-primary/5 rounded-xl">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground">
                          <strong>Tipp:</strong> {dish.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Benefits */}
            <div className="bg-card rounded-2xl p-8 mb-12 border border-border/50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    Warum Teams diese Gerichte lieben
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Inklusiv:</strong> Vegane Gerichte funktionieren für alle – egal ob vegan, vegetarisch oder flexitarisch.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Leicht verdaulich:</strong> Kein Nachmittagstief nach dem Mittagessen – perfekt für produktive Workshops.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Sharing-Kultur:</strong> Mezze-Style fördert den Austausch und lockert die Atmosphäre.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Visuell ansprechend:</strong> Die Farben und Texturen machen jedes Buffet zum Hingucker.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fazit */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Fazit: Bewährte Klassiker statt Experimente
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bei Sattuni setzen wir auf das, was funktioniert. Unsere veganen Klassiker sind keine 
                Notlösung, sondern die Essenz der arabischen Küche. Jedes Gericht wird täglich frisch 
                zubereitet, mit hochwertigen Zutaten und nach traditionellen Rezepten – modern interpretiert 
                für den heutigen Geschmack.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ob Falafel, Hummus oder Taboulé: Diese Gerichte haben sich über Jahrhunderte bewährt. 
                Und genau das ist es, was sie so perfekt für euer nächstes Teamevent macht.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Häufige Fragen zu veganem Catering
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="font-bold text-foreground mb-2">
                  Sind alle Sattuni-Gerichte vegan?
                </h3>
                <p className="text-muted-foreground">
                  Nein, aber ein großer Teil unserer Speisekarte ist von Natur aus vegan oder vegetarisch. 
                  Wir können jedes Buffet vollständig vegan gestalten – sprecht uns einfach bei der Anfrage darauf an.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="font-bold text-foreground mb-2">
                  Kann ich vegane und nicht-vegane Gerichte kombinieren?
                </h3>
                <p className="text-muted-foreground">
                  Absolut! Die meisten unserer Buffets bestehen aus einem Mix. So findet jeder Gast etwas 
                  nach seinem Geschmack – und die veganen Klassiker sind oft die ersten, die leer werden.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="font-bold text-foreground mb-2">
                  Wie kennzeichnet ihr Allergene?
                </h3>
                <p className="text-muted-foreground">
                  Bei jeder Lieferung erhaltet ihr eine klare Übersicht aller Allergene und Inhaltsstoffe. 
                  Unsere veganen Gerichte sind selbstverständlich frei von tierischen Produkten – viele auch glutenfrei.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-primary/20 shadow-elegant">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Veganes Catering für euer Team?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Lasst euch von unseren Klassikern überzeugen. Wir beraten euch gerne und stellen 
                ein Buffet zusammen, das alle begeistert – garantiert ohne Kompromisse beim Geschmack.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = '/catering?scrollTo=contact'}
              >
                Jetzt Catering anfragen
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost4;
