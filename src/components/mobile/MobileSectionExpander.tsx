import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMobileDetection } from '@/hooks/useMobileDetection';
import { useTranslation } from 'react-i18next';

interface MobileSectionExpanderProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

const MobileSectionExpander = ({ 
  title, 
  icon: Icon, 
  children, 
  defaultExpanded = false, 
  className = "" 
}: MobileSectionExpanderProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const isMobile = useMobileDetection();
  const { t } = useTranslation();
  
  // On desktop, always show content without expansion functionality
  if (!isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`${className}`}>
      {/* Mobile Expansion Button */}
      <div className="md:hidden py-4 px-4 bg-gradient-subtle border-b border-border/30">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="ghost"
          className="w-full justify-between p-4 h-auto text-left bg-card/60 hover:bg-card/80 border border-border/50 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground text-base">
                {title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {isExpanded ? t('mobile.collapse') : t('mobile.expand')}
              </p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </Button>
      </div>

      {/* Content */}
      <div className={`
        md:block transition-all duration-300 ease-in-out overflow-hidden
        ${isExpanded ? 'block animate-fade-in' : 'hidden'}
      `}>
        {children}
      </div>
    </div>
  );
};

export default MobileSectionExpander;