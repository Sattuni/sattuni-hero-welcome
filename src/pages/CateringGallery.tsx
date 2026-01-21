import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSiteMode } from "@/contexts/SiteModeContext";
import { ChevronLeft, ChevronRight, X, Camera, Utensils, Grid3X3 } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import ModeHeader from "@/components/layout/ModeHeader";

// Import all gallery images
import bowls1 from "@/assets/buffet-gallery/bowls/1.png";
import bowls2 from "@/assets/buffet-gallery/bowls/2.png";
import bowlsIMG1 from "@/assets/buffet-gallery/bowls/img-0779.jpg";
import bowlsIMG2 from "@/assets/buffet-gallery/bowls/img-1308.jpg";
import bowlsIMG3 from "@/assets/buffet-gallery/bowls/img-3256.jpg";
import bowlsIMG4 from "@/assets/buffet-gallery/bowls/img-4074.jpg";
import bowls3 from "@/assets/buffet-gallery/bowls2/3.png";
import bowls4 from "@/assets/buffet-gallery/bowls2/4.png";
import bowls5 from "@/assets/buffet-gallery/bowls2/5.png";
import dips6 from "@/assets/buffet-gallery/dips/6.png";
import dips7 from "@/assets/buffet-gallery/dips/7.png";
import dips15 from "@/assets/buffet-gallery/dips/15.png";
import dips16 from "@/assets/buffet-gallery/dips/16.png";
import dips2_10 from "@/assets/buffet-gallery/dips2/10.png";
import dips2_11 from "@/assets/buffet-gallery/dips2/11.png";
import dips2_14 from "@/assets/buffet-gallery/dips2/14.png";
import dips2_15 from "@/assets/buffet-gallery/dips2/15.png";
import falafel2 from "@/assets/buffet-gallery/falafel/2.png";
import falafel8 from "@/assets/buffet-gallery/falafel/8.png";
import falafel9 from "@/assets/buffet-gallery/falafel/9.png";
import falafel12 from "@/assets/buffet-gallery/falafel/12.png";
import falafel13 from "@/assets/buffet-gallery/falafel/13.png";

type Category = "all" | "bowls" | "dips" | "falafel" | "buffet";

interface GalleryImage {
  src: string;
  title: string;
  category: Category;
  size?: "small" | "medium" | "large";
}

const galleryImages: GalleryImage[] = [
  // Bowls & Salate
  { src: bowls1, title: "Kichererbsen Salat", category: "bowls", size: "large" },
  { src: bowls2, title: "Frischer Bowl", category: "bowls", size: "medium" },
  { src: bowlsIMG1, title: "Bunter Salat Bowl", category: "bowls", size: "small" },
  { src: bowlsIMG2, title: "Mezze Bowl Auswahl", category: "bowls", size: "medium" },
  { src: bowlsIMG3, title: "Gemischte Salate", category: "bowls", size: "large" },
  { src: bowlsIMG4, title: "Orientalische Bowls", category: "bowls", size: "small" },
  { src: bowls3, title: "Käse Salat", category: "bowls", size: "medium" },
  { src: bowls4, title: "Tabouleh Salat", category: "bowls", size: "small" },
  { src: bowls5, title: "Fattoush Salat", category: "bowls", size: "large" },
  
  // Dips & Vorspeisen
  { src: dips6, title: "Hummus Classic", category: "dips", size: "medium" },
  { src: dips7, title: "Baba Ghanousch", category: "dips", size: "large" },
  { src: dips15, title: "Muhammara", category: "dips", size: "small" },
  { src: dips16, title: "Dip Auswahl", category: "dips", size: "medium" },
  { src: dips2_10, title: "Hummus Variationen", category: "dips", size: "small" },
  { src: dips2_11, title: "Mezze Dips", category: "dips", size: "large" },
  { src: dips2_14, title: "Cremiger Hummus", category: "dips", size: "medium" },
  { src: dips2_15, title: "Orientalische Dips", category: "dips", size: "small" },
  
  // Falafel & Spezialitäten
  { src: falafel2, title: "Falafel Klassisch", category: "falafel", size: "large" },
  { src: falafel8, title: "Knusprige Falafel", category: "falafel", size: "medium" },
  { src: falafel9, title: "Falafel Platte", category: "falafel", size: "small" },
  { src: falafel12, title: "Falafel Bowl", category: "falafel", size: "medium" },
  { src: falafel13, title: "Falafel Auswahl", category: "falafel", size: "large" },
];

const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "Alle", icon: <Grid3X3 className="w-4 h-4" /> },
  { id: "bowls", label: "Bowls & Salate", icon: <Utensils className="w-4 h-4" /> },
  { id: "dips", label: "Dips & Mezze", icon: <Utensils className="w-4 h-4" /> },
  { id: "falafel", label: "Falafel", icon: <Utensils className="w-4 h-4" /> },
];

const CateringGallery = () => {
  const { setMode } = useSiteMode();
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setMode("catering");
    setIsLoaded(true);
  }, [setMode]);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages.length]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Galerie | Sattuni Catering Düsseldorf</title>
        <meta 
          name="description" 
          content="Entdecke unsere kulinarischen Kreationen – von frischen Bowls über cremige Dips bis hin zu aufgebauten Buffets für dein Event." 
        />
      </Helmet>

      <ModeHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-sage/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
            <span className="mx-2">/</span>
            <Link to="/catering" className="hover:text-primary transition-colors">Catering</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Galerie</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Camera className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Einblicke in unsere Küche</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Unsere <span className="text-primary">Kulinarischen</span> Kreationen
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Von der Vorbereitung bis zum fertigen Buffet – erlebe die Vielfalt unserer orientalischen Küche
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 md:top-20 z-40 py-4 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
                className="gap-2 transition-all duration-300"
              >
                {cat.icon}
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className={`
                  break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl
                  transition-all duration-500 ease-out
                  ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(index)}
              >
                {/* Image Container with dynamic height based on size */}
                <div className={`
                  relative overflow-hidden
                  ${image.size === "large" ? "aspect-[3/4]" : ""}
                  ${image.size === "medium" ? "aspect-square" : ""}
                  ${image.size === "small" ? "aspect-[4/3]" : ""}
                `}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Badge variant="secondary" className="mb-2 bg-primary/90 text-primary-foreground">
                        {categories.find(c => c.id === image.category)?.label}
                      </Badge>
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">Keine Bilder in dieser Kategorie gefunden.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-transparent to-sage/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Gefällt dir was du siehst?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Lass uns gemeinsam dein perfektes Buffet zusammenstellen – wir beraten dich gerne!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/catering#anfrage">
                Jetzt Anfrage stellen
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/catering/menus">
                Menüs ansehen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none overflow-hidden">
          {selectedImage !== null && (
            <div className="relative flex items-center justify-center min-h-[60vh] md:min-h-[80vh]">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 w-12 h-12"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 w-12 h-12"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Image */}
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[85vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="max-w-xl mx-auto text-center">
                  <Badge variant="secondary" className="mb-2 bg-primary/90 text-primary-foreground">
                    {categories.find(c => c.id === filteredImages[selectedImage].category)?.label}
                  </Badge>
                  <h3 className="text-white text-xl font-semibold">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <p className="text-white/60 text-sm mt-2">
                    {selectedImage + 1} / {filteredImages.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CateringGallery;
