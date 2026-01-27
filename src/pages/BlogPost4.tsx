import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
      title: "Falafel",
      description: "Der Klassiker. Bei uns gibt's die jeden Tag frisch – mit Petersilie, Koriander und ordentlich Sesam drauf. Die Kruste knusprig, innen saftig. Ehrlich gesagt, die gehen immer als erstes weg, egal bei welchem Event.",
      tip: "Am besten mit frischer Tahini-Sauce. Ohne geht's nicht."
    },
    {
      title: "Hummus",
      description: "Ein guter Hummus braucht eigentlich nicht viel: Kichererbsen, Tahini, Zitrone, Knoblauch. Aber die Balance muss stimmen. Wir machen auch Varianten – mit Rote Bete oder gerösteter Paprika, wenn ihr mal was anderes wollt.",
      tip: "Mit warmem Fladenbrot. Kalt ist er auch gut, aber warm ist besser."
    },
    {
      title: "Baba Ghanoush",
      description: "Das ist dieser Auberginen-Dip mit dem rauchigen Geschmack. Der kommt daher, dass wir die Auberginen über offener Flamme rösten. Manche kennen das nicht, aber wer's einmal probiert hat, will's immer wieder.",
      tip: "Passt überraschend gut zu würzigen Sachen. Probiert's mal mit Falafel zusammen."
    },
    {
      title: "Taboulé & Fattoush",
      description: "Zwei Salate, die fast immer dabei sind. Taboulé ist hauptsächlich Petersilie mit ein bisschen Bulgur, Tomaten, Zitrone. Super frisch. Fattoush hat knusprige Fladenbrot-Chips drin und Sonnenblumen- und Granatapfelkerne für den Crunch.",
      tip: "Perfekt als Ausgleich, wenn's sonst eher reichhaltig wird."
    },
    {
      title: "Ofengemüse & Teigtaschen",
      description: "Buntes Gemüse aus dem Ofen, mit Za'atar gewürzt. Dazu hausgemachte Teigtaschen – mit Kartoffel oder Spinat gefüllt. Die lassen sich super mit einer Hand essen, ideal für Stehempfänge.",
      tip: "Die Teigtaschen sind auch kalt noch gut. Falls was übrig bleibt."
    }
  ];

  return (
    <>
      <Helmet>
        <title>5 vegane Klassiker der arabischen Küche für Teams | Sattuni Blog</title>
        <meta name="description" content="Entdecke 5 bewährte vegane Lieblingsgerichte der arabischen Küche: Falafel, Hummus, Baba Ghanoush, Taboulé und mehr. Perfekt für Firmenevents und Team-Catering." />
        <meta name="keywords" content="veganes Catering, arabische Küche vegan, Falafel Catering, Hummus, Baba Ghanoush, Team Catering Düsseldorf, pflanzliches Buffet" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sattuni.de/catering/blog/vegane-klassiker-arabische-kueche" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="5 vegane Klassiker der arabischen Küche, die jedes Team liebt" />
        <meta property="og:description" content="Die veganen Sachen gehen bei Firmenevents als erstes weg – und das sind einfach die Klassiker unserer Großeltern." />
        <meta property="og:image" content="https://sattuni.de/blog/vegan-arabic-classics.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://sattuni.de/catering/blog/vegane-klassiker-arabische-kueche" />
        <meta property="og:site_name" content="Sattuni Catering" />
        <meta property="article:published_time" content="2026-01-20" />
        <meta property="article:author" content="Sattuni" />
        
        {/* Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="5 vegane Klassiker der arabischen Küche | Sattuni" />
        <meta name="twitter:description" content="Falafel, Hummus, Baba Ghanoush – arabische Küche ist von Natur aus vegan." />
        <meta name="twitter:image" content="https://sattuni.de/blog/vegan-arabic-classics.jpg" />
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
                Wenn wir für Firmenevents kochen, stellen wir oft fest: Die veganen Sachen gehen als erstes weg. Und das sind keine fancy Experimente – sondern einfach die Klassiker, die schon unsere Großeltern gemacht haben. Hier sind fünf davon, die eigentlich immer funktionieren.
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
                    Warum das so gut funktioniert
                  </h2>
                  <p className="text-muted-foreground">
                    In der arabischen Küche sind pflanzliche Gerichte keine Alternative oder Ersatz für irgendwas – sie sind einfach Teil der Tradition. Hülsenfrüchte, Gemüse, Kräuter, Gewürze – das war schon immer so. Deswegen schmeckt's auch nicht nach "Ersatzprodukt", sondern einfach nach gutem Essen.
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
                    Warum Teams das mögen
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Funktioniert für alle:</strong> Egal ob jemand vegan lebt oder nicht – diese Gerichte schmecken jedem.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Macht nicht müde:</strong> Kein Food-Koma nach dem Mittagessen. Das ist bei Workshops oder langen Meetings echt wichtig.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Zum Teilen gemacht:</strong> Mezze-Style fördert Gespräche. Man nimmt sich, tauscht, redet dabei.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Sieht gut aus:</strong> Die Farben, die Texturen – so ein Buffet macht halt was her.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fazit */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Kurz gesagt
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Gerichte sind keine Notlösung für "die eine vegane Kollegin". Sie sind einfach richtig gut. Das war schon so, als unsere Omas die gemacht haben – und daran hat sich nichts geändert.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wir machen alles an dem Tag frisch, mit ordentlichen Zutaten. Wenn ihr euer nächstes Event plant und was Vernünftiges zu essen haben wollt – meldet euch.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Ein paar Fragen, die oft kommen
            </h2>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="font-bold text-foreground mb-2">
                  Ist bei euch alles vegan?
                </h3>
                <p className="text-muted-foreground">
                  Nee, aber viel davon. Die Klassiker – Falafel, Hummus, die Salate – sind von Natur aus vegan. Wir können aber auch komplett vegane Buffets machen, wenn ihr das wollt.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="font-bold text-foreground mb-2">
                  Kann man das auch mischen?
                </h3>
                <p className="text-muted-foreground">
                  Klar, die meisten Buffets haben einen Mix. Und ehrlich gesagt – oft gehen die veganen Sachen zuerst weg, auch bei Leuten die sonst Fleisch essen.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="font-bold text-foreground mb-2">
                  Was ist mit Allergien?
                </h3>
                <p className="text-muted-foreground">
                  Bei jeder Lieferung bekommt ihr eine Übersicht, was wo drin ist. Wenn jemand bestimmte Sachen nicht verträgt, sagt einfach Bescheid.
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
                Interesse?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Erzählt uns, was ihr plant. Wir machen euch einen Vorschlag.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = '/catering?scrollTo=contact'}
              >
                Anfrage schicken
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
