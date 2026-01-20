import sattunIcon from "@/assets/icons/sattuni-header-icon.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Building2, UtensilsCrossed, ArrowLeftRight } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { triggerGLFWidget } from "@/utils/glfHelper";
import { useSiteMode } from "@/contexts/SiteModeContext";

const ModeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, setMode, isCateringMode, isRestaurantMode } = useSiteMode();

  // Mode-specific navigation
  const cateringNavigation = [
    { 
      name: "Catering", 
      href: "/catering", 
      current: location.pathname === "/catering",
      title: "Catering Service Düsseldorf"
    },
    { 
      name: "Menüs & Buffets", 
      href: "/menus", 
      current: location.pathname === "/menus",
      title: "Buffet Menüs ansehen"
    },
    { 
      name: "Über uns", 
      href: "/ueber-uns", 
      current: location.pathname === "/ueber-uns",
      title: "Das Team hinter Sattuni"
    },
  ];

  const restaurantNavigation = [
    { 
      name: "Speisekarte", 
      href: "/speisekarte", 
      current: location.pathname === "/speisekarte",
      title: "Unsere Speisekarte"
    },
    { 
      name: "Spezialitäten", 
      href: "/spezialitaeten", 
      current: location.pathname === "/spezialitaeten",
      title: "Arabische Spezialitäten"
    },
    { 
      name: "Öffnungszeiten", 
      href: "/restaurant#oeffnungszeiten", 
      current: false,
      title: "Unsere Öffnungszeiten"
    },
    { 
      name: "Über uns", 
      href: "/ueber-uns", 
      current: location.pathname === "/ueber-uns",
      title: "Das Team hinter Sattuni"
    },
  ];

  const navigation = isCateringMode ? cateringNavigation : restaurantNavigation;

  const handleModeSwitch = () => {
    const newMode = isCateringMode ? 'restaurant' : 'catering';
    setMode(newMode);
    navigate(newMode === 'catering' ? '/catering' : '/restaurant');
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    // Go to mode-specific homepage
    if (isCateringMode) {
      navigate('/catering');
    } else if (isRestaurantMode) {
      navigate('/restaurant');
    } else {
      navigate('/');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-sm transition-colors duration-300 ${
        isCateringMode 
          ? 'bg-background/95 border-primary/20' 
          : 'bg-background/95 border-accent/20'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group"
            aria-label="Zur Startseite"
          >
            <img 
              src={sattunIcon} 
              alt="Sattuni Logo" 
              className="h-10 w-10 drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
              width="40"
              height="40"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-foreground font-display">
                sattuni
              </span>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-body">
                {isCateringMode ? 'Catering' : 'Restaurant'}
              </p>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center space-x-4"
            role="navigation"
            aria-label="Hauptnavigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  item.current
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                title={item.title}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mode Switch Button - Desktop */}
            <button
              onClick={handleModeSwitch}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors border border-border/50"
              title={isCateringMode ? "Zum Restaurant wechseln" : "Zu Catering wechseln"}
            >
              <ArrowLeftRight className="w-4 h-4" />
              <span className="hidden lg:inline">
                {isCateringMode ? "Zum Restaurant" : "Zu Catering"}
              </span>
            </button>
          </nav>
          
          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            {isCateringMode ? (
              <Button 
                size="sm" 
                className="font-medium shadow-sm gap-2"
                onClick={() => {
                  navigate('/catering');
                  setTimeout(() => {
                    const element = document.getElementById('anfrage');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
              >
                <Building2 className="w-4 h-4" />
                Anfrage stellen
              </Button>
            ) : (
              <Button 
                size="sm" 
                className="font-medium shadow-sm gap-2"
                onClick={() => triggerGLFWidget()}
              >
                <UtensilsCrossed className="w-4 h-4" />
                Jetzt bestellen
              </Button>
            )}
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden min-h-[44px] min-w-[44px] h-11 w-11 p-0 hover:bg-primary/10 active:bg-primary/20 transition-colors touch-manipulation"
                aria-label="Menü öffnen"
              >
                <Menu className="w-6 h-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3">
                  <img src={sattunIcon} alt="Sattuni" className="h-8 w-8" />
                  <div>
                    <span className="text-lg font-semibold font-display">sattuni</span>
                    <p className="text-xs text-muted-foreground">
                      {isCateringMode ? 'Catering-Modus' : 'Restaurant-Modus'}
                    </p>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                        item.current
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mode Switch - Mobile */}
                <div className="pt-4 border-t border-border">
                  <button
                    onClick={handleModeSwitch}
                    className="flex items-center gap-3 w-full px-3 py-3 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    <ArrowLeftRight className="w-5 h-5" />
                    {isCateringMode ? "Zum Restaurant wechseln" : "Zu Catering wechseln"}
                  </button>
                </div>
                
                <div className="pt-4 border-t border-border">
                  {isCateringMode ? (
                    <Button 
                      className="w-full gap-2" 
                      size="lg"
                      onClick={() => {
                        setIsOpen(false);
                        navigate('/catering');
                        setTimeout(() => {
                          const element = document.getElementById('anfrage');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }, 100);
                      }}
                    >
                      <Building2 className="w-4 h-4" />
                      Anfrage stellen
                    </Button>
                  ) : (
                    <Button 
                      className="w-full gap-2" 
                      size="lg"
                      onClick={() => {
                        setIsOpen(false);
                        window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
                      }}
                    >
                      <UtensilsCrossed className="w-4 h-4" />
                      Jetzt bestellen
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default ModeHeader;
