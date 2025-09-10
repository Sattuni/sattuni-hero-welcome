import { useEffect } from 'react';
import { useMobileDetection } from '@/hooks/useMobileDetection';

const ChatbotPositioner = () => {
  const isMobile = useMobileDetection();

  useEffect(() => {
    if (!isMobile) return;

    const adjustChatbotPosition = () => {
      // Find the mobile CTA bar
      const mobileCTABar = document.querySelector('[class*="z-50"]');
      const isCTAVisible = mobileCTABar && getComputedStyle(mobileCTABar).transform !== 'translateY(100%)';
      
      // Find all possible chatbot elements
      const chatbotSelectors = [
        'div[id*="jfChatbot"]',
        'iframe[src*="jotfor.ms"]',
        'div[style*="position: fixed"]',
        '[class*="chatbot"]',
        '[id*="chatbot"]'
      ];
      
      chatbotSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element: Element) => {
          const htmlElement = element as HTMLElement;
          if (htmlElement && htmlElement.style.position === 'fixed') {
            if (isCTAVisible) {
              // Position on left side when CTA is visible
              htmlElement.style.setProperty('left', '16px', 'important');
              htmlElement.style.setProperty('right', 'auto', 'important');
              htmlElement.style.setProperty('bottom', '20px', 'important');
            } else {
              // Default position
              htmlElement.style.setProperty('right', '16px', 'important');
              htmlElement.style.setProperty('left', 'auto', 'important');
              htmlElement.style.setProperty('bottom', '20px', 'important');
            }
            htmlElement.style.setProperty('z-index', '60', 'important');
            htmlElement.style.setProperty('width', '56px', 'important');
            htmlElement.style.setProperty('height', '56px', 'important');
          }
        });
      });
    };

    // Initial adjustment
    adjustChatbotPosition();

    // Set up observer for CTA bar changes
    const observer = new MutationObserver(adjustChatbotPosition);
    
    // Watch for DOM changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    // Also adjust on scroll and resize
    const handleAdjustment = () => {
      setTimeout(adjustChatbotPosition, 100);
    };
    
    window.addEventListener('scroll', handleAdjustment);
    window.addEventListener('resize', handleAdjustment);
    
    // Periodic check for newly loaded chatbot
    const interval = setInterval(adjustChatbotPosition, 1000);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleAdjustment);
      window.removeEventListener('resize', handleAdjustment);
      clearInterval(interval);
    };
  }, [isMobile]);

  return null;
};

export default ChatbotPositioner;