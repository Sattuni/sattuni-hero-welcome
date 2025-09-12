import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Cookie, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show popup after a small delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    toast({
      title: "Cookies akzeptiert",
      description: "Danke! Wir verwenden Cookies, um Ihr Erlebnis zu verbessern.",
    });
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    toast({
      title: "Cookies abgelehnt",
      description: "Nur notwendige Cookies werden verwendet.",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-in-up">
      <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur-sm border-border/50 shadow-elegant">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">
                🍪 Wir verwenden Cookies
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern und unsere Dienste zu optimieren. 
                Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu. 
                <a href="/datenschutz" className="text-primary hover:underline ml-1">
                  Mehr erfahren
                </a>
              </p>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="min-w-[100px]"
              >
                Ablehnen
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="min-w-[100px]"
              >
                Akzeptieren
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;