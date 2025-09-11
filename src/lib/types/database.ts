// Database table interfaces for Supabase integration

export interface ContactRecord {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: 'pending' | 'processed' | 'responded';
  source: 'website_form' | 'direct_email' | 'phone' | 'other';
  metadata?: Record<string, any>;
}

export interface CateringRequestRecord {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  address: string;
  occasion: string;
  event_date: string;
  guest_count?: number;
  budget?: number;
  comment?: string;
  status: 'pending' | 'quoted' | 'confirmed' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  assigned_to?: string;
  quote_amount?: number;
  quote_sent_at?: string;
  confirmed_at?: string;
  metadata?: Record<string, any>;
}

export interface NewsletterSubscriptionRecord {
  id: string;
  created_at: string;
  updated_at: string;
  email: string;
  status: 'active' | 'unsubscribed' | 'bounced';
  source: 'website_form' | 'manual' | 'import';
  preferences?: {
    frequency: 'weekly' | 'monthly' | 'events_only';
    topics: string[];
  };
  unsubscribed_at?: string;
  metadata?: Record<string, any>;
}

export interface AnalyticsEventRecord {
  id: string;
  created_at: string;
  event_type: string;
  event_data: Record<string, any>;
  user_id?: string;
  session_id?: string;
  page_url?: string;
  referrer?: string;
  user_agent?: string;
  ip_address?: string;
}

// Database query filters and options
export interface DatabaseFilters {
  limit?: number;
  offset?: number;
  orderBy?: {
    column: string;
    ascending?: boolean;
  };
  filters?: Record<string, any>;
  dateRange?: {
    from: string;
    to: string;
    column?: string;
  };
}

// Response types for database operations
export interface DatabaseResponse<T> {
  data: T[];
  count?: number;
  error?: string;
  status: 'success' | 'error';
}

export interface DatabaseSingleResponse<T> {
  data: T | null;
  error?: string;
  status: 'success' | 'error';
}

// Supabase RLS (Row Level Security) policies
export interface RLSPolicy {
  name: string;
  table: string;
  operation: 'SELECT' | 'INSERT' | 'UPDATE' | 'DELETE';
  role: string;
  condition: string;
}

// Common database operations
export type DatabaseOperation = 
  | 'create'
  | 'read'
  | 'update'
  | 'delete'
  | 'upsert';

// Status enums for better type safety
export const ContactStatus = {
  PENDING: 'pending',
  PROCESSED: 'processed',
  RESPONDED: 'responded',
} as const;

export const CateringStatus = {
  PENDING: 'pending',
  QUOTED: 'quoted',
  CONFIRMED: 'confirmed',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export const CateringPriority = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
} as const;

export const NewsletterStatus = {
  ACTIVE: 'active',
  UNSUBSCRIBED: 'unsubscribed',
  BOUNCED: 'bounced',
} as const;

// Helper types
export type ContactStatusType = typeof ContactStatus[keyof typeof ContactStatus];
export type CateringStatusType = typeof CateringStatus[keyof typeof CateringStatus];
export type CateringPriorityType = typeof CateringPriority[keyof typeof CateringPriority];
export type NewsletterStatusType = typeof NewsletterStatus[keyof typeof NewsletterStatus];