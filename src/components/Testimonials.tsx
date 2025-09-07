import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Alban S.",
      rating: 5,
      text: "Haben dort für ein Firmenevent bestellt und alle haben das Essen geliebt. Es kam pünktlich und super frisch an. Werden definitiv wieder dort bestellen :)",
      timeAgo: "vor 2 Jahren"
    },
    {
      name: "Joe",
      rating: 5,
      text: "Man schmeckt die Liebe zum Detail. Alles ist so frisch und die Aromen sind perfekt ausbalanciert. Vielen Dank!",
      timeAgo: "vor einem Jahr"
    },
    {
      name: "Tobias V.",
      rating: 5,
      text: "Das Essen war fantastisch und das Personal super nett. Kann ich definitiv empfehlen!",
      timeAgo: "vor 3 Monaten"
    },
    {
      name: "Dennis M.",
      rating: 5,
      text: "Super leckeres Essen, gleichbleibend hohe Qualität, schnelle Lieferung, faire Preise.",
      timeAgo: "vor 6 Monaten"
    },
    {
      name: "Sarah K.",
      rating: 5,
      text: "Es ist ein kleines Restaurant, schön eingerichtet und sie bieten auch Take-away an.",
      timeAgo: "vor 8 Monaten"
    },
    {
      name: "Alex T.",
      rating: 5,
      text: "Mir gefallen besonders die Hauptgerichte und der Reis!",
      timeAgo: "vor 4 Monaten"
    },
    {
      name: "Maya L.",
      rating: 5,
      text: "Authentische arabische Küche in Düsseldorf! Das Falafel und Hummus sind ein Traum.",
      timeAgo: "vor 2 Monaten"
    },
    {
      name: "Tim R.",
      rating: 5,
      text: "Perfekt für Catering! Haben für unser Büro bestellt - alles war frisch und lecker.",
      timeAgo: "vor 5 Monaten"
    },
    {
      name: "Lisa M.",
      rating: 5,
      text: "Als Vegetarierin bin ich begeistert von der Auswahl! Die Falafel sind hausgemacht und die Soßen fantastisch.",
      timeAgo: "vor 1 Monat"
    },
    {
      name: "Michael K.",
      rating: 5,
      text: "Beste arabische Küche in Düsseldorf! Portionen sind großzügig und der Service sehr freundlich.",
      timeAgo: "vor 3 Wochen"
    },
    {
      name: "Anna B.",
      rating: 5,
      text: "Haben für unsere Hochzeitsfeier das Catering bestellt - alle Gäste waren begeistert. Top Service!",
      timeAgo: "vor 7 Monaten"
    },
    {
      name: "Frank H.",
      rating: 5,
      text: "Immer wieder gerne! Die Qualität stimmt einfach und die Lieferung ist zuverlässig.",
      timeAgo: "vor 2 Wochen"
    },
    {
      name: "Jasmin A.",
      rating: 5,
      text: "Endlich authentische orientalische Küche in Düsseldorf! Die Gewürzmischungen sind perfekt.",
      timeAgo: "vor 6 Wochen"
    },
    {
      name: "Stefan W.",
      rating: 5,
      text: "Regelmäßig für das Team bestellt - nie enttäuscht worden. Frische Zubereitung und faire Preise.",
      timeAgo: "vor 1 Monat"
    },
    {
      name: "Melanie D.",
      rating: 5,
      text: "Das Fattoush ist der Hammer! Alles schmeckt frisch und hausgemacht. Absolute Empfehlung!",
      timeAgo: "vor 4 Wochen"
    }
  ];

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
              (226 Bewertungen auf Google)
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
                      <Card 
                        key={slideIndex * 3 + index}
                        className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm animate-fade-in"
                      >
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
                            <p className="text-foreground leading-relaxed text-sm">
                              &quot;{review.text}&quot;
                            </p>
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
            size="lg"
            className="gap-2"
            onClick={() => window.open('https://maps.app.goo.gl/Do5KknPnvW26zRvW8?g_st=ipc', '_blank')}
          >
            <ExternalLink className="w-5 h-5" />
            Mehr Bewertungen auf Google lesen
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