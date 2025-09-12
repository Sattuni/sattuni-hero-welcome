import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, ChevronUp, ChevronDown, Map } from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useMobileDetection } from "@/hooks/useMobileDetection";
import sattunIcon from "@/assets/sattuni-icon.png";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMobileDetection();
  const { t } = useTranslation();
  
  const quickLinks = [
    { name: t('nav.specialties'), href: "/spezialitaeten" },
    { name: t('nav.catering'), href: "/catering" },
    { name: t('nav.about'), href: "/ueber-uns" },
    { name: t('nav.contact'), href: "#kontakt" },
  ];

  const cateringServices = t('footer.services', { returnObjects: true }) as string[];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-8 md:py-12 pb-24 md:pb-12">
        
        {/* Mobile Compact Header */}
        {isMobile && (
          <div className="md:hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <div className="flex items-center space-x-3">
                <img 
                  src={sattunIcon} 
                  alt="Sattuni Icon" 
                  className="h-8 w-8"
                />
                <div>
                  <span className="text-base font-semibold text-foreground font-display">sattuni</span>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-body">
                    {t('footer.contactInfo')}
                  </p>
                </div>
              </div>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
            
            {/* Always visible contact info on mobile */}
            <div className="pb-4 border-b border-border/30">
              <div className="flex items-center gap-6 text-sm">
                <a href="tel:021136180115" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  0211 36180115
                </a>
                <a href="mailto:info@sattuni.de" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  E-Mail
                </a>
              </div>
            </div>
            
            {/* Expandable Content */}
            <div className={`
              overflow-hidden transition-all duration-300 ease-out
              ${isExpanded 
                ? 'max-h-[800px] opacity-100 animate-accordion-down' 
                : 'max-h-0 opacity-0 animate-accordion-up'
              }
            `}>
              <div className="pt-6 space-y-8">
                
                {/* Brand Description */}
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed font-body text-sm">
                    {t('footer.description')}
                  </p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/sattuni_dus/reels/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href="https://maps.app.goo.gl/YK5P5qjdCFnFVM7B7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
                    >
                      <Map className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
                
                {/* Quick Links */}
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-foreground font-display">{t('footer.quickLinks')}</h4>
                  <nav className="grid grid-cols-2 gap-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors font-body text-sm py-1"
                        onClick={() => setIsExpanded(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                
                {/* Services */}
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-foreground font-display">{t('footer.cateringServices')}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {cateringServices.map((service) => (
                      <span key={service} className="text-muted-foreground font-body text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Full Contact Info */}
                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-foreground font-display">{t('footer.fullContact')}</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div className="font-body text-sm">
                        <div className="text-muted-foreground">{t('footer.addressLabel')}</div>
                        <div className="text-foreground">{t('footer.address')}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Legal Links */}
                <div className="flex flex-wrap gap-4 text-sm pt-4 border-t border-border/30">
                  <a href="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors font-body">
                    {t('footer.legalLinks.privacy')}
                  </a>
                  <a href="/impressum" className="text-muted-foreground hover:text-primary transition-colors font-body">
                    {t('footer.legalLinks.imprint')}
                  </a>
                  <a href="/agb" className="text-muted-foreground hover:text-primary transition-colors font-body">
                    {t('footer.legalLinks.terms')}
                  </a>
                </div>
                
                {/* Copyright */}
                <p className="text-xs text-muted-foreground font-body pb-4">
                  © 2024 Sattuni - Oriental Bowls & More. {t('footer.rights')}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Footer - unchanged */}
        <div className="hidden md:block">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src={sattunIcon} 
                  alt="Sattuni Icon" 
                  className="h-10 w-10"
                />
                <div>
                  <span className="text-lg font-semibold text-foreground font-display">sattuni</span>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-body">Oriental Bowls & More</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed font-body">
                {t('footer.description')}
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/sattuni_dus/reels/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://maps.app.goo.gl/YK5P5qjdCFnFVM7B7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
                >
                  <Map className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground font-display">{t('footer.quickLinks')}</h3>
              <nav className="flex flex-col space-y-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground font-display">{t('footer.cateringServices')}</h3>
              <ul className="space-y-3">
                {cateringServices.map((service) => (
                  <li key={service} className="text-muted-foreground font-body">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground font-display">{t('footer.contact')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="font-body">
                    <div className="text-sm text-muted-foreground">{t('footer.addressLabel')}</div>
                    <div className="text-foreground">{t('footer.address')}</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="font-body">
                    <div className="text-sm text-muted-foreground">{t('footer.phoneLabel')}</div>
                    <a href="tel:021136180115" className="text-foreground hover:text-primary transition-colors">
                      0211 36180115
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="font-body">
                    <div className="text-sm text-muted-foreground">{t('footer.emailLabel')}</div>
                    <a href="mailto:info@sattuni.de" className="text-foreground hover:text-primary transition-colors">
                      {t('footer.email')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-border/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground font-body">
                © 2024 Sattuni - Oriental Bowls & More. {t('footer.rights')}
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors font-body">
                  {t('footer.legalLinks.privacy')}
                </a>
                <a href="/impressum" className="text-muted-foreground hover:text-primary transition-colors font-body">
                  {t('footer.legalLinks.imprint')}
                </a>
                <a href="/agb" className="text-muted-foreground hover:text-primary transition-colors font-body">
                  {t('footer.legalLinks.terms')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
