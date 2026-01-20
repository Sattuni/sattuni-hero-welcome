import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, CalendarCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMobileDetection } from '@/hooks/useMobileDetection';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useTimeContext } from '@/hooks/useTimeContext';
import { triggerGLFWidget } from '@/utils/glfHelper';

const MobileCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMobileDetection();
  const { scrollY, scrollProgress } = useScrollPosition();
  const { ctaText } = useTimeContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobile) {
      setIsVisible(false);
      return;
    }

    // Show after 2 seconds or 30% scroll
    const timer = setTimeout(() => setIsVisible(true), 2000);
    
    if (scrollProgress > 30) {
      setIsVisible(true);
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [isMobile, scrollProgress]);

  const handleOrder = () => {
    // Mobile CTA Bar: Always open direct link (since this is mobile-only)
    window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
  };

  const handleCatering = () => {
    navigate('/catering');
  };

  if (!isMobile || !isVisible) return null;

  return (
    <div className={`
      fixed bottom-0 left-0 right-0 z-50 
      bg-background/95 backdrop-blur-md border-t border-border/50 shadow-lg
      px-4 py-3 safe-area-inset-bottom
      transform transition-transform duration-300 ease-out
      ${isVisible ? 'translate-y-0' : 'translate-y-full'}
    `}>
      <div className="flex gap-3 max-w-md mx-auto">
        <Button
          onClick={handleOrder}
          variant="hero"
          size="lg"
          className="flex-1 gap-2 h-12 text-sm font-semibold min-h-[48px]"
        >
          <ShoppingBag className="w-5 h-5" />
          {ctaText}
        </Button>
        <Button
          onClick={handleCatering}
          variant="hero-secondary"
          size="lg"
          className="gap-2 h-12 px-4 text-sm min-h-[48px]"
        >
          <CalendarCheck className="w-5 h-5" />
          Catering
        </Button>
      </div>
    </div>
  );
};

export default MobileCTABar;