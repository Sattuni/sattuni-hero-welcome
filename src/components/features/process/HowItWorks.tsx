import { ClipboardList, Mail, UtensilsCrossed } from "lucide-react";
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = t('howItWorks.steps', { returnObjects: true }) as Array<{
    step: string;
    title: string;
    description: string;
  }>;

  const icons = [ClipboardList, Mail, UtensilsCrossed];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = icons[index];
            return (
              <div 
                key={index}
                className="group text-center space-y-6 relative"
              >
                {/* Connection Line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-transparent opacity-30 z-0"></div>
                )}
                
                {/* Step Number & Icon */}
                <div className="relative z-10 flex flex-col items-center space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-elegant">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border/50">
                    <span className="text-sm font-semibold text-foreground font-body">
                      {step.step}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mx-auto font-body">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 shadow-elegant">
            <span className="text-lg font-medium text-foreground font-display">
              {t('howItWorks.cta')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;