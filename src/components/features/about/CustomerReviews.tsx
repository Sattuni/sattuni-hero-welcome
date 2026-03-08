import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useMobileDetection } from "@/hooks/useMobileDetection";

interface Review {
  name: string;
  company: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Linda A.",
    company: "WHU",
    text: "Die Zusammenarbeit ist jedes Mal eine große Freude. Die Kommunikation ist stets unkompliziert, klar und verlässlich. Das Essen ist durchgehend hervorragend. Besonders schätzen wir die hohe Flexibilität und absolute Zuverlässigkeit.",
  },
  {
    name: "Sabrina M.",
    company: "Google Bewertung",
    text: "Sattuni hat das Catering für unsere Hochzeit gemacht und es war einfach alles so lecker und perfekt! Wir hatten ein rein vegetarisches Buffet und alle waren begeistert! 100% weiterzuempfehlen!",
  },
  {
    name: "Sylvia G.",
    company: "BCG",
    text: "Das Essen war hervorragend – es blieben keine Wünsche offen. Hamudi hat viele kreative Ideen eingebracht. Wir haben sehr begeistertes Feedback vom gesamten Team erhalten! Absolut empfehlenswert!",
  },
  {
    name: "Natalie S.",
    company: "Ranger",
    text: "Hamudi war super freundlich und kundenorientiert. Am Tag selbst war er zuverlässig, schnell und hat sich um alles gekümmert. Eine tolle Atmosphäre geschaffen. Wärmstens empfohlen.",
  },
  {
    name: "Silke E.",
    company: "Leonardo",
    text: "Die Anlieferung erfolgte immer pünktlich und das Essen ist immer frisch und sehr appetitlich angerichtet. Gäste und Mitarbeiter sind begeistert. Empfehle ihn zu 100% weiter.",
  },
  {
    name: "Valerie T.",
    company: "BCG",
    text: "Wir haben schon mehrfach bestellt und jedes Mal war der Service SUPER. Von der Planung bis zur Anlieferung reibungslos. Hamudi ist unglaublich zuverlässig. Wärmstens empfohlen!",
  },
];

const ReviewCard = ({ review }: { review: Review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMobileDetection();
  const previewLength = isMobile ? 120 : 150;
  const needsExpansion = review.text.length > previewLength;
  const displayText = isExpanded || !needsExpansion 
    ? review.text 
    : review.text.slice(0, previewLength) + "...";

  return (
    <Card className="bg-card/80 border-primary/20 hover:shadow-warm transition-all duration-300 h-full">
      <CardContent className="p-4 md:p-5 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-primary-foreground">{review.name.charAt(0)}</span>
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">{review.name}</h3>
            <p className="text-xs text-primary font-medium">{review.company}</p>
          </div>
        </div>
        
        <div className="flex gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-accent text-accent" />
          ))}
        </div>
        
        <p className="text-muted-foreground leading-relaxed text-sm flex-1">
          {displayText}
        </p>
        
        {needsExpansion && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 mt-2 text-primary hover:text-primary/80 font-medium text-xs min-h-[36px] touch-manipulation"
          >
            {isExpanded ? <>Weniger <ChevronUp className="w-3 h-3" /></> : <>Mehr <ChevronDown className="w-3 h-3" /></>}
          </button>
        )}
      </CardContent>
    </Card>
  );
};

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useMobileDetection();
  
  const cardsPerView = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(reviews.length / cardsPerView);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides, isPaused]);

  return (
    <section 
      className="py-10 md:py-16 bg-gradient-subtle overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-3xl font-bold text-foreground text-center mb-8">
            Das sagen unsere Kunden
          </h2>

          {/* Carousel */}
          <div className="relative">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-5 z-10 w-8 h-8 md:w-10 md:h-10 bg-card border border-border rounded-full flex items-center justify-center shadow hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Vorherige"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % totalSlides)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-5 z-10 w-8 h-8 md:w-10 md:h-10 bg-card border border-border rounded-full flex items-center justify-center shadow hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Nächste"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="overflow-hidden mx-6 md:mx-8">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className={`grid gap-4 ${cardsPerView === 1 ? 'grid-cols-1' : 'grid-cols-3'}`}>
                      {reviews.slice(slideIndex * cardsPerView, slideIndex * cardsPerView + cardsPerView).map((review, index) => (
                        <ReviewCard key={slideIndex * cardsPerView + index} review={review} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-muted hover:bg-primary/50"
                }`}
                aria-label={`Bewertung ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <Button 
              variant="outline"
              size="sm"
              className="gap-2 border-primary/30 hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.location.href = '/catering'}
            >
              Jetzt Catering anfragen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
