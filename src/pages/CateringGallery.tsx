import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSiteMode } from "@/contexts/SiteModeContext";
import { ChevronLeft, ChevronRight, X, Camera, Utensils, Grid3X3, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useMobileDetection } from "@/hooks/useMobileDetection";
import SEOHead from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import ModeHeader from "@/components/layout/ModeHeader";
// Gallery images - Dips & Salate
import tabouleh from "@/assets/gallery/dips-salate/tabouleh.jpg";
import hummus from "@/assets/gallery/dips-salate/hummus.jpg";
import babaGanoush from "@/assets/gallery/dips-salate/baba-ganoush.jpg";
import auberginenDip from "@/assets/gallery/dips-salate/auberginen-dip.jpg";
import hummusBuffet from "@/assets/gallery/dips-salate/hummus-buffet.jpg";
import kichererbsenSalat from "@/assets/gallery/dips-salate/kichererbsen-salat.jpg";
import fetaSalat from "@/assets/gallery/dips-salate/feta-salat.jpg";
import petersilienSalat from "@/assets/gallery/dips-salate/petersilien-salat.jpg";
import fattoush from "@/assets/gallery/dips-salate/fattoush.jpg";
import kartoffelsalat from "@/assets/gallery/dips-salate/kartoffelsalat.jpg";
import gemueseSalat from "@/assets/gallery/dips-salate/gemuese-salat.jpg";
import rucolaSalat from "@/assets/gallery/dips-salate/rucola-salat.jpg";
import couscousSalat from "@/assets/gallery/dips-salate/couscous-salat.jpg";

// Gallery images - Fingerfood & Gebäck
import falafel from "@/assets/gallery/fingerfood/falafel.jpg";
import kibbehSambousek from "@/assets/gallery/fingerfood/kibbeh-sambousek.jpg";
import blaetterteig from "@/assets/gallery/fingerfood/blaetterteig.jpg";
import teigrollen from "@/assets/gallery/fingerfood/teigrollen.jpg";
import wraps from "@/assets/gallery/fingerfood/wraps.jpg";
import falafelHaeppchen1 from "@/assets/gallery/fingerfood/falafel-haeppchen-1.jpg";
import falafelHaeppchen2 from "@/assets/gallery/fingerfood/falafel-haeppchen-2.jpg";
import falafelHaeppchen3 from "@/assets/gallery/fingerfood/falafel-haeppchen-3.jpg";
import pasteten1 from "@/assets/gallery/fingerfood/pasteten-1.jpg";
import pasteten2 from "@/assets/gallery/fingerfood/pasteten-2.jpg";
import fruehstueckBrot1 from "@/assets/gallery/fingerfood/fruehstueck-brot-1.jpg";
import fruehstueckBrot2 from "@/assets/gallery/fingerfood/fruehstueck-brot-2.jpg";
import eventFingerfood1 from "@/assets/gallery/fingerfood/event-fingerfood-1.png";
import eventFingerfood2 from "@/assets/gallery/fingerfood/event-fingerfood-2.png";
import eventFingerfood3 from "@/assets/gallery/fingerfood/event-fingerfood-3.png";
import eventFingerfood4 from "@/assets/gallery/fingerfood/event-fingerfood-4.png";
import eventFingerfood5 from "@/assets/gallery/fingerfood/event-fingerfood-5.png";
import eventFingerfood6 from "@/assets/gallery/fingerfood/event-fingerfood-6.png";
import dessertVegan1 from "@/assets/gallery/fingerfood/dessert-vegan-1.jpg";
import dessertVegan2 from "@/assets/gallery/fingerfood/dessert-vegan-2.jpg";

