import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSiteMode } from "@/contexts/SiteModeContext";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";

// Import restaurant-focused components
import RestaurantHero from "@/components/features/hero/RestaurantHero";
import FoodShowcase from "@/components/features/food/FoodShowcase";
import WhySattuni from "@/components/features/about/WhySattuni";
import Testimonials from "@/components/features/testimonials/Testimonials";
import Contact from "@/components/features/contact/Contact";
import OpeningHours from "@/components/layout/OpeningHours";

const Restaurant = () => {
  const { setMode } = useSiteMode();

  // Set mode on page load (direct URL access)
  useEffect(() => {
    setMode('restaurant');
  }, [setMode]);

  // Scroll to section if URL hash is present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Restaurant & Lieferservice | Sattuni – Arabische Küche Düsseldorf</title>
        <meta name="description" content="Arabische Küche in Düsseldorf: frisch, hausgemacht & authentisch. Lieferung in 30-45 Min. Hummus, Falafel, Oriental Bowls & mehr. Jetzt bestellen!" />
        <meta name="keywords" content="arabisches restaurant düsseldorf, lieferservice düsseldorf, hummus, falafel, oriental bowls, vegan düsseldorf, halal" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="restaurant" />
        <meta property="og:title" content="Sattuni Restaurant – Arabische Küche Düsseldorf" />
        <meta property="og:description" content="Frische arabische Küche mit Lieferservice in Düsseldorf. Hummus, Falafel & mehr!" />
        <meta property="og:url" content="https://sattuni.de/restaurant" />
        <link rel="canonical" href="https://sattuni.de/restaurant" />
      </Helmet>
      
      <ModeHeader />
      <main className="min-h-screen pt-16 pb-safe-mobile">
        <RestaurantHero />
        
        
        <div id="spezialitaeten">
          <FoodShowcase />
        </div>
        
        <WhySattuni />
        
        <div id="oeffnungszeiten">
          <OpeningHours />
        </div>
        
        <Testimonials />
        
        <div id="kontakt" className="bg-gradient-subtle">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Restaurant;
