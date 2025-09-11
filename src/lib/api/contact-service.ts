import { ContactFormData, CateringFormData } from "../validation/contact-schemas";

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactSubmissionResponse {
  id: string;
  submittedAt: string;
  confirmationSent: boolean;
}

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.NODE_ENV === 'production' 
    ? 'https://your-domain.com/api' 
    : 'http://localhost:3000/api',
  endpoints: {
    contact: '/contact',
    catering: '/catering',
    newsletter: '/newsletter',
  },
  timeout: 10000,
};

// Generic API call helper
async function apiCall<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

    const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('API call failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

// Contact form submission
export async function submitContactForm(
  formData: ContactFormData
): Promise<ApiResponse<ContactSubmissionResponse>> {
  return apiCall<ContactSubmissionResponse>(API_CONFIG.endpoints.contact, {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

// Catering form submission
export async function submitCateringForm(
  formData: CateringFormData
): Promise<ApiResponse<ContactSubmissionResponse>> {
  return apiCall<ContactSubmissionResponse>(API_CONFIG.endpoints.catering, {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}

// Newsletter subscription
export async function subscribeToNewsletter(
  email: string
): Promise<ApiResponse<{ subscribed: boolean }>> {
  return apiCall<{ subscribed: boolean }>(API_CONFIG.endpoints.newsletter, {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}

// Health check
export async function checkApiHealth(): Promise<ApiResponse<{ status: string }>> {
  return apiCall<{ status: string }>('/health');
}