import { initGA, trackButtonClick, trackCateringInquiry, trackEvent, trackExternalLink, trackFormSubmission, trackOrderButton, trackPageView } from '@/config/analytics.config';
import React, { createContext, ReactNode, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (action: string, category: string, label?: string, value?: number) => void;
  trackPageView: (url: string, title?: string) => void;
  trackButtonClick: (buttonName: string, location?: string) => void;
  trackFormSubmission: (formName: string) => void;
  trackExternalLink: (url: string, linkText?: string) => void;
  trackOrderButton: (source: string) => void;
  trackCateringInquiry: (source: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics when the app loads
    initGA();
  }, []);

  const analyticsValue: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackExternalLink,
    trackOrderButton,
    trackCateringInquiry,
  };

  return (
    <AnalyticsContext.Provider value={analyticsValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
