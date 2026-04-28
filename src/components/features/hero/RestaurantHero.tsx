import heroImage from "@/assets/hero-food.jpg";
import sattunLogo from "@/assets/icons/sattuni-header-icon.png";
import SmartCTA from "@/components/mobile/SmartCTA";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useMobileDetection } from "@/hooks/useMobileDetection";
import { Star, Utensils } from "lucide-react";

const RestaurantHero = () => {
  const { scrollY } = useScrollPosition();
  const isMobile = useMobileDetection();
  
  return (
    <section 
      className="relative min-h-[28vh] md:min-h-[45vh] flex items-center overflow-hidden"
      itemScope
      itemType="https://schema.org/Restaurant"
      role="banner"
      aria-label="Sattuni Restaurant & Lieferservice"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: isMobile ? 'none' : `translateY(${scrollY * 0.5}px)` }}
      >
        <img 
          src={heroImage} 
          alt="Frische Pita, hausgemachter Hummus von Sattuni" 
          className="w-full h-full object-cover"
          width="1920"
          height="800"
          loading="eager"
          fetchPriority="high"
          itemProp="image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-6 md:py-8">
        <div className="max-w-3xl mx-auto text-center lg:text-left">
          <div className="space-y-3">
            {/* Schließungsmitteilung */}
            <div className="p-3 md:p-4 bg-destructive/10 border border-destructive/30 rounded-lg max-w-2xl mx-auto lg:mx-0">
              <p className="text-sm md:text-base font-semibold text-destructive">
                📅 Geschlossen bis 03.05.2026
              </p>
              <p className="text-xs md:text-sm text-destructive/80 mt-1">
                Ab dem 04.05. sind wir wieder da.
              </p>
            </div>

            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src={sattunLogo} 
                alt="Sattuni Logo" 
                className="h-10 md:h-16 w-auto drop-shadow-lg"
                width="200"
                height="80"
                loading="eager"
                itemProp="logo"
              />
            </div>
            
            {/* Headline */}
            <h1 className="text-xl md:text-3xl lg:text-4xl font-display font-bold leading-tight" itemProp="name">
              <span className="md:hidden">Arabisch essen in Düsseldorf</span>
              <span className="hidden md:inline">Sattuni – Arabische Küche in Düsseldorf</span>
            </h1>
            
            {/* Subline */}
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0" itemProp="description">
              <span className="md:hidden">Frisch gemacht, schnell geliefert</span>
              <span className="hidden md:inline">Frisch zubereitet und direkt geliefert – nach Hause oder ins Büro.</span>
            </p>
            
            {/* Delivery Badge + CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <SmartCTA 
                variant="hero" 
                size="lg"
                className="min-w-[180px] font-bold shadow-elegant"
                showTimeContext={true}
              >
                <span className="flex items-center gap-2">
                  <Utensils className="w-4 h-4" />
                  Jetzt bestellen
                </span>
              </SmartCTA>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/15 rounded-full border border-primary/20">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span className="text-xs font-medium text-primary">In 30-45 Min bei dir</span>
              </div>
            </div>

            {/* Trust */}
            <div className="flex justify-center lg:justify-start pt-1">
              <div className="flex items-center gap-2 text-xs">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-foreground">4.9/5</span>
                <span className="text-muted-foreground">• Seit 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantHero;
