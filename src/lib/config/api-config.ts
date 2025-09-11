// API Configuration
export const API_CONFIG = {
  // Base URLs for different environments
  development: {
    baseUrl: 'http://localhost:3000/api',
    supabaseUrl: process.env.VITE_SUPABASE_URL || '',
    supabaseAnonKey: process.env.VITE_SUPABASE_ANON_KEY || '',
  },
  
  production: {
    baseUrl: 'https://your-domain.com/api',
    supabaseUrl: process.env.VITE_SUPABASE_URL || '',
    supabaseAnonKey: process.env.VITE_SUPABASE_ANON_KEY || '',
  },
  
  // Current environment configuration
  current: process.env.NODE_ENV === 'production' ? 'production' as const : 'development' as const,
  
  // API Endpoints
  endpoints: {
    // Contact & Forms
    contact: '/contact',
    catering: '/catering',
    newsletter: '/newsletter',
    
    // File uploads
    upload: '/upload',
    
    // Analytics
    analytics: '/analytics',
    
    // Health check
    health: '/health',
  },
  
  // Request configuration
  defaults: {
    timeout: 10000,
    retries: 3,
    retryDelay: 1000,
  },
  
  // Feature flags
  features: {
    enableAutoSave: true,
    enableAnalytics: process.env.NODE_ENV === 'production',
    enableEmailConfirmations: true,
    enableSMSNotifications: false,
  },
  
  // Email configuration
  email: {
    fromAddress: 'noreply@sattuni.de',
    adminAddress: 'info@sattuni.de',
    templates: {
      contactConfirmation: 'contact-confirmation',
      cateringConfirmation: 'catering-confirmation',
      adminNotification: 'admin-notification',
    },
  },
  
  // Database configuration
  database: {
    tables: {
      contacts: 'contacts',
      cateringRequests: 'catering_requests',
      newsletterSubscriptions: 'newsletter_subscriptions',
      analytics: 'analytics_events',
    },
  },
  
  // Rate limiting
  rateLimiting: {
    contactForm: {
      maxRequests: 5,
      windowMs: 15 * 60 * 1000, // 15 minutes
    },
    cateringForm: {
      maxRequests: 3,
      windowMs: 60 * 60 * 1000, // 1 hour
    },
  },
  
  // File upload limits
  upload: {
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
    maxFiles: 5,
  },
};

// Get current environment config
export const getApiConfig = () => {
  return API_CONFIG[API_CONFIG.current];
};

// Build full API URL
export const buildApiUrl = (endpoint: string) => {
  const config = getApiConfig();
  return `${config.baseUrl}${endpoint}`;
};

// Environment-specific settings
export const isDevelopment = () => process.env.NODE_ENV === 'development';
export const isProduction = () => process.env.NODE_ENV === 'production';

// Feature flag helpers
export const isFeatureEnabled = (feature: keyof typeof API_CONFIG.features) => {
  return API_CONFIG.features[feature];
};