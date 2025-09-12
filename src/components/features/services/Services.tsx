import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, PartyPopper } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="py-8 md:py-16 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Lieferservice Card */}
          <Card className="group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/90 backdrop-blur-sm overflow-hidden h-full flex flex-col">
            <CardContent className="p-4 md:p-8 space-y-4 md:space-y-6 relative flex-1 flex flex-col">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-2xl"></div>
              
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-elegant">
                    <Utensils className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                      {t('services.deliveryTitle')}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-body">
                      {t('services.deliverySubtitle')}
                    </p>
                  </div>
                </div>
                
                {/* Service highlights */}
                <div className="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-3 pt-3 md:pt-4 text-xs md:text-sm font-body">
                  {[
                    t('services.features.freshMade'),
                    t('services.features.delivery'),
                    t('services.features.orientalBowls'),
                    t('services.features.homemade')
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 mt-auto">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="w-full sm:w-auto group-hover:shadow-glow transition-all duration-300 font-medium"
                  onClick={() => window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank')}
                >
                  {t('services.orderNow')}
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Catering Card */}
          <Card className="group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-accent/30 bg-card/90 backdrop-blur-sm overflow-hidden h-full flex flex-col">
            <CardContent className="p-4 md:p-8 space-y-4 md:space-y-6 relative flex-1 flex flex-col">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl"></div>
              
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-soft">
                    <PartyPopper className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                      {t('services.cateringTitle')}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-body">
                      {t('services.cateringSubtitle')}
                    </p>
                  </div>
                </div>
                
                {/* Service highlights */}
                <div className="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-3 pt-3 md:pt-4 text-xs md:text-sm font-body">
                  {[
                    t('services.features.customized'),
                    t('services.features.experience'),
                    t('services.features.fullService'),
                    t('services.features.groupSize')
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      <span className="text-foreground/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 mt-auto">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 font-medium border-2"
                  onClick={() => {
                    window.location.href = '/catering?scrollTo=contact';
                  }}
                >
                  {t('services.requestCatering')}
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