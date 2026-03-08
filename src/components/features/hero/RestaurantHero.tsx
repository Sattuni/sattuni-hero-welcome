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
      className="relative min-h-[30vh] md:min-h-[50vh] flex items-start overflow-hidden"
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
                alt="Sattuni Logo" 
                className="h-10 md:h-16 lg:h-20 w-auto drop-shadow-lg"
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
              <span className="md:hidden">Arabisch essen in Düsseldorf</span>
              <span className="hidden md:inline">Sattuni – Arabische Küche in Düsseldorf</span>
            </h1>
            
            {/* Subline */}
            <p 
              className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed font-body"
              itemProp="description"
            >
              <span className="md:hidden">Frisch gemacht, schnell geliefert</span>
              <span className="hidden md:inline">Hunger? Wir machen alles frisch und bringen's dir – nach Hause oder ins Büro.</span>
            </p>
            
            {/* Urgency Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" aria-hidden="true"></span>
                <span className="text-xs md:text-sm font-medium text-primary">In 30-45 Min bei dir</span>
              </div>
            </div>

            {/* Single CTA */}
            <div className="flex justify-center lg:justify-start pt-1 md:pt-2">
              <SmartCTA 
                variant="hero" 
                size="xl"
                className="min-w-[200px] text-base font-bold shadow-elegant hover:shadow-glow transition-all duration-300"
                showTimeContext={true}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Utensils className="w-4 h-4" />
                  Jetzt bestellen
                </span>
              </SmartCTA>
            </div>

            {/* Trust Signal - Single line on mobile */}
            <div className="flex justify-center lg:justify-start pt-2">
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-foreground">4.9/5</span>
                <span className="text-muted-foreground">• Seit 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements - Hidden on mobile for cleaner look */}
      <div className="hidden md:block">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-warm rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-24 h-24 bg-accent/30 rounded-full opacity-30 blur-2xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default RestaurantHero;
