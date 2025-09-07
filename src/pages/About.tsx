import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, BookOpen } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroAbout})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Über uns
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Mehr als satt: Wir sind Gastgeber.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Manifest */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-12 md:gap-16">
            
            {/* Mission */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Unsere Mission
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Unsere Mission? Düsseldorf mit den besten modernen arabischen Speisen zu versorgen – frisch, hausgemacht und voller Geschmack. Für die Mittagspause, das Dinner zuhause oder das nächste große Event.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Unsere Vision
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Wir wollen, dass Sattuni das erste ist, woran man in Düsseldorf denkt, wenn es um arabische Küche geht. Ein Ort, der verbindet – Nachbarschaft, Freunde, Teams. Wir bringen Levante-Flair mitten in die Stadt, auf jeden Tisch und in jedes Event.
                </p>
              </CardContent>
            </Card>

            {/* Manifest */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Unser Manifest
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Wir glauben: Essen macht mehr als satt. Es bringt Menschen zusammen, schafft Geschichten und sorgt für diese kleinen Momente, die hängen bleiben. Deshalb kochen wir frisch, machen unsere Teigtaschen selbst und nehmen uns Zeit für Qualität. Weil wir überzeugt sind: Das Beste entsteht nur, wenn's persönlich bleibt.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Lerne uns durch unsere Küche kennen.
          </h3>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => window.location.href = '/spezialitaeten'}
          >
            Unsere Spezialitäten entdecken
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;