// Gallery images - Buffets
import fleischFladenbrot from "@/assets/gallery/buffets/fleisch-fladenbrot.jpg";
import buffetTheke from "@/assets/gallery/buffets/buffet-theke.jpg";
import bueroCatering from "@/assets/gallery/buffets/buero-catering.jpg";
import buffetAufbau from "@/assets/gallery/buffets/buffet-aufbau.jpg";
import buffetMeetEat from "@/assets/gallery/buffets/buffet-meet-eat.jpg";
import buffetTerrasse from "@/assets/gallery/buffets/buffet-terrasse.jpg";
import hauptgerichteChafing from "@/assets/gallery/buffets/hauptgerichte-chafing.jpg";
import buffetSalateBowls from "@/assets/gallery/buffets/buffet-salate-bowls.jpg";
import buffetVeganChafing from "@/assets/gallery/buffets/buffet-vegan-chafing.jpg";
import buffetHauptgerichteOffen from "@/assets/gallery/buffets/buffet-hauptgerichte-offen.jpg";
import buffetHaehnchenReis from "@/assets/gallery/buffets/buffet-haehnchen-reis.jpg";
import buffetDipsBrot from "@/assets/gallery/buffets/buffet-dips-brot.jpg";
import buffetModernSideboard from "@/assets/gallery/buffets/buffet-modern-sideboard.jpg";
import buffetMeetEat2 from "@/assets/gallery/buffets/buffet-meet-eat-2.jpg";
import buffetSalateLampen from "@/assets/gallery/buffets/buffet-salate-lampen.jpg";
import okraBulgur from "@/assets/gallery/buffets/okra-bulgur.jpg";
import buffetDipsSalateReihe from "@/assets/gallery/buffets/buffet-dips-salate-reihe.jpg";
import grossesBuffetEvent from "@/assets/gallery/buffets/grosses-buffet-event.jpg";
import buffetVielfaltChafing from "@/assets/gallery/buffets/buffet-vielfalt-chafing.jpg";
import buffetElegantSaal from "@/assets/gallery/buffets/buffet-elegant-saal.jpg";
import babaGanoushElegant from "@/assets/gallery/buffets/baba-ganoush-elegant.jpg";
import couscousElegant from "@/assets/gallery/buffets/couscous-elegant.jpg";
// New buffet images
import meetingCatering15 from "@/assets/gallery/buffets/meeting-catering-15.jpg";
import kundenbesuchCatering from "@/assets/gallery/buffets/kundenbesuch-catering.jpg";
import workshopCatering from "@/assets/gallery/buffets/workshop-catering.jpg";
import kafkaHauptspeise from "@/assets/gallery/buffets/kafka-hauptspeise.jpg";
import couscousReis from "@/assets/gallery/buffets/couscous-reis.jpg";
import officeCatering40 from "@/assets/gallery/buffets/office-catering-40.jpg";
import konferenzBuffet501 from "@/assets/gallery/buffets/konferenz-buffet-50-1.jpg";
import konferenzBuffet502 from "@/assets/gallery/buffets/konferenz-buffet-50-2.jpg";
// New dips image
import auberginencreme from "@/assets/gallery/dips-salate/auberginencreme.jpg";
// New dips buffet images
import kichererbsenSalatBuffet from "@/assets/gallery/dips-salate/kichererbsen-salat-buffet.jpg";
import taboulehBuffet from "@/assets/gallery/dips-salate/tabouleh-buffet.jpg";
import fattoushBuffet from "@/assets/gallery/dips-salate/fattoush-buffet.jpg";
import babaGanoushBuffet from "@/assets/gallery/dips-salate/baba-ganoush-buffet.jpg";
import hummusBuffetNew from "@/assets/gallery/dips-salate/hummus-buffet-new.jpg";
// New buffet birthday images
import geburtstagsbuffet90 from "@/assets/gallery/buffets/geburtstagsbuffet-90.jpg";
import entrecote from "@/assets/gallery/buffets/entrecote.jpg";
import haehnchenfleisch from "@/assets/gallery/buffets/haehnchenfleisch.jpg";
import ofenkartoffeln from "@/assets/gallery/buffets/ofenkartoffeln.jpg";
import arabischerReisGemuese from "@/assets/gallery/buffets/arabischer-reis-gemuese.jpg";
import geburtstagsbuffetHauptgang from "@/assets/gallery/buffets/geburtstagsbuffet-hauptgang.jpg";
// New dips images - Einwegschalen
import arabischerFrischkaese from "@/assets/gallery/dips-salate/arabischer-frischkaese.jpg";
import babaGhanouschSchale from "@/assets/gallery/dips-salate/baba-ghanousch-schale.jpg";
import taboulehSchale from "@/assets/gallery/dips-salate/tabouleh-schale.jpg";
// New fingerfood images - Einwegschalen & Fladenbrote
import lahmacunSchale from "@/assets/gallery/fingerfood/lahmacun-schale.jpg";
import miniFladenbrotHackfleisch from "@/assets/gallery/fingerfood/mini-fladenbrot-hackfleisch.jpg";
import miniFladenbrotPaprikaSpinat from "@/assets/gallery/fingerfood/mini-fladenbrot-paprika-spinat.jpg";
import miniFladenbrotThymian from "@/assets/gallery/fingerfood/mini-fladenbrot-thymian.jpg";

