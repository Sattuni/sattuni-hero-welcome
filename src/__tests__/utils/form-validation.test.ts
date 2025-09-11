// Mock data for testing forms
export const mockContactFormData = {
  valid: {
    name: "Max Mustermann",
    email: "max@example.com",
    phone: "+49 123 456789",
    message: "Dies ist eine Testnachricht für das Kontaktformular."
  },
  
  invalid: {
    emptyName: {
      name: "",
      email: "max@example.com",
      phone: "+49 123 456789",
      message: "Test message"
    },
    
    invalidEmail: {
      name: "Max Mustermann",
      email: "invalid-email",
      phone: "+49 123 456789",
      message: "Test message"
    },
    
    shortMessage: {
      name: "Max Mustermann",
      email: "max@example.com",
      phone: "+49 123 456789",
      message: "Kurz"
    }
  }
};

export const mockCateringFormData = {
  valid: {
    name: "Anna Schmidt",
    company: "Beispiel GmbH",
    email: "anna@beispiel.de",
    phone: "+49 987 654321",
    address: "Musterstraße 123, 12345 Musterstadt",
    occasion: "Firmenfeier",
    date: "2024-06-15",
    guestCount: 50,
    budget: 2000,
    comment: "Wir möchten ein mediterranes Buffet für unsere Firmenfeier."
  },
  
  invalid: {
    missingRequired: {
      name: "",
      email: "",
      phone: "",
      address: "",
      occasion: "",
      date: ""
    },
    
    invalidEmail: {
      name: "Anna Schmidt",
      email: "invalid-email",
      phone: "+49 987 654321",
      address: "Musterstraße 123",
      occasion: "Firmenfeier",
      date: "2024-06-15"
    }
  }
};

// Test utilities
export const createMockApiResponse = (success: boolean, data?: any, error?: string) => ({
  success,
  data: success ? data : undefined,
  error: success ? undefined : error,
});

export const createMockFormSubmission = (formData: any, shouldSucceed: boolean = true) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(createMockApiResponse(true, {
          id: `test-${Date.now()}`,
          submittedAt: new Date().toISOString(),
          confirmationSent: true
        }));
      } else {
        resolve(createMockApiResponse(false, null, "Test error"));
      }
    }, 500);
  });
};

// Form interaction helpers for testing
export const fillFormFields = (form: HTMLFormElement, data: Record<string, any>) => {
  Object.entries(data).forEach(([key, value]) => {
    const field = form.querySelector(`[name="${key}"]`) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    if (field) {
      if (field.type === 'checkbox' || field.type === 'radio') {
        (field as HTMLInputElement).checked = Boolean(value);
      } else {
        field.value = String(value);
      }
      
      // Trigger change event
      field.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
};

export const submitForm = (form: HTMLFormElement) => {
  const submitButton = form.querySelector('[type="submit"]') as HTMLButtonElement;
  if (submitButton) {
    submitButton.click();
  } else {
    form.dispatchEvent(new Event('submit', { bubbles: true }));
  }
};

// Validation test helpers
export const checkValidationError = (result: any, field: string) => {
  return result.success === false && 
    result.error?.issues?.some((issue: any) => issue.path.includes(field));
};

export const checkValidationSuccess = (result: any) => {
  return result.success === true && result.data !== undefined;
};

// Network simulation helpers
export const simulateNetworkDelay = (ms: number = 1000) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const simulateNetworkError = () => {
  return Promise.reject(new Error('Network error'));
};

// Storage helpers for testing
export const mockLocalStorage = () => {
  const store: Record<string, string> = {};
  
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      Object.keys(store).forEach(key => delete store[key]);
    },
    key: (index: number) => {
      const keys = Object.keys(store);
      return keys[index] || null;
    },
    get length() {
      return Object.keys(store).length;
    }
  };
};

// Component testing utilities
export const waitForFormSubmission = async (timeout: number = 5000) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Form submission timeout'));
    }, timeout);
    
    // Mock successful submission
    setTimeout(() => {
      clearTimeout(timer);
      resolve(true);
    }, 1000);
  });
};