import { useEffect } from "react";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import LazyImage from "@/components/common/LazyImage";
import { useSiteMode } from "@/contexts/SiteModeContext";
import workshopHeroImage from "@/assets/blog/workshop-minimal.jpg";
import mezzeHeroImage from "@/assets/blog/mezze-atmosphere.jpg";
import officeHeroImage from "@/assets/blog/office-atmosphere.jpg";
import veganHeroImage from "@/assets/blog/vegan-arabic-classics.jpg";
import grossesBuffetImage from "@/assets/gallery/buffets/grosses-buffet-event.jpg";
import kundenbesuchHero from "@/assets/blog/kundenbesuch-hero.jpg";

const Blog = () => {
  const { setMode } = useSiteMode();

  useEffect(() => {
    setMode('catering');
    window.scrollTo(0, 0);
  }, [setMode]);

  const blogPosts = [
    {
      id: 5,
      slug: "veganes-office-buffet-veganuary",
      title: "140 Personen, 100 % vegan: Ein Office-Buffet im Veganuary",
      excerpt: "Ein Einblick in unser veganes Office-Buffet für 140 Personen. Von der Planung über die Herausforderungen bis zu unseren Learnings.",
      date: "2026-01-22",
      readTime: "8 min",
      image: grossesBuffetImage,
      category: "Veganes Catering"
    },
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
      id: 6,
      slug: "kundenbesuch-catering-abwechslung",
      title: "Jeden Tag was Neues: Catering für Kundenbesuche, das nicht langweilt",
      excerpt: "Mehrtägige Kundenbesuche, jeden Tag ein anderes Menü. Wie wir für einen Stammkunden 5-10 Tage am Stück abwechslungsreich beliefern.",
      date: "2025-12-15",
      readTime: "6 min",
      image: kundenbesuchHero,
      category: "Kundenbesuche"
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
      <SEOHead
        title="Blog - Sattuni | Geschichten, Rezepte & Einblicke aus unserer Küche"
        description="Entdecke Geschichten, Rezepte und Einblicke aus unserer Küche. Tipps zu Catering, arabischer Küche und Event-Verpflegung in Düsseldorf."
        keywords="Sattuni Blog, arabische Küche, syrische Rezepte, Catering Düsseldorf, Mezze, orientalische Küche, veganes Catering"
        canonicalUrl="https://sattuni.de/catering/blog"
        ogImage="https://sattuni.de/sattuni_logo.jpg"
      />

      <div className="min-h-screen bg-gradient-hero">
        <ModeHeader />
        
        <main className="pt-20">
          {/* Breadcrumb Navigation */}
          <Breadcrumb
            items={[
              { name: "Startseite", href: "/" },
              { name: "Catering", href: "/catering" },
              { name: "Blog", href: "/catering/blog", current: true }
            ]}
          />

          {/* Hero Section */}
          <header className="relative py-16 md:py-24 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" aria-hidden="true" />
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
          </header>

          {/* Introduction */}
          <section className="py-8 md:py-12 px-4" aria-labelledby="blog-intro">
            <div className="container mx-auto max-w-4xl">
              <p id="blog-intro" className="text-lg text-muted-foreground text-center leading-relaxed">
                Willkommen auf unserem Blog! Hier teilen wir mit dir die Geschichten hinter unseren Gerichten, 
                geben Einblicke in die arabische Küche und teilen Tipps rund um Catering und Events.
              </p>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-8 md:py-16 px-4 bg-gradient-subtle" aria-labelledby="blog-articles">
            <h2 id="blog-articles" className="sr-only">Alle Blogartikel</h2>
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="h-full">
                    <a href={`/catering/blog/${post.slug}`} className="block h-full">
                      <Card className="group hover:shadow-elegant transition-all duration-300 overflow-hidden border-border/50 bg-card/95 backdrop-blur-sm h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <LazyImage
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-[0.7] contrast-[0.9] brightness-[0.95]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/10 to-primary/15 mix-blend-overlay" aria-hidden="true" />
                          <div className="absolute inset-0 bg-foreground/10" aria-hidden="true" />
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        
                        <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" aria-hidden="true" />
                              <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('de-DE', { day: '2-digit', month: 'short', year: 'numeric' })}
                              </time>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" aria-hidden="true" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-muted-foreground line-clamp-2 flex-1">
                            {post.excerpt}
                          </p>
                          
                          <Button 
                            variant="ghost" 
                            className="w-full justify-between group/btn mt-auto"
                            tabIndex={-1}
                          >
                            <span>Weiterlesen</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                          </Button>
                        </CardContent>
                      </Card>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-12 md:py-16 px-4" aria-labelledby="newsletter-heading">
            <div className="container mx-auto max-w-4xl">
              <Card className="bg-card border-primary/20 overflow-hidden shadow-elegant">
                <CardContent className="p-8 md:p-12 text-center space-y-4">
                  <h2 id="newsletter-heading" className="text-2xl md:text-3xl font-bold text-foreground">
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
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
