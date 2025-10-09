import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import buffet images - verified paths
import bowls1 from "@/assets/buffet-gallery/bowls/1.png";
import bowls2 from "@/assets/buffet-gallery/bowls2/3.png";
import bowls3 from "@/assets/buffet-gallery/bowls2/4.png";
import bowls4 from "@/assets/buffet-gallery/bowls2/5.png";
import dips1 from "@/assets/buffet-gallery/dips/7.png";
import dips2 from "@/assets/buffet-gallery/dips2/14.png";
import dips3 from "@/assets/buffet-gallery/dips/6.png";
import dips4 from "@/assets/buffet-gallery/dips2/15.png";
import falafel1 from "@/assets/buffet-gallery/falafel/12.png";
import falafel2 from "@/assets/buffet-gallery/falafel/2.png";

console.log('BuffetGallery images loaded:', { bowls1, bowls2, bowls3, bowls4, dips1, dips2, dips3, dips4, falafel1, falafel2 });

const buffetImages = [
  { src: bowls1, title: "Kichererbsen Salat", description: "Gesunde Bowls mit frischen Zutaten" },
  { src: dips1, title: "Dips & Vorspeisen", description: "Hummus, Baba Ghanousch und mehr" },
  { src: falafel1, title: "Fingerfood Spezialität", description: "Hausgemachte Spezialitäten" },
  { src: bowls2, title: "Käse Salat", description: "Vielfältige arabische Küche" },
  { src: dips2, title: "Fingerfood", description: "Traditionelle Vorspeisen-Auswahl" },
  { src: dips3, title: "Hummus", description: "Cremiger Hummus mit Kichererbsen" },
  { src: bowls3, title: "Tabouleh Salat", description: "Frischer arabischer Petersiliensalat" },
  { src: bowls4, title: "Fattoush Salat", description: "Petersilie mit Sonnenblumenkernen und Granatapfelkernen" },
  { src: dips4, title: "Sandwich Platte", description: "Frische Sandwiches" },
  { src: falafel2, title: "Fingerfood Spezialität", description: "Knusprige Spezialitäten" },
];

interface BuffetGalleryProps {
  className?: string;
}

export const BuffetGallery = ({ className = "" }: BuffetGalleryProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  console.log('BuffetGallery rendering, images count:', buffetImages.length);
  console.log('Embla API initialized:', !!emblaApi);

  return (
    <div className={className}>
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Unsere Buffets in Aktion
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Entdeckt unsere liebevoll arrangierten Buffets für verschiedene Anlässe
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative min-h-[400px] bg-muted/10 rounded-lg">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {buffetImages.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_85%] md:flex-[0_0_70%] lg:flex-[0_0_80%] pl-4"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-semibold text-lg mb-1">{image.title}</h4>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg lg:w-12 lg:h-12 transition-all hover:scale-110"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg lg:w-12 lg:h-12 transition-all hover:scale-110"
          onClick={scrollNext}
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </Button>
      </div>

      <div className="text-center mt-6 text-sm text-muted-foreground">
        Swipe oder nutze die Pfeile zum Durchblättern • Auto-Play aktiv
      </div>
    </div>
  );
};

export default BuffetGallery;
