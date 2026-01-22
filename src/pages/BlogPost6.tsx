import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Users, ArrowRight, ChefHat, Sparkles } from "lucide-react";
import LazyImage from "@/components/common/LazyImage";
import { useSiteMode } from "@/contexts/SiteModeContext";

// Images
import kundenbesuchHero from "@/assets/gallery/buffets/kundenbesuch-catering.jpg";
import kundenbesuchCatering from "@/assets/gallery/buffets/kundenbesuch-catering.jpg";
import buffetMeetEat from "@/assets/gallery/buffets/buffet-meet-eat.jpg";
import buffetHauptgerichte from "@/assets/gallery/buffets/hauptgerichte-chafing.jpg";
import buffetVielfalt from "@/assets/gallery/buffets/buffet-vielfalt-chafing.jpg";

const BlogPost6 = () => {
  const { setMode } = useSiteMode();

  useEffect(() => {
    setMode('catering');
    window.scrollTo(0, 0);
  }, [setMode]);

  return (
    <>
      <Helmet>
        <title>Kundenbesuche-Catering: Jeden Tag was Neues | Sattuni Blog</title>
        <meta 
          name="description" 
          content="Mehrtägige Kundenbesuche, jeden Tag ein anderes Menü. Wie wir für einen Stammkunden abwechslungsreiches Catering über 5-10 Tage am Stück liefern." 
        />
        <meta name="keywords" content="Kundenbesuch Catering, abwechslungsreiches Catering, Catering Düsseldorf, Geschäftsessen Catering, kreatives Catering" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sattuni.de/catering/blog/kundenbesuch-catering-abwechslung" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <ModeHeader />
        
        <article className="pt-24 md:pt-32 pb-16">
          <div className="container mx-auto max-w-4xl px-4">
            
            {/* Back Button */}
            <a href="/catering/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zum Blog</span>
            </a>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  Kundenbesuche
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>15. Dezember 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>6 min Lesezeit</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Jeden Tag was Neues: Catering für Kundenbesuche, das nicht langweilt
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unser Stammkunde empfängt regelmäßig seine Kunden – und die bleiben oft 5 bis 10 Tage. 
                Jeden Tag hochwertiges Essen, jeden Tag was anderes. 2025 durften wir über 10 solcher Besuchswochen begleiten.
              </p>
            </header>

            {/* Hero Image */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-elegant">
              <LazyImage
                src={kundenbesuchHero}
                alt="Abwechslungsreiches Kundenbesuch-Catering – abstrakte Illustration"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Intro */}
              <section className="mb-12">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Stellt euch vor: Eure Geschäftspartner kommen für eine ganze Woche ins Büro. 
                  Meetings, Workshops, gemeinsame Arbeit – und mittags soll's was Vernünftiges geben. 
                  Aber wer will schon am fünften Tag wieder das gleiche Menü auf dem Tisch sehen?
                </p>
              </section>

              {/* Die Ausgangslage */}
              <section className="mb-12">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Worum es geht
                </h2>
                <div className="bg-muted/30 rounded-xl p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Unser Kunde bekommt regelmäßig Besuch von seinen eigenen Kunden. Die kommen nicht nur für einen Tag – 
                    sondern bleiben oft <span className="font-medium text-foreground">5 bis 10 Tage am Stück</span> im Office. 
                    Intensive Arbeitstage, viele Meetings, und mittags braucht's was Gutes.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Herausforderung: <span className="font-medium text-foreground">Jeden Tag soll es was anderes geben.</span> Keine Wiederholungen. 
                    Nicht einfach ein anderer Reis – sondern komplett andere Geschmacksrichtungen, andere Texturen, andere Highlights.
                  </p>
                </div>
              </section>

              {/* Key Stats */}
              <section className="mb-12">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary/5 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5-10</div>
                    <div className="text-sm text-muted-foreground">Tage pro Besuch</div>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-6 text-center">
                    <div className="flex justify-center mb-2">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">ca. 20 Personen</div>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-6 text-center">
                    <div className="flex justify-center mb-2">
                      <ChefHat className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">Jeden Tag anders</div>
                  </div>
                </div>
              </section>

              {/* Image Grid */}
              <section className="mb-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-soft">
                    <LazyImage
                      src={kundenbesuchCatering}
                      alt="Kundenbesuch-Catering Aufbau"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-soft">
                    <LazyImage
                      src={buffetMeetEat}
                      alt="Buffet für Geschäftsessen"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </section>

              {/* Was das bedeutet */}
              <section className="mb-12">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Was das für uns bedeutet
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    So ein Auftrag ist kein Standard-Catering. Das ist echte Zusammenarbeit. 
                    Wir sprechen vorher ab, was es zuletzt gab, worauf Lust ist, 
                    ob es Allergien oder Wünsche gibt – und dann stellen wir was zusammen.
                  </p>
                  <p className="leading-relaxed">
                    Mal geht's klassisch arabisch: Hummus, Falafel, gegrilltes Hähnchen, Reis mit Pinienkernen. 
                    Mal etwas raffinierter: Lammhaxe mit Kartoffeln, Auberginencreme, frischer Fattoush. 
                    Und manchmal auch komplett vegan – weil es passt und schmeckt.
                  </p>
                </div>
              </section>

              {/* Highlight Image */}
              <section className="mb-12">
                <div className="rounded-xl overflow-hidden shadow-elegant">
                  <LazyImage
                    src={buffetHauptgerichte}
                    alt="Verschiedene Hauptgerichte im Chafing-Dish"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </section>

              {/* Beispiele */}
              <section className="mb-12">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Eine typische Besuchswoche
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/30 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">Tag 1: Klassisch orientalisch</h3>
                    <p className="text-sm text-muted-foreground">
                      Hummus, Mutabbal, Taboulé, gegrilltes Hähnchen mit Gewürzreis
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">Tag 2: Fleisch-Highlight</h3>
                    <p className="text-sm text-muted-foreground">
                      Lammhaxe auf Reis, Ofengemüse, frische Dips, Fladenbrot
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">Tag 3: Vegan & frisch</h3>
                    <p className="text-sm text-muted-foreground">
                      Falafel, Mahashi, Couscous-Salat, Auberginencreme, Fattoush
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">Tag 4: Fingerfood-Style</h3>
                    <p className="text-sm text-muted-foreground">
                      Kibbeh, Fatayer, Spinat-Teigtaschen, Dips zum Dippen
                    </p>
                  </div>
                </div>
              </section>

              {/* Another Image */}
              <section className="mb-12">
                <div className="rounded-xl overflow-hidden shadow-elegant">
                  <LazyImage
                    src={buffetVielfalt}
                    alt="Vielfältiges Catering-Buffet"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </section>

              {/* Warum das funktioniert */}
              <section className="mb-12">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Warum das für beide Seiten funktioniert
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Ehrlich gesagt: So eine Zusammenarbeit macht Spaß. Nicht, weil sie einfach ist – 
                    sondern weil sie uns fordert. Wir können nicht auf Autopilot arbeiten. 
                    Wir müssen mitdenken, planen, kreativ sein.
                  </p>
                  <p className="leading-relaxed">
                    Und für den Kunden? Der muss sich auf nichts einstellen. 
                    Er weiß: Wir kennen die Abläufe, wir wissen, wo was steht, wir bringen alles mit. 
                    Kein Stress, keine Überraschungen. Nur gutes Essen, pünktlich, professionell.
                  </p>
                </div>
              </section>

              {/* Fazit */}
              <section className="mb-12">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Was wir daraus mitnehmen
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Standardmenüs haben ihren Platz. Aber manchmal braucht es mehr. 
                    Wer regelmäßig Gäste empfängt, will nicht immer dasselbe auftischen. 
                    Und genau da kommen wir ins Spiel.
                  </p>
                  <p className="leading-relaxed">
                    Catering mit Kreativität, Abwechslung und Persönlichkeit – das ist unser Ding. 
                    Und wir freuen uns, dass wir auch 2026 wieder dabei sein dürfen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed italic mt-8">
                    Danke an unser Kundenteam für das Vertrauen – und für die Möglichkeit, 
                    jedes Mal aufs Neue zu zeigen, was in unserer Küche steckt.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <section className="bg-primary/5 rounded-2xl p-8 text-center">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Mehrtägige Kundenbesuche? Wir machen das.
                </h2>
                <p className="text-muted-foreground mb-6">
                  Ob 3 Tage oder 2 Wochen – wir planen mit euch durch und bringen jeden Tag was Neues. 
                  Schreibt uns, und wir schauen gemeinsam, was zu eurem Besuch passt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/catering">
                    <Button size="lg" className="gap-2">
                      Catering anfragen
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </section>

            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost6;
