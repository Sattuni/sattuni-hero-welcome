import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, PartyPopper } from "lucide-react";

const Services = () => {
  return (
    <section className="py-8 md:py-16 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Lieferservice Card */}
          <Card className="group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/90 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-4 md:p-8 space-y-4 md:space-y-6 relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-2xl"></div>
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-elegant">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    Heute keine Lust zu kochen?
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-body">
                    Frisch gebackenes Pita, cremiger Hummus und bunte Bowls – 
                    bringen wir dir nach Hause oder ins Büro. Einfach lecker!
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full sm:w-auto group-hover:shadow-glow transition-all duration-300 font-medium"
                  onClick={() => window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank')}
                >
                  Jetzt bestellen
                </Button>
              </div>
              
              {/* Service highlights */}
              <div className="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-3 pt-3 md:pt-4 text-xs md:text-sm font-body">
                {[
                  "Frisch zubereitet",
                  "30-45 Min Lieferung", 
                  "Oriental Bowls",
                  "Hausgemacht"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Catering Card */}
          <Card className="group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-accent/30 bg-card/90 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-4 md:p-8 space-y-4 md:space-y-6 relative">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl"></div>
              
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft">
                  <PartyPopper className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    Catering, das rockt
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-body">
                    Ob 20 oder 200 Gäste – wir kümmern uns um alles. Fingerfood, Buffets, 
                    vegane Optionen. Dein Event wird unvergesslich lecker!
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 font-medium border-2"
                  onClick={() => {
                    window.location.href = '/catering?scrollTo=contact';
                  }}
                >
                  Catering anfragen
                </Button>
              </div>
              
              {/* Service highlights */}
              <div className="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-3 pt-3 md:pt-4 text-xs md:text-sm font-body">
                {[
                  "Ganz wie du's magst",
                  "100+ Caterings geschmackvoll geliefert",
                  "Wir kümmern uns um alles", 
                  "20-300+ Personen"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
};

export default Services;