import {
  initGA,
  trackBusinessAction,
  trackButtonClick,
  trackCateringInquiry,
  trackCateringInquiryEnhanced,
  trackEngagementScore,
  trackError,
  trackEvent,
  trackExternalLink,
  trackFormFieldFocus,
  trackFormStart,
  trackFormSubmission,
  trackFormSubmissionEnhanced,
  trackFormValidationError,
  trackImageInteraction,
  trackMenuItemClick,
  trackMenuItemView,
  trackNavigation,
  trackOrderButton,
  trackPageView,
  trackScrollDepth,
  trackSearch,
  trackTimeOnPage
} from '@/config/analytics.config';
import React, { createContext, ReactNode, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  // Basic tracking
  trackEvent: (action: string, category: string, label?: string, value?: number) => void;
  trackPageView: (url: string, title?: string) => void;
  trackButtonClick: (buttonName: string, location?: string) => void;
  trackFormSubmission: (formName: string) => void;
  trackExternalLink: (url: string, linkText?: string) => void;
  trackOrderButton: (source: string) => void;
  trackCateringInquiry: (source: string) => void;
  
  // Enhanced tracking
  trackCateringInquiryEnhanced: (source: string, eventDetails: any) => void;
  trackFormSubmissionEnhanced: (formName: string, formData: any) => void;
  trackFormStart: (formName: string, formType: string) => void;
  trackFormFieldFocus: (formName: string, fieldName: string) => void;
  trackFormValidationError: (formName: string, fieldName: string, errorType: string) => void;
  
  // Engagement tracking
  trackScrollDepth: (depth: number) => void;
  trackTimeOnPage: (timeInSeconds: number, pagePath: string) => void;
  trackEngagementScore: (score: number, factors: string[]) => void;
  
  // Content interaction
  trackMenuItemView: (itemName: string, category: string, section: string) => void;
  trackMenuItemClick: (itemName: string, category: string, section: string) => void;
  trackImageInteraction: (imageName: string, action: 'view' | 'click' | 'download', location: string) => void;
  
  // Navigation and journey
  trackNavigation: (fromPage: string, toPage: string, method: 'click' | 'scroll' | 'direct') => void;
  trackSearch: (searchTerm: string, resultsCount: number) => void;
  
  // Error and business tracking
  trackError: (errorType: string, errorMessage: string, pagePath: string) => void;
  trackBusinessAction: (action: string, details: any) => void;
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
    // Basic tracking
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
    trackExternalLink,
    trackOrderButton,
    trackCateringInquiry,
    
    // Enhanced tracking
    trackCateringInquiryEnhanced,
    trackFormSubmissionEnhanced,
    trackFormStart,
    trackFormFieldFocus,
    trackFormValidationError,
    
    // Engagement tracking
    trackScrollDepth,
    trackTimeOnPage,
    trackEngagementScore,
    
    // Content interaction
    trackMenuItemView,
    trackMenuItemClick,
    trackImageInteraction,
    
    // Navigation and journey
    trackNavigation,
    trackSearch,
    
    // Error and business tracking
    trackError,
    trackBusinessAction,
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
