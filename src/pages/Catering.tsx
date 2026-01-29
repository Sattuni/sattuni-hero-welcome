import heroCatering from "@/assets/hero/hero-catering-alt.jpg";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import CateringBookingForm from "@/components/features/catering/CateringBookingForm";
import CustomerReviews from "@/components/features/about/CustomerReviews";
import FAQSection from "@/components/features/catering/FAQSection";
import FreeDeliveryBanner from "@/components/features/marketing/FreeDeliveryBanner";
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
  Clock, 
  Heart, 
  Mail, 
  PartyPopper, 
  Phone, 
  Users, 
  Utensils 
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

  // Process steps for B2B
  const businessProcessSteps = [
    {
      icon: Mail,
      title: "Anfrage stellen",
      description: "Erzählt uns kurz, was ihr plant – Anlass, Datum, Personenzahl. Wir melden uns innerhalb von 24 Stunden.",
    },
    {
      icon: Phone,
      title: "Abstimmung",
      description: "Wir klären offene Fragen, besprechen Menüoptionen und erstellen ein passendes Angebot.",
    },
    {
      icon: CheckCircle,
      title: "Bestätigung",
      description: "Ihr bestätigt das Angebot – wir kümmern uns um die Planung und Logistik.",
    },
    {
      icon: Utensils,
      title: "Lieferung & Aufbau",
      description: "Pünktlich im vereinbarten Zeitfenster. Optional mit komplettem Aufbau.",
    },
  ];

  // Process steps for B2C (more emotional)
  const privateProcessSteps = [
    {
      icon: Heart,
      title: "Erzählt uns von eurer Feier",
      description: "Was feiert ihr? Wie viele Gäste kommen? Wir freuen uns auf eure Geschichte.",
    },
    {
      icon: Phone,
      title: "Persönliche Beratung",
      description: "Wir helfen euch bei der Menüauswahl und geben Tipps für ein gelungenes Fest.",
    },
    {
      icon: CheckCircle,
      title: "Alles klar gemacht",
      description: "Ihr bestätigt – und könnt euch voll auf eure Gäste freuen.",
    },
    {
      icon: PartyPopper,
      title: "Wir liefern, ihr feiert",
      description: "Frisch zubereitet und pünktlich bei euch. Der Rest gehört euch und euren Gästen.",
    },
  ];

  // Buffet qualities
  const buffetQualities = [
    "Frisch am Tag zubereitet – keine Fertigprodukte",
    "Hausgemachte Dips, Salate und Hauptgerichte",
    "Umfangreiche vegane und vegetarische Optionen",
    "Über 200 erfolgreiche Caterings seit 2022",
    "Zuverlässige Lieferung im vereinbarten Zeitfenster",
    "Flexible Menüzusammenstellung nach euren Wünschen",
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

        {/* 1) Hero Section */}
        <section className="relative pt-8 pb-16 md:pb-24 overflow-hidden">
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
            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
                Arabisches Catering für Events & Feiern in Düsseldorf
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-2">
                Für Offices, private Feiern und besondere Anlässe – als Buffet, Lunch oder Event-Catering.
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
                  Unverbindlich Catering anfragen
                </Button>
              </div>

              {/* Google Review Trust Badge */}
              <div className="pt-6">
                <GoogleReviewBadge variant="hero" />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="sticky top-16 md:top-20 z-40 py-3 md:py-4 bg-background/95 backdrop-blur-sm border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center text-xs md:text-sm">
              <a
                href="#anlaesse"
                className="px-2 md:px-3 py-1.5 md:py-1 bg-background border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Anlässe
              </a>
              <a
                href="/menus"
                className="px-2 md:px-3 py-1.5 md:py-1 bg-background border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Menüs
              </a>
              <a
                href="#ablauf-business"
                className="px-2 md:px-3 py-1.5 md:py-1 bg-background border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Ablauf
              </a>
              <button
                onClick={scrollToForm}
                className="px-2 md:px-3 py-1.5 md:py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Anfrage senden
              </button>
            </div>
          </div>
        </section>

        {/* 2) Zwei Einstiege Section */}
        <section className="py-12 md:py-20 scroll-mt-24" id="anlaesse">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Für welche Anlässe eignet sich unser Catering?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ob für euer Team im Büro oder eure private Feier – wir bringen arabische Küche zu euch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {/* B2B Box */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Unternehmen & Teams
                  </h3>
                  <ul className="text-muted-foreground space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Office Lunch & Team-Events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Meetings & Workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Firmenevents & Kundenempfänge</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={() => {
                      document.getElementById('ablauf-business')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    Mehr erfahren
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              {/* B2C Box */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <PartyPopper className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Private Feiern
                  </h3>
                  <ul className="text-muted-foreground space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Geburtstage & Jubiläen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Hochzeiten & Verlobungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Familienfeiern & Gartenpartys</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={() => {
                      document.getElementById('ablauf-privat')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    Mehr erfahren
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 3) Unser Catering-Konzept */}
        <section className="py-12 md:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Unser Catering-Konzept
              </h2>
              <div className="text-muted-foreground space-y-4 text-left md:text-center">
                <p>
                  Wir bringen die Vielfalt der arabischen Küche zu euren Events. Unsere Buffets sind 
                  flexibel zusammenstellbar und eignen sich für Gruppen ab 20 Personen – egal ob im 
                  Büro, in der Location oder bei euch zuhause.
                </p>
                <p>
                  Von klassischen Mezze-Platten über herzhafte Hauptgerichte bis zu süßen Desserts: 
                  Alles wird frisch am Tag zubereitet. Vegane und vegetarische Optionen sind bei uns 
                  Standard, nicht Ausnahme.
                </p>
                <p>
                  Ihr habt einen festen Ansprechpartner von der Anfrage bis zur Lieferung. So wisst 
                  ihr immer, woran ihr seid – und könnt euch auf das Wesentliche konzentrieren.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link to="/menus">
                    Buffet Menüs ansehen
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4a) Ablauf für Unternehmen */}
        <section className="py-12 md:py-20 scroll-mt-24" id="ablauf-business">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Für Unternehmen</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                So läuft ein Catering für Unternehmen ab
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Strukturiert, zuverlässig und ohne Überraschungen – damit ihr euch auf euer Event konzentrieren könnt.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessProcessSteps.map((step, index) => {
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
                    {index < businessProcessSteps.length - 1 && (
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

        {/* 4b) Ablauf für Private Feiern */}
        <section className="py-12 md:py-20 bg-gradient-subtle scroll-mt-24" id="ablauf-privat">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <PartyPopper className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Für Private Feiern</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                So läuft ein Catering für private Feiern ab
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Eure Feier, euer Genuss – wir kümmern uns ums Essen, damit ihr Zeit für eure Gäste habt.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {privateProcessSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="relative">
                    <Card className="h-full bg-background">
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
                    {index < privateProcessSteps.length - 1 && (
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

        {/* 5) Beispiele aus der Praxis */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Beispiele aus der Praxis
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Zwei typische Caterings, die zeigen, wie wir arbeiten.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {/* Business Example */}
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Unternehmen</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    140 Leute, 100% vegan – Veganuary im Office
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Als die Anfrage kam, haben wir kurz geschluckt: 140 Leute, komplett vegan, 
                    und das Buffet sollte auch die Skeptiker überzeugen. Wir haben getüftelt, 
                    probiert und am Ende ein Menü zusammengestellt, das richtig gut ankam – 
                    Couscous mit frischer Minze, gefüllte Weinblätter, und ja, auch die 
                    Fleisch-Fans haben nachgeschöpft.
                  </p>
                </CardContent>
              </Card>

              {/* Private Example */}
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <PartyPopper className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-accent">Private Feier</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Runder Geburtstag mit 90 Gästen
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Die Tochter rief an: „Mein Papa wird 60, wir brauchen jemanden, der das Essen 
                    macht – und zwar richtig gut." Gesagt, getan. Wir haben die Location dekoriert, 
                    das Buffet aufgebaut und uns dann unsichtbar gemacht. Die Familie hat gefeiert, 
                    wir haben hinterher alles wieder eingepackt. So soll das sein.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 6) Was unsere Buffets auszeichnet */}
        <section className="py-12 md:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Was unsere Buffets auszeichnet
                </h2>
              </div>

              <ul className="space-y-4">
                {buffetQualities.map((quality, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{quality}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-8">
                <Link 
                  to="/catering/galerie" 
                  className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                >
                  Bilder von unseren Caterings ansehen
                  <ChevronRight className="w-4 h-4" />
                </Link>
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

        {/* 7) Final CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Catering anfragen
              </h2>
              <p className="text-lg text-muted-foreground">
                Egal ob Firmenevent oder private Feier – schreibt uns und wir melden uns 
                innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="text-base px-6"
                  onClick={scrollToForm}
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  Catering für Unternehmen anfragen
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-6"
                  onClick={scrollToForm}
                >
                  <PartyPopper className="w-4 h-4 mr-2" />
                  Catering für private Feiern anfragen
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
