import { useState, useEffect } from 'react';

export const useTimeContext = () => {
  const [timeContext, setTimeContext] = useState<{
    period: 'lunch' | 'dinner' | 'other';
    ctaText: string;
  }>({
    period: 'other',
    ctaText: 'Jetzt bestellen'
  });

  useEffect(() => {
    const updateTimeContext = () => {
      const now = new Date();
      const hour = now.getHours();
      
      if (hour >= 11 && hour < 14) {
        setTimeContext({
          period: 'lunch',
          ctaText: 'Jetzt zum Lunch bestellen'
        });
      } else if (hour >= 18 && hour < 21) {
        setTimeContext({
          period: 'dinner',
          ctaText: 'Dinner jetzt bestellen'
        });
      } else {
        setTimeContext({
          period: 'other',
          ctaText: 'Jetzt bestellen'
        });
      }
    };

    updateTimeContext();
    const interval = setInterval(updateTimeContext, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  return timeContext;
};