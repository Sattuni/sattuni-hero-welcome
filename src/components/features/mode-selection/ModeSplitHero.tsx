import { useSiteMode } from '@/contexts/SiteModeContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GoogleReviewBadge } from '@/components/common';
import { Building2, UtensilsCrossed, ShoppingBag, ArrowRight } from 'lucide-react';
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
    <section className="min-h-screen flex items-center justify-center px-4 py-6 md:py-12 bg-gradient-hero relative">
      {/* Background decorative elements - desktop only */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-warm rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/20 rounded-full opacity-20 blur-2xl"></div>
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-5 md:mb-12">
          <div className="flex justify-center mb-3 md:mb-4">
            <img 
              src={sattunLogo} 
              alt="Sattuni Logo" 
              className="h-14 md:h-20 w-auto drop-shadow-lg"
            />
          </div>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-1.5 md:mb-3">
            Arabische Küche & Catering in Düsseldorf
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto">
            Frisch, hausgemacht & für jeden Anlass
          </p>
        </div>

        {/* Mode Selection Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Restaurant Card */}
          <Card 
            className="group relative overflow-hidden border-2 border-transparent hover:border-accent/30 transition-all duration-300 cursor-pointer bg-card/95 backdrop-blur-sm hover:shadow-elegant"
            onClick={handleRestaurantSelect}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-5 md:p-8">
              <div className="flex items-start gap-4 md:block">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 md:mb-5 group-hover:bg-accent/20 transition-colors">
                  <UtensilsCrossed className="w-6 h-6 md:w-8 md:h-8 text-accent-foreground" />
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-lg md:text-2xl font-display font-bold text-foreground mb-1 md:mb-2">
                    Restaurant & Lieferservice
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-6">
                    Hummus, Falafel & Bowls – frisch zu dir geliefert
                  </p>
                  
                  {/* Key info */}
                  <div className="hidden md:block space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      <span>Lieferung in 30-45 Min</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      <span>Mo-Fr 17-23 Uhr • Sa-So ab 14 Uhr</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 md:mt-0 flex flex-col gap-2">
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
                  className="w-full font-semibold transition-all text-sm md:text-base md:h-11 hidden md:flex"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRestaurantSelect();
                  }}
                >
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
            
            <div className="relative p-5 md:p-8">
              <div className="flex items-start gap-4 md:block">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 md:mb-5 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-lg md:text-2xl font-display font-bold text-foreground mb-1 md:mb-2">
                    Catering & Buffets
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-6">
                    Arabisches Buffet für Events ab 20 Personen
                  </p>

                  <div className="hidden md:block space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>Firmenfeiern, Meetings & private Feiern</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>200+ Events erfolgreich beliefert</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 md:mt-0">
                <Button 
                  size="default"
                  className="w-full font-semibold group-hover:shadow-md transition-all text-sm md:text-base md:h-11"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCateringSelect();
                  }}
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Zum Catering
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 md:mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-8 text-xs md:text-sm text-muted-foreground">
            <GoogleReviewBadge variant="compact" />
            <span className="text-muted-foreground/50 hidden md:inline">•</span>
            <span className="hidden md:inline">Seit 2022 in Düsseldorf</span>
          </div>
        </div>

        {/* SEO Text - Desktop only */}
        <div className="hidden md:block mt-8 max-w-3xl mx-auto text-center">
          <p className="text-xs text-muted-foreground/60 leading-relaxed">
            Sattuni ist euer arabisches Restaurant in Düsseldorf – mit Lieferservice und authentischer 
            orientalischer Küche. Ob Catering für Firmen, Buffets für Meetings oder private Feiern: 
            Wir liefern frisch und hausgemacht direkt zu euch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModeSplitHero;
