import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Star, Truck, Utensils } from "lucide-react";
import { triggerGLFWidget } from "@/utils/glfHelper";
import { useMobileDetection } from "@/hooks/useMobileDetection";

const RestaurantServices = () => {
  const isMobile = useMobileDetection();
  
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
                    <Truck className="w-6 h-6 md:w-8 md:h-8 text-white" />
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
                
                {/* Service highlights */}
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
                  onClick={() => {
                    if (isMobile) {
                      window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
                    } else {
                      triggerGLFWidget();
                    }
                  }}
                >
                  Jetzt bestellen
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Restaurant Info Card */}
          <Card className="group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-accent/30 bg-card/90 backdrop-blur-sm overflow-hidden h-full flex flex-col">
            <CardContent className="p-5 md:p-8 space-y-3 md:space-y-6 relative flex-1 flex flex-col">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl"></div>
              
              <div className="flex-1">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft flex-shrink-0">
                    <Utensils className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg md:text-2xl font-display font-bold text-foreground mb-2 md:mb-3">
                      Unser Restaurant
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-body">
                      Authentische arabische Küche – frisch, hausgemacht und mit Liebe zubereitet in Düsseldorf.
                    </p>
                  </div>
                </div>
                
                {/* Restaurant Info */}
                <div className="space-y-3 pt-4 md:pt-6">
                  <div className="flex items-center gap-3 text-sm md:text-base">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Johannstraße 40, 40476 Düsseldorf</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm md:text-base">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Mo-Fr 11-22 Uhr • Sa-So 12-23 Uhr</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm md:text-base">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-foreground">4.9/5 bei Google (127+ Bewertungen)</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-2 md:pt-4 mt-auto flex flex-col sm:flex-row gap-2">
                <Button 
                  variant="outline" 
                  size="default"
                  className="w-full sm:w-auto transition-all duration-300 font-medium border-2 text-sm md:text-base"
                  onClick={() => {
                    window.location.href = '/restaurant/speisekarte';
                  }}
                >
                  Speisekarte ansehen
                </Button>
                <Button 
                  variant="ghost" 
                  size="default"
                  className="w-full sm:w-auto text-sm md:text-base text-muted-foreground hover:text-foreground"
                  onClick={() => {
                    const element = document.getElementById('oeffnungszeiten');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Öffnungszeiten
                </Button>
              </div>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
};

export default RestaurantServices;
