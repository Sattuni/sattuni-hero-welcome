import { useEffect } from "react";
import ModeSplitHero from "@/components/features/mode-selection/ModeSplitHero";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";

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
      
      <main className="min-h-screen">
        <ModeSplitHero />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
