import sattunIcon from "@/assets/icons/sattuni-header-icon.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { triggerGLFWidget } from "@/utils/glfHelper";
import { useMobileDetection } from "@/hooks/useMobileDetection";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMobileDetection();
  
  const navigation = [
    { 
      name: "Home", 
      href: "/", 
      current: location.pathname === "/",
      title: "Zur Startseite - Arabische Küche Düsseldorf"
    },
    { 
      name: "Spezialitäten", 
      href: "/spezialitaeten", 
      current: location.pathname === "/spezialitaeten",
      title: "Arabische Spezialitäten - Hummus, Falafel & mehr"
    },
    { 
      name: "Speisekarte", 
      href: "/speisekarte", 
      current: location.pathname === "/speisekarte",
      title: "Komplette Speisekarte mit Preisen - Orientalische Küche"
    },
    { 
      name: "Über uns", 
      href: "/ueber-uns", 
      current: location.pathname === "/ueber-uns",
      title: "Über das Team von Sattuni - Die Brüder hinter der Küche"
    },
    { 
      name: "Catering", 
      href: "/catering", 
      current: location.pathname === "/catering",
      title: "Catering Service Düsseldorf - Arabische Küche für Events"
    },
    { 
      name: "Blog", 
      href: "/blog", 
      current: location.pathname.startsWith("/blog"),
      title: "Blog - Geschichten, Rezepte & Einblicke aus unserer Küche"
    },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
      role="banner"
      itemScope 
      itemType="https://schema.org/WPHeader"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            title="Sattuni - Arabische Küche Düsseldorf"
            aria-label="Zur Startseite von Sattuni"
            itemProp="url"
            onClick={() => {
              if (location.pathname === '/') {
                // Already on homepage, scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <img 
              src={sattunIcon} 
              alt="Sattuni Logo - Arabische Küche Düsseldorf" 
              className="h-10 w-10 drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
              width="40"
              height="40"
              loading="eager"
              itemProp="logo"
            />
            <div className="hidden sm:block" itemScope itemType="https://schema.org/Organization">
              <span 
                className="text-lg font-semibold text-foreground font-display"
                itemProp="name"
              >
                sattuni
              </span>
              <p 
                className="text-xs text-muted-foreground uppercase tracking-wide font-body"
                itemProp="description"
              >
                Oriental Bowls & More
              </p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center space-x-6"
            role="navigation"
            aria-label="Hauptnavigation"
            itemScope 
            itemType="https://schema.org/SiteNavigationElement"
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
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                if (location.pathname === '/') {
                  // Already on homepage, just scroll
                  const element = document.getElementById('kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                } else {
                  // Navigate to homepage with scroll parameter
                  window.location.href = '/?scrollTo=kontakt';
                }
              }}
              className="text-muted-foreground hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Kontakt
            </button>
          </nav>
          
          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            {location.pathname === '/catering' ? (
              <Button 
                size="sm" 
                className="font-medium shadow-sm gap-2"
                onClick={() => {
                  const element = document.getElementById('anfrage');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setTimeout(() => {
                      const nameInput = document.getElementById('name');
                      nameInput?.focus();
                    }, 500);
                  }
                }}
              >
                <UtensilsCrossed className="w-4 h-4" />
                Catering anfragen
              </Button>
            ) : (
              <Button 
                size="sm" 
                className="font-medium shadow-sm"
                onClick={() => {
                  // Desktop: GLF Widget (this is desktop nav, but just to be safe)
                  triggerGLFWidget();
                }}
              >
                Zum Online-Shop
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
                  <span className="text-lg font-semibold font-display">sattuni</span>
                </div>
                
                <nav className="flex flex-col space-y-4">
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
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      if (location.pathname === '/') {
                        // Already on homepage, just scroll
                        const element = document.getElementById('kontakt');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      } else {
                        // Navigate to homepage with scroll parameter
                        window.location.href = '/?scrollTo=kontakt';
                      }
                    }}
                    className="text-foreground hover:text-primary hover:bg-primary/5 px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 text-left w-full"
                  >
                    Kontakt
                  </button>
                </nav>
                
                <div className="pt-6 border-t border-border">
                  {location.pathname === '/catering' ? (
                    <Button 
                      className="w-full gap-2" 
                      size="lg"
                      onClick={() => {
                        setIsOpen(false);
                        const element = document.getElementById('anfrage');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          setTimeout(() => {
                            const nameInput = document.getElementById('name');
                            nameInput?.focus();
                          }, 500);
                        }
                      }}
                    >
                      <UtensilsCrossed className="w-4 h-4" />
                      Catering anfragen
                    </Button>
                  ) : (
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => {
                        setIsOpen(false);
                        // Mobile menu: Open direct link
                        window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
                      }}
                    >
                      Zum Online-Shop
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

export default Header;