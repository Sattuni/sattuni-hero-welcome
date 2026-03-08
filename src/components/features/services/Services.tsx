import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PartyPopper, Utensils } from "lucide-react";
import { triggerGLFWidget } from "@/utils/glfHelper";
import { useMobileDetection } from "@/hooks/useMobileDetection";

const Services = () => {
  const isMobile = useMobileDetection();
  
  return (
    <section className="py-4 md:py-12 px-3 md:px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-8 items-stretch">
          
          {/* Lieferservice Card */}
          <Card className="group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/90 backdrop-blur-sm overflow-hidden h-full flex flex-col">
            <CardContent className={`${isMobile ? 'p-4' : 'p-5 md:p-8'} space-y-2 md:space-y-6 relative flex-1 flex flex-col`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-elegant">
                    <Utensils className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base md:text-2xl font-display font-bold text-foreground mb-0.5 md:mb-3">
                      Lieferservice
                    </h2>
                    <p className="text-muted-foreground text-xs md:text-lg leading-relaxed font-body">
                      Hummus, Bowls & Pita – frisch zu dir.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="hero" 
                size="default"
                className="w-full md:w-auto font-medium text-sm md:text-base"
                onClick={() => {
                  if (isMobile) {
                    window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
                  } else {
                    triggerGLFWidget();
                  }
                }}
              >
                Zum Online-Shop
              </Button>
            </CardContent>
          </Card>
          
          {/* Catering Card */}
          <Card className="group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-accent/30 bg-card/90 backdrop-blur-sm overflow-hidden h-full flex flex-col">
            <CardContent className={`${isMobile ? 'p-4' : 'p-5 md:p-8'} space-y-2 md:space-y-6 relative flex-1 flex flex-col`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-accent rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-soft">
                    <PartyPopper className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base md:text-2xl font-display font-bold text-foreground mb-0.5 md:mb-3">
                      Catering für Events
                    </h2>
                    <p className="text-muted-foreground text-xs md:text-lg leading-relaxed font-body">
                      Ab 20 Personen – Fingerfood, Buffets, vegan.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Single CTA on mobile */}
              <Button 
                variant="outline" 
                size="default"
                className="w-full md:w-auto font-medium border-2 text-sm md:text-base"
                onClick={() => {
                  window.location.href = '/catering?scrollTo=contact';
                }}
              >
                Catering anfragen
              </Button>
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
