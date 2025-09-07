import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";
import sattunLogo from "@/assets/sattuni-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <img 
                src={sattunLogo} 
                alt="Sattuni - Oriental Bowls & More Logo" 
                className="h-32 w-auto drop-shadow-lg"
              />
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.9] tracking-tight">
              <span className="block text-foreground">Von Pita bis Party –</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                wir liefern.
              </span>
            </h1>
            
            {/* Subline */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed font-body">
              Egal ob Alltag oder Event: Bei uns gibt's frische arabische Küche – 
              mal als Lieferung direkt zu dir, mal groß aufgefahren als Catering für dein Team.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <Button 
                variant="hero" 
                size="xl"
                className="min-w-[200px] text-base font-medium shadow-elegant hover:shadow-glow transition-all duration-300"
                onClick={() => window.location.href = '#bestellen'}
              >
                Jetzt bestellen
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="min-w-[200px] text-base font-medium border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.location.href = '/catering'}
              >
                Catering anfragen
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8 text-sm font-body">
              <div className="flex items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border/50">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-muted-foreground">Frisch zubereitet</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border/50">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse delay-500"></span>
                <span className="text-muted-foreground">30-45 Min Lieferung</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border/50">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-1000"></span>
                <span className="text-muted-foreground">Event-Catering</span>
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