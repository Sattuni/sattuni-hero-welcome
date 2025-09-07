import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Gift, Sparkles } from 'lucide-react';

const ChristmasPromo = () => {
  const [showPromo, setShowPromo] = useState(true);

  const handleCateringClick = () => {
    window.location.href = '/catering';
    setShowPromo(false);
  };

  if (!showPromo) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 max-w-lg mx-4">
      <div className="bg-gradient-to-r from-emerald-700 via-red-700 to-emerald-700 text-white p-5 rounded-xl shadow-xl border border-white/20 backdrop-blur-sm">
        <button
          onClick={() => setShowPromo(false)}
          className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
          aria-label="Schließen"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Gift className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="font-bold text-lg">Festliche Weihnachtszeit!</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-sm opacity-95 mb-3 leading-relaxed">
              Macht eure Weihnachtsfeier unvergesslich! Mit dem Rabattcode{' '}
              <span className="font-bold bg-white/25 px-2 py-1 rounded-md text-emerald-100">
                SATT25
              </span>{' '}
              erhaltet ihr <span className="font-semibold">10% Rabatt</span> auf euer Catering.
            </p>
            <Button
              onClick={handleCateringClick}
              size="sm"
              className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Gift className="w-4 h-4 mr-2" />
              Jetzt Catering anfragen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChristmasPromo;