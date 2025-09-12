import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
}

const SEOHead = ({ 
  title: customTitle, 
  description: customDescription, 
  keywords: customKeywords,
  canonical: customCanonical,
  noindex = false 
}: SEOHeadProps) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  
  const currentLang = i18n.language;
  const baseUrl = 'https://sattuni.de';
  
  // Default SEO content based on route
  const getDefaultSEO = () => {
    const path = location.pathname;
    
    switch (path) {
      case '/':
        return {
          title: currentLang === 'en' 
            ? 'Sattuni - Authentic Arabic Cuisine in Düsseldorf | Fresh & Homemade'
            : 'Sattuni - Authentische arabische Küche aus Düsseldorf | Frisch & Hausgemacht',
          description: currentLang === 'en'
            ? 'Experience authentic Arabic cuisine in Düsseldorf. Fresh pita, creamy hummus & colorful bowls. Delivery service & event catering. Order now!'
            : 'Erlebe authentische arabische Küche in Düsseldorf. Frisches Pita, cremiger Hummus & bunte Bowls. Lieferservice & Event-Catering. Jetzt bestellen!',
          keywords: currentLang === 'en'
            ? 'Arabic cuisine Düsseldorf, Middle Eastern food, fresh pita, hummus, falafel, delivery, catering'
            : 'Arabische Küche Düsseldorf, orientalisches Essen, frisches Pita, Hummus, Falafel, Lieferservice, Catering'
        };
      case '/ueber-uns':
        return {
          title: currentLang === 'en'
            ? 'About Us - Sattuni | The Brothers Behind Arabic Cuisine in Düsseldorf'
            : 'Über uns - Sattuni | Die Brüder hinter der arabischen Küche in Düsseldorf',
          description: currentLang === 'en'
            ? 'Meet Feras & Hamudi - the team behind Sattuni. Fresh Arabic cuisine, homemade and modernly interpreted in Düsseldorf.'
            : 'Lerne Feras & Hamudi kennen - das Team hinter Sattuni. Frische arabische Küche, hausgemacht und modern interpretiert in Düsseldorf.',
          keywords: currentLang === 'en'
            ? 'Sattuni team, Feras, Hamudi, Arabic cuisine Düsseldorf, brothers restaurant, homemade, modern'
            : 'Sattuni Team, Feras, Hamudi, arabische Küche Düsseldorf, Brüder Restaurant, hausgemacht, modern'
        };
      case '/catering':
        return {
          title: currentLang === 'en'
            ? 'Catering Düsseldorf | Sattuni - Arabic Event Catering from €27'
            : 'Catering Düsseldorf | Sattuni - Arabisches Event-Catering ab 27€',
          description: currentLang === 'en'
            ? 'Professional catering in Düsseldorf ✓ Arabic cuisine for events ✓ From €27 per person ✓ Finger food & buffets ✓ 20-500+ people ✓ Request now!'
            : 'Professionelles Catering in Düsseldorf ✓ Arabische Küche für Events ✓ Ab 27€ pro Person ✓ Fingerfood & Buffets ✓ 20-500+ Personen ✓ Jetzt anfragen!',
          keywords: currentLang === 'en'
            ? 'catering Düsseldorf, Arabic catering, event catering, business catering, finger food, buffets'
            : 'Catering Düsseldorf, arabisches Catering, Event-Catering, Business-Catering, Fingerfood, Buffets'
        };
      case '/spezialitaeten':
        return {
          title: currentLang === 'en'
            ? 'Our Specialties - Sattuni | Authentic Arabic Dishes & Oriental Bowls'
            : 'Unsere Spezialitäten - Sattuni | Authentische arabische Gerichte & Oriental Bowls',
          description: currentLang === 'en'
            ? 'Discover our homemade Arabic specialties: crispy falafel, creamy hummus, fresh tabbouleh and colorful oriental bowls.'
            : 'Entdecke unsere hausgemachten arabischen Spezialitäten: knusprige Falafel, cremigen Hummus, frischen Tabbouleh und bunte Oriental Bowls.',
          keywords: currentLang === 'en'
            ? 'Arabic specialties, falafel, hummus, tabbouleh, oriental bowls, Middle Eastern food'
            : 'Arabische Spezialitäten, Falafel, Hummus, Tabbouleh, Oriental Bowls, orientalisches Essen'
        };
      case '/speisekarte':
        return {
          title: currentLang === 'en'
            ? 'Menu - Sattuni | Complete Menu with Prices - Oriental Cuisine'
            : 'Speisekarte - Sattuni | Komplette Speisekarte mit Preisen - Orientalische Küche',
          description: currentLang === 'en'
            ? 'Browse our complete menu with prices. Fresh Arabic dishes, oriental bowls, appetizers and main courses. Order online!'
            : 'Stöbere durch unsere komplette Speisekarte mit Preisen. Frische arabische Gerichte, Oriental Bowls, Vorspeisen und Hauptgerichte. Online bestellen!',
          keywords: currentLang === 'en'
            ? 'menu, prices, Arabic food, oriental bowls, appetizers, main courses, order online'
            : 'Speisekarte, Preise, arabisches Essen, Oriental Bowls, Vorspeisen, Hauptgerichte, online bestellen'
        };
      default:
        return {
          title: currentLang === 'en'
            ? 'Sattuni - Authentic Arabic Cuisine in Düsseldorf'
            : 'Sattuni - Authentische arabische Küche aus Düsseldorf',
          description: currentLang === 'en'
            ? 'Fresh Arabic cuisine in Düsseldorf. Delivery service and event catering.'
            : 'Frische arabische Küche in Düsseldorf. Lieferservice und Event-Catering.',
          keywords: currentLang === 'en'
            ? 'Arabic cuisine, Düsseldorf, Middle Eastern food'
            : 'Arabische Küche, Düsseldorf, orientalisches Essen'
        };
    }
  };
  
  const defaultSEO = getDefaultSEO();
  const title = customTitle || defaultSEO.title;
  const description = customDescription || defaultSEO.description;
  const keywords = customKeywords || defaultSEO.keywords;
  const canonical = customCanonical || `${baseUrl}${location.pathname}`;
  
  // Generate alternate language URLs
  const alternateUrl = currentLang === 'en' 
    ? `${baseUrl}${location.pathname}?lang=de`
    : `${baseUrl}${location.pathname}?lang=en`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Language and Locale */}
      <html lang={currentLang === 'en' ? 'en-US' : 'de-DE'} />
      <meta name="language" content={currentLang === 'en' ? 'English' : 'German'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Hreflang Tags */}
      <link rel="alternate" hrefLang="de" href={`${baseUrl}${location.pathname}?lang=de`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${location.pathname}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${location.pathname}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={currentLang === 'en' ? 'en_US' : 'de_DE'} />
      <meta property="og:site_name" content="Sattuni" />
      <meta property="og:image" content={`${baseUrl}/lovable-uploads/sattuni-og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={currentLang === 'en' ? 'Sattuni - Authentic Arabic Cuisine' : 'Sattuni - Authentische arabische Küche'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/sattuni-og-image.jpg`} />
      
      {/* Additional SEO */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="DE-NW" />
      <meta name="geo.placename" content="Düsseldorf" />
      <meta name="geo.position" content="51.2277;6.7735" />
      <meta name="ICBM" content="51.2277, 6.7735" />
      
      {/* Business Information */}
      <meta name="author" content="Sattuni" />
      <meta name="publisher" content="Sattuni" />
      <meta name="copyright" content="© 2024 Sattuni - Oriental Bowls & More" />
    </Helmet>
  );
};

export default SEOHead;