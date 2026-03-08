import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, ExternalLink, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useMobileDetection } from "@/hooks/useMobileDetection";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMobileDetection();

  const reviews = [
    {
      name: "Sabrina Möllenberg",
      rating: 5,
      text: "Sattuni hat das Catering für unsere Hochzeit gemacht und es war einfach alles so lecker und perfekt! Wir hatten ein rein vegetarisches Buffet und alle waren begeistert! 100% weiterzuempfehlen!",
      timeAgo: "vor 2 Monaten"
    },
    {
      name: "Katharina K.",
      rating: 5,
      text: "Danke für das Catering, es war sehr lecker auf jeden Fall für Workshops zu empfehlen. Sehr unkomplizierte Bestellung, pünktliche Lieferung und freundlicher Service.",
      timeAgo: "vor 3 Wochen"
    },
    {
      name: "Pino T.",
      rating: 5,
      text: "Wir hatten ein echt super Catering von Sattuni gehabt, so etwas leckeres hatten wir selten im Büro. Von der Kommunikation bis zur Umsetzung war alles TOP!",
      timeAgo: "vor 1 Monat"
    },
    {
      name: "Carsten Dombrowsky",
      rating: 5,
      text: "Vom ersten bis zum letzten Kontakt war alles perfekt! Service, Lieferung, Präsentation der Speisen, Qualität und Geschmack des Essens!! Wir können dieses Restaurant nur wärmstens empfehlen!!",
      timeAgo: "vor 6 Wochen"
    },
    {
      name: "Schmonn",
      rating: 5,
      text: "Die libanesche Küche ist uns sehr vertraut, aber Sattuni spielt in der oberen Liga mit. Alles was wir probiert haben war top. Baba Ganoush, Hummus, Falafel und mein Highlight: Bulgerbällchen mit Kartoffeln.",
      timeAgo: "vor 4 Monaten"
    },
    {
      name: "Sarah L.",
      rating: 5,
      text: "Wir hatten für unsere Geburtstagsparty mit 20 Gästen ein Catering von Sattuni bestellt, und es war einfach fantastisch! Die Speisen waren unglaublich lecker und frisch. Sehr zu empfehlen!",
      timeAgo: "vor 2 Wochen"
    },
    {
      name: "Thorsten Roß",
      rating: 5,
      text: "Super lecker! Ich habe ein kleines Catering für meinen Geburtstag hier bestellt und es war super! Meine Gäste waren einfach nur begeistert. Ich kann dieses Restaurant nur empfehlen!",
      timeAgo: "vor 3 Monaten"
    },
    {
      name: "Maja de Haan",
      rating: 5,
      text: "Wir wurden für unsere Weihnachtsfeiern beliefert. Das Essen war hervorragend und es wurde bei der Bestellung auf alle Wünsche von uns eingegangen. Die Abwicklung hat perfekt funktioniert.",
      timeAgo: "vor 5 Monaten"
    },
    {
      name: "Fabian Wilk",
      rating: 5,
      text: "Nun hat Hamudi auch für den Junggesellenabschied meiner Schwester abgeliefert und ein wunderbares Menü gezaubert. Falafeln, Hummus und Tabouleh sind jedes mal der absolute Hammer. Danke nochmals!",
      timeAgo: "vor 1 Monat"
    },
  ];

  const ReviewCard = ({ review }: { review: typeof reviews[0]; index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = isMobile ? 100 : 120;
    const shouldTruncate = review.text.length > maxLength;
    const displayText = shouldTruncate && !isExpanded 
      ? review.text.substring(0, maxLength) + "..."
      : review.text;

    return (
      <Card className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm">
        <CardContent className={`${isMobile ? 'p-4' : 'p-6'} space-y-3`}>
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
          </div>
          
          {/* Review Text */}
          <div className="space-y-2">
            <p className="text-foreground leading-relaxed text-sm">
              &quot;{displayText}&quot;
            </p>
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors font-medium min-h-[44px] touch-manipulation"
              >
                {isExpanded ? (
                  <>Weniger <ChevronUp className="w-3 h-3" /></>
                ) : (
                  <>Mehr <ChevronDown className="w-3 h-3" /></>
                )}
              </button>
            )}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-warm rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-primary-foreground">
                  {review.name.charAt(0)}
                </span>
              </div>
              <span className="font-medium text-foreground text-sm">
                {review.name}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "fill-yellow-400 text-yellow-400" 
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <section className="py-8 md:py-20 px-4 md:px-6 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header - Compact on mobile */}
        <div className="text-center mb-6 md:mb-16 space-y-2 md:space-y-4">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Das sagen unsere Gäste
          </h2>
          
          {/* Overall Rating - Compact */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mt-2 md:mt-8">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-lg md:text-3xl font-bold text-foreground">4.9</span>
            <span className="text-xs md:text-base text-muted-foreground">(228 Bewertungen)</span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-4 md:mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-3 md:gap-6 px-1 md:px-2 ${isMobile ? 'grid-cols-1' : 'grid-cols-3'}`}>
                    {reviews.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((review, index) => (
                      <ReviewCard 
                        key={slideIndex * itemsPerSlide + index}
                        review={review}
                        index={slideIndex * itemsPerSlide + index}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Indicators - Max 5 dots on mobile */}
          <div className="flex justify-center gap-2 mt-4 md:mt-8">
            {Array.from({ length: Math.min(totalSlides, isMobile ? 5 : totalSlides) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation min-w-[20px] min-h-[20px] flex items-center justify-center"
                aria-label={`Bewertung ${index + 1}`}
              >
                <span className={`w-2 h-2 md:w-3 md:h-3 rounded-full block transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary scale-125" 
                    : "bg-muted hover:bg-primary/50"
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* CTA - Compact on mobile */}
        <div className="text-center">
          <Button 
            variant="hero" 
            size="sm"
            className="gap-2 text-xs md:text-base rounded-full border border-border/30"
            onClick={() => window.open('https://maps.app.goo.gl/qRyjid3sNZhw8Nds9?g_st=ia', '_blank')}
          >
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">Mehr Bewertungen auf Google lesen</span>
            <span className="sm:hidden">Google Bewertungen</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