type Category = "all" | "dips-salate" | "fingerfood" | "buffets";

interface GalleryImage {
  src: string;
  title: string;
  category: Category;
  size?: "small" | "medium" | "large";
}

const galleryImages: GalleryImage[] = [
  // Gemischte Reihenfolge für harmonische Ansicht (Buffet = voller Hintergrund, Dips/Fingerfood = weißer Hintergrund)
  { src: buffetElegantSaal, title: "Elegantes Saal-Buffet", category: "buffets", size: "large" },
  { src: tabouleh, title: "Tabouleh", category: "dips-salate", size: "medium" },
  { src: falafel, title: "Falafel", category: "fingerfood", size: "medium" },
  { src: buffetVielfaltChafing, title: "Buffet-Vielfalt", category: "buffets", size: "large" },
  { src: hummus, title: "Hummus", category: "dips-salate", size: "medium" },
  { src: grossesBuffetEvent, title: "Buffet Office 120 Personen", category: "buffets", size: "large" },
  { src: kibbehSambousek, title: "Kibbeh & Fatayer", category: "fingerfood", size: "medium" },
  { src: babaGanoush, title: "Baba Ganoush", category: "dips-salate", size: "medium" },
  { src: buffetSalateBowls, title: "Salate & Bowls Buffet", category: "buffets", size: "large" },
  { src: blaetterteig, title: "Blätterteig-Gebäck", category: "fingerfood", size: "large" },
  { src: couscousElegant, title: "Couscous Elegant", category: "buffets", size: "large" },
  { src: auberginenDip, title: "Baba Ghanousch Buffet", category: "dips-salate", size: "medium" },
  { src: buffetVeganChafing, title: "Buffet Office 100 Personen", category: "buffets", size: "large" },
  { src: teigrollen, title: "Teigrollen", category: "fingerfood", size: "large" },
  { src: hummusBuffet, title: "Hummus Buffet", category: "dips-salate", size: "large" },
  { src: babaGanoushElegant, title: "Baba Ganoush Elegant", category: "buffets", size: "large" },
  { src: wraps, title: "Lahmacun vegan", category: "fingerfood", size: "large" },
  { src: buffetDipsSalateReihe, title: "Dips & Salate Reihe", category: "buffets", size: "large" },
  { src: kichererbsenSalat, title: "Kichererbsen-Salat", category: "dips-salate", size: "medium" },
  { src: buffetMeetEat, title: "Meet & Eat Buffet", category: "buffets", size: "large" },
  { src: falafelHaeppchen1, title: "Avocadocream", category: "fingerfood", size: "medium" },
  { src: fetaSalat, title: "Feta-Salat", category: "dips-salate", size: "medium" },
  { src: buffetTheke, title: "Fingerfood Office 30 Personen", category: "buffets", size: "large" },
  { src: falafelHaeppchen2, title: "Fingerfood Brot", category: "fingerfood", size: "medium" },
  { src: okraBulgur, title: "Okra & Bulgur", category: "buffets", size: "large" },
  { src: petersilienSalat, title: "Tabouleh Buffet", category: "dips-salate", size: "medium" },
  { src: bueroCatering, title: "Büro-Catering Fingerfood", category: "buffets", size: "large" },
  { src: falafelHaeppchen3, title: "Rind Fingerfood", category: "fingerfood", size: "medium" },
  { src: fattoush, title: "Fattoush", category: "dips-salate", size: "medium" },
  { src: buffetHauptgerichteOffen, title: "Hauptgericht Büro", category: "buffets", size: "large" },
  { src: pasteten1, title: "Hummus Fingerfood", category: "fingerfood", size: "medium" },
  { src: buffetAufbau, title: "Buffet 20 Personen", category: "buffets", size: "large" },
  { src: kartoffelsalat, title: "Kartoffelsalat", category: "dips-salate", size: "large" },
  { src: buffetTerrasse, title: "Hochzeit Buffet", category: "buffets", size: "large" },
  { src: pasteten2, title: "Baba Ghanousch Fingerfood", category: "fingerfood", size: "medium" },
  { src: gemueseSalat, title: "Gemüse-Salat", category: "dips-salate", size: "large" },
  { src: hauptgerichteChafing, title: "Hauptgerichte im Chafing", category: "buffets", size: "large" },
  { src: rucolaSalat, title: "Rucola-Salat", category: "dips-salate", size: "large" },
  { src: buffetHaehnchenReis, title: "Hähnchen & Reis", category: "buffets", size: "large" },
  { src: couscousSalat, title: "Couscous-Salat", category: "dips-salate", size: "large" },
  { src: buffetDipsBrot, title: "Dips & Brot Buffet", category: "buffets", size: "large" },
  { src: buffetModernSideboard, title: "Buffet Workshop", category: "buffets", size: "large" },
  { src: fleischFladenbrot, title: "Fleisch mit Fladenbrot", category: "buffets", size: "large" },
  { src: buffetMeetEat2, title: "Meet & Eat Buffet", category: "buffets", size: "large" },
  { src: buffetSalateLampen, title: "Buffet 25 Personen", category: "buffets", size: "large" },
  // New images
  { src: meetingCatering15, title: "Meeting Catering 15 Personen", category: "buffets", size: "large" },
  { src: kundenbesuchCatering, title: "Kundenbesuch Catering", category: "buffets", size: "large" },
  { src: workshopCatering, title: "Workshop Catering", category: "buffets", size: "large" },
  { src: kafkaHauptspeise, title: "Kafka Hauptspeise", category: "buffets", size: "medium" },
  { src: couscousReis, title: "Couscous und Reis", category: "buffets", size: "medium" },
  { src: officeCatering40, title: "Office Catering 40 Personen", category: "buffets", size: "large" },
  { src: konferenzBuffet501, title: "Konferenz Buffet 50 Personen", category: "buffets", size: "large" },
  { src: konferenzBuffet502, title: "Konferenz Buffet 50 Personen", category: "buffets", size: "large" },
  { src: auberginencreme, title: "Auberginencreme", category: "dips-salate", size: "large" },
  { src: kichererbsenSalatBuffet, title: "Kichererbsen Salat Buffet", category: "dips-salate", size: "large" },
  { src: taboulehBuffet, title: "Tabouleh Salat Buffet", category: "dips-salate", size: "large" },
  { src: fattoushBuffet, title: "Fattousch Salat Buffet", category: "dips-salate", size: "large" },
  { src: babaGanoushBuffet, title: "Baba Ghanousch Buffet", category: "dips-salate", size: "large" },
  { src: hummusBuffetNew, title: "Hummus Buffet", category: "dips-salate", size: "large" },
  { src: geburtstagsbuffet90, title: "Geburtstagsbuffet 90 Personen", category: "buffets", size: "large" },
  { src: entrecote, title: "Entrecote", category: "buffets", size: "medium" },
  { src: haehnchenfleisch, title: "Gebratenes Hähnchenfleisch", category: "buffets", size: "medium" },
  { src: ofenkartoffeln, title: "Ofenkartoffeln", category: "buffets", size: "medium" },
  { src: arabischerReisGemuese, title: "Arabischer Reis mit Gemüse", category: "buffets", size: "medium" },
  { src: geburtstagsbuffetHauptgang, title: "Geburtstagsbuffet Hauptgang", category: "buffets", size: "large" },
  { src: fruehstueckBrot1, title: "Event Fingerfood", category: "fingerfood", size: "medium" },
  { src: fruehstueckBrot2, title: "Event Fingerfood", category: "fingerfood", size: "medium" },
  { src: eventFingerfood1, title: "Event Fingerfood", category: "fingerfood", size: "medium" },
  { src: eventFingerfood2, title: "Event Fingerfood", category: "fingerfood", size: "medium" },
  { src: eventFingerfood3, title: "Event Fingerfood", category: "fingerfood", size: "medium" },
  { src: eventFingerfood4, title: "Event Fingerfood", category: "fingerfood", size: "medium" },
  { src: eventFingerfood5, title: "Event Fingerfood", category: "fingerfood", size: "medium" },
  { src: eventFingerfood6, title: "Event Fingerfood", category: "fingerfood", size: "medium" },
  { src: dessertVegan1, title: "Dessert vegan", category: "fingerfood", size: "medium" },
  { src: dessertVegan2, title: "Dessert vegan", category: "fingerfood", size: "medium" },
  // New dips - Einwegschalen
  { src: arabischerFrischkaese, title: "Arabischer Frischkäse", category: "dips-salate", size: "medium" },
  { src: babaGhanouschSchale, title: "Baba Ghanousch", category: "dips-salate", size: "medium" },
  { src: taboulehSchale, title: "Tabouleh", category: "dips-salate", size: "medium" },
  // New fingerfood - Einwegschalen & Fladenbrote
  { src: lahmacunSchale, title: "Lahmacun", category: "fingerfood", size: "medium" },
  { src: miniFladenbrotHackfleisch, title: "Mini-Fladenbrot mit Hackfleisch", category: "fingerfood", size: "medium" },
  { src: miniFladenbrotPaprikaSpinat, title: "Mini-Fladenbrot Paprika & Spinat", category: "fingerfood", size: "medium" },
  { src: miniFladenbrotThymian, title: "Mini-Fladenbrot mit Thymian", category: "fingerfood", size: "medium" },
];

