import { useEffect, useRef } from 'react';
import { GLF_CONFIG } from '@/utils/glfHelper';

interface GLFOrderButtonProps {
  className?: string;
}

/**
 * GLF Order Button Component
 * Renders the invisible GLF widget button that can be triggered programmatically
 */
const GLFOrderButton = ({ className = '' }: GLFOrderButtonProps) => {
  const buttonRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Re-initialize GLF script when component mounts
    // This ensures the widget works after React renders
    if (buttonRef.current && (window as any).glf) {
      try {
        (window as any).glf.reinit?.();
      } catch (error) {
        console.warn('GLF reinit failed:', error);
      }
    }
  }, []);

  return (
    <span
      ref={buttonRef}
      className={`glf-button ${className}`}
      data-glf-cuid={GLF_CONFIG.cuid}
      data-glf-ruid={GLF_CONFIG.ruid}
      style={{ display: 'none' }}
      aria-hidden="true"
    />
  );
};

export default GLFOrderButton;
