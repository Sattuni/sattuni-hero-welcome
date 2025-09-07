import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";
import FoodShowcase from "@/components/FoodShowcase";
import WhySattuni from "@/components/WhySattuni";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import OpeningHours from "@/components/OpeningHours";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/mobile/MobileCTABar";
import WhatsAppFloat from "@/components/mobile/WhatsAppFloat";
import MobileSectionExpander from "@/components/mobile/MobileSectionExpander";
import ChristmasPromo from "@/components/ChristmasPromo";
import { Settings, Star, MessageCircle, Clock } from "lucide-react";

const Index = () => {
  // SEO Meta Tags and Structured Data
  useEffect(() => {
    document.title = "Sattuni - Arabische Küche Düsseldorf | Lieferservice & Catering";
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      '🥙 Authentische arabische Küche in Düsseldorf: Frische Pita, hausgemachter Hummus & Falafel. ✅ Lieferservice ✅ Event-Catering ✅ Vegan & Vegetarisch. Jetzt bestellen!'
    );

    // Add comprehensive structured data for homepage
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Restaurant",
          "@id": "https://sattuni.de/#restaurant",
          "name": "Sattuni - Oriental Bowls & More",
          "alternateName": "Sattuni",
          "description": "Authentische arabische Küche in Düsseldorf mit Lieferservice und Catering für Events",
          "url": "https://sattuni.de",
          "logo": "https://sattuni.de/sattuni-logo.png",
          "image": "https://sattuni.de/hero-food.jpg",
          "telephone": "+49-211-XXXXXXX",
          "email": "info@sattuni.de",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Musterstraße 123",
            "addressLocality": "Düsseldorf",
            "addressRegion": "NRW",
            "postalCode": "40000",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "51.2277",
            "longitude": "6.7735"
          },
          "servesCuisine": ["Arabische Küche", "Orientalische Küche", "Libanesische Küche", "Vegane Küche", "Vegetarische Küche"],
          "priceRange": "€€",
          "acceptsReservations": true,
          "hasMenu": {
            "@type": "Menu",
            "@id": "https://sattuni.de/#menu",
            "name": "Sattuni Menü",
            "description": "Authentische arabische Spezialitäten - von Vorspeisen bis Hauptgerichte",
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": "Vorspeisen & Dips",
                "description": "Hummus, Baba Ghanousch, Tabouleh und weitere orientalische Vorspeisen",
                "hasMenuItem": [
                  {
                    "@type": "MenuItem",
                    "name": "Hummus",
                    "description": "Cremiger Kichererbsendip mit Tahini und Olivenöl"
                  },
                  {
                    "@type": "MenuItem", 
                    "name": "Baba Ghanousch",
                    "description": "Geröstete Auberginencreme mit Gewürzen"
                  }
                ]
              },
              {
                "@type": "MenuSection",
                "name": "Hauptgerichte",
                "description": "Falafel, Oriental Bowls, Teigtaschen und mehr",
                "hasMenuItem": [
                  {
                    "@type": "MenuItem",
                    "name": "Falafel",
                    "description": "Knusprige Kichererbsenbällchen, hausgemacht"
                  },
                  {
                    "@type": "MenuItem",
                    "name": "Oriental Bowl",
                    "description": "Couscous mit Gemüse, Hummus und frischen Kräutern"
                  }
                ]
              }
            ]
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "11:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification", 
              "dayOfWeek": ["Saturday", "Sunday"],
              "opens": "12:00",
              "closes": "23:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Sattuni Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Lieferservice Düsseldorf",
                  "description": "Schnelle Lieferung arabischer Küche in Düsseldorf und Umgebung"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Event Catering",
                  "description": "Professionelles Catering für Events, Hochzeiten und Firmenfeiern"
                }
              }
            ]
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://sattuni.de/#website",
          "url": "https://sattuni.de",
          "name": "Sattuni - Arabische Küche Düsseldorf",
          "description": "Authentische arabische Küche, Lieferservice und Catering in Düsseldorf",
          "publisher": {
            "@id": "https://sattuni.de/#restaurant"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": "https://sattuni.de/spezialitaeten?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          ]
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://sattuni.de/#localbusiness",
          "name": "Sattuni",
          "image": "https://sattuni.de/hero-food.jpg",
          "telephone": "+49-211-XXXXXXX",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Musterstraße 123",
            "addressLocality": "Düsseldorf",
            "addressRegion": "Nordrhein-Westfalen",
            "postalCode": "40000",
            "addressCountry": "Deutschland"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "51.2277",
            "longitude": "6.7735"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "11:00",
              "closes": "22:00"
            }
          ]
        }
      ]
    };

    // Create and append structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-homepage', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://sattuni.de/');

    // Add hreflang for German
    let hreflang = document.querySelector('link[hreflang="de"]');
    if (!hreflang) {
      hreflang = document.createElement('link');
      hreflang.setAttribute('rel', 'alternate');
      hreflang.setAttribute('hreflang', 'de');
      document.head.appendChild(hreflang);
    }
    hreflang.setAttribute('href', 'https://sattuni.de/');

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector('script[data-homepage]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, []);

  // Scroll to contact form if URL parameter is present
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get('scrollTo');
    
    if (scrollTo === 'kontakt') {
      setTimeout(() => {
        const element = document.getElementById('kontakt');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Sattuni - Arabische Küche Düsseldorf | Lieferservice & Catering</title>
        <meta name="description" content="🥙 Authentische arabische Küche in Düsseldorf: Frische Pita, hausgemachter Hummus & Falafel. ✅ Lieferservice ✅ Event-Catering ✅ Vegan & Vegetarisch. Jetzt bestellen!" />
        <meta name="keywords" content="arabische küche düsseldorf, lieferservice düsseldorf, catering düsseldorf, hummus, falafel, oriental bowls, vegan düsseldorf, arabisches restaurant" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sattuni - Authentische Arabische Küche in Düsseldorf" />
        <meta property="og:description" content="Entdecke authentische arabische Küche in Düsseldorf! Frische Pita, hausgemachter Hummus & Falafel. Lieferservice und Event-Catering für jeden Anlass." />
        <meta property="og:url" content="https://sattuni.de/" />
        <meta property="og:image" content="https://sattuni.de/hero-food.jpg" />
        <meta property="og:locale" content="de_DE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sattuni - Arabische Küche Düsseldorf" />
        <meta name="twitter:description" content="Authentische arabische Küche, frisch zubereitet. Lieferservice & Catering in Düsseldorf." />
      </Helmet>
      
      <Header />
      <main className="min-h-screen pt-16 pb-safe-mobile">
        <Hero />
        <Services />
        <FoodShowcase />
        <WhySattuni />
        
        {/* Mobile Expandable Sections */}
        <MobileSectionExpander
          title="Öffnungszeiten"
          icon={Clock}
          className="bg-gradient-to-b from-muted/30 to-background"
        >
          <OpeningHours />
        </MobileSectionExpander>
        
        <MobileSectionExpander
          title="So funktioniert's"
          icon={Settings}
          className="bg-background"
        >
          <HowItWorks />
        </MobileSectionExpander>
        
        <MobileSectionExpander
          title="Das sagen unsere Gäste"
          icon={Star}
          className="bg-gradient-hero"
        >
          <Testimonials />
        </MobileSectionExpander>
        
        <MobileSectionExpander
          title="Schreib uns kurz"
          icon={MessageCircle}
          className="bg-gradient-subtle"
        >
          <Contact />
        </MobileSectionExpander>
      </main>
      <Footer />
      <MobileCTABar />
      <WhatsAppFloat />
      <ChristmasPromo />
    </>
  );
};

export default Index;
