import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  // Add Schema.org structured data for breadcrumbs
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://sattuni.de${item.href === '/' ? '' : item.href}`
      }))
    };

    const existingScript = document.querySelector('script[data-breadcrumb-schema]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb-schema', 'true');
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-breadcrumb-schema]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="bg-muted/30 py-3 px-4">
      <div className="container mx-auto">
        <ol className="flex items-center gap-2 text-sm">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
              )}
              {item.current ? (
                <span className="text-foreground font-medium flex items-center gap-2">
                  {index === 0 && <Home className="w-4 h-4" />}
                  {item.name}
                </span>
              ) : (
                <button
                  onClick={() => window.location.href = item.href}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  {index === 0 && <Home className="w-4 h-4" />}
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;