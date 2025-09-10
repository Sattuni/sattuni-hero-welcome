import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Clock } from "lucide-react";
import sattunIcon from "@/assets/sattuni-icon.png";

const Footer = () => {
  const quickLinks = [
    { name: "Spezialitäten", href: "/spezialitaeten" },
    { name: "Catering", href: "/catering" },
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  const cateringServices = [
    "Fingerfood",
    "Buffets", 
    "Vegane Optionen",
    "Firmen-Events",
    "Private Feiern"
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
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
              Authentische arabische Küche in Düsseldorf. 
              Frisch zubereitet für Alltag und besondere Anlässe.
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
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground font-display">Quick Links</h3>
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
            <h3 className="text-lg font-semibold text-foreground font-display">Catering Services</h3>
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
            <h3 className="text-lg font-semibold text-foreground font-display">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="font-body">
                  <div className="text-sm text-muted-foreground">Adresse</div>
                  <div className="text-foreground">Johannstraße 40, 40476 Düsseldorf</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="font-body">
                  <div className="text-sm text-muted-foreground">Telefon</div>
                  <a href="tel:021136180115" className="text-foreground hover:text-primary transition-colors">
                    0211 36180115
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="font-body">
                  <div className="text-sm text-muted-foreground">E-Mail</div>
                  <a href="mailto:info@sattuni.de" className="text-foreground hover:text-primary transition-colors">
                    info@sattuni.de
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="font-body">
                  <div className="text-sm text-muted-foreground">Öffnungszeiten</div>
                  <div className="text-foreground text-sm">
                    <div>Mo-Fr: 11:00 - 22:00</div>
                    <div>Sa-So: 12:00 - 22:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-body">
              © 2024 Sattuni - Oriental Bowls & More. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors font-body">
                Datenschutz
              </a>
              <a href="/impressum" className="text-muted-foreground hover:text-primary transition-colors font-body">
                Impressum
              </a>
              <a href="/agb" className="text-muted-foreground hover:text-primary transition-colors font-body">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;