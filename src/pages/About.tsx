import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, BookOpen, Sparkles, Users, ChefHat } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroAbout})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-16 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent/30 rounded-full blur-lg animate-pulse delay-500"></div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <div className="mb-8">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Über uns
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Mehr als satt: Wir sind <span className="text-primary font-semibold">Gastgeber</span>.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative h-24 bg-gradient-to-b from-background to-muted/20">
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        <svg className="absolute bottom-0 w-full h-12" viewBox="0 0 1440 48" fill="none">
          <path d="M0,48 C240,20 480,20 720,32 C960,44 1200,36 1440,20 L1440,48 Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      {/* Mission, Vision, Manifest */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/10 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Wer wir sind
            </h2>
            <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-16 lg:gap-20">
            
            {/* Mission */}
            <div className="group">
              <Card className="border-0 bg-gradient-to-br from-white via-white/95 to-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                <CardContent className="p-10 md:p-16 relative">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Target className="w-10 h-10 text-white" />
                        </div>
                        <div className="w-2 h-12 bg-gradient-primary rounded-full"></div>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Unsere Mission
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Unsere Mission? Düsseldorf mit den besten modernen arabischen Speisen zu versorgen – frisch, hausgemacht und voller Geschmack. Für die Mittagspause, das Dinner zuhause oder das nächste große Event.
                      </p>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                      <ChefHat className="w-32 h-32 text-primary/20 group-hover:text-primary/30 transition-colors duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Vision */}
            <div className="group">
              <Card className="border-0 bg-gradient-to-bl from-white via-white/95 to-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-secondary opacity-10 rounded-full blur-2xl transform -translate-x-8 -translate-y-8"></div>
                <CardContent className="p-10 md:p-16 relative">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center">
                      <Users className="w-32 h-32 text-secondary/20 group-hover:text-secondary/30 transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Heart className="w-10 h-10 text-white" />
                        </div>
                        <div className="w-2 h-12 bg-gradient-secondary rounded-full"></div>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Unsere Vision
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Wir wollen, dass Sattuni das erste ist, woran man in Düsseldorf denkt, wenn es um arabische Küche geht. Ein Ort, der verbindet – Nachbarschaft, Freunde, Teams. Wir bringen Levante-Flair mitten in die Stadt, auf jeden Tisch und in jedes Event.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Manifest */}
            <div className="group">
              <Card className="border-0 bg-gradient-to-br from-white via-white/95 to-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden relative">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full blur-2xl transform translate-x-8 translate-y-8"></div>
                <CardContent className="p-10 md:p-16 relative">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <BookOpen className="w-10 h-10 text-white" />
                        </div>
                        <div className="w-2 h-12 bg-gradient-accent rounded-full"></div>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Unser Manifest
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Wir glauben: Essen macht mehr als satt. Es bringt Menschen zusammen, schafft Geschichten und sorgt für diese kleinen Momente, die hängen bleiben. Deshalb kochen wir frisch, machen unsere Teigtaschen selbst und nehmen uns Zeit für Qualität. Weil wir überzeugt sind: Das Beste entsteht nur, wenn's persönlich bleibt.
                      </p>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                      <Sparkles className="w-32 h-32 text-accent/20 group-hover:text-accent/30 transition-colors duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
            <Sparkles className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-foreground leading-tight">
              Lerne uns durch unsere <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Küche</span> kennen.
            </h3>
            <Button 
              size="lg" 
              className="text-xl px-12 py-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-gradient-primary hover:bg-gradient-to-r hover:from-primary/90 hover:to-secondary/90"
              onClick={() => window.location.href = '/spezialitaeten'}
            >
              Unsere Spezialitäten entdecken
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;