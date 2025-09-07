import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Utensils, Leaf, Sparkles, CheckCircle, Users, Clock, Heart, Phone, Mail, UtensilsCrossed, Salad, TreePine, Zap } from "lucide-react";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import CateringContact from "@/components/CateringContact";
import heroCatering from "@/assets/hero-catering.jpg";

const Catering = () => {
  const cateringServices = [
    {
      icon: UtensilsCrossed,
      title: "Fingerfood",
      description: "Perfekt für Events & Empfänge – kleine Häppchen, große Wirkung.",
    },
    {
      icon: Utensils, 
      title: "Buffets",
      description: "Vielfalt für alle – vom kleinen Lunch bis zum großen Fest.",
    },
    {
      icon: Salad,
      title: "Veggie & Vegan", 
      description: "Pflanzliche Köstlichkeiten, die jeden überzeugen.",
    },
    {
      icon: Zap,
      title: "Individuelle Menüs",
      description: "Maßgeschneidert für deinen Anlass und dein Budget.",
    },
  ];

  const usps = [
    {
      icon: Heart,
      title: "Hausgemacht & frisch",
      description: "Alles selbst gemacht, täglich frisch zubereitet",
    },
    {
      icon: Leaf,
      title: "Vielfalt für alle",
      description: "Fleisch, vegetarisch & vegan – für jeden Geschmack",
    },
    {
      icon: Users,
      title: "Flexibel: 20–500 Personen",
      description: "Kleine Runden bis große Feste",
    },
    {
      icon: Sparkles,
      title: "Mit Eventkompetenz",
      description: "PurEvent macht dein Event unvergesslich",
    },
  ];

  const processSteps = [
    {
      icon: Phone,
      title: "Anfragen",
      description: "Erzähl uns von deinem Event",
    },
    {
      icon: Mail,
      title: "Angebot erhalten", 
      description: "Maßgeschneidertes Angebot in 24h",
    },
    {
      icon: Heart,
      title: "Genießen",
      description: "Entspannt feiern, wir kümmern uns ums Essen",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroCatering} 
            alt="Sattuni Catering Setup" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Catering aus Düsseldorf – 
              <span className="block text-gradient bg-gradient-primary bg-clip-text text-transparent">
                frisch, orientalisch & für jeden Anlass
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Von Fingerfood bis Buffet, von Geburtstag bis Firmenfest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
                onClick={() => {
                  const element = document.getElementById('catering-kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Focus the first input after scrolling
                    setTimeout(() => {
                      const nameInput = document.getElementById('name');
                      nameInput?.focus();
                    }, 500);
                  }
                }}
              >
                Catering anfragen
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white/80 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary text-lg px-8 shadow-lg"
                onClick={() => window.location.href = '/spezialitaeten'}
              >
                Unsere Spezialitäten ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kurz-Intro */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Hausgemacht, frisch, flexibel – wir bringen arabische Küche zu dir. 
              <span className="text-primary font-medium"> Für private Feiern & Firmen-Events.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Catering Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unsere Catering-Angebote
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cateringServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-elegant">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Anfragen
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* PurEvent Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mehr als Catering – unsere Agentur 
              <span className="text-primary">PurEvent</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Für Firmenkunden machen wir Catering & Eventorganisation easy. 
              Persönlich, flexibel, mit Konzept.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                "Stressfrei & organisiert",
                "Persönliche Betreuung", 
                "Kleine Teams bis große Feste",
                "Mehr als Catering: Drinks & Programm"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="mt-8">
              <a href="https://purevent.de" target="_blank" rel="noopener noreferrer">
                Mehr über PurEvent
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Sattuni USPs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Warum Sattuni?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <usp.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{usp.title}</h3>
                <p className="text-muted-foreground">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Menus */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beispielmenüs
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Leichte Mahlzeit</h3>
                  <p className="text-3xl font-bold text-foreground">ab 27€ <span className="text-lg font-normal text-muted-foreground">pro Person</span></p>
                  <p className="text-muted-foreground">ab 20 Personen</p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Fattoush & Tabouleh Salate",
                    "Hummus & Mutabal Dips", 
                    "Fatayer Teigtaschen",
                    "Kibbeh Bällchen",
                    "Hähnchen Shawarma",
                    "Orientalischer Couscous"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Große Feiern</h3>
                  <p className="text-3xl font-bold text-foreground">ab 37€ <span className="text-lg font-normal text-muted-foreground">pro Person</span></p>
                  <p className="text-muted-foreground">ab 50 Personen</p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Fattoush & Tabouleh Salate",
                    "Hummus, Mutabal & Muhammara",
                    "Fatayer & Sambousek", 
                    "Kibbeh & Falafel",
                    "Bulgur & Reis Beilagen",
                    "Lamm, Hähnchen & Fisch",
                    "Baklava Dessert"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground italic">
              Preise sind Richtwerte. Wir passen jedes Menü an Budget & Wünsche an.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              So einfach geht's
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Contact Form */}
      <CateringContact />
      
      {/* Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <Testimonials />
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ob Geburtstag, Hochzeit oder Firmenfeier – 
              <span className="text-primary block">wir machen euch satt.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => {
                  const element = document.getElementById('catering-kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Focus the first input after scrolling
                    setTimeout(() => {
                      const nameInput = document.getElementById('name');
                      nameInput?.focus();
                    }, 500);
                  }
                }}
              >
                Catering anfragen
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => window.location.href = '/spezialitaeten'}
              >
                Unsere Spezialitäten ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catering;