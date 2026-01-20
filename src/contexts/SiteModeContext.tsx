import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

export type SiteMode = 'catering' | 'restaurant' | null;

interface SiteModeContextType {
  mode: SiteMode;
  setMode: (mode: SiteMode) => void;
  isCateringMode: boolean;
  isRestaurantMode: boolean;
  hasSelectedMode: boolean;
  clearMode: () => void;
}

const SiteModeContext = createContext<SiteModeContextType | undefined>(undefined);

const STORAGE_KEY = 'sattuni-site-mode';

interface SiteModeProviderProps {
  children: ReactNode;
}

export const SiteModeProvider = ({ children }: SiteModeProviderProps) => {
  const [mode, setModeState] = useState<SiteMode>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load mode from localStorage on mount
  useEffect(() => {
    try {
      const storedMode = localStorage.getItem(STORAGE_KEY) as SiteMode;
      if (storedMode === 'catering' || storedMode === 'restaurant') {
        setModeState(storedMode);
      }
    } catch (error) {
      // localStorage not available, use session-only mode
      console.warn('localStorage not available, using session-only mode');
    }
    setIsInitialized(true);
  }, []);

  // Persist mode to localStorage when it changes
  const setMode = useCallback((newMode: SiteMode) => {
    setModeState(newMode);
    if (newMode) {
      try {
        localStorage.setItem(STORAGE_KEY, newMode);
        // Also set a cookie for server-side access if needed
        document.cookie = `${STORAGE_KEY}=${newMode}; path=/; max-age=31536000; SameSite=Lax`;
        // Apply theme variation via data attribute
        document.documentElement.setAttribute('data-site-mode', newMode);
      } catch (error) {
        console.warn('Could not persist mode to localStorage');
      }
    } else {
      document.documentElement.removeAttribute('data-site-mode');
    }
  }, []);

  const clearMode = useCallback(() => {
    setModeState(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
      document.cookie = `${STORAGE_KEY}=; path=/; max-age=0`;
    } catch (error) {
      // Silent fail
    }
  }, []);

  const value: SiteModeContextType = {
    mode,
    setMode,
    isCateringMode: mode === 'catering',
    isRestaurantMode: mode === 'restaurant',
    hasSelectedMode: mode !== null,
    clearMode,
  };

  // Don't render children until we've checked localStorage
  if (!isInitialized) {
    return null;
  }

  return (
    <SiteModeContext.Provider value={value}>
      {children}
    </SiteModeContext.Provider>
  );
};

export const useSiteMode = (): SiteModeContextType => {
  const context = useContext(SiteModeContext);
  if (context === undefined) {
    throw new Error('useSiteMode must be used within a SiteModeProvider');
  }
  return context;
};

export default SiteModeContext;
