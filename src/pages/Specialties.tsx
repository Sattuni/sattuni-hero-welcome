import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Header from "@/components/Header";
import FOMOElements from "@/components/FOMOElements";
import heroSpecialties from "@/assets/hero-specialties.jpg";
import dipsVorspeisen from "@/assets/dips-vorspeisen.jpg";
import dipsVorspeisen2 from "@/assets/dips-vorspeisen-2.jpg";
import dipsVorspeisen3 from "@/assets/dips-vorspeisen-3.jpg";
import dipsVorspeisen4 from "@/assets/dips-vorspeisen-4.jpg";
import falafelTeigtaschen from "@/assets/falafel-teigtaschen.jpg";
import falafelTeigtaschen2 from "@/assets/falafel-teigtaschen-2.jpg";
import falafelTeigtaschen3 from "@/assets/falafel-teigtaschen-3.jpg";
import falafelTeigtaschen4 from "@/assets/falafel-teigtaschen-4.jpg";
import bowlsHauptgerichte from "@/assets/bowls-hauptgerichte.jpg";
import bowlsHauptgerichte2 from "@/assets/bowls-hauptgerichte-2.jpg";
import bowlsHauptgerichte3 from "@/assets/bowls-hauptgerichte-3.jpg";
import bowlsHauptgerichte4 from "@/assets/bowls-hauptgerichte-4.jpg";
import { Utensils, Leaf, Truck, Calendar } from "lucide-react";

const Specialties = () => {
  const dipsImages = [dipsVorspeisen, dipsVorspeisen2, dipsVorspeisen3, dipsVorspeisen4];
  const falafelImages = [falafelTeigtaschen, falafelTeigtaschen2, falafelTeigtaschen3, falafelTeigtaschen4];
  const bowlsImages = [bowlsHauptgerichte, bowlsHauptgerichte2, bowlsHauptgerichte3, bowlsHauptgerichte4];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 pb-safe-mobile">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${heroSpecialties})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 drop-shadow-lg">
              Arabische Spezialitäten in Düsseldorf
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 font-body font-light drop-shadow-md">
              Frisch, hausgemacht & authentisch
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto drop-shadow-md">
              Von Hummus bis Falafel – entdecke die Levante-Küche bei Sattuni.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="hero" 
                className="font-display"
                onClick={() => window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank')}
              >
                Jetzt bestellen
              </Button>
              <Button size="xl" variant="hero-secondary" className="font-display">
                Catering anfragen
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Text */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                Willkommen in der Welt der arabischen Küche
              </h2>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4 font-body">
                <p>
                  Die arabische Küche ist voller Farben, Aromen und Geschichten. Bei Sattuni bringen wir dir diese 
                  lebendige Tradition täglich frisch und hausgemacht nach Düsseldorf.
                </p>
                <p className="text-primary font-semibold">
                  Entdecke arabische Küche Düsseldorf: authentisches Hummus, knusprige Falafel und 
                  vielfältiges arabisches Catering – ob vegan, vegetarisch oder mit Fleisch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category 1: Dips & Vorspeisen */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Unsere orientalischen Dips & Vorspeisen
                </h3>
                <div className="text-lg text-muted-foreground font-body">
                  <p>
                    Cremiger Hummus aus Kichererbsen, rauchiges Baba Ghanousch und frischer Tabouleh-Salat 
                    – täglich hausgemacht und mit warmem Pita-Brot serviert. Der perfekte Start in die 
                    arabische Geschmackswelt.
                  </p>
                </div>
                <Button className="mt-8 font-display" size="lg">
                  Jetzt probieren
                </Button>
              </div>
              <div className="order-first md:order-last">
                <Carousel className="w-full max-w-md mx-auto">
                  <CarouselContent>
                    {dipsImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <img 
                          src={image} 
                          alt={`Arabische Dips und Vorspeisen ${index + 1}`}
                          className="rounded-lg shadow-soft w-full h-80 object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Category 2: Falafel & Teigtaschen */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Carousel className="w-full max-w-md mx-auto">
                  <CarouselContent>
                    {falafelImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <img 
                          src={image} 
                          alt={`Knusprige Falafel und Teigtaschen ${index + 1}`}
                          className="rounded-lg shadow-soft w-full h-80 object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Knusprige Falafel & hausgemachte Teigtaschen
                </h3>
                <div className="text-lg text-muted-foreground font-body">
                  <p>
                    Knusprige Falafel aus Kichererbsen und Gewürzen – außen goldbraun, innen saftig. 
                    Dazu hausgemachte Teigtaschen mit traditionellen Füllungen, täglich frisch zubereitet.
                  </p>
                </div>
                <Button className="mt-8 font-display" size="lg">
                  Zum Menü
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category 3: Bowls & Hauptgerichte */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Couscous Bowls & Hauptgerichte
                </h3>
                <div className="text-lg text-muted-foreground font-body">
                  <p>
                    Sättigende Couscous Bowls mit gegrilltem Gemüse, Kichererbsen und frischen Kräutern. 
                    Plus traditionelle Hauptgerichte – individuell anpassbar für dein Catering-Event.
                  </p>
                </div>
                <Button className="mt-8 font-display" size="lg">
                  Für dein Catering anfragen
                </Button>
              </div>
              <div className="order-first md:order-last">
                <Carousel className="w-full max-w-md mx-auto">
                  <CarouselContent>
                    {bowlsImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <img 
                          src={image} 
                          alt={`Couscous Bowls und Hauptgerichte ${index + 1}`}
                          className="rounded-lg shadow-soft w-full h-80 object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Special Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-16">
              Was unsere Küche besonders macht
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-8 text-center hover:shadow-soft transition-shadow">
                <Utensils className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  Hausgemacht
                </h4>
                <p className="text-muted-foreground font-body">
                  Jeden Tag frisch zubereitet mit traditionellen Rezepten und viel Liebe zum Detail.
                </p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-soft transition-shadow">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  Für jeden Geschmack
                </h4>
                <p className="text-muted-foreground font-body">
                  Vielfältige Auswahl: vegan, vegetarisch und mit Fleisch – jeder findet sein Lieblingsgericht.
                </p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-soft transition-shadow">
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  Lieferung & Catering
                </h4>
                <p className="text-muted-foreground font-body">
                  Schnelle Lieferung für den Alltag oder Catering für besondere Anlässe in Düsseldorf.
                </p>
              </Card>
              
              <Card className="p-8 text-center hover:shadow-soft transition-shadow">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                  Für jeden Anlass
                </h4>
                <p className="text-muted-foreground font-body">
                  Vom schnellen Mittagessen bis zur großen Feier – wir haben das passende Angebot.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Bereit für deine arabische Geschmacksreise?
            </h3>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto font-body">
              Egal ob kleiner Hunger oder große Feier – Sattuni bringt dir authentische 
              arabische Küche direkt nach Düsseldorf.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="hero" 
                className="font-display"
                onClick={() => window.open('https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=a1654ea9-73ac-4738-ac58-ca16dc332c65&client_is_mobile=true&return_url=https%3A%2F%2Fsattuni.de%2F', '_blank')}
              >
                Jetzt bestellen
              </Button>
              <Button size="xl" variant="hero-secondary" className="font-display">
                Catering anfragen
              </Button>
            </div>
          </div>
        </section>
      </main>
      <FOMOElements />
    </>
  );
};

export default Specialties;