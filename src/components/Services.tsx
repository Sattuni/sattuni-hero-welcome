import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, PartyPopper } from "lucide-react";

const Services = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Lieferservice Card */}
          <Card className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Alltag lecker machen
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Frisch gebackenes Pita, hausgemachte Klassiker und orientalische Bowls – 
                  direkt zu dir nach Hause oder ins Büro geliefert.
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full sm:w-auto group-hover:shadow-warm"
                  onClick={() => window.open('#bestellen', '_self')}
                >
                  Jetzt bestellen
                </Button>
              </div>
              
              {/* Service highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Frisch zubereitet
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  30-45 Min Lieferung
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Orientalische Bowls
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Hausgemacht
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Catering Card */}
          <Card className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-accent/30 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PartyPopper className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Wenn's größer werden darf
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Von Geburtstagsfeier bis Firmenfest: Mit Fingerfood, Buffets und veganen Optionen 
                  machen wir jedes Event besonders.
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="hero-secondary" 
                  size="lg"
                  className="w-full sm:w-auto group-hover:shadow-soft"
                  onClick={() => window.open('#catering', '_self')}
                >
                  Catering anfragen
                </Button>
              </div>
              
              {/* Service highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Individuelle Menüs
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Vegane Optionen
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Komplettservice
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Alle Eventgrößen
                </div>
              </div>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
};

export default Services;