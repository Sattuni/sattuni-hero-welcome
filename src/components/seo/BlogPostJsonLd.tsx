import { useEffect } from "react";

interface BlogPostJsonLdProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}

/**
 * Injects BlogPosting JSON-LD structured data for blog articles.
 * This helps search engines understand the content and enables rich snippets.
 */
const BlogPostJsonLd = ({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName = "Sattuni",
}: BlogPostJsonLdProps) => {
  useEffect(() => {
    // Ensure absolute URLs
    const absoluteUrl = url.startsWith("http") ? url : `https://sattuni.de${url}`;
    const absoluteImageUrl = imageUrl.startsWith("http") 
      ? imageUrl 
      : `https://sattuni.de${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": description,
      "image": {
        "@type": "ImageObject",
        "url": absoluteImageUrl,
        "width": 1200,
        "height": 630
      },
      "url": absoluteUrl,
      "datePublished": datePublished,
      "dateModified": dateModified || datePublished,
      "author": {
        "@type": "Organization",
        "name": authorName,
        "url": "https://sattuni.de"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Sattuni - Oriental Bowls & More",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sattuni.de/sattuni_logo.jpg",
          "width": 600,
          "height": 600
        },
        "url": "https://sattuni.de"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": absoluteUrl
      },
      "inLanguage": "de-DE",
      "isAccessibleForFree": true
    };

    // Create or update script tag
    const scriptId = "blog-post-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(structuredData);

    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, url, imageUrl, datePublished, dateModified, authorName]);

  return null;
};

export default BlogPostJsonLd;
