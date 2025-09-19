import { useAnalytics } from '@/contexts';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to track scroll depth and engagement metrics
 */
export const useScrollTracking = () => {
  const { trackScrollDepth, trackEngagementScore } = useAnalytics();
  const location = useLocation();
  const scrollDepthsTracked = useRef<Set<number>>(new Set());
  const startTime = useRef<number>(Date.now());
  const engagementFactors = useRef<string[]>([]);

  useEffect(() => {
    // Reset tracking for new page
    scrollDepthsTracked.current.clear();
    startTime.current = Date.now();
    engagementFactors.current = [];

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Track scroll depth milestones
      const milestones = [25, 50, 75, 90, 100];
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !scrollDepthsTracked.current.has(milestone)) {
          scrollDepthsTracked.current.add(milestone);
          trackScrollDepth(milestone);
          
          // Add engagement factor
          if (!engagementFactors.current.includes(`scroll_${milestone}`)) {
            engagementFactors.current.push(`scroll_${milestone}`);
          }
        }
      });
    };

    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime.current) / 1000);
      if (timeOnPage > 5) { // Only track if user spent more than 5 seconds
        const engagementScore = calculateEngagementScore();
        trackEngagementScore(engagementScore, engagementFactors.current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      
      // Track final engagement score
      const timeOnPage = Math.round((Date.now() - startTime.current) / 1000);
      if (timeOnPage > 5) {
        const engagementScore = calculateEngagementScore();
        trackEngagementScore(engagementScore, engagementFactors.current);
      }
    };
  }, [location.pathname, trackScrollDepth, trackEngagementScore]);

  const calculateEngagementScore = (): number => {
    let score = 0;
    
    // Base score for page visit
    score += 10;
    
    // Scroll depth scoring
    const maxScrollDepth = Math.max(...scrollDepthsTracked.current);
    score += Math.min(maxScrollDepth / 10, 10); // Max 10 points for 100% scroll
    
    // Time on page scoring (capped at 20 points)
    const timeOnPage = Math.round((Date.now() - startTime.current) / 1000);
    score += Math.min(timeOnPage / 3, 20);
    
    // Engagement factors
    score += engagementFactors.current.length * 2;
    
    return Math.round(Math.min(score, 100)); // Cap at 100
  };

  const addEngagementFactor = (factor: string) => {
    if (!engagementFactors.current.includes(factor)) {
      engagementFactors.current.push(factor);
    }
  };

  return { addEngagementFactor };
};
