import { useEffect } from "react";
import ModeSplitHero from "@/components/features/mode-selection/ModeSplitHero";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";
import { CalendarX } from "lucide-react";

const Landing = () => {
  // SEO Meta Tags and Structured Data
  useEffect(() => {
    // Structured data for main business
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Restaurant",
          "@id": "https://sattuni.de/#restaurant",
          "name": "Sattuni - Oriental Bowls & More",
          "description": "Authentische arabische Küche in Düsseldorf mit Lieferservice und Catering für Events",
          "url": "https://sattuni.de",
          "telephone": "+49-211-36180115",
          "email": "info@sattuni.de",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Johannstraße 40",
            "addressLocality": "Düsseldorf",
            "addressRegion": "Nordrhein-Westfalen",
            "postalCode": "40476",
            "addressCountry": "DE"
          },
          "servesCuisine": ["Arabische Küche", "Orientalische Küche", "Vegane Küche"],
          "priceRange": "€€",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "228",
            "bestRating": "5"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://sattuni.de/#website",
          "url": "https://sattuni.de",
          "name": "Sattuni - Arabische Küche Düsseldorf",
          "publisher": { "@id": "https://sattuni.de/#restaurant" }
        }
      ]
    };

    let jsonLdScript = document.querySelector('script[data-landing]') as HTMLScriptElement;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script') as HTMLScriptElement;
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.setAttribute('data-landing', 'true');
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData);

    return () => {
      const scriptToRemove = document.querySelector('script[data-landing]');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Sattuni – Arabische Küche & Catering in Düsseldorf"
        description="Arabische Küche in Düsseldorf: Restaurant mit Lieferservice oder Catering für Events. Jetzt entdecken!"
        keywords="arabische küche düsseldorf, lieferservice düsseldorf, catering düsseldorf, hummus, falafel, vegan"
        canonicalUrl="https://sattuni.de/"
        ogType="website"
        ogTitle="Sattuni - Arabische Küche & Catering Düsseldorf"
        ogDescription="Arabische Küche in Düsseldorf. Restaurant, Lieferservice & Catering für Events."
        ogImage="https://sattuni.de/sattuni_logo.jpg"
      />

      {/* Betriebsferien-Hinweis */}
      <div className="bg-primary text-primary-foreground py-4 px-4 shadow-soft border-b border-primary-foreground/20">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-foreground"></span>
              </span>
              <CalendarX className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm md:text-base font-bold">
                Betriebsferien bis zum 30.07.
              </p>
            </div>
            <span className="hidden sm:block w-px h-4 bg-primary-foreground/40"></span>
            <p className="text-xs md:text-sm font-medium opacity-95">
              Catering-Anfragen werden trotzdem bearbeitet.
            </p>
          </div>
        </div>
      </div>
      
      <main className="min-h-screen">
        <ModeSplitHero />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
