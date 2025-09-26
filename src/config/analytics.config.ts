// Google Analytics Configuration
export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-D6N6QCK330';

// Enhanced Google Analytics 4 (gtag) configuration
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
      // Enhanced configuration for better tracking
      send_page_view: true,
      anonymize_ip: true,
      allow_google_signals: true,
      allow_ad_personalization_signals: false,
    });

    // Track initial page load
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }
};

// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Event tracking functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Specific tracking functions for common events
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`);
};

export const trackFormSubmission = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent('click', 'external_link', linkText || url);
};

export const trackOrderButton = (source: string) => {
  trackEvent('click', 'order_button', source);
};

export const trackCateringInquiry = (source: string) => {
  trackEvent('click', 'catering_inquiry', source);
};

// Enhanced tracking functions for comprehensive analytics

// Scroll depth tracking
export const trackScrollDepth = (depth: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `${depth}%`,
      value: depth,
    });
  }
};

// Time on page tracking
export const trackTimeOnPage = (timeInSeconds: number, pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: 'time_on_page',
      value: timeInSeconds,
      event_category: 'engagement',
      event_label: pagePath,
    });
  }
};

// Form interaction tracking
export const trackFormStart = (formName: string, formType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_start', {
      event_category: 'form_interaction',
      event_label: `${formName} - ${formType}`,
      form_name: formName,
      form_type: formType,
    });
  }
};

export const trackFormFieldFocus = (formName: string, fieldName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_field_focus', {
      event_category: 'form_interaction',
      event_label: `${formName} - ${fieldName}`,
      form_name: formName,
      field_name: fieldName,
    });
  }
};

export const trackFormValidationError = (formName: string, fieldName: string, errorType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_validation_error', {
      event_category: 'form_interaction',
      event_label: `${formName} - ${fieldName} - ${errorType}`,
      form_name: formName,
      field_name: fieldName,
      error_type: errorType,
    });
  }
};

// Enhanced form submission with more details
export const trackFormSubmissionEnhanced = (formName: string, formData: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'form_interaction',
      event_label: formName,
      form_name: formName,
      form_type: formData.type || 'contact',
      // Track form completion as conversion
      conversion: true,
    });
  }
};

// E-commerce tracking for catering inquiries
export const trackCateringInquiryEnhanced = (source: string, eventDetails: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'catering_inquiry', {
      event_category: 'conversion',
      event_label: source,
      source: source,
      event_type: 'catering_inquiry',
      // E-commerce event
      currency: 'EUR',
      value: eventDetails.estimatedValue || 0,
      items: [{
        item_id: 'catering_service',
        item_name: 'Catering Service',
        item_category: 'Food Service',
        quantity: eventDetails.guestCount || 1,
        price: eventDetails.pricePerPerson || 0,
      }],
    });
  }
};

// Menu item interaction tracking
export const trackMenuItemView = (itemName: string, category: string, section: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      event_category: 'menu_interaction',
      event_label: `${category} - ${itemName}`,
      item_name: itemName,
      item_category: category,
      menu_section: section,
    });
  }
};

export const trackMenuItemClick = (itemName: string, category: string, section: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'select_item', {
      event_category: 'menu_interaction',
      event_label: `${category} - ${itemName}`,
      item_name: itemName,
      item_category: category,
      menu_section: section,
    });
  }
};

// Gallery and media interaction tracking
export const trackImageInteraction = (imageName: string, action: 'view' | 'click' | 'download', location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action === 'view' ? 'view_item' : 'click', {
      event_category: 'media_interaction',
      event_label: `${imageName} - ${location}`,
      media_name: imageName,
      media_location: location,
      media_action: action,
    });
  }
};

// Navigation tracking
export const trackNavigation = (fromPage: string, toPage: string, method: 'click' | 'scroll' | 'direct') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'navigation', {
      event_category: 'user_journey',
      event_label: `${fromPage} → ${toPage}`,
      from_page: fromPage,
      to_page: toPage,
      navigation_method: method,
    });
  }
};

// Search tracking (if you add search functionality)
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search', {
      event_category: 'site_search',
      event_label: searchTerm,
      search_term: searchTerm,
      results_count: resultsCount,
    });
  }
};

// Error tracking
export const trackError = (errorType: string, errorMessage: string, pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      event_category: 'error',
      event_label: `${errorType} - ${pagePath}`,
      error_type: errorType,
      error_message: errorMessage,
      page_path: pagePath,
      fatal: false,
    });
  }
};

// Custom event for business-specific actions
export const trackBusinessAction = (action: string, details: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'business_action', {
      event_category: 'business',
      event_label: action,
      action_type: action,
      ...details,
    });
  }
};

// User engagement scoring
export const trackEngagementScore = (score: number, factors: string[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'engagement_score', {
      event_category: 'engagement',
      event_label: `Score: ${score}`,
      engagement_score: score,
      engagement_factors: factors.join(', '),
    });
  }
};
