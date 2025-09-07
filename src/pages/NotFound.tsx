import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Seite nicht gefunden - Sattuni | 404 Fehler</title>
        <meta name="description" content="Die gesuchte Seite wurde nicht gefunden. Zurück zur Sattuni Startseite für authentische arabische Küche in Düsseldorf." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://sattuni.de/" />
      </Helmet>
      
      <div className="flex min-h-screen items-center justify-center bg-gradient-hero px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-muted-foreground mb-8">
            Die Seite <span className="font-mono bg-muted px-2 py-1 rounded text-sm">{location.pathname}</span> existiert nicht.
            Lass uns dich zurück zu unserem leckeren arabischen Essen bringen!
          </p>
          <div className="space-y-4">
            <Button 
              onClick={() => window.location.href = '/'} 
              size="lg"
              className="w-full"
            >
              Zur Startseite
            </Button>
            <Button 
              onClick={() => window.location.href = '/spezialitaeten'} 
              variant="outline"
              size="lg"
              className="w-full"
            >
              Unsere Spezialitäten ansehen
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
