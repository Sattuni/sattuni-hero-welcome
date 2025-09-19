import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to automatically scroll to top when the route changes
 * This is a more robust version that handles edge cases
 */
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    const scrollToTop = () => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' // Use 'instant' for immediate scroll, 'smooth' for animated
        });
      });
    };

    // Small delay to ensure page content is rendered
    const timeoutId = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.search]);
};

/**
 * Hook to scroll to top with smooth animation
 */
export const useScrollToTopSmooth = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    };

    const timeoutId = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.search]);
};
