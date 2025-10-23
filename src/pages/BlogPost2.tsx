import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Leaf, Salad, Users, Heart, Utensils, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/blog/mezze-sharing-hero.jpg";

const BlogPost2 = () => {
  return (
    <>
      <Helmet>
        <title>Was bedeutet Mezze? | Arabische Gastfreundschaft modern interpretiert von Sattuni</title>
        <meta name="description" content="Erfahre, was Mezze bedeutet und wie Sattuni das arabische Prinzip des Teilens in moderne Küche bringt. Frisch, hausgemacht und perfekt für private und geschäftliche Anlässe." />
        <meta name="keywords" content="Mezze, arabische Küche, Catering Düsseldorf, orientalisches Buffet, Fingerfood teilen" />
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
              alt="Arabische Mezze-Platten auf einem Holztisch, Menschen teilen gemeinsam verschiedene Gerichte"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime="2025-10-23">23. Okt 2025</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>6 min Lesezeit</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  Was bedeutet eigentlich Mezze? Warum Teilen und Genießen der wahre Geschmack der arabischen Küche ist
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
                  <p>In der arabischen Welt beginnt jede Mahlzeit mit einem Lächeln – und einem Tisch voller Mezze.</p>
                  <p>Aber was genau steckt dahinter?</p>
                  <p>Sind Mezze nur kleine Vorspeisen – oder eine Lebensart, die man im Alltag – im Büro wie zuhause – wiederentdecken kann?</p>
                </div>

                <div className="space-y-12">
                  {/* Abschnitt 1 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Leaf className="w-5 h-5" />
                      </span>
                      Was „Mezze" bedeutet
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      „Mezze" (oder Meze) kommt aus dem Arabischen مزّة – und bedeutet „Geschmack" oder „Genuss".
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Gemeint ist nicht ein einzelnes Gericht, sondern eine Sammlung kleiner Speisen, die gemeinsam serviert und geteilt werden – ähnlich wie Tapas, nur aromatischer und vielfältiger.
                    </p>
                    <p className="text-muted-foreground">
                      Im Mittelpunkt steht nicht das Essen an sich, sondern das Miteinander: probieren, reden, lachen, Zeit verbringen. In der arabischen Küche bedeutet Teilen immer auch – Verbindung schaffen.
                    </p>
                  </section>

                  {/* Abschnitt 2 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Salad className="w-5 h-5" />
                      </span>
                      Was alles zu Mezze gehört
                    </h2>
                    <p className="text-muted-foreground mb-4">Typische arabische Mezze sind:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      <li>Hummus – cremig und mild mit Olivenöl verfeinert</li>
                      <li>Baba Ghanoush – geröstete Aubergine mit Tahina</li>
                      <li>Taboulé – frischer Petersiliensalat mit Zitrone und Couscous</li>
                      <li>Gefüllte Weinblätter, Falafel, Halloumi-Sticks</li>
                      <li>Oliven, Datteln und hausgemachtes Fladenbrot</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Alles wird in kleinen Schalen serviert – zum Greifen nah und zum Teilen. Es geht nicht um Portionen, sondern um Vielfalt auf dem Tisch.
                    </p>
                  </section>

                  {/* Abschnitt 3 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Users className="w-5 h-5" />
                      </span>
                      Warum Mezze mehr als Essen ist
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Mezze ist keine Mahlzeit – es ist eine Haltung. Ein Moment, in dem die Welt kurz stillsteht, weil Menschen am selben Tisch sitzen.
                    </p>
                    <p className="text-muted-foreground">
                      Ob beim Familienbrunch, beim Team-Lunch oder beim Sommerfest im Büro – Mezze verbindet. Es erinnert uns daran, dass gutes Essen Nähe schafft – ganz ohne großen Aufwand.
                    </p>
                  </section>

                  {/* Abschnitt 4 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Heart className="w-5 h-5" />
                      </span>
                      Wie Sattuni Mezze modern interpretiert
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Bei <strong>Sattuni</strong> leben wir das Prinzip von Mezze jeden Tag. Wir bringen den Gedanken des Teilens in die moderne Küche – für Privatfeste, Team-Lunches oder Business-Caterings gleichermaßen.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      <li>Gemeinsame Platten statt Einzelportionen</li>
                      <li>Frische, hausgemachte Dips & Fingerfood statt Standardbuffets</li>
                      <li>Abwechslungsreich, vegan, halal & immer mit Liebe zubereitet</li>
                    </ul>
                    <p className="text-muted-foreground">
                      So entsteht Essen, das Geschichten erzählt – und Menschen verbindet.
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
                      Mezze ist mehr als ein Wort für kleine Gerichte. Es ist eine Einladung, gemeinsam zu genießen – ob im Büro, zuhause oder bei einem besonderen Anlass.
                    </p>
                    <p>
                      Und genau das lebt <strong>Sattuni</strong>: hausgemachte Küche, die verbindet – frisch, ehrlich, gemeinsam.
                    </p>
                    <div className="pt-6">
                      <Link to="/catering#contact">
                        <Button size="lg" className="gap-2 w-full sm:w-auto">
                          <span className="hidden sm:inline">Jetzt mehr erfahren & Catering anfragen</span>
                          <span className="sm:hidden">Catering anfragen</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>

                {/* FAQ */}
                <section className="mt-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <HelpCircle className="w-5 h-5" />
                    </span>
                    Häufige Fragen
                  </h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Ist Mezze vegan oder vegetarisch?
                      </h3>
                      <p className="text-muted-foreground">
                        Viele Mezze sind rein pflanzlich oder vegetarisch – z. B. Hummus, Baba Ghanoush oder Taboulé.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Wie viele Mezze sollte man pro Person planen?
                      </h3>
                      <p className="text-muted-foreground">
                        Für Buffets oder Familienrunden empfehlen wir 5–7 verschiedene Sorten – für Firmenlunches eher mehr kleine Portionen zum Teilen.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Kann Sattuni Mezze auch liefern oder aufbauen?
                      </h3>
                      <p className="text-muted-foreground">
                        Ja. Wir liefern frische Mezze-Buffets für private Feiern und Firmenevents in Düsseldorf und Umgebung – auf Wunsch mit Aufbau & Präsentation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* CTA */}
                <section className="mt-16 text-center p-8 md:p-12 bg-card border-2 border-primary/20 rounded-lg shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Bereit für echte arabische Gastfreundschaft?
                  </h2>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Lasst uns gemeinsam euer nächstes Mezze-Erlebnis planen.
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

export default BlogPost2;
