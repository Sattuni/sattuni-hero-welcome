/**
 * Zentrale Type Definitions für die Sattuni-Anwendung
 * Alle wiederverwendbaren Types sind hier definiert
 */

// ===== COMMON TYPES =====
export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// ===== FORM TYPES =====
export interface FormValidationError {
  field: string;
  message: string;
}

export interface FormState<T = Record<string, unknown>> {
  data: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
}

export interface AutoSaveOptions {
  key: string;
  enabled: boolean;
  debounceMs: number;
  maxAge: number; // in hours
}

// ===== NAVIGATION TYPES =====
export interface NavigationItem {
  label: string;
  href: string;
  key: string;
  external?: boolean;
  children?: NavigationItem[];
}

export interface Breadcrumb {
  label: string;
  href?: string;
  isActive?: boolean;
}

// ===== BUSINESS TYPES =====
export interface BusinessHours {
  open: string;
  close: string;
  isOpen: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp?: string;
  address: {
    street: string;
    city: string;
    full: string;
  };
}

export interface SocialMedia {
  instagram?: string;
  facebook?: string;
  whatsapp?: string;
  twitter?: string;
}

// ===== FOOD TYPES =====
export interface FoodCategory {
  key: string;
  label: string;
  description: string;
  image?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  allergens?: string[];
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
  description?: string;
}

// ===== EVENT TYPES =====
export type EventOccasion = 
  | 'geburtstag' 
  | 'hochzeit' 
  | 'office-lunch' 
  | 'firmenevent' 
  | 'privat' 
  | 'sonstiges';

export interface EventDetails {
  occasion: EventOccasion;
  date: string;
  guestCount?: number;
  budget?: number;
  location: string;
  specialRequests?: string;
}

// ===== CONTACT FORM TYPES =====
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface CateringFormData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  address: string;
  occasion: EventOccasion;
  date: string;
  guestCount?: number;
  budget?: number;
  comment?: string;
}

// ===== COMPONENT PROP TYPES =====
export interface ComponentWithChildren {
  children: React.ReactNode;
}

export interface ComponentWithClassName {
  className?: string;
}

export interface LoadingProps {
  isLoading?: boolean;
  loadingText?: string;
}

export interface ErrorProps {
  error?: string | null;
  onRetry?: () => void;
}

// ===== UTILITY TYPES =====
export type Status = 'idle' | 'loading' | 'success' | 'error';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Variant = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'accent' 
  | 'destructive' 
  | 'outline' 
  | 'ghost';

// ===== MOBILE TYPES =====
export interface MobileDetection {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  userAgent: string;
}

export interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down' | 'none';
}

// ===== SEO TYPES =====
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

// ===== ANALYTICS TYPES =====
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp?: number;
}

export interface PageView {
  path: string;
  title: string;
  referrer?: string;
  timestamp?: number;
}

// ===== ERROR TYPES =====
export interface AppError extends Error {
  code?: string;
  statusCode?: number;
  details?: unknown;
}

export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface ErrorLog {
  message: string;
  stack?: string;
  code?: string;
  severity: ErrorSeverity;
  timestamp: number;
  userAgent?: string;
  url?: string;
}