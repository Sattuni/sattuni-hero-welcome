import { ReactNode, useEffect } from "react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";
import BlogPostJsonLd from "@/components/seo/BlogPostJsonLd";
import { useSiteMode } from "@/contexts/SiteModeContext";

interface BlogLayoutProps {
  children: ReactNode;
  
  // SEO Props
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage: string;
  publishedDate: string;
  
  // Article Meta
  readTime: string;
  category: string;
  
  // Hero
  heroImage: string;
  heroImageAlt: string;
  articleTitle: string;
}

/**
 * Standardized blog layout template ensuring:
 * - Semantic HTML structure (<main>, <article>, <header>, <section>)
 * - Consistent SEO meta tags with og:type=article
 * - BlogPosting JSON-LD structured data
 * - Proper heading hierarchy (H1)
 * - Breadcrumb navigation
 * - Accessible content structure
 */
const BlogLayout = ({
  children,
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  publishedDate,
  readTime,
  category,
  heroImage,
  heroImageAlt,
  articleTitle,
}: BlogLayoutProps) => {
  const { setMode } = useSiteMode();

  useEffect(() => {
    setMode("catering");
    window.scrollTo(0, 0);
  }, [setMode]);

  // Format date for display
  const formattedDate = new Date(publishedDate).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Ensure og:image is absolute URL
  const absoluteOgImage = ogImage.startsWith("http") 
    ? ogImage 
    : `https://sattuni.de${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogType="article"
        ogImage={absoluteOgImage}
        articlePublishedTime={publishedDate}
      />
      <BlogPostJsonLd
        title={articleTitle}
        description={description}
        url={canonicalUrl}
        imageUrl={absoluteOgImage}
        datePublished={publishedDate}
      />

      <div className="min-h-screen bg-gradient-hero">
        <ModeHeader />

        <main className="pt-20">
          {/* Breadcrumb Navigation */}
          <Breadcrumb
            items={[
              { name: "Startseite", href: "/" },
              { name: "Catering", href: "/catering" },
              { name: "Blog", href: "/catering/blog" },
              { name: articleTitle.substring(0, 40) + "...", href: "#", current: true },
            ]}
          />

          {/* Back Navigation */}
          <nav className="container mx-auto max-w-4xl px-4 py-4">
            <a
              href="/catering/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Zurück zur Blog-Übersicht"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Zurück zum Blog</span>
            </a>
          </nav>

          {/* Article */}
          <article className="pb-16">
            {/* Hero Header */}
            <header className="relative h-64 md:h-96 overflow-hidden mb-8">
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                <div className="container mx-auto max-w-4xl">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-4">
                    {category}
                  </span>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <time dateTime={publishedDate}>{formattedDate}</time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      <span>{readTime} Lesezeit</span>
                    </div>
                  </div>

                  {/* H1 Title - exactly one per page */}
                  <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                    {articleTitle}
                  </h1>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <section className="container mx-auto max-w-4xl px-4">
              <div className="prose prose-lg max-w-none">
                {children}
              </div>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogLayout;
