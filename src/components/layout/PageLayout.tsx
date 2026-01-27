import { ReactNode, useEffect } from "react";
import ModeHeader from "@/components/layout/ModeHeader";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SEOHead from "@/components/seo/SEOHead";
import { useSiteMode, SiteMode } from "@/contexts/SiteModeContext";

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface PageLayoutProps {
  children: ReactNode;
  
  // SEO Props
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogType?: "website" | "article" | "restaurant";
  ogImage?: string;
  noIndex?: boolean;
  
  // Layout Options
  mode?: SiteMode;
  breadcrumbs?: BreadcrumbItem[];
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}

/**
 * Standardized page layout template ensuring:
 * - Semantic HTML structure (<main>)
 * - Consistent SEO meta tags
 * - Optional breadcrumb navigation
 * - Proper header/footer structure
 */
const PageLayout = ({
  children,
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = "website",
  ogImage,
  noIndex = false,
  mode = "catering",
  breadcrumbs,
  showHeader = true,
  showFooter = true,
  className = "",
}: PageLayoutProps) => {
  const { setMode } = useSiteMode();

  useEffect(() => {
    setMode(mode);
  }, [setMode, mode]);

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogType={ogType}
        ogImage={ogImage}
        noIndex={noIndex}
      />

      <div className={`min-h-screen bg-background ${className}`}>
        {showHeader && <ModeHeader />}

        <main className="pt-16">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumb items={breadcrumbs} />
          )}
          {children}
        </main>

        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default PageLayout;
