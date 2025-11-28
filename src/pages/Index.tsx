import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "@/components/features/hero/Hero";
import Header from "@/components/layout/Header";
import Services from "@/components/features/services/Services";
import FoodShowcase from "@/components/features/food/FoodShowcase";
import WhySattuni from "@/components/features/about/WhySattuni";
import HowItWorks from "@/components/features/process/HowItWorks";
import Testimonials from "@/components/features/testimonials/Testimonials";
import Contact from "@/components/features/contact/Contact";
import OpeningHours from "@/components/layout/OpeningHours";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/mobile/MobileCTABar";
import ChristmasPromo from "@/components/features/marketing/ChristmasPromo";
import SectionNav from "@/components/layout/SectionNav";
import InternalLinks from "@/components/layout/InternalLinks";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const Index = () => {
  // SEO Meta Tags and Structured Data
  useEffect(() => {
    document.title = "Sattuni – Arabische Küche & Catering in Düsseldorf";
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Arabische Küche in Düsseldorf: frisch, hausgemacht & authentisch. Mit Lieferservice und Catering für privat & Firmen. Jetzt bestellen!'
    );

    // Add comprehensive structured data for homepage
    const mainStructuredData = {
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
          "mainEntity": {
            "@id": "https://sattuni.de/#restaurant"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": "https://sattuni.de/spezialitaeten?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            {
              "@type": "OrderAction",
              "target": "https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F",
              "name": "Online bestellen"
            }
          ],
          "sameAs": [
            "https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Sattuni Navigation",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "WebPage",
                  "name": "Services",
                  "url": "https://sattuni.de/#services",
                  "description": "Unsere Angebote: Lieferservice und Catering"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "WebPage",
                  "name": "Spezialitäten",
                  "url": "https://sattuni.de/spezialitaeten",
                  "description": "Authentische arabische Gerichte und Speisekarte"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "WebPage", 
                  "name": "Event Catering",
                  "url": "https://sattuni.de/catering",
                  "description": "Professionelles Catering für Events und Feiern"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "WebPage",
                  "name": "Kontakt",
                  "url": "https://sattuni.de/#kontakt", 
                  "description": "Kontaktformular und Anfragen"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "WebPage",
                  "name": "Öffnungszeiten",
                  "url": "https://sattuni.de/#oeffnungszeiten",
                  "description": "Unsere Öffnungszeiten und Verfügbarkeit"
                }
              }
            ]
          }
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
    script.textContent = JSON.stringify(mainStructuredData);
    document.head.appendChild(script);

    // Add FAQ Schema for better SERP features
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Liefert Sattuni nach Düsseldorf?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, wir liefern frische arabische Küche in ganz Düsseldorf und Umgebung. Unsere Lieferzeiten sind Mo-Fr 11:00-22:00 und Sa-So 12:00-23:00."
          }
        },
        {
          "@type": "Question",
          "name": "Gibt es vegane und vegetarische Optionen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolut! Viele unserer Gerichte sind von Natur aus vegan oder vegetarisch - wie Hummus, Falafel, Tabouleh und unsere Oriental Bowls."
          }
        },
        {
          "@type": "Question",
          "name": "Bietet Sattuni Catering für Events an?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, unser Catering-Service beginnt ab 20 Personen. Von Fingerfood bis kompletten Buffets - alles frisch zubereitet und professionell aufgebaut."
          }
        },
        {
          "@type": "Question",
          "name": "Ist das Fleisch halal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ja, unser Fleisch ist halal. Bitte erwähne das gerne bei deiner Bestellung, damit wir entsprechend zubereiten können."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.setAttribute('data-faq', 'true');
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

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
      const faqScriptToRemove = document.querySelector('script[data-faq]');
      if (faqScriptToRemove) {
        document.head.removeChild(faqScriptToRemove);
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
        <title>Sattuni – Arabische Küche & Catering in Düsseldorf</title>
        <meta name="description" content="Arabische Küche in Düsseldorf: frisch, hausgemacht & authentisch. Mit Lieferservice und Catering für privat & Firmen. Jetzt bestellen!" />
        <meta name="keywords" content="arabische küche düsseldorf, lieferservice düsseldorf, catering düsseldorf, hummus, falafel, oriental bowls, vegan düsseldorf, arabisches restaurant, halal, pita" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sattuni - Authentische Arabische Küche in Düsseldorf" />
        <meta property="og:description" content="Entdecke authentische arabische Küche in Düsseldorf! Frische Pita, hausgemachter Hummus & Falafel. Lieferservice und Event-Catering für jeden Anlass. Halal verfügbar." />
        <meta property="og:url" content="https://sattuni.de/" />
        <meta property="og:image" content="https://sattuni.de/hero-food.jpg" />
        <meta property="og:locale" content="de_DE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sattuni - Arabische Küche Düsseldorf" />
        <meta name="twitter:description" content="Authentische arabische Küche, frisch zubereitet. Lieferservice & Catering in Düsseldorf. Halal verfügbar." />
      </Helmet>
      
      <Header />
      <main className="min-h-screen pt-16 pb-safe-mobile">
        {/* Closure Notice */}
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Alert className="bg-primary/10 border-primary/30">
            <Info className="h-5 w-5 text-primary" />
            <AlertTitle className="text-lg font-semibold text-foreground">
              Kleine Pause – wir sind bald zurück! 🌙
            </AlertTitle>
            <AlertDescription className="text-foreground/80">
              Liebe Gäste, vom <strong>27. November bis zum 3. Dezember</strong> bleibt unser Restaurant geschlossen. 
              Ab dem <strong>4. Dezember</strong> sind wir wieder mit frischen Köstlichkeiten für euch da. 
              Vielen Dank für euer Verständnis und bis bald! ❤️
            </AlertDescription>
          </Alert>
        </div>
        
        <Hero />
        
        {/* Section Navigation */}
        <SectionNav />
        
        <div id="services">
          <Services />
        </div>
        
        <div id="spezialitaeten">
          <FoodShowcase />
        </div>
        
        <WhySattuni />
        
        {/* Opening Hours - Always Visible */}
        <div id="oeffnungszeiten">
          <OpeningHours />
        </div>
        
        {/* How It Works - Always Visible */}
        <HowItWorks />
        
        {/* Testimonials - Always Visible */}
        <Testimonials />
        
        {/* Contact Section - Always Visible */}
        <div id="kontakt" className="bg-gradient-subtle">
          <Contact />
        </div>
        
        {/* Internal Links Section */}
        <InternalLinks />
      </main>
      <Footer />
      <MobileCTABar />
      <ChristmasPromo />
    </>
  );
};

export default Index;
