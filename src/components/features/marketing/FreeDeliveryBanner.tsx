import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Truck, Sparkles, Clock } from 'lucide-react';
import { useFOMO } from '@/contexts/FOMOContext';
import { useLocation } from 'react-router-dom';

const FreeDeliveryBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { registerFOMO, unregisterFOMO } = useFOMO();
  const location = useLocation();

  // Only show on catering page
  const isCateringPage = location.pathname === '/catering';

  // Check if user has already dismissed this banner
  useEffect(() => {
    const dismissed = localStorage.getItem('free-delivery-dismissed');
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    // Reset after 24 hours
    if (dismissedTime && Date.now() - dismissedTime > 24 * 60 * 60 * 1000) {
      localStorage.removeItem('free-delivery-dismissed');
    } else if (dismissed) {
      setIsDismissed(true);
    }
  }, []);

  // Show banner after short delay on catering page
  useEffect(() => {
    if (!isCateringPage || isDismissed) return;

    const timer = setTimeout(() => {
      const canShow = registerFOMO('christmas'); // Use christmas priority for highest visibility
      if (canShow) {
        setShowBanner(true);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isCateringPage, isDismissed, registerFOMO]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (showBanner) {
        unregisterFOMO('christmas');
      }
    };
  }, [showBanner, unregisterFOMO]);

  const handleDismiss = () => {
    setShowBanner(false);
    setIsDismissed(true);
    unregisterFOMO('christmas');
    localStorage.setItem('free-delivery-dismissed', Date.now().toString());
  };

  const handleCTAClick = () => {
    const element = document.getElementById('anfrage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        nameInput?.focus();
      }, 500);
    }
    handleDismiss();
  };

  if (!showBanner) return null;

  return (
    <div className="fixed top-20 md:top-24 left-0 right-0 z-50 px-4 animate-in slide-in-from-top-4 duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="relative bg-gradient-to-r from-primary via-primary/95 to-primary rounded-xl shadow-2xl border border-primary/20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12" />
          
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 md:top-3 md:right-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors z-10"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative px-4 py-4 md:px-8 md:py-5 flex flex-col md:flex-row items-center gap-3 md:gap-6">
            {/* Icon */}
            <div className="flex-shrink-0 hidden md:flex">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Truck className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                <span className="text-xs md:text-sm font-semibold text-primary-foreground/90 uppercase tracking-wide">
                  Limitiertes Angebot
                </span>
                <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary-foreground mb-1">
                Gratis Lieferung in Düsseldorf!
              </h3>
              <p className="text-xs md:text-sm text-primary-foreground/85 flex items-center justify-center md:justify-start gap-2">
                <Clock className="w-3.5 h-3.5" />
                Keine Lieferkosten für alle Catering-Bestellungen
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg gap-2 px-6"
              >
                <Truck className="w-4 h-4" />
                <span className="hidden sm:inline">Jetzt anfragen</span>
                <span className="sm:hidden">Anfragen</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeDeliveryBanner;
