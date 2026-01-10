export interface BackendPublicConfig {
  url: string;
  anonKey: string;
}

// Fallback values ensure the app works even when hosting environments don't inject VITE_* vars.
// These are public (anon) credentials intended for client-side usage.
const FALLBACK_BACKEND_PUBLIC_CONFIG: BackendPublicConfig = {
  url: "https://rfxjhjoouozyjcagaufa.supabase.co",
  anonKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmeGpoam9vdW96eWpjYWdhdWZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwNTg5OTgsImV4cCI6MjA4MzYzNDk5OH0.W9Gxsd5Mab75QTSPSd018G9gQlG_AQWErSxPYow3-yE",
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function getBackendPublicConfig(): BackendPublicConfig {
  const env = import.meta.env as any;

  const urlCandidate = env?.VITE_SUPABASE_URL;
  const keyCandidate = env?.VITE_SUPABASE_PUBLISHABLE_KEY || env?.VITE_SUPABASE_ANON_KEY;

  return {
    url: isNonEmptyString(urlCandidate)
      ? urlCandidate
      : FALLBACK_BACKEND_PUBLIC_CONFIG.url,
    anonKey: isNonEmptyString(keyCandidate)
      ? keyCandidate
      : FALLBACK_BACKEND_PUBLIC_CONFIG.anonKey,
  };
}
