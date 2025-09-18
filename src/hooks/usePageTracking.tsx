import { useAnalytics } from '@/contexts';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to automatically track page views when the route changes
 */
export const usePageTracking = () => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    // Track page view when location changes
    trackPageView(location.pathname + location.search);
  }, [location, trackPageView]);
};
