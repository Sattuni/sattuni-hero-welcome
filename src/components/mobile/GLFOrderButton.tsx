import { useEffect, useRef } from 'react';
import { GLF_CONFIG } from '@/utils/glfHelper';

interface GLFOrderButtonProps {
  className?: string;
}

/**
 * GLF Order Button Component
 * Renders the GLF widget button that can be triggered programmatically
 */
const GLFOrderButton = ({ className = '' }: GLFOrderButtonProps) => {
  const buttonRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Re-initialize GLF script when component mounts
    const initGLF = () => {
      if (buttonRef.current && (window as any).glf) {
        try {
          (window as any).glf.reinit?.();
        } catch (error) {
          console.warn('GLF reinit failed:', error);
        }
      }
    };

    // Try immediately and also after a delay to ensure script is loaded
    initGLF();
    const timer = setTimeout(initGLF, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      ref={buttonRef}
      id="glf-order-button"
      className={`glf-button ${className}`}
      data-glf-cuid={GLF_CONFIG.cuid}
      data-glf-ruid={GLF_CONFIG.ruid}
      data-glf-reservation="false"
      style={{ 
        position: 'fixed',
        bottom: '-9999px',
        left: '-9999px',
        opacity: 0,
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    />
  );
};

export default GLFOrderButton;
