import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface FOMOContextType {
  activeFOMO: string | null;
  setActiveFOMO: (fomoId: string | null) => void;
  canShowFOMO: (fomoId: string) => boolean;
  dismissFOMO: (fomoId: string) => void;
}

const FOMOContext = createContext<FOMOContextType | undefined>(undefined);

export const FOMOProvider = ({ children }: { children: ReactNode }) => {
  const [activeFOMO, setActiveFOMO] = useState<string | null>(null);
  const [dismissedFOMOs, setDismissedFOMOs] = useState<Set<string>>(new Set());

  // Load dismissed FOMOs from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('dismissed-fomos');
    if (stored) {
      setDismissedFOMOs(new Set(JSON.parse(stored)));
    }
  }, []);

  const canShowFOMO = (fomoId: string): boolean => {
    // Can't show if another FOMO is active
    if (activeFOMO && activeFOMO !== fomoId) return false;
    
    // Can't show if dismissed
    if (dismissedFOMOs.has(fomoId)) return false;
    
    return true;
  };

  const dismissFOMO = (fomoId: string) => {
    const updated = new Set(dismissedFOMOs);
    updated.add(fomoId);
    setDismissedFOMOs(updated);
    localStorage.setItem('dismissed-fomos', JSON.stringify(Array.from(updated)));
    
    if (activeFOMO === fomoId) {
      setActiveFOMO(null);
    }
  };

  return (
    <FOMOContext.Provider value={{ activeFOMO, setActiveFOMO, canShowFOMO, dismissFOMO }}>
      {children}
    </FOMOContext.Provider>
  );
};

export const useFOMO = () => {
  const context = useContext(FOMOContext);
  if (context === undefined) {
    throw new Error('useFOMO must be used within a FOMOProvider');
  }
  return context;
};
