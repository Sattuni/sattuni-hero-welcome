import { Star } from "lucide-react";

interface GoogleReviewBadgeProps {
  variant?: "default" | "compact" | "minimal";
  className?: string;
  showSubtext?: boolean;
}

/**
 * Google Review Trust Badge
 * 
 * A unified, clickable trust indicator showing Google reviews.
 * Links to the official Google My Business profile.
 * 
 * Variants:
 * - default: Full badge with stars, rating, and Google logo
 * - compact: Smaller version for tight spaces
 * - minimal: Just rating and link, no stars display
 */
const GoogleReviewBadge = ({ 
  variant = "default", 
  className = "",
  showSubtext = true 
}: GoogleReviewBadgeProps) => {
  const googleMapsUrl = "https://maps.app.goo.gl/ZSm6ryTonfSNmNx5A?g_st=ic";

  // Google "G" logo as inline SVG for consistency
  const GoogleLogo = () => (
    <svg 
      viewBox="0 0 24 24" 
      className={variant === "compact" ? "w-3.5 h-3.5" : "w-4 h-4"}
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );

  const Stars = () => (
    <div className="flex" aria-label="4,9 von 5 Sternen">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${variant === "compact" ? "w-3 h-3" : "w-3.5 h-3.5"} fill-yellow-400 text-yellow-400`}
        />
      ))}
    </div>
  );

  if (variant === "minimal") {
    return (
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group ${className}`}
        aria-label="4,9 von 5 Sternen bei Google - Bewertungen ansehen"
      >
        <GoogleLogo />
        <span className="group-hover:underline underline-offset-2">4,9/5 bei Google</span>
      </a>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors group ${className}`}
        aria-label="4,9 von 5 Sternen bei Google - Bewertungen ansehen"
      >
        <Stars />
        <span className="font-medium text-foreground">4,9</span>
        <GoogleLogo />
      </a>
    );
  }

  // Default variant
  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group ${className}`}
      aria-label="4,9 von 5 Sternen bei Google - Bewertungen ansehen"
    >
      <div className="flex items-center gap-2">
        <Stars />
        <span className="text-sm font-medium text-foreground">4,9 von 5</span>
        <span className="text-sm">bei</span>
        <GoogleLogo />
      </div>
      {showSubtext && (
        <span className="text-xs text-muted-foreground group-hover:underline underline-offset-2">
          Google Bewertungen ansehen
        </span>
      )}
    </a>
  );
};

export default GoogleReviewBadge;
