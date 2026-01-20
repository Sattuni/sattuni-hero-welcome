import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ModeSplitHero from "@/components/features/mode-selection/ModeSplitHero";
import Footer from "@/components/layout/Footer";

const Landing = () => {
  // SEO Meta Tags and Structured Data
  useEffect(() => {
    document.title = "Sattuni – Arabische Küche & Catering in Düsseldorf";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Arabische Küche in Düsseldorf: frisch, hausgemacht & authentisch. Restaurant mit Lieferservice oder Catering für Events. Jetzt entdecken!'
    );

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
      <Helmet>
        <title>Sattuni – Arabische Küche & Catering in Düsseldorf</title>
        <meta name="description" content="Arabische Küche in Düsseldorf: Restaurant mit Lieferservice oder professionelles Catering für Events. Wähle deinen Bereich!" />
        <meta name="keywords" content="arabische küche düsseldorf, lieferservice düsseldorf, catering düsseldorf, hummus, falafel, vegan" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sattuni - Arabische Küche & Catering Düsseldorf" />
        <meta property="og:description" content="Authentische arabische Küche in Düsseldorf. Restaurant mit Lieferservice oder Catering für Events." />
        <meta property="og:url" content="https://sattuni.de/" />
        <meta property="og:locale" content="de_DE" />
        <link rel="canonical" href="https://sattuni.de/" />
      </Helmet>
      
      <main className="min-h-screen">
        <ModeSplitHero />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
