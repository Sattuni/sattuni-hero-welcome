import sattuniLogoOrnate from "@/assets/sattuni-logo-ornate.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/80 backdrop-blur-sm border-t border-border/50 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Logo & Description */}
          <div className="space-y-6">
            <img 
              src={sattuniLogoOrnate} 
              alt="Sattuni - Oriental Bowls & More" 
              className="h-20 w-auto"
            />
            <p className="text-muted-foreground leading-relaxed">
              Authentische arabische Küche in Düsseldorf. Frisch zubereitet für Alltag und Events.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">0211 36180115</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">info@sattuni.de</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">Johannstraße 40<br />40476 Düsseldorf</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Unsere Services</h3>
            <div className="space-y-3">
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Lieferservice
              </div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Catering für Events
              </div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Orientalische Bowls
              </div>
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Vegane Optionen
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Sattuni. Alle Rechte vorbehalten.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="hover:text-foreground transition-colors cursor-pointer">
                Impressum
              </span>
              <span className="hover:text-foreground transition-colors cursor-pointer">
                Datenschutz
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;