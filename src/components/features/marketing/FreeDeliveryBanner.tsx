import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Truck } from 'lucide-react';
import { useFOMO } from '@/contexts/FOMOContext';
import { useLocation } from 'react-router-dom';
import { useMobileDetection } from '@/hooks/useMobileDetection';

const FreeDeliveryBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { registerFOMO, unregisterFOMO } = useFOMO();
  const location = useLocation();
  const isMobile = useMobileDetection();

  const isCateringPage = location.pathname === '/catering';

  useEffect(() => {
    const dismissed = localStorage.getItem('free-delivery-dismissed');
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    if (dismissedTime && Date.now() - dismissedTime > 24 * 60 * 60 * 1000) {
      localStorage.removeItem('free-delivery-dismissed');
    } else if (dismissed) {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    if (!isCateringPage || isDismissed) return;

    const timer = setTimeout(() => {
      const canShow = registerFOMO('catering');
      if (canShow) {
        setShowBanner(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isCateringPage, isDismissed, registerFOMO]);

  useEffect(() => {
    return () => {
      if (showBanner) {
        unregisterFOMO('catering');
      }
    };
  }, [showBanner, unregisterFOMO]);

  const handleDismiss = () => {
    setShowBanner(false);
    setIsDismissed(true);
    unregisterFOMO('catering');
    localStorage.setItem('free-delivery-dismissed', Date.now().toString());
  };

  const handleCTAClick = () => {
    const element = document.getElementById('anfrage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleDismiss();
  };

  if (!showBanner) return null;

  return (
    <div className={`
      fixed ${isMobile ? 'bottom-24' : 'bottom-6'} right-4 z-40 
      animate-in slide-in-from-right-4 duration-300
    `}>
      <div className="bg-white border border-border rounded-lg shadow-lg p-3 max-w-xs">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Schließen"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="pr-5 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Truck className="w-5 h-5 text-primary" />
          </div>
          
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">
              Gratis Lieferung
            </p>
            <p className="text-xs text-muted-foreground">
              Keine Lieferkosten in Düsseldorf
            </p>
          </div>
        </div>

        <Button
          onClick={handleCTAClick}
          size="sm"
          className="w-full mt-3 h-8 text-xs"
        >
          Jetzt anfragen
        </Button>
      </div>
    </div>
  );
};

export default FreeDeliveryBanner;
