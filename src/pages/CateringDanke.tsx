import { CheckCircle, Clock, Mail, Phone, ArrowLeft, Home } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

interface LocationState {
  name?: string;
  eventType?: string;
}

const CateringDanke = () => {
  const location = useLocation();
  const state = location.state as LocationState | null;
  const name = state?.name || "dort";

  // Track conversion on page load (for Google Ads, Meta Pixel, etc.)
  useEffect(() => {
    // Google Ads Conversion Tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-10981698602/aXOvCOzSvO8bEKrYvfQo'
      });
      console.log('Google Ads conversion tracked');
    }

    // Meta Pixel Conversion Tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Catering Anfrage',
        content_category: 'Catering',
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Vielen Dank für deine Anfrage | Sattuni Catering</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Deine Catering-Anfrage wurde erfolgreich übermittelt. Wir melden uns innerhalb von 24 Stunden bei dir." />
      </Helmet>

      <ModeHeader />

      <main className="min-h-screen bg-gradient-hero pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-in zoom-in duration-500">
                <CheckCircle className="w-14 h-14 text-primary" />
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Vielen Dank{name !== "dort" ? `, ${name}` : ""}!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Deine Catering-Anfrage wurde erfolgreich übermittelt.
            </p>

            {/* What Happens Next Card */}
            <Card className="p-6 md:p-8 mb-8 text-left bg-card/50 backdrop-blur-sm border-primary/20">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Was passiert jetzt?
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span>Wir prüfen deine Anfrage und erstellen ein individuelles Angebot für dich.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span><strong>Innerhalb von 24 Stunden</strong> melden wir uns bei dir per E-Mail oder Telefon.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <span>Nach deiner Bestätigung kümmern wir uns um alles Weitere – du kannst dich zurücklehnen!</span>
                </li>
              </ul>
            </Card>

            {/* Contact Info */}
            <div className="mb-10 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">
                Noch Fragen? Erreich uns direkt:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+492113618115" 
                  className="inline-flex items-center justify-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>0211 36180115</span>
                </a>
                <a 
                  href="mailto:info@sattuni.de" 
                  className="inline-flex items-center justify-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@sattuni.de</span>
                </a>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/catering" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Zurück zum Catering
                </Link>
              </Button>
              <Button asChild size="lg">
                <Link to="/" className="gap-2">
                  <Home className="w-4 h-4" />
                  Zur Startseite
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CateringDanke;
