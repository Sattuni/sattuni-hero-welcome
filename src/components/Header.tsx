import sattunIcon from "@/assets/sattuni-icon.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={sattunIcon} 
              alt="Sattuni Icon" 
              className="h-10 w-10 drop-shadow-sm"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-foreground">sattuni</span>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Oriental Bowls & More</p>
            </div>
          </div>
          
          {/* Navigation - Simple for now */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/spezialitaeten" className="text-muted-foreground hover:text-primary transition-colors">
              Spezialitäten
            </a>
            <a href="#bestellen" className="text-muted-foreground hover:text-primary transition-colors">
              Bestellen
            </a>
            <a href="/catering" className="text-muted-foreground hover:text-primary transition-colors">
              Catering
            </a>
            <a href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-muted-foreground hover:text-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;