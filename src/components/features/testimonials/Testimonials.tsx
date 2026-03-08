import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useMobileDetection } from "@/hooks/useMobileDetection";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMobileDetection();

  const reviews = [
    {
      name: "Sabrina M.",
      rating: 5,
      text: "Sattuni hat das Catering für unsere Hochzeit gemacht und es war einfach alles so lecker und perfekt! 100% weiterzuempfehlen!",
    },
    {
      name: "Katharina K.",
      rating: 5,
      text: "Sehr lecker, auf jeden Fall für Workshops zu empfehlen. Unkomplizierte Bestellung, pünktliche Lieferung und freundlicher Service.",
    },
    {
      name: "Pino T.",
      rating: 5,
      text: "Echt super Catering, so leckeres hatten wir selten im Büro. Von Kommunikation bis Umsetzung war alles TOP!",
    },
    {
      name: "Carsten D.",
      rating: 5,
      text: "Vom ersten bis zum letzten Kontakt perfekt! Service, Lieferung, Präsentation und Geschmack – wärmstens empfohlen!",
    },
    {
      name: "Sarah L.",
      rating: 5,
      text: "Für unsere Geburtstagsparty mit 20 Gästen bestellt – fantastisch! Speisen waren unglaublich lecker und frisch.",
    },
    {
      name: "Maja de H.",
      rating: 5,
      text: "Weihnachtsfeier-Catering: Hervorragend! Alle Wünsche wurden berücksichtigt und die Abwicklung hat perfekt funktioniert.",
    },
  ];

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="py-8 md:py-16 px-4 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">
            Das sagen unsere Gäste
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">4.9</span>
            <span className="text-xs text-muted-foreground">(228 Bewertungen)</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mb-6">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-4 px-1 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
                    {reviews.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((review, index) => (
                      <Card key={slideIndex * itemsPerSlide + index} className="border-border/50 bg-card/80 backdrop-blur-sm">
                        <CardContent className="p-4 md:p-5 space-y-2">
                          <div className="flex text-yellow-400">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                          <p className="text-foreground text-sm leading-relaxed">
                            &quot;{review.text}&quot;
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-warm rounded-full flex items-center justify-center">
                              <span className="text-[10px] font-semibold text-primary-foreground">{review.name.charAt(0)}</span>
                            </div>
                            <span className="font-medium text-foreground text-sm">{review.name}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="min-w-[20px] min-h-[20px] flex items-center justify-center"
                aria-label={`Bewertung ${index + 1}`}
              >
                <span className={`w-2 h-2 rounded-full block transition-all ${
                  index === currentIndex ? "bg-primary scale-125" : "bg-muted"
                }`} />
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="ghost" 
            size="sm"
            className="gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground"
            onClick={() => window.open('https://maps.app.goo.gl/qRyjid3sNZhw8Nds9?g_st=ia', '_blank')}
          >
            <ExternalLink className="w-3 h-3" />
            Alle Google Bewertungen lesen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
