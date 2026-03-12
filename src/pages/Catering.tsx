import heroCatering from "@/assets/hero/hero-catering-alt.jpg";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import CateringBookingForm from "@/components/features/catering/CateringBookingForm";
import CustomerReviews from "@/components/features/about/CustomerReviews";
import FAQSection from "@/components/features/catering/FAQSection";
import PraxisBeispiele from "@/components/features/catering/PraxisBeispiele";
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
  Clock, 
  Mail, 
  Phone, 
  Users, 
  Utensils,
  Leaf,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAnalytics } from "@/contexts";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { useSiteMode } from "@/contexts/SiteModeContext";
import { useMobileDetection } from "@/hooks/useMobileDetection";

const Catering = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { trackCateringInquiryEnhanced, trackImageInteraction } = useAnalytics();
  const { addEngagementFactor } = useScrollTracking();
  const { setMode } = useSiteMode();
  const isMobile = useMobileDetection();

  useEffect(() => {
    setMode('catering');
  }, [setMode]);

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CateringBusiness",
      "name": "Sattuni Catering Düsseldorf",
      "description": "Arabisches Catering für Business-Events und private Feiern in Düsseldorf",
      "url": "https://sattuni.de/catering/",
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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scrollTo');
    
    if (scrollTo === 'contact') {
      setTimeout(() => {
        scrollToForm();
      }, 100);
    }
  }, []);

  const processSteps = [
    {
      icon: Mail,
      title: "Anfrage",
      description: "Anlass, Datum & Personenzahl senden.",
    },
    {
      icon: Phone,
      title: "Beratung",
      description: "Menü besprechen & Angebot erhalten.",
    },
    {
      icon: CheckCircle,
      title: "Bestätigung",
      description: "Angebot bestätigen – wir planen.",
    },
    {
      icon: Utensils,
      title: "Lieferung",
      description: "Pünktlich geliefert & aufgebaut.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Arabisches Catering Düsseldorf – Events & Feiern | Sattuni"
        description="Arabisches Catering für Firmenevents & private Feiern in Düsseldorf. Ab 20 Personen. Jetzt unverbindlich anfragen!"
        keywords="Catering Düsseldorf, arabisches Catering, Business Catering, Event Catering, Firmenevent, Buffet Service, Hochzeit Catering"
        canonicalUrl="https://sattuni.de/catering/"
        ogImage="https://sattuni.de/sattuni_logo.jpg"
      />
      
      <div className="min-h-screen bg-background overflow-x-hidden">
        <ModeHeader />

        {/* Breadcrumb */}
        <div className="pt-20">
          <Breadcrumb
            items={[
              { name: "Startseite", href: "/" },
              { name: "Catering", href: "/catering", current: true }
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-4 md:pt-8 pb-10 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroCatering}
              alt="Arabisches Catering Buffet für Events und Feiern"
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
            <div className="max-w-4xl mx-auto space-y-3 md:space-y-5">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Arabisches Catering für Events & Feiern
              </h1>
              <p className="text-sm md:text-xl text-white/90 max-w-2xl mx-auto">
                Buffets ab 24,50€/Person – frisch, hausgemacht, pünktlich geliefert.
              </p>

              {/* Single primary CTA */}
              <div className="pt-3 md:pt-6">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-8"
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
              </div>

              {/* Trust */}
              <div className="pt-3 md:pt-4 flex flex-col items-center gap-2">
                <GoogleReviewBadge variant="hero" />
                <a 
                  href="tel:+492113618115" 
                  className="hidden md:inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Oder direkt anrufen: 0211 36180115</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Nav - Minimal */}
        <section className="sticky top-16 md:top-20 z-40 py-2 bg-background/95 backdrop-blur-sm border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 md:gap-4 justify-center text-xs md:text-sm">
              <a href="#anlaesse" className="px-3 py-1.5 bg-background border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
                Anlässe
              </a>
              <Link to="/catering/menus" className="px-3 py-1.5 bg-background border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
                Menüs
              </Link>
              <button onClick={scrollToForm} className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium">
                Anfrage senden
              </button>
            </div>
          </div>
        </section>

        {/* Anlässe - Cleaner layout */}
        <section className="py-8 md:py-16 scroll-mt-24" id="anlaesse">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Für welche Anlässe?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Arabisches Buffet für Unternehmen und private Feiern.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 md:gap-6">
              {/* B2B */}
              <Card className="group hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-foreground">
                        Unternehmen & Teams
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Office Lunch, Meetings, Firmenfeiern
                      </p>
                    </div>
                  </div>
                  
                  <ul className="hidden md:block text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><Link to="/catering/blog/buero-lunch-ideen" className="hover:text-primary hover:underline">Office Lunch</Link> & Team-Events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><Link to="/catering/blog/workshop-catering" className="hover:text-primary hover:underline">Meetings & Workshops</Link></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><Link to="/catering/blog/catering-fuer-firmenfeiern-in-duesseldorf" className="hover:text-primary hover:underline">Firmenfeiern</Link> & Kundenempfänge</span>
                    </li>
                  </ul>
                  <p className="hidden md:block text-xs text-muted-foreground mt-3">
                    Regelmäßig Events? <Link to="/catering/partner" className="font-medium text-primary hover:underline">Partner Modell →</Link>
                  </p>
                </CardContent>
              </Card>

              {/* B2C */}
              <Card className="group hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-foreground">
                        Private Feiern
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Geburtstage, Hochzeiten, Familienfeiern
                      </p>
                    </div>
                  </div>

                  <ul className="hidden md:block text-muted-foreground space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Geburtstage & Jubiläen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Hochzeiten & Verlobungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Familienfeiern & Gartenpartys</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Trust Badges - Compact */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 rounded-full border border-primary/10">
                <Leaf className="w-3 h-3 text-primary" />
                <span className="text-xs text-foreground font-medium">Frisch zubereitet</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 rounded-full border border-primary/10">
                <Star className="w-3 h-3 text-primary" />
                <span className="text-xs text-foreground font-medium">200+ Caterings</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 rounded-full border border-primary/10">
                <Users className="w-3 h-3 text-primary" />
                <span className="text-xs text-foreground font-medium">Ab 20 Personen</span>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps - Clean & tight */}
        <section className="py-6 md:py-16 bg-muted/30 scroll-mt-24" id="ablauf">
          <div className="container mx-auto px-4">
            <div className="text-center mb-5 md:mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-2">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">In 4 Schritten</span>
              </div>
              <h2 className="text-lg md:text-3xl font-bold text-foreground">
                So läuft euer Catering ab
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-6 max-w-4xl mx-auto">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center space-y-2">
                    <div className="flex justify-center">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                      </div>
                    </div>
                    <div className="text-[10px] md:text-xs font-medium text-primary">{index + 1}</div>
                    <h3 className="text-xs md:text-base font-semibold text-foreground leading-tight">{step.title}</h3>
                    <p className="text-[10px] md:text-sm text-muted-foreground leading-snug hidden md:block">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Praxis Beispiele - ausgeblendet */}
        {/* <PraxisBeispiele /> */}

        {/* Gallery Teaser */}
        <CateringGalleryTeaser />

        {/* Customer Reviews */}
        <CustomerReviews />

        {/* Booking Form */}
        <CateringBookingForm />

        {/* FAQ */}
        <FAQSection />

        {/* Mobile CTA - Fixed bottom */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t shadow-lg p-3">
          <Button
            size="lg"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={scrollToForm}
          >
            Catering anfragen
          </Button>
        </div>

        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-20 md:bottom-6 right-4 z-50 w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5 mx-auto" />
          </button>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Catering;
