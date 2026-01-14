import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, PartyPopper, Salad, Users } from "lucide-react";
import { Link } from "react-router-dom";

const InternalLinks = () => {
  const cateringLinks = [
    {
      title: "Firmen-Catering",
      description: "Meetings, Tagungen & Mitarbeiter-Events professionell versorgt",
      href: "/catering",
      icon: Building2,
    },
    {
      title: "Private Feiern",
      description: "Geburtstage, Hochzeiten & Familienevents mit orientalischem Flair",
      href: "/catering",
      icon: PartyPopper,
    },
    {
      title: "Buffet-Service",
      description: "Reichhaltige Buffets für 20 bis 500 Gäste – alles hausgemacht",
      href: "/catering",
      icon: Users,
    },
    {
      title: "Fingerfood & Mezze",
      description: "Elegante Häppchen für Empfänge, Vernissagen & Networking",
      href: "/catering",
      icon: Salad,
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
            Catering für jeden Anlass
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {cateringLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Link key={index} to={link.href} className="group">
                <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-4 md:p-5 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                    </div>
                    
                    <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 md:mb-2">
                      {link.title}
                    </h3>
                    
                    <p className="text-xs md:text-sm text-muted-foreground flex-grow line-clamp-2">
                      {link.description}
                    </p>
                    
                    <div className="flex items-center gap-1 text-primary text-xs md:text-sm font-medium mt-2 md:mt-3 group-hover:gap-2 transition-all">
                      Mehr erfahren
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;