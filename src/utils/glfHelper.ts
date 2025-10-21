/**
 * GLF Widget Helper
 * Utility functions for triggering the GLF foodbooking widget
 */

export const GLF_CONFIG = {
  cuid: '34d14a10-f27f-4ca4-9379-a56fdb3bec53',
  ruid: 'a1654ea9-73ac-4738-ac58-ca16dc332c65',
  fallbackUrl: 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F'
};

/**
 * Trigger the GLF widget programmatically
 * Falls back to direct link if widget is not available
 */
export const triggerGLFWidget = () => {
  // Check if GLF widget is loaded
  const glfButton = document.querySelector('[data-glf-cuid]');
  
  if (glfButton) {
    // GLF widget is available, trigger it
    (glfButton as HTMLElement).click();
  } else {
    // Fallback: Open direct link
    console.warn('GLF Widget not loaded, using fallback URL');
    window.open(GLF_CONFIG.fallbackUrl, '_blank');
  }
};

/**
 * Check if GLF widget is loaded and ready
 */
export const isGLFWidgetReady = (): boolean => {
  return !!document.querySelector('[data-glf-cuid]');
};
