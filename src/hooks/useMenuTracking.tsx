import { useAnalytics } from '@/contexts';
import { useEffect } from 'react';

/**
 * Hook to track menu item interactions
 */
export const useMenuTracking = () => {
  const { trackMenuItemView, trackMenuItemClick } = useAnalytics();

  const trackItemView = (itemName: string, category: string, section: string) => {
    trackMenuItemView(itemName, category, section);
  };

  const trackItemClick = (itemName: string, category: string, section: string) => {
    trackMenuItemClick(itemName, category, section);
  };

  // Auto-track visible menu items using Intersection Observer
  const trackVisibleItems = (itemElements: HTMLElement[]) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const itemName = element.dataset.itemName || 'Unknown Item';
            const category = element.dataset.category || 'Unknown Category';
            const section = element.dataset.section || 'Unknown Section';
            
            trackItemView(itemName, category, section);
            
            // Unobserve after tracking to avoid duplicate events
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of item is visible
    );

    itemElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  };

  return {
    trackItemView,
    trackItemClick,
    trackVisibleItems,
  };
};
