import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import food images
import bowlsImage from "@/assets/bowls/bowls-hauptgerichte.jpg";
import dipsImage from "@/assets/dips/dips-vorspeisen.jpg";
import falafelImage from "@/assets/falafel/falafel-teigtaschen.jpg";

const FoodShowcase = () => {
  const navigate = useNavigate();

  const foodCategories = [
    {
      title: "Dips & Vorspeisen",
      description: "Cremiger Hummus, der auf der Zunge zergeht. Frische Salate, die dich glücklich machen.",
      image: dipsImage,
      highlights: ["Klassischer Hummus", "Babaganoush", "Tabbouleh", "Fattoush"]
    },
    {
      title: "Falafel & Teigtaschen",
      description: "Außen knusprig, innen saftig – so müssen Falafel sein. Hausgemacht wie bei Oma.",
      image: falafelImage,
      highlights: ["Frisch frittiert", "Hausgemacht", "Verschiedene Füllungen", "Vegan verfügbar"]
    },
    {
      title: "Bowls & Hauptgerichte",
      description: "Bunte Bowls, die richtig satt machen. Herzhafte Hauptgerichte, die nach mehr schmecken.",
      image: bowlsImage,
      highlights: ["Couscous Bowls", "Reisgerichte", "Fleisch", "Vegan"]
    }
  ];

  const handleOrderClick = () => {
    window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank');
  };

  const handleSpecialtiesClick = () => {
    navigate('/spezialitaeten');
  };

  return (
    <section className="py-6 md:py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-4 md:mb-12">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-4">
            <Utensils className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground">
              Unsere Spezialitäten
            </h2>
          </div>
          <p className="text-sm md:text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Von cremigem Hummus bis zu knusprigen Falafel – 
            hier findest du alles, was das Herz begehrt.
          </p>
        </div>

        {/* Food Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-12">
          {foodCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/95 backdrop-blur-sm overflow-hidden">
              <div className="relative h-36 md:h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/10"></div>
              </div>
              
              <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {category.description}
                  </p>
                </div>
                
                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 text-xs font-body">
                  {category.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      <span className="text-foreground/70">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-2">
                  <Button 
                    onClick={handleOrderClick}
                    size="sm"
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 font-medium"
                  >
                    Zum Online-Shop
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            onClick={handleSpecialtiesClick}
            size="lg"
            className="group hover:shadow-glow transition-all duration-300 font-medium"
          >
            Alle Leckereien ansehen
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;