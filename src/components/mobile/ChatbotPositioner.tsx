import { useEffect } from 'react';
import { useMobileDetection } from '@/hooks/useMobileDetection';

const ChatbotPositioner = () => {
  const isMobile = useMobileDetection();

  useEffect(() => {
    if (!isMobile) return;

    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;
    let hasUserInteracted = false;

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
      
      let chatbotFound = false;
      
      chatbotSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element: Element) => {
          const htmlElement = element as HTMLElement;
          if (htmlElement && htmlElement.style.position === 'fixed') {
            chatbotFound = true;
            
            // Position chatbot
            if (isCTAVisible) {
              htmlElement.style.setProperty('left', '16px', 'important');
              htmlElement.style.setProperty('right', 'auto', 'important');
              htmlElement.style.setProperty('bottom', '20px', 'important');
            } else {
              htmlElement.style.setProperty('right', '16px', 'important');
              htmlElement.style.setProperty('left', 'auto', 'important');
              htmlElement.style.setProperty('bottom', '20px', 'important');
            }
            htmlElement.style.setProperty('z-index', '60', 'important');
            htmlElement.style.setProperty('width', '56px', 'important');
            htmlElement.style.setProperty('height', '56px', 'important');
            htmlElement.style.setProperty('transition', 'opacity 0.3s ease-in-out', 'important');
            
            // Initially hide the chatbot
            if (!hasUserInteracted && !showTimer && !hideTimer) {
              htmlElement.style.setProperty('opacity', '0', 'important');
              htmlElement.style.setProperty('pointer-events', 'none', 'important');
              
              // Show after 15 seconds
              showTimer = setTimeout(() => {
                console.log('🤖 Showing chatbot after 15 seconds');
                htmlElement.style.setProperty('opacity', '1', 'important');
                htmlElement.style.setProperty('pointer-events', 'auto', 'important');
                
                // Hide after 40 seconds if no interaction
                hideTimer = setTimeout(() => {
                  if (!hasUserInteracted) {
                    console.log('🎭 Hiding chatbot after 40 seconds of inactivity');
                    htmlElement.style.setProperty('opacity', '0', 'important');
                    htmlElement.style.setProperty('pointer-events', 'none', 'important');
                  }
                }, 40000);
              }, 15000);
            }
            
            // Add interaction listeners
            const handleInteraction = () => {
              if (!hasUserInteracted) {
                hasUserInteracted = true;
                console.log('👆 User interacted with chatbot - keeping visible permanently');
                clearTimeout(hideTimer);
                htmlElement.style.setProperty('opacity', '1', 'important');
                htmlElement.style.setProperty('pointer-events', 'auto', 'important');
              }
            };
            
            // Remove existing listeners to avoid duplicates
            htmlElement.removeEventListener('click', handleInteraction);
            htmlElement.removeEventListener('touchstart', handleInteraction);
            htmlElement.removeEventListener('mouseenter', handleInteraction);
            
            // Add fresh listeners
            htmlElement.addEventListener('click', handleInteraction);
            htmlElement.addEventListener('touchstart', handleInteraction);
            htmlElement.addEventListener('mouseenter', handleInteraction);
          }
        });
      });
      
      return chatbotFound;
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
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isMobile]);

  return null;
};

export default ChatbotPositioner;