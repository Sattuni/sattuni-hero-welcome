import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Review {
  name: string;
  company: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Linda A.",
    company: "WHU",
    text: "Die Zusammenarbeit ist jedes Mal eine große Freude. Die Kommunikation ist stets unkompliziert, klar und verlässlich. Das Essen ist durchgehend hervorragend und kommt bei allen Teilnehmenden sehr gut an. Besonders schätzen wir die hohe Flexibilität und absolute Zuverlässigkeit – auch bei kurzfristigen Änderungen. Das Team bringt immer tolle Ideen und passende Lösungen ein und ist offen dafür, Neues auszuprobieren. Ein Catering-Partner, auf den man sich jederzeit verlassen kann."
  },
  {
    name: "Natalie S.",
    company: "Ranger",
    text: "Hamudi hat uns bei unserem letzten Gesundheitstag mit drei leckeren Smoothies und einem orientalischen Catering unterstützt. Schon die Vorbereitung auf den Tag war total angenehm, Hamudi war super freundlich und kundenorientiert und ging auf all unsere Wünsche sofort ein. Am Tag selbst war er zuverlässig, schnell und hat sich um alles gekümmert – wir mussten uns um nichts sorgen. Hamudi hat alles aufgebaut, abgeräumt und währenddessen die Mitarbeitenden hervorragend betreut. Er war auf einer Wellenlänge mit unseren Kollegen und hat eine tolle Atmosphäre geschaffen. Ich kann die Zusammenarbeit nur wärmstens empfehlen."
  },
  {
    name: "Sylvia G.",
    company: "BCG",
    text: "Die Zusammenarbeit mit Hamudi und seiner Crew im Rahmen unseres Team-Events war ein echtes Highlight! Das Essen war hervorragend - es blieben keine Wünsche offen und es wurde an jedes Detail gedacht. Der Service war herzlich, zuvorkommend und durchweg professionell. Schon in der Vorbesprechung hat Hamudi viele kreative Ideen eingebracht, die weit über klassisches Catering hinausgingen - und wir wurden nicht enttäuscht. Im Gegenteil: Wir haben sehr begeistertes Feedback vom gesamten Team erhalten! Hamudi steht für Qualität, Begeisterung und die berühmte Extrameile - absolut empfehlenswert und jederzeit wieder!"
  },
  {
    name: "Valerie T.",
    company: "BCG",
    text: "Wir haben schon mehrfach Essen für unsere Events bei Hamudi bestellt und jedes Mal war der Service SUPER. Von der Planung bis zur Anlieferung verlief alles reibungslos. Hamudi ist unglaublich zuverlässig und als uns bei einem Event der Barkeeper kurzfristig abgesprungen ist, hat sein Team spontan ausgeholfen. Das Essen ist großartig und die Kommunikation immer schnell, unkompliziert und sehr freundlich. Vielen Dank an Hammudi und sein Team! Ich kann ihn nur wärmstens empfehlen!"
  },
  {
    name: "Elham N.",
    company: "WHU",
    text: "Pretty sure that he is one of the best catering providers in Dusseldorf. A super delicious food, friendliness, communicative and politeness are the some of his service. The best Arabic cuisine I have ever seen. I really recommend him for everyone."
  },
  {
    name: "Silke B.",
    company: "BCG",
    text: "Sehr professionell und absolut zuverlässig. Die Gerichte sind köstlich und qualitativ sehr hochwertig. Die Zusammenarbeit ist äußerst angenehm"
  },
  {
    name: "Silke E.",
    company: "Leonardo",
    text: "Unsere Firma hat nun schon mehrmals bei Hamudi Essen für Gäste unseres Unternehmens bestellt. Die Anlieferung erfolgte immer pünktlich und das Essen ist immer frisch und sehr appetitlich angerichtet. Sowohl die Gäste, als auch unsere eigenen Mitarbeiter(inklusive mir) sind begeistert. Es macht Spaß mit ihm zusammenzuarbeiten und ich empfehle ihn zu 100% weiter. Wer auf gutes Essen UND guten, freundlichen, zuverlässigen Service Wert legt, ist hier richtig."
  }
];

const ReviewCard = ({ review }: { review: Review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewLength = 150;
  const needsExpansion = review.text.length > previewLength;
  const displayText = isExpanded || !needsExpansion 
    ? review.text 
    : review.text.slice(0, previewLength) + "...";

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-lg font-bold text-primary-foreground">
              {review.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-bold text-foreground">{review.name}</h3>
            <p className="text-sm text-primary font-medium">von {review.company}</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>
        
        <div className="flex-1">
          <Quote className="w-6 h-6 text-primary/30 mb-2" />
          <p className="text-muted-foreground leading-relaxed text-sm">
            {displayText}
          </p>
        </div>
        
        {needsExpansion && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 mt-4 text-primary hover:text-primary/80 font-medium transition-colors text-sm"
          >
            {isExpanded ? (
              <>
                Weniger anzeigen <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Mehr lesen <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </CardContent>
    </Card>
  );
};

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Responsive: 1 card on mobile, 2 on tablet, 3 on desktop
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  
  const [cardsPerView, setCardsPerView] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / cardsPerView);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <section 
      className="py-16 lg:py-24 bg-gradient-subtle overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Das sagen unsere Kunden
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Echte Bewertungen von Unternehmen, die uns ihr Vertrauen schenken.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-lg font-bold text-foreground">5.0</span>
              <span className="text-muted-foreground">von Business-Kunden</span>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-card border border-primary/20 rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Vorherige Bewertungen"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-card border border-primary/20 rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Nächste Bewertungen"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Carousel */}
            <div className="overflow-hidden mx-6 lg:mx-8">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className={`grid gap-6 ${
                      cardsPerView === 1 ? 'grid-cols-1' : 
                      cardsPerView === 2 ? 'grid-cols-2' : 
                      'grid-cols-3'
                    }`}>
                      {reviews.slice(slideIndex * cardsPerView, slideIndex * cardsPerView + cardsPerView).map((review, index) => (
                        <ReviewCard 
                          key={slideIndex * cardsPerView + index}
                          review={review}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted hover:bg-primary/50"
                }`}
                aria-label={`Gehe zu Bewertungsgruppe ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Button 
              variant="outline"
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
