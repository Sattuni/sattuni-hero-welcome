import heroCatering from "@/assets/hero/hero-catering-alt.jpg";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import CateringBookingForm from "@/components/features/catering/CateringBookingForm";
import CustomerReviews from "@/components/features/about/CustomerReviews";
import FAQSection from "@/components/features/catering/FAQSection";
import CateringGalleryTeaser from "@/components/features/catering/CateringGalleryTeaser";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer from "@/components/layout/Footer";
import ModeHeader from "@/components/layout/ModeHeader";
import { GoogleReviewBadge } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowUp, 
  Building2, 
  CheckCircle, 
  ChevronRight, 
  Heart, 
  Mail, 
  MessageSquare, 
  Phone, 
  Send, 
  Truck, 
  Users 
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAnalytics } from "@/contexts";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { useSiteMode } from "@/contexts/SiteModeContext";

const Catering = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { trackCateringInquiryEnhanced, trackImageInteraction } = useAnalytics();
  const { addEngagementFactor } = useScrollTracking();
  const { setMode } = useSiteMode();

  // Set catering mode on page load
  useEffect(() => {
    setMode('catering');
  }, [setMode]);

  // SEO Structured Data
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CateringBusiness",
      "name": "Sattuni Catering Düsseldorf",
      "description": "Professionelles Catering für Firmen, Events und private Feiern in Düsseldorf",
      "url": "https://sattuni.de/catering",
      "telephone": "+49-211-36180115",
      "email": "catering@sattuni.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Johannstraße 40",
        "addressLocality": "Düsseldorf",
        "postalCode": "40476",
        "addressCountry": "DE"
      },
      "areaServed": {
        "@type": "City",
        "name": "Düsseldorf"
      },
      "priceRange": "€€",
      "openingHours": "Mo-Fr 09:00-18:00"
    };

    let jsonLdScript = document.querySelector('script[type="application/ld+json"][data-catering]') as HTMLScriptElement;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script') as HTMLScriptElement;
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.setAttribute('data-catering', 'true');
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      const scriptToRemove = document.querySelector('script[data-catering]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    const element = document.getElementById('anfrage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        nameInput?.focus();
      }, 500);
    }
  };

  // Scroll to contact form if URL parameter is present
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scrollTo');
    
    if (scrollTo === 'contact') {
      setTimeout(() => {
        scrollToForm();
      }, 100);
    }
  }, []);

  // Process steps for catering inquiry
  const processSteps = [
    {
      icon: Send,
      step: "1",
      title: "Anfrage senden",
      description: "Anlass, Personenanzahl, Datum",
    },
    {
      icon: MessageSquare,
      step: "2",
      title: "Kurze Abstimmung",
      description: "Menüs & Ablauf besprechen",
    },
    {
      icon: Truck,
      step: "3",
      title: "Lieferung & Aufbau",
      description: "Pünktlich vor Ort",
    },
    {
      icon: Heart,
      step: "4",
      title: "Entspannter Event-Tag",
      description: "Ihr genießt, wir kümmern uns",
    },
  ];

  // Why companies choose Sattuni
  const whyChooseSattuni = [
    "Erfahrung mit Firmen & Business-Events",
    "Zuverlässige Planung & klare Abläufe",
    "Moderne, frische Küche",
    "Flexible Menüs für unterschiedliche Teams",
    "Persönliche Abstimmung statt Standardlösungen",
  ];

  return (
    <>
      <SEOHead
        title="Catering für Firmen in Düsseldorf | Sattuni"
        description="Professionelles Catering für Firmen, Events & private Feiern in Düsseldorf. Flexible Menüs, zuverlässige Planung und persönliche Betreuung."
        keywords="Catering Düsseldorf, Firmen Catering, Business Catering, Event Catering, Office Catering, Catering Service Düsseldorf"
        canonicalUrl="https://sattuni.de/catering"
        ogImage="https://sattuni.de/sattuni_logo.jpg"
      />
      
      <div className="min-h-screen bg-background overflow-x-hidden">
        <ModeHeader />

        {/* Breadcrumb Navigation */}
        <div className="pt-20">
          <Breadcrumb
            items={[
              { name: "Startseite", href: "/" },
              { name: "Catering", href: "/catering", current: true }
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-8 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroCatering}
              alt="Catering Buffet für Firmenveranstaltung in Düsseldorf"
              className="w-full h-full object-cover"
              style={{ filter: 'blur(0.8px)' }}
              onLoad={() => {
                trackImageInteraction('hero-catering', 'view', 'catering-hero-section');
                addEngagementFactor('hero_image_view');
              }}
            />
            <div className="absolute inset-0 bg-black/65"></div>
          </div>

          <div className="relative container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
                Catering für Firmen in Düsseldorf – modern, unkompliziert & zuverlässig
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-2">
                Ob Firmenveranstaltung, Sommerfest oder private Feier – wir sorgen für gutes Essen und einen reibungslosen Ablauf.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
                  onClick={() => {
                    trackCateringInquiryEnhanced('hero-section', {
                      estimatedValue: 500,
                      guestCount: 20,
                      pricePerPerson: 25,
                      eventType: 'general_inquiry'
                    });
                    addEngagementFactor('catering_cta_hero');
                    scrollToForm();
                  }}
                >
                  Unverbindlich anfragen
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8"
                >
                  <Link to="/catering/menus">
                    Menüs & Preise ansehen
                  </Link>
                </Button>
              </div>

              {/* Google Review Trust Badge */}
              <div className="pt-6">
                <GoogleReviewBadge variant="hero" />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Sattuni bietet professionelles Catering für Unternehmen und private Anlässe in Düsseldorf. 
                Von der ersten Anfrage bis zur Lieferung begleiten wir euch persönlich – mit flexiblen 
                Menüs und einem klaren Ablauf.
              </p>
            </div>
          </div>
        </section>

        {/* B2B Section: Catering für Firmen & Events */}
        <section className="py-12 md:py-20 bg-gradient-subtle" id="firmen">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
                Catering für Firmen & Events in Düsseldorf
              </h2>
              
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                Für Unternehmen, die Wert auf Qualität und Zuverlässigkeit legen – egal ob kleines Meeting oder großes Firmenfest.
              </p>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Meetings & Workshops</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Konzentriertes Arbeiten braucht gutes Essen. Wir liefern Fingerfood, Snacks oder warme Gerichte – passend zu eurem Zeitplan.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Office Lunch & Teamtage</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Regelmäßiges Team-Lunch oder ein besonderer Teamtag – wir bringen frische Küche direkt ins Büro.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Sommerfeste & Weihnachtsfeiern</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Bei größeren Feiern übernehmen wir die komplette Verpflegung – mit Buffet-Aufbau und bei Bedarf auch Abbau.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Firmenveranstaltungen & Kundenevents</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Kundenempfänge, Produktpräsentationen oder Jubiläen – wir sorgen dafür, dass das Essen zur Veranstaltung passt.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Catering-Konzepte Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
                Unsere Catering-Konzepte
              </h2>
              
              <div className="text-muted-foreground space-y-4 mb-8">
                <p>
                  Je nach Anlass und Gruppengröße bieten wir verschiedene Formate an: klassisches Buffet, 
                  Fingerfood zum Networking oder ein Flying Buffet für dynamische Events. Alle Menüs 
                  lassen sich individuell anpassen – vegetarische und vegane Optionen sind bei uns Standard.
                </p>
                <p>
                  Die Portionsgrößen stimmen wir auf eure Gästezahl ab. Ob 20 oder 200 Personen – 
                  ihr bekommt ein durchdachtes Konzept, das zum Anlass passt.
                </p>
              </div>

              <div className="text-center">
                <Link 
                  to="/catering/menus"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-lg transition-colors"
                >
                  Catering-Menüs ansehen
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sattuni Section */}
        <section className="py-12 md:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Warum Unternehmen sich für Sattuni entscheiden
              </h2>

              <ul className="space-y-4 mb-8">
                {whyChooseSattuni.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-lg">{reason}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <Link 
                  to="/catering/galerie"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Bilder von unseren Caterings ansehen
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* B2C Section: Private Feiern */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
                Catering für private Feiern in Düsseldorf
              </h2>
              
              <div className="text-muted-foreground space-y-4 text-center">
                <p>
                  Auch für Geburtstage, Jubiläen und kleinere private Feiern sind wir der richtige Partner. 
                  Ihr bekommt dieselbe Qualität und denselben persönlichen Service wie unsere Firmenkunden.
                </p>
                <p>
                  Wir liefern, bauen auf – und ihr könnt euch voll und ganz auf eure Gäste konzentrieren.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-20 bg-gradient-subtle" id="ablauf">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                So läuft eine Catering-Anfrage ab
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="relative">
                      <Card className="h-full">
                        <CardContent className="p-4 md:p-5 text-center space-y-3">
                          <div className="flex justify-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div className="text-sm font-bold text-primary">{step.step}</div>
                          <h3 className="text-sm md:text-base font-semibold text-foreground">{step.title}</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                      {index < processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                          <ChevronRight className="w-5 h-5 text-muted-foreground/40" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Teaser */}
        <CateringGalleryTeaser />

        {/* Customer Reviews */}
        <CustomerReviews />

        {/* Trusted Partners */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  Diese Unternehmen vertrauen uns
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-6 md:gap-8 items-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-soft">
                  <img
                    src="/lovable-uploads/6b6ec1ce-974f-4e6f-b23e-61aacd2fdf8d.png"
                    alt="WHU Otto Beisheim School of Management - Partner von Sattuni"
                    className="max-h-12 md:max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <div className="flex items-center justify-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-soft">
                  <img
                    src="/lovable-uploads/Leonardo.png"
                    alt="Leonardo - Partner von Sattuni"
                    className="max-h-12 md:max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                <div className="flex items-center justify-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-soft">
                  <img
                    src="/lovable-uploads/da1a1dd5-81c8-4349-83f7-43f66d08e68e.png"
                    alt="Rockwell Automation - Partner von Sattuni"
                    className="max-h-12 md:max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Booking Form */}
        <CateringBookingForm />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-subtle" id="cta-final">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Catering in Düsseldorf anfragen
              </h2>
              <p className="text-lg text-muted-foreground">
                Erzählt uns kurz von eurem Anlass – wir melden uns zeitnah mit einem passenden Vorschlag.
              </p>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="text-lg px-8"
                  onClick={scrollToForm}
                >
                  Anfrage senden
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile CTA Button - Fixed at bottom */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t shadow-lg p-4">
          <Button
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={scrollToForm}
          >
            Catering anfragen
          </Button>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp className="w-5 h-5 mx-auto" />
          </button>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Catering;
