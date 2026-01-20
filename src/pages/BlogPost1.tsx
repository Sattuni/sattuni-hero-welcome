import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Utensils, Salad, Pizza, Sandwich, Soup, ChefHat, Coffee, Lightbulb, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/common/LazyImage";
import { useSiteMode } from "@/contexts/SiteModeContext";
import heroImage from "@/assets/blog/office-lunch-hero.jpg";

const BlogPost1 = () => {
  const { setMode } = useSiteMode();

  useEffect(() => {
    setMode('catering');
  }, [setMode]);

  return (
    <>
      <Helmet>
        <title>Büro-Lunch mal anders – 10 frische Catering-Ideen von Sattuni Düsseldorf</title>
        <meta name="description" content="Schluss mit Pizza & Pasta! Entdeckt kreative Büro-Lunch-Ideen und orientalische Catering-Inspirationen von Sattuni – frisch, hausgemacht & perfekt fürs Team." />
        <meta name="keywords" content="Büro Catering Düsseldorf, Fingerfood Catering, arabisches Buffet, Office Lunch Ideen" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <ModeHeader />
        
        {/* Back to Blog */}
        <section className="py-6 px-4 pt-24">
          <div className="container mx-auto max-w-4xl">
            <Link to="/catering/blog">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Zurück zum Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <article className="pb-16">
          <header className="relative h-[400px] md:h-[500px] overflow-hidden">
            <img
              src={heroImage}
              alt="Modernes arabisches Fingerfood-Buffet in hellem Büroambiente"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime="2025-10-01">01. Okt 2025</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>8 min Lesezeit</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  10 kreative Büro-Lunch-Ideen – wenn ihr keine Lust mehr auf Pizza & Pasta habt
                </h1>
              </div>
            </div>
          </header>

          {/* Content */}
          <section className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="prose prose-lg max-w-none">
                {/* Einleitung */}
                <div className="text-lg text-muted-foreground space-y-4 mb-12">
                  <p>Hand aufs Herz: Wie oft stand bei euch schon wieder die gleiche Pizza auf dem Tisch? Oder diese traurigen Wraps, die aussehen, als hätten sie schon bessere Tage gesehen?</p>
                  <p>Wir kennen das. Und wir finden: Das geht besser.</p>
                  <p>Denn mal ehrlich – wenn man schon mal zusammen isst, dann sollte es doch auch was Besonderes sein, oder? Hier sind ein paar Ideen, die wir über die Jahre gesammelt haben. Nicht alle davon müsst ihr bei uns bestellen – aber vielleicht inspiriert euch das ein oder andere ja für euren nächsten Team-Lunch.</p>
                </div>

                <div className="space-y-12">
                  {/* Idee 1 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Utensils className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">1.</span>
                      Mini-Mezze für alle
                    </h2>
                    <p className="text-muted-foreground">
                      Das Schöne an Mezze: Jeder nimmt sich, was er mag. Ein bisschen Hummus hier, ein Falafel dort, vielleicht noch etwas Taboulé dazu. Man probiert, tauscht, redet dabei. Klingt simpel – macht aber einen riesigen Unterschied, wenn man es mal erlebt hat.
                    </p>
                  </section>

                  {/* Idee 2 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Salad className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">2.</span>
                      Bowl-Bar im Büro
                    </h2>
                    <p className="text-muted-foreground">
                      Stellt euch vor: Couscous, Ofengemüse, ein paar Granatapfelkerne, verschiedene Saucen – und jeder baut sich seine eigene Bowl. Das macht nicht nur Spaß, sondern sorgt auch dafür, dass wirklich jeder zufrieden ist. Selbst der Kollege, der "nur Salat" essen will.
                    </p>
                  </section>

                  {/* Idee 3 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Pizza className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">3.</span>
                      Warme Teigtaschen statt belegte Brötchen
                    </h2>
                    <p className="text-muted-foreground">
                      Wir lieben Teigtaschen. Ehrlich. Die sind warm, die sättigen, und man braucht kein Besteck. Perfekt, wenn es mal schnell gehen muss zwischen zwei Meetings. Mit Käse, Spinat oder Kartoffeln gefüllt – je nachdem, worauf ihr Lust habt.
                    </p>
                  </section>

                  {/* Idee 4 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Sandwich className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">4.</span>
                      Streetfood-Feeling im Office
                    </h2>
                    <p className="text-muted-foreground">
                      Manchmal braucht man einfach was Handfestes. Eine gute Pita mit Falafel oder Hähnchen, ein bisschen Salat dazu, frische Sauce – und schon fühlt sich die Mittagspause an wie ein kleiner Kurzurlaub. Klingt übertrieben? Probiert's aus.
                    </p>
                  </section>

                  {/* Idee 5 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Soup className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">5.</span>
                      Suppenstation im Winter
                    </h2>
                    <p className="text-muted-foreground">
                      Wenn's draußen kalt ist, geht doch nichts über eine gute Suppe. Wir machen zum Beispiel eine Linsensuppe mit Kreuzkümmel, die... naja, die ist einfach richtig gut. Wärmt von innen, macht satt, aber nicht müde. Genau das, was man an grauen Wintertagen braucht.
                    </p>
                  </section>

                  {/* Idee 6 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <ChefHat className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">6.</span>
                      Fingerfood für Meetings
                    </h2>
                    <p className="text-muted-foreground">
                      Nicht jedes Meeting braucht ein volles Buffet. Manchmal reichen ein paar kleine Häppchen – Mini-Kebbeh, Halloumi-Sticks, ein paar Dips. Das Schöne daran: Man kann nebenher essen und muss nicht extra Pause machen. Praktisch, wenn's mal eng wird.
                    </p>
                  </section>

                  {/* Idee 7 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Sandwich className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">7.</span>
                      Belegte Brote – aber anders
                    </h2>
                    <p className="text-muted-foreground">
                      Okay, belegte Brote klingen erstmal nicht spektakulär. Aber wenn man statt langweiligem Aufschnitt einen cremigen Hummus nimmt, dazu ein bisschen Baba Ghanoush, frische Kräuter... dann ist das plötzlich was ganz anderes. Vertraut uns da einfach mal.
                    </p>
                  </section>

                  {/* Idee 8 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Lightbulb className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">8.</span>
                      Lunch & Learn mit Snacks
                    </h2>
                    <p className="text-muted-foreground">
                      Wenn ihr sowieso bei der Arbeit lernt, dann darf das Essen nicht ablenken. Kleine Snacks, vielleicht ein Smoothie, ein paar Nüsse – das hält die Energie oben, ohne dass jemand in ein Food-Koma fällt. Win-win, sozusagen.
                    </p>
                  </section>

                  {/* Idee 9 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Coffee className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">9.</span>
                      Orientalischer Brunch
                    </h2>
                    <p className="text-muted-foreground">
                      Ein Brunch ist immer eine gute Idee. Dips, Salate, vielleicht ein Omelette, dazu Datteln, Oliven, frisches Brot... Das ist genau das Richtige, wenn ihr mal einen entspannten Vormittag plant. Oder einen Kundenevent, bei dem ihr Eindruck machen wollt.
                    </p>
                  </section>

                  {/* Idee 10 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Sparkles className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">10.</span>
                      Kleine Rituale schaffen
                    </h2>
                    <p className="text-muted-foreground">
                      Das hier ist mehr ein Tipp als eine konkrete Idee: Macht was Regelmäßiges draus. "Hummus-Freitag" oder sowas. Klingt albern, funktioniert aber erstaunlich gut. Gibt der Woche Struktur und alle freuen sich auf was.
                    </p>
                  </section>
                </div>

                {/* Fazit */}
                <section className="mt-16 p-8 bg-gradient-subtle rounded-lg border border-border/50">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Utensils className="w-5 h-5" />
                    </span>
                    Zum Schluss
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Falls ihr jetzt denkt "Klingt gut, aber wer macht das alles?" – dafür sind wir ja da. Wir bringen das Essen, bauen auf Wunsch auf und räumen hinterher wieder ab. Ihr müsst euch um nichts kümmern.
                    </p>
                    <p>
                      Schreibt uns einfach, was ihr euch vorstellt. Wir finden gemeinsam was Passendes.
                    </p>
                    <div className="pt-6">
                      <Link to="/catering#contact">
                        <Button size="lg" className="gap-2 w-full sm:w-auto">
                          <span className="hidden sm:inline">Schreibt uns – wir melden uns zurück</span>
                          <span className="sm:hidden">Kontakt aufnehmen</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>

                {/* FAQ */}
                <section className="mt-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                    Kurze Antworten auf häufige Fragen
                  </h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Was kostet das ungefähr?
                      </h3>
                      <p className="text-muted-foreground">
                        Je nachdem was ihr braucht, ab etwa 25 € pro Person. Aber das hängt natürlich davon ab, was ihr euch vorstellt. Am besten einfach fragen.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Ab wie vielen Leuten geht das?
                      </h3>
                      <p className="text-muted-foreground">
                        Normalerweise ab 20 Personen. Aber wenn ihr weniger seid, fragt trotzdem – manchmal lässt sich was machen.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Gibt's auch was Veganes oder Halal?
                      </h3>
                      <p className="text-muted-foreground">
                        Klar. Bei uns ist alles halal. Und viele unserer Gerichte sind von Natur aus vegan oder vegetarisch – Hummus, Falafel, Taboulé und so weiter.
                      </p>
                    </div>
                  </div>
                </section>

                {/* CTA */}
                <section className="mt-16 text-center p-8 md:p-12 bg-card border-2 border-primary/20 rounded-lg shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Klingt gut?
                  </h2>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Dann lasst uns reden. Erzählt uns, was ihr braucht – wir kümmern uns um den Rest.
                  </p>
                  <Link to="/catering#contact">
                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                      Jetzt anfragen
                    </Button>
                  </Link>
                </section>
              </div>
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost1;