const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "Alle", icon: <Grid3X3 className="w-4 h-4" /> },
  { id: "dips-salate", label: "Dips & Salate", icon: <Utensils className="w-4 h-4" /> },
  { id: "fingerfood", label: "Fingerfood & Gebäck", icon: <Utensils className="w-4 h-4" /> },
  { id: "buffets", label: "Buffets", icon: <Utensils className="w-4 h-4" /> },
];

const CateringGallery = () => {
  const { setMode } = useSiteMode();
  const isMobile = useMobileDetection();
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [shuffledImages, setShuffledImages] = useState<GalleryImage[]>([]);
  
  // Number of images to show initially (3 on mobile, 8 on desktop)
  const initialCount = isMobile ? 3 : 8;

  useEffect(() => {
    setMode("catering");
    setIsLoaded(true);
    
    // Shuffle images on initial load
    const shuffled = [...galleryImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, [setMode]);

  // Reset showAll when category changes
  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  const filteredImages = selectedCategory === "all" 
    ? shuffledImages 
    : shuffledImages.filter(img => img.category === selectedCategory);
  
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, initialCount);
  const hasMoreImages = filteredImages.length > initialCount;

  const openLightbox = (index: number) => {
    // Find the actual index in filteredImages for navigation
    const actualIndex = filteredImages.indexOf(displayedImages[index]);
    setSelectedImage(actualIndex);
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
      <SEOHead
        title="Galerie | Sattuni Catering Düsseldorf"
        description="Bowls, Dips & Buffets: Einblicke in unser Catering. Bilder von echten Events in Düsseldorf."
        canonicalUrl="https://sattuni.de/catering/galerie"
        ogImage="https://sattuni.de/sattuni_logo.jpg"
      />

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
              Ein Blick in <span className="text-primary">unsere Arbeit</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Hier bekommt ihr einen Einblick in unsere Küche und unsere Buffets – direkt von unseren Events. Ungestellt, unverfälscht und genau so, wie es vor Ort aussieht.
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
            {displayedImages.map((image, index) => (
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

          {/* Show More Button */}
          {hasMoreImages && !showAll && (
            <div className="flex justify-center mt-10">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(true)}
                className="gap-2 group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <span>Mehr anzeigen</span>
                <span className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                  ({filteredImages.length - initialCount} weitere)
                </span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </Button>
            </div>
          )}

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">Keine Bilder in dieser Kategorie gefunden.</p>
            </div>
          )}
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Headline */}
            <p className="text-sm uppercase tracking-[0.2em] text-primary/70 mb-6 text-center font-medium">
              Einfach oder elegant
            </p>
            
            {/* Main Statement */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight text-center mb-12">
              Kein Event ist wie das andere –{" "}
              <span className="block mt-2 font-medium text-primary">
                und genau so kochen wir.
              </span>
            </h2>
            
            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Manche Anlässe brauchen es <span className="text-foreground font-medium">unkompliziert und praktisch</span>. 
                  Andere wünschen sich es elegant, mit Porzellan, Chafing Dishes und liebevollen Details.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wir richten unser Essen immer nach <span className="text-foreground font-medium">Anlass, Raum und Wunsch</span> aus – 
                  vom einfachen Setup bis zum stilvollen Buffet.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Auch <span className="text-foreground font-medium">individuelle Speisenwünsche</span> setzen wir gerne um.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Und bei Kunden, die wir regelmäßig begleiten, entsteht oft mehr als nur Catering: 
                  <span className="text-foreground font-medium"> feste Preise, wechselnde Menüs</span> und eine Zusammenarbeit auf Augenhöhe, 
                  die mit Vertrauen wächst.
                </p>
              </div>
            </div>
            
            {/* Closing tagline */}
            <div className="text-center pt-6 border-t border-primary/10">
              <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
                So flexibel wie euer Anlass
              </p>
            </div>
          </div>
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
