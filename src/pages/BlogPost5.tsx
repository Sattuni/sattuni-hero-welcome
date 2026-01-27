import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Leaf, Lightbulb, TrendingUp } from "lucide-react";
import LazyImage from "@/components/common/LazyImage";
import { useSiteMode } from "@/contexts/SiteModeContext";

// Bilder aus der Galerie
import buffetVeganChafing from "@/assets/gallery/buffets/buffet-vegan-chafing.jpg";
import hummus from "@/assets/gallery/dips-salate/hummus.jpg";
import babaGanoush from "@/assets/gallery/dips-salate/baba-ganoush.jpg";
import couscousSalat from "@/assets/gallery/dips-salate/couscous-salat.jpg";
import okraBulgur from "@/assets/gallery/buffets/okra-bulgur.jpg";
import veganuaryHeroAbstract from "@/assets/blog/veganuary-hero-abstract.jpg";

const BlogPost5 = () => {
  const { setMode } = useSiteMode();

  useEffect(() => {
    setMode('catering');
  }, [setMode]);

  return (
    <>
      <Helmet>
        <title>Veganes Office-Buffet für 140 Personen – Veganuary Catering | Sattuni Blog</title>
        <meta name="description" content="Ein Einblick in unser veganes Office-Buffet für 140 Personen im Veganuary. Von der Planung über die Herausforderungen bis zu unseren Learnings." />
        <meta name="keywords" content="veganes Catering, Office Buffet, Veganuary, 100% vegan, Firmencatering, Düsseldorf, pflanzliches Buffet" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sattuni.de/catering/blog/veganes-office-buffet-140-personen" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="140 Personen, 100 % vegan: Ein Office-Buffet im Veganuary" />
        <meta property="og:description" content="Ein veganes Buffet für 140 Leute – komplett pflanzlich, kein Kompromiss. So haben wir das gemacht." />
        <meta property="og:image" content="https://sattuni.de/blog/veganuary-hero-abstract.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://sattuni.de/catering/blog/veganes-office-buffet-140-personen" />
        <meta property="og:site_name" content="Sattuni Catering" />
        <meta property="article:published_time" content="2026-01-22" />
        <meta property="article:author" content="Sattuni" />
        
        {/* Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Veganes Office-Buffet für 140 Personen | Sattuni" />
        <meta name="twitter:description" content="Komplett pflanzlich, für alle. Ein Einblick in unser Veganuary-Catering." />
        <meta name="twitter:image" content="https://sattuni.de/blog/veganuary-hero-abstract.jpg" />
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
                src={veganuaryHeroAbstract}
                alt="Veganes Office-Buffet – abstrakte Illustration mit Kräutern und Schalen"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>22. Jan 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min Lesezeit</span>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                Veganes Catering
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              140 Personen, 100 % vegan: Ein Office-Buffet im Veganuary
            </h1>

            {/* Intro */}
            <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
              <p className="text-xl leading-relaxed">
                Im Januar durften wir ein Catering machen, das für uns etwas Besonderes war: Ein veganes Buffet für 140 Leute – mitten im Veganuary. Kein vegetarischer Kompromiss, keine Fleischalternative am Rand. Komplett pflanzlich. Für alle.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl">
            
            {/* Ausgangslage */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Wie es dazu kam
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Firma wollte ihren Leuten im Veganuary etwas Besonderes bieten – ein Mittagessen, das zeigt, wie vielfältig und sättigend pflanzliche Küche sein kann. Ohne erhobenen Zeigefinger. Einfach gutes Essen für alle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                140 Personen ist für uns keine ungewöhnliche Größe. Aber 100 % vegan in diesem Umfang – das war neu für uns. Es ging nicht nur darum, Fleisch wegzulassen. Wir wollten ein Buffet, bei dem niemand das Gefühl hat, auf etwas zu verzichten.
              </p>
            </div>

            {/* Das Buffet */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Was auf dem Buffet stand
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Wir haben auf eine Mischung gesetzt: vertraute Klassiker und Gerichte, die vielleicht neu für manche waren – aber trotzdem zugänglich und einladend.
              </p>
            </div>

            {/* Speisen Grid */}
            <div className="grid gap-8 mb-12">
              
              {/* Gebäck & Teigtaschen */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Veganes Gebäck & gefüllte Teigtaschen
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Unsere Teigtaschen – gefüllt mit würziger Kartoffel oder Spinat – sind sowieso vegan. Praktisch, weil man sie gut mit einer Hand essen kann. Dazu gab es verschiedenes Blätterteiggebäck, frisch aus dem Ofen.
                </p>
              </div>

              {/* Lahmacun */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Vegane Lahmacun
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lahmacun kennen die meisten mit Hackfleisch. Unsere vegane Version hat eine würzige Gemüse-Linsen-Mischung, die genauso aromatisch ist. Dünn gebacken, zum Rollen – so wie es sein soll.
                </p>
              </div>

              {/* Hummus & Baba Ganoush mit Bild */}
              <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-48 md:h-auto">
                    <LazyImage
                      src={hummus}
                      alt="Cremiger Hummus"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Hummus und Baba Ghanousch
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Die Basics für jedes gute Mezze-Buffet. Unser Hummus ist cremig, mit der richtigen Balance aus Tahini und Zitrone. Der Baba Ghanousch bekommt seinen rauchigen Charakter, weil wir die Auberginen über offener Flamme rösten.
                    </p>
                  </div>
                </div>
              </div>

              {/* Salate mit Bild */}
              <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 md:p-8 order-2 md:order-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Kastanien-Rucola-Salat und Couscous
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Der Kastanien-Rucola-Salat war unser saisonales Highlight – nussig, leicht bitter, mit einer honigfreien Vinaigrette. Der Couscous-Salat brachte Frische und Sättigung zugleich: mit Tomate, Koriander und einem Hauch Minze.
                    </p>
                  </div>
                  <div className="relative h-48 md:h-auto order-1 md:order-2">
                    <LazyImage
                      src={couscousSalat}
                      alt="Frischer Couscous-Salat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Gefülltes Gemüse */}
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Gefüllte Zucchini, Tomaten und Kartoffeln
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ein Klassiker der levantinischen Küche, den viele nicht kennen: Gemüse, gefüllt mit gewürztem Reis oder Bulgur, Kräutern und Pinienkernen. Langsam gegart, bis alles weich und aromatisch ist. Diese Gerichte stehen bei uns regelmäßig auf dem Buffet – sie brauchen kein Fleisch, um satt zu machen.
                </p>
              </div>

              {/* Risotto & Okra mit Bild */}
              <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-48 md:h-auto">
                    <LazyImage
                      src={okraBulgur}
                      alt="Okraschoten mit Bulgur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Risotto und Okraschoten
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Das Risotto – cremig, mit saisonalem Gemüse – war unser Zugeständnis an den europäischen Gaumen. Die Okraschoten brachten was Ungewohntes: In Tomatensoße geschmort, mit Zwiebeln und Knoblauch. Für manche eine Entdeckung, für andere ein Stück Heimat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Herausforderungen */}
            <div className="bg-card rounded-2xl p-8 mb-12 border border-border/50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Was wir dabei gelernt haben
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Die größte Herausforderung war nicht das Kochen – sondern die Kalkulation. Bei 140 Personen muss jede Menge stimmen. Zu wenig ist peinlich, zu viel ist Verschwendung. Bei einem komplett veganen Buffet hatten wir keine Erfahrungswerte für diese Größenordnung.
                    </p>
                    <p className="leading-relaxed">
                      Wir haben etwas großzügiger kalkuliert. Am Ende blieb weniger übrig als erwartet – ein gutes Zeichen. Die Leute haben probiert, nachgenommen, gefragt. Das war schön zu sehen.
                    </p>
                    <p className="leading-relaxed">
                      Ein Event in dieser Größe ist immer eine logistische Aufgabe. Nicht alles lief perfekt – aber genau das nehmen wir mit. Jedes Catering bringt uns weiter, und beim nächsten Mal machen wir es noch besser.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Learnings */}
            <div className="bg-card rounded-2xl p-8 mb-12 border border-border/50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Was wir mitnehmen
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">1.</span>
                      <span><strong className="text-foreground">Vegan heißt nicht weniger Aufwand</strong> – eher mehr. Die Vielfalt muss stimmen, damit niemand denkt, es gibt "nur Beilagen".</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">2.</span>
                      <span><strong className="text-foreground">Leute sind neugieriger, als man denkt.</strong> Viele haben Gerichte probiert, die sie nicht kannten – und gefragt, was drin ist.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">3.</span>
                      <span><strong className="text-foreground">Arabische Küche und vegan passen super zusammen.</strong> Vieles, was wir seit Jahren machen, war schon immer pflanzlich – ohne dass wir es so genannt hätten.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">4.</span>
                      <span><strong className="text-foreground">Wir bauen unser veganes Angebot weiter aus.</strong> Dieses Event hat uns gezeigt, wo noch Potenzial liegt – mehr gefülltes Gemüse, mehr Hülsenfrüchte, mehr saisonale Ideen.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Buffet Impression */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 shadow-elegant">
              <LazyImage
                src={buffetVeganChafing}
                alt="Veganes Buffet Aufbau"
                className="w-full h-full object-cover saturate-[0.8] contrast-[0.95] brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
            </div>

            {/* Abschluss */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Warum veganes Catering bleibt
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Veganes Catering ist kein Trend, der wieder verschwindet. Teams werden vielfältiger, Leute achten mehr drauf, was sie essen. Nicht jeder isst vegan – aber fast jeder kann und will ab und zu pflanzlich essen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Für uns war dieses Event eine Bestätigung: Wir können das. Nicht als Ausnahme, sondern als Teil von dem, was wir machen. Die arabische Küche hat so viel zu bieten, das von Natur aus pflanzlich ist – wir müssen es nur zeigen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wenn ihr ein veganes Catering plant – ob für 20 oder 200 Leute – meldet euch. Wir finden zusammen raus, was zu eurem Anlass passt.
              </p>
              <p className="text-muted-foreground leading-relaxed italic mt-8">
                An dieser Stelle ein herzliches Danke an unser Kundenteam, das uns bei diesem Event das Vertrauen geschenkt hat – und uns die Möglichkeit gegeben hat, zu zeigen, was veganes Catering in dieser Größe leisten kann.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-primary/20 shadow-elegant">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Veganes Catering planen?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Erzählt uns von eurem Event – wir machen euch einen Vorschlag, der zu euren Gästen passt.
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

export default BlogPost5;
