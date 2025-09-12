import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, CalendarCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMobileDetection } from '@/hooks/useMobileDetection';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useTimeContext } from '@/hooks/useTimeContext';

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
    window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
  };

  const handleCatering = () => {
    navigate('/catering');
  };

  if (!isMobile || !isVisible) return null;

  return (
    <div className={`
      fixed bottom-0 left-0 right-0 z-50 
      bg-background/95 backdrop-blur-sm border-t border-border/50 shadow-soft
      p-4 safe-area-inset-bottom
      transform transition-transform duration-300 ease-out
      ${isVisible ? 'translate-y-0' : 'translate-y-full'}
    `}>
      <div className="flex gap-3 max-w-sm mx-auto">
        <Button
          onClick={handleOrder}
          variant="hero"
          size="lg"
          className="flex-1 gap-2 h-10 text-sm font-semibold"
        >
          <ShoppingBag className="w-4 h-4" />
          {ctaText}
        </Button>
        <Button
          onClick={handleCatering}
          variant="hero-secondary"
          size="lg"
          className="gap-2 h-10 px-3 text-sm"
        >
          <CalendarCheck className="w-4 h-4" />
          Catering
        </Button>
      </div>
    </div>
  );
};

export default MobileCTABar;