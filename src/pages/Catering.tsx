import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Utensils, Leaf, Sparkles, CheckCircle, Users, Clock, Heart, Phone, Mail, UtensilsCrossed, Salad, TreePine, Zap, Gift, ArrowUp, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import CateringContact from "@/components/CateringContact";
import CateringFOMO from "@/components/CateringFOMO";
import heroCatering from "@/assets/hero-catering.jpg";

const Catering = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // SEO Meta Tags
  useEffect(() => {
    document.title = "Catering Düsseldorf | Sattuni - Arabisches Event-Catering ab 27€";
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Professionelles Catering in Düsseldorf ✓ Arabische Küche für Events ✓ Ab 27€ pro Person ✓ Fingerfood & Buffets ✓ 20-500+ Personen ✓ Jetzt anfragen!'
    );

    // Add structured JSON-LD data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CateringBusiness",
      "name": "Sattuni Catering - Arabische Küche Düsseldorf",
      "description": "Professionelles Catering mit arabischer Küche für Events in Düsseldorf und Umgebung",
      "url": "https://sattuni.de/catering",
      "telephone": "+49-211-36180115",
      "email": "catering@sattuni.de",
      "address": {
        "@type": "PostalAddress", 
        "addressLocality": "Düsseldorf",
        "addressCountry": "DE"
      },
      "servesCuisine": "Arabisch, Orientalisch, Libanesisch",
      "priceRange": "27€-50€",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "51.2277",
          "longitude": "6.7735"
        },
        "geoRadius": "50000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catering Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Leichte Mahlzeit Catering",
              "description": "Fattoush, Hummus, Teigtaschen, Hähnchenbruststreifen"
            },
            "price": "27",
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "unitText": "Person",
              "minValue": "20"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Große Feiern Catering",
              "description": "Komplettes Buffet mit Vorspeisen, Hauptgerichten und Dessert"
            },
            "price": "37",
            "priceCurrency": "EUR",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "unitText": "Person",
              "minValue": "50"
            }
          }
        ]
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
  const cateringServices = [
    {
      icon: UtensilsCrossed,
      title: "Fingerfood",
      description: "Perfekt für Events & Empfänge – kleine Häppchen, große Wirkung.",
    },
    {
      icon: Utensils, 
      title: "Buffets",
      description: "Vielfalt für alle – vom kleinen Lunch bis zum großen Fest.",
    },
    {
      icon: Salad,
      title: "Veggie & Vegan", 
      description: "Pflanzliche Köstlichkeiten, die jeden überzeugen.",
    },
    {
      icon: Zap,
      title: "Individuelle Menüs",
      description: "Maßgeschneidert für deinen Anlass und dein Budget.",
    },
  ];

  const usps = [
    {
      icon: Heart,
      title: "Hausgemacht & frisch",
      description: "Alles selbst gemacht, täglich frisch zubereitet",
    },
    {
      icon: Leaf,
      title: "Vielfalt für alle",
      description: "Fleisch, vegetarisch & vegan – für jeden Geschmack",
    },
    {
      icon: Users,
      title: "Flexibel: 20–500 Personen",
      description: "Kleine Runden bis große Feste",
    },
    {
      icon: Sparkles,
      title: "Mit Eventkompetenz",
      description: "PurEvent macht dein Event unvergesslich",
    },
  ];

  const processSteps = [
    {
      icon: Phone,
      title: "Anfragen",
      description: "Erzähl uns von deinem Event",
    },
    {
      icon: Mail,
      title: "Angebot erhalten", 
      description: "Maßgeschneidertes Angebot in 24h",
    },
    {
      icon: Heart,
      title: "Genießen",
      description: "Entspannt feiern, wir kümmern uns ums Essen",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-muted/30 py-3 px-4 pt-20">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <button 
              onClick={() => window.location.href = '/'}
              className="hover:text-primary transition-colors"
            >
              Startseite
            </button>
            <span>/</span>
            <span className="text-foreground font-medium">Catering</span>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCatering} 
            alt="Sattuni Catering Setup" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Catering aus Düsseldorf – 
              <span className="block text-gradient bg-gradient-primary bg-clip-text text-transparent">
                frisch, orientalisch & für jeden Anlass
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Von Fingerfood bis Buffet, von Geburtstag bis Firmenfest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
                onClick={() => {
                  const element = document.getElementById('catering-kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Focus the first input after scrolling
                    setTimeout(() => {
                      const nameInput = document.getElementById('name');
                      nameInput?.focus();
                    }, 500);
                  }
                }}
              >
                Catering anfragen
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white/80 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary text-lg px-8 shadow-lg"
                onClick={() => window.location.href = '/spezialitaeten'}
              >
                Unsere Spezialitäten ansehen
              </Button>
            </div>
            
            {/* Christmas Promo */}
            <div className="mt-8 p-5 bg-gradient-to-r from-emerald-700/20 via-red-700/20 to-emerald-700/20 rounded-xl border border-white/20 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 text-white">
                <TreePine className="w-8 h-8 text-emerald-200" />
                <div className="text-center">
                  <div className="font-bold text-lg mb-1">Weihnachts-Special!</div>
                  <div className="text-sm opacity-95 leading-relaxed">
                    <span className="font-semibold">10% Rabatt auf Weihnachtsfeiern Catering</span> mit Code{' '}
                    <span className="font-bold bg-white/25 px-2 py-1 rounded-md text-emerald-100">
                      SATT25
                    </span>
                  </div>
                </div>
                <Gift className="w-8 h-8 text-red-200" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Navigation */}
      <section className="py-6 bg-muted/20 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <button 
              onClick={() => document.getElementById('catering-services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-3 py-1 bg-background border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => document.getElementById('beispielmenus')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-3 py-1 bg-background border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Beispielmenüs
            </button>
            <button 
              onClick={() => document.getElementById('prozess')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-3 py-1 bg-background border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              So geht's
            </button>
            <button 
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-3 py-1 bg-background border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => document.getElementById('catering-kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-3 py-1 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Anfragen
            </button>
          </div>
        </div>
      </section>

      {/* Kurz-Intro */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Hausgemacht, frisch, flexibel – wir bringen arabische Küche zu dir. 
              <span className="text-primary font-medium"> Für private Feiern & Firmen-Events.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Catering Services */}
      <section className="py-16" id="catering-services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unsere Catering-Angebote
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cateringServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 h-full">
                  <CardContent className="p-4 text-center space-y-3 flex flex-col h-full">
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto"
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
                      Anfragen
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* PurEvent Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mehr als Catering – unsere Agentur 
              <span className="text-primary">PurEvent</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Für Firmenkunden machen wir Catering & Eventorganisation easy. 
              Persönlich, flexibel, mit Konzept.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                "Stressfrei & organisiert",
                "Persönliche Betreuung", 
                "Kleine Teams bis große Feste",
                "Mehr als Catering: Drinks & Programm"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="mt-8">
              <a href="https://purevent.de" target="_blank" rel="noopener noreferrer">
                Mehr über PurEvent
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Sattuni USPs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Warum Sattuni?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <usp.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{usp.title}</h3>
                <p className="text-muted-foreground">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Menus */}
      <section className="py-20 bg-gradient-subtle" id="beispielmenus">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beispielmenüs
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Leichte Mahlzeit</h3>
                  <p className="text-3xl font-bold text-foreground">ab 27€ <span className="text-lg font-normal text-muted-foreground">pro Person</span></p>
                  <p className="text-muted-foreground">ab 20 Personen</p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Fattoush & Tabouleh Salate und andere Salate",
                    "Hummus & Baba Ghanousch Dips", 
                    "Fatayer Teigtaschen",
                    "Kibbeh Bällchen",
                    "Hähnchenbruststreifen",
                    "Orientalischer Couscous"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Große Feiern</h3>
                  <p className="text-3xl font-bold text-foreground">ab 37€ <span className="text-lg font-normal text-muted-foreground">pro Person</span></p>
                  <p className="text-muted-foreground">ab 50 Personen</p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Fattoush & Tabouleh Salate und andere Salate",
                    "Hummus & Baba Ghanousch",
                    "Fatayer & Sambousek", 
                    "Kibbeh & gefüllte Weinblätter",
                    "Bulgur & Reis Beilagen",
                    "Lamm, Hähnchen & Fisch",
                    "Gefüllte Zucchini",
                    "Baklava Dessert"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground italic">
              Preise sind Richtwerte. Wir passen jedes Menü an Budget & Wünsche an.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20" id="prozess">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              So einfach geht's
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-subtle" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Häufige Fragen zum Catering
              </h2>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="waermebehälter" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Werden Wärmebehälter mitgeliefert?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    <span className="font-semibold text-primary">Ja, kostenlos ab 30 Personen!</span>
                    {" "}Wir liefern professionelle Wärmebehälter mit, damit euer Essen auch nach 
                    Stunden noch perfekt temperiert ist.
                  </p>
                  <p>
                    <strong>Service inklusive:</strong> Nach dem Event holen wir die Wärmebehälter 
                    wieder ab – ihr müsst euch um nichts kümmern.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="geschirr-besteck" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Können wir über euch auch Geschirr und Besteck bestellen?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    <span className="font-semibold text-primary">Ja, wir kümmern uns darum!</span>
                    {" "}Hochwertiges Geschirr, Besteck, Gläser und Servietten – 
                    alles aus einer Hand für euer perfektes Event.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 mt-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Elegantes Porzellan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Hochwertiges Besteck</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Gläser & Getränke</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="aufbau-zeit" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Wie lange braucht ihr für den Aufbau?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    <span className="font-semibold text-primary">Wir kommen eine Stunde vor Eventbeginn</span>
                    {" "}und bauen in Ruhe alles auf. So könnt ihr entspannt eure Gäste empfangen.
                  </p>
                  <p>
                    <strong>Ablauf:</strong> Buffet-Aufbau, Wärmebehälter installieren, 
                    finale Dekoration – pünktlich zum Start ist alles perfekt vorbereitet.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="personenanzahl-flexibel" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Wie flexibel seid ihr bei der Personenanzahl?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    <span className="font-semibold text-primary">Bis eine Woche vor dem Liefertag</span>
                    {" "}könnt ihr die Personenanzahl noch anpassen. Perfekt für Events mit 
                    ungewisser Teilnehmerzahl.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="mindestbestellwert" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Gibt es einen Mindestbestellwert?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    <span className="font-semibold text-primary">Ab 20 Personen</span> bieten wir 
                    unser Catering-Service an. So können wir die beste Qualität und 
                    Service-Level garantieren.
                  </p>
                  <p>
                    <strong>Tipp:</strong> Für kleinere Gruppen empfehlen wir unseren 
                    regulären Lieferservice über unser Online-Menü.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="vegane-optionen" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Habt ihr auch vegane und vegetarische Optionen?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    <span className="font-semibold text-primary">Selbstverständlich!</span> 
                    Unsere arabische Küche bietet natürlicherweise viele pflanzliche Gerichte.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 mt-4">
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Hummus & Baba Ghanousch</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Falafel & vegane Teigtaschen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Tabouleh & Fattoush Salate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">Vegane Couscous Bowls</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="liefergebiet" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Wie weit liefert ihr für Catering?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    <span className="font-semibold text-primary">Düsseldorf und Umgebung</span>
                    {" "}– bis zu 50km Radius von unserem Standort aus. Perfekt für 
                    Firmenfeiern in der Region.
                  </p>
                  <p>
                    <strong>Kostenlos:</strong> Innerhalb Düsseldorf ist die Anlieferung 
                    bereits im Preis enthalten.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="anlass-wichtig" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Warum ist es wichtig zu wissen, welchen Anlass das Buffet hat?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    <span className="font-semibold text-primary">Weil wir das Essen passend zum Anlass dekorieren und portionieren.</span>
                    {" "}Für eine Hochzeit wird das Buffet anders präsentiert als für ein Team-Event.
                  </p>
                  <p>
                    <strong>Beispiel:</strong> Bei einer Hochzeit dekorieren wir eleganter mit besonderen Tellern, 
                    während ein Business-Event eher funktional und praktisch aufgebaut wird.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="catering-vs-lieferservice" 
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  Ist euer Catering-Angebot anders als die normale Speisekarte?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  <p className="mb-3">
                    <span className="font-semibold text-primary">Ja, unser Catering ist vielfältiger!</span>
                    {" "}Beim Catering bieten wir das Essen in Buffet-Form und saisonabhängig an.
                  </p>
                  <p>
                    <strong>Catering-Vorteile:</strong> Größere Auswahl, spezielle Buffet-Gerichte, 
                    saisonale Spezialitäten und auf Gruppengrößen angepasste Portionen.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Catering Contact Form */}
      <CateringContact />
      
      {/* Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <Testimonials />
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ob Geburtstag, Hochzeit oder Firmenfeier – 
              <span className="text-primary block">wir machen euch satt.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => {
                  const element = document.getElementById('catering-kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Focus the first input after scrolling
                    setTimeout(() => {
                      const nameInput = document.getElementById('name');
                      nameInput?.focus();
                    }, 500);
                  }
                }}
              >
                Catering anfragen
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => window.location.href = '/spezialitaeten'}
              >
                Unsere Spezialitäten ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Nach oben scrollen"
        >
          <ArrowUp className="w-5 h-5 mx-auto" />
        </button>
      )}
      
      <CateringFOMO />
    </div>
  );
};

export default Catering;