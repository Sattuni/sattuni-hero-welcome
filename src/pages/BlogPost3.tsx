import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Users, Coffee, Lightbulb, Timer, Utensils, Zap, CheckCircle, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteMode } from "@/contexts/SiteModeContext";
import heroImage from "@/assets/blog/workshop-minimal.jpg";

const BlogPost3 = () => {
  const { setMode } = useSiteMode();

  useEffect(() => {
    setMode('catering');
  }, [setMode]);

  return (
    <>
      <Helmet>
        <title>Workshop-Catering: So bleibt dein Team den ganzen Tag fokussiert | Sattuni</title>
        <meta name="description" content="Erfahre, wie gutes Workshop-Catering die Produktivität steigert. Praktische Tipps für Pausenverpflegung, Timing und Menüauswahl – frisch, leicht & energiereich." />
        <meta name="keywords" content="Workshop Catering Düsseldorf, Seminar Catering, Tagungsverpflegung, Business Catering, Konferenz Essen" />
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
              alt="Workshop-Catering mit orientalischem Mezze-Buffet in modernem Konferenzraum"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime="2026-01-14">14. Jan 2026</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>7 min Lesezeit</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  Workshop-Catering: So bleibt dein Team den ganzen Tag fokussiert
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
                  <p>
                    Kennt ihr das? Der Workshop läuft super, alle sind voll dabei – und dann kommt die Mittagspause mit labbrigem Pizzakarton. Danach kämpft die Hälfte gegen das Suppenkoma.
                  </p>
                  <p>
                    Wir haben schon einige Workshops beliefert und dabei ein paar Sachen gelernt. Zum Beispiel: Das richtige Essen zur richtigen Zeit macht echt einen Unterschied. Nicht nur für die Stimmung, sondern auch für die Energie danach.
                  </p>
                  <p>
                    Hier ein paar Gedanken dazu, was wir in der Praxis beobachtet haben.
                  </p>
                </div>

                <div className="space-y-12">
                  {/* Warum Catering wichtig ist */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Zap className="w-5 h-5" />
                      </span>
                      Warum das Essen so wichtig ist
                    </h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        Klingt vielleicht übertrieben, aber: Wer hungrig oder mit Bleimagen in eine Session geht, der ist gedanklich nicht wirklich dabei. Das merkt man spätestens nach dem Mittagessen, wenn alle nur noch aufs Handy starren.
                      </p>
                      <p>
                        Das richtige Essen kann helfen:
                      </p>
                      <ul className="list-none space-y-2 pl-0">
                        {[
                          "Die Konzentration bleibt den ganzen Tag da",
                          "In den Pausen kommt man ins Gespräch",
                          "Alle erinnern sich später positiv an den Tag"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  {/* Die 3 Workshop-Phasen */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Timer className="w-5 h-5" />
                      </span>
                      Was wir wann empfehlen
                    </h2>
                    
                    <div className="space-y-8 mt-6">
                      {/* Phase 1 */}
                      <div className="p-6 bg-card border border-border/50 rounded-lg">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                          <Coffee className="w-5 h-5 text-primary" />
                          Morgens: Nicht zu schwer
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Morgens reicht oft was Leichtes. Frisches Obst, ein paar Nüsse, vielleicht kleine Häppchen. Wer sich morgens schon vollstopft, ist um elf schon müde.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Was wir gerne machen: Ein kleiner orientalischer Brunch mit Dips, Oliven und frischem Brot.
                        </p>
                      </div>

                      {/* Phase 2 */}
                      <div className="p-6 bg-card border border-border/50 rounded-lg">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                          <Utensils className="w-5 h-5 text-primary" />
                          Mittags: Satt, aber nicht erschlagen
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Das klassische Mittagstief – ihr wisst was ich meine. Das passiert vor allem bei schweren, fettigen Sachen. Besser: Viel Gemüse, Proteine, bunte Sachen, die leicht sind aber trotzdem sättigen.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Unsere Empfehlung: Ein Mezze-Buffet. Falafel, Hummus, Salate, Couscous-Bowls. Leicht genug, um danach noch arbeiten zu können.
                        </p>
                      </div>

                      {/* Phase 3 */}
                      <div className="p-6 bg-card border border-border/50 rounded-lg">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-primary" />
                          Nachmittags: Der kleine Boost
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Ab 15 Uhr wird's meistens zäh. Da hilft ein kleiner Snack: Was Süßes in Maßen, frisches Obst, vielleicht ein Smoothie. Kein Zuckerschock, aber genug um durchzuhalten.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Läuft bei uns: Baklava, Datteln mit Nüssen, frische Säfte.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Die richtige Menge */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Users className="w-5 h-5" />
                      </span>
                      Wie viel braucht man eigentlich?
                    </h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        Die Frage kommt immer: "Wie viel sollen wir bestellen?" Zu wenig ist blöd, zu viel wird weggeschmissen.
                      </p>
                      <div className="bg-gradient-subtle p-6 rounded-lg border border-border/50">
                        <h4 className="font-bold text-foreground mb-3">Unsere Faustregel für einen ganzen Tag:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <span><strong>Vormittag:</strong> 2-3 kleine Snacks pro Person</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <span><strong>Mittag:</strong> Buffet mit 4-5 verschiedenen Sachen</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <span><strong>Nachmittag:</strong> Mix aus süß und herzhaft</span>
                          </li>
                        </ul>
                        <p className="mt-4 text-sm">
                          Aber das hängt natürlich auch davon ab, wie hungrig eure Leute sind. Am besten einfach fragen.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Praktische Tipps */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Target className="w-5 h-5" />
                      </span>
                      Ein paar praktische Tipps
                    </h2>
                    
                    <div className="space-y-4 mt-6">
                      {[
                        {
                          title: "Fingerfood statt Tellergerichte",
                          desc: "Niemand will in der Pause mit Messer und Gabel hantieren. Lieber was, das man mit einer Hand essen kann."
                        },
                        {
                          title: "Vorher fragen, wer was isst",
                          desc: "Vegan, halal, Allergien – klärt das vorher. Nichts ist blöder als wenn jemand nichts essen kann."
                        },
                        {
                          title: "Genug Zeit einplanen",
                          desc: "Das beste Catering bringt nichts, wenn alle in 10 Minuten essen müssen. Mindestens 30 Minuten für Mittag."
                        },
                        {
                          title: "Das Buffet zugänglich aufstellen",
                          desc: "Nicht in die Ecke quetschen. Stellt es so hin, dass Leute drumherum stehen und quatschen können."
                        },
                        {
                          title: "Nicht zu viel bestellen",
                          desc: "Besser einmal nachfragen als hinterher die Hälfte wegschmeißen."
                        }
                      ].map((tip, index) => (
                        <div key={index} className="flex gap-4 p-4 bg-card border border-border/50 rounded-lg">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="font-bold text-foreground">{tip.title}</h4>
                            <p className="text-muted-foreground text-sm mt-1">{tip.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Warum Sattuni */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Utensils className="w-5 h-5" />
                      </span>
                      Was wir mitbringen
                    </h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        Falls ihr jetzt denkt, das klingt nach viel Aufwand – nee, nicht wirklich. Wir machen das ja nicht zum ersten Mal.
                      </p>
                      <ul className="list-none space-y-2 pl-0">
                        {[
                          "Leichte Sachen, die nicht müde machen",
                          "Genug Auswahl für jeden Geschmack",
                          "Alles an dem Tag frisch gemacht",
                          "Wir kommen, bauen auf, und sind wieder weg"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </div>

                {/* Fazit */}
                <section className="mt-16 p-8 bg-gradient-subtle rounded-lg border border-border/50">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Lightbulb className="w-5 h-5" />
                    </span>
                    Kurz zusammengefasst
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Das Essen ist nicht das Wichtigste an einem Workshop – aber es kann echt viel kaputtmachen, wenn's schief geht. Umgekehrt: Mit dem richtigen Timing und leichten, aber leckeren Sachen bleibt das Team den ganzen Tag fit.
                    </p>
                    <p>
                      Wir machen das jetzt schon eine Weile und haben ein Gefühl dafür entwickelt, was funktioniert. Wenn ihr Fragen habt oder was Konkretes plant, dann meldet euch einfach.
                    </p>
                    <div className="pt-6">
                      <Link to="/catering?scrollTo=contact">
                        <Button size="lg" className="gap-2 w-full sm:w-auto">
                          <span className="hidden sm:inline">Schreibt uns</span>
                          <span className="sm:hidden">Kontakt</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>

                {/* FAQ */}
                <section className="mt-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                    Noch ein paar Fragen?
                  </h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Ab wie vielen Leuten macht ihr das?
                      </h3>
                      <p className="text-muted-foreground">
                        Ab 20 Personen. Weniger geht manchmal auch – einfach fragen.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Geht das auch komplett vegan?
                      </h3>
                      <p className="text-muted-foreground">
                        Klar. Wir haben ein veganes Paket, und ehrlich gesagt – viele unserer Sachen sind sowieso vegan. Falafel, Hummus, die ganzen Salate...
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Wie früh muss ich buchen?
                      </h3>
                      <p className="text-muted-foreground">
                        Idealerweise 1-2 Wochen vorher. Aber wenn's mal schneller gehen muss, fragen wir trotzdem – manchmal geht noch was.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Bringt ihr auch Geschirr mit?
                      </h3>
                      <p className="text-muted-foreground">
                        Wenn ihr wollt, ja. Teller, Besteck, Servietten – sagt einfach Bescheid, dann packen wir's mit ein.
                      </p>
                    </div>
                  </div>
                </section>

                {/* CTA */}
                <section className="mt-16 text-center p-8 md:p-12 bg-card border-2 border-primary/20 rounded-lg shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Workshop geplant?
                  </h2>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Dann lasst uns kurz reden. Wir finden was Passendes für euch.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/catering?scrollTo=contact">
                      <Button size="lg" className="w-full sm:w-auto">
                        Anfrage schicken
                      </Button>
                    </Link>
                    <Link to="/menus">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        Menüs anschauen
                      </Button>
                    </Link>
                  </div>
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

export default BlogPost3;