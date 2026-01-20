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
                  <p>Immer dieselbe Pizza im Meeting? Schon wieder Wraps von gestern?</p>
                  <p>Wenn's um Büro-Lunch geht, ist Abwechslung selten – dabei kann gutes Essen echte Team-Momente schaffen.</p>
                  <p>Hier sind 10 frische Ideen, die euer Mittagessen im Büro verändern – inspiriert von der modernen arabischen Küche.</p>
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
                      Kleine Portionen, große Vielfalt: Hummus, Baba Ghanoush, Taboulé, Falafelbällchen und Dips – perfekt zum Teilen und Kombinieren. Ideal für Teams, die Abwechslung lieben und gemeinsam genießen wollen.
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
                      Selbst zusammengestellte Bowls mit Couscous, Ofengemüse, Granatapfel und hausgemachten Saucen. Jeder wählt, was er mag – frisch, gesund und perfekt für Meetings oder Teamtage.
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
                      Käse, Spinat oder Hähnchenfüllung – unsere hausgemachten Teigtaschen sind warm, sättigend und lassen sich ganz unkompliziert servieren. Kein Besteck, kein Stress.
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
                      Hähnchen-Pita, Falafel oder Grillgemüse im frischen Pita – sattmachend, handlich und perfekt für kurze Pausen. Bringt Streetfood-Charme direkt an den Schreibtisch.
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
                      Linsencreme mit Kreuzkümmel, Karotte-Ingwer oder Kichererbsen-Curry – leicht, warm und sättigend. Ideal für kühle Tage, an denen das Team etwas Herzhaftes braucht.
                    </p>
                  </section>

                  {/* Idee 6 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <ChefHat className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">6.</span>
                      Fingerfood-Platten für Teammeetings
                    </h2>
                    <p className="text-muted-foreground">
                      Kleine Häppchen, große Wirkung: Mini-Kebbeh, Halloumi-Sticks, Gemüse-Taschen, gefüllte Grießbällchen und bunte Dips. So wird jedes Meeting zum Genussmoment – unkompliziert und stilvoll.
                    </p>
                  </section>

                  {/* Idee 7 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Sandwich className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">7.</span>
                      Belegte Brote im Sattuni-Stil
                    </h2>
                    <p className="text-muted-foreground">
                      Frisches Brot, kreativ belegt: cremiger Hummus, würziges Baba Ghanoush, Avocado, Frischkäse oder feine Fisch-Dips. Eine moderne Alternative zum klassischen Sandwichbuffet.
                    </p>
                  </section>

                  {/* Idee 8 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Lightbulb className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">8.</span>
                      Lunch & Learn-Buffet
                    </h2>
                    <p className="text-muted-foreground">
                      Kombiniert Wissen mit Genuss – kleine Snacks, Smoothies und Fingerfood für kreative Pausen. So bleiben Energie und Stimmung im Team garantiert hoch.
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
                      Dips, Salate, Omelette, Datteln, Granatapfel und Oliven – ideal für Teamtage, Kundenevents oder entspannte Office-Vormittage. Eine moderne Interpretation arabischer Gastfreundschaft im Büro.
                    </p>
                  </section>

                  {/* Idee 10 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Sparkles className="w-5 h-5" />
                      </span>
                      <span className="bg-gradient-primary bg-clip-text text-transparent">10.</span>
                      Office-Aktivierungen mit Motto
                    </h2>
                    <p className="text-muted-foreground">
                      Von Smoothie-Montag bis Hummus-Friday: kleine kulinarische Highlights schaffen Routine mit Spaßfaktor – und stärken die Office-Kultur nachhaltig.
                    </p>
                  </section>
                </div>

                {/* Fazit */}
                <section className="mt-16 p-8 bg-gradient-subtle rounded-lg border border-border/50">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Utensils className="w-5 h-5" />
                    </span>
                    Fazit
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Bei <strong>Sattuni</strong> bringen wir genau diese Vielfalt ins Büro: frisch, hausgemacht und perfekt portioniert – ob als Buffet, Bowl-Bar oder Fingerfood-Catering.
                    </p>
                    <p>
                      Wir liefern direkt zu euch, bauen auf Wunsch auf und sorgen dafür, dass eure Mittagspause zum Highlight wird.
                    </p>
                    <div className="pt-6">
                      <Link to="/catering#contact">
                        <Button size="lg" className="gap-2 w-full sm:w-auto">
                          <span className="hidden sm:inline">👉 Jetzt Catering anfragen</span>
                          <span className="sm:hidden">Catering anfragen</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>

                {/* FAQ */}
                <section className="mt-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                    💬 Häufige Fragen
                  </h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Was kostet ein Büro-Catering bei Sattuni?
                      </h3>
                      <p className="text-muted-foreground">
                        Je nach Auswahl ab 25 € pro Person – individuell anpassbar.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Ab wie vielen Personen liefert Sattuni?
                      </h3>
                      <p className="text-muted-foreground">
                        Ab 20 Personen – für kleinere Gruppen auf Anfrage.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Kann das Catering auch vegan oder halal sein?
                      </h3>
                      <p className="text-muted-foreground">
                        Ja, selbstverständlich. Alle unsere Speisen sind halal, viele auch vegan oder vegetarisch.
                      </p>
                    </div>
                  </div>
                </section>

                {/* CTA */}
                <section className="mt-16 text-center p-8 md:p-12 bg-card border-2 border-primary/20 rounded-lg shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Bereit für frischen Wind in eurer Mittagspause?
                  </h2>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Lasst uns gemeinsam euer nächstes Office-Catering planen.
                  </p>
                  <Link to="/catering#contact">
                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                      Jetzt Kontakt aufnehmen
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
