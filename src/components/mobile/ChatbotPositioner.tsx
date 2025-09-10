import { useEffect } from 'react';
import { useMobileDetection } from '@/hooks/useMobileDetection';

const ChatbotPositioner = () => {
  const isMobile = useMobileDetection();

  useEffect(() => {
    if (!isMobile) return;

    let dragData = {
      isDragging: false,
      startX: 0,
      startY: 0,
      initialLeft: 0,
      initialTop: 0,
      currentElement: null as HTMLElement | null
    };

    // Load saved position
    let savedPosition = { x: 16, y: 20 };
    try {
      const saved = localStorage.getItem('chatbot-position');
      if (saved) {
        savedPosition = JSON.parse(saved);
      }
    } catch (e) {
      console.log('Failed to load saved position');
    }

    const makeDraggable = (element: HTMLElement) => {
      console.log('🎯 Making element draggable:', element);
      
      // Apply initial position
      element.style.position = 'fixed';
      element.style.left = `${savedPosition.x}px`;
      element.style.top = `${savedPosition.y}px`;
      element.style.right = 'auto';
      element.style.bottom = 'auto';
      element.style.zIndex = '9999';
      element.style.cursor = 'grab';
      element.style.userSelect = 'none';
      element.style.webkitUserSelect = 'none';
      element.style.touchAction = 'none';

      // Remove existing listeners
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseup', handleMouseUp);

      // Add touch listeners
      element.addEventListener('touchstart', handleTouchStart, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: false });

      // Add mouse listeners for desktop testing
      element.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      console.log('✅ Drag events attached');
    };

    const handleTouchStart = (e: TouchEvent) => {
      console.log('👆 Touch Start');
      const target = e.target as HTMLElement;
      startDrag(e.touches[0].clientX, e.touches[0].clientY, target);
      e.preventDefault();
    };

    const handleMouseDown = (e: MouseEvent) => {
      console.log('🖱️ Mouse Down');
      const target = e.target as HTMLElement;
      startDrag(e.clientX, e.clientY, target);
      e.preventDefault();
    };

    const startDrag = (clientX: number, clientY: number, target: HTMLElement) => {
      dragData.isDragging = true;
      dragData.currentElement = target;
      dragData.startX = clientX;
      dragData.startY = clientY;
      
      const rect = target.getBoundingClientRect();
      dragData.initialLeft = rect.left;
      dragData.initialTop = rect.top;
      
      target.style.cursor = 'grabbing';
      target.style.transition = 'none';
      
      console.log('🚀 Drag started at:', { clientX, clientY, initialLeft: dragData.initialLeft, initialTop: dragData.initialTop });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!dragData.isDragging || !dragData.currentElement) return;
      
      const touch = e.touches[0];
      updatePosition(touch.clientX, touch.clientY);
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!dragData.isDragging || !dragData.currentElement) return;
      
      updatePosition(e.clientX, e.clientY);
      e.preventDefault();
    };

    const updatePosition = (clientX: number, clientY: number) => {
      if (!dragData.currentElement) return;
      
      const deltaX = clientX - dragData.startX;
      const deltaY = clientY - dragData.startY;
      
      let newLeft = dragData.initialLeft + deltaX;
      let newTop = dragData.initialTop + deltaY;
      
      // Boundary constraints
      const maxLeft = window.innerWidth - dragData.currentElement.offsetWidth;
      const maxTop = window.innerHeight - dragData.currentElement.offsetHeight;
      
      newLeft = Math.max(0, Math.min(newLeft, maxLeft));
      newTop = Math.max(0, Math.min(newTop, maxTop));
      
      dragData.currentElement.style.left = `${newLeft}px`;
      dragData.currentElement.style.top = `${newTop}px`;
      
      console.log('📍 Position updated:', { newLeft, newTop });
    };

    const handleTouchEnd = (e: TouchEvent) => {
      console.log('👆 Touch End');
      endDrag();
    };

    const handleMouseUp = (e: MouseEvent) => {
      console.log('🖱️ Mouse Up');
      endDrag();
    };

    const endDrag = () => {
      if (!dragData.isDragging || !dragData.currentElement) return;
      
      dragData.currentElement.style.cursor = 'grab';
      dragData.currentElement.style.transition = 'all 0.2s ease';
      
      // Save position
      const rect = dragData.currentElement.getBoundingClientRect();
      const position = { x: rect.left, y: rect.top };
      localStorage.setItem('chatbot-position', JSON.stringify(position));
      
      console.log('💾 Drag ended, saved position:', position);
      
      dragData.isDragging = false;
      dragData.currentElement = null;
    };

    const findAndProcessChatbot = () => {
      console.log('🔍 Looking for chatbot...');
      
      // Find all fixed elements
      const allElements = document.querySelectorAll('*');
      const fixedElements: HTMLElement[] = [];
      
      allElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const style = getComputedStyle(htmlElement);
        
        if (style.position === 'fixed' && 
            style.display !== 'none' && 
            htmlElement.offsetWidth > 0 && 
            htmlElement.offsetHeight > 0) {
          fixedElements.push(htmlElement);
        }
      });
      
      console.log(`📊 Found ${fixedElements.length} fixed elements`);
      
      // Look for chatbot
      const chatbotElement = fixedElements.find(element => {
        const className = element.className?.toLowerCase() || '';
        const id = element.id?.toLowerCase() || '';
        const zIndex = parseInt(getComputedStyle(element).zIndex) || 0;
        
        return className.includes('embedded-agent-container') || 
               className.includes('chatbot') ||
               className.includes('jf-') ||
               id.includes('chatbot') ||
               id.includes('jf') ||
               zIndex > 9000;
      });
      
      if (chatbotElement) {
        console.log('✅ Found chatbot element:', chatbotElement);
        makeDraggable(chatbotElement);
        return true;
      } else {
        console.log('❌ No chatbot found');
        return false;
      }
    };

    // Initial search
    const initialCheck = () => {
      if (findAndProcessChatbot()) return;
      
      // If not found, keep trying
      const retryInterval = setInterval(() => {
        if (findAndProcessChatbot()) {
          clearInterval(retryInterval);
        }
      }, 1000);
      
      // Stop trying after 30 seconds
      setTimeout(() => {
        clearInterval(retryInterval);
      }, 30000);
    };

    // Start after a small delay
    setTimeout(initialCheck, 500);

    return () => {
      // Cleanup
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMobile]);

  return null;
};

export default ChatbotPositioner;
