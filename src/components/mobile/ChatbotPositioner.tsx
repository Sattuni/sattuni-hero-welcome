import { useEffect } from 'react';
import { useMobileDetection } from '@/hooks/useMobileDetection';

const ChatbotPositioner = () => {
  const isMobile = useMobileDetection();

  useEffect(() => {
    if (!isMobile) return;

    let chatbotElement: HTMLElement | null = null;
    let showTimer: NodeJS.Timeout | null = null;
    let hideTimer: NodeJS.Timeout | null = null;
    let isVisible = false;
    let hasInteracted = false;

    const showChatbot = () => {
      if (chatbotElement && !isVisible) {
        console.log('🎭 Showing chatbot after 15 seconds');
        chatbotElement.style.setProperty('opacity', '1', 'important');
        chatbotElement.style.setProperty('visibility', 'visible', 'important');
        chatbotElement.style.setProperty('transform', 'translateY(0)', 'important');
        chatbotElement.style.setProperty('transition', 'all 0.5s ease-out', 'important');
        isVisible = true;
        
        // Start 40 second timer to hide if no interaction
        startHideTimer();
      }
    };

    const hideChatbot = () => {
      if (chatbotElement && isVisible && !hasInteracted) {
        console.log('🎭 Hiding chatbot after 40 seconds of inactivity');
        chatbotElement.style.setProperty('opacity', '0', 'important');
        chatbotElement.style.setProperty('visibility', 'hidden', 'important');
        chatbotElement.style.setProperty('transform', 'translateY(20px)', 'important');
        chatbotElement.style.setProperty('transition', 'all 0.5s ease-in', 'important');
        isVisible = false;
      }
    };

    const startShowTimer = () => {
      if (showTimer) clearTimeout(showTimer);
      showTimer = setTimeout(showChatbot, 15000); // 15 seconds
      console.log('⏰ Started 15-second show timer');
    };

    const startHideTimer = () => {
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(hideChatbot, 40000); // 40 seconds
      console.log('⏰ Started 40-second hide timer');
    };

    const resetHideTimer = () => {
      if (hideTimer) {
        clearTimeout(hideTimer);
        startHideTimer();
        console.log('🔄 Reset 40-second hide timer due to interaction');
      }
    };

    const handleInteraction = (e: Event) => {
      console.log('👆 User interacted with chatbot');
      hasInteracted = true;
      
      // Clear hide timer permanently once user interacts
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
        console.log('🔒 Disabled auto-hide after user interaction');
      }
    };

    const handleHover = () => {
      resetHideTimer();
    };

    const setupChatbot = (element: HTMLElement) => {
      console.log('🎯 Setting up chatbot with timing controls');
      chatbotElement = element;
      
      // Initially hide the chatbot
      element.style.setProperty('opacity', '0', 'important');
      element.style.setProperty('visibility', 'hidden', 'important');
      element.style.setProperty('transform', 'translateY(20px)', 'important');
      element.style.setProperty('position', 'fixed', 'important');
      element.style.setProperty('right', '16px', 'important');
      element.style.setProperty('bottom', '100px', 'important');
      element.style.setProperty('z-index', '9999', 'important');
      element.style.setProperty('transition', 'all 0.5s ease-out', 'important');
      
      // Add interaction listeners
      element.addEventListener('click', handleInteraction);
      element.addEventListener('touchstart', handleInteraction);
      element.addEventListener('mouseenter', handleHover);
      
      // Start the show timer
      startShowTimer();
      
      console.log('✅ Chatbot timing setup complete');
    };

    const findAndSetupChatbot = () => {
      console.log('🔍 Looking for chatbot to setup timing...');
      
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
      const chatbot = fixedElements.find(element => {
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
      
      if (chatbot) {
        console.log('✅ Found chatbot for timing setup:', chatbot);
        setupChatbot(chatbot);
        return true;
      } else {
        console.log('❌ No chatbot found for timing setup');
        return false;
      }
    };

    // Initial search with retries
    const startSearch = () => {
      if (findAndSetupChatbot()) return;
      
      // If not found, keep trying
      const retryInterval = setInterval(() => {
        if (findAndSetupChatbot()) {
          clearInterval(retryInterval);
        }
      }, 1000);
      
      // Stop trying after 30 seconds
      setTimeout(() => {
        clearInterval(retryInterval);
      }, 30000);
    };

    // Start search after small delay
    setTimeout(startSearch, 500);

    return () => {
      // Cleanup timers
      if (showTimer) clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
      
      // Remove event listeners
      if (chatbotElement) {
        chatbotElement.removeEventListener('click', handleInteraction);
        chatbotElement.removeEventListener('touchstart', handleInteraction);
        chatbotElement.removeEventListener('mouseenter', handleHover);
      }
    };
  }, [isMobile]);

  return null;
};

export default ChatbotPositioner;
