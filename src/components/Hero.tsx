import { Button } from "@/components/ui/button";
import SmartCTA from "@/components/mobile/SmartCTA";
import LocationPersonalization from "@/components/LocationPersonalization";
import heroImage from "@/assets/hero-food.jpg";
import sattunLogo from "@/assets/sattuni-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-start overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Authentische arabische Küche - Pita, Hummus und Buffet" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-6">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <div className="space-y-3">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-3">
              <img 
                src={sattunLogo} 
                alt="Sattuni - Oriental Bowls & More Logo" 
                className="h-16 lg:h-20 w-auto drop-shadow-lg"
              />
            </div>
            
            {/* Headline */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-display font-bold leading-tight tracking-tight">
              Von Pita bis Party – wir liefern.
            </h1>
            
            {/* Subline */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed font-body">
              Egal ob Alltag oder Event: Bei uns gibt's frische arabische Küche – 
              mal als Lieferung direkt zu dir, mal groß aufgefahren als Catering für dein Team.
            </p>
            
            {/* Urgency Badge */}
            <div className="flex justify-center lg:justify-start mb-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-sm font-medium text-primary">Heute bestellt, heute geliefert!</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <SmartCTA 
                variant="hero" 
                size="xl"
                className="min-w-[200px] text-base font-bold shadow-elegant hover:shadow-glow transition-all duration-300 relative overflow-hidden"
                showTimeContext={true}
              >
                <span className="relative z-10">🍽️ Jetzt bestellen</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </SmartCTA>
              
              <Button 
                variant="hero-secondary" 
                size="lg"
                className="min-w-[180px] text-sm font-medium"
                onClick={() => {
                  window.location.href = '/catering?scrollTo=contact';
                }}
              >
                Catering anfragen
              </Button>
            </div>

            {/* Trust Signal */}
            <div className="flex justify-center lg:justify-start pt-3">
              <div className="flex flex-col sm:flex-row items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="font-medium text-foreground">4.9/5</span>
                  <span className="text-muted-foreground text-xs">bei Google Bewertungen</span>
                </div>
                <span className="text-muted-foreground hidden sm:inline">|</span>
                <span className="text-muted-foreground">Über 1000 zufriedene Kunden</span>
                <span className="text-muted-foreground hidden sm:inline">|</span>
                <span className="text-primary font-medium">Mehr als 100 Caterings erfolgreich beliefert</span>
              </div>
            </div>
            
            {/* Location Personalization */}
            <div className="flex justify-center lg:justify-start pt-2">
              <LocationPersonalization type="delivery" />
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6 text-xs font-body">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-full border border-border/50">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span className="text-foreground font-medium">Frisch zubereitet</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-full border border-border/50">
                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                <span className="text-foreground font-medium">30-45 Min Lieferung</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-full border border-border/50">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span className="text-foreground font-medium">Event-Catering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements - Enhanced Arabic Style */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse"></div>
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

export default Hero;