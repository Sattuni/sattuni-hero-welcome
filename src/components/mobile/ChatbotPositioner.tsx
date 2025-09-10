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
      console.log('🔍 Searching for chatbot elements...');
      
      // Find all possible chatbot elements
      const chatbotSelectors = [
        'div[id*="jfChatbot"]',
        'iframe[src*="jotfor.ms"]', 
        'div[style*="position: fixed"]',
        '[class*="chatbot"]',
        '[id*="chatbot"]',
        // Additional selectors for Jotform chatbots
        'div[data-chatbot]',
        '.jf-chatbot',
        '#jf-chatbot'
      ];
      
      let chatbotFound = false;
      
      chatbotSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        console.log(`🔍 Selector "${selector}" found ${elements.length} elements`);
        
        elements.forEach((element: Element, index: number) => {
          const htmlElement = element as HTMLElement;
          console.log(`📍 Element ${index}:`, {
            tagName: htmlElement.tagName,
            id: htmlElement.id,
            className: htmlElement.className,
            position: getComputedStyle(htmlElement).position,
            display: getComputedStyle(htmlElement).display
          });
          
          // Check if element is actually a chatbot (fixed position and visible)
          const computedStyle = getComputedStyle(htmlElement);
          if (computedStyle.position === 'fixed' && computedStyle.display !== 'none') {
            console.log('✅ Found chatbot element!', htmlElement);
            chatbotFound = true;
            
            // Apply saved position
            htmlElement.style.setProperty('left', `${chatbotPosition.x}px`, 'important');
            htmlElement.style.setProperty('right', 'auto', 'important');
            htmlElement.style.setProperty('bottom', `${chatbotPosition.y}px`, 'important');
            htmlElement.style.setProperty('z-index', '60', 'important');
            htmlElement.style.setProperty('width', '56px', 'important');
            htmlElement.style.setProperty('height', '56px', 'important');
            htmlElement.style.setProperty('cursor', 'grab', 'important');
            htmlElement.style.setProperty('transition', isDragging ? 'none' : 'all 0.3s ease', 'important');
            htmlElement.style.setProperty('touch-action', 'none', 'important');
            
            // Define drag functionality
            const handleTouchStart = (e: TouchEvent) => {
              console.log('👆 Touch start on chatbot');
              setIsDragging(true);
              htmlElement.style.setProperty('cursor', 'grabbing', 'important');
              const touch = e.touches[0];
              setDragStart({
                x: touch.clientX - chatbotPosition.x,
                y: window.innerHeight - touch.clientY - chatbotPosition.y
              });
              e.preventDefault();
              e.stopPropagation();
            };

            const handleTouchMove = (e: TouchEvent) => {
              if (!isDragging) return;
              console.log('👆 Touch move');
              
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
              e.stopPropagation();
            };

            const handleTouchEnd = (e: TouchEvent) => {
              console.log('👆 Touch end');
              setIsDragging(false);
              htmlElement.style.setProperty('cursor', 'grab', 'important');
              
              // Save position to localStorage
              localStorage.setItem('chatbot-position', JSON.stringify(chatbotPosition));
              console.log('💾 Saved position:', chatbotPosition);
              
              e.preventDefault();
              e.stopPropagation();
            };
            
            // Remove existing listeners (if any)
            const existingStartHandler = (htmlElement as any)._touchStartHandler;
            const existingMoveHandler = (htmlElement as any)._touchMoveHandler;
            const existingEndHandler = (htmlElement as any)._touchEndHandler;
            
            if (existingStartHandler) {
              htmlElement.removeEventListener('touchstart', existingStartHandler);
            }
            if (existingMoveHandler) {
              htmlElement.removeEventListener('touchmove', existingMoveHandler);
            }
            if (existingEndHandler) {
              htmlElement.removeEventListener('touchend', existingEndHandler);
            }
            
            // Store handlers on element for future removal
            (htmlElement as any)._touchStartHandler = handleTouchStart;
            (htmlElement as any)._touchMoveHandler = handleTouchMove;
            (htmlElement as any)._touchEndHandler = handleTouchEnd;
            
            // Add new listeners with passive: false for preventDefault to work
            htmlElement.addEventListener('touchstart', handleTouchStart, { passive: false });
            htmlElement.addEventListener('touchmove', handleTouchMove, { passive: false });
            htmlElement.addEventListener('touchend', handleTouchEnd, { passive: false });
            
            console.log('🎯 Drag events attached to chatbot');
          }
        });
      });
      
      if (!chatbotFound) {
        console.log('❌ No chatbot elements found');
      }
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