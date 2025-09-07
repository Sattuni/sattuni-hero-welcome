import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

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
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Von Pita bis Party –</span>
              <span className="block bg-gradient-warm bg-clip-text text-transparent">
                wir liefern.
              </span>
            </h1>
            
            {/* Subline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Egal ob Alltag oder Event: Bei uns gibt's frische arabische Küche – 
              mal als Lieferung direkt zu dir, mal groß aufgefahren als Catering für dein Team.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-8">
              <Button 
                variant="hero" 
                size="xl"
                className="min-w-[220px]"
                onClick={() => window.open('#bestellen', '_self')}
              >
                🍽️ Jetzt bestellen
              </Button>
              
              <Button 
                variant="hero-secondary" 
                size="xl"
                className="min-w-[220px]"
                onClick={() => window.open('#catering', '_self')}
              >
                🎉 Catering anfragen
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Frisch zubereitet
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Schnelle Lieferung
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Event-Catering
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-warm rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-accent/30 rounded-full opacity-40 blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;