import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSiteMode } from "@/contexts/SiteModeContext";
import ModeSplitHero from "@/components/features/mode-selection/ModeSplitHero";
import Header from "@/components/layout/Header";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";

// Import existing components for restaurant mode content
import Hero from "@/components/features/hero/Hero";
import Services from "@/components/features/services/Services";
import FoodShowcase from "@/components/features/food/FoodShowcase";
import WhySattuni from "@/components/features/about/WhySattuni";
import HowItWorks from "@/components/features/process/HowItWorks";
import Testimonials from "@/components/features/testimonials/Testimonials";
import Contact from "@/components/features/contact/Contact";
import OpeningHours from "@/components/layout/OpeningHours";
import MobileCTABar from "@/components/mobile/MobileCTABar";
import SectionNav from "@/components/layout/SectionNav";
import InternalLinks from "@/components/layout/InternalLinks";

const Landing = () => {
  const { hasSelectedMode, isCateringMode, isRestaurantMode } = useSiteMode();

  // SEO Meta Tags
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

    return () => {
      // Cleanup if needed
    };
  }, []);

  // If no mode selected, show split hero
  if (!hasSelectedMode) {
    return (
      <>
        <Helmet>
          <title>Sattuni – Arabische Küche & Catering in Düsseldorf</title>
          <meta name="description" content="Arabische Küche in Düsseldorf: Restaurant mit Lieferservice oder professionelles Catering für Events. Wähle deinen Bereich!" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://sattuni.de/" />
        </Helmet>
        
        <Header />
        <main className="min-h-screen pt-16">
          <ModeSplitHero />
        </main>
        <Footer />
      </>
    );
  }

  // If a mode is selected but user is on landing page, redirect logic would go here
  // For now, show a simplified view with mode header
  return (
    <>
      <Helmet>
        <title>Sattuni – Arabische Küche & Catering in Düsseldorf</title>
        <meta name="description" content="Arabische Küche in Düsseldorf: Restaurant mit Lieferservice oder professionelles Catering für Events." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sattuni.de/" />
      </Helmet>
      
      <ModeHeader />
      <main className="min-h-screen pt-16">
        <ModeSplitHero />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
