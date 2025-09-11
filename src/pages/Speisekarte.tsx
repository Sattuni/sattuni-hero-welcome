import { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Breadcrumb from "@/components/layout/Breadcrumb";
import InternalLinks from "@/components/layout/InternalLinks";
import FOMOElements from "@/components/features/marketing/FOMOElements";
import SmartCTA from "@/components/mobile/SmartCTA";
import { ArrowUp, UtensilsCrossed, Utensils, Salad, Coffee, Wheat, Sandwich, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import heroImage from "@/assets/hero-food.jpg";

const Speisekarte = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Speisekarte - Sattuni: Orientalische Küche Düsseldorf";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Entdecke unsere orientalische Speisekarte: Hummus, Falafel, Bowls, Salate & mehr. ✓ Frisch ✓ Hausgemacht ✓ Halal ✓ Vegan/Vegetarisch ✓ Preise ab 4,50€');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Speisekarte, Menu, Hummus, Falafel, Orientalische Küche, Arabisch, Bowls, Salate, Preise, Düsseldorf, Halal, Vegan, Vegetarisch');
    }

    // Open Graph Meta Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Speisekarte - Sattuni: Orientalische Küche Düsseldorf');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Entdecke unsere orientalische Speisekarte: Hummus, Falafel, Bowls, Salate & mehr. Frisch, hausgemacht und mit Liebe zubereitet.');
    }

    // Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://sattuni.de/speisekarte",
          "url": "https://sattuni.de/speisekarte",
          "name": "Speisekarte - Sattuni",
          "description": "Entdecke unsere orientalische Speisekarte: Hummus, Falafel, Bowls, Salate & mehr. Frisch, hausgemacht und mit Liebe zubereitet.",
          "inLanguage": "de-DE",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://sattuni.de/",
            "url": "https://sattuni.de/",
            "name": "Sattuni"
          }
        },
        {
          "@type": "Restaurant",
          "@id": "https://sattuni.de/#restaurant",
          "name": "Sattuni",
          "description": "Orientalische Küche in Düsseldorf",
          "url": "https://sattuni.de/",
          "telephone": "+49-211-123456",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Düsseldorf",
            "addressCountry": "DE"
          },
          "servesCuisine": ["Middle Eastern", "Arabic", "Mediterranean"],
          "hasMenu": {
            "@type": "Menu",
            "name": "Sattuni Speisekarte",
            "description": "Orientalische Küche - Hummus, Falafel, Bowls und mehr",
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": "Hummus & Falafel Kreationen",
                "description": "Hausgemachte Hummus-Variationen und frische Falafel"
              },
              {
                "@type": "MenuSection",
                "name": "Salate",
                "description": "Frische orientalische Salate"
              },
              {
                "@type": "MenuSection",
                "name": "Bowls",
                "description": "Nahrhafte Bowl-Kreationen"
              },
              {
                "@type": "MenuSection",
                "name": "Reisgerichte",
                "description": "Herzhafte Reisgerichte mit verschiedenen Proteinen"
              }
            ]
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://sattuni.de/speisekarte');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }

    // Scroll to top functionality
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.head.removeChild(script);
      window.removeEventListener('scroll', handleScroll);
      document.title = "Sattuni - Orientalische Küche Düsseldorf";
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allergenLegend = [
    { number: "1)", description: "Glutenhaltige/s Getreide/-Erzeugnisse (Weizen)", icon: "🌾" },
    { number: "2)", description: "Sesamsamen/-Erzeugnisse", icon: "🌰" },
    { number: "3)", description: "Knoblauch", icon: "🧄" },
    { number: "4)", description: "Fisch/-Erzeugnisse", icon: "🐟" },
    { number: "5)", description: "Milch/-Erzeugnisse (laktosehaltig)", icon: "🥛" }
  ];

  const menuCategories = [
    {
      title: "Hummus & Falafel Kreationen",
      icon: Utensils,
      description: "Hausgemachte Hummus-Variationen und frische Falafel",
      items: [
        { name: "Hummus Veggie Plate", price: "9,00", allergens: "1), 2), 3)" },
        { name: "Hummus Jerusalem Plate", price: "9,00", allergens: "1), 2), 3)" },
        { name: "Hummus Marrakesch Plate", price: "9,00", allergens: "1), 2), 3)" },
        { name: "Hummus Petra Plate", price: "9,90", allergens: "1), 2), 3)" },
        { name: "Hummus Pyramiden Plate", price: "9,50", allergens: "1), 2), 3)" },
        { name: "Hummus Classic Plate", price: "8,00", allergens: "1), 2), 3)" },
        { name: "Vorspeise-Platte für 2 Personen", price: "30,00", allergens: "1), 2), 3)", description: "Hummus, Falafel, Baba Ghanoush, Tabouleh, Fattoush" },
        { name: "Baba Ghanoush", price: "8,50", allergens: "1), 2), 3)" },
        { name: "Falafel (10 Stück)", price: "7,00", allergens: "1), 2), 3)" },
        { name: "Teigtaschen (3 Stück)", price: "4,50", allergens: "1)" },
        { name: "Kibbeh (3 Stück)", price: "5,10", allergens: "1)" }
      ]
    },
    {
      title: "Salate",
      icon: Salad,
      description: "Frische orientalische Salate mit authentischen Zutaten",
      items: [
        { name: "Tabouleh", price: "7,50", allergens: "1)" },
        { name: "Fattoush", price: "7,50", allergens: "1), 2)" },
        { name: "Romana-Salat", price: "7,50", allergens: "–" },
        { name: "Kichererbsensalat", price: "7,50", allergens: "1), 2)" }
      ]
    },
    {
      title: "Bowls",
      icon: Coffee,
      description: "Nahrhafte Bowl-Kreationen mit verschiedenen Proteinen",
      notice: "Alle Bowls enthalten: 1), 2), 3)",
      items: [
        { name: "Beirut Bowl + Falafel", price: "13,00", allergens: "1), 2), 3)" },
        { name: "Aleppo Bowl + Hähnchen", price: "14,00", allergens: "1), 2), 3), 5)" },
        { name: "Haifa Bowl + Lachs", price: "16,00", allergens: "1), 2), 3), 4), 5)" }
      ]
    },
    {
      title: "Reisgerichte",
      icon: Wheat,
      description: "Herzhafte Reisgerichte mit orientalischen Gewürzen",
      notice: "Alle Reisgerichte enthalten: 1), 3), 5)",
      items: [
        { name: "Damascus Plate + Gemüse", price: "13,00", allergens: "1), 3), 5)" },
        { name: "Kairo Plate + Hähnchen", price: "14,00", allergens: "1), 3), 5)" },
        { name: "Mdina Plate + Rind", price: "14,50", allergens: "1), 3), 5)" },
        { name: "Bethlehem Plate + Kebab", price: "14,50", allergens: "1), 3), 5)" },
        { name: "Tunis Plate + Lachs", price: "16,00", allergens: "1), 3), 4), 5)" }
      ]
    },
    {
      title: "Pita",
      icon: Sandwich,
      description: "Frisch gebackene Pita-Brote mit verschiedenen Füllungen",
      items: [
        { name: "Veggie-Paradies-Pita", price: "6,70", allergens: "1), 2), 3)" },
        { name: "Falafel Pita", price: "7,00", allergens: "1), 2), 3)" },
        { name: "Chicken Pita", price: "9,00", allergens: "1), 2), 3)" },
        { name: "Kebab Pita", price: "9,00", allergens: "1), 2), 3)" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Speisekarte - Sattuni: Orientalische Küche Düsseldorf</title>
        <meta name="description" content="Entdecke unsere orientalische Speisekarte: Hummus, Falafel, Bowls, Salate & mehr. ✓ Frisch ✓ Hausgemacht ✓ Halal ✓ Vegan/Vegetarisch ✓ Preise ab 4,50€" />
        <link rel="canonical" href="https://sattuni.de/speisekarte" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <Header />
        
        <main className="pt-20" role="main">
          <Breadcrumb items={[
            { name: "Home", href: "/" },
            { name: "Speisekarte", href: "/speisekarte", current: true }
          ]} />
          
          {/* Hero Section */}
          <section 
            className="relative py-20 px-4 text-center overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            <div className="container mx-auto max-w-4xl relative z-10">
              <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-8 shadow-ornate">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <UtensilsCrossed className="w-8 h-8 text-primary" />
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground font-display">
                    Unsere Speisekarte
                  </h1>
                </div>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                  Frisch, hausgemacht, orientalisch – entdecke unsere Gerichte.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <SmartCTA 
                    size="lg" 
                    className="shadow-warm font-medium"
                  >
                    Jetzt bestellen
                  </SmartCTA>
                </div>
              </div>
            </div>
          </section>

          {/* Menu Categories */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                  Alle Gerichte im Überblick
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  Von traditionellen Hummus-Kreationen bis hin zu modernen Bowls
                </p>
              </div>

              <div className="space-y-8">
                {menuCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <Card key={index} className="overflow-hidden shadow-soft hover:shadow-warm transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground font-display">
                            {category.title}
                          </h3>
                          <p className="text-muted-foreground font-body">
                            {category.description}
                          </p>
                          {category.notice && (
                            <p className="text-sm text-primary font-medium mt-1">
                              {category.notice}
                            </p>
                          )}
                        </div>
                        </div>
                        
                        <div className="grid gap-3">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="py-3 border-b border-border/50 last:border-b-0">
                              <div className="flex justify-between items-start mb-1">
                                <div className="flex-1 flex items-center gap-2">
                                  <span className="font-medium text-foreground font-body">
                                    {item.name}
                                  </span>
                                  {item.allergens !== "–" && (
                                    <TooltipProvider>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <Info className="w-4 h-4 text-primary/70 hover:text-primary cursor-help" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p className="text-sm">Allergene: {item.allergens}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  )}
                                  {item.description && (
                                    <span className="text-xs text-muted-foreground italic block">
                                      {item.description}
                                    </span>
                                  )}
                                </div>
                                <Badge variant="secondary" className="font-bold ml-3">
                                  {item.price} €
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Special Notice */}
          <section className="py-12 px-4 bg-primary/5">
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                    🌱 Für jeden Geschmack
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    Viele Gerichte sind vegan oder vegetarisch. Fleisch ist halal – gerne bei der Bestellung erwähnen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-display">
                Jetzt bestellen oder Catering anfragen
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-body">
                Lust auf unsere orientalischen Köstlichkeiten bekommen?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SmartCTA 
                  size="lg" 
                  className="shadow-warm font-medium"
                >
                  Bestellen
                </SmartCTA>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => window.location.href = '/catering'}
                  className="font-medium border-primary/30 hover:bg-primary/10"
                >
                  Catering
                </Button>
              </div>
            </div>
          </section>
          {/* Allergen Legend */}
          <section className="py-8 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/10">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-foreground mb-4 font-display text-center">
                    🏷️ Allergene & Kennzeichen
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                    {allergenLegend.map((allergen, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded bg-background/50">
                        <span className="text-lg">{allergen.icon}</span>
                        <span className="font-medium text-primary text-xs">{allergen.number}</span>
                        <span className="text-xs text-muted-foreground">
                          {allergen.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-24 md:bottom-8 right-4 z-40 bg-primary text-primary-foreground rounded-full p-3 shadow-ornate hover:bg-accent transition-all duration-300 hover:scale-110"
            aria-label="Nach oben scrollen"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <InternalLinks />
        <FOMOElements />
      </div>
    </>
  );
};

export default Speisekarte;