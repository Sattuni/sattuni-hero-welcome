import { Star, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    {
      name: "André Schahidi",
      rating: 5,
      text: "Super leckeres, frisches Essen. Gut gewürzt, frische Zutaten, ordentliche Portionen. Die Falafel schmeckt herrlich, auch die verschiedenen Hummus-Gerichte sind super. Extrem freundlicher Kundenservice!",
      timeAgo: "vor 2 Wochen"
    },
    {
      name: "Mohammad Najjar",
      rating: 5,
      text: "Hier kann man die besten Falafel der Welt probieren. Traut mir",
      timeAgo: "vor 1 Woche"
    },
    {
      name: "AUDITOR",
      rating: 5,
      text: "Absolut empfehlenswert! Sattuni ist wirklich das beste orientalische Restaurant, das ich kenne! Die Bowls sind frisch, perfekt gewürzt und absolut lecker. Besonders der Fatoush hat mich total überzeugt.",
      timeAgo: "vor 3 Wochen"
    },
    {
      name: "Lionel Mattes",
      rating: 5,
      text: "Das Essen war zur vereinbarten Uhrzeit fertig und noch warm. Perfekt gewürzte Falafel, sehr fein abgeschmeckter Tahini-Dip. Eines der besten Baba Ganoush, die wir jemals probieren durften. Preise sind fair.",
      timeAgo: "vor 4 Wochen"
    },
    {
      name: "Thomas Hollwedel",
      rating: 5,
      text: "Hatte Sattuni bei Google entdeckt, und war neugierig auf Grund der 5* Bewertung bei über 170 Bewertungen. Super lecker, schnell geliefert. Schließe mich den Bewertungen an. Ich bestelle wieder.",
      timeAgo: "vor 6 Wochen"
    },
    {
      name: "Dennis S.",
      rating: 5,
      text: "Geschmackvoll eingerichtetes kleines Restaurant, arabische Musik im Hintergrund, sehr netter Eigentümer und das Essen ist sehr deliziös zubereitet! Selbst das Pita-Brot ist frisch gebacken. Absolut empfehlenswert!",
      timeAgo: "vor 2 Monaten"
    }
  ];

  // ReviewCard component with expand/collapse functionality
  const ReviewCard = ({ review, index }: { review: any; index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 120; // Maximum characters to show when collapsed
    const shouldTruncate = review.text.length > maxLength;
    const displayText = shouldTruncate && !isExpanded 
      ? review.text.substring(0, maxLength) + "..."
      : review.text;

    return (
      <Card className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm animate-fade-in">
        <CardContent className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {renderStars(review.rating)}
            </div>
            <div className="text-sm text-muted-foreground">
              {review.timeAgo}
            </div>
          </div>
          
          {/* Review Text */}
          <div className="space-y-3">
            <div className="text-foreground leading-relaxed text-sm">
              <p>&quot;{displayText}&quot;</p>
              {shouldTruncate && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {isExpanded ? (
                    <>
                      <span>Weniger lesen</span>
                      <ChevronUp className="w-3 h-3" />
                    </>
                  ) : (
                    <>
                      <span>Mehr lesen</span>
                      <ChevronDown className="w-3 h-3" />
                    </>
                  )}
                </button>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-primary-foreground">
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

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(reviews.length / 3));
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

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

  const getVisibleReviews = () => {
    const startIndex = currentIndex * 3;
    return reviews.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 px-6 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Das sagen unsere Gäste
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Echte Stimmen, direkt von Google.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              {renderStars(5)}
            </div>
            <div className="text-3xl font-bold text-foreground">4.9</div>
            <div className="text-muted-foreground">
              (228 Bewertungen auf Google)
            </div>
          </div>
        </div>

        {/* Animated Reviews Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(reviews.length / 3) }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
                    {reviews.slice(slideIndex * 3, slideIndex * 3 + 3).map((review, index) => (
                      <ReviewCard 
                        key={slideIndex * 3 + index}
                        review={review}
                        index={slideIndex * 3 + index}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(reviews.length / 3) }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary scale-125" 
                    : "bg-muted hover:bg-primary/50"
                }`}
                aria-label={`Gehe zu Bewertungsgruppe ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="hero" 
            size="sm"
            className="gap-2 text-sm md:text-base md:px-6 md:py-3"
            onClick={() => window.open('https://maps.app.goo.gl/qRyjid3sNZhw8Nds9?g_st=ia', '_blank')}
          >
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Mehr Bewertungen auf Google lesen</span>
            <span className="sm:hidden">Google Bewertungen</span>
          </Button>
          
          {/* Trust Badge */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-card/60 backdrop-blur-sm rounded-full border border-border/30">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-sm font-medium text-foreground">
              Verifizierte Google Bewertungen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;