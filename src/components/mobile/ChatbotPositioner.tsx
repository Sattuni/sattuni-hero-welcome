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
      console.log('🔍 Searching for ALL fixed positioned elements...');
      
      // Find ALL elements on the page
      const allElements = document.querySelectorAll('*');
      let fixedElements: HTMLElement[] = [];
      
      // Check each element for fixed positioning
      allElements.forEach((element: Element) => {
        const htmlElement = element as HTMLElement;
        const computedStyle = getComputedStyle(htmlElement);
        
        if (computedStyle.position === 'fixed' && 
            computedStyle.display !== 'none' &&
            htmlElement.offsetWidth > 0 && 
            htmlElement.offsetHeight > 0) {
          
          fixedElements.push(htmlElement);
          
          console.log('🎯 Found fixed element:', {
            tagName: htmlElement.tagName,
            id: htmlElement.id,
            className: htmlElement.className,
            src: htmlElement.getAttribute('src'),
            textContent: htmlElement.textContent?.substring(0, 50),
            dimensions: `${htmlElement.offsetWidth}x${htmlElement.offsetHeight}`,
            position: `${computedStyle.left}, ${computedStyle.top}, ${computedStyle.right}, ${computedStyle.bottom}`,
            zIndex: computedStyle.zIndex
          });
        }
      });
      
      console.log(`📊 Total fixed elements found: ${fixedElements.length}`);
      
      // Look for likely chatbot elements
      const chatbotElements = fixedElements.filter(element => {
        const elementStyle = getComputedStyle(element);
        const hasJotformSrc = element.tagName === 'IFRAME' && element.getAttribute('src')?.includes('jotfor');
        const hasChatbotId = element.id?.toLowerCase().includes('chatbot') || element.id?.toLowerCase().includes('jf');
        const hasChatbotClass = element.className?.toLowerCase().includes('chatbot') || 
                                element.className?.toLowerCase().includes('jf') ||
                                element.className?.toLowerCase().includes('embedded-agent-container') ||
                                element.className?.toLowerCase().includes('agent-container');
        const isSmallSquare = element.offsetWidth < 100 && element.offsetHeight < 100 && element.offsetWidth === element.offsetHeight;
        const isBottomRight = elementStyle.right !== 'auto' || elementStyle.bottom !== 'auto';
        const hasHighZIndex = parseInt(elementStyle.zIndex) > 1000;
        
        return hasJotformSrc || hasChatbotId || hasChatbotClass || (isSmallSquare && isBottomRight) || hasHighZIndex;
      });
      
      console.log(`🤖 Potential chatbot elements: ${chatbotElements.length}`);
      
      chatbotElements.forEach((htmlElement, index) => {
        console.log(`✅ Processing chatbot element ${index + 1}:`, htmlElement);
        
        // Apply saved position
        htmlElement.style.setProperty('left', `${chatbotPosition.x}px`, 'important');
        htmlElement.style.setProperty('right', 'auto', 'important');
        htmlElement.style.setProperty('bottom', `${chatbotPosition.y}px`, 'important');
        htmlElement.style.setProperty('z-index', '60', 'important');
        htmlElement.style.setProperty('cursor', 'grab', 'important');
        htmlElement.style.setProperty('transition', isDragging ? 'none' : 'all 0.3s ease', 'important');
        htmlElement.style.setProperty('touch-action', 'none', 'important');
        
        // Define drag functionality with improved state management
        const handleTouchStart = (e: TouchEvent) => {
          console.log('👆 Touch start on chatbot');
          e.preventDefault();
          e.stopPropagation();
          
          setIsDragging(true);
          htmlElement.style.setProperty('cursor', 'grabbing', 'important');
          htmlElement.style.setProperty('transition', 'none', 'important');
          
          const touch = e.touches[0];
          const rect = htmlElement.getBoundingClientRect();
          setDragStart({
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top
          });
        };

        const handleTouchMove = (e: TouchEvent) => {
          e.preventDefault();
          e.stopPropagation();
          
          console.log('👆 Touch move - isDragging:', isDragging);
          
          const touch = e.touches[0];
          const newX = touch.clientX - dragStart.x;
          const newY = touch.clientY - dragStart.y;
          
          // Keep within screen boundaries
          const boundedX = Math.max(0, Math.min(newX, window.innerWidth - htmlElement.offsetWidth));
          const boundedY = Math.max(0, Math.min(newY, window.innerHeight - htmlElement.offsetHeight));
          
          // Update position immediately without state
          htmlElement.style.setProperty('left', `${boundedX}px`, 'important');
          htmlElement.style.setProperty('top', `${boundedY}px`, 'important');
          htmlElement.style.setProperty('right', 'auto', 'important');
          htmlElement.style.setProperty('bottom', 'auto', 'important');
          
          console.log(`📍 Moving to: ${boundedX}, ${boundedY}`);
        };

        const handleTouchEnd = (e: TouchEvent) => {
          console.log('👆 Touch end');
          e.preventDefault();
          e.stopPropagation();
          
          setIsDragging(false);
          htmlElement.style.setProperty('cursor', 'grab', 'important');
          htmlElement.style.setProperty('transition', 'all 0.3s ease', 'important');
          
          // Save final position to localStorage
          const rect = htmlElement.getBoundingClientRect();
          const finalPosition = {
            x: rect.left,
            y: rect.top
          };
          localStorage.setItem('chatbot-position', JSON.stringify(finalPosition));
          setChatbotPosition(finalPosition);
          
          console.log('💾 Saved final position:', finalPosition);
          
          // Re-attach event listeners to ensure they persist
          setTimeout(() => {
            console.log('🔄 Re-attaching event listeners');
            htmlElement.addEventListener('touchstart', handleTouchStart, { passive: false });
            htmlElement.addEventListener('touchmove', handleTouchMove, { passive: false });
            htmlElement.addEventListener('touchend', handleTouchEnd, { passive: false });
          }, 100);
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
        
        console.log('🎯 Drag events attached to element');
      });
      
      if (chatbotElements.length === 0) {
        console.log('❌ No potential chatbot elements found in fixed elements');
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