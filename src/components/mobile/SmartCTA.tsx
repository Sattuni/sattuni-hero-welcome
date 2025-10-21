import { Button, ButtonProps } from '@/components/ui/button';
import { useTimeContext } from '@/hooks/useTimeContext';
import { useMobileDetection } from '@/hooks/useMobileDetection';
import { triggerGLFWidget } from '@/utils/glfHelper';

interface SmartCTAProps extends Omit<ButtonProps, 'onClick'> {
  onOrderClick?: () => void;
  showTimeContext?: boolean;
}

const SmartCTA = ({ 
  onOrderClick, 
  showTimeContext = true, 
  children,
  className,
  ...props 
}: SmartCTAProps) => {
  const { ctaText, period } = useTimeContext();
  const isMobile = useMobileDetection();

  const handleClick = () => {
    if (onOrderClick) {
      onOrderClick();
    } else {
      // Trigger GLF widget
      triggerGLFWidget();
    }
  };

  // Use smart CTA text only if requested and on mobile
  const displayText = showTimeContext && isMobile ? ctaText : (children || 'Zum Online-Shop');
  
  // Add time-based styling
  const timeContextClass = period === 'dinner' ? 'shadow-ornate' : '';

  return (
    <Button
      onClick={handleClick}
      className={`${timeContextClass} ${className || ''}`}
      {...props}
    >
      {displayText}
    </Button>
  );
};

export default SmartCTA;