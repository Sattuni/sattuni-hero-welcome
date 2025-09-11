import { toast } from "@/hooks/use-toast";

// Error types for better handling
export class APIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public code?: string,
    public details?: any
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export class ValidationError extends Error {
  constructor(
    message: string,
    public field?: string,
    public errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class NetworkError extends Error {
  constructor(message: string = 'Netzwerkfehler aufgetreten') {
    super(message);
    this.name = 'NetworkError';
  }
}

// Error handling utilities
export const handleFormError = (error: unknown, formName: string = 'Formular') => {
  console.error(`${formName} error:`, error);

  if (error instanceof ValidationError) {
    toast({
      variant: "destructive",
      title: "Validierungsfehler",
      description: error.message,
    });
    return { type: 'validation', message: error.message, errors: error.errors };
  }

  if (error instanceof APIError) {
    const message = error.statusCode === 429 
      ? "Zu viele Anfragen. Bitte versuchen Sie es später erneut."
      : error.message || "Ein Serverfehler ist aufgetreten.";
    
    toast({
      variant: "destructive",
      title: "Fehler beim Senden",
      description: message,
    });
    return { type: 'api', message, statusCode: error.statusCode };
  }

  if (error instanceof NetworkError) {
    toast({
      variant: "destructive",
      title: "Verbindungsfehler",
      description: "Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
    });
    return { type: 'network', message: error.message };
  }

  // Generic error fallback
  const genericMessage = "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.";
  toast({
    variant: "destructive",
    title: "Unerwarteter Fehler",
    description: genericMessage,
  });
  return { type: 'unknown', message: genericMessage };
};

// Success handling
export const handleFormSuccess = (message: string, title: string = "Erfolgreich gesendet") => {
  toast({
    title,
    description: message,
    duration: 5000,
  });
};

// Retry logic
export const retryOperation = async <T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      
      // Don't retry certain error types
      if (error instanceof ValidationError) {
        throw error;
      }
      
      // Exponential backoff
      const waitTime = delay * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
  
  throw new Error('Maximum retries exceeded');
};

// Form field validation helpers
export const getFieldError = (
  errors: Record<string, string[]> | undefined,
  fieldName: string
): string | undefined => {
  return errors?.[fieldName]?.[0];
};

export const hasFieldError = (
  errors: Record<string, string[]> | undefined,
  fieldName: string
): boolean => {
  return Boolean(errors?.[fieldName]?.length);
};

// Loading state management
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export const createLoadingState = (): LoadingState => ({
  isLoading: false,
  error: null,
  success: false,
});

export const setLoadingState = (
  state: LoadingState,
  updates: Partial<LoadingState>
): LoadingState => ({
  ...state,
  ...updates,
});

// Validation helpers
export const validateRequired = (value: any, fieldName: string): string | null => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return `${fieldName} ist erforderlich`;
  }
  return null;
};

export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
  }
  return null;
};

export const validatePhone = (phone: string): string | null => {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    return 'Bitte geben Sie eine gültige Telefonnummer ein';
  }
  return null;
};

export const validateMinLength = (value: string, minLength: number, fieldName: string): string | null => {
  if (value.length < minLength) {
    return `${fieldName} muss mindestens ${minLength} Zeichen haben`;
  }
  return null;
};