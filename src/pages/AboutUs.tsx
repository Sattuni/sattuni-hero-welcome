import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ChefHat, Truck, Users, Heart, CheckCircle, Leaf, PartyPopper } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import InternalLinks from "@/components/InternalLinks";
import FOMOElements from "@/components/FOMOElements";

const AboutUs = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
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
            { name: "Startseite", href: "/" },
            { name: "Über uns", href: "/ueber-uns", current: true }
          ]} 
        />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rounded-lg rotate-45 animate-bounce"></div>
          <div className="absolute top-40 right-1/4 w-2 h-2 bg-accent rounded-full animate-ping"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Kochen & Kümmern – <span className="text-accent">unser Bruderjob</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Feras sorgt für Einkauf, Küche & Menüs. Hamudi kümmert sich um Kunden, Organisation & Lieferung. 
                <span className="text-accent font-semibold"> Zusammen = Sattuni.</span>
              </p>
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

        {/* Who We Are Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Wer wir sind
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Wir sind zwei Brüder, die arabische Küche in Düsseldorf neu interpretieren – frisch, hausgemacht, modern. 
                  Einer denkt in Rezepten, der andere in Abläufen. <span className="text-primary font-semibold">Gemeinsam machen wir euch satt.</span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Feras Card */}
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
                      <ChefHat className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Feras 🍳
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Einkauf</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Kochen</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Innovative Menüs</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Hamudi Card */}
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
                      <Truck className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Hamudi 🚚
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Kundenkommunikation</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Organisation</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Lieferung</span>
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
                  Ob Abendessen zuhause oder Event mit hunderten Gästen – wir kümmern uns drum.
                </p>
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