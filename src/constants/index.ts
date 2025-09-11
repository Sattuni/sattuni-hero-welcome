/**
 * Zentrale Konstanten für die Sattuni-Anwendung
 * Alle wiederverwendbaren Konstanten sind hier definiert
 */

// ===== CONTACT & BUSINESS INFO =====
export const BUSINESS_INFO = {
  name: 'Sattuni',
  tagline: 'Authentische orientalische Küche',
  description: 'Frisch zubereitete Spezialitäten aus dem Herzen des Orients',
  
  // Kontaktdaten
  contact: {
    email: 'info@sattuni.de',
    phone: '+49 123 456789',
    whatsapp: '+49 123 456789',
    address: {
      street: 'Musterstraße 123',
      city: '12345 Musterstadt',
      full: 'Musterstraße 123, 12345 Musterstadt'
    }
  },
  
  // Social Media
  social: {
    instagram: 'https://instagram.com/sattuni',
    facebook: 'https://facebook.com/sattuni',
    whatsapp: 'https://wa.me/49123456789'
  },
  
  // Öffnungszeiten
  openingHours: {
    monday: { open: '11:00', close: '22:00', isOpen: true },
    tuesday: { open: '11:00', close: '22:00', isOpen: true },
    wednesday: { open: '11:00', close: '22:00', isOpen: true },
    thursday: { open: '11:00', close: '22:00', isOpen: true },
    friday: { open: '11:00', close: '23:00', isOpen: true },
    saturday: { open: '11:00', close: '23:00', isOpen: true },
    sunday: { open: '12:00', close: '22:00', isOpen: true }
  }
} as const;

// ===== NAVIGATION =====
export const NAVIGATION = {
  main: [
    { label: 'Startseite', href: '/', key: 'home' },
    { label: 'Spezialitäten', href: '/spezialitaeten', key: 'specialties' },
    { label: 'Speisekarte', href: '/speisekarte', key: 'menu' },
    { label: 'Catering', href: '/catering', key: 'catering' },
    { label: 'Über uns', href: '/ueber-uns', key: 'about' }
  ],
  
  footer: [
    { label: 'Impressum', href: '/impressum', key: 'imprint' },
    { label: 'Datenschutz', href: '/datenschutz', key: 'privacy' }
  ],
  
  cta: {
    order: {
      label: 'Jetzt bestellen',
      href: 'https://order.sattuni.de',
      external: true
    },
    catering: {
      label: 'Catering anfragen',
      href: '/catering#catering-kontakt',
      external: false
    }
  }
} as const;

// ===== FORM CONSTANTS =====
export const FORM_CONSTANTS = {
  occasions: [
    { value: 'geburtstag', label: 'Geburtstag' },
    { value: 'hochzeit', label: 'Hochzeit' },
    { value: 'office-lunch', label: 'Office Lunch' },
    { value: 'firmenevent', label: 'Firmenevent' },
    { value: 'privat', label: 'Private Feier' },
    { value: 'sonstiges', label: 'Sonstiges' }
  ],
  
  validation: {
    name: { minLength: 2, maxLength: 100 },
    email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    phone: { pattern: /^[\+]?[0-9\s\-\(\)]{10,}$/, minLength: 10 },
    message: { minLength: 10, maxLength: 1000 },
    address: { minLength: 5, maxLength: 200 }
  },
  
  progress: {
    required: 75, // 75% für Pflichtfelder
    optional: 25  // 25% für optionale Felder
  }
} as const;

// ===== FOOD CATEGORIES =====
export const FOOD_CATEGORIES = {
  appetizers: {
    key: 'vorspeisen',
    label: 'Vorspeisen & Dips',
    description: 'Orientalische Vorspeisen und hausgemachte Dips'
  },
  
  mains: {
    key: 'hauptgerichte', 
    label: 'Hauptgerichte & Bowls',
    description: 'Herzhafte Hauptgerichte und gesunde Bowl-Variationen'
  },
  
  specialties: {
    key: 'spezialitaeten',
    label: 'Falafel & Teigtaschen', 
    description: 'Hausgemachte Spezialitäten nach traditionellen Rezepten'
  }
} as const;

// ===== UI CONSTANTS =====
export const UI_CONSTANTS = {
  animations: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500
    },
    
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px'
  },
  
  zIndex: {
    dropdown: 1000,
    modal: 1050,
    popover: 1100,
    toast: 1200
  }
} as const;

// ===== API CONSTANTS =====
export const API_CONSTANTS = {
  timeouts: {
    default: 10000,
    upload: 30000
  },
  
  retries: {
    max: 3,
    delay: 1000
  },
  
  rateLimits: {
    contact: { maxRequests: 5, windowMs: 15 * 60 * 1000 },
    catering: { maxRequests: 3, windowMs: 60 * 60 * 1000 }
  }
} as const;

// ===== FEATURE FLAGS =====
export const FEATURE_FLAGS = {
  autoSave: true,
  analytics: process.env.NODE_ENV === 'production',
  emailConfirmations: true,
  smsNotifications: false,
  christmasPromo: false,
  mobileCTA: true
} as const;

// ===== SEO CONSTANTS =====
export const SEO_CONSTANTS = {
  defaultTitle: 'Sattuni - Authentische orientalische Küche',
  titleTemplate: '%s | Sattuni',
  defaultDescription: 'Erleben Sie authentische orientalische Küche bei Sattuni. Frisch zubereitete Spezialitäten, Catering-Service und mehr. Jetzt bestellen!',
  
  keywords: [
    'orientalische Küche',
    'arabisches Restaurant', 
    'Falafel',
    'Hummus',
    'Catering',
    'frische Zutaten',
    'authentisch'
  ],
  
  openGraph: {
    type: 'website',
    siteName: 'Sattuni',
    locale: 'de_DE'
  }
} as const;