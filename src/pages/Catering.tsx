import heroCatering from "@/assets/hero/hero-catering-alt.jpg";
import BuffetGallery from "@/components/features/catering/BuffetGallery";
import CateringBookingForm from "@/components/features/catering/CateringBookingForm";
import CustomerReviews from "@/components/features/about/CustomerReviews";
import FAQSection from "@/components/features/catering/FAQSection";
import FreeDeliveryBanner from "@/components/features/marketing/FreeDeliveryBanner";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer from "@/components/layout/Footer";
import ModeHeader from "@/components/layout/ModeHeader";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useMobileDetection } from "@/hooks/useMobileDetection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, CheckCircle, ChevronRight, Clock, Mail, Phone, Users, Utensils } from "lucide-react";
import { useEffect, useState } from "react";
import { useAnalytics } from "@/contexts";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { useSiteMode } from "@/contexts/SiteModeContext";

const Catering = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { trackCateringInquiryEnhanced, trackBusinessAction, trackImageInteraction } = useAnalytics();
  const { addEngagementFactor } = useScrollTracking();
  const { setMode } = useSiteMode();
  const isMobile = useMobileDetection();

  // Set catering mode on page load (direct URL access)
  useEffect(() => {
    setMode('catering');
  }, [setMode]);

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
        const element = document.getElementById('anfrage');
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
      <ModeHeader />
      <FreeDeliveryBanner />
      
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
          <div className="absolute inset-0 bg-black/65"></div>
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
                  
                  const element = document.getElementById('anfrage');
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
            <a 
              href="/menus"
              className="px-2 md:px-3 py-1.5 md:py-1 bg-background border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Menüs ansehen
            </a>
            <button 
              onClick={() => document.getElementById('ablauf')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
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
              onClick={() => document.getElementById('anfrage')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="px-2 md:px-3 py-1.5 md:py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Anfrage senden
            </button>
          </div>
        </div>
      </section>


      {/* How it works - Process Steps */}
      <section className="py-12 md:py-16 scroll-mt-24" id="ablauf">
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
          
          {/* Mobile Carousel */}
          {isMobile ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2">
                {usps.map((usp, index) => (
                  <CarouselItem key={index} className="pl-2 basis-[85%]">
                    <div className="text-center space-y-3 p-4 bg-background/50 rounded-xl">
                      <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <usp.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{usp.title}</h3>
                      <p className="text-sm text-muted-foreground">{usp.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {usps.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-primary/30"
                  />
                ))}
              </div>
            </Carousel>
          ) : (
            /* Desktop Grid */
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
          )}
        </div>
      </section>


      {/* Buffet Gallery */}
      <section className="py-20 bg-background scroll-mt-24" id="angebote">
        <div className="container mx-auto px-4">
          <BuffetGallery />
        </div>
      </section>


      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Trusted Partners Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Diese Unternehmen vertrauen uns
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
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
              
              <div className="flex items-center justify-center p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-soft">
                <img 
                  src="/lovable-uploads/49b2979a-a9be-41b9-85ba-4f3e33283c4a.png" 
                  alt="BCG Boston Consulting Group - Partner von Sattuni" 
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
                  const element = document.getElementById('anfrage');
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
            const element = document.getElementById('anfrage');
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
      
      <Footer />
    </div>
  );
};

export default Catering;