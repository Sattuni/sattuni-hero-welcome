import { ClipboardList, Mail, UtensilsCrossed } from "lucide-react";
import { useMobileDetection } from "@/hooks/useMobileDetection";

const HowItWorks = () => {
  const isMobile = useMobileDetection();

  const steps = [
    {
      icon: ClipboardList,
      step: "1",
      title: "Anfragen oder Bestellen",
      description: "Wähle: Heute bestellen oder Catering planen."
    },
    {
      icon: Mail,
      step: "2", 
      title: "Angebot & Bestätigung",
      description: "Wir bestätigen oder schicken dir dein Angebot."
    },
    {
      icon: UtensilsCrossed,
      step: "3",
      title: "Genießen",
      description: "Frisch gekocht, pünktlich geliefert."
    }
  ];

  return (
    <section className="py-6 md:py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12 space-y-1 md:space-y-4">
          <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-foreground">
            So funktioniert's
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Ob Bestellung oder Catering – in drei Schritten.
          </p>
        </div>

        {/* Steps - Horizontal on mobile */}
        <div className={`${isMobile ? 'flex gap-3' : 'grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12'}`}>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className={`group text-center space-y-3 md:space-y-6 relative ${isMobile ? 'flex-1' : ''}`}
              >
                {/* Connection Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-transparent opacity-30 z-0"></div>
                )}
                
                {/* Step Number & Icon */}
                <div className="relative z-10 flex flex-col items-center space-y-2 md:space-y-4">
                  <div className={`${isMobile ? 'w-12 h-12' : 'w-20 h-20'} bg-primary rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-elegant`}>
                    <IconComponent className={`${isMobile ? 'w-6 h-6' : 'w-10 h-10'} text-white`} />
                  </div>
                  
                  <div className="inline-flex items-center px-2.5 py-1 md:px-4 md:py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border/50">
                    <span className="text-xs md:text-sm font-semibold text-foreground font-body">
                      Schritt {step.step}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-1 md:space-y-3">
                  <h3 className={`${isMobile ? 'text-sm' : 'text-2xl'} font-display font-bold text-foreground`}>
                    {step.title}
                  </h3>
                  <p className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-lg'} leading-relaxed max-w-sm mx-auto font-body`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
