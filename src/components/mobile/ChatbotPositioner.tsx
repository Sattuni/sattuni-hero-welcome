import { useEffect, useState } from 'react';
import { useMobileDetection } from '@/hooks/useMobileDetection';

const ChatbotPositioner = () => {
  const isMobile = useMobileDetection();
  const [chatbotPosition, setChatbotPosition] = useState({ x: 16, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isMobile) return;

    // Load saved position from localStorage
    const savedPosition = localStorage.getItem('chatbot-position');
    if (savedPosition) {
      setChatbotPosition(JSON.parse(savedPosition));
    }

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
            // Apply saved position
            htmlElement.style.setProperty('left', `${chatbotPosition.x}px`, 'important');
            htmlElement.style.setProperty('right', 'auto', 'important');
            htmlElement.style.setProperty('bottom', `${chatbotPosition.y}px`, 'important');
            htmlElement.style.setProperty('z-index', '60', 'important');
            htmlElement.style.setProperty('width', '56px', 'important');
            htmlElement.style.setProperty('height', '56px', 'important');
            htmlElement.style.setProperty('cursor', 'grab', 'important');
            htmlElement.style.setProperty('transition', isDragging ? 'none' : 'all 0.3s ease', 'important');
            
            // Add drag functionality
            const handleTouchStart = (e: TouchEvent) => {
              setIsDragging(true);
              htmlElement.style.setProperty('cursor', 'grabbing', 'important');
              const touch = e.touches[0];
              setDragStart({
                x: touch.clientX - chatbotPosition.x,
                y: window.innerHeight - touch.clientY - chatbotPosition.y
              });
              e.preventDefault();
            };

            const handleTouchMove = (e: TouchEvent) => {
              if (!isDragging) return;
              
              const touch = e.touches[0];
              const newX = touch.clientX - dragStart.x;
              const newY = window.innerHeight - touch.clientY - dragStart.y;
              
              // Keep within screen boundaries
              const boundedX = Math.max(0, Math.min(newX, window.innerWidth - 56));
              const boundedY = Math.max(0, Math.min(newY, window.innerHeight - 56));
              
              setChatbotPosition({ x: boundedX, y: boundedY });
              htmlElement.style.setProperty('left', `${boundedX}px`, 'important');
              htmlElement.style.setProperty('bottom', `${boundedY}px`, 'important');
              
              e.preventDefault();
            };

            const handleTouchEnd = (e: TouchEvent) => {
              setIsDragging(false);
              htmlElement.style.setProperty('cursor', 'grab', 'important');
              
              // Save position to localStorage
              localStorage.setItem('chatbot-position', JSON.stringify(chatbotPosition));
              
              e.preventDefault();
            };

            // Remove existing listeners
            htmlElement.removeEventListener('touchstart', handleTouchStart);
            htmlElement.removeEventListener('touchmove', handleTouchMove);
            htmlElement.removeEventListener('touchend', handleTouchEnd);
            
            // Add new listeners
            htmlElement.addEventListener('touchstart', handleTouchStart, { passive: false });
            htmlElement.addEventListener('touchmove', handleTouchMove, { passive: false });
            htmlElement.addEventListener('touchend', handleTouchEnd, { passive: false });
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
  }, [isMobile, chatbotPosition, isDragging, dragStart]);

  return null;
};

export default ChatbotPositioner;