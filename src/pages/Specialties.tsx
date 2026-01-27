import bowlsHauptgerichte2 from "@/assets/bowls/bowls-hauptgerichte-2.jpg";
import bowlsHauptgerichte3 from "@/assets/bowls/bowls-hauptgerichte-3.jpg";
import bowlsHauptgerichte4 from "@/assets/bowls/bowls-hauptgerichte-4.jpg";
import bowlsHauptgerichte from "@/assets/bowls/bowls-hauptgerichte.jpg";
import dipsVorspeisen2 from "@/assets/dips/dips-vorspeisen-2.jpg";
import dipsVorspeisen3 from "@/assets/dips/dips-vorspeisen-3.jpg";
import dipsVorspeisen4 from "@/assets/dips/dips-vorspeisen-4.jpg";
import dipsVorspeisen from "@/assets/dips/dips-vorspeisen.jpg";
import falafelTeigtaschen2 from "@/assets/falafel/falafel-teigtaschen-2.jpg";
import falafelTeigtaschen3 from "@/assets/falafel/falafel-teigtaschen-3.jpg";
import falafelTeigtaschen4 from "@/assets/falafel/falafel-teigtaschen-4.jpg";
import falafelTeigtaschen from "@/assets/falafel/falafel-teigtaschen.jpg";
import heroSpecialties from "@/assets/hero/hero-specialties.jpg";
import ModeHeader from "@/components/layout/ModeHeader";

import { useSiteMode } from "@/contexts/SiteModeContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useAnalytics } from "@/contexts";
import { useMenuTracking } from "@/hooks/useMenuTracking";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { ArrowUp, Calendar, Leaf, Truck, Utensils } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SEOHead from "@/components/seo/SEOHead";

const Specialties = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { trackOrderButton, trackCateringInquiry, trackImageInteraction, trackBusinessAction } = useAnalytics();
  const { addEngagementFactor } = useScrollTracking();
  const { trackItemView, trackItemClick } = useMenuTracking();
  const { setMode } = useSiteMode();

  // Set restaurant mode on page load
  useEffect(() => {
    setMode('restaurant');
  }, [setMode]);

  // SEO Structured Data only (SEOHead handles meta tags)
  useEffect(() => {

    // Add comprehensive structured data for specialties page
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://sattuni.de/spezialitaeten#webpage",
          "url": "https://sattuni.de/spezialitaeten",
          "name": "Arabische Spezialitäten - Sattuni",
          "description": "Entdecke authentische arabische Spezialitäten: Hummus, Falafel, Couscous Bowls und mehr. Hausgemacht und frisch in Düsseldorf.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Startseite",
                "item": "https://sattuni.de"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Spezialitäten",
                "item": "https://sattuni.de/spezialitaeten"
              }
            ]
          },
          "mainEntity": {
            "@type": "ItemList",
            "name": "Arabische Spezialitäten",
            "description": "Authentische arabische Gerichte aus Düsseldorf",
            "itemListElement": [
              {
                "@type": "Recipe",
                "position": 1,
                "name": "Hummus",
                "description": "Cremiger Kichererbsendip mit Tahini, Olivenöl und Gewürzen",
                "image": "https://sattuni.de/dips/dips-vorspeisen.jpg",
                "cuisine": "Arabisch",
                "keywords": "hummus, kichererbsen, tahini, vegan, glutenfrei",
                "nutrition": {
                  "@type": "NutritionInformation",
                  "calories": "150",
                  "proteinContent": "6g",
                  "fiberContent": "5g"
                }
              },
              {
                "@type": "Recipe",
                "position": 2,
                "name": "Falafel",
                "description": "Knusprige Kichererbsenbällchen, hausgemacht und traditionell gewürzt",
                "image": "https://sattuni.de/falafel/falafel-teigtaschen.jpg",
                "cuisine": "Arabisch",
                "keywords": "falafel, kichererbsen, vegan, protein, hausgemacht"
              },
              {
                "@type": "Recipe",
                "position": 3,
                "name": "Couscous Bowl",
                "description": "Sättigende Bowl mit Couscous, gegrilltem Gemüse und frischen Kräutern",
                "image": "https://sattuni.de/bowls/bowls-hauptgerichte.jpg",
                "cuisine": "Arabisch",
                "keywords": "couscous, bowl, gemüse, vegetarisch, vollwertig"
              }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Was sind arabische Spezialitäten?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Arabische Spezialitäten umfassen traditionelle Gerichte wie Hummus, Falafel, Tabouleh und Couscous. Diese Gerichte zeichnen sich durch frische Zutaten, mediterrane Gewürze und jahrhundertealte Zubereitungsarten aus."
              }
            },
            {
              "@type": "Question",
              "name": "Sind arabische Gerichte vegan und vegetarisch?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, viele arabische Spezialitäten sind natürlicherweise vegan oder vegetarisch. Hummus, Falafel, Tabouleh und viele Dips basieren auf pflanzlichen Zutaten wie Kichererbsen, Gemüse und Kräutern."
              }
            },
            {
              "@type": "Question",
              "name": "Liefert Sattuni arabische Spezialitäten in Düsseldorf?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, Sattuni liefert frische arabische Spezialitäten in ganz Düsseldorf. Alle Gerichte werden täglich hausgemacht und können bequem online bestellt werden."
              }
            }
          ]
        },
        {
          "@type": "Restaurant",
          "@id": "https://sattuni.de/#restaurant",
          "name": "Sattuni",
          "servesCuisine": "Arabische Küche",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Düsseldorf",
            "addressCountry": "DE"
          }
        }
      ]
    };

    // Create and append structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-specialties', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://sattuni.de/spezialitaeten');

    // Scroll to top functionality
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Cleanup structured data
      const scriptToRemove = document.querySelector('script[data-specialties]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
      // Reset title on unmount
      document.title = "Sattuni - Oriental Bowls & More";
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const dipsImages = [dipsVorspeisen, dipsVorspeisen2, dipsVorspeisen3, dipsVorspeisen4];
  const falafelImages = [falafelTeigtaschen, falafelTeigtaschen2, falafelTeigtaschen3, falafelTeigtaschen4];
  const bowlsImages = [bowlsHauptgerichte, bowlsHauptgerichte2, bowlsHauptgerichte3, bowlsHauptgerichte4];

  return (
    <>
      <SEOHead
        title="Spezialitäten – Hummus, Falafel & Bowls | Sattuni Düsseldorf"
        description="Arabische Spezialitäten in Düsseldorf: Hummus, Falafel, Bowls. Hausgemacht & frisch. Jetzt bestellen oder Catering anfragen!"
        keywords="arabische spezialitäten düsseldorf, hummus düsseldorf, falafel düsseldorf, orientalische küche, vegan düsseldorf, couscous bowl"
        canonicalUrl="https://sattuni.de/restaurant/spezialitaeten"
        ogTitle="Arabische Spezialitäten in Düsseldorf - Sattuni"
        ogDescription="Authentische arabische Küche: Hummus, Falafel, Couscous Bowls und mehr. Hausgemacht und frisch in Düsseldorf."
        ogImage="https://sattuni.de/hero/hero-specialties.jpg"
      />
      
      <ModeHeader />
      <main className="min-h-screen pt-16 pb-safe-mobile">
        {/* Hero Section - Optimized Height */}
        <section 
          className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSpecialties})` }}
          onLoad={() => {
            trackImageInteraction('hero-specialties', 'view', 'specialties-hero-section');
            addEngagementFactor('hero_image_view');
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Arabische Spezialitäten – frisch aus Düsseldorf
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 font-body font-light drop-shadow-md">
              Hausgemacht, ehrlich, einfach lecker
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto drop-shadow-md">
              Hummus, Falafel, Bowls – alles an dem Tag gemacht. Probier's aus.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="hero" 
                className="font-display"
                onClick={() => {
                  trackOrderButton('hero-section');
                  window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
                }}
              >
                Bestellen
              </Button>
              <Button 
                size="xl" 
                variant="hero-secondary" 
                className="font-display"
                onClick={() => {
                  trackCateringInquiry('hero-section');
                  window.location.href = '/catering';
                }}
              >
                Fürs Event anfragen
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Text */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-body">
                Von Dips über Falafel bis zu ganzen Bowls – hier findest du alles. 
                <a href="/speisekarte" className="text-primary hover:underline font-medium ml-1">Die komplette Karte gibt's hier</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Category 1: Dips & Vorspeisen */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Dips & Vorspeisen
                </h3>
                <div className="text-lg text-muted-foreground font-body">
                  <p>
                    Unser Hummus ist cremig und mild – so wie er sein soll. Dazu Baba Ghanoush, 
                    das leicht rauchig schmeckt, und frischer Tabouleh. Alles an dem Tag gemacht.
                  </p>
                </div>
                <Button 
                  className="mt-8 font-display" 
                  size="lg"
                  onClick={() => {
                    trackOrderButton('dips-section');
                    window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
                  }}
                >
                  Will ich
                </Button>
              </div>
              <div className="order-first md:order-last">
                <Carousel className="w-full max-w-md mx-auto">
                  <CarouselContent className="-ml-1">
                    {dipsImages.map((image, index) => (
                      <CarouselItem key={index} className="pl-1">
                        <div className="p-1">
                          <img 
                            src={image} 
                            alt={`Arabische Dips und Vorspeisen ${index + 1}`}
                            className="rounded-lg shadow-soft w-full h-80 object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Category 2: Falafel & Teigtaschen */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Carousel className="w-full max-w-md mx-auto">
                  <CarouselContent className="-ml-1">
                    {falafelImages.map((image, index) => (
                      <CarouselItem key={index} className="pl-1">
                        <div className="p-1">
                          <img 
                            src={image} 
                            alt={`Knusprige Falafel und Teigtaschen ${index + 1}`}
                            className="rounded-lg shadow-soft w-full h-80 object-cover"
                            loading="lazy"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Falafel & Teigtaschen
                </h3>
                <div className="text-lg text-muted-foreground font-body">
                  <p>
                    Die Falafel sind außen knusprig, innen saftig. Wie das sein soll. 
                    Dazu gibt's hausgemachte Teigtaschen – mit verschiedenen Füllungen, je nachdem worauf ihr Lust habt.
                  </p>
                </div>
                <Button 
                  className="mt-8 font-display" 
                  size="lg"
                  onClick={() => {
                    trackOrderButton('falafel-section');
                    window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
                  }}
                >
                  Probieren
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category 3: Bowls & Hauptgerichte */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Bowls & Hauptgerichte
                </h3>
                <div className="text-lg text-muted-foreground font-body">
                  <p>
                    Couscous, gegrilltes Gemüse, frische Kräuter – in einer Schüssel. 
                    Macht richtig satt und schmeckt einfach gut. Perfekt wenn ihr was Ordentliches braucht.
                  </p>
                </div>
                <Button 
                  className="mt-8 font-display" 
                  size="lg"
                  onClick={() => {
                    trackCateringInquiry('bowls-section');
                    window.location.href = '/catering';
                  }}
                >
                  Fürs Event anfragen
                </Button>
              </div>
              <div className="order-first md:order-last">
                <Carousel className="w-full max-w-md mx-auto">
                  <CarouselContent className="-ml-1">
                    {bowlsImages.map((image, index) => (
                      <CarouselItem key={index} className="pl-1">
                        <div className="p-1">
                          <img 
                            src={image} 
                            alt={`Couscous Bowls und Hauptgerichte ${index + 1}`}
                            className="rounded-lg shadow-soft w-full h-80 object-cover"
                            loading="lazy"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Special Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-16">
              Was wir anders machen
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 text-center hover:shadow-soft transition-shadow">
                <Utensils className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  Täglich frisch
                </h4>
                <p className="text-muted-foreground font-body">
                  Alles an dem Tag gemacht. Keine Fertigsachen, keine Tricks.
                </p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-soft transition-shadow">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  Für alle was dabei
                </h4>
                <p className="text-muted-foreground font-body">
                  Vegan, vegetarisch, mit Fleisch – jeder findet was.
                </p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-soft transition-shadow">
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  Liefern oder abholen
                </h4>
                <p className="text-muted-foreground font-body">
                  Schnell zu dir – oder <a href="/catering" className="text-primary hover:underline font-medium">größer fürs Event</a>.
                </p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-soft transition-shadow">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  Für jeden Anlass
                </h4>
                <p className="text-muted-foreground font-body">
                  Schneller Lunch oder große Feier – beides geht.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Hunger?
            </h3>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto font-body">
              Dann bestell was. Oder fragt an, wenn's fürs Team oder eine Feier sein soll.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="hero" 
                className="font-display"
                onClick={() => {
                  trackOrderButton('conclusion-section');
                  window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
                }}
              >
                Zum Online-Shop
              </Button>
              <Button 
                size="xl" 
                variant="hero-secondary" 
                className="font-display"
                onClick={() => {
                  trackCateringInquiry('conclusion-section');
                  window.location.href = '/catering';
                }}
              >
                Catering anfragen
              </Button>
            </div>
          </div>
        </section>
      </main>
      
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
    </>
  );
};

export default Specialties;