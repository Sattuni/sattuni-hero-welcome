/**
 * Utility functions for scroll behavior
 */

/**
 * Scroll to top of the page
 */
export const scrollToTop = (behavior: 'instant' | 'smooth' = 'instant') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior
  });
};

/**
 * Scroll to a specific element by ID
 */
export const scrollToElement = (elementId: string, behavior: 'instant' | 'smooth' = 'smooth') => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ 
      behavior, 
      block: 'start' 
    });
  }
};

/**
 * Scroll to top with a small delay to ensure DOM is ready
 */
export const scrollToTopDelayed = (delay: number = 0) => {
  setTimeout(() => {
    requestAnimationFrame(() => {
      scrollToTop('instant');
    });
  }, delay);
};

/**
 * Check if user is at the top of the page
 */
export const isAtTop = (threshold: number = 10): boolean => {
  return window.pageYOffset <= threshold;
};

/**
 * Get current scroll position
 */
export const getScrollPosition = (): number => {
  return window.pageYOffset || document.documentElement.scrollTop;
};
