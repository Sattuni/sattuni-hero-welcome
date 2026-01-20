import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ModeSplitHero from "@/components/features/mode-selection/ModeSplitHero";
import Footer from "@/components/layout/Footer";

const Landing = () => {
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

  // Always show split hero on landing page (no header)
  return (
    <>
      <Helmet>
        <title>Sattuni – Arabische Küche & Catering in Düsseldorf</title>
        <meta name="description" content="Arabische Küche in Düsseldorf: Restaurant mit Lieferservice oder professionelles Catering für Events. Wähle deinen Bereich!" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sattuni.de/" />
      </Helmet>
      
      {/* No Header on Split Page */}
      <main className="min-h-screen">
        <ModeSplitHero />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
