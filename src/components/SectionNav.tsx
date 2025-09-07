import { Button } from "@/components/ui/button";
import { Utensils, Phone, Clock, Star, Info } from "lucide-react";

const SectionNav = () => {
  const sections = [
    { 
      name: "Services", 
      id: "services", 
      icon: Utensils,
      description: "Unsere Angebote"
    },
    { 
      name: "Spezialitäten", 
      id: "spezialitaeten", 
      icon: Star,
      description: "Unsere Gerichte",
      href: "/spezialitaeten"
    },
    { 
      name: "Öffnungszeiten", 
      id: "oeffnungszeiten", 
      icon: Clock,
      description: "Wann wir da sind"
    },
    { 
      name: "Kontakt", 
      id: "kontakt", 
      icon: Phone,
      description: "Schreib uns"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-8 bg-gradient-subtle border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Schnell zu
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Button
                key={section.id}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => {
                  if (section.href) {
                    window.location.href = section.href;
                  } else {
                    scrollToSection(section.id);
                  }
                }}
              >
                <IconComponent className="w-4 h-4" />
                <span className="hidden sm:inline">{section.description}</span>
                <span className="sm:hidden">{section.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionNav;