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
import { ArrowUp, UtensilsCrossed, Utensils, Salad, Coffee, Wheat, Sandwich } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Speisekarte = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Speisekarte – Hummus, Falafel & Bowls | Sattuni Düsseldorf";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Unsere Speisekarte: Hummus, Falafel, Bowls, Salate & mehr. Frisch, hausgemacht, halal. Preise ab 4,50€. Jetzt bestellen!');
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

  const menuCategories = [
    {
      title: "Hummus & Falafel Kreationen",
      icon: Utensils,
      description: "Hausgemachte Hummus-Variationen und frische Falafel",
      items: [
        { name: "Hummus Veggie Plate", price: "9,00" },
        { name: "Hummus Jerusalem Plate", price: "9,00" },
        { name: "Hummus Marrakesch Plate", price: "9,00" },
        { name: "Hummus Petra Plate", price: "9,90" },
        { name: "Hummus Pyramiden Plate", price: "9,50" },
        { name: "Hummus Classic Plate", price: "8,00" },
        { name: "Vorspeise-Platte für 2", price: "30,00" },
        { name: "Baba Ghanoush", price: "8,50" },
        { name: "Falafel (10 Stück)", price: "7,00" },
        { name: "Teigtaschen (3 Stück)", price: "4,50" },
        { name: "Kibbeh (3 Stück)", price: "5,10" }
      ]
    },
    {
      title: "Salate",
      icon: Salad,
      description: "Frische orientalische Salate mit authentischen Zutaten",
      items: [
        { name: "Tabouleh", price: "7,50" },
        { name: "Fattoush", price: "7,50" },
        { name: "Romana-Salat", price: "7,50" },
        { name: "Kichererbsensalat", price: "7,50" }
      ]
    },
    {
      title: "Bowls",
      icon: Coffee,
      description: "Nahrhafte Bowl-Kreationen mit verschiedenen Proteinen",
      items: [
        { name: "Beirut Bowl + Falafel", price: "13,00" },
        { name: "Aleppo Bowl + Hähnchen", price: "14,00" },
        { name: "Haifa Bowl + Lachs", price: "16,00" }
      ]
    },
    {
      title: "Reisgerichte",
      icon: Wheat,
      description: "Herzhafte Reisgerichte mit orientalischen Gewürzen",
      items: [
        { name: "Damascus Plate + Gemüse", price: "13,00" },
        { name: "Kairo Plate + Hähnchen", price: "14,00" },
        { name: "Mdina Plate + Rind", price: "14,50" },
        { name: "Bethlehem Plate + Kebab", price: "14,50" },
        { name: "Tunis Plate + Lachs", price: "16,00" }
      ]
    },
    {
      title: "Pita",
      icon: Sandwich,
      description: "Frisch gebackene Pita-Brote mit verschiedenen Füllungen",
      items: [
        { name: "Veggie-Paradies-Pita", price: "6,70" },
        { name: "Falafel Pita", price: "7,00" },
        { name: "Chicken Pita", price: "9,00" },
        { name: "Kebab Pita", price: "9,00" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Speisekarte – Hummus, Falafel & Bowls | Sattuni Düsseldorf</title>
        <meta name="description" content="Unsere Speisekarte: Hummus, Falafel, Bowls, Salate & mehr. Frisch, hausgemacht, halal. Preise ab 4,50€. Jetzt bestellen!" />
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
                Sattuni – Unsere Speisekarte
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
                    Zum Online-Shop
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
                          </div>
                        </div>
                        
                        <div className="grid gap-3">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                              <span className="font-medium text-foreground font-body">
                                {item.name}
                              </span>
                              <Badge variant="secondary" className="font-bold">
                                {item.price} €
                              </Badge>
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
                 Lust auf unsere orientalischen Köstlichkeiten bekommen? <a href="/spezialitaeten" className="text-primary hover:underline font-medium">Entdecke alle Spezialitäten</a> oder bestelle direkt.
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