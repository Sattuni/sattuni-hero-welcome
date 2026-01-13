import heroCatering from "@/assets/hero/hero-catering.jpg";
import BuffetGallery from "@/components/features/catering/BuffetGallery";
import CateringBookingForm from "@/components/features/catering/CateringBookingForm";
import CustomerReviews from "@/components/features/about/CustomerReviews";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Header from "@/components/layout/Header";
import InternalLinks from "@/components/layout/InternalLinks";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, CheckCircle, ChevronRight, Clock, HelpCircle, Leaf, Mail, Phone, Salad, Users, Utensils, UtensilsCrossed } from "lucide-react";
import { useEffect, useState } from "react";
import { useAnalytics } from "@/contexts";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Catering = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { trackCateringInquiryEnhanced, trackBusinessAction, trackImageInteraction } = useAnalytics();
  const { addEngagementFactor } = useScrollTracking();

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Catering in Düsseldorf – Zuverlässig & Professionell | Sattuni";
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Professionelles Catering in Düsseldorf ab 20 Personen. Klare Abläufe, zuverlässige Lieferung, persönliche Betreuung. Jetzt unverbindlich anfragen.'
    );

    // Add structured JSON-LD data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CateringBusiness",
      "name": "Sattuni Catering Düsseldorf",
      "description": "Professionelles Catering für Business-Events und private Feiern in Düsseldorf und Umgebung",
      "url": "https://sattuni.de/catering",
      "telephone": "+49-211-36180115",
      "email": "catering@sattuni.de",
      "address": {
        "@type": "PostalAddress", 
        "addressLocality": "Düsseldorf",
        "addressCountry": "DE"
      },
      "servesCuisine": "Arabisch, Orientalisch, Libanesisch",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "51.2277",
          "longitude": "6.7735"
        },
        "geoRadius": "50000"
      }
    };

    let jsonLdScript = document.querySelector('script[type="application/ld+json"][data-catering]') as HTMLScriptElement;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script') as HTMLScriptElement;
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.setAttribute('data-catering', 'true');
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData);

    // Scroll to top functionality
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Reset title on unmount
      document.title = "Sattuni - Oriental Bowls & More";
      // Remove structured data
      const scriptToRemove = document.querySelector('script[data-catering]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to contact form if URL parameter is present
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scrollTo');
    
    if (scrollTo === 'contact') {
      setTimeout(() => {
        const element = document.getElementById('catering-kontakt');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Focus the first input after scrolling
          setTimeout(() => {
            const nameInput = document.getElementById('name');
            nameInput?.focus();
          }, 500);
        }
      }, 100);
    }
  }, []);
  // How it works steps
  const processSteps = [
    {
      icon: Mail,
      title: "Anfrage senden",
      description: "Teilt uns Anlass, Datum und Gästezahl mit – wir melden uns innerhalb von 24 Stunden.",
    },
    {
      icon: Phone, 
      title: "Abstimmung & Angebot",
      description: "Wir besprechen Details, klären offene Fragen und erstellen ein verbindliches Angebot.",
    },
    {
      icon: CheckCircle,
      title: "Bestätigung",
      description: "Nach eurer Zusage erhaltet ihr alle wichtigen Informationen schriftlich.",
    },
    {
      icon: Utensils,
      title: "Lieferung zum Termin",
      description: "Wir liefern pünktlich im vereinbarten Zeitfenster – bereit für euer Event.",
    },
  ];

  const usps = [
    {
      icon: CheckCircle,
      title: "Strukturierte Abläufe",
      description: "Klare Prozesse von der Anfrage bis zur Lieferung",
    },
    {
      icon: Phone,
      title: "Feste Ansprechpartner",
      description: "Persönliche Betreuung durch einen direkten Kontakt",
    },
    {
      icon: Users,
      title: "Ab 20 Personen",
      description: "Für Meetings, Feiern und Veranstaltungen jeder Größe",
    },
    {
      icon: Clock,
      title: "Pünktliche Lieferung",
      description: "Koordinierte Zeitfenster für reibungslose Events",
    },
  ];


  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
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
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCatering} 
            alt="Sattuni Catering Service" 
            className="w-full h-full object-cover"
            style={{
              filter: 'blur(0.8px)',
            }}
            onLoad={() => {
              trackImageInteraction('hero-catering', 'view', 'catering-hero-section');
              addEngagementFactor('hero_image_view');
            }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
              Catering für Events in Düsseldorf
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-2">
              Zuverlässige Planung, klare Abläufe und pünktliche Lieferung – für Business-Events und private Feiern.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
                onClick={() => {
                  // Track enhanced catering inquiry
                  trackCateringInquiryEnhanced('hero-section', {
                    estimatedValue: 500,
                    guestCount: 20,
                    pricePerPerson: 25,
                    eventType: 'general_inquiry'
                  });
                  
                  addEngagementFactor('catering_cta_hero');
                  
                  const element = document.getElementById('catering-kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setTimeout(() => {
                      const nameInput = document.getElementById('name');
                      nameInput?.focus();
                    }, 500);
                  }
                }}
              >
                Unverbindlich anfragen
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Navigation - Sticky on Mobile */}
      <section className="sticky top-16 md:top-20 z-40 py-3 md:py-6 bg-background/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center text-xs md:text-sm">
            <button 
              onClick={() => document.getElementById('so-funktioniert-es')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="px-2 md:px-3 py-1.5 md:py-1 bg-background border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Ablauf
            </button>
            <button 
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="px-2 md:px-3 py-1.5 md:py-1 bg-background border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => document.getElementById('catering-kontakt')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="px-2 md:px-3 py-1.5 md:py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Anfrage senden
            </button>
          </div>
        </div>
      </section>


      {/* How it works - Process Steps */}
      <section className="py-12 md:py-16 scroll-mt-24" id="so-funktioniert-es">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-4">
              So funktioniert es
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Von der Anfrage bis zur Lieferung – ein klarer Ablauf für eure Planungssicherheit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="h-full">
                    <CardContent className="p-5 text-center space-y-3">
                      <div className="flex justify-center">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <div className="text-sm font-medium text-primary">Schritt {index + 1}</div>
                      <h3 className="text-base md:text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ChevronRight className="w-6 h-6 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Sattuni USPs */}
      <section className="py-12 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-4">
              Worauf ihr euch verlassen könnt
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="text-center space-y-3 md:space-y-4">
                <div className="mx-auto w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <usp.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{usp.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Buffet Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <BuffetGallery />
        </div>
      </section>


      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Catering Booking Form */}
      <CateringBookingForm />

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gradient-subtle scroll-mt-24" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-2 md:mb-4">
              <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Häufige Fragen
              </h2>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="ablauf" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Wie läuft eine Catering-Anfrage ab?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    Nach Eingang eurer Anfrage melden wir uns innerhalb von 24 Stunden. 
                    Gemeinsam klären wir Details wie Termin, Gästezahl und besondere Anforderungen.
                  </p>
                  <p>
                    Ihr erhaltet anschließend ein verbindliches Angebot mit allen wichtigen Informationen.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="lieferung" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Wie wird die Lieferung koordiniert?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    Die Lieferung erfolgt in einem vorab vereinbarten Zeitfenster. 
                    So stellen wir sicher, dass alles rechtzeitig vor Ort ist – 
                    bevor euer Meeting oder Event beginnt.
                  </p>
                  <p>
                    Bei Aufbau-Service kommen wir rechtzeitig, um alles vorzubereiten.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="mindestpersonen" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Ab wie vielen Personen bietet ihr Catering an?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    Unser Catering-Service ist ab 20 Personen verfügbar. 
                    Diese Mindestgröße ermöglicht uns eine professionelle Durchführung 
                    mit entsprechendem Service-Level.
                  </p>
                  <p>
                    <strong>Für kleinere Gruppen:</strong> Nutzt gerne unseren 
                    regulären Lieferservice über den Online-Shop.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="anpassungen" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Können Änderungen nach der Buchung vorgenommen werden?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    Ja, Anpassungen bei der Personenanzahl sind bis eine Woche vor dem Liefertag möglich. 
                    Wir informieren euch rechtzeitig über die Fristen.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="ausstattung" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Ist Geschirr und Ausstattung enthalten?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    Auf Wunsch stellen wir Geschirr, Besteck und Wärmebehälter bereit. 
                    Die Details besprechen wir gemeinsam nach eurer Anfrage.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="ernaehrung" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Gibt es vegetarische und vegane Optionen?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    Ja, unsere Küche bietet eine große Auswahl an vegetarischen und veganen Gerichten. 
                    Teilt uns eure Anforderungen einfach in der Anfrage mit.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="liefergebiet" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Wie weit liefert ihr?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    Wir liefern in Düsseldorf und Umgebung – bis zu 50 km Radius. 
                    Innerhalb Düsseldorfs ist die Anlieferung in der Regel inklusive.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="kontakt" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Wer ist mein Ansprechpartner?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    Ihr erhaltet nach der Anfrage einen festen Ansprechpartner, 
                    der euch durch den gesamten Prozess begleitet – 
                    von der Planung bis zur Durchführung.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
        
        {/* Internal Links Section */}
        <InternalLinks />

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Habt ihr Fragen oder möchtet eine Anfrage stellen?
            </h2>
            <p className="text-lg text-muted-foreground">
              Wir melden uns innerhalb von 24 Stunden bei euch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => {
                  const element = document.getElementById('catering-kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setTimeout(() => {
                      const nameInput = document.getElementById('name');
                      nameInput?.focus();
                    }, 500);
                  }
                }}
              >
                Unverbindliche Anfrage stellen
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
          onClick={() => {
            const element = document.getElementById('catering-kontakt');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              setTimeout(() => {
                const nameInput = document.getElementById('name');
                nameInput?.focus();
              }, 500);
            }
          }}
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
    </div>
  );
};

export default Catering;