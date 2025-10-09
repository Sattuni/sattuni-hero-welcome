import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Import buffet images
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

const buffetImages = [
  { src: bowls1, title: "Bowl Buffet", description: "Gesunde Bowls mit frischen Zutaten" },
  { src: dips1, title: "Dips & Vorspeisen", description: "Hummus, Baba Ghanousch und mehr" },
  { src: falafel1, title: "Falafel & Teigtaschen", description: "Hausgemachte Spezialitäten" },
  { src: bowls2, title: "Orientalisches Buffet", description: "Vielfältige arabische Küche" },
  { src: dips2, title: "Mezze Platte", description: "Traditionelle Vorspeisen-Auswahl" },
  { src: dips3, title: "Hummus", description: "Cremiger Hummus mit Kichererbsen" },
  { src: bowls3, title: "Tabouleh Salat", description: "Frischer arabischer Petersiliensalat" },
  { src: bowls4, title: "Fattoush Salat", description: "Knuspriger Brotsalat" },
  { src: dips4, title: "Sandwich Platte", description: "Frische Sandwiches" },
  { src: falafel2, title: "Falafel & Teigtaschen", description: "Knusprige Spezialitäten" },
];

interface BuffetGalleryProps {
  className?: string;
}

export const BuffetGallery = ({ className = "" }: BuffetGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % buffetImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + buffetImages.length) % buffetImages.length);
    }
  };


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

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {buffetImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            // onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              // alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-2 left-2 right-2 text-white">
                {/* <h4 className="font-semibold text-sm mb-1">{image.title}</h4>
                <p className="text-xs opacity-90 line-clamp-2">{image.description}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          {selectedImage !== null && (
            <div className="relative">
              {/* <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={closeLightbox}
              >
                <X className="w-5 h-5" />
              </Button> */}

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={prevImage}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={nextImage}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              <div className="relative">
                <img
                  src={buffetImages[selectedImage].src}
                  alt={buffetImages[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  {/* <h3 className="text-xl font-bold mb-2">{buffetImages[selectedImage].title}</h3>
                  <p className="text-sm opacity-90">{buffetImages[selectedImage].description}</p> */}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BuffetGallery;