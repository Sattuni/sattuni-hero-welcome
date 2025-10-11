import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PartyPopper, Utensils } from "lucide-react";

const Services = () => {
  return (
    <section className="py-6 md:py-12 px-3 md:px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-stretch">
          
          {/* Lieferservice Card */}
          <Card className="group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/90 backdrop-blur-sm overflow-hidden h-full flex flex-col">
            <CardContent className="p-5 md:p-8 space-y-3 md:space-y-6 relative flex-1 flex flex-col">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-5 rounded-full blur-2xl"></div>
              
              <div className="flex-1">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-elegant flex-shrink-0">
                    <Utensils className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg md:text-2xl font-display font-bold text-foreground mb-2 md:mb-3">
                      Lieferservice
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-body">
                      Frisch gebackenes Pita, cremiger Hummus und bunte Bowls – 
                      bringen wir dir nach Hause oder ins Büro.
                    </p>
                  </div>
                </div>
                
                {/* Service highlights - Hidden on small mobile, shown on larger screens */}
                <div className="hidden sm:grid grid-cols-2 gap-2 md:gap-3 pt-3 md:pt-4 text-xs md:text-sm font-body">
                  {[
                    "Frisch zubereitet",
                    "30-45 Min Lieferung", 
                    "Oriental Bowls",
                    "Hausgemacht"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      <span className="text-foreground/80 text-xs md:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-2 md:pt-4 mt-auto">
                <Button 
                  variant="hero" 
                  size="default"
                  className="w-full md:w-auto group-hover:shadow-glow transition-all duration-300 font-medium text-sm md:text-base"
                  onClick={() => window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank')}
                >
                  Jetzt bestellen
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Catering Card */}
          <Card className="group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-accent/30 bg-card/90 backdrop-blur-sm overflow-hidden h-full flex flex-col">
            <CardContent className="p-5 md:p-8 space-y-3 md:space-y-6 relative flex-1 flex flex-col">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl"></div>
              
              <div className="flex-1">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft flex-shrink-0">
                    <PartyPopper className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg md:text-2xl font-display font-bold text-foreground mb-2 md:mb-3">
                      Catering für Events
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-body">
                      Catering ab 20 Personen – wir kümmern uns um alles. Fingerfood, Buffets, 
                      vegane Optionen.
                    </p>
                  </div>
                </div>
                
                {/* Service highlights - Hidden on small mobile, shown on larger screens */}
                <div className="hidden sm:grid grid-cols-2 gap-2 md:gap-3 pt-3 md:pt-4 text-xs md:text-sm font-body">
                  {[
                    "Ganz wie du's magst",
                    "100+ Caterings",
                    "Komplettservice", 
                    "Ab 20 Personen"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                      <span className="text-foreground/80 text-xs md:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-2 md:pt-4 mt-auto">
                <Button 
                  variant="outline" 
                  size="default"
                  className="w-full md:w-auto group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 font-medium border-2 text-sm md:text-base"
                  onClick={() => {
                    window.location.href = '/catering?scrollTo=contact';
                  }}
                >
                  Catering anfragen
                </Button>
              </div>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
};

export default Services;