import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Gift, Sparkles } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useFOMO } from '@/contexts/FOMOContext';

const ChristmasPromo = () => {
  const [showPromo, setShowPromo] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { scrollProgress } = useScrollPosition();
  const { registerFOMO, unregisterFOMO } = useFOMO();

  // Check if promo is still valid (only until Dec 20, 2025)
  const isPromoValid = () => {
    const now = new Date();
    const endDate = new Date('2025-12-20T23:59:59');
    return now <= endDate;
  };

  // Check if user has already dismissed this promo
  useEffect(() => {
    const dismissed = localStorage.getItem('christmas-promo-dismissed');
    if (dismissed || !isPromoValid()) {
      setIsDismissed(true);
      return;
    }
  }, []);

  // Show promo after 20% scroll or 3 seconds delay
  useEffect(() => {
    if (isDismissed || !isPromoValid()) return;

    const timer = setTimeout(() => {
      const canShow = registerFOMO('christmas');
      if (canShow) {
        setShowPromo(true);
      }
    }, 3000);

    if (scrollProgress > 20) {
      const canShow = registerFOMO('christmas');
      if (canShow) {
        setShowPromo(true);
      }
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
      if (showPromo) {
        unregisterFOMO('christmas');
      }
    };
  }, [scrollProgress, isDismissed, registerFOMO, unregisterFOMO, showPromo]);

  const handleDismiss = () => {
    setShowPromo(false);
    setIsDismissed(true);
    unregisterFOMO('christmas');
    localStorage.setItem('christmas-promo-dismissed', 'true');
  };

  const handleCateringClick = () => {
    window.location.href = '/catering';
    handleDismiss();
  };

  if (!showPromo) return null;

  return (
    <div className={`
      fixed z-40 transform transition-all duration-500 ease-out
      ${showPromo ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      
      /* Mobile positioning - bottom center, above mobile nav */
      bottom-20 left-1/2 -translate-x-1/2 max-w-[280px] mx-4
      
      /* Desktop positioning - bottom left */
      sm:bottom-6 sm:left-6 sm:translate-x-0 sm:max-w-sm sm:mx-0
    `}>
      <div className="bg-gradient-to-r from-emerald-700 via-red-700 to-emerald-700 text-white 
                      p-3 sm:p-4 rounded-xl shadow-xl border border-white/20 backdrop-blur-sm">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
          aria-label="Schließen"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="pr-6">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-bold text-sm sm:text-base">Weihnachts-Special</span>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <p className="text-xs sm:text-sm opacity-95 mb-3 leading-relaxed">
            <span className="font-semibold">10% Rabatt auf Weihnachtsfeiern Catering</span> mit Code{' '}
            <span className="font-bold bg-white/25 px-1.5 py-0.5 rounded text-emerald-100 text-xs">
              SATT25
            </span>
          </p>
          <Button
            onClick={handleCateringClick}
            size="sm"
            className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold shadow-lg hover:shadow-xl transition-all w-full 
                       text-xs sm:text-sm h-8 sm:h-auto"
          >
            <Gift className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Catering anfragen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChristmasPromo;