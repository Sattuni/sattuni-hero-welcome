import { useEffect } from "react";
import { Link } from "react-router-dom";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";
import BlogPostJsonLd from "@/components/seo/BlogPostJsonLd";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import LazyImage from "@/components/common/LazyImage";
import { useSiteMode } from "@/contexts/SiteModeContext";

import heroImage from "@/assets/blog/catering-partner-hero.jpg";
import workshopCatering from "@/assets/partner/workshop-catering.jpg";
import teamLunch from "@/assets/partner/team-lunch.jpg";
import sustainableCatering from "@/assets/partner/sustainable-catering.jpg";

const BlogPost8 = () => {
  const { setMode } = useSiteMode();

  useEffect(() => {
    setMode('catering');
    window.scrollTo(0, 0);
  }, [setMode]);

  return (
    <>
      <SEOHead
        title="Catering für Workshops & Meetings – Einfachere Lösung für Unternehmen | Sattuni"
        description="Unternehmen brauchen regelmäßig Catering für Workshops, Meetings und Schulungen. Erfahrt, wie ein fester Catering-Partner den Prozess vereinfacht."
        keywords="Catering Workshop, Meeting Catering, Business Catering Düsseldorf, Catering Partner Unternehmen, Office Catering, Team Lunch Catering"
        canonicalUrl="https://sattuni.de/catering/blog/catering-fuer-workshops-und-meetings/"
        ogType="article"
        ogTitle="Catering für Workshops & Meetings – Warum viele Unternehmen einen Catering-Partner brauchen"
        ogDescription="Unternehmen brauchen regelmäßig Catering für Workshops, Meetings und Schulungen. Erfahrt, wie ein fester Catering-Partner den Prozess vereinfacht."
        ogImage="https://sattuni.de/blog/catering-partner-hero.jpg"
        articlePublishedTime="2026-03-06"
      />
      <BlogPostJsonLd
        title="Catering für Workshops & Meetings – Warum viele Unternehmen einen Catering-Partner brauchen"
        description="Unternehmen brauchen regelmäßig Catering für Workshops, Meetings und Schulungen. Erfahrt, wie ein fester Catering-Partner den Prozess vereinfacht."
        url="https://sattuni.de/catering/blog/catering-fuer-workshops-und-meetings"
        imageUrl="https://sattuni.de/blog/catering-partner-hero.jpg"
        datePublished="2026-03-06"
      />

      <div className="min-h-screen bg-gradient-hero">
        <ModeHeader />
        
        <main className="pt-20">
          <Breadcrumb
            items={[
              { name: "Startseite", href: "/" },
              { name: "Catering", href: "/catering" },
              { name: "Blog", href: "/catering/blog" },
              { name: "Catering für Workshops & Meetings", href: "/catering/blog/catering-fuer-workshops-und-meetings", current: true }
            ]}
          />

          {/* Hero Image */}
          <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
            <LazyImage
              src={heroImage}
              alt="Business Catering Buffet für Workshops und Meetings im Büro"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>

          {/* Article Content */}
          <article className="py-8 md:py-12 px-4">
            <div className="container mx-auto max-w-3xl">
              
              {/* Back Link */}
              <a href="/catering/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm">
                <ArrowLeft className="w-4 h-4" />
                Zurück zum Blog
              </a>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <time dateTime="2026-03-06">06. Mär. 2026</time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>8 min Lesezeit</span>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  Business Catering
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
                Catering für Workshops & Meetings – Warum viele Unternehmen einen Catering-Partner brauchen
              </h1>

              {/* Intro */}
              <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
                <p>
                  Workshops, Meetings, Schulungen, Kundenbesuche – in vielen Unternehmen gehört Catering zum Arbeitsalltag. Ob 15 Personen beim Team-Meeting oder 40 beim Strategie-Workshop: Gutes Essen ist Teil einer professionellen Veranstaltung.
                </p>
                <p>
                  Doch was auf den ersten Blick einfach klingt – „Wir bestellen Catering" – ist in der Praxis oft aufwendiger als gedacht. Besonders wenn es regelmäßig vorkommt.
                </p>

                {/* Section 2 */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                  Catering organisieren kostet Zeit
                </h2>
                <p>
                  Der typische Ablauf sieht in vielen Unternehmen ähnlich aus:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Catering-Anbieter suchen und vergleichen</li>
                  <li>Menüs durchsehen und Optionen prüfen</li>
                  <li>Angebote anfordern und abstimmen</li>
                  <li>Diätwünsche im Team abfragen</li>
                  <li>Bestellung bestätigen und Lieferung koordinieren</li>
                </ul>
                <p>
                  Für ein einzelnes Event ist das machbar. Aber wenn ein Unternehmen zwei- bis dreimal im Monat Catering braucht, summiert sich der Aufwand schnell. Office Manager, Assistenzen und HR-Teams kennen das nur zu gut.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 bg-primary/5 rounded-r-lg">
                  <p className="text-lg italic text-foreground/80">
                    „Das Essen ist selten die Herausforderung – die Organisation davor ist es."
                  </p>
                </blockquote>

                {/* Section 3 */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                  Wie das Sattuni Catering Partner Modell entstanden ist
                </h2>
                <p>
                  Viele unserer Kunden bei{" "}
                  <Link to="/catering" className="text-primary hover:underline font-medium">
                    Sattuni Catering
                  </Link>{" "}
                  bestellen nicht einmal, sondern regelmäßig. Workshops, Team-Lunches, Kundenempfänge – oft im Zwei-Wochen-Rhythmus.
                </p>
                <p>
                  Die meisten Anfragen betreffen kleinere Business-Caterings für 15 bis 40 Personen. Keine Großveranstaltungen, sondern den normalen Arbeitsalltag.
                </p>
                <p>
                  Aus dieser Erfahrung haben wir das{" "}
                  <Link to="/catering/partner" className="text-primary hover:underline font-medium">
                    Sattuni Catering Partner Modell
                  </Link>{" "}
                  entwickelt – als einfacheren Weg, Catering im Unternehmen zu organisieren.
                </p>

                {/* Image 1 - Workshop Setup */}
                <figure className="my-10">
                  <LazyImage
                    src={workshopCatering}
                    alt="Workshop Catering Setup – Business Buffet für Meetings"
                    className="w-full rounded-xl shadow-md aspect-[16/9] object-cover"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-3 text-center">
                    Workshop-Catering: Frisch zubereitet und pünktlich geliefert.
                  </figcaption>
                </figure>

                {/* Section 4 */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                  So funktioniert das Catering Partner Modell
                </h2>
                <p>
                  Der Bestellprozess ist bewusst einfach gehalten. Eine kurze Nachricht reicht:
                </p>
                <div className="bg-card border border-border rounded-xl p-6 my-6">
                  <p className="text-foreground font-mono text-sm md:text-base">
                    „Workshop – Dienstag – 20 Personen – 12:00 Uhr"
                  </p>
                </div>
                <p>
                  Unternehmen müssen nicht jedes Mal ein neues Menü zusammenstellen. Wir kuratieren ein ausgewogenes Catering mit:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Vorspeisen & Dips</li>
                  <li>Warme Hauptgerichte</li>
                  <li>Dessert</li>
                </ul>
                <p>
                  Dazu erhalten Unternehmen einen festen Partnerpreis pro Person (z.&nbsp;B. 25&nbsp;€ netto) – ohne jedes Mal neue Angebote einholen zu müssen.
                </p>

                {/* Section 5 */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                  Ausgelegt für Business-Gruppen von 15–40 Personen
                </h2>
                <p>
                  Das Modell konzentriert sich auf die häufigsten Catering-Situationen im Unternehmensalltag:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Workshops & Strategietage</li>
                  <li>Meetings & Konferenzen</li>
                  <li>Schulungen & Weiterbildungen</li>
                  <li>Team-Lunches</li>
                  <li>Kundenbesuche & Empfänge</li>
                </ul>
                <p>
                  Diese kleineren Gruppenevents passieren in Unternehmen am häufigsten – und genau dafür ist das Modell optimiert.
                </p>

                {/* Image 2 - Team Lunch */}
                <figure className="my-10">
                  <LazyImage
                    src={teamLunch}
                    alt="Team Lunch Catering im Unternehmen – Office Buffet"
                    className="w-full rounded-xl shadow-md aspect-[16/9] object-cover"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-3 text-center">
                    Team-Lunch im Büro: Abwechslungsreich und unkompliziert.
                  </figcaption>
                </figure>

                {/* Section 6 */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                  Ernährungsbedürfnisse im Unternehmen
                </h2>
                <p>
                  Moderne Arbeitsplätze sind vielfältig – und damit auch die Ernährungsbedürfnisse. Bei der Catering-Planung müssen oft mehrere Anforderungen gleichzeitig berücksichtigt werden.
                </p>
                <p>
                  Unsere Menüs enthalten automatisch Optionen für:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Vegetarisch</li>
                  <li>Vegan</li>
                  <li>Halal</li>
                  <li>Glutenfrei</li>
                  <li>Laktosefrei</li>
                </ul>
                <p>
                  Das bedeutet: Ihr müsst nicht bei jedem Catering einzeln nachfragen, wer was essen kann. Die Vielfalt ist Standard.
                </p>

                {/* Section 7 */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                  Nachhaltiges Catering fürs Büro
                </h2>
                <p>
                  Nachhaltigkeit ist Teil unseres Partner-Modells – nicht nur ein Versprechen, sondern in den Ablauf integriert.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Wiederverwendbare Porzellanschalen</strong> statt Einwegverpackungen</li>
                  <li><strong>Takeaway-Boxen</strong> für Reste, um Lebensmittelverschwendung zu reduzieren</li>
                </ul>
                <p>
                  So können Unternehmen ihr Catering nicht nur einfacher, sondern auch verantwortungsvoller organisieren.
                </p>

                {/* Image 3 - Sustainable */}
                <figure className="my-10">
                  <LazyImage
                    src={sustainableCatering}
                    alt="Nachhaltiges Office Catering – wiederverwendbare Schalen und Porzellan"
                    className="w-full rounded-xl shadow-md aspect-[16/9] object-cover"
                  />
                  <figcaption className="text-sm text-muted-foreground mt-3 text-center">
                    Nachhaltiges Catering: Porzellanschalen statt Einwegplastik.
                  </figcaption>
                </figure>

                {/* Section 8 */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                  Warum viele Unternehmen einen Catering-Partner bevorzugen
                </h2>
                <p>
                  Unternehmen haben bereits feste Partner für viele Bereiche: IT, Gebäudereinigung, Bürobedarf. Warum nicht auch fürs Catering?
                </p>
                <p>
                  Ein fester Catering-Partner vereinfacht die interne Organisation. Es gibt einen Ansprechpartner, einen bekannten Qualitätsstandard und einen planbaren Preis. Der Aufwand pro Bestellung sinkt auf ein Minimum.
                </p>

                {/* Section 9 - CTA */}
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
                  Probiert es mit einem Test-Catering
                </h2>
                <p>
                  Der einfachste Weg, das{" "}
                  <Link to="/catering/partner" className="text-primary hover:underline font-medium">
                    Sattuni Catering Partner Modell
                  </Link>{" "}
                  kennenzulernen: Bestellt ein{" "}
                  <Link to="/catering?scrollTo=contact" className="text-primary hover:underline font-medium">
                    Test-Catering
                  </Link>{" "}
                  für euer nächstes Meeting oder euren nächsten Workshop.
                </p>
                <p>
                  Kein Vertrag, keine Mindestlaufzeit – einfach testen und erleben, wie unkompliziert Catering im Büro sein kann.
                </p>
              </div>

              {/* CTA Box */}
              <div className="mt-12 p-8 bg-card border border-border rounded-2xl text-center space-y-4 shadow-sm">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Catering für euer nächstes Meeting?
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Testet unser Partner-Modell unverbindlich – eine Nachricht reicht.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <Button asChild size="lg">
                    <Link to="/catering/partner">
                      Partner Modell entdecken
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/catering?scrollTo=contact">
                      Test-Catering anfragen
                    </Link>
                  </Button>
                </div>
              </div>

              {/* More Articles */}
              <div className="mt-16 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Weitere Artikel</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a href="/catering/blog/workshop-catering" className="group p-4 rounded-lg border border-border hover:border-primary/30 transition-colors">
                    <span className="text-sm text-muted-foreground">Catering</span>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mt-1">
                      Workshop-Catering: So bleibt dein Team den ganzen Tag fokussiert
                    </h4>
                  </a>
                  <a href="/catering/blog/buero-lunch-ideen" className="group p-4 rounded-lg border border-border hover:border-primary/30 transition-colors">
                    <span className="text-sm text-muted-foreground">Catering</span>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mt-1">
                      10 kreative Büro-Lunch-Ideen für euer Team
                    </h4>
                  </a>
                </div>
              </div>

            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost8;
