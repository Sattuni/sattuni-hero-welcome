import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const StructuredData = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentLang = i18n.language;
  const baseUrl = 'https://sattuni.de';

  useEffect(() => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-structured-data]');
    existingScripts.forEach(script => script.remove());

    // Base Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "@id": `${baseUrl}#restaurant`,
      "name": "Sattuni",
      "alternateName": "Sattuni - Oriental Bowls & More",
      "description": currentLang === 'en' 
        ? "Authentic Arabic cuisine in Düsseldorf. Fresh, homemade and modernly interpreted."
        : "Authentische arabische Küche in Düsseldorf. Frisch, hausgemacht und modern interpretiert.",
      "url": baseUrl,
      "logo": `${baseUrl}/assets/sattuni-logo.png`,
      "image": `${baseUrl}/assets/hero-food.jpg`,
      "telephone": "+49-211-17607757",
      "email": "info@sattuni.de",
      "servesCuisine": currentLang === 'en' ? "Arabic, Middle Eastern, Lebanese" : "Arabisch, Orientalisch, Libanesisch",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Johannstraße 40",
        "addressLocality": "Düsseldorf",
        "postalCode": "40476",
        "addressCountry": "DE",
        "addressRegion": "NRW"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.2277",
        "longitude": "6.7735"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "ratingCount": "150"
      },
      "hasMenu": `${baseUrl}/speisekarte`,
      "acceptsReservations": false,
      "paymentAccepted": currentLang === 'en' ? "Cash, Credit Card, PayPal" : "Bargeld, Kreditkarte, PayPal",
      "founder": [
        {
          "@type": "Person",
          "name": "Feras",
          "jobTitle": currentLang === 'en' ? "Head Chef" : "Küchenchef"
        },
        {
          "@type": "Person", 
          "name": "Hamudi",
          "jobTitle": currentLang === 'en' ? "Operations Manager" : "Betriebsleiter"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/sattuni_dus/reels/",
        "https://maps.app.goo.gl/YK5P5qjdCFnFVM7B7"
      ]
    };

    // Page-specific schemas
    let pageSchema = null;
    
    switch (location.pathname) {
      case '/':
        pageSchema = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${baseUrl}/#webpage`,
          "name": currentLang === 'en' ? "Sattuni - Authentic Arabic Cuisine" : "Sattuni - Authentische arabische Küche",
          "description": currentLang === 'en' 
            ? "Fresh Arabic cuisine in Düsseldorf. Delivery service and event catering."
            : "Frische arabische Küche in Düsseldorf. Lieferservice und Event-Catering.",
          "url": baseUrl,
          "mainEntity": {
            "@id": `${baseUrl}#restaurant`
          }
        };
        break;
        
      case '/catering':
        pageSchema = {
          "@context": "https://schema.org",
          "@type": "CateringBusiness",
          "@id": `${baseUrl}/catering#catering`,
          "name": "Sattuni Catering - Arabische Küche Düsseldorf",
          "description": currentLang === 'en'
            ? "Professional catering with Arabic cuisine for events in Düsseldorf and surroundings"
            : "Professionelles Catering mit arabischer Küche für Events in Düsseldorf und Umgebung",
          "url": `${baseUrl}/catering`,
          "telephone": "+49-211-17607757",
          "email": "catering@sattuni.de",
          "servesCuisine": currentLang === 'en' ? "Arabic, Oriental, Lebanese" : "Arabisch, Orientalisch, Libanesisch",
          "priceRange": "27€-50€",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "51.2277",
              "longitude": "6.7735"
            },
            "geoRadius": "50000"
          }
        };
        break;
        
      case '/ueber-uns':
        pageSchema = {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${baseUrl}/ueber-uns#about`,
          "name": currentLang === 'en' ? "About Sattuni - The Brothers Behind the Kitchen" : "Über Sattuni - Die Brüder hinter der Küche",
          "description": currentLang === 'en' 
            ? "Feras and Hamudi - two brothers who reinterpret Arabic cuisine in Düsseldorf. Homemade, fresh and modern."
            : "Feras und Hamudi - zwei Brüder, die arabische Küche in Düsseldorf neu interpretieren. Hausgemacht, frisch und modern.",
          "url": `${baseUrl}/ueber-uns`,
          "mainEntity": {
            "@id": `${baseUrl}#restaurant`
          }
        };
        break;
    }

    // Create and insert organization schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.setAttribute('data-structured-data', 'organization');
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    // Create and insert page-specific schema if available
    if (pageSchema) {
      const pageScript = document.createElement('script');
      pageScript.type = 'application/ld+json';
      pageScript.setAttribute('data-structured-data', 'page');
      pageScript.textContent = JSON.stringify(pageSchema);
      document.head.appendChild(pageScript);
    }

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll('script[data-structured-data]');
      scripts.forEach(script => script.remove());
    };
  }, [location.pathname, currentLang, t]);

  return null;
};

export default StructuredData;