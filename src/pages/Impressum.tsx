import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Scale, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Impressum", href: "/impressum" }
  ];

  return (
    <>
      <Helmet>
        <title>Impressum - Sattuni Oriental Bowls & More</title>
        <meta name="description" content="Impressum und rechtliche Angaben von Sattuni - Oriental Bowls & More, Düsseldorf. Kontaktdaten und Unternehmensangaben gemäß TMG." />
        <link rel="canonical" href="https://sattuni.de/impressum" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <Header />
        
        <main className="pt-4 pb-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <Breadcrumb items={breadcrumbItems} />
            
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Scale className="w-8 h-8 text-primary" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                  Impressum
                </h1>
              </div>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
                Rechtliche Angaben gemäß § 5 TMG
              </p>
            </div>

            {/* Legal Information */}
            <div className="space-y-6">
              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <MapPin className="w-5 h-5 text-primary" />
                    Angaben gemäß § 5 TMG
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Diensteanbieter:</h3>
                    <p className="text-muted-foreground">
                      Feras Muhammad<br />
                      Sattuni (Einzelunternehmer)<br />
                      Johannstrasse 40<br />
                      40476 Düsseldorf
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <Phone className="w-5 h-5 text-primary" />
                    Kontakt
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Telefon:</h3>
                      <a 
                        href="tel:021136180115" 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        0211 36180115
                      </a>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">E-Mail:</h3>
                      <a 
                        href="mailto:info@sattuni.de" 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        info@sattuni.de
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-display">
                    <Scale className="w-5 h-5 text-primary" />
                    Umsatzsteuer-ID
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-body">
                  <p className="text-muted-foreground">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: 
                    <span className="font-semibold text-foreground ml-2">DE351329904</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-display">
                    Verbraucherstreitbeilegung/Universalschlichtungsstelle
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-body">
                  <p className="text-muted-foreground">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/95 backdrop-blur-sm border-border/50">
                <CardContent className="pt-6 font-body">
                  <p className="text-xs text-muted-foreground">
                    <strong>Quelle:</strong> eRecht24
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Impressum;