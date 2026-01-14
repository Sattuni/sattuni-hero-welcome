import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Users, Coffee, Lightbulb, Timer, Utensils, Zap, CheckCircle, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/blog/workshop-minimal.jpg";

const BlogPost3 = () => {
  return (
    <>
      <Helmet>
        <title>Workshop-Catering: So bleibt dein Team den ganzen Tag fokussiert | Sattuni</title>
        <meta name="description" content="Erfahre, wie gutes Workshop-Catering die Produktivität steigert. Praktische Tipps für Pausenverpflegung, Timing und Menüauswahl – frisch, leicht & energiereich." />
        <meta name="keywords" content="Workshop Catering Düsseldorf, Seminar Catering, Tagungsverpflegung, Business Catering, Konferenz Essen" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <Header />
        
        {/* Back to Blog */}
        <section className="py-6 px-4">
          <div className="container mx-auto max-w-4xl">
            <Link to="/blog">
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
                    Ein Workshop lebt von Konzentration, Kreativität und Zusammenarbeit. 
                    Doch was passiert, wenn nach zwei Stunden die Energie sinkt und der Magen knurrt?
                  </p>
                  <p>
                    Das richtige Catering macht den Unterschied: Es hält dein Team fokussiert, 
                    fördert den Austausch in den Pausen und sorgt für gute Stimmung – den ganzen Tag lang.
                  </p>
                  <p>
                    In diesem Artikel zeigen wir dir, worauf es beim Workshop-Catering wirklich ankommt 
                    und wie du mit der richtigen Verpflegung das Beste aus eurem Tag herausholst.
                  </p>
                </div>

                <div className="space-y-12">
                  {/* Warum Catering wichtig ist */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Zap className="w-5 h-5" />
                      </span>
                      Warum gutes Catering Workshops erfolgreicher macht
                    </h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        Studien zeigen: Unser Gehirn verbraucht etwa 20% unserer täglichen Energie – 
                        und bei intensiver geistiger Arbeit noch mehr. Wer hungrig oder mit schwerem Magen 
                        in eine Session geht, verliert schnell die Konzentration.
                      </p>
                      <p>
                        Das richtige Essen zur richtigen Zeit kann:
                      </p>
                      <ul className="list-none space-y-2 pl-0">
                        {[
                          "Die Aufmerksamkeit über den gesamten Tag halten",
                          "Kreative Phasen mit neuer Energie beflügeln",
                          "Networking und Teambuilding in Pausen fördern",
                          "Das Gesamterlebnis des Workshops positiv prägen"
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
                      Die 3 Phasen eines Workshop-Tages – und das passende Essen
                    </h2>
                    
                    <div className="space-y-8 mt-6">
                      {/* Phase 1 */}
                      <div className="p-6 bg-card border border-border/50 rounded-lg">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                          <Coffee className="w-5 h-5 text-primary" />
                          Morgens: Energie tanken, ohne zu belasten
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Der Morgen braucht leichte Energie: frisches Obst, Joghurt, Nüsse und kleine Häppchen. 
                          Zu schweres Frühstück macht müde – lieber öfter kleine Snacks anbieten.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          💡 Unser Tipp: Orientalischer Brunch mit Dips, Oliven, frischem Brot und Datteln
                        </p>
                      </div>

                      {/* Phase 2 */}
                      <div className="p-6 bg-card border border-border/50 rounded-lg">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                          <Utensils className="w-5 h-5 text-primary" />
                          Mittags: Satt werden, aber nicht einschlafen
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Das klassische Mittagstief ist real! Schwere Gerichte mit viel Fett und Kohlenhydraten 
                          machen träge. Besser: Proteinreiche, bunte Gerichte mit viel Gemüse.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          💡 Unser Tipp: Mezze-Buffet mit Falafel, Hummus, bunten Salaten und Couscous-Bowls
                        </p>
                      </div>

                      {/* Phase 3 */}
                      <div className="p-6 bg-card border border-border/50 rounded-lg">
                        <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                          <Lightbulb className="w-5 h-5 text-primary" />
                          Nachmittags: Der Energie-Boost für die Zielgerade
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Ab 15 Uhr sinkt die Konzentration – Zeit für einen kleinen Pick-me-up: 
                          Süße Snacks in Maßen, frisches Obst, Nüsse oder ein Smoothie.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          💡 Unser Tipp: Baklava, Datteln mit Nüssen, frische Fruchtsäfte
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
                      Wie viel Essen braucht ein Workshop wirklich?
                    </h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        Eine häufige Frage – und eine wichtige: Zu wenig Essen frustriert, zu viel wird verschwendet.
                      </p>
                      <div className="bg-gradient-subtle p-6 rounded-lg border border-border/50">
                        <h4 className="font-bold text-foreground mb-3">Unsere Faustregel für Ganztags-Workshops:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <span><strong>Vormittag:</strong> 2-3 kleine Snacks pro Person</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <span><strong>Mittagessen:</strong> Buffet mit 4-5 verschiedenen Komponenten</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <span><strong>Nachmittag:</strong> Süße & herzhafte Snacks + Getränke</span>
                          </li>
                        </ul>
                        <p className="mt-4 text-sm">
                          Wir beraten dich gerne individuell – basierend auf Teilnehmerzahl, 
                          Dauer und Art des Workshops.
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
                      5 praktische Tipps für dein Workshop-Catering
                    </h2>
                    
                    <div className="space-y-4 mt-6">
                      {[
                        {
                          title: "Fingerfood statt Tellergerichte",
                          desc: "Niemand will mit Messer und Gabel in der Pause hantieren. Fingerfood ist praktisch, sauber und fördert den Austausch."
                        },
                        {
                          title: "Ernährungsbedürfnisse früh abfragen",
                          desc: "Vegan, vegetarisch, halal, Allergien – kläre das im Voraus. Bei Sattuni sind alle Speisen halal, viele auch vegan."
                        },
                        {
                          title: "Pausen bewusst einplanen",
                          desc: "Das beste Catering hilft nichts, wenn keine Zeit zum Essen bleibt. Plane mindestens 30 Minuten für die Mittagspause."
                        },
                        {
                          title: "Raum für Networking schaffen",
                          desc: "Stelle das Buffet so auf, dass Teilnehmer ins Gespräch kommen können – nicht in einer Ecke versteckt."
                        },
                        {
                          title: "Nachhaltigkeit mitdenken",
                          desc: "Mehrweggeschirr, regionale Zutaten und die richtige Menge – gut fürs Gewissen und den CO2-Fußabdruck."
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
                      Warum Sattuni perfekt für Workshop-Catering ist
                    </h2>
                    <div className="text-muted-foreground space-y-4">
                      <p>
                        Unsere arabisch inspirierten Mezze-Buffets sind wie gemacht für produktive Workshop-Tage:
                      </p>
                      <ul className="list-none space-y-2 pl-0">
                        {[
                          "Leicht & bekömmlich – keine Mittagsmüdigkeit",
                          "Vielfältig – für jeden Geschmack etwas dabei",
                          "Teilen verbindet – fördert den Austausch im Team",
                          "Flexibel – von 20 bis 200 Personen",
                          "Komplett-Service – wir kümmern uns um alles"
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
                    Fazit: Gutes Essen = bessere Ergebnisse
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Ein durchdachtes Catering ist keine Nebensache – es ist Teil des Workshop-Erfolgs. 
                      Mit dem richtigen Timing, leichten aber sättigenden Gerichten und einer einladenden 
                      Präsentation sorgst du dafür, dass dein Team den ganzen Tag leistungsfähig bleibt.
                    </p>
                    <p>
                      Bei uns verstehen wir, was produktive Teams brauchen: 
                      frisches, hausgemachtes Essen, das Energie gibt ohne zu belasten – 
                      und das ganz nebenbei für gute Gespräche sorgt.
                    </p>
                    <div className="pt-6">
                      <Link to="/catering?scrollTo=contact">
                        <Button size="lg" className="gap-2 w-full sm:w-auto">
                          <span className="hidden sm:inline">👉 Jetzt Workshop-Catering anfragen</span>
                          <span className="sm:hidden">Catering anfragen</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>

                {/* FAQ */}
                <section className="mt-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                    💬 Häufige Fragen zum Workshop-Catering
                  </h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Ab wie vielen Personen bietet ihr Workshop-Catering an?
                      </h3>
                      <p className="text-muted-foreground">
                        Unser Catering ist ab 20 Personen möglich – perfekt für mittlere bis große Workshops und Seminare.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Kann das Catering auch komplett vegan sein?
                      </h3>
                      <p className="text-muted-foreground">
                        Ja! Wir haben ein spezielles vegetarisch-veganes Paket "Grüne Levante" – 
                        auf Wunsch auch komplett vegan anpassbar.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Wie weit im Voraus sollte ich buchen?
                      </h3>
                      <p className="text-muted-foreground">
                        Idealerweise 1-2 Wochen im Voraus. Bei kurzfristigen Anfragen versuchen wir trotzdem, 
                        eine Lösung zu finden – schreib uns einfach!
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Liefert Sattuni auch Geschirr und Besteck?
                      </h3>
                      <p className="text-muted-foreground">
                        Ja, auf Wunsch liefern wir alles mit – inklusive Servietten, Teller und Besteck. 
                        Einfach bei der Anfrage angeben.
                      </p>
                    </div>
                  </div>
                </section>

                {/* CTA */}
                <section className="mt-16 text-center p-8 md:p-12 bg-card border-2 border-primary/20 rounded-lg shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Euer nächster Workshop steht an?
                  </h2>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Lass uns gemeinsam das perfekte Catering planen – frisch, lecker und auf euer Team abgestimmt.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/catering?scrollTo=contact">
                      <Button size="lg" className="w-full sm:w-auto">
                        Jetzt Catering anfragen
                      </Button>
                    </Link>
                    <Link to="/menus">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        Menüs ansehen
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