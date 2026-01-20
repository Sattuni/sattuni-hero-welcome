import heroImage from "@/assets/hero-food.jpg";
import sattunLogo from "@/assets/icons/sattuni-header-icon.png";
import SmartCTA from "@/components/mobile/SmartCTA";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useMobileDetection } from "@/hooks/useMobileDetection";
import { Star, Timer, Truck, Utensils } from "lucide-react";

const RestaurantHero = () => {
  const { scrollY } = useScrollPosition();
  const isMobile = useMobileDetection();
  
  return (
    <section 
      className="relative min-h-[35vh] md:min-h-[50vh] flex items-start overflow-hidden"
      itemScope
      itemType="https://schema.org/Restaurant"
      role="banner"
      aria-label="Sattuni Restaurant & Lieferservice"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: isMobile ? 'none' : `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img 
          src={heroImage} 
          alt="Authentische arabische Küche - Frische Pita, hausgemachter Hummus von Sattuni in Düsseldorf" 
          className="w-full h-full object-cover"
          width="1920"
          height="800"
          loading="eager"
          fetchPriority="high"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-4 md:py-6">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <div className="space-y-2 md:space-y-3">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-2 md:mb-3">
              <img 
                src={sattunLogo} 
                alt="Sattuni Logo - Oriental Bowls & More - Arabische Küche Düsseldorf" 
                className="h-12 md:h-16 lg:h-20 w-auto drop-shadow-lg"
                width="200"
                height="80"
                loading="eager"
                itemProp="logo"
              />
            </div>
            
            {/* Headline */}
            <h1 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display font-bold leading-tight tracking-tight"
              itemProp="name"
            >
              <span className="md:hidden">Arabische Küche in Düsseldorf</span>
              <span className="hidden md:inline">Sattuni – Arabische Küche & Lieferservice in Düsseldorf</span>
            </h1>
            
            {/* Subline */}
            <p 
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed font-body"
              itemProp="description"
            >
              <span className="md:hidden">Hausgemacht, frisch & authentisch</span>
              <span className="hidden md:inline">Lust auf authentisch arabisches Essen? Hausgemacht, frisch und mit Liebe zubereitet – 
              direkt zu dir nach Hause oder ins Büro geliefert.</span>
            </p>
            
            {/* Urgency Badge */}
            <div className="flex justify-center lg:justify-start mb-1 md:mb-2">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full" aria-hidden="true"></span>
                <span className="text-xs md:text-sm font-medium text-primary">Heute bestellt, heute geliefert!</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center lg:justify-start pt-1 md:pt-2">
              <SmartCTA 
                variant="hero" 
                size="xl"
                className="min-w-[200px] text-base font-bold shadow-elegant hover:shadow-glow transition-all duration-300 relative overflow-hidden"
                showTimeContext={true}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Utensils className="w-4 h-4" />
                  Jetzt bestellen
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </SmartCTA>
            </div>

            {/* Trust Signal */}
            <div className="flex justify-center lg:justify-start pt-2 md:pt-3">
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-xs md:text-sm">
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-500">
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                  </div>
                  <span className="font-medium text-foreground ml-1">4.9/5</span>
                  <span className="text-muted-foreground text-xs hidden md:inline">bei Google</span>
                </div>
                <span className="text-muted-foreground hidden md:inline">|</span>
                <span className="text-muted-foreground text-center">Seit 2022 am Start • 127+ zufriedene Bewertungen</span>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center lg:justify-start pt-3 md:pt-6 text-xs font-body">
              <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-card/90 backdrop-blur-sm rounded-full border border-border/50">
                <Utensils className="w-3 h-3"/>
                <span className="text-foreground font-medium">Frisch</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-card/90 backdrop-blur-sm rounded-full border border-border/50">
                <Timer className="w-3 h-3"/>
                <span className="text-foreground font-medium">30-45 Min</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-card/90 backdrop-blur-sm rounded-full border border-border/50">
                <Truck className="w-3 h-3"/>
                <span className="text-foreground font-medium">Lieferservice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-warm rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-accent/30 rounded-full opacity-30 blur-2xl animate-pulse delay-1000"></div>
      
      {/* Geometric Pattern Elements */}
      <div className="absolute top-1/4 right-5 w-16 h-16 opacity-5">
        <div className="w-full h-full bg-primary transform rotate-45 rounded-lg"></div>
      </div>
      <div className="absolute bottom-1/3 left-5 w-12 h-12 opacity-5">
        <div className="w-full h-full border-2 border-accent transform rotate-12 rounded-full"></div>
      </div>
    </section>
  );
};

export default RestaurantHero;
