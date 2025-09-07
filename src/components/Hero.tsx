import { Button } from "@/components/ui/button";
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
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4">
              <Button 
                variant="hero" 
                size="lg"
                className="min-w-[180px] text-sm font-medium shadow-elegant hover:shadow-glow transition-all duration-300"
                onClick={() => window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank')}
              >
                Jetzt bestellen
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="min-w-[180px] text-sm font-medium border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => {
                  window.location.href = '/catering?scrollTo=contact';
                }}
              >
                Catering anfragen
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6 text-xs font-body">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-full border border-border/50">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                <span className="text-foreground font-medium">Frisch zubereitet</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-full border border-border/50">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-500"></span>
                <span className="text-foreground font-medium">30-45 Min Lieferung</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-full border border-border/50">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-1000"></span>
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