import heroAboutAbstract from '@/assets/hero-about-abstract.jpg';
import CustomerReviews from "@/components/features/about/CustomerReviews";
import FOMOElements from "@/components/features/marketing/FOMOElements";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer from "@/components/layout/Footer";
import ModeHeader from "@/components/layout/ModeHeader";

import { useSiteMode } from "@/contexts/SiteModeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Leaf, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import feras from "@/assets/about-us/feras.png";
import hamudi from "@/assets/about-us/hamudi.png";

const AboutUs = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { setMode } = useSiteMode();

  // Set catering mode on page load
  useEffect(() => {
    setMode('catering');
  }, [setMode]);

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Über uns – Feras & Hamudi, die Brüder hinter Sattuni";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Die Brüder Feras & Hamudi: arabische Küche aus Düsseldorf. Hausgemacht, frisch und modern. Erfahre mehr über unser Team!");
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute("name", "keywords");
    metaKeywords.setAttribute("content", "Sattuni Team, Feras, Hamudi, arabische Küche Düsseldorf, Brüder Restaurant, hausgemacht, modern");
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute("property", "og:title");
    ogTitle.setAttribute("content", "Über uns - Sattuni | Die Brüder hinter der arabischen Küche");
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute("property", "og:description");
    ogDescription.setAttribute("content", "Feras kocht, Hamudi kümmert sich. Zusammen bringen sie frische arabische Küche nach Düsseldorf - hausgemacht und modern.");
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }

    // Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://sattuni.de/ueber-uns",
          "url": "https://sattuni.de/ueber-uns",
          "name": "Über uns - Sattuni",
          "description": "Lerne die Brüder Feras & Hamudi kennen - das Team hinter Sattuni. Frische arabische Küche, hausgemacht und modern interpretiert.",
          "inLanguage": "de-DE",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://sattuni.de",
            "name": "Sattuni"
          }
        },
        {
          "@type": "AboutPage",
          "@id": "https://sattuni.de/ueber-uns#about",
          "url": "https://sattuni.de/ueber-uns",
          "name": "Über Sattuni - Die Brüder hinter der Küche",
          "description": "Feras und Hamudi - zwei Brüder, die arabische Küche in Düsseldorf neu interpretieren. Hausgemacht, frisch und modern."
        },
        {
          "@type": "Restaurant",
          "@id": "https://sattuni.de#restaurant",
          "name": "Sattuni",
          "description": "Arabische Küche aus Düsseldorf - frisch, hausgemacht und modern interpretiert von den Brüdern Feras und Hamudi.",
          "servesCuisine": "Arabische Küche",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Düsseldorf",
            "addressCountry": "DE"
          },
          "founder": [
            {
              "@type": "Person",
              "name": "Feras",
              "jobTitle": "Küchenchef"
            },
            {
              "@type": "Person", 
              "name": "Hamudi",
              "jobTitle": "Operations Manager"
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Canonical Link
    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", "https://sattuni.de/ueber-uns");
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }

    // Scroll to top functionality
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Cleanup
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
      document.title = "Sattuni - Arabische Küche aus Düsseldorf";
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSpecialtiesClick = () => {
    navigate('/catering/menus');
  };

  return (
    <>
      <Helmet>
        <title>Über uns – Feras & Hamudi, die Brüder hinter Sattuni</title>
        <meta name="description" content="Die Brüder Feras & Hamudi: arabische Küche aus Düsseldorf. Hausgemacht, frisch und modern. Erfahre mehr über unser Team!" />
      </Helmet>

      <ModeHeader />
      
      <main className="min-h-screen pt-20">
        <Breadcrumb 
          items={[
            { name: "Catering", href: "/catering" },
            { name: "Über uns", href: "/catering/ueber-uns", current: true }
          ]} 
        />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroAboutAbstract})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rounded-lg rotate-45"></div>
          <div className="absolute top-40 right-1/4 w-2 h-2 bg-accent rounded-full"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Über uns – Feras & Hamudi von Sattuni
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Zwei Brüder, eine Mission: <span className="text-accent font-semibold">Richtig gutes Essen machen. </span> 
                Feras zaubert in der Küche, Hamudi macht den Rest. Simple as that.
              </p>
              <Button 
                onClick={handleSpecialtiesClick}
                variant="hero" 
                size="xl"
                className="text-lg px-8 py-4"
              >
                Unsere Menüs entdecken
              </Button>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Wer wir sind
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Feras Card */}
                <Card className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 ring-2 ring-primary/20">
                      <img 
                        src={feras}
                        alt="Feras - Chef und Küchenchef bei Sattuni" 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Feras
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Kauft ein</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Kocht</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Denkt sich was Neues aus</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Hamudi Card */}
                <Card className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 ring-2 ring-primary/20">
                      <img 
                        src={hamudi}
                        alt="Hamudi - Organisation und Kundenbetreuung bei Sattuni" 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Hamudi
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Redet mit euch</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Organisiert alles</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Bringt's vorbei</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Humor Section */}
        <section className="py-16 lg:py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="space-y-4 text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
                <p>Einer kocht. Einer redet.</p>
                <p>Einer denkt in Rezepten. Einer in Abläufen.</p>
                <p className="text-primary font-bold text-3xl lg:text-4xl">
                  Zusammen machen wir euch satt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Important to Us */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Was uns wichtig ist
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">Hausgemacht & frisch</h3>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">Vielfalt: Fleisch, vegetarisch & vegan</h3>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">Lieferservice & Catering</h3>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">Persönlich & unkompliziert</h3>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ob Abendessen zuhause oder <a href="/catering" className="text-primary hover:underline font-medium">Event mit hunderten Gästen</a> – wir kümmern uns drum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Partners Section */}
        <section className="py-16 lg:py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Diese Unternehmen vertrauen uns
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-8 items-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-soft">
                  <img 
                    src="/lovable-uploads/6b6ec1ce-974f-4e6f-b23e-61aacd2fdf8d.png" 
                    alt="WHU Otto Beisheim School of Management - Partner von Sattuni" 
                    className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                
                <div className="flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-soft">
                  <img 
                    src="/lovable-uploads/Leonardo.png" 
                    alt="Leonardo - Partner von Sattuni" 
                    className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                
                <div className="flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-soft">
                  <img 
                    src="/lovable-uploads/da1a1dd5-81c8-4349-83f7-43f66d08e68e.png" 
                    alt="Rockwell Automation - Partner von Sattuni" 
                    className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <CustomerReviews />

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Lerne uns durch unsere Küche kennen
              </h2>
              <Button 
                onClick={handleSpecialtiesClick}
                variant="hero" 
                size="xl"
                className="text-lg px-8 py-4"
              >
                Unsere Spezialitäten entdecken
              </Button>
            </div>
          </div>
        </section>

        <FOMOElements />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Nach oben scrollen"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default AboutUs;