import { useEffect } from "react";
import { useSiteMode } from "@/contexts/SiteModeContext";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";

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
      <SEOHead
        title="Restaurant & Lieferservice | Sattuni – Arabische Küche Düsseldorf"
        description="Arabische Küche in Düsseldorf: frisch, hausgemacht & authentisch. Lieferung in 30-45 Min. Hummus, Falafel, Oriental Bowls & mehr. Jetzt bestellen!"
        keywords="arabisches restaurant düsseldorf, lieferservice düsseldorf, hummus, falafel, oriental bowls, vegan düsseldorf, halal"
        canonicalUrl="https://sattuni.de/restaurant"
        ogType="restaurant"
        ogTitle="Sattuni Restaurant – Arabische Küche Düsseldorf"
        ogDescription="Frische arabische Küche mit Lieferservice in Düsseldorf. Hummus, Falafel & mehr!"
        ogImage="https://sattuni.de/sattuni_logo.jpg"
      />
      
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
