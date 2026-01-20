import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import LazyImage from "@/components/common/LazyImage";
import { useSiteMode } from "@/contexts/SiteModeContext";
import workshopHeroImage from "@/assets/blog/workshop-minimal.jpg";
import mezzeHeroImage from "@/assets/blog/mezze-atmosphere.jpg";
import officeHeroImage from "@/assets/blog/office-atmosphere.jpg";
import veganHeroImage from "@/assets/blog/vegan-arabic-classics.jpg";

const Blog = () => {
  const { setMode } = useSiteMode();

  // Set catering mode on page load
  useEffect(() => {
    setMode('catering');
  }, [setMode]);

  // Blog-Posts
  const blogPosts = [
    {
      id: 4,
      slug: "vegane-arabische-klassiker",
      title: "5 vegane Klassiker der arabischen Küche, die jedes Team liebt",
      excerpt: "Keine Experimente – bewährte Lieblingsgerichte: Falafel, Hummus, Baba Ghanoush, Taboulé und mehr. Perfekt für inklusives Team-Catering.",
      date: "2026-01-20",
      readTime: "6 min",
      image: veganHeroImage,
      category: "Veganes Catering"
    },
    {
      id: 3,
      slug: "workshop-catering",
      title: "Workshop-Catering: So bleibt dein Team den ganzen Tag fokussiert",
      excerpt: "Erfahre, wie gutes Workshop-Catering die Produktivität steigert. Praktische Tipps für Pausenverpflegung, Timing und Menüauswahl – frisch, leicht & energiereich.",
      date: "2026-01-14",
      readTime: "7 min",
      image: workshopHeroImage,
      category: "Catering"
    },
    {
      id: 2,
      slug: "was-bedeutet-mezze",
      title: "Was bedeutet eigentlich Mezze? Warum Teilen und Genießen der wahre Geschmack der arabischen Küche ist",
      excerpt: "Erfahre, was Mezze bedeutet und wie Sattuni das arabische Prinzip des Teilens in moderne Küche bringt. Frisch, hausgemacht und perfekt für private und geschäftliche Anlässe.",
      date: "2025-10-23",
      readTime: "6 min",
      image: mezzeHeroImage,
      category: "Arabische Küche"
    },
    {
      id: 1,
      slug: "buero-lunch-ideen",
      title: "10 kreative Büro-Lunch-Ideen – wenn ihr keine Lust mehr auf Pizza & Pasta habt",
      excerpt: "Schluss mit Pizza & Pasta! Entdeckt kreative Büro-Lunch-Ideen und orientalische Catering-Inspirationen von Sattuni – frisch, hausgemacht & perfekt fürs Team.",
      date: "2025-10-01",
      readTime: "8 min",
      image: officeHeroImage,
      category: "Catering"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Sattuni | Geschichten, Rezepte & Einblicke</title>
        <meta name="description" content="Entdecke Geschichten, Rezepte und Einblicke aus unserer Küche. Erfahre mehr über syrische Kulinarik und unsere Events." />
        <meta name="keywords" content="Sattuni Blog, arabische Küche, syrische Rezepte, Catering Düsseldorf, Mezze, orientalische Küche" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <ModeHeader />
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 overflow-hidden pt-24 md:pt-32">
          <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Sattuni Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Geschichten, Rezepte & Einblicke aus unserer Küche
              </p>
            </div>
          </div>
        </section>

        {/* Willkommenstext */}
        <section className="py-8 md:py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground">
                Willkommen auf unserem Blog! Hier teilen wir mit dir die Geschichten hinter unseren Gerichten, 
                geben Einblicke in die arabische Küche und teilen Tipps rund um Catering und Events.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-8 md:py-16 px-4 bg-gradient-subtle">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <a href={`/catering/blog/${post.slug}`} className="block" key={post.id}>
                  <Card 
                    key={post.id}
                    className="group hover:shadow-elegant transition-all duration-300 overflow-hidden border-border/50 bg-card/95 backdrop-blur-sm h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <LazyImage
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-[0.7] contrast-[0.9] brightness-[0.95]"
                      />
                      {/* Stronger overlay to soften AI-generated look */}
                      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/10 to-primary/15 mix-blend-overlay"></div>
                      <div className="absolute inset-0 bg-foreground/10"></div>
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('de-DE', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between group/btn"
                      >
                        <span>Weiterlesen</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section (Optional - Platzhalter) */}
        <section className="py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-card border-primary/20 overflow-hidden shadow-elegant">
              <CardContent className="p-8 md:p-12 text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Bleib auf dem Laufenden
                </h2>
                <p className="text-muted-foreground">
                  Erhalte regelmäßig Updates zu neuen Blog-Artikeln, Rezepten und Events.
                </p>
                <Button 
                  size="lg" 
                  disabled
                  className="mt-4"
                >
                  Newsletter abonnieren (Coming Soon)
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
