import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Utensils, UtensilsCrossed } from "lucide-react";
import { useTranslation } from 'react-i18next';

const InternalLinks = () => {
  const { t } = useTranslation();
  
  const links = [
    {
      title: t('nav.specialties'),
      description: "Entdecke authentische arabische Gerichte: Hummus, Falafel, Couscous Bowls und mehr",
      href: "/spezialitaeten",
      icon: Utensils,
      cta: "Zur Speisekarte"
    },
    {
      title: "Event " + t('nav.catering'),
      description: "Professionelles Catering für deine Feier oder Firmen-Event - individuell & hausgemacht",
      href: "/catering",
      icon: UtensilsCrossed,
      cta: t('services.requestCatering')
    }
  ];

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Mehr entdecken
          </h2>
          <p className="text-muted-foreground">
            Tauche tiefer in die Welt der arabischen Küche ein
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <Card key={link.href} className="group hover:shadow-elegant transition-all duration-300 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {link.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {link.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors w-full"
                    onClick={() => window.location.href = link.href}
                  >
                    {link.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;