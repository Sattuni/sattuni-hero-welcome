import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import FOMOElements from "@/components/features/marketing/FOMOElements";
import Breadcrumb from "@/components/layout/Breadcrumb";
import InternalLinks from "@/components/layout/InternalLinks";
import { Utensils, Leaf, Truck, Calendar, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import heroSpecialties from "@/assets/hero-specialties.jpg";
import dipsVorspeisen from "@/assets/dips-vorspeisen.jpg";
import dipsVorspeisen2 from "@/assets/dips-vorspeisen-2.jpg";
import dipsVorspeisen3 from "@/assets/dips-vorspeisen-3.jpg";
import dipsVorspeisen4 from "@/assets/dips-vorspeisen-4.jpg";
import falafelTeigtaschen from "@/assets/falafel-teigtaschen.jpg";
import falafelTeigtaschen2 from "@/assets/falafel-teigtaschen-2.jpg";
import falafelTeigtaschen3 from "@/assets/falafel-teigtaschen-3.jpg";
import falafelTeigtaschen4 from "@/assets/falafel-teigtaschen-4.jpg";
import bowlsHauptgerichte from "@/assets/bowls-hauptgerichte.jpg";
import bowlsHauptgerichte2 from "@/assets/bowls-hauptgerichte-2.jpg";
import bowlsHauptgerichte3 from "@/assets/bowls-hauptgerichte-3.jpg";
import bowlsHauptgerichte4 from "@/assets/bowls-hauptgerichte-4.jpg";

const Specialties = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // SEO Meta Tags and Structured Data
  useEffect(() => {
    document.title = "Arabische Spezialitäten Düsseldorf | Sattuni - Hummus, Falafel & mehr";
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Entdecke authentische arabische Küche in Düsseldorf ✓ Hausgemachte Dips ✓ Knusprige Falafel ✓ Frische Bowls ✓ Catering verfügbar - Jetzt bestellen!'
    );

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
                "image": "https://sattuni.de/dips-vorspeisen.jpg",
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
                "image": "https://sattuni.de/falafel-teigtaschen.jpg",
                "cuisine": "Arabisch",
                "keywords": "falafel, kichererbsen, vegan, protein, hausgemacht"
              },
              {
                "@type": "Recipe",
                "position": 3,
                "name": "Couscous Bowl",
                "description": "Sättigende Bowl mit Couscous, gegrilltem Gemüse und frischen Kräutern",
                "image": "https://sattuni.de/bowls-hauptgerichte.jpg",
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
      <Helmet>
        <title>Arabische Spezialitäten Düsseldorf | Sattuni - Hummus, Falafel & mehr</title>
        <meta name="description" content="Entdecke authentische arabische Küche in Düsseldorf ✓ Hausgemachte Dips ✓ Knusprige Falafel ✓ Frische Bowls ✓ Catering verfügbar - Jetzt bestellen!" />
        <meta name="keywords" content="arabische spezialitäten düsseldorf, hummus düsseldorf, falafel düsseldorf, orientalische küche, vegan düsseldorf, couscous bowl" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Arabische Spezialitäten in Düsseldorf - Sattuni" />
        <meta property="og:description" content="Authentische arabische Küche: Hummus, Falafel, Couscous Bowls und mehr. Hausgemacht und frisch in Düsseldorf." />
        <meta property="og:url" content="https://sattuni.de/spezialitaeten" />
        <meta property="og:image" content="https://sattuni.de/hero-specialties.jpg" />
        <link rel="canonical" href="https://sattuni.de/spezialitaeten" />
      </Helmet>
      
      <Header />
      <main className="min-h-screen pt-16 pb-safe-mobile">
        {/* Breadcrumb Navigation */}
        <Breadcrumb 
          items={[
            { name: "Startseite", href: "/" },
            { name: "Spezialitäten", href: "/spezialitaeten", current: true }
          ]}
        />
        {/* Hero Section - Optimized Height */}
        <section 
          className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSpecialties})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 drop-shadow-lg">
              Worauf hast du Lust?
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 font-body font-light drop-shadow-md">
              Authentische arabische Küche – frisch & hausgemacht
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto drop-shadow-md">
              Von cremigem Hummus bis knuspriger Falafel – gönn dir was Gutes!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="hero" 
                className="font-display"
                onClick={() => window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank')}
              >
                Bestell dir was Leckeres
              </Button>
              <Button 
                size="xl" 
                variant="hero-secondary" 
                className="font-display"
                onClick={() => window.location.href = '/catering'}
              >
                Für dein Event anfragen
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Text */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                Schmeck die Welt der Aromen!
              </h2>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4 font-body">
                <p>
                  Arabische Küche ist wie eine Umarmung für den Gaumen. Jeder Bissen erzählt eine Geschichte 
                  von Sonne, Gewürzen und Gastfreundschaft – täglich frisch für dich gemacht.
                </p>
                <p className="text-primary font-semibold">
                  Ob cremiger Hummus, knusprige Falafel oder bunte Bowls – 
                  hier findest du, worauf du Lust hast. Vegan, vegetarisch oder mit Fleisch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category 1: Dips & Vorspeisen */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Dips & Vorspeisen zum Verlieben
                </h3>
                <div className="text-lg text-muted-foreground font-body">
                  <p>
                    Stell dir vor: Cremiger Hummus, der auf der Zunge zergeht. Rauchiges Baba Ghanousch 
                    mit warmen Pita-Brot. Und frischer Tabouleh, der nach Sommer schmeckt. 
                    Alles hausgemacht – jeden Tag neu.
                  </p>
                </div>
                <Button 
                  className="mt-8 font-display" 
                  size="lg"
                  onClick={() => window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank')}
                >
                  Hab ich Lust drauf!
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
                  Knusprige Falafel – außen crunchy, innen wow!
                </h3>
                <div className="text-lg text-muted-foreground font-body">
                  <p>
                    Goldbraun und knusprig, dabei innen so saftig – unsere Falafel sind echte 
                    Geschmacksbomben. Dazu gibt's hausgemachte Teigtaschen mit Füllungen, 
                    die dich überraschen werden.
                  </p>
                </div>
                <Button 
                  className="mt-8 font-display" 
                  size="lg"
                  onClick={() => window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank')}
                >
                  Das will ich probieren!
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
                  Bowls, die richtig satt & glücklich machen
                </h3>
                <div className="text-lg text-muted-foreground font-body">
                  <p>
                    Fluffiger Couscous trifft gegrilltes Gemüse und frische Kräuter – 
                    das ist Comfort Food auf arabisch! Perfekt für den großen Hunger 
                    oder wenn du einfach was Gutes brauchst.
                  </p>
                </div>
                <Button 
                  className="mt-8 font-display" 
                  size="lg"
                  onClick={() => window.location.href = '/catering'}
                >
                  Für dein Catering anfragen
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
              Was unsere Küche besonders macht
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 text-center hover:shadow-soft transition-shadow">
                <Utensils className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  Hausgemacht
                </h4>
                <p className="text-muted-foreground font-body">
                  Jeden Tag frisch zubereitet mit traditionellen Rezepten und viel Liebe zum Detail.
                </p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-soft transition-shadow">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  Für jeden Geschmack
                </h4>
                <p className="text-muted-foreground font-body">
                  Vielfältige Auswahl: vegan, vegetarisch und mit Fleisch – jeder findet sein Lieblingsgericht.
                </p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-soft transition-shadow">
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  Lieferung & Catering
                </h4>
                <p className="text-muted-foreground font-body">
                  Schnelle Lieferung für den Alltag oder Catering für besondere Anlässe in Düsseldorf.
                </p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-soft transition-shadow">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  Für jeden Anlass
                </h4>
                <p className="text-muted-foreground font-body">
                  Vom schnellen Mittagessen bis zur großen Feier – wir haben das passende Angebot.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Bereit für deine arabische Geschmacksreise?
            </h3>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto font-body">
              Egal ob kleiner Hunger oder große Feier – Sattuni bringt dir authentische 
              arabische Küche direkt nach Düsseldorf.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="hero" 
                className="font-display"
                onClick={() => window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank')}
              >
                Jetzt bestellen
              </Button>
              <Button 
                size="xl" 
                variant="hero-secondary" 
                className="font-display"
                onClick={() => window.location.href = '/catering'}
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
      
      {/* Internal Links Section */}
      <InternalLinks />
      
      <FOMOElements />
    </>
  );
};

export default Specialties;