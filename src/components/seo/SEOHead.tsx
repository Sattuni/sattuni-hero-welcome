import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogType?: "website" | "article" | "restaurant";
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  articlePublishedTime?: string;
  articleAuthor?: string;
  noIndex?: boolean;
}

/**
 * Reusable SEO component for consistent meta tags across all pages.
 * Implements Open Graph, Twitter Cards, and standard SEO tags.
 * 
 * IMPORTANT: og:image must be:
 * - Absolute URL (https://sattuni.de/...)
 * - PNG or JPG format
 * - 1200×630 pixels recommended
 * - Publicly accessible (HTTP 200)
 */
const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = "website",
  ogTitle,
  ogDescription,
  ogImage = "https://sattuni.de/sattuni_logo.jpg",
  ogImageWidth = "1200",
  ogImageHeight = "630",
  articlePublishedTime,
  articleAuthor = "Sattuni",
  noIndex = false,
}: SEOHeadProps) => {
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  // Ensure og:image is absolute URL
  const absoluteOgImage = ogImage.startsWith("http") 
    ? ogImage 
    : `https://sattuni.de${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;

  return (
    <Helmet>
      {/* Prerender Ready Marker - signals that SEO tags are set */}
      <meta name="prerender-ready" content="true" />
      
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sattuni Catering" />
      <meta property="og:locale" content="de_DE" />
      
      {/* og:image - always set with absolute URL */}
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:url" content={absoluteOgImage} />
      <meta property="og:image:secure_url" content={absoluteOgImage} />
      <meta property="og:image:type" content={absoluteOgImage.endsWith(".png") ? "image/png" : "image/jpeg"} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:image:alt" content={finalOgTitle} />

      {/* Article-specific tags */}
      {ogType === "article" && articlePublishedTime && (
        <>
          <meta property="article:published_time" content={articlePublishedTime} />
          <meta property="article:author" content={articleAuthor} />
          <meta property="article:section" content="Catering" />
        </>
      )}

      {/* Twitter/X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sattuni" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={absoluteOgImage} />
    </Helmet>
  );
};

export default SEOHead;
