import { useSiteMode } from '@/contexts/SiteModeContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Building2, UtensilsCrossed, Users, Truck, Star, ChefHat, Clock, MapPin, ShoppingBag } from 'lucide-react';
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
    <section className="min-h-screen flex items-center justify-center px-4 py-8 md:py-12 bg-gradient-hero relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-warm rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/20 rounded-full opacity-20 blur-2xl"></div>
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-4">
            <img 
              src={sattunLogo} 
              alt="Sattuni Logo" 
              className="h-16 md:h-20 w-auto drop-shadow-lg"
            />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
            Willkommen bei Sattuni
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Was suchst du heute bei uns?
          </p>
        </div>

        {/* Mode Selection Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Catering Card */}
          <Card 
            className="group relative overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300 cursor-pointer bg-card/95 backdrop-blur-sm hover:shadow-elegant"
            onClick={handleCateringSelect}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-6 md:p-8">
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Building2 className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>

              {/* Content */}
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                Catering & Buffets
              </h2>
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                Für Unternehmen, Events & besondere Anlässe – ab 20 Personen
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
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
                size="lg" 
                className="w-full font-semibold group-hover:shadow-md transition-all"
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

          {/* Restaurant Card */}
          <Card 
            className="group relative overflow-hidden border-2 border-transparent hover:border-accent/30 transition-all duration-300 cursor-pointer bg-card/95 backdrop-blur-sm hover:shadow-elegant"
            onClick={handleRestaurantSelect}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-6 md:p-8">
              {/* Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <UtensilsCrossed className="w-7 h-7 md:w-8 md:h-8 text-accent-foreground" />
              </div>

              {/* Content */}
              <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                Restaurant & Lieferservice
              </h2>
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                Arabische Küche in Düsseldorf – frisch, hausgemacht & authentisch
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
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
              <div className="flex flex-col gap-2">
                <Button 
                  size="lg" 
                  variant="hero"
                  className="w-full font-semibold shadow-md transition-all"
                  onClick={handleOrderNow}
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Jetzt bestellen
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full font-semibold group-hover:shadow-md transition-all"
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
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="flex text-yellow-500">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-medium text-foreground">4.9/5</span>
              <span className="hidden sm:inline">bei Google</span>
            </div>
            <span className="hidden md:inline text-muted-foreground/50">|</span>
            <span>Seit 2022 in Düsseldorf</span>
            <span className="hidden md:inline text-muted-foreground/50">|</span>
            <span>Frisch & Hausgemacht</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModeSplitHero;
