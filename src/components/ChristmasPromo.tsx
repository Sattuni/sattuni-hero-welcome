import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Gift, Sparkles } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const ChristmasPromo = () => {
  const [showPromo, setShowPromo] = useState(false);
  const { scrollProgress } = useScrollPosition();

  // Show promo after 20% scroll or 3 seconds delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 3000);

    if (scrollProgress > 20) {
      setShowPromo(true);
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [scrollProgress]);

  const handleCateringClick = () => {
    window.location.href = '/catering';
    setShowPromo(false);
  };

  if (!showPromo) return null;

  return (
    <div className={`
      fixed bottom-6 left-6 z-40 max-w-sm
      transform transition-all duration-500 ease-out
      ${showPromo ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
    `}>
      <div className="bg-gradient-to-r from-emerald-700 via-red-700 to-emerald-700 text-white p-4 rounded-xl shadow-xl border border-white/20 backdrop-blur-sm">
        <button
          onClick={() => setShowPromo(false)}
          className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
          aria-label="Schließen"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="pr-6">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5" />
            <span className="font-bold">Weihnachts-Special</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-sm opacity-95 mb-3 leading-relaxed">
            <span className="font-semibold">10% Rabatt auf Weihnachtsfeiern Catering</span> mit Code{' '}
            <span className="font-bold bg-white/25 px-1.5 py-0.5 rounded text-emerald-100">
              SATT25
            </span>
          </p>
          <Button
            onClick={handleCateringClick}
            size="sm"
            className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold shadow-lg hover:shadow-xl transition-all w-full"
          >
            <Gift className="w-4 h-4 mr-2" />
            Catering anfragen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChristmasPromo;