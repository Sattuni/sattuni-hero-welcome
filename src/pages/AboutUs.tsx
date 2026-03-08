import heroAboutAbstract from '@/assets/hero-about-abstract.jpg';
import CustomerReviews from "@/components/features/about/CustomerReviews";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer from "@/components/layout/Footer";
import ModeHeader from "@/components/layout/ModeHeader";

import { useSiteMode } from "@/contexts/SiteModeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Leaf, Truck } from "lucide-react";
import { useEffect } from "react";
import SEOHead from "@/components/seo/SEOHead";
import { useNavigate } from "react-router-dom";

import feras from "@/assets/about-us/feras.png";
import hamudi from "@/assets/about-us/hamudi.png";

const AboutUs = () => {
  const navigate = useNavigate();
  const { setMode } = useSiteMode();

  useEffect(() => {
    setMode('catering');
  }, [setMode]);

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": "https://sattuni.de/ueber-uns#about",
          "url": "https://sattuni.de/ueber-uns",
          "name": "Über Sattuni - Die Brüder hinter der Küche",
          "description": "Feras und Hamudi - zwei Brüder, die arabische Küche in Düsseldorf neu interpretieren."
        },
        {
          "@type": "Restaurant",
          "@id": "https://sattuni.de#restaurant",
          "name": "Sattuni",
          "servesCuisine": "Arabische Küche",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Düsseldorf",
            "addressCountry": "DE"
          },
          "founder": [
            { "@type": "Person", "name": "Feras", "jobTitle": "Küchenchef" },
            { "@type": "Person", "name": "Hamudi", "jobTitle": "Operations Manager" }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) document.head.removeChild(scriptToRemove);
    };
  }, []);

  const handleSpecialtiesClick = () => {
    navigate('/catering/menus');
  };

  return (
    <>
      <SEOHead
        title="Über uns – Feras & Hamudi, die Brüder hinter Sattuni"
        description="Feras & Hamudi: die Brüder hinter Sattuni. Arabische Küche, hausgemacht & frisch aus Düsseldorf."
        keywords="Sattuni Team, Feras, Hamudi, arabische Küche Düsseldorf"
        canonicalUrl="https://sattuni.de/catering/ueber-uns/"
        ogImage="https://sattuni.de/sattuni_logo.jpg"
      />

      <ModeHeader />
      
      <main className="min-h-screen pt-20">
        <Breadcrumb 
          items={[
            { name: "Catering", href: "/catering" },
            { name: "Über uns", href: "/catering/ueber-uns", current: true }
          ]} 
        />

        {/* Hero - Cleaner, less decorative noise */}
        <section className="relative py-16 md:py-28 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroAboutAbstract})` }}
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Über uns
              </h1>
              <p className="text-base md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Zwei Brüder, eine Mission: <span className="text-accent font-semibold">Richtig gutes Essen machen.</span>
              </p>
              <Button 
                onClick={handleSpecialtiesClick}
                variant="hero" 
                size="lg"
                className="text-base px-8"
              >
                Unsere Menüs entdecken
              </Button>
            </div>
          </div>
        </section>

        {/* Who We Are - Tighter layout */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12">
                Wer wir sind
              </h2>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Feras */}
                <Card className="bg-card/50 border-primary/20 hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-5 md:p-6 text-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-primary/20">
                      <img src={feras} alt="Feras - Küchenchef bei Sattuni" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Feras</h3>
                    <div className="space-y-2">
                      {["Kauft ein", "Kocht", "Denkt sich was Neues aus"].map(item => (
                        <div key={item} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Hamudi */}
                <Card className="bg-card/50 border-primary/20 hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-5 md:p-6 text-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-primary/20">
                      <img src={hamudi} alt="Hamudi - Organisation bei Sattuni" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Hamudi</h3>
                    <div className="space-y-2">
                      {["Redet mit euch", "Organisiert alles", "Bringt's vorbei"].map(item => (
                        <div key={item} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tagline - Compact */}
        <section className="py-10 md:py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-lg md:text-2xl font-medium text-foreground">Einer kocht. Einer redet.</p>
            <p className="text-primary font-bold text-2xl md:text-3xl mt-2">
              Zusammen machen wir euch satt.
            </p>
          </div>
        </section>

        {/* Values - Compact grid */}
        <section className="py-10 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                Was uns wichtig ist
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: CheckCircle, title: "Hausgemacht & frisch" },
                  { icon: Leaf, title: "Fleisch, vegetarisch & vegan" },
                  { icon: Truck, title: "Lieferservice & Catering" },
                  { icon: Heart, title: "Persönlich & unkompliziert" },
                ].map(({ icon: Icon, title }) => (
                  <Card key={title} className="bg-card/50 border-primary/20 text-center">
                    <CardContent className="p-4 md:p-5">
                      <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground text-sm md:text-base">{title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-center text-muted-foreground mt-6 text-sm md:text-base">
                Ob Abendessen oder <a href="/catering" className="text-primary hover:underline font-medium">Event mit hunderten Gästen</a> – wir kümmern uns drum.
              </p>
            </div>
          </div>
        </section>

        {/* Trusted Partners - Cleaner */}
        <section className="py-10 md:py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-medium text-muted-foreground tracking-widest uppercase mb-6">
              Diese Unternehmen vertrauen uns
            </p>
            <div className="grid grid-cols-3 gap-4 md:gap-6 items-center max-w-2xl mx-auto">
              {[
                { src: "/lovable-uploads/6b6ec1ce-974f-4e6f-b23e-61aacd2fdf8d.png", alt: "WHU" },
                { src: "/lovable-uploads/Leonardo.png", alt: "Leonardo" },
                { src: "/lovable-uploads/da1a1dd5-81c8-4349-83f7-43f66d08e68e.png", alt: "Rockwell Automation" },
              ].map(({ src, alt }) => (
                <div key={alt} className="flex items-center justify-center p-4 bg-white/80 rounded-lg shadow-soft">
                  <img src={src} alt={`${alt} - Partner von Sattuni`} className="max-h-12 w-auto opacity-75 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <CustomerReviews />

        {/* CTA - Cleaner */}
        <section className="py-12 md:py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Lerne uns durch unsere Küche kennen
            </h2>
            <Button onClick={handleSpecialtiesClick} variant="hero" size="lg" className="text-base px-8">
              Unsere Spezialitäten entdecken
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
