import { useEffect, useCallback, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

interface UseFormAutoSaveOptions {
  key: string;
  data: Record<string, any>;
  enabled?: boolean;
  debounceMs?: number;
  onRestore?: (data: Record<string, any>) => void;
}

export const useFormAutoSave = ({
  key,
  data,
  enabled = true,
  debounceMs = 2000,
  onRestore,
}: UseFormAutoSaveOptions) => {
  const { toast } = useToast();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const previousDataRef = useRef<string>('');

  // Save data to localStorage with debouncing
  const saveData = useCallback(() => {
    if (!enabled) return;

    try {
      const serializedData = JSON.stringify(data);
      
      // Only save if data has actually changed
      if (serializedData !== previousDataRef.current) {
        localStorage.setItem(`form_autosave_${key}`, serializedData);
        localStorage.setItem(`form_autosave_${key}_timestamp`, Date.now().toString());
        previousDataRef.current = serializedData;
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  }, [data, enabled, key]);

  // Debounced save effect
  useEffect(() => {
    if (!enabled) return;

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      saveData();
    }, debounceMs);

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [data, saveData, debounceMs, enabled]);

  // Restore data from localStorage
  const restoreData = useCallback(() => {
    if (!enabled) return null;

    try {
      const savedData = localStorage.getItem(`form_autosave_${key}`);
      const savedTimestamp = localStorage.getItem(`form_autosave_${key}_timestamp`);

      if (savedData && savedTimestamp) {
        const timestamp = parseInt(savedTimestamp, 10);
        const ageInHours = (Date.now() - timestamp) / (1000 * 60 * 60);

        // Only restore if data is less than 24 hours old
        if (ageInHours < 24) {
          const parsedData = JSON.parse(savedData);
          
          // Check if there's actually meaningful data to restore
          const hasData = Object.values(parsedData).some(value => 
            value && value !== '' && value !== null && value !== undefined
          );

          if (hasData) {
            onRestore?.(parsedData);
            
            toast({
              title: "Formular wiederhergestellt",
              description: "Ihre zuvor eingegebenen Daten wurden automatisch wiederhergestellt.",
              duration: 4000,
            });
            
            return parsedData;
          }
        }
      }
    } catch (error) {
      console.error('Error restoring form data:', error);
    }

    return null;
  }, [enabled, key, onRestore, toast]);

  // Clear saved data
  const clearSavedData = useCallback(() => {
    try {
      localStorage.removeItem(`form_autosave_${key}`);
      localStorage.removeItem(`form_autosave_${key}_timestamp`);
      previousDataRef.current = '';
    } catch (error) {
      console.error('Error clearing saved data:', error);
    }
  }, [key]);

  // Check if there's saved data available
  const hasSavedData = useCallback(() => {
    try {
      const savedData = localStorage.getItem(`form_autosave_${key}`);
      const savedTimestamp = localStorage.getItem(`form_autosave_${key}_timestamp`);

      if (savedData && savedTimestamp) {
        const timestamp = parseInt(savedTimestamp, 10);
        const ageInHours = (Date.now() - timestamp) / (1000 * 60 * 60);
        
        if (ageInHours < 24) {
          const parsedData = JSON.parse(savedData);
          return Object.values(parsedData).some(value => 
            value && value !== '' && value !== null && value !== undefined
          );
        }
      }
    } catch (error) {
      console.error('Error checking saved data:', error);
    }

    return false;
  }, [key]);

  return {
    restoreData,
    clearSavedData,
    hasSavedData,
  };
};