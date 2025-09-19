import { useAnalytics } from '@/contexts';
import { useEffect, useRef } from 'react';

interface FormTrackingOptions {
  formName: string;
  formType: string;
  onSubmission?: (formData: any) => void;
}

/**
 * Hook to track form interactions and submissions
 */
export const useFormTracking = ({ formName, formType, onSubmission }: FormTrackingOptions) => {
  const { 
    trackFormStart, 
    trackFormFieldFocus, 
    trackFormValidationError, 
    trackFormSubmissionEnhanced 
  } = useAnalytics();
  
  const formStartTime = useRef<number>(0);
  const fieldsInteracted = useRef<Set<string>>(new Set());
  const validationErrors = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Track form start
    formStartTime.current = Date.now();
    trackFormStart(formName, formType);
  }, [formName, formType, trackFormStart]);

  const trackFieldFocus = (fieldName: string) => {
    if (!fieldsInteracted.current.has(fieldName)) {
      fieldsInteracted.current.add(fieldName);
      trackFormFieldFocus(formName, fieldName);
    }
  };

  const trackValidationError = (fieldName: string, errorType: string) => {
    const errorKey = `${fieldName}_${errorType}`;
    if (!validationErrors.current.has(errorKey)) {
      validationErrors.current.add(errorKey);
      trackFormValidationError(formName, fieldName, errorType);
    }
  };

  const trackSubmission = (formData: any) => {
    const timeToComplete = Math.round((Date.now() - formStartTime.current) / 1000);
    
    const enhancedFormData = {
      ...formData,
      type: formType,
      timeToComplete,
      fieldsInteracted: fieldsInteracted.current.size,
      validationErrors: validationErrors.current.size,
    };

    trackFormSubmissionEnhanced(formName, enhancedFormData);
    
    if (onSubmission) {
      onSubmission(enhancedFormData);
    }
  };

  return {
    trackFieldFocus,
    trackValidationError,
    trackSubmission,
  };
};
