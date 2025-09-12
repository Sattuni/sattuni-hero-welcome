import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useTimeContext = () => {
  const { t } = useTranslation();
  const [timeContext, setTimeContext] = useState<{
    period: 'dinner' | 'other';
    ctaText: string;
  }>({
    period: 'other',
    ctaText: t('common.orderNow')
  });

  useEffect(() => {
    const updateTimeContext = () => {
      const now = new Date();
      const hour = now.getHours();
      
      if (hour >= 17 && hour < 22) {
        setTimeContext({
          period: 'dinner',
          ctaText: t('common.orderNowToday')
        });
      } else {
        setTimeContext({
          period: 'other',
          ctaText: t('common.orderNow')
        });
      }
    };

    updateTimeContext();
    const interval = setInterval(updateTimeContext, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  return timeContext;
};