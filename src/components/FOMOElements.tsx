import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, X, Gift } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMobileDetection } from '@/hooks/useMobileDetection';

const FOMOElements = () => {
  const [showScrollFOMO, setShowScrollFOMO] = useState(false);
  const [showCateringPromo, setShowCateringPromo] = useState(true);
  const { scrollProgress } = useScrollPosition();
  const isMobile = useMobileDetection();

  // Show scroll FOMO at 70% scroll
  useEffect(() => {
    if (scrollProgress >= 70 && !showScrollFOMO) {
      setShowScrollFOMO(true);
      // Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        setShowScrollFOMO(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [scrollProgress, showScrollFOMO]);

  const handleOrder = () => {
    window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
    setShowScrollFOMO(false);
  };

  const handleCateringClick = () => {
    window.location.href = '/catering';
    setShowCateringPromo(false);
  };

  return (
    <>
      {/* Catering Christmas Promo Banner */}
      {showCateringPromo && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 max-w-md mx-4">
          <div className="bg-gradient-to-r from-red-600 to-green-600 text-white p-4 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
            <button
              onClick={() => setShowCateringPromo(false)}
              className="absolute top-2 right-2 text-white/80 hover:text-white"
              aria-label="Schließen"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6 flex-shrink-0" />
              <div>
                <div className="font-bold text-sm">🎄 Weihnachts-Special!</div>
                <div className="text-xs opacity-90 mb-2">
                  Mit dem Code <span className="font-bold bg-white/20 px-1 rounded">satt25</span> 10% Rabatt auf Weihnachtsfeiern Caterings
                </div>
                <Button
                  onClick={handleCateringClick}
                  size="sm"
                  className="bg-white text-red-600 hover:bg-white/90 h-7 text-xs font-semibold"
                >
                  Jetzt Catering anfragen
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll-triggered FOMO */}
      {showScrollFOMO && (
        <div className={`
          fixed ${isMobile ? 'bottom-24' : 'bottom-8'} right-4 z-40 
          transform transition-all duration-500 ease-out
          ${showScrollFOMO ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}>
          <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-lg max-w-xs border border-primary/20">
            <button
              onClick={() => setShowScrollFOMO(false)}
              className="absolute top-2 right-2 text-primary-foreground/80 hover:text-primary-foreground"
              aria-label="Schließen"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="pr-6">
              <div className="font-semibold text-sm mb-2">🤤 Hunger bekommen?</div>
              <div className="text-xs opacity-90 mb-3">
                Leckere arabische Küche in 30-45 Min bei dir!
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