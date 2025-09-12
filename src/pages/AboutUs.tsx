import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ChefHat, Truck, Users, Heart, CheckCircle, Leaf, PartyPopper } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import InternalLinks from "@/components/layout/InternalLinks";
import FOMOElements from "@/components/features/marketing/FOMOElements";
import { useLanguageRouting } from '@/hooks/useLanguageRouting';
import ferasProfile from '@/assets/feras-profile.jpg';
import hamudiProfile from '@/assets/hamudi-profile.jpg';
import heroAboutAbstract from '@/assets/hero-about-abstract.jpg';

const AboutUs = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Enable language routing
  useLanguageRouting();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = "Über uns - Sattuni | Arabische Küche aus Düsseldorf";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Lerne die Brüder Feras & Hamudi kennen - das Team hinter Sattuni. Frische arabische Küche, hausgemacht und modern interpretiert in Düsseldorf.");
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
    navigate('/spezialitaeten');
  };

  return (
    <>
      <Helmet>
        <title>Über uns - Sattuni | Arabische Küche aus Düsseldorf</title>
        <meta name="description" content="Lerne die Brüder Feras & Hamudi kennen - das Team hinter Sattuni. Frische arabische Küche, hausgemacht und modern interpretiert in Düsseldorf." />
      </Helmet>

      <Header />
      
      <main className="min-h-screen">
        <Breadcrumb 
          items={[
            { name: t('nav.home'), href: "/" },
            { name: t('nav.about'), href: "/ueber-uns", current: true }
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
                {t('about.title')}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('about.subtitle')}
              </p>
              <Button 
                onClick={handleSpecialtiesClick}
                variant="hero" 
                size="xl"
                className="text-lg px-8 py-4"
              >
                {t('about.discoverSpecialties')}
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
                  {t('about.whoWeAre')}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {t('about.whoWeAreDesc')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Feras Card */}
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 ring-2 ring-primary/20">
                      <img 
                        src="/lovable-uploads/ebf7866c-758d-4168-b85d-d9de42f137cc.png" 
                        alt="Feras - Chef und Küchenchef bei Sattuni" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {t('about.brothers.feras.name')}
                    </h3>
                    <div className="space-y-3">
                      {(t('about.brothers.feras.tasks', { returnObjects: true }) as string[]).map((task, index) => (
                        <div key={index} className="flex items-center justify-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Hamudi Card */}
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 ring-2 ring-primary/20">
                      <img 
                        src="/lovable-uploads/2e458865-8065-4f68-82d0-b997bc935585.png" 
                        alt="Hamudi - Organisation und Kundenbetreuung bei Sattuni" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {t('about.brothers.hamudi.name')}
                    </h3>
                    <div className="space-y-3">
                      {(t('about.brothers.hamudi.tasks', { returnObjects: true }) as string[]).map((task, index) => (
                        <div key={index} className="flex items-center justify-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>{task}</span>
                        </div>
                      ))}
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
                <p>{t('about.humor.line1')}</p>
                <p>{t('about.humor.line2')}</p>
                <p className="text-primary font-bold text-3xl lg:text-4xl">
                  {t('about.humor.line3')}
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
                  {t('about.importantToUs')}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {(t('about.values', { returnObjects: true }) as string[]).map((value, index) => {
                  const icons = [CheckCircle, Leaf, Truck, Heart];
                  const IconComponent = icons[index];
                  
                  return (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300 text-center">
                      <CardContent className="p-6">
                        <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-foreground mb-2">{value}</h3>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t('about.valuesDesc')}
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
                  {t('about.partners')}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t('about.partnersDesc')}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                <div className="flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-soft">
                  <img 
                    src="/lovable-uploads/6b6ec1ce-974f-4e6f-b23e-61aacd2fdf8d.png" 
                    alt="WHU Otto Beisheim School of Management - Partner von Sattuni" 
                    className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                
                <div className="flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-soft">
                  <img 
                    src="/lovable-uploads/4e8e5e31-1ebf-439f-9751-e7c77a726505.png" 
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
                
                <div className="flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-soft">
                  <img 
                    src="/lovable-uploads/49b2979a-a9be-41b9-85ba-4f3e33283c4a.png" 
                    alt="BCG Boston Consulting Group - Partner von Sattuni" 
                    className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <InternalLinks />
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