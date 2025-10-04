import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type FOMOType = 'christmas' | 'scroll' | 'catering' | null;

interface FOMOContextType {
  activeFOMO: FOMOType;
  registerFOMO: (type: FOMOType) => boolean;
  unregisterFOMO: (type: FOMOType) => void;
}

const FOMOContext = createContext<FOMOContextType | undefined>(undefined);

export const FOMOProvider = ({ children }: { children: ReactNode }) => {
  const [activeFOMO, setActiveFOMO] = useState<FOMOType>(null);

  // Priority: christmas > catering > scroll
  const getPriority = (type: FOMOType): number => {
    switch (type) {
      case 'christmas': return 3;
      case 'catering': return 2;
      case 'scroll': return 1;
      default: return 0;
    }
  };

  const registerFOMO = useCallback((type: FOMOType): boolean => {
    if (!type) return false;
    
    // If no FOMO is active, activate this one
    if (!activeFOMO) {
      setActiveFOMO(type);
      return true;
    }

    // If current FOMO has lower priority, replace it
    if (getPriority(type) > getPriority(activeFOMO)) {
      setActiveFOMO(type);
      return true;
    }

    // Otherwise, don't activate
    return false;
  }, [activeFOMO]);

  const unregisterFOMO = useCallback((type: FOMOType) => {
    if (activeFOMO === type) {
      setActiveFOMO(null);
    }
  }, [activeFOMO]);

  return (
    <FOMOContext.Provider value={{ activeFOMO, registerFOMO, unregisterFOMO }}>
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
