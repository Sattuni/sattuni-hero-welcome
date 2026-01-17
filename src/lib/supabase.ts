// Supabase client with fallback configuration
// This wrapper ensures the client works even when VITE_* env vars aren't injected
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';
import { getBackendPublicConfig } from '@/config/backend-public.config';

const config = getBackendPublicConfig();

export const supabase = createClient<Database>(config.url, config.anonKey, {
  auth: {
    storage: typeof window !== 'undefined' ? localStorage : undefined,
    persistSession: true,
    autoRefreshToken: true,
  }
});
