import { useState, useEffect } from 'react';

export const useTimeContext = () => {
  const [timeContext, setTimeContext] = useState<{
    period: 'dinner' | 'other';
    ctaText: string;
  }>({
    period: 'other',
    ctaText: 'Zum Online-Shop'
  });

  useEffect(() => {
    const updateTimeContext = () => {
      const now = new Date();
      const hour = now.getHours();
      
      if (hour >= 17 && hour < 22) {
        setTimeContext({
          period: 'dinner',
          ctaText: 'Heute noch bestellen'
        });
      } else {
        setTimeContext({
          period: 'other',
          ctaText: 'Zum Online-Shop'
        });
      }
    };

    updateTimeContext();
    const interval = setInterval(updateTimeContext, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  return timeContext;
};