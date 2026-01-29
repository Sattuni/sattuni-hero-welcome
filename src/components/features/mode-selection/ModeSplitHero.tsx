import { useSiteMode } from '@/contexts/SiteModeContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GoogleReviewBadge } from '@/components/common';
import { Building2, UtensilsCrossed, Users, Truck, ChefHat, Clock, MapPin, ShoppingBag, Star } from 'lucide-react';
import { triggerGLFWidget } from '@/utils/glfHelper';
import { useMobileDetection } from '@/hooks/useMobileDetection';
import sattunLogo from '@/assets/icons/sattuni-header-icon.png';
import { useNavigate } from 'react-router-dom';

const ModeSplitHero = () => {
  const { setMode } = useSiteMode();
  const navigate = useNavigate();
  const isMobile = useMobileDetection();

  const handleOrderNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMobile) {
      window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
    } else {
      triggerGLFWidget();
    }
  };

  const handleCateringSelect = () => {
    setMode('catering');
    navigate('/catering');
  };

  const handleRestaurantSelect = () => {
    setMode('restaurant');
    navigate('/restaurant');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-4 md:py-12 bg-gradient-hero relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-warm rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/20 rounded-full opacity-20 blur-2xl"></div>
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 md:mb-12">
          <div className="flex justify-center mb-2 md:mb-4">
            <img 
              src={sattunLogo} 
              alt="Sattuni Logo" 
              className="h-12 md:h-20 w-auto drop-shadow-lg"
            />
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-1 md:mb-3">
            Hey, schön dass ihr da seid
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto">
            Was darf's sein?
          </p>
        </div>

        {/* Mode Selection Cards */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-6 lg:gap-8">
          {/* Restaurant Card */}
          <Card 
            className="group relative overflow-hidden border-2 border-transparent hover:border-accent/30 transition-all duration-300 cursor-pointer bg-card/95 backdrop-blur-sm hover:shadow-elegant"
            onClick={handleRestaurantSelect}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-4 md:p-8">
              {/* Mobile: Compact horizontal layout */}
              <div className="flex items-start gap-3 md:block">
                {/* Icon */}
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 md:mb-5 group-hover:bg-accent/20 transition-colors">
                  <UtensilsCrossed className="w-5 h-5 md:w-8 md:h-8 text-accent-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-base md:text-2xl font-display font-bold text-foreground mb-0.5 md:mb-2">
                    Restaurant & Lieferservice
                  </h2>
                  <p className="text-muted-foreground text-xs md:text-base md:mb-6">
                    Frisch, hausgemacht, direkt zu dir
                  </p>
                </div>
              </div>

              {/* Features - Hidden on mobile */}
              <div className="hidden md:block space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4 text-accent-foreground/70" />
                  <span>Lieferung in 30-45 Min</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-accent-foreground/70" />
                  <span>Johannstraße 40, Düsseldorf</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-accent-foreground/70" />
                  <span>Mo-Fr 11-22 Uhr • Sa-So 12-23 Uhr</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-2 mt-3 md:mt-0">
                <Button 
                  size="default"
                  variant="hero"
                  className="w-full font-semibold shadow-md transition-all text-sm md:text-base md:h-11"
                  onClick={handleOrderNow}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Jetzt bestellen
                </Button>
                <Button 
                  size="default"
                  variant="secondary"
                  className="w-full font-semibold group-hover:shadow-md transition-all text-sm md:text-base md:h-11"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRestaurantSelect();
                  }}
                >
                  <UtensilsCrossed className="w-4 h-4 mr-2" />
                  Mehr erfahren
                </Button>
              </div>
            </div>
          </Card>

          {/* Catering Card */}
          <Card 
            className="group relative overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300 cursor-pointer bg-card/95 backdrop-blur-sm hover:shadow-elegant"
            onClick={handleCateringSelect}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-4 md:p-8">
              {/* Mobile: Compact horizontal layout */}
              <div className="flex items-start gap-3 md:block">
                {/* Icon */}
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 md:mb-5 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-base md:text-2xl font-display font-bold text-foreground mb-0.5 md:mb-2">
                    Catering & Buffets
                  </h2>
                  <p className="text-muted-foreground text-xs md:text-base md:mb-6">
                    Fürs Büro, fürs Event – ab 20 Leuten
                  </p>
                </div>
              </div>

              {/* Features - Hidden on mobile */}
              <div className="hidden md:block space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary/70" />
                  <span>Firmenfeiern & Meetings</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ChefHat className="w-4 h-4 text-primary/70" />
                  <span>Buffet-Service & Full-Service</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-primary/70" />
                  <span>200+ Events erfolgreich beliefert</span>
                </div>
              </div>

              {/* CTA */}
              <Button 
                size="default"
                className="w-full font-semibold group-hover:shadow-md transition-all mt-3 md:mt-0 text-sm md:text-base md:h-11"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCateringSelect();
                }}
              >
                <Building2 className="w-4 h-4 mr-2" />
                Zum Catering
              </Button>
            </div>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-4 md:mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <GoogleReviewBadge variant="compact" />
            <span className="text-muted-foreground/50">•</span>
            <span>Seit 2022</span>
            <span className="hidden md:inline text-muted-foreground/50">•</span>
            <span className="hidden md:inline">Frisch & Hausgemacht</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModeSplitHero;
