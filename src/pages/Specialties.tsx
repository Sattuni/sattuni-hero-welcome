import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import heroSpecialties from "@/assets/hero-specialties.jpg";
import dipsVorspeisen from "@/assets/dips-vorspeisen.jpg";
import falafelTeigtaschen from "@/assets/falafel-teigtaschen.jpg";
import bowlsHauptgerichte from "@/assets/bowls-hauptgerichte.jpg";
import { Utensils, Leaf, Truck, Calendar } from "lucide-react";

const Specialties = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
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
              <Button size="xl" variant="hero" className="font-display">
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
              <div className="text-lg leading-relaxed text-muted-foreground space-y-6 font-body">
                <p>
                  Die arabische Küche ist wie ein buntes Mosaik – voller Farben, Aromen und Geschichten, 
                  die von Generation zu Generation weitergegeben werden. Bei Sattuni bringen wir dir diese 
                  lebendige Tradition direkt nach Düsseldorf.
                </p>
                <p>
                  Jedes Gericht wird täglich frisch und hausgemacht zubereitet. Ob vegan, vegetarisch oder 
                  mit Fleisch – unsere Speisen entstehen aus den besten Zutaten und viel Liebe zum Detail. 
                  Perfekt als schnelle Lieferung für den Alltag oder als Catering für besondere Momente.
                </p>
                <p className="text-primary font-semibold">
                  Entdecke arabische Küche Düsseldorf, authentisches Hummus, knusprige Falafel und 
                  unser vielfältiges arabisches Catering – alles hausgemacht und voller Geschmack.
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
                <div className="text-lg text-muted-foreground space-y-4 font-body">
                  <p>
                    Hier beginnt jede arabische Mahlzeit: mit cremigem Hummus, der täglich frisch 
                    aus Kichererbsen, Tahini und Olivenöl zubereitet wird. Dazu gesellt sich 
                    rauchiges Baba Ghanousch aus gegrillten Auberginen und der frische Tabouleh-Salat 
                    mit Petersilie, Tomaten und Bulgur.
                  </p>
                  <p>
                    Jeder Dip erzählt seine eigene Geschichte und wird mit warmem, hausgebackenem 
                    Pita-Brot serviert – der perfekte Start in die arabische Geschmackswelt.
                  </p>
                </div>
                <Button className="mt-8 font-display" size="lg">
                  Jetzt probieren
                </Button>
              </div>
              <div className="order-first md:order-last">
                <img 
                  src={dipsVorspeisen} 
                  alt="Arabische Dips und Vorspeisen - Hummus, Baba Ghanousch, Tabouleh"
                  className="rounded-lg shadow-soft w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category 2: Falafel & Teigtaschen */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={falafelTeigtaschen} 
                  alt="Knusprige Falafel und hausgemachte arabische Teigtaschen"
                  className="rounded-lg shadow-soft w-full h-80 object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-foreground mb-6">
                  Knusprige Falafel & hausgemachte Teigtaschen
                </h3>
                <div className="text-lg text-muted-foreground space-y-4 font-body">
                  <p>
                    Unsere Falafel sind kleine Kunstwerke – außen goldbraun und knusprig, 
                    innen saftig und voller Gewürze. Aus Kichererbsen, frischen Kräutern und 
                    einer geheimen Gewürzmischung entstehen diese veganen Köstlichkeiten.
                  </p>
                  <p>
                    Die hausgemachten Teigtaschen werden jeden Tag frisch gefüllt – ob mit 
                    würzigem Hackfleisch, cremigem Spinat-Käse oder anderen traditionellen 
                    Füllungen. Ein Biss und du schmeckst die Handwerkskunst.
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
                <div className="text-lg text-muted-foreground space-y-4 font-body">
                  <p>
                    Hier wird es richtig sättigend: Unsere Couscous Bowls vereinen das Beste 
                    der arabischen Küche in einer Schüssel. Fluffiger Couscous trifft auf 
                    gegrilltes Gemüse, würzige Kichererbsen und frische Kräuter.
                  </p>
                  <p>
                    Die Hauptgerichte reichen von traditionellen Eintöpfen bis zu modernen 
                    Interpretationen klassischer Rezepte. Jedes Gericht kann individuell 
                    angepasst werden – perfekt für dein nächstes Catering-Event.
                  </p>
                </div>
                <Button className="mt-8 font-display" size="lg">
                  Für dein Catering anfragen
                </Button>
              </div>
              <div className="order-first md:order-last">
                <img 
                  src={bowlsHauptgerichte} 
                  alt="Couscous Bowls und arabische Hauptgerichte"
                  className="rounded-lg shadow-soft w-full h-80 object-cover"
                />
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
              Egal ob kleiner Hunger oder große Feier – Sattuni bringt dir die Vielfalt der 
              arabischen Küche direkt nach Düsseldorf. Entdecke authentische Aromen, 
              hausgemachte Qualität und den Geschmack des Orients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" className="font-display">
                Jetzt bestellen
              </Button>
              <Button size="xl" variant="hero-secondary" className="font-display">
                Catering anfragen
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Specialties;