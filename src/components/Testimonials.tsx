import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const reviews = [
    {
      name: "Alban S.",
      rating: 5,
      text: "Ordered there for a company event and everyone loved the food. It arrived on time and super fresh. Definitely will order there again :)",
      timeAgo: "2 years ago"
    },
    {
      name: "Joe",
      rating: 5,
      text: "You can taste the love. Everything is so fresh and flavors are well balanced. Thank you",
      timeAgo: "a year ago"
    },
    {
      name: "Dennis M.",
      rating: 5,
      text: "Super tasty food, consistently high quality, fast delivery, fair prices.",
      timeAgo: "6 months ago"
    },
    {
      name: "Sarah K.",
      rating: 5,
      text: "It's a small restaurant, nicely decorated and they also offer take away.",
      timeAgo: "8 months ago"
    },
    {
      name: "Alex T.",
      rating: 5,
      text: "I like particularly the main dishes and the rice!",
      timeAgo: "4 months ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? "fill-yellow-400 text-yellow-400" 
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-6 bg-gradient-hero">
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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm"
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
                  <p className="text-foreground leading-relaxed">
                    &quot;{review.text}&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary-foreground">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium text-foreground">
                      {review.name}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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