import { MessageCircle, Utensils } from 'lucide-react';
import { useMobileDetection } from '@/hooks/useMobileDetection';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useMobileDetection();
  const { scrollProgress } = useScrollPosition();
  const { t } = useTranslation();

  useEffect(() => {
    // Show WhatsApp float when mobile CTA bar is not prominent (first 30% of page)
    if (isMobile && scrollProgress < 30) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isMobile, scrollProgress]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t('common.whatsappMessage'));
    const phoneNumber = '4921136180115'; // German phone number format for WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible || !isMobile) return null;

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`
        fixed bottom-6 right-6 z-40
        w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] 
        rounded-full shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all duration-300 ease-out
        transform hover:scale-110
        ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
      `}
      aria-label={t('common.whatsappOrder')}
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </button>
  );
};

export default WhatsAppFloat;