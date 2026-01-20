import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Utensils, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

// Import food images
import bowlsImage from "@/assets/bowls/bowls-hauptgerichte.jpg";
import dipsImage from "@/assets/dips/dips-vorspeisen.jpg";
import falafelImage from "@/assets/falafel/falafel-teigtaschen.jpg";

const FoodShowcase = () => {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    navigate('/restaurant/spezialitaeten');
  };

  return (
    <section className="py-6 md:py-12 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-4 md:mb-8">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
            <Utensils className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground">
              Unsere Spezialitäten
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Von cremigem Hummus bis zu knusprigen Falafel – 
            hier findest du alles, was das Herz begehrt.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card/95 backdrop-blur-sm border border-border/50 rounded-full items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
            aria-label="Vorherige Kategorie"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card/95 backdrop-blur-sm border border-border/50 rounded-full items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors shadow-md"
            aria-label="Nächste Kategorie"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {foodCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_32%] min-w-0"
                >
                  <Card className="group hover:shadow-elegant transition-all duration-500 border-border/50 hover:border-primary/30 bg-card/95 backdrop-blur-sm overflow-hidden h-full">
                    <div className="relative h-32 md:h-40 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/10"></div>
                    </div>
                    
                    <CardContent className="p-4 space-y-3">
                      <div>
                        <h3 className="text-lg font-display font-bold text-foreground mb-1">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-body line-clamp-2">
                          {category.description}
                        </p>
                      </div>
                      
                      {/* Highlights */}
                      <div className="flex flex-wrap gap-1.5">
                        {category.highlights.slice(0, 3).map((highlight, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <Button 
                        onClick={handleOrderClick}
                        size="sm"
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 font-medium text-sm"
                      >
                        Zum Online-Shop
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="flex md:hidden justify-center mt-3 text-xs text-muted-foreground">
            <span>← Wischen zum Entdecken →</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-6">
          <Button 
            onClick={handleSpecialtiesClick}
            size="default"
            variant="outline"
            className="group transition-all duration-300 font-medium"
          >
            Alle Spezialitäten
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;
