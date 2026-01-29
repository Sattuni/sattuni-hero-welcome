import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useMemo } from "react";

// Import images from each category
import buffetElegant from "@/assets/gallery/buffets/buffet-elegant-saal.jpg";
import konferenzBuffet from "@/assets/gallery/buffets/konferenz-buffet-50-1.jpg";
import officeBuffet from "@/assets/gallery/buffets/office-catering-40.jpg";
import workshopCatering from "@/assets/gallery/buffets/workshop-catering.jpg";

import hummus from "@/assets/gallery/dips-salate/hummus.jpg";
import tabouleh from "@/assets/gallery/dips-salate/tabouleh.jpg";
import fattoush from "@/assets/gallery/dips-salate/fattoush.jpg";
import babaGanoush from "@/assets/gallery/dips-salate/baba-ganoush.jpg";

import falafel from "@/assets/gallery/fingerfood/falafel.jpg";
import wraps from "@/assets/gallery/fingerfood/wraps.jpg";
import kibbeh from "@/assets/gallery/fingerfood/kibbeh-sambousek.jpg";
import blaetterteig from "@/assets/gallery/fingerfood/blaetterteig.jpg";

// Image pools per category
const buffetImages = [
  { src: buffetElegant, alt: "Elegantes Buffet im Saal", label: "Buffets" },
  { src: konferenzBuffet, alt: "Konferenz-Buffet für 50 Personen", label: "Buffets" },
  { src: officeBuffet, alt: "Office Catering für 40 Personen", label: "Buffets" },
  { src: workshopCatering, alt: "Workshop Catering", label: "Buffets" },
];

const dipsImages = [
  { src: hummus, alt: "Cremiger Hummus", label: "Dips & Salate" },
  { src: tabouleh, alt: "Frischer Tabouleh Salat", label: "Dips & Salate" },
  { src: fattoush, alt: "Knackiger Fattoush Salat", label: "Dips & Salate" },
  { src: babaGanoush, alt: "Baba Ganoush", label: "Dips & Salate" },
];

const fingerfoodImages = [
  { src: falafel, alt: "Knusprige Falafel", label: "Fingerfood" },
  { src: wraps, alt: "Gefüllte Wraps", label: "Fingerfood" },
  { src: kibbeh, alt: "Kibbeh und Sambousek", label: "Fingerfood" },
  { src: blaetterteig, alt: "Blätterteig-Gebäck", label: "Fingerfood" },
];

// Helper to get random item from array
const getRandomItem = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

interface CateringGalleryTeaserProps {
  className?: string;
}

const CateringGalleryTeaser = ({ className = "" }: CateringGalleryTeaserProps) => {
  // Get one random image from each category on mount
  const selectedImages = useMemo(() => [
    getRandomItem(buffetImages),
    getRandomItem(dipsImages),
    getRandomItem(fingerfoodImages),
  ], []);

  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Einblicke in unsere Arbeit
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Echte Bilder von echten Events – ungestellt und authentisch.
          </p>
        </div>

        {/* 3-Image Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {selectedImages.map((image, index) => (
            <Link
              key={index}
              to="/catering/galerie"
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-white text-xs md:text-sm font-medium">
                    {image.label}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Link to full gallery */}
        <div className="text-center mt-6">
          <Link
            to="/catering/galerie"
            className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
          >
            Alle Bilder ansehen
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CateringGalleryTeaser;
