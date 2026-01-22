import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Leaf, Salad, Users, Heart, Utensils, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteMode } from "@/contexts/SiteModeContext";
import heroImage from "@/assets/blog/mezze-sharing-hero.jpg";

const BlogPost2 = () => {
  const { setMode } = useSiteMode();

  useEffect(() => {
    setMode('catering');
  }, [setMode]);

  return (
    <>
      <Helmet>
        <title>Was bedeutet Mezze? | Arabische Gastfreundschaft modern interpretiert von Sattuni</title>
        <meta name="description" content="Erfahre, was Mezze bedeutet und wie Sattuni das arabische Prinzip des Teilens in moderne Küche bringt. Frisch, hausgemacht und perfekt für private und geschäftliche Anlässe." />
        <meta name="keywords" content="Mezze, arabische Küche, Catering Düsseldorf, orientalisches Buffet, Fingerfood teilen" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sattuni.de/catering/blog/was-bedeutet-mezze" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Was bedeutet eigentlich Mezze? Warum Teilen der wahre Geschmack ist" />
        <meta property="og:description" content="Mezze ist mehr als kleine Gerichte – es ist eine Art, zusammen zu essen. Entspannt, gesellig, ohne Stress." />
        <meta property="og:image" content="https://sattuni.de/blog/mezze-sharing-hero.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://sattuni.de/catering/blog/was-bedeutet-mezze" />
        <meta property="og:site_name" content="Sattuni Catering" />
        <meta property="article:published_time" content="2025-10-23" />
        <meta property="article:author" content="Sattuni" />
        
        {/* Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Was bedeutet Mezze? | Sattuni" />
        <meta name="twitter:description" content="Das arabische Prinzip des Teilens – modern interpretiert für Events und Firmen." />
        <meta name="twitter:image" content="https://sattuni.de/blog/mezze-sharing-hero.jpg" />
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
                  <p>Wir werden das oft gefragt: "Was genau sind eigentlich Mezze?"</p>
                  <p>Die kurze Antwort: kleine Gerichte zum Teilen. Aber das ist nur die halbe Wahrheit.</p>
                  <p>Denn eigentlich geht es bei Mezze um etwas anderes. Es geht darum, sich Zeit zu nehmen. Zusammenzusitzen. Zu probieren. Zu reden. Und dabei ganz nebenbei richtig gut zu essen.</p>
                </div>

                <div className="space-y-12">
                  {/* Abschnitt 1 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Leaf className="w-5 h-5" />
                      </span>
                      Woher kommt das Wort?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      "Mezze" kommt aus dem Arabischen – مزّة – und bedeutet so viel wie "Geschmack" oder "kleiner Genuss".
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Im Prinzip ist es ähnlich wie Tapas, nur eben mit anderen Aromen. Statt Oliven und Manchego gibt's Hummus und Baba Ghanoush. Statt Patatas Bravas kommt Falafel auf den Tisch.
                    </p>
                    <p className="text-muted-foreground">
                      Aber der Kern ist derselbe: Man bestellt nicht ein Gericht für sich allein, sondern viele kleine Sachen für alle. Und dann teilt man. Das klingt einfach, aber es verändert irgendwie die ganze Atmosphäre am Tisch.
                    </p>
                  </section>

                  {/* Abschnitt 2 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Salad className="w-5 h-5" />
                      </span>
                      Was gehört alles dazu?
                    </h2>
                    <p className="text-muted-foreground mb-4">Die Klassiker kennt ihr wahrscheinlich:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      <li>Hummus – cremig, mild, mit gutem Olivenöl drauf</li>
                      <li>Baba Ghanoush – geröstete Aubergine, leicht rauchig</li>
                      <li>Taboulé – Petersiliensalat mit Zitrone, super frisch</li>
                      <li>Falafel – braucht man glaub ich nicht zu erklären</li>
                      <li>Dazu Oliven, ein paar Datteln, frisches Fladenbrot</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Das Schöne daran: Es kommen immer wieder neue Schälchen auf den Tisch. Hier ein Dip, da ein paar gefüllte Weinblätter. Man entdeckt die ganze Zeit was Neues.
                    </p>
                  </section>

                  {/* Abschnitt 3 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Users className="w-5 h-5" />
                      </span>
                      Warum das so gut funktioniert
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Ehrlich gesagt – wir wissen selbst nicht genau, warum es so einen Unterschied macht. Aber es macht einen.
                    </p>
                    <p className="text-muted-foreground">
                      Vielleicht liegt's daran, dass man beim Teilen automatisch ins Gespräch kommt. "Probier mal davon!" "Ist das scharf?" "Kannst du mir noch was von dem Hummus rüberschieben?" Plötzlich redet man miteinander, obwohl man eigentlich nur zusammen essen wollte.
                    </p>
                  </section>

                  {/* Abschnitt 4 */}
                  <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        <Heart className="w-5 h-5" />
                      </span>
                      Was wir daraus machen
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Bei uns ist Mezze nicht nur ein Menü-Punkt – es ist die Art, wie wir an Essen denken. Auch wenn wir fürs Büro liefern oder ein Firmenevent beliefern: Die Grundidee bleibt die gleiche.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                      <li>Keine traurigen Einzelportionen in Plastikschalen</li>
                      <li>Sondern Platten zum Teilen, Schüsseln zum Weiterreichen</li>
                      <li>Alles frisch, alles an dem Tag gemacht</li>
                    </ul>
                    <p className="text-muted-foreground">
                      Wir glauben einfach, dass Essen besser schmeckt, wenn man es teilt. So simpel ist das eigentlich.
                    </p>
                  </section>
                </div>

                {/* Fazit */}
                <section className="mt-16 p-8 bg-gradient-subtle rounded-lg border border-border/50">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Utensils className="w-5 h-5" />
                    </span>
                    Kurz gesagt
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Mezze ist mehr als ein Wort für "kleine Gerichte". Es ist eine Art, zusammen zu essen. Entspannt, gesellig, ohne Stress.
                    </p>
                    <p>
                      Und falls ihr das mal ausprobieren wollt – ob für ein Firmenevent, eine Feier oder einfach einen Team-Lunch – dann meldet euch bei uns. Wir zeigen euch, wie das geht.
                    </p>
                    <div className="pt-6">
                      <Link to="/catering#contact">
                        <Button size="lg" className="gap-2 w-full sm:w-auto">
                          <span className="hidden sm:inline">Sprecht uns an</span>
                          <span className="sm:hidden">Kontakt</span>
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
                    Ein paar Fragen, die uns oft gestellt werden
                  </h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Ist das alles vegetarisch?
                      </h3>
                      <p className="text-muted-foreground">
                        Vieles davon, ja. Hummus, Baba Ghanoush, Taboulé, Falafel – alles pflanzlich. Aber wir haben auch Fleischgerichte, wenn ihr das wollt.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Wie viel sollte man bestellen?
                      </h3>
                      <p className="text-muted-foreground">
                        Kommt drauf an, wie hungrig alle sind. Als Faustregel: 5-7 verschiedene Sachen für eine normale Runde. Aber wir beraten euch da gerne.
                      </p>
                    </div>

                    <div className="p-6 bg-card border border-border/50 rounded-lg">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Liefert ihr das auch?
                      </h3>
                      <p className="text-muted-foreground">
                        Klar. In Düsseldorf und Umgebung. Auf Wunsch bauen wir das Buffet auch bei euch auf und machen alles hübsch.
                      </p>
                    </div>
                  </div>
                </section>

                {/* CTA */}
                <section className="mt-16 text-center p-8 md:p-12 bg-card border-2 border-primary/20 rounded-lg shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Neugierig geworden?
                  </h2>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Dann lasst uns reden. Erzählt uns, was ihr plant – wir machen euch ein Angebot.
                  </p>
                  <Link to="/catering#contact">
                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                      Anfrage schicken
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
