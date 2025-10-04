import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, X, Heart, PartyPopper } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMobileDetection } from '@/hooks/useMobileDetection';
import { useFOMO } from '@/contexts/FOMOContext';

const FOMOElements = () => {
  const [showScrollFOMO, setShowScrollFOMO] = useState(false);
  const { scrollProgress } = useScrollPosition();
  const isMobile = useMobileDetection();
  const { canShowFOMO, setActiveFOMO, dismissFOMO } = useFOMO();

  // Show FOMO after 70% scroll and only if no other FOMO is active
  useEffect(() => {
    if (!canShowFOMO('scroll-fomo')) return;

    if (scrollProgress > 70) {
      setActiveFOMO('scroll-fomo');
      setShowScrollFOMO(true);
      
      // Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        setShowScrollFOMO(false);
        setActiveFOMO(null);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [scrollProgress, canShowFOMO, setActiveFOMO]);

  const handleDismiss = () => {
    setShowScrollFOMO(false);
    dismissFOMO('scroll-fomo');
  };

  const handleOrder = () => {
    window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
    handleDismiss();
  };

  return (
    <>
      {/* Scroll-triggered FOMO */}
      {showScrollFOMO && (
        <div className={`
          fixed ${isMobile ? 'bottom-24' : 'bottom-8'} right-4 z-40 
          transform transition-all duration-500 ease-out
          ${showScrollFOMO ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}>
          <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-lg max-w-xs border border-primary/20">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-primary-foreground/80 hover:text-primary-foreground"
              aria-label="Schließen"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="pr-6">
              <div className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Hunger bekommen?
              </div>
              <div className="text-xs opacity-90 mb-1">
                Leckere arabische Küche in 30-45 Min bei dir!
              </div>
              <div className="text-xs font-semibold text-primary-foreground/95 mb-3 flex items-center gap-2">
                <PartyPopper className="w-4 h-4" />
                15% Nachlass auf Deine Gesamtrechnung
              </div>
              <Button
                onClick={handleOrder}
                size="sm"
                variant="secondary"
                className="w-full gap-2 h-8 text-xs font-semibold"
              >
                <ShoppingBag className="w-3 h-3" />
                Jetzt bestellen
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FOMOElements;
