import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that automatically scrolls to top when route changes
 * This is a more robust implementation that can be used as a fallback
 */
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a scrollTo parameter in the URL
    const urlParams = new URLSearchParams(location.search);
    const scrollTo = urlParams.get('scrollTo');
    
    if (!scrollTo) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' // Use instant for immediate scroll
        });
      });
    }
  }, [location.pathname, location.search]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
