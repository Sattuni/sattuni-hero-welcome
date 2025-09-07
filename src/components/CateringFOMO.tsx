import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Utensils, Users } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useMobileDetection } from '@/hooks/useMobileDetection';

const CateringFOMO = () => {
  const [showFOMO, setShowFOMO] = useState(false);
  const { scrollProgress } = useScrollPosition();
  const isMobile = useMobileDetection();

  // Show FOMO at 60% scroll
  useEffect(() => {
    if (scrollProgress >= 60 && !showFOMO) {
      setShowFOMO(true);
      // Auto-hide after 10 seconds
      const timer = setTimeout(() => {
        setShowFOMO(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [scrollProgress, showFOMO]);

  const handleProbeMenuClick = () => {
    const element = document.getElementById('catering-kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focus the message field and add pre-filled text
      setTimeout(() => {
        const messageField = document.getElementById('message') as HTMLTextAreaElement;
        if (messageField) {
          messageField.value = 'Hi! Ich interessiere mich für das Probe Lunch Menü für 10 Personen für 90€. Könnt ihr mir mehr Details schicken?';
          messageField.focus();
        }
      }, 500);
    }
    setShowFOMO(false);
  };

  if (!showFOMO) return null;

  return (
    <div className={`
      fixed ${isMobile ? 'bottom-24' : 'bottom-8'} right-4 z-40 
      transform transition-all duration-500 ease-out
      ${showFOMO ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
    `}>
      <div className="bg-white text-foreground p-4 rounded-lg shadow-xl max-w-xs border border-border backdrop-blur-sm">
        <button
          onClick={() => setShowFOMO(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Schließen"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="pr-6">
          <div className="font-semibold text-sm mb-2 flex items-center gap-2 text-foreground">
            <Utensils className="w-4 h-4 text-primary" />
            🍽️ Lust auf einen Test?
          </div>
          <div className="text-xs mb-3 leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Probe Lunch Menü</span> für{' '}
            <span className="inline-flex items-center gap-1 text-foreground">
              <Users className="w-3 h-3" />
              10 Personen
            </span>{' '}
            nur <span className="font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">90€</span>
          </div>
          <Button
            onClick={handleProbeMenuClick}
            size="sm"
            className="w-full gap-2 h-9 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
          >
            <Utensils className="w-3 h-3" />
            Probe Menü bestellen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CateringFOMO